import { styled } from '@linaria/react';

import { selectConfig, selectTokens } from '../../../Select';
import { component, mergeConfig } from '../../../../engines';
import { tokens } from '../../Pagination.tokens';

const mergedSelectConfig = mergeConfig(selectConfig);
const Select = component(mergedSelectConfig);

export const SelectPerPageRoot = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const SelectPerPageSelect = styled(Select)`
    ${selectTokens.buttonColor}: var(${tokens.buttonColor});
    ${selectTokens.buttonColorHover}: var(${tokens.buttonColorHover});
    ${selectTokens.buttonColorActive}: var(${tokens.buttonColorActive});
    ${selectTokens.buttonBackgroundColor}: var(${tokens.buttonBackgroundColor});
    ${selectTokens.buttonBackgroundColorHover}: var(${tokens.buttonBackgroundColorHover});
    ${selectTokens.buttonBackgroundColorActive}: var(${tokens.buttonBackgroundColorActive});
    ${selectTokens.targetHeight}: var(${tokens.buttonHeight});
    ${selectTokens.buttonPadding}: var(${tokens.selectTargetPadding});
    ${selectTokens.borderRadius}: var(${tokens.buttonRadius});
    ${selectTokens.buttonArrowColor}: var(${tokens.buttonArrowColor});
    ${selectTokens.buttonArrowColorHover}: var(${tokens.buttonArrowColorHover});
    ${selectTokens.buttonArrowColorActive}: var(${tokens.buttonArrowColorActive});
    ${selectTokens.buttonArrowMargin}: var(${tokens.buttonArrowMargin});

    ${selectTokens.padding}: 0.125rem;

    ${selectTokens.itemPadding}: var(${tokens.selectItemPadding});
    ${selectTokens.itemBorderRadius}: calc(var(${tokens.buttonRadius}) - 0.125rem);
    ${selectTokens.itemIconMargin}: 0 0.375rem 0 0;
    ${selectTokens.itemIconSize}: 1.5rem;
    ${selectTokens.itemHeight}: var(${tokens.selectItemHeight});

    ${selectTokens.fontFamily}: var(${tokens.paginationFontFamily});
    ${selectTokens.fontSize}: var(${tokens.paginationFontSize});
    ${selectTokens.fontStyle}: var(${tokens.paginationFontStyle});
    ${selectTokens.fontWeight}: var(${tokens.paginationFontWeight});
    ${selectTokens.fontLetterSpacing}: var(${tokens.paginationLetterSpacing});
    ${selectTokens.fontLineHeight}: var(${tokens.paginationLineHeight});
`;

export const SelectPerPageTypography = styled.div`
    font-family: var(${tokens.paginationFontFamily});
    font-size: var(${tokens.paginationFontSize});
    font-style: var(${tokens.paginationFontStyle});
    font-weight: var(${tokens.paginationFontWeight});
    letter-spacing: var(${tokens.paginationLetterSpacing});
    line-height: var(${tokens.paginationLineHeight});
`;
