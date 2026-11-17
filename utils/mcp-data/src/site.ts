import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** Все пути, с которыми работает генератор для одного сайта документации. */
export interface Site {
    /** Имя вертикали: каталог `packages/<lib>` и `productId` в данных. */
    lib: string;
    /** `website/<lib>-docs`. */
    siteDir: string;
    /** Конфиг сайта: `website/<lib>-docs/mcp.config.mjs`. */
    configPath: string;
    /** Исходники страниц: `website/<lib>-docs/docs`. */
    docsDir: string;
    /** JSON с props компонентов, которые пишет docgen-плагин при сборке Docusaurus. */
    docgenDir: string;
    /** Промежуточный результат шага `index`, вход шага `mcp-data`. */
    indexJsonPath: string;
    /** Результат шага `mcp-data`. */
    outputDir: string;
    /** `package.json` вертикали: версия для манифеста, от него же разрешается модуль токенов темы. */
    packageJsonPath: string;
}

const PACKAGE_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export const REPO_ROOT = path.resolve(PACKAGE_DIR, '../..');

const LIB_REGEX = /^[a-z0-9][a-z0-9-]*$/;

export function resolveSite(lib: string, repoRoot: string = REPO_ROOT): Site {
    if (!LIB_REGEX.test(lib)) {
        throw new Error(`Некорректное имя вертикали: "${lib}"`);
    }

    const siteDir = path.join(repoRoot, 'website', `${lib}-docs`);

    if (!fs.existsSync(siteDir)) {
        throw new Error(`Не найден сайт документации: ${siteDir}`);
    }

    return {
        lib,
        siteDir,
        configPath: path.join(siteDir, 'mcp.config.mjs'),
        docsDir: path.join(siteDir, 'docs'),
        docgenDir: path.join(siteDir, '.docusaurus', 'docusaurus-plugin-react-docgen-typescript', 'default'),
        indexJsonPath: path.join(siteDir, 'index.json'),
        outputDir: path.join(siteDir, 'mcpData'),
        packageJsonPath: path.join(repoRoot, 'packages', lib, 'package.json'),
    };
}
