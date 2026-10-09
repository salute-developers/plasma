import { css } from 'styled-components';

import { addScrollbar } from '../../../../../../mixins';
import { tokens } from '../../../../Panel.tokens';

export const base = css`
    overflow-y: auto;
    scrollbar-width: auto;

    ${addScrollbar({
        scrollWidth: `var(${tokens.scrollbarWidth}, 0)`,
        trackColor: `var(${tokens.scrollbarTrackBackgroundColor})`,
        thumbColor: `var(${tokens.scrollbarThumbBackgroundColor})`,
        thumbHoverColor: `var(${tokens.scrollbarThumbBackgroundColorHover}, var(${tokens.scrollbarThumbBackgroundColor}))`,
        thumbActiveColor: `var(${tokens.scrollbarThumbBackgroundColorActive}, var(${tokens.scrollbarThumbBackgroundColor}))`,
    })}

    flex-grow: 1;

    margin-right: calc(
        (var(${tokens.padding}, 0rem) - var(${tokens.scrollbarOffsetRight}, var(${tokens.padding}, 0rem))) * -1
    );
    padding-right: 20px;
    box-sizing: border-box;
`;
