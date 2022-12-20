import fsPromises from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

import { formatImportExpression, formatLines } from '../utils/codegen';
import { CliConfig } from '../config/common';
import { debug } from '../utils/logger';

import { TestModule } from './collect';

function getModuleRelativePath(modulePath: string, importedModulePath: string): string {
    const moduleDir = path.join(modulePath, '..');
    const relativePath = path.relative(moduleDir, importedModulePath);

    return relativePath.replace(path.extname(importedModulePath), '');
}

const IMPORTED_CONFIG_NAME = 'importedConfig';

type ModifyEntrypointParams = {
    modules: TestModule[];
    entrypointPath: string;
    projectConfigPath?: string;
    cliConfig: CliConfig;
};

export async function modifyEntrypoint({
    modules,
    entrypointPath,
    projectConfigPath,
    cliConfig,
}: ModifyEntrypointParams): Promise<void> {
    debug('modifying entrypoint', entrypointPath);

    debug('adding imports for modules', modules);
    const imports = modules.map((module) =>
        formatImportExpression(getModuleRelativePath(entrypointPath, module.path), {
            namedImports: module.subjects.map(({ id: alias, originalExportedName: original }) => ({
                original,
                alias,
            })),
        }),
    );

    if (projectConfigPath) {
        debug('adding import for project config', projectConfigPath);
        imports.push(
            formatImportExpression(getModuleRelativePath(entrypointPath, projectConfigPath), {
                defaultImportIdentity: IMPORTED_CONFIG_NAME,
            }),
        );
    }

    debug('entry imports', imports);

    const clientTestSubjects = modules
        .map(({ subjects }) => {
            return subjects.map(({ id }) => `{ id: '${id}', Component: ${id} },`);
        })
        .flat();

    debug('entry test subjects', clientTestSubjects);

    debug('reading initial contents of entry');
    const contents = await fsPromises.readFile(entrypointPath, { encoding: 'utf-8' });
    debug('reading initial contents of entry succeed');

    // TODO comments
    const formattedContents = contents
        .replace('// <IMPORT_MARK>', formatLines(imports))
        .replace('// <TEST_SUBJECT_MARK>', formatLines(clientTestSubjects))
        .replace(
            '// <CONFIG_ARGS_MARK>',
            formatLines(
                [
                    `${JSON.stringify(cliConfig)},`,
                    projectConfigPath ? `${IMPORTED_CONFIG_NAME} as any,` : undefined,
                ].filter((s): s is string => Boolean(s)),
            ),
        );

    debug('writing modified contents');
    await fsPromises.writeFile(entrypointPath, formattedContents, { encoding: 'utf-8', mode: constants.O_TRUNC });
    debug('writing modified contents succeed');
}
