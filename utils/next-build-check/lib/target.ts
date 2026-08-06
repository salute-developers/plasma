import fs from 'fs';
import path from 'path';

import { PACKAGE_MAP } from '../../../scripts/lib/final-packages';

import { ExportsEntry, PackageJson } from './types';

export const ROOT = path.resolve(__dirname, '..', '..', '..');

export function resolvePackageDir(input: string): string | null {
    if (PACKAGE_MAP[input]) {
        return PACKAGE_MAP[input];
    }

    if (fs.existsSync(path.join(ROOT, 'packages', input, 'package.json'))) {
        return input;
    }

    return null;
}

export function normalizeExportKey(input: string | undefined): string {
    if (!input || input === '.') {
        return '.';
    }

    return input.startsWith('./') ? input : `./${input}`;
}

export function readExportTarget(exportsEntry: ExportsEntry): string {
    if (typeof exportsEntry === 'string') {
        return exportsEntry;
    }

    return exportsEntry.import || exportsEntry.default || exportsEntry.require || '';
}

export function buildImportSpecifier(pkgJson: PackageJson, exportKey: string): string {
    return exportKey === '.' ? pkgJson.name : `${pkgJson.name}/${exportKey.replace(/^\.\//, '')}`;
}

export function getTranspilePackages(pkgJson: PackageJson): string[] {
    const deps = Object.keys(pkgJson.dependencies || {}).filter((dep) => dep.startsWith('@salutejs/'));

    return [pkgJson.name, ...deps];
}

/**
 * Ставим локально в fixture/ нужные peerDependencies (styled-components/@emotion/*,
 * @salutejs/plasma-icons и т.п.) — то, что реальный потребитель обязан поставить сам.
 */
export function getPeerDependenciesToInstall(pkgJson: PackageJson): [string, string][] {
    const peerDeps = pkgJson.peerDependencies || {};

    return Object.entries(peerDeps).filter(([name]) => name !== 'react' && name !== 'react-dom');
}

function readBundleSource(pkgPath: string, exportsEntry: ExportsEntry): string {
    const target = typeof exportsEntry === 'string' ? exportsEntry : exportsEntry.import || exportsEntry.default;

    if (!target) {
        throw new Error('У exports-записи нет поля "import"/"default"');
    }

    return fs.readFileSync(path.join(pkgPath, target), 'utf8');
}

/**
 * Только реэкспорты с ОТНОСИТЕЛЬНЫМ путём ("from './components/Skeleton/Skeleton.js'") — то,
 * что пакет экспортирует сам
 */
const RELATIVE_EXPORT_CLAUSE_RE = /export\s*\{([^}]+)\}\s*from\s*(['"])(\.[^'"]+)\2/g;
const EXPORT_STAR_RE = /export\s*\*\s*from\s*(['"])(\.\/components\/(?:_ai\/)?[A-Za-z0-9]+)\1/g;

function extractNamedComponentExports(source: string): string[] {
    const names = new Set<string>();

    for (const clauseMatch of source.matchAll(RELATIVE_EXPORT_CLAUSE_RE)) {
        for (const rawName of clauseMatch[1].split(',')) {
            const name = rawName
                .trim()
                .split(/\s+as\s+/)
                .pop()
                ?.trim();

            if (name && /^[A-Z][A-Za-z0-9]*$/.test(name)) {
                names.add(name);
            }
        }
    }

    return [...names];
}

/**
 * Проверяем каждый компонент из build-варианта. Находим имя экспортируемого компонента
 * в скомпилированном бандле  и ищем его пример в документации
 */
export function getExportedComponentNames(pkgPath: string, exportsEntry: ExportsEntry): string[] {
    const target = typeof exportsEntry === 'string' ? exportsEntry : exportsEntry.import || exportsEntry.default;

    if (!target) {
        throw new Error('У exports-записи нет поля "import"/"default"');
    }

    const source = readBundleSource(pkgPath, exportsEntry);
    // CSS и "./ai" бандлы перечисляют экспорты прямо в entry-файле.
    const names = new Set(extractNamedComponentExports(source));

    /**
     * styled-components/emotion реэкспортируют компоненты через "export * from './components/X'".
     * Имена компонентов нужно смотреть в components/X/index.js.
     */
    for (const starMatch of source.matchAll(EXPORT_STAR_RE)) {
        const relPath = starMatch[2];
        const indexPath = path.join(pkgPath, path.dirname(target), relPath, 'index.js');
        const nestedNames = fs.existsSync(indexPath)
            ? extractNamedComponentExports(fs.readFileSync(indexPath, 'utf8'))
            : [];

        if (nestedNames.length > 0) {
            nestedNames.forEach((name) => names.add(name));
        } else {
            /**
             * Если не удалось выделить имя компонента, берем название папка
             */
            const folderName = relPath.split('/').pop();

            if (folderName) {
                names.add(folderName);
            }
        }
    }

    if (names.size === 0) {
        throw new Error('Не удалось определить компоненты для теста в бандле');
    }

    return [...names];
}

const EXPORT_CLAUSE_RE = /export\s*\{([^}]+)\}\s*from/g;

/**
 * Ищет "export { <sourceName>[ as Alias] } from ..." и возвращает Alias, иначе исходное имя
 * NOTE: plasma-b2c реэкспортирует "PopupProvider as PopupBaseProvider", и regex-поиск даёт некорректный импорт
 * import { PopupProvider } from '@salutejs/plasma-b2c/...'.
 */
function findExportedAliasName(source: string, sourceName: string): string | null {
    for (const clauseMatch of source.matchAll(EXPORT_CLAUSE_RE)) {
        for (const rawSpecifier of clauseMatch[1].split(',')) {
            const parts = rawSpecifier.trim().split(/\s+as\s+/);

            if (parts[0]?.trim() === sourceName) {
                return (parts[1] ?? parts[0]).trim();
            }
        }
    }

    return null;
}

export function findPopupProviderExportName(pkgPath: string, exportsEntry: ExportsEntry): string | null {
    const source = readBundleSource(pkgPath, exportsEntry);
    const direct = findExportedAliasName(source, 'PopupProvider');

    if (direct) {
        return direct;
    }

    const target = typeof exportsEntry === 'string' ? exportsEntry : exportsEntry.import || exportsEntry.default;

    if (!target) {
        return null;
    }

    const componentsDir = path.join(pkgPath, path.dirname(target), 'components');

    if (!fs.existsSync(componentsDir)) {
        return null;
    }

    for (const folder of fs.readdirSync(componentsDir)) {
        const indexPath = path.join(componentsDir, folder, 'index.js');

        if (fs.existsSync(indexPath)) {
            const found = findExportedAliasName(fs.readFileSync(indexPath, 'utf8'), 'PopupProvider');

            if (found) {
                return found;
            }
        }
    }

    return null;
}
