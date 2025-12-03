import { styled } from '@linaria/react';
import { component, mergeConfig } from 'src/engines';
import { cellConfig, cellTokens } from 'src/components/Cell';
import { applyEllipsis } from 'src/mixins';
import { CellRight } from 'src/components/Cell/Cell.styles';

import { classes, tokens } from '../../File.tokens';

const mergedConfig = mergeConfig(cellConfig);
const Cell = component(mergedConfig);

export const StyledCell = styled(Cell)`
    white-space: nowrap;
    height: var(${tokens.cellHeight});
    ${cellTokens.cellWidth}: 100%;

    ${cellTokens.cellGap}: var(${tokens.cellGap});

    &.${classes.fileActionLeft} {
        ${CellRight} {
            order: -1;
        }
    }
`;

export const FileInfoWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    gap: var(${tokens.cellTextboxGap});
`;

export const FilenameWrapper = styled.div`
    display: inline-grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    min-width: 8ch;

    color: var(${tokens.cellTitleColor});

    font-family: var(${tokens.cellTitleFontFamily});
    font-size: var(${tokens.cellTitleFontSize});
    font-style: var(${tokens.cellTitleFontStyle});
    font-weight: var(${tokens.cellTitleFontWeight});
    letter-spacing: var(${tokens.cellTitleLetterSpacing});
    line-height: var(${tokens.cellTitleLineHeight});
`;

export const TruncatedFilenamePart = styled.span`
    ${applyEllipsis()}
`;

export const FilenameExtensionPart = styled.span``;

export const FileDescription = styled.span`
    color: var(${tokens.cellSubtitleColor});

    font-family: var(${tokens.cellSubtitleFontFamily});
    font-size: var(${tokens.cellSubtitleFontSize});
    font-style: var(${tokens.cellSubtitleFontStyle});
    font-weight: var(${tokens.cellSubtitleFontWeight});
    letter-spacing: var(${tokens.cellSubtitleLetterSpacing});
    line-height: var(${tokens.cellSubtitleLineHeight});

    ${applyEllipsis()}
`;
