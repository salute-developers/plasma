import { ParsedOffset } from './Scrollbar.types';

export const parseOffset = (offset?: string | number): ParsedOffset => {
    if (!offset) {
        return { top: '0', right: '0', bottom: '0', left: '0' };
    }

    const offsetString = typeof offset === 'number' ? `${offset}px` : offset;
    const parts = offsetString.split(/\s+/).filter(Boolean);

    switch (parts.length) {
        case 1:
            return {
                top: parts[0],
                right: parts[0],
                bottom: parts[0],
                left: parts[0],
            };
        case 2:
            return {
                top: parts[0],
                right: parts[1],
                bottom: parts[0],
                left: parts[1],
            };
        case 3:
            return {
                top: parts[0],
                right: parts[1],
                bottom: parts[2],
                left: parts[1],
            };
        case 4:
            return {
                top: parts[0],
                right: parts[1],
                bottom: parts[2],
                left: parts[3],
            };
        default:
            return { top: '0', right: '0', bottom: '0', left: '0' };
    }
};

export const calculateScrollbar = (
    container: HTMLDivElement | null,
    parsedOffset: ParsedOffset,
    minScrollbarTrackHeight = 20,
) => {
    if (!container) {
        return { thumbHeight: 0, thumbPosition: 0 };
    }

    const { scrollTop, scrollHeight, clientHeight } = container;

    const topOffset = parseFloat(parsedOffset.top) || 0;
    const bottomOffset = parseFloat(parsedOffset.bottom) || 0;

    const trackHeight = clientHeight - topOffset - bottomOffset;
    const thumbHeight = Math.max((trackHeight / scrollHeight) * trackHeight, minScrollbarTrackHeight);
    const maxScroll = scrollHeight - clientHeight;
    const thumbPosition = maxScroll > 0 ? (scrollTop / maxScroll) * (trackHeight - thumbHeight) : 0;

    return { thumbHeight, thumbPosition };
};
