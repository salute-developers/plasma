import { cpus } from 'node:os';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import * as babelTypes from '@babel/types';
import { transform } from '@svgr/core';
import jsxPlugin from '@svgr/plugin-jsx';
import svgoPlugin from '@svgr/plugin-svgo';
import prettier from 'prettier';

const sizes = [16, 24, 36];
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const svgRoot = path.join(packageRoot, 'svg');
const factoryRoot = path.join(packageRoot, 'src');
const concurrency = Math.max(1, Math.min(cpus().length, 8));

const compareNames = (left, right) => {
    if (left < right) {
        return -1;
    }

    if (left > right) {
        return 1;
    }

    return 0;
};

const getPaintReplacements = (svg) => {
    const paintValues = [...svg.matchAll(/\b(?:fill|stroke)=["']([^"']+)["']/g)].map((match) => match[1]);

    return Object.fromEntries(
        [...new Set(paintValues)]
            .filter((value) => !['none', 'currentColor', 'transparent'].includes(value) && !value.startsWith('url('))
            .map((value) => [value, 'currentColor']),
    );
};

const createSvgDataUri = (svg) => {
    const encodedSvg = encodeURIComponent(svg.replace(/"/g, "'"))
        .replace(/%20/g, ' ')
        .replace(/%3D/g, '=')
        .replace(/%3A/g, ':')
        .replace(/%2F/g, '/');

    return `data:image/svg+xml,${encodedSvg}`;
};

const createTemplate = (size, maskImage) => (variables) => {
    const factoryName = babelTypes.identifier(`createIcon${size}`);
    const componentName = babelTypes.isIdentifier(variables.componentName)
        ? variables.componentName
        : babelTypes.identifier(String(variables.componentName));
    const content = babelTypes.jsxFragment(
        babelTypes.jsxOpeningFragment(),
        babelTypes.jsxClosingFragment(),
        variables.jsx.children,
    );
    const reactImport = babelTypes.importDeclaration(
        [babelTypes.importDefaultSpecifier(babelTypes.identifier('React'))],
        babelTypes.stringLiteral('react'),
    );
    const factoryImport = babelTypes.importDeclaration(
        [babelTypes.importSpecifier(babelTypes.cloneNode(factoryName), babelTypes.cloneNode(factoryName))],
        babelTypes.stringLiteral(`../createIcon${size}.js`),
    );
    const factoryCall = babelTypes.callExpression(babelTypes.cloneNode(factoryName), [
        content,
        babelTypes.stringLiteral(maskImage),
    ]);
    const componentDeclaration = babelTypes.variableDeclaration('const', [
        babelTypes.variableDeclarator(babelTypes.cloneNode(componentName), factoryCall),
    ]);

    reactImport.leadingComments = [{ type: 'CommentLine', value: ' This file is generated. Do not edit it manually.' }];
    factoryCall.leadingComments = [{ type: 'CommentBlock', value: ' @__PURE__ ' }];

    return [
        reactImport,
        factoryImport,
        babelTypes.exportNamedDeclaration(componentDeclaration),
        babelTypes.exportDefaultDeclaration(babelTypes.cloneNode(componentName)),
    ];
};

const generateIcon = async ({ fileName, inputDirectory, outputDirectory, size }) => {
    const iconName = path.basename(fileName, '.svg');
    const componentName = `${iconName}Icon`;

    if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(componentName)) {
        throw new Error(`SVG file name cannot be converted to a component name: ${fileName}`);
    }

    const svg = await fs.readFile(path.join(inputDirectory, fileName), 'utf8');
    const filePath = path.join(inputDirectory, fileName);
    const svgoConfig = {
        multipass: true,
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        convertColors: false,
                    },
                },
            },
        ],
    };
    const optimizedSvg = svgoPlugin(
        svg,
        {
            svgo: true,
            dimensions: false,
            svgoConfig,
        },
        { componentName, filePath },
    );
    const maskImage = createSvgDataUri(optimizedSvg);
    const component = await transform(
        svg,
        {
            plugins: [svgoPlugin, jsxPlugin],
            typescript: true,
            jsxRuntime: 'classic',
            expandProps: false,
            dimensions: false,
            prettier: false,
            template: createTemplate(size, maskImage),
            replaceAttrValues: getPaintReplacements(svg),
            svgoConfig,
        },
        { componentName, filePath },
    );

    const formattedComponent = prettier.format(component, {
        parser: 'typescript',
        printWidth: 120,
        singleQuote: true,
        tabWidth: 4,
        trailingComma: 'all',
    });

    await fs.writeFile(path.join(outputDirectory, `${componentName}.tsx`), formattedComponent);

    return componentName;
};

const mapWithConcurrency = async (items, worker) => {
    const results = new Array(items.length);
    let nextIndex = 0;

    const runWorker = async () => {
        while (nextIndex < items.length) {
            const currentIndex = nextIndex;
            nextIndex += 1;
            results[currentIndex] = await worker(items[currentIndex]);
        }
    };

    await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runWorker));

    return results;
};

const generateSize = async (size, outputRoot) => {
    const inputDirectory = path.join(svgRoot, String(size));
    const outputDirectory = path.join(outputRoot, String(size));
    const directoryEntries = await fs.readdir(inputDirectory, { withFileTypes: true });
    const fileNames = directoryEntries
        .filter((entry) => entry.isFile() && path.extname(entry.name) === '.svg')
        .map((entry) => entry.name)
        .sort(compareNames);

    if (fileNames.length === 0) {
        throw new Error(`No SVG files found in ${inputDirectory}`);
    }

    await fs.mkdir(outputDirectory, { recursive: true });

    const componentNames = await mapWithConcurrency(fileNames, (fileName) =>
        generateIcon({ fileName, inputDirectory, outputDirectory, size }),
    );
    const barrel = [
        `// This file is generated from svg/${size}. Do not edit it manually.`,
        '',
        ...componentNames.map((componentName) => `export { ${componentName} } from './${componentName}.js';`),
        '',
    ].join('\n');

    await fs.writeFile(path.join(outputDirectory, 'index.ts'), barrel);

    const dynamicIconImports = [
        `// This file is generated from svg/${size}. Do not edit it manually.`,
        '',
        'const dynamicIconImports = {',
        ...componentNames.map(
            (componentName) => `    ${componentName}: () => import('./${componentName}.js'),`,
        ),
        '} as const;',
        '',
        'export default dynamicIconImports;',
        '',
    ].join('\n');
    const dynamicEntrypoint = [
        `// This file is generated from svg/${size}. Do not edit it manually.`,
        '',
        "export { DynamicIcon, DynamicIcon as default, iconNames, isIconName } from './DynamicIcon.js';",
        "export type { DynamicIconProps, IconName } from './DynamicIcon.js';",
        '',
    ].join('\n');

    await Promise.all([
        fs.writeFile(path.join(outputDirectory, 'dynamicIconImports.ts'), dynamicIconImports),
        fs.writeFile(path.join(outputDirectory, 'dynamic.ts'), dynamicEntrypoint),
        fs.copyFile(path.join(factoryRoot, 'DynamicIcon.tsx'), path.join(outputDirectory, 'DynamicIcon.tsx')),
    ]);

    return { size, count: componentNames.length };
};

const getIconNamesBySize = () =>
    Promise.all(
        sizes.map(async (size) => {
            const entries = await fs.readdir(path.join(svgRoot, String(size)));
            return entries.filter((entry) => entry.endsWith('.svg')).sort(compareNames);
        }),
    );

const validateIconSets = async () => {
    const iconNamesBySize = await getIconNamesBySize();
    const referenceNames = iconNamesBySize[0];

    for (let index = 1; index < iconNamesBySize.length; index += 1) {
        if (referenceNames.join('\n') !== iconNamesBySize[index].join('\n')) {
            throw new Error(`Icon sets for sizes ${sizes[0]} and ${sizes[index]} are different`);
        }
    }
};

const copyFactories = (outputRoot) =>
    Promise.all([
        fs.copyFile(path.join(factoryRoot, 'createIcon.tsx'), path.join(outputRoot, 'createIcon.tsx')),
        ...sizes.map((size) =>
            fs.copyFile(path.join(factoryRoot, `createIcon${size}.tsx`), path.join(outputRoot, `createIcon${size}.tsx`)),
        ),
    ]);

export const generateIcons = async ({ outputRoot }) => {
    const resolvedOutputRoot = path.resolve(outputRoot);
    const packageRootWithSeparator = `${packageRoot}${path.sep}`;

    if (!resolvedOutputRoot.startsWith(packageRootWithSeparator)) {
        throw new Error(`Generated output must be inside the package: ${resolvedOutputRoot}`);
    }

    const temporaryRoot = `${resolvedOutputRoot}-${process.pid}`;
    await fs.rm(temporaryRoot, { recursive: true, force: true });

    try {
        await validateIconSets();
        await fs.mkdir(temporaryRoot, { recursive: true });

        const generatedSizes = [];

        for (const size of sizes) {
            generatedSizes.push(await generateSize(size, temporaryRoot));
        }

        await copyFactories(temporaryRoot);
        await fs.rm(resolvedOutputRoot, { recursive: true, force: true });
        await fs.rename(temporaryRoot, resolvedOutputRoot);

        const total = generatedSizes.reduce((sum, item) => sum + item.count, 0);
        console.log(`Generated ${total} React icon modules (${generatedSizes.map((item) => `${item.count}×${item.size}`).join(', ')}).`);
    } finally {
        await fs.rm(temporaryRoot, { recursive: true, force: true });
    }
};
