import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../../engines';
import { cellConfig, cellTokens } from '../../../Cell';
import { tokens as attachTokens, classes } from '../../Attach.tokens';

const mergedConfig = mergeConfig(cellConfig);
const Cell = component(mergedConfig);

export const StyledCell = styled(Cell)`
    ${cellTokens.cellLabelColor}: var(${attachTokens.cellLabelColor});
    ${cellTokens.cellTitleColor}: var(${attachTokens.cellTitleColor});
    ${cellTokens.cellSubtitleColor}: var(${attachTokens.cellSubtitleColor});
    ${cellTokens.cellBackgroundColor}: var(${attachTokens.cellBackgroundColor});

    ${cellTokens.cellWidth}: var(${attachTokens.cellWidth});
    ${cellTokens.cellPadding}: var(${attachTokens.cellPadding});
    ${cellTokens.cellPaddingLeftContent}: var(${attachTokens.cellPaddingLeftContent});
    ${cellTokens.cellPaddingContent}: var(${attachTokens.cellPaddingContent});
    ${cellTokens.cellPaddingRightContent}: var(${attachTokens.cellPaddingRightContent});

    ${cellTokens.cellTextboxGap}: var(${attachTokens.cellTextboxGap});
    ${cellTokens.cellGap}: var(${attachTokens.cellGap});

    ${cellTokens.cellLabelFontFamily}: var(${attachTokens.cellLabelFontFamily});
    ${cellTokens.cellLabelFontSize}: var(${attachTokens.cellLabelFontSize});
    ${cellTokens.cellLabelFontStyle}: var(${attachTokens.cellLabelFontStyle});
    ${cellTokens.cellLabelFontWeight}: var(${attachTokens.cellLabelFontWeight});
    ${cellTokens.cellLabelLetterSpacing}: var(${attachTokens.cellLabelLetterSpacing});
    ${cellTokens.cellLabelLineHeight}: var(${attachTokens.cellLabelLineHeight});

    ${cellTokens.cellTitleFontFamily}: var(${attachTokens.cellTitleFontFamily});
    ${cellTokens.cellTitleFontSize}: var(${attachTokens.cellTitleFontSize});
    ${cellTokens.cellTitleFontStyle}: var(${attachTokens.cellTitleFontStyle});
    ${cellTokens.cellTitleFontWeight}: var(${attachTokens.cellTitleFontWeight});
    ${cellTokens.cellTitleLetterSpacing}: var(${attachTokens.cellTitleLetterSpacing});
    ${cellTokens.cellTitleLineHeight}: var(${attachTokens.cellTitleLineHeight});

    ${cellTokens.cellSubtitleFontFamily}: var(${attachTokens.cellSubtitleFontFamily});
    ${cellTokens.cellSubtitleFontSize}: var(${attachTokens.cellSubtitleFontSize});
    ${cellTokens.cellSubtitleFontStyle}: var(${attachTokens.cellSubtitleFontStyle});
    ${cellTokens.cellSubtitleFontWeight}: var(${attachTokens.cellSubtitleFontWeight});
    ${cellTokens.cellSubtitleLetterSpacing}: var(${attachTokens.cellSubtitleLetterSpacing});
    ${cellTokens.cellSubtitleLineHeight}: var(${attachTokens.cellSubtitleLineHeight});

    white-space: nowrap;

    &.${classes.cellHidden} {
        visibility: hidden;
    }
`;
