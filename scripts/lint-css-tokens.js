#!/usr/bin/env node

/* eslint-disable no-console, @typescript-eslint/no-var-requires */

/**
 * Проверяет ссылки var(--...) в исходных .module.css вертикалей.
 * Имена CSS-переменных должны начинаться с --.
 * Переменная должна быть объявлена в светлой и тёмной темах пакета
 * либо локально в том же CSS-модуле.
 */

const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const postcss = require('postcss');
const valueParser = require('postcss-value-parser');

const rootDir = path.resolve(__dirname, '..');
const sddsThemesDir = path.join(rootDir, 'packages/themes/sdds-themes/src/css');
const customPropertyName = /^--[a-zA-Z_][a-zA-Z0-9_-]*$/;
const vendorPropertyName = /^-(?:webkit|moz|ms|o)-/;
const modes = ['dark', 'light'];
const themesByPackage = {
    'sdds-cs': { name: 'sdds_cs', directory: sddsThemesDir },
    'sdds-finai': { name: 'sdds_finai', directory: sddsThemesDir },
    'sdds-insol-next': { name: 'sdds_insol_next', directory: sddsThemesDir },
    'sdds-sbcom': {
        name: 'sdds_sbcom',
        directory: path.join(
            path.dirname(
                require.resolve('@salutejs-ds/sdds_sbcom/package.json', {
                    paths: [path.join(rootDir, 'packages/sdds-sbcom')],
                }),
            ),
            'css',
        ),
    },
};
const excludedPackages = new Set(['plasma-new-hope', 'plasma-tokens']);

const getPackageName = (file) => {
    const relativePath = path.relative(rootDir, file).split(path.sep).join('/');
    const match = relativePath.match(/^packages\/([^/]+)\/src\/.*\.module\.css$/);

    return match?.[1];
};

const getThemeTokens = ({ name, directory }) => {
    const tokensByMode = new Map();

    for (const mode of modes) {
        const themeFile = path.join(directory, `${name}__${mode}.css`);
        const css = fs.readFileSync(themeFile, 'utf8');
        // Generated theme assets can contain non-CSS text, so extract only declaration names.
        const tokens = new Set([...css.matchAll(/^[ \t]*(--[a-zA-Z0-9_-]+)[ \t]*:/gm)].map((match) => match[1]));

        if (tokens.size === 0) {
            throw new Error(`No CSS tokens found in ${themeFile}`);
        }

        tokensByMode.set(mode, tokens);
    }

    return tokensByMode;
};

const getVarArgument = (node) => {
    const commaIndex = node.nodes.findIndex((part) => part.type === 'div' && part.value === ',');
    const firstArgument = commaIndex === -1 ? node.nodes : node.nodes.slice(0, commaIndex);
    const meaningfulNodes = firstArgument.filter((part) => part.type !== 'space' && part.type !== 'comment');

    return meaningfulNodes.length === 1 && meaningfulNodes[0].type === 'word' ? meaningfulNodes[0] : null;
};

const getNodeLine = (declaration, node) => {
    const declarationText = declaration.toString();
    const valueOffset = declarationText.indexOf(declaration.value);
    const textBeforeNode = declarationText.slice(0, valueOffset + node.sourceIndex);

    return declaration.source.start.line + (textBeforeNode.match(/\n/g) || []).length;
};

const validateCss = (css, file, tokensByMode) => {
    const errors = [];
    let references = 0;
    const root = postcss.parse(css, { from: file });
    const localProperties = new Set();

    root.walkDecls((declaration) => {
        const { prop } = declaration;

        if (prop.startsWith('-') && !vendorPropertyName.test(prop) && !customPropertyName.test(prop)) {
            errors.push(`${file}:${declaration.source.start.line}: Invalid CSS variable ${prop}: expected --name`);
        }

        if (customPropertyName.test(prop)) {
            localProperties.add(prop);
        }
    });

    root.walkDecls((declaration) => {
        valueParser(declaration.value).walk((node) => {
            if (node.type !== 'function' || node.value.toLowerCase() !== 'var') {
                return;
            }

            references += 1;
            const argument = getVarArgument(node);
            const name = argument?.value;
            const line = getNodeLine(declaration, argument || node);

            if (!name || !customPropertyName.test(name)) {
                errors.push(`${file}:${line}: Invalid var() token ${name || '<missing>'}: expected --name`);
                return;
            }

            if (localProperties.has(name)) {
                return;
            }

            const missingModes = [...tokensByMode].filter(([, tokens]) => !tokens.has(name)).map(([mode]) => mode);

            if (missingModes.length > 0) {
                errors.push(`${file}:${line}: Unknown theme token ${name} (${missingModes.join(', ')})`);
            }
        });
    });

    return { errors, references };
};

const main = (args) => {
    const files = args.length
        ? args.map((file) => path.resolve(file))
        : fg.sync('packages/*/src/**/*.module.css', { cwd: rootDir, absolute: true }).filter((file) => {
              return !excludedPackages.has(getPackageName(file));
          });
    const themeCache = new Map();
    const errors = [];
    let references = 0;

    for (const file of files) {
        const packageName = getPackageName(file);
        const theme = themesByPackage[packageName];

        if (!theme) {
            errors.push(`${file}: No theme mapping for this CSS module`);
        } else {
            try {
                if (!themeCache.has(packageName)) {
                    themeCache.set(packageName, getThemeTokens(theme));
                }

                const result = validateCss(fs.readFileSync(file, 'utf8'), file, themeCache.get(packageName));
                errors.push(...result.errors);
                references += result.references;
            } catch (error) {
                errors.push(`${file}:${error.line || 1}: ${error.reason || error.message}`);
            }
        }
    }

    if (errors.length > 0) {
        errors.forEach((error) => console.error(error));
        process.exitCode = 1;
        return;
    }

    console.log(`Checked ${files.length} CSS modules and ${references} var() references.`);
};

if (require.main === module) {
    main(process.argv.slice(2));
}

module.exports = { getThemeTokens, themesByPackage, validateCss };
