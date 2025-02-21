import esbuild from 'esbuild';

import customPlugin from './esbuild-plugin.mjs';

const prod = process.env.NODE_ENV === 'production';

esbuild.build({
    entryPoints: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.css'],
    outdir: 'ESBUILD',
    bundle: false,
    minify: prod,
    plugins: [customPlugin()],
});
