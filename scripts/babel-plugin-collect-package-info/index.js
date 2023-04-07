/* eslint-disable @typescript-eslint/no-var-requires */
const paths = require('path');
const glob = require('fast-glob');

const getExportPathsFromIndex = require('./getExportPathsFromIndex');
const collectImport = require('./collectImport');

const pathToIndex = 'src/components/*/index.*';
const indexFiles = glob.sync(pathToIndex);
const exportPaths = getExportPathsFromIndex(indexFiles);

module.exports = ({ template }) => ({
    visitor: {
        Program(path, state) {
            const name = state.file.opts.filename;
            const folderName = paths.basename(paths.dirname(name));

            if (!exportPaths[folderName]) {
                return;
            }

            const fileName = paths.parse(paths.basename(name)).name;
            const reexports = Object.keys(exportPaths[folderName]);

            const isFileInReexport = reexports.find((reexport) => reexport === `./${fileName}`);

            if (!isFileInReexport) {
                return;
            }

            const lastImport = path
                .get('body')
                .filter((p) => p.isImportDeclaration())
                .pop();

            if (!lastImport) {
                return;
            }

            const collectImportFunc = collectImport(template, `${folderName}/${fileName}`);
            lastImport.insertAfter(collectImportFunc());
        },
    },
});
