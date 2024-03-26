import styled from 'styled-components';
import { css } from '@linaria/core';

import { tokens } from './Cell.tokens';
import type { AlignLeftProp, AlignRightProp } from './Cell.types';

const alignToFlex = {
    center: 'center',
    top: 'flex-start',
    bottom: 'flex-end',
};

export const CellRoot = styled.div`
    width: 100%;
    display: flex;
    gap: 0.375rem;

    &:focus {
        outline: 0 none;
    }
`;

export const CellContentWrapper = styled.div`
    display: flex;
    flex: auto;
    justify-content: space-between;
    gap: 0.375rem;
    // padding: 0.375rem 0;
`;

export const CellContent = styled.div`
    display: flex;
    align-items: center;
`;

export const CellLeft = styled.div<{ align: AlignLeftProp }>`
    display: flex;
    align-items: ${({ align = 'center' }) => alignToFlex[align]};
`;

export const CellRight = styled.div<{ align: AlignRightProp }>`
    display: flex;
    align-items: ${({ align = 'center' }) => alignToFlex[align]};
    text-align: right;
`;

//
// Стили в Textbox
//

export const cellTextbox = css`
    gap: var(${tokens.cellTextboxGap});
`;
export const cellTextboxLabel = css`
    color: var(${tokens.cellLabelColor});
    font-size: var(${tokens.cellLabelFontSize});
    font-weight: var(${tokens.cellLabelFontWeight});
    font-family: var(${tokens.cellLabelFontFamily});
    font-style: var(${tokens.cellLabelFontStyle});
    line-height: var(${tokens.cellLabelLineHeight});
    letter-spacing: var(${tokens.cellLabelLetterSpacing});
`;
export const cellTextboxTitle = css`
    color: var(${tokens.cellTitleColor});
    font-size: var(${tokens.cellTitleFontSize});
    font-weight: var(${tokens.cellTitleFontWeight});
    font-family: var(${tokens.cellTitleFontFamily});
    font-style: var(${tokens.cellTitleFontStyle});
    line-height: var(${tokens.cellTitleLineHeight});
    letter-spacing: var(${tokens.cellTitleLetterSpacing});
`;
export const cellTextboxSubtitle = css`
    color: var(${tokens.cellSubtitleColor});
    font-size: var(${tokens.cellSubtitleFontSize});
    font-weight: var(${tokens.cellSubtitleFontWeight});
    font-family: var(${tokens.cellSubtitleFontFamily});
    font-style: var(${tokens.cellSubtitleFontStyle});
    line-height: var(${tokens.cellSubtitleLineHeight});
    letter-spacing: var(${tokens.cellSubtitleLetterSpacing});
`;
