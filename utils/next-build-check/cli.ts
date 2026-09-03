#!/usr/bin/env -S npx ts-node

/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';

import { parseArgs } from './lib/args';
import { run } from './lib/exec';
import { resolveTarget } from './lib/resolve-target';
import { FIXTURE_DIR, writeFixtureFiles, buildAppSource, GeneratedPage } from './lib/fixture';
import { findDocsExampleForComponent, extractExtraImports, buildDocsPageSource } from './lib/docs-example';
import {
    readExportTarget,
    buildImportSpecifier,
    getTranspilePackages,
    getPeerDependenciesToInstall,
    getExportedComponentNames,
    findPopupProviderExportName,
} from './lib/target';

async function main(): Promise<void> {
    const args = parseArgs(process.argv.slice(2));
    const { pkgDir, pkgPath, pkgJson, exportKey } = await resolveTarget(args);

    console.log(`\nПроверяем Next.js-сборку: пакет=${pkgDir}, build=${exportKey}`);

    if (!fs.existsSync(path.join(pkgPath, 'dist'))) {
        throw new Error(
            `В packages/${pkgDir} нет папки dist — сначала соберите пакет (npm run build --prefix packages/${pkgDir}).`,
        );
    }

    const exportsMap = pkgJson.exports;

    if (!exportsMap) {
        throw new Error(`У пакета ${pkgDir} нет поля "exports" в package.json`);
    }

    const exportsEntry = exportsMap[exportKey];
    const target = readExportTarget(exportsEntry);
    const transpilePackages = target.includes('/css/') ? getTranspilePackages(pkgJson) : [];
    const importSpecifier = buildImportSpecifier(pkgJson, exportKey);
    const peerDeps = getPeerDependenciesToInstall(pkgJson);
    const peerDepNames = new Set(peerDeps.map(([name]) => name));
    const ownDependencyNames = new Set(Object.keys(pkgJson.dependencies || {}));

    /**
     * Проверяем каждый компонент, для которого есть реальный пример в документации — каждому
     * своя страница (next build скомпилирует и пререндерит их все за один прогон)
     */
    const componentNames = getExportedComponentNames(pkgPath, exportsEntry);
    const popupProviderName = findPopupProviderExportName(pkgPath, exportsEntry);

    console.log(`Компоненты build-варианта (${componentNames.length}): ${componentNames.join(', ')}`);

    const pages: GeneratedPage[] = [];
    const skippedComponentNames: string[] = [];
    const extraPackageNames = new Set<string>();

    for (const componentName of componentNames) {
        const docsExample = findDocsExampleForComponent(pkgDir, pkgJson, exportKey, componentName);

        if (!docsExample) {
            skippedComponentNames.push(componentName);
        } else {
            const fileName = `${componentName.toLowerCase()}.tsx`;
            const source = buildDocsPageSource(docsExample, pkgJson, importSpecifier, componentName, popupProviderName);

            pages.push({ fileName, source });
            extractExtraImports(docsExample.code, pkgJson)
                .filter((name) => !peerDepNames.has(name) && !ownDependencyNames.has(name))
                .forEach((name) => extraPackageNames.add(name));
        }
    }

    if (skippedComponentNames.length > 0) {
        console.log(`Пропущены (нет "tsx live" примера в доках): ${skippedComponentNames.join(', ')}`);
    }

    if (pages.length === 0) {
        throw new Error('Ни для одного компонента не нашлось "tsx live" примера в документации — проверять нечего.');
    }

    const appSource = buildAppSource(importSpecifier, popupProviderName);

    let tarballPath: string | undefined;

    try {
        run('npm', ['install'], { cwd: FIXTURE_DIR });

        const packResult = run('npm', ['pack', '--json', '--ignore-scripts'], {
            cwd: pkgPath,
            stdio: ['inherit', 'pipe', 'inherit'],
        });

        if (!packResult.stdout) {
            throw new Error('npm pack не вернул stdout');
        }

        const [packInfo] = JSON.parse(packResult.stdout.toString());

        tarballPath = path.join(pkgPath, packInfo.filename);

        writeFixtureFiles({ pages, appSource, transpilePackages });

        const peerArgs = peerDeps.map(([name, range]) => `${name}@${range}`);

        run('npm', ['install', '--no-save', '--ignore-scripts', tarballPath, ...peerArgs, ...extraPackageNames], {
            cwd: FIXTURE_DIR,
        });
        run('npx', ['next', 'build'], { cwd: FIXTURE_DIR });

        console.log(`\nPASS: ${pkgDir} (${exportKey}) — Next.js сборка прошла успешно.`);
    } catch (err) {
        console.error(`\nFAIL: ${pkgDir} (${exportKey}) — ${(err as Error).message}`);
        process.exitCode = 1;
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
