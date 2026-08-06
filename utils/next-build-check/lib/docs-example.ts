import fs from 'fs';
import path from 'path';

import { ROOT } from './target';
import { PackageJson } from './types';

export interface DocsExample {
    code: string;
    file: string;
}

const LIVE_BLOCK_RE = /```tsx live\r?\n([\s\S]*?)```/;

function escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getDocsSubfolder(exportKey: string): string {
    return exportKey === './ai' || exportKey.startsWith('./ai/') ? 'ai' : 'components';
}

// Получаем пример из доки
export function findDocsExampleForComponent(
    pkgDir: string,
    pkgJson: PackageJson,
    exportKey: string,
    componentName: string,
): DocsExample | null {
    const filePath = path.join(
        ROOT,
        'website',
        `${pkgDir}-docs`,
        'docs',
        getDocsSubfolder(exportKey),
        `${componentName}.mdx`,
    );

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(LIVE_BLOCK_RE);

    if (!match) {
        return null;
    }

    const code = match[1];
    const importsPackage = code.includes(pkgJson.name);
    const usesComponent = new RegExp(`<${escapeRegExp(componentName)}\\b`).test(code);

    if (!importsPackage && !usesComponent) {
        return null;
    }

    return { code, file: `${componentName}.mdx` };
}

/**
 * Заменяет "from '@salutejs/sdds-serv'" / "from '@salutejs/sdds-serv/ai'" на импорт нужного
 * build-варианта.
 */
export function retargetPackageImport(code: string, pkgJson: PackageJson, importSpecifier: string): string {
    const pattern = new RegExp(`(from\\s+['"])${escapeRegExp(pkgJson.name)}(?:/[^'"]*)?(['"])`, 'g');

    return code.replace(pattern, `$1${importSpecifier}$2`);
}
/*
 * Находим прочие npm-пакеты, которые в пример из доки импортируются напрямую (например
 * "@salutejs/plasma-icons" в примерах Button) и которые не входят в peerDependencies
 * пакета
 */
export function extractExtraImports(code: string, pkgJson: PackageJson): string[] {
    const specifiers = [...code.matchAll(/from\s+['"]([^'"]+)['"]/g)].map((m) => m[1]);

    const packageNames = specifiers
        .filter(
            (specifier) => specifier !== 'react' && !specifier.startsWith('.') && !specifier.startsWith(pkgJson.name),
        )
        .map((specifier) => {
            const parts = specifier.split('/');

            return specifier.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0];
        });

    return [...new Set(packageNames)];
}

/**
 * Проставляем UNSAFE_SSR_ENABLED для PopupProvider/NotificationProvider, если он есть в примере
 */
function injectPopupProviderSsrFlag(code: string, popupProviderName: string | null): string {
    const names = [popupProviderName, 'NotificationsProvider'].filter((name): name is string => Boolean(name));

    return names.reduce((acc, name) => {
        if (!acc.includes(`<${name}`) || acc.includes(`<${name} UNSAFE_SSR_ENABLED`)) {
            return acc;
        }

        return acc.replace(new RegExp(`<${escapeRegExp(name)}(?=[\\s/>])`, 'g'), `<${name} UNSAFE_SSR_ENABLED`);
    }, code);
}

function hasNamedImport(code: string, name: string): boolean {
    return new RegExp(`import\\s*\\{[^}]*\\b${escapeRegExp(name)}\\b[^}]*\\}\\s*from`, 's').test(code);
}

/**
 * Проверяем наличие импорта впримере доки
 */
function ensureComponentImport(code: string, componentName: string, importSpecifier: string): string {
    if (hasNamedImport(code, componentName)) {
        return code;
    }

    return `import { ${componentName} } from '${importSpecifier}';\n${code}`;
}

export function buildDocsPageSource(
    example: DocsExample,
    pkgJson: PackageJson,
    importSpecifier: string,
    componentName: string,
    popupProviderName: string | null,
): string {
    const retargeted = retargetPackageImport(example.code, pkgJson, importSpecifier);
    const withImport = ensureComponentImport(retargeted, componentName, importSpecifier);
    const withSsrFlag = injectPopupProviderSsrFlag(withImport, popupProviderName);

    return `// Сгенерировано ../cli.ts из docs/${example.file} (первый "tsx live" пример) — вручную не рекомендуется изменять.\n${withSsrFlag}\nexport default App;\n`;
}
