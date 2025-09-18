import { css } from '@linaria/core';

import { tokens, classes } from '../../Attach.tokens';
import { FilenameWrapper, StyledHelperText } from '../../Attach.styles';

export const base = css`
    &.${classes.horizontal} {
        column-gap: var(${tokens.horizontalGap});
    }

    &.${classes.vertical} {
        row-gap: var(${tokens.verticalGap});
    }

    &.${classes.auto} {
        row-gap: var(${tokens.verticalGap});
        column-gap: var(${tokens.horizontalGap});
    }

    &.${classes.withHelperText} {
        row-gap: var(${tokens.verticalGapWithHelperText});
    }

    ${FilenameWrapper} {
        font-family: var(${tokens.cellTitleFontFamily});
        font-size: var(${tokens.cellTitleFontSize});
        font-style: var(${tokens.cellTitleFontStyle});
        font-weight: var(${tokens.cellTitleFontWeight});
        letter-spacing: var(${tokens.cellTitleLetterSpacing});
        line-height: var(${tokens.cellTitleLineHeight});

        height: var(${tokens.filenameWrapperHeight});
    }

    ${StyledHelperText} {
        font-family: var(--plasma-typo-body-xs-font-family);
        font-size: var(--plasma-typo-body-xs-font-size);
        font-style: var(--plasma-typo-body-xs-font-style);
        font-weight: var(--plasma-typo-body-xs-font-weight);
        letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
        line-height: var(--plasma-typo-body-xs-line-height);
    }
}
`;
