const path = require('path');
const { ensureDir, writeJson, readJson } = require('fs-extra');

const { npm_config_package: npmConfigPackage } = process.env || {};

// INFO: Добавляем зависимости для пакета документации
// например, npm run scaffold:docs --package="sdds-serv" --themes="sdds"
// добавит пакеты: "@salutejs/sdds-serv" и "@salutejs/sdds-themes"
const main = async (packageName) => {
    if (!packageName) {
        return;
    }

    const cwd = process.cwd();

    const packageDocsDir = path.join(cwd, `website/${packageName}-docs/`);
    const packageDir = path.join(cwd, `packages/${packageName}/`);

    try {
        ensureDir(packageDocsDir);

        ensureDir(packageDir);

        // INFO: Package.json for which documentation is being made
        const packageJSON = await readJson(`${packageDir}/package.json`);

        // INFO: Package.json documentation package
        const packageDocsJSON = await readJson(`${packageDocsDir}/package.json`);

        const [themesPackage, version] = Object.entries(packageJSON.dependencies).find(([key, value]) => {
            if (key.includes('-themes')) {
                return [key, value];
            }
        });

        packageDocsJSON.dependencies = {
            ...packageDocsJSON.dependencies,
            [packageJSON.name]: packageJSON.version,
            [themesPackage]: version,
        };

        writeJson(`${packageDocsDir}/package.json`, packageDocsJSON, { spaces: 2 });
    } catch (err) {
        console.log(err);
    }
};

main(npmConfigPackage);
