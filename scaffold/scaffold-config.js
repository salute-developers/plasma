const { ensureDir } = require('fs-extra');
const path = require('path');

//INFO: Инициализация директории с документацией по шаблону директории `template-docs`
module.exports = async () => {
    const {
        npm_config_vertical: npmConfigVertical = '',
        npm_config_theme: npmConfigTheme = '',
        npm_config_url: npmConfigUrl = '',
        npm_config_package: npmConfigPackage,
    } = process.env || {};

    const packageDir = path.join(process.cwd(), `packages/${npmConfigPackage}`);

    try {
        await ensureDir(packageDir);

        return {
            default: {
                templates: ['scaffold/template-docs/'],
                output: 'website/{{name}}-docs',
                quiet: true,
                data: {
                    vertical: npmConfigVertical,
                    theme: npmConfigTheme,
                    url: npmConfigUrl || npmConfigPackage,
                },
            },
        };
    } catch (err) {
        console.error(`The package: "${npmConfigPackage}" not exists`);

        process.exit(1);
    }
};
