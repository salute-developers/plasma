export const camelize = (source?: string) => source?.replace(/[_-]+(.)/g, (_, p1) => p1.toUpperCase());
