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

    return normalizedContent;
};
