import { build } from 'vite';

export async function buildWithVite(entryFile, { external }) {
    const result = await build({
        logLevel: 'silent',
        build: {
            write: false,
            minify: 'esbuild',
            sourcemap: false,
            lib: { entry: entryFile, formats: ['es'], fileName: () => 'entry.js' },
            rollupOptions: {
                external,
                treeshake: true,
                // silence noisy-but-harmless "use client" directive warnings from deps
                onwarn(warning, warn) {
                    if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
                        warn(warning);
                    }
                },
            },
        },
    });
    const output = Array.isArray(result) ? result[0].output : result.output;
    const chunk = output.find((item) => item.type === 'chunk' && item.isEntry);
    const cssAsset = output.find((item) => item.type === 'asset' && item.fileName.endsWith('.css'));
    const cssBytes = cssAsset ? Buffer.byteLength(cssAsset.source) : 0;
    return { code: chunk.code, moduleCount: Object.keys(chunk.modules).length, cssBytes };
}
