const { Scaffold } = require('simple-scaffold');
const path = require('path');
const { ensureDir } = require('fs-extra');
const { readdir } = require('node:fs/promises');

// INFO: Создание списка компонентов из пакета для которого создается документация
async function main() {
    const { npm_config_package: npmConfigPackage } = process.env || {};

    if (!npmConfigPackage) {
        return;
    }

    const cwd = process.cwd();

    const packageDir = path.join(cwd, `packages/${npmConfigPackage}/src/components`);

    try {
        await ensureDir(packageDir);

        const scaffoldOutputDir = path.join(cwd, `website/${npmConfigPackage}-docs/docs/components`);
        const scaffoldTemplateDir = path.join(cwd, 'scaffold/template-component');

        const files = await readdir(packageDir);

        for (const name of files) {
            await Scaffold({
                name,
                templates: [scaffoldTemplateDir],
                output: scaffoldOutputDir,
                data: { package: npmConfigPackage },
            });
        }
    } catch (err) {
        console.error(`The package: "${npmConfigPackage}" not exists`);

        process.exit(1);
    }
}

main();
