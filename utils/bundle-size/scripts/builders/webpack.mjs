import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import webpack from 'webpack';
import { sumCssAssets } from '../lib/css-assets.mjs';

export async function buildWithWebpack(entryFile, { external }) {
    const outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bundle-size-webpack-'));
    const compiler = webpack({
        mode: 'production',
        entry: entryFile,
        output: { path: outDir, filename: 'entry.js', library: { type: 'module' } },
        experiments: { outputModule: true },
        externalsType: 'module',
        externals: external,
        resolve: { conditionNames: ['import', 'module', 'default'], extensions: ['.js', '.mjs'] },
        optimization: { usedExports: true, minimize: true, concatenateModules: true },
        module: {
            // CSS is emitted as a plain asset, not parsed as JS - mirrors how vite's
            // lib build extracts CSS into its own file instead of inlining it.
            rules: [{ test: /\.css$/, type: 'asset/resource', generator: { filename: 'css-assets/[hash][ext]' } }],
        },
        stats: 'errors-only',
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
        // compilation.modules includes every module webpack ever looked at, even
        // ones fully eliminated by tree-shaking; walking the chunk graph instead
        // gives modules actually retained in the emitted chunk.
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
