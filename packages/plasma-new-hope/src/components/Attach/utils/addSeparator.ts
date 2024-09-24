import { extractExtension } from './extractExtension';

export const addSeparator = (filename: string, separator: string) => {
    const extension = extractExtension(filename);

    const strings = filename.split('.');
    const name = strings.length > 1 ? strings.slice(0, -1).join('.') : strings[0];
    const lastChar = name[name.length - 1];
    const dotChar = '.';

    return extension === name
        ? `${name.slice(0, -1)}${separator}${lastChar}`
        : `${name.slice(0, -1)}${separator}${lastChar}${dotChar}${extension}`;
};
