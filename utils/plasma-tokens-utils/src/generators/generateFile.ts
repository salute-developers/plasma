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
