type IncompleteMarkdownMatch = {
    closeWith: string;
    markerIndex: number;
    markerLength: number;
};

const escapeMarkdownMarker = (content: string, index: number, length: number) =>
    `${content.slice(0, index)}${content
        .slice(index, index + length)
        .split('')
        .map((char) => `\\${char}`)
        .join('')}${content.slice(index + length)}`;

const isEscaped = (content: string, index: number) => {
    let backslashesCount = 0;

    for (let charIndex = index - 1; charIndex >= 0 && content[charIndex] === '\\'; charIndex -= 1) {
        backslashesCount += 1;
    }

    return backslashesCount % 2 === 1;
};

const isWordChar = (char?: string) => Boolean(char && /[a-zA-Zа-яА-Я0-9]/.test(char));

const shouldSkipMarker = (content: string, index: number, marker: string) => {
    const previousChar = content[index - 1];
    const nextChar = content[index + marker.length];

    return (
        (marker === '*' && (previousChar === '*' || nextChar === '*')) ||
        (marker === '_' &&
            (previousChar === '_' || nextChar === '_' || (isWordChar(previousChar) && isWordChar(nextChar))))
    );
};

const findLastUnescapedMarker = (content: string, marker: string) => {
    let index = content.lastIndexOf(marker);

    while (index !== -1) {
        if (!isEscaped(content, index) && !shouldSkipMarker(content, index, marker)) {
            return index;
        }

        index = content.lastIndexOf(marker, index - 1);
    }

    return -1;
};

const countUnescapedMarkers = (content: string, marker: string) => {
    let count = 0;
    let index = content.indexOf(marker);

    while (index !== -1) {
        if (!isEscaped(content, index) && !shouldSkipMarker(content, index, marker)) {
            count += 1;
        }

        index = content.indexOf(marker, index + marker.length);
    }

    return count;
};

const findIncompleteLinkOrImage = (content: string): IncompleteMarkdownMatch | undefined => {
    let bracketIndex = content.lastIndexOf('[');

    while (bracketIndex !== -1) {
        if (!isEscaped(content, bracketIndex)) {
            const isImage = content[bracketIndex - 1] === '!' && !isEscaped(content, bracketIndex - 1);
            const markerIndex = isImage ? bracketIndex - 1 : bracketIndex;
            const tail = content.slice(bracketIndex);

            if (tail.includes('\n')) {
                return undefined;
            }

            const closingBracketIndex = tail.indexOf(']');

            if (closingBracketIndex === -1) {
                return {
                    closeWith: ']',
                    markerIndex,
                    markerLength: isImage ? 2 : 1,
                };
            }

            const afterClosingBracket = tail.slice(closingBracketIndex + 1);
            const openingParenthesisMatch = afterClosingBracket.match(/^\s*\(/);

            if (openingParenthesisMatch && !afterClosingBracket.includes(')')) {
                return {
                    closeWith: ')',
                    markerIndex,
                    markerLength: isImage ? 2 : 1,
                };
            }

            return undefined;
        }

        bracketIndex = content.lastIndexOf('[', bracketIndex - 1);
    }

    return undefined;
};

const findIncompletePairedMarker = (content: string): IncompleteMarkdownMatch | undefined => {
    for (const marker of ['`', '~~', '**', '__', '*', '_']) {
        if (countUnescapedMarkers(content, marker) % 2 === 1) {
            const markerIndex = findLastUnescapedMarker(content, marker);
            const markerContent = content.slice(markerIndex + marker.length);

            if (markerIndex !== -1 && /^\S/.test(markerContent)) {
                return {
                    closeWith: marker,
                    markerIndex,
                    markerLength: marker.length,
                };
            }
        }
    }

    return undefined;
};

const normalizeIncompleteInlineMarkdown = (content: string, shouldParseIncompleteMarkdown?: boolean) => {
    const incompleteMarkdown = findIncompleteLinkOrImage(content) || findIncompletePairedMarker(content);

    if (!incompleteMarkdown) {
        return content;
    }

    if (shouldParseIncompleteMarkdown) {
        return `${content}${incompleteMarkdown.closeWith}`;
    }

    return escapeMarkdownMarker(content, incompleteMarkdown.markerIndex, incompleteMarkdown.markerLength);
};

export const normalizeIncompleteMarkdown = (content: string, shouldParseIncompleteMarkdown?: boolean) => {
    if (!content) {
        return content;
    }

    let normalizedContent = content;

    for (const marker of ['```', '~~~']) {
        const matchesCount = normalizedContent.split(marker).length - 1;

        if (matchesCount % 2 === 1) {
            if (shouldParseIncompleteMarkdown) {
                normalizedContent = `${normalizedContent}\n${marker}`;
            } else {
                const markerIndex = normalizedContent.lastIndexOf(marker);
                const escapedMarker = marker
                    .split('')
                    .map((char) => `\\${char}`)
                    .join('');

                normalizedContent = `${normalizedContent.slice(
                    0,
                    markerIndex,
                )}${escapedMarker}${normalizedContent.slice(markerIndex + marker.length)}`;
            }
        }
    }

    return normalizeIncompleteInlineMarkdown(normalizedContent, shouldParseIncompleteMarkdown);
};
