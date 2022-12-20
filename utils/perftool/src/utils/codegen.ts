type NamedImport = string | { original: string; alias: string };

type FormatImportExpressionParams = {
    namedImports?: NamedImport[];
    defaultImportIdentity?: string;
};

export function formatImportExpression(
    modulePath: string,
    { namedImports, defaultImportIdentity }: FormatImportExpressionParams,
): string {
    const importParts = [];

    if (defaultImportIdentity) {
        importParts.push(defaultImportIdentity);
    }

    if (namedImports) {
        const line = namedImports
            .map((imp) => {
                if (typeof imp === 'string') {
                    return imp;
                }

                return `${imp.original} as ${imp.alias}`;
            })
            .join(', ');

        importParts.push(`{ ${line} }`);
    }

    return `import ${importParts.join(', ')} from '${modulePath}';`;
}

export function formatLines(lines: string[]): string {
    return lines.join('\r\n');
}
