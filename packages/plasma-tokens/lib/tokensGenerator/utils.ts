export const lowerFirstLetter = (value: string) => `${value[0].toLocaleLowerCase()}${value.slice(1)}`;

export const upperFirstLetter = (value: string) => `${value[0].toLocaleUpperCase()}${value.slice(1)}`;

export const camelize = (source?: string) => source?.replace(/[_-]+(.)/g, (_, p1) => p1.toUpperCase());
