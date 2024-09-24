import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../../engines';
import { buttonConfig, buttonTokens } from '../../../Button';
import { tokens as attachTokens } from '../../Attach.tokens';

const mergedConfig = mergeConfig(buttonConfig);
const Button = component(mergedConfig);

export const StyledButton = styled(Button)`
    ${buttonTokens.buttonColor}: var(${attachTokens.buttonColor});
    ${buttonTokens.buttonValueColor}: var(${attachTokens.buttonValueColor});
    ${buttonTokens.buttonBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
    ${buttonTokens.buttonColorHover}: var(${attachTokens.buttonColorHover});
    ${buttonTokens.buttonBackgroundColorHover}: var(${attachTokens.buttonBackgroundColorHover});
    ${buttonTokens.buttonColorActive}: var(${attachTokens.buttonColorActive});
    ${buttonTokens.buttonBackgroundColorActive}: var(${attachTokens.buttonBackgroundColorActive});
    ${buttonTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonLoadingBackgroundColor});

    ${buttonTokens.buttonScaleHover}: var(${attachTokens.buttonScaleHover});
    ${buttonTokens.buttonScaleActive}: var(${attachTokens.buttonScaleActive});
    ${buttonTokens.buttonHeight}: var(${attachTokens.buttonHeight});
    ${buttonTokens.buttonWidth}: var(${attachTokens.buttonWidth});
    ${buttonTokens.buttonPadding}: var(${attachTokens.buttonPadding});
    ${buttonTokens.buttonRadius}: var(${attachTokens.buttonRadius});
    ${buttonTokens.buttonRadiusCircle}: var(${attachTokens.buttonRadiusCircle});

    ${buttonTokens.buttonFontFamily}: var(${attachTokens.buttonFontFamily});
    ${buttonTokens.buttonFontSize}: var(${attachTokens.buttonFontSize});
    ${buttonTokens.buttonFontStyle}: var(${attachTokens.buttonFontStyle});
    ${buttonTokens.buttonFontWeight}: var(${attachTokens.buttonFontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${attachTokens.buttonLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${attachTokens.buttonLineHeight});

    ${buttonTokens.buttonLeftContentMargin}: var(${attachTokens.buttonLeftContentMargin});
    ${buttonTokens.buttonLeftContentAlignSelf}: var(${attachTokens.buttonLeftContentAlignSelf});
    ${buttonTokens.buttonRightContentMargin}: var(${attachTokens.buttonRightContentMargin});
    ${buttonTokens.buttonRightContentAlignSelf}: var(${attachTokens.buttonRightContentAlignSelf});
    ${buttonTokens.buttonValueMargin}: var(${attachTokens.buttonValueMargin});

    ${buttonTokens.buttonDisabledOpacity}: var(${attachTokens.buttonDisabledOpacity});
    ${buttonTokens.buttonFocusColor}: var(${attachTokens.buttonFocusColor});

    ${buttonTokens.buttonSpinnerColor}: var(${attachTokens.buttonSpinnerColor});
    ${buttonTokens.buttonSpinnerSize}: var(${attachTokens.buttonSpinnerSize});
`;
