import path from 'path';
import fs from 'fs';

export const TEST_PACKAGE_DIST_ALIAS = '@plasma-cy/test-package-dist';

const GENERATED_DIR = path.resolve(__dirname, '..', '.generated');

export const getPackageDistPath = (packsPath: string, packageName: string): string => {
    switch (packageName) {
        case 'plasma-ui':
            return path.join(packsPath, 'plasma-ui/es/index.js');
        case 'sdds-cs':
            return path.join(packsPath, 'sdds-cs/dist/emotion/es/index.js');
        default:
            return path.join(packsPath, packageName, 'dist/styled-components/es/index.js');
    }
};

const findConfigFiles = (dir: string): string[] => {
    if (!fs.existsSync(dir)) return [];
    const result: string[] = [];
    const walk = (current: string) => {
        for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
            if (entry.isDirectory()) {
                if (entry.name !== '_beta') walk(path.join(current, entry.name));
            } else if (
                entry.name.endsWith('.config.ts') &&
                entry.name.slice(0, -'.config.ts'.length) === path.basename(current)
            ) {
                result.push(path.join(current, entry.name));
            }
        }
    };
    walk(dir);
    return result;
};

const buildThemeContent = (packageName: string, packsPath: string): string => {
    switch (packageName) {
        case 'plasma-ui': {
            const theme = path.join(packsPath, 'plasma-tokens', 'es', 'themes', 'salutejs_sber__dark');
            return [
                `export { salutejs_sber__dark as themeVars } from '${theme}';`,
                "export const standardTypo = '';",
                "export const compatibleTypo = '';",
            ].join('\n');
        }
        case 'plasma-b2c': {
            const theme = path.join(packsPath, 'plasma-tokens-b2c', 'es', 'themes', 'dark');
            const stdTypo = path.join(packsPath, 'plasma-typo', 'lib', 'esm', 'standard');
            const compatTypo = path.join(packsPath, 'plasma-typo', 'lib', 'esm', 'compatible');
            return [
                `export { dark as themeVars } from '${theme}';`,
                `export { standard as standardTypo } from '${stdTypo}';`,
                `export { compatible as compatibleTypo } from '${compatTypo}';`,
            ].join('\n');
        }
        case 'sdds-os': {
            const theme = path.join(
                packsPath,
                'sdds-os',
                'node_modules',
                '@salutejs-ds',
                'sdds_os',
                'es',
                'theme',
                'themes',
                'sdds_os__light',
            );
            return [
                `export { sdds_os__light as themeVars } from '${theme}';`,
                "export const standardTypo = '';",
                "export const compatibleTypo = '';",
            ].join('\n');
        }
        default: {
            const themeName = packageName.replace(/-/g, '_');
            const isSDDS = packageName.startsWith('sdds-');
            const themeFile = `${themeName}__light`;
            const themeDir = isSDDS ? 'sdds-themes' : 'plasma-themes';
            const theme = path.join(packsPath, 'themes', themeDir, 'es', 'themes', themeFile);
            return [
                `export { ${themeFile} as themeVars } from '${theme}';`,
                "export const standardTypo = '';",
                "export const compatibleTypo = '';",
            ].join('\n');
        }
    }
};

export interface GeneratedPaths {
    testPackage: string;
    testTheme: string;
    testConfigs: string;
}

/**
 * Генерирует реальные файлы вместо виртуальных Vite-модулей.
 * Реальные файлы позволяют esbuild pre-bundle их через optimizeDeps,
 * что устраняет ESM request waterfall при загрузке каждого spec-файла.
 */
export const generateModules = (packsPath: string): GeneratedPaths => {
    const packageName = process.env.PACKAGE_NAME;
    if (!packageName) throw new Error('[generateModules] PACKAGE_NAME env is not set.');

    fs.mkdirSync(GENERATED_DIR, { recursive: true });

    const testPackagePath = path.join(GENERATED_DIR, 'test-package.ts');
    const distPath = getPackageDistPath(packsPath, packageName);
    fs.writeFileSync(testPackagePath, `export * from '${distPath}';\n`);

    const testThemePath = path.join(GENERATED_DIR, 'test-theme.ts');
    fs.writeFileSync(testThemePath, `${buildThemeContent(packageName, packsPath)}\n`);

    const testConfigsPath = path.join(GENERATED_DIR, 'test-configs.ts');
    const componentsDir = path.join(packsPath, packageName, 'src', 'components');
    const requested = process.env.COMPONENTS?.split(',')
        .map((c) => c.trim())
        .filter(Boolean);
    const configsContent = findConfigFiles(componentsDir)
        .filter((f) => !requested?.length || requested.includes(path.basename(f, '.config.ts')))
        .map((f) => `export * as ${path.basename(f, '.config.ts')} from '${f}';`)
        .join('\n');
    fs.writeFileSync(testConfigsPath, `${configsContent}\n`);

    return { testPackage: testPackagePath, testTheme: testThemePath, testConfigs: testConfigsPath };
};
