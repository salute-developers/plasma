/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const paths = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const accumulateExportPaths = require('./accumulateExportPaths');

const parseOptions = {
    sourceType: 'module',
    plugins: ['typescript'],
};

module.exports = (indexFiles) =>
    indexFiles.reduce((acc, src) => {
        const code = fs.readFileSync(src, 'utf-8');
        const ast = parser.parse(code, parseOptions);
        const folderName = paths.basename(paths.dirname(src));

        traverse(ast, {
            ExportNamedDeclaration(path) {
                const specifiers = path.get('specifiers');

                if (!specifiers.length) {
                    return;
                }

                acc = accumulateExportPaths(acc, path, folderName);
            },
            ExportAllDeclaration(path) {
                acc = accumulateExportPaths(acc, path, folderName);
            },
        });

        return acc;
    }, {});
