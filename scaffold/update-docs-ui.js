const path = require('path');
const { ensureDir, writeJson, readJson } = require('fs-extra');

// INFO: Заменяем запись типа "file:../../utils/plasma-docs-ui"
// INFO: на версию которая указана в package.json пакета "@salutejs/plasma-docs-ui"
const main = async () => {
    const { npm_config_package: npmConfigPackage } = process.env || {};

    if (!npmConfigPackage) {
        return;
    }

    const cwd = process.cwd();

    const packageDir = path.join(cwd, `website/${npmConfigPackage}-docs/`);

    try {
        await ensureDir(packageDir);

        const packageJSONPath = `${packageDir}/package.json`;
        const packageJSON = await readJson(packageJSONPath);
        const plasmaDocsUiJson = await readJson(path.join(cwd, 'utils/plasma-docs-ui/package.json'));

        packageJSON.dependencies['@salutejs/plasma-docs-ui'] = plasmaDocsUiJson.version;

        writeJson(packageJSONPath, packageJSON, { spaces: 2 });
    } catch (err) {
        console.error(`The directory: "${packageDir}" not exists`);

        process.exit(1);
    }
};

main();
