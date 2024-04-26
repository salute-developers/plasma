const { Scaffold } = require('simple-scaffold');
const path = require('path');
const { ensureDir } = require('fs-extra');
const { readdir, rename } = require('node:fs/promises');
const fg = require('fast-glob');

// INFO: Генерация компонентов по шаблону и на основе списка компонентов на основе пакета
// INFO: для которого делается документация
async function main() {
    const { npm_config_package: npmConfigPackage, npm_config_vertical: npmConfigVertical } = process.env || {};

    if (!npmConfigPackage) {
        return;
    }

    const cwd = process.cwd();

    const packageDir = path.join(cwd, `packages/${npmConfigPackage}/src/components`);
    const componentsTemplateDir = path.join(cwd, `packages/plasma-new-hope/src/components`);
    const outputDir = path.join(cwd, `website/${npmConfigPackage}-docs/docs/components`);
    const postfix = 'template-doc.mdx';

    try {
        await ensureDir(packageDir);

        // INFO: Получаем актуальный список директорий компонентов
        // например ['AutoComplete','Avatar','AvatarGroup','Badge','Button','ButtonGroup','Cell']
        const components = await readdir(packageDir);

        // INFO: Собираем шаблоны документации для компонентов
        // [
        //  plasma/packages/plasma-new-hope/src/components/Counter/Counter.template-doc.mdx,
        //  plasma/packages/plasma-new-hope/src/components/Combobox/Combobox.template-doc.mdx,
        // ]
        const templates = await fg(`${componentsTemplateDir}/**/*.${postfix}`);

        // INFO: Собираем шаблоны только для существующих в этом пакете компонентов
        const data = templates.reduce((acc, template) => {
            const [path] = template.split('.');
            const slugs = path.split('/').reverse();
            const component = slugs[0];

            if (components.includes(component)) {
                return {
                    ...acc,
                    [component]: template,
                };
            }

            return acc;
        }, {});

        // INFO: Генерируем документацию для компонентов по полученным шаблонам
        await Scaffold({
            name: '',
            templates: Object.values(data),
            output: outputDir,
            data: { package: npmConfigPackage, vertical: npmConfigVertical },
        });

        for (const component of Object.keys(data)) {
            // INFO: переименовываем файл документации
            // например Button.docs.mdx ==> Button.mdx
            await rename(`${outputDir}/${component}.${postfix}`, `${outputDir}/${component}.mdx`);
        }
    } catch (err) {
        console.error(`The package: "${npmConfigPackage}" not exists`);

        process.exit(1);
    }
}

main();
