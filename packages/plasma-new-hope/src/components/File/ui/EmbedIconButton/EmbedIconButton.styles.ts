import { styled } from '@linaria/react';
import { component, mergeConfig } from 'src/engines';
import { embedIconButtonConfig, embedIconButtonTokens } from 'src/components/EmbedIconButton';

import { tokens } from '../../File.tokens';

const mergedConfig = mergeConfig(embedIconButtonConfig);
const EmbedIconButton = component(mergedConfig);

export const EmbedIconButtonUI = styled(EmbedIconButton)`
    ${embedIconButtonTokens.embedIconButtonColor}: var(${tokens.embedIconButtonColor});
    ${embedIconButtonTokens.embedIconButtonColorHover}: var(${tokens.embedIconButtonColorHover});
    ${embedIconButtonTokens.embedIconButtonColorActive}: var(${tokens.embedIconButtonColorActive});
    ${embedIconButtonTokens.embedIconButtonHeight}: var(${tokens.embedIconButtonHeight});
    ${embedIconButtonTokens.embedIconButtonWidth}: var(${tokens.embedIconButtonWidth});
    ${embedIconButtonTokens.embedIconButtonPadding}: var(${tokens.embedIconButtonPadding});
    ${embedIconButtonTokens.embedIconButtonRadius}: var(${tokens.embedIconButtonRadius});
    ${embedIconButtonTokens.embedIconButtonFocusColor}: var(${tokens.embedIconButtonFocusColor});
`;
