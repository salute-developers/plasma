import { counterConfig, counterTokens } from 'src/components/Counter';
import { styled } from '@linaria/react';
import { component, mergeConfig } from 'src/engines';
import { indicatorTokens, indicatorConfig } from 'src/components/Indicator';

import { tokens } from '../../NavigationDrawer.tokens';

const mergedCounterConfig = mergeConfig(counterConfig);
const Counter = component(mergedCounterConfig);

const indicatorMergedConfig = mergeConfig(indicatorConfig);
const Indicator: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = component(
    indicatorMergedConfig,
) as never;

export const ExtraCounter = styled(Counter)`
    margin: auto;

    ${counterTokens.background}: var(${tokens.counterBackground});
    ${counterTokens.color}: var(${tokens.counterColor});
    ${counterTokens.borderRadius}: var(${tokens.counterBorderRadius});
    ${counterTokens.height}: var(${tokens.counterHeight});
    ${counterTokens.padding}: var(${tokens.counterPadding});
    ${counterTokens.fontFamily}: var(${tokens.counterFontFamily});
    ${counterTokens.fontSize}: var(${tokens.counterFontSize});
    ${counterTokens.fontStyle}: var(${tokens.counterFontStyle});
    ${counterTokens.fontWeight}: var(${tokens.counterFontWeight});
    ${counterTokens.letterSpacing}: var(${tokens.counterLetterSpacing});
    ${counterTokens.lineHeight}: var(${tokens.counterLineHeight});
`;

export const StyledIndicator = styled(Indicator)`
    margin: auto;

    ${indicatorTokens.size}: var(${tokens.menuItemIndicatorSize});
    ${indicatorTokens.color}: var(${tokens.menuItemIndicatorColor});
`;

export const IconWrapper = styled.div`
    position: relative;
    width: var(${tokens.menuItemIconContainerSize});
    height: var(${tokens.menuItemIconContainerSize});
    display: flex;
`;

export const Icon = styled.div`
    margin: auto;
`;

export const RightContentWrapper = styled.div`
    position: relative;
    height: var(${tokens.menuItemIconContainerSize});
    display: flex;
`;
