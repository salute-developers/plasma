import { jsToCss } from '../utils';

export const generateCSSThemeRootFile = (name: string, content: object) => {
    return {
        file: `${name}.css`,
        content: `${jsToCss(content, ':root')}\n`,
    };
};

export const generateCSSThemeModuleFile = (name: string, content: object) => {
    return {
        file: `${name}.css`,
        content: `${[jsToCss(content, '.dark'), jsToCss(content, '.light')].join('\n')}\n`,
    };
};

export const generateCSSTypoRootFile = (name: string, content: (string | undefined)[]) => {
    return {
        file: `${name}.typo.css`,
        content: `\n${content.filter(Boolean).join('\n\n')}\n`,
    };
};

/**
 * Создает дескриптор на файл с определенным именем и контентом.
 */
export const generateFile = (name: string, content: string | object, deprecated = '') => {
    if (typeof content !== 'string') {
        content = JSON.stringify(content, null, 4);
    }

    return {
        file: `${name}.ts`,
        content: `export const ${name} = ${content};${deprecated}\n`,
    };
};
