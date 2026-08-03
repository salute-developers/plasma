#!/usr/bin/env node
// For each configured package, this reads its own package.json to figure out
// what to build: "exports" gives the distribution entry points (engines,
// subsets like /ai or /beta), "peerDependencies" gives what to treat as
// external (an app would already have those deduped). For every entry point
// we build two scenarios - importing a single (arbitrary) named export vs.
// importing everything - across vite/webpack/rspack. The gap between those
// two scenarios is the tree-shaking signal: importing one component should
// not drag in the rest of the library.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync, brotliCompressSync } from 'node:zlib';

import {
    loadManifest,
    getExternals,
    getEntries,
    specifierFor,
    discoverNamedExports,
    pickCanary,
} from './lib/discover.mjs';
import { writeFixture, singleImportSource, fullImportSource, sanitize } from './lib/fixtures.mjs';
import { printReport, printRegressions, printModuleCountWarnings } from './lib/report.mjs';
import { buildWithVite } from './builders/vite.mjs';
import { buildWithWebpack } from './builders/webpack.mjs';
import { buildWithRspack } from './builders/rspack.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const baselinePath = path.join(rootDir, 'baseline.json');
const tmpDir = path.join(rootDir, '.tmp');

// Final packages under test. Any package with an "exports" map in its
// package.json can be added here - entry points and externals are discovered
// automatically, nothing else to configure per package.
const PACKAGES = ['@salutejs/plasma-b2c', '@salutejs/plasma-giga', '@salutejs/sdds-serv'];

const BUNDLERS = {
    vite: buildWithVite,
    webpack: buildWithWebpack,
    rspack: buildWithRspack,
};

const THRESHOLD_PCT = 5;

function measureCode(code, moduleCount, cssBytes) {
    return {
        raw: Buffer.byteLength(code),
        gzip: gzipSync(code).length,
        brotli: brotliCompressSync(code).length,
        moduleCount,
        css: cssBytes,
    };
}

async function measurePackage(pkgName) {
    const { manifest, pkgRoot } = loadManifest(pkgName);
    const external = getExternals(manifest);
    const entries = getEntries(manifest);

    const entryResults = [];
    for (const { subpath, condition } of entries) {
        const specifier = specifierFor(pkgName, subpath);
        const exportNames = discoverNamedExports(pkgRoot, condition);
        const canary = pickCanary(exportNames);

        const scenarios = [
            { name: 'single', label: `import { ${canary} }`, source: singleImportSource(specifier, canary) },
            { name: 'full', label: `import * (${exportNames.length} exports)`, source: fullImportSource(specifier) },
        ];

        const scenarioResults = [];
        for (const scenario of scenarios) {
            const id = `${sanitize(pkgName)}-${sanitize(subpath)}-${scenario.name}`;
            const entryFile = writeFixture(tmpDir, id, scenario.source);

            const bundlerResults = [];
            for (const [bundlerName, builder] of Object.entries(BUNDLERS)) {
                try {
                    const { code, moduleCount, cssBytes } = await builder(entryFile, { external });
                    bundlerResults.push({ bundler: bundlerName, metrics: measureCode(code, moduleCount, cssBytes) });
                } catch (error) {
                    bundlerResults.push({ bundler: bundlerName, error: String(error.message ?? error).split('\n')[0] });
                }
            }
            scenarioResults.push({ name: scenario.name, label: scenario.label, bundlers: bundlerResults });
        }
        entryResults.push({ subpath, scenarios: scenarioResults });
    }
    return { pkgName, entries: entryResults };
}

function toBaselineShape(results) {
    const out = {};
    for (const pkgResult of results) {
        out[pkgResult.pkgName] = {};
        for (const entryResult of pkgResult.entries) {
            out[pkgResult.pkgName][entryResult.subpath] = {};
            for (const scenario of entryResult.scenarios) {
                out[pkgResult.pkgName][entryResult.subpath][scenario.name] = {};
                for (const b of scenario.bundlers) {
                    if (b.metrics) {
                        out[pkgResult.pkgName][entryResult.subpath][scenario.name][b.bundler] = b.metrics;
                    }
                }
            }
        }
    }
    return out;
}

function compareWithBaseline(results, baseline) {
    const regressions = [];
    const moduleWarnings = [];
    for (const pkgResult of results) {
        for (const entryResult of pkgResult.entries) {
            for (const scenario of entryResult.scenarios) {
                for (const b of scenario.bundlers) {
                    if (b.error) {
                        continue;
                    }
                    const base = baseline?.[pkgResult.pkgName]?.[entryResult.subpath]?.[scenario.name]?.[b.bundler];
                    if (!base) {
                        continue;
                    }
                    const pct = ((b.metrics.gzip - base.gzip) / base.gzip) * 100;
                    if (pct > THRESHOLD_PCT) {
                        regressions.push({
                            pkgName: pkgResult.pkgName,
                            subpath: entryResult.subpath,
                            scenario: scenario.name,
                            bundler: b.bundler,
                            baseline: base.gzip,
                            current: b.metrics.gzip,
                            pct,
                        });
                    } else if (b.metrics.moduleCount > base.moduleCount) {
                        moduleWarnings.push({
                            pkgName: pkgResult.pkgName,
                            subpath: entryResult.subpath,
                            scenario: scenario.name,
                            bundler: b.bundler,
                            baseline: base.moduleCount,
                            current: b.metrics.moduleCount,
                        });
                    }
                }
            }
        }
    }
    return { regressions, moduleWarnings };
}

async function main() {
    const args = process.argv.slice(2);
    const mode = args.includes('--update') ? 'update' : args.includes('--check') ? 'check' : 'measure';
    const onlyArg = args.find((a) => a.startsWith('--package='));
    const packages = onlyArg ? [onlyArg.split('=')[1]] : PACKAGES;

    fs.rmSync(tmpDir, { recursive: true, force: true });
    const baseline = fs.existsSync(baselinePath) ? JSON.parse(fs.readFileSync(baselinePath, 'utf-8')) : null;

    const results = [];
    for (const pkgName of packages) {
        results.push(await measurePackage(pkgName));
    }
    fs.rmSync(tmpDir, { recursive: true, force: true });

    printReport(results, { baseline: mode === 'check' ? baseline : null, thresholdPct: THRESHOLD_PCT });

    if (mode === 'update') {
        const newBaseline = { ...(baseline ?? {}), ...toBaselineShape(results) };
        fs.writeFileSync(baselinePath, `${JSON.stringify(newBaseline, null, 2)}\n`);
        console.log(`Baseline written to ${path.relative(rootDir, baselinePath)}`);
        return;
    }

    if (mode === 'check') {
        if (!baseline) {
            console.error('No baseline.json found. Run "npm run update-baseline" first.');
            process.exit(1);
        }
        const { regressions, moduleWarnings } = compareWithBaseline(results, baseline);
        printModuleCountWarnings(moduleWarnings);
        printRegressions(regressions, THRESHOLD_PCT);
        if (regressions.length > 0) {
            process.exit(1);
        }
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
