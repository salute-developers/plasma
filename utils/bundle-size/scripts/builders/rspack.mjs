import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { rspack } from '@rspack/core';
import { sumCssAssets } from '../lib/css-assets.mjs';

export async function buildWithRspack(entryFile, { external }) {
    const outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bundle-size-rspack-'));
    const compiler = rspack({
        mode: 'production',
        entry: entryFile,
        output: { path: outDir, filename: 'entry.js', library: { type: 'module' } },
        experiments: { outputModule: true },
        externalsType: 'module',
        externals: external,
        resolve: { conditionNames: ['import', 'module', 'default'], extensions: ['.js', '.mjs'] },
        optimization: { usedExports: true, minimize: true, concatenateModules: true },
        module: {
            rules: [{ test: /\.css$/, type: 'asset/resource', generator: { filename: 'css-assets/[hash][ext]' } }],
        },
    });

    try {
        const stats = await new Promise((resolve, reject) => {
            compiler.run((err, result) => {
                if (err) return reject(err);
                if (result.hasErrors()) return reject(new Error(result.toString({ errorDetails: true, colors: false })));
                resolve(result);
            });
        });
        const code = fs.readFileSync(path.join(outDir, 'entry.js'), 'utf-8');
        const { chunkGraph, chunks } = stats.compilation;
        let moduleCount = 0;
        for (const chunk of chunks) {
            for (const _m of chunkGraph.getChunkModulesIterable(chunk)) {
                moduleCount += 1;
            }
        }
        const cssBytes = sumCssAssets(outDir);
        return { code, moduleCount, cssBytes };
    } finally {
        await new Promise((resolve) => compiler.close(() => resolve()));
        fs.rmSync(outDir, { recursive: true, force: true });
    }
}
