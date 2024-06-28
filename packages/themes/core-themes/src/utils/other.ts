export const kebabToCamel = (str: string) =>
    str.replace(/-([a-z])/g, (_, group) => group.toUpperCase()).replace(/^./, (char) => char.toLowerCase());
