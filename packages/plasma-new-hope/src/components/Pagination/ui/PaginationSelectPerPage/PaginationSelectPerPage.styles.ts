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
    ${selectTokens.targetButtonColor}: var(${tokens.buttonColor});
    ${selectTokens.targetButtonColorHover}: var(${tokens.buttonColorHover});
    ${selectTokens.targetButtonColorActive}: var(${tokens.buttonColorActive});
    ${selectTokens.targetButtonBackgroundColor}: var(${tokens.buttonBackgroundColor});
    ${selectTokens.targetButtonBackgroundColorHover}: var(${tokens.buttonBackgroundColorHover});
    ${selectTokens.targetButtonBackgroundColorActive}: var(${tokens.buttonBackgroundColorActive});
    ${selectTokens.targetHeight}: var(${tokens.buttonHeight});
    ${selectTokens.targetButtonPadding}: var(${tokens.selectTargetPadding});
    ${selectTokens.borderRadius}: var(${tokens.buttonRadius});
    ${selectTokens.targetButtonArrowColor}: var(${tokens.buttonArrowColor});
    ${selectTokens.targetButtonArrowColorHover}: var(${tokens.buttonArrowColorHover});
    ${selectTokens.targetButtonArrowColorActive}: var(${tokens.buttonArrowColorActive});
    ${selectTokens.targetButtonArrowMargin}: var(${tokens.buttonArrowMargin});

    ${selectTokens.padding}: 0.125rem;
    ${selectTokens.focusOffset}: 0.125rem;
    ${selectTokens.itemPadding}: var(${tokens.selectItemPadding});
    ${selectTokens.itemBorderRadius}: calc(var(${tokens.buttonRadius}) - 0.125rem);
    ${selectTokens.itemIconMargin}: 0 0.375rem 0 0;
    ${selectTokens.itemIconSize}: 1.5rem;
    ${selectTokens.itemHeight}: var(${tokens.selectItemHeight});
`;

export const SelectPerPageTypography = styled.div`
    font-family: var(${tokens.paginationFontFamily});
    font-size: var(${tokens.paginationFontSize});
    font-style: var(${tokens.paginationFontStyle});
    font-weight: var(${tokens.paginationFontWeight});
    letter-spacing: var(${tokens.paginationLetterSpacing});
    line-height: var(${tokens.paginationLineHeight});
`;
