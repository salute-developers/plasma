import { css } from 'styled-components';

import { classes, tokens } from '../../../../Modal.tokens';

export const base = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    width: 100%;

    gap: var(${tokens.modalFooterGap});
    padding: var(${tokens.modalFooterPadding});

    .${classes.footerText} {
        box-sizing: border-box;
        width: 100%;
        min-width: 100%;
        flex: none;
        margin: var(${tokens.modalFooterTextMarginTop}) 0 0;
        padding: 0 0 var(${tokens.modalFooterTextPaddingBottom});
        text-align: var(${tokens.modalFooterTextAlign});
        color: var(${tokens.modalFooterTextColor});
        font-family: var(${tokens.modalFooterTextFontFamily});
        font-size: var(${tokens.modalFooterTextFontSize});
        font-style: var(${tokens.modalFooterTextFontStyle});
        font-weight: var(${tokens.modalFooterTextFontWeight});
        letter-spacing: var(${tokens.modalFooterTextLetterSpacing});
        line-height: var(${tokens.modalFooterTextLineHeight});
    }
`;
