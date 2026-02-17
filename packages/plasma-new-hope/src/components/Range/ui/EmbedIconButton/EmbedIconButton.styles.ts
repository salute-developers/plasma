import { styled } from '@linaria/react';
import { component, mergeConfig } from 'src/engines';
import { embedIconButtonConfig, embedIconButtonTokens } from 'src/components/EmbedIconButton';

import { tokens } from '../../Range.tokens';

const mergedConfig = mergeConfig(embedIconButtonConfig);
const EmbedIconButton = component(mergedConfig);

export const EmbedIconButtonUI = styled(EmbedIconButton)`
    ${embedIconButtonTokens.embedIconButtonColor}: var(${tokens.contentSlotRightColor}, var(${tokens.contentSlotColor}));
    ${embedIconButtonTokens.embedIconButtonColorHover}: var(${tokens.contentSlotRightColorHover}, var(${tokens.contentSlotColorHover}));
    ${embedIconButtonTokens.embedIconButtonColorActive}: var(${tokens.contentSlotRightColorActive}, var(${tokens.contentSlotColorActive}));
    
    ${embedIconButtonTokens.embedIconButtonHeight}: var(${tokens.embedIconButtonHeight});
    ${embedIconButtonTokens.embedIconButtonWidth}: var(${tokens.embedIconButtonWidth});
    ${embedIconButtonTokens.embedIconButtonPadding}: var(${tokens.embedIconButtonPadding});
    ${embedIconButtonTokens.embedIconButtonRadius}: var(${tokens.embedIconButtonRadius});
    ${embedIconButtonTokens.embedIconButtonFocusColor}: var(${tokens.embedIconButtonFocusColor});
`;
