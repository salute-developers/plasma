const { Scaffold } = require('simple-scaffold');
const path = require('path');
const { ensureDir } = require('fs-extra');
const { readdir, rename } = require('node:fs/promises');
const fg = require('fast-glob');

const META = require('../.github/meta.js');
const POSTFIX = 'stories.template.tsx';

async function main() {
    const packages = [];
    const { npm_config_package: npmConfigPackage, npm_config_components: npmConfigComponents } = process.env || {};

    const cwd = process.cwd();

    if (!npmConfigPackage) {
        const blackList = ['plasma-new-hope', 'plasma-ui', 'plasma-asdk'];

        const list = Object.keys(META).filter((key) => !blackList.includes(key));

        packages.push(...list);
    } else {
        packages.push(npmConfigPackage);
    }

    const storyTemplateDir = path.join(cwd, 'packages/plasma-new-hope/src/components');

    for await (const lib of packages) {
        try {
            const libDir = path.join(cwd, `packages/${lib}/src/components`);

            await ensureDir(libDir);

            const components = npmConfigComponents
                ? npmConfigComponents.split(',').map((component) => component?.trim())
                : await readdir(libDir);

            for await (const componentName of components) {
                const [firstLetter, ...rest] = [...componentName];
                const component = `${firstLetter.toUpperCase()}${rest.join('')}`;

                const templates = await fg(`${storyTemplateDir}/**/${component}.${POSTFIX}`);

                const output = path.join(cwd, `packages/${lib}/src/components/${component}`);

                await Scaffold({
                    name: '',
                    templates,
                    output,
                });

                await rename(`${output}/${component}.${POSTFIX}`, `${output}/${component}.stories.tsx`);
            }
        } catch (err) {
            console.error(`The package: "${npmConfigPackage}" not exists`);

            process.exit(1);
        }
    }
}

main();
