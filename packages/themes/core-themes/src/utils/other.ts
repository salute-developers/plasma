export const kebabToCamel = (str: string) =>
    str.replace(/-([a-z0-9])/g, (_, group) => group.toUpperCase()).replace(/^./, (char) => char.toLowerCase());

export const camelToKebab = (str: string) => str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
