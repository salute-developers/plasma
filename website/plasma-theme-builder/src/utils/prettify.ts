import parserTypeScript from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import type { Options } from 'prettier';

const prettierSetting: Options = {
    plugins: [parserTypeScript],
    parser: 'babel',
    printWidth: 120,
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    endOfLine: 'auto',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
};

export const prettify = (source: string) => prettier.format(source, prettierSetting);
