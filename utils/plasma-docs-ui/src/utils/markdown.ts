import * as markedModule from 'marked';

type MarkedParser = (source: string, options: { async: false }) => string;

const isMarkedParser = (value: unknown): value is MarkedParser => typeof value === 'function';

const getMarkedParser = (): MarkedParser => {
    const moduleCandidates = markedModule as {
        default?: unknown;
        marked?: unknown;
        parse?: unknown;
    };

    const parser =
        [moduleCandidates.marked, moduleCandidates.parse, moduleCandidates.default, markedModule].find(
            isMarkedParser,
        ) || moduleCandidates.default;

    if (!isMarkedParser(parser)) {
        throw new TypeError('Unable to resolve marked parser');
    }

    return parser;
};

export const renderMarkdown = (source: string) => getMarkedParser()(source, { async: false });
