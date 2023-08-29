export const jsToCss = (content: Record<string, any>, selector: string) => {
    return `
${selector} {
  ${Object.entries(content[selector])
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n  ')}
}`;
};
