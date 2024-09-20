import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../../engines';
import { iconButtonConfig, iconButtonTokens } from '../../../IconButton';
import { tokens as attachTokens } from '../../Attach.tokens';

const mergedConfig = mergeConfig(iconButtonConfig);
const IconButton = component(mergedConfig);

export const StyledIconButton = styled(IconButton)`
    ${iconButtonTokens.iconButtonColor}: var(${attachTokens.iconButtonColor});
    ${iconButtonTokens.iconButtonBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
    ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonLoadingBackgroundColor});
    ${iconButtonTokens.iconButtonColorHover}: var(${attachTokens.iconButtonColorHover});
    ${iconButtonTokens.iconButtonBackgroundColorHover}: var(${attachTokens.iconButtonBackgroundColorHover});
    ${iconButtonTokens.iconButtonColorActive}: var(${attachTokens.iconButtonColorActive});
    ${iconButtonTokens.iconButtonBackgroundColorActive}: var(${attachTokens.iconButtonBackgroundColorActive});

    ${iconButtonTokens.iconButtonScaleHover}: var(${attachTokens.iconButtonScaleHover});
    ${iconButtonTokens.iconButtonScaleActive}: var(${attachTokens.iconButtonScaleActive});
    ${iconButtonTokens.iconButtonHeight}: var(${attachTokens.iconButtonHeight});
    ${iconButtonTokens.iconButtonWidth}: var(${attachTokens.iconButtonWidth});
    ${iconButtonTokens.iconButtonPadding}: var(${attachTokens.iconButtonPadding});
    ${iconButtonTokens.iconButtonRadius}: var(${attachTokens.iconButtonRadius});
    ${iconButtonTokens.iconButtonRadiusCircle}: var(${attachTokens.iconButtonRadiusCircle});

    ${iconButtonTokens.iconButtonFontFamily}: var(${attachTokens.iconButtonFontFamily});
    ${iconButtonTokens.iconButtonFontSize}: var(${attachTokens.iconButtonFontSize});
    ${iconButtonTokens.iconButtonFontStyle}: var(${attachTokens.iconButtonFontStyle});
    ${iconButtonTokens.iconButtonFontWeight}: var(${attachTokens.iconButtonFontWeight});
    ${iconButtonTokens.iconButtonLetterSpacing}: var(${attachTokens.iconButtonLetterSpacing});
    ${iconButtonTokens.iconButtonLineHeight}: var(${attachTokens.iconButtonLineHeight});

    ${iconButtonTokens.iconButtonDisabledOpacity}: var(${attachTokens.iconButtonDisabledOpacity});
    ${iconButtonTokens.iconButtonFocusColor}: var(${attachTokens.iconButtonFocusColor});
    ${iconButtonTokens.iconButtonSpinnerColor}: var(${attachTokens.iconButtonSpinnerColor});
    ${iconButtonTokens.iconButtonSpinnerSize}: var(${attachTokens.iconButtonSpinnerSize});

    flex-shrink: 0;
`;

export const StyledIconButtonCancel = styled(IconButton)`
    ${iconButtonTokens.iconButtonColor}: var(${attachTokens.iconButtonCancelColor});
    ${iconButtonTokens.iconButtonBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
    ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelLoadingBackgroundColor});
    ${iconButtonTokens.iconButtonColorHover}: var(${attachTokens.iconButtonCancelColorHover});
    ${iconButtonTokens.iconButtonBackgroundColorHover}: var(${attachTokens.iconButtonCancelBackgroundColorHover});
    ${iconButtonTokens.iconButtonColorActive}: var(${attachTokens.iconButtonCancelColorActive});
    ${iconButtonTokens.iconButtonBackgroundColorActive}: var(${attachTokens.iconButtonCancelBackgroundColorActive});

    ${iconButtonTokens.iconButtonScaleHover}: var(${attachTokens.iconButtonCancelScaleHover});
    ${iconButtonTokens.iconButtonScaleActive}: var(${attachTokens.iconButtonCancelScaleActive});
    ${iconButtonTokens.iconButtonHeight}: var(${attachTokens.iconButtonCancelHeight});
    ${iconButtonTokens.iconButtonWidth}: var(${attachTokens.iconButtonCancelWidth});
    ${iconButtonTokens.iconButtonPadding}: var(${attachTokens.iconButtonCancelPadding});
    ${iconButtonTokens.iconButtonRadius}: var(${attachTokens.iconButtonCancelRadius});
    ${iconButtonTokens.iconButtonRadiusCircle}: var(${attachTokens.iconButtonCancelRadiusCircle});

    ${iconButtonTokens.iconButtonFontFamily}: var(${attachTokens.iconButtonCancelFontFamily});
    ${iconButtonTokens.iconButtonFontSize}: var(${attachTokens.iconButtonCancelFontSize});
    ${iconButtonTokens.iconButtonFontStyle}: var(${attachTokens.iconButtonCancelFontStyle});
    ${iconButtonTokens.iconButtonFontWeight}: var(${attachTokens.iconButtonCancelFontWeight});
    ${iconButtonTokens.iconButtonLetterSpacing}: var(${attachTokens.iconButtonCancelLetterSpacing});
    ${iconButtonTokens.iconButtonLineHeight}: var(${attachTokens.iconButtonCancelLineHeight});

    ${iconButtonTokens.iconButtonDisabledOpacity}: var(${attachTokens.iconButtonCancelDisabledOpacity});
    ${iconButtonTokens.iconButtonFocusColor}: var(${attachTokens.iconButtonCancelFocusColor});
    ${iconButtonTokens.iconButtonSpinnerColor}: var(${attachTokens.iconButtonCancelSpinnerColor});
    ${iconButtonTokens.iconButtonSpinnerSize}: var(${attachTokens.iconButtonCancelSpinnerSize});
`;
