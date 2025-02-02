import fs from 'fs';
import path from 'path';
import { transformSync } from 'esbuild';
import { slugify, transform, TransformCacheCollection } from '@linaria/babel-preset';

const nodeModulesRegex = /^(?:.*[\\/])?node_modules(?:[\\/].*)?$/;

export default function customPlugin({ sourceMap, preprocessor, esbuildOptions, ...rest } = {}) {
    const pluginName = 'customPlugin';

    let options = esbuildOptions;
    const cache = new TransformCacheCollection();
    return {
        name: pluginName,
        setup(build) {
            const cssLookup = new Map();

            const asyncResolve = async (token, importer) => {
                const context = path.isAbsolute(importer)
                    ? path.dirname(importer)
                    : path.join(process.cwd(), path.dirname(importer));
                const result = await build.resolve(token, {
                    resolveDir: context,
                    kind: 'import-statement',
                });
                if (result.errors.length > 0) {
                    throw new Error(`Cannot resolve ${token}`);
                }
                return result.path.replace(/\\/g, path.posix.sep);
            };

            build.onResolve({ filter: /\.linaria\.css$/ }, async (args) => {
                // build.onResolve({ filter: /.*/ }, async (args) => {
                console.log('onResolve', args);

                return {
                    namespace: pluginName,
                    path: args.path,
                };
            });
            build.onLoad({ filter: /\.(js|jsx|ts|tsx)$/ }, async (args) => {
                const rawCode = fs.readFileSync(args.path, 'utf8');
                const { ext, name: filename } = path.parse(args.path);
                const loader = ext.replace(/^\./, '');
                if (nodeModulesRegex.test(args.path)) {
                    return {
                        loader,
                        contents: rawCode,
                    };
                }

                if (!options) {
                    options = {};
                    if ('jsxFactory' in build.initialOptions) {
                        options.jsxFactory = build.initialOptions.jsxFactory;
                    }
                    if ('jsxFragment' in build.initialOptions) {
                        options.jsxFragment = build.initialOptions.jsxFragment;
                    }
                }

                const transformed = transformSync(rawCode, {
                    ...options,
                    sourcefile: args.path,
                    sourcemap: sourceMap,
                    loader,
                });

                let { code } = transformed;

                if (sourceMap) {
                    const esbuildMap = Buffer.from(transformed.map).toString('base64');
                    code += `/*# sourceMappingURL=data:application/json;base64,${esbuildMap}*/`;
                }

                const transformServices = {
                    options: {
                        filename: args.path,
                        root: process.cwd(),
                        preprocessor,
                        pluginOptions: rest,
                    },
                    cache,
                };

                const result = await transform(transformServices, code, asyncResolve);
                if (!result.cssText) {
                    return {
                        contents: code,
                        loader,
                        resolveDir: path.dirname(args.path),
                    };
                }
                let { cssText } = result;

                // console.log('cssText', cssText);

                const slug = slugify(cssText);
                const cssFilename = `${filename}_${slug}.linaria.css`;
                let contents = `import ${JSON.stringify(cssFilename)}; ${result.code}`;
                if (sourceMap && result.cssSourceMapText) {
                    const map = Buffer.from(result.cssSourceMapText).toString('base64');
                    cssText += `/*# sourceMappingURL=data:application/json;base64,${map}*/`;
                    const linariaMap = Buffer.from(JSON.stringify(result.sourceMap)).toString('base64');
                    contents += `/*# sourceMappingURL=data:application/json;base64,${linariaMap}*/`;
                }
                cssLookup.set(cssFilename, cssText);

                // console.log('cssLookup', cssText);

                const cssPath = path.join(path.dirname(args.path), cssFilename);

                fs.writeFile(cssPath, cssText, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        // file written successfully
                    }
                });

                return {
                    contents,
                    loader,
                    resolveDir: path.dirname(args.path),
                };
            });
        },
    };
}
