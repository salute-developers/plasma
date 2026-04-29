import styled from 'styled-components';
import { iconButtonConfig, iconButtonTokens } from 'src/components/IconButton';
import { component, mergeConfig } from 'src/engines';

import { TourCardProps } from './Card.types';
import { tokens } from './Card.tokens';

const mergedConfig = mergeConfig(iconButtonConfig);
export const IconButton = component(mergedConfig);

const WIDTH_VERTICAL = 302;
const WIDTH_HORIZONTAL = 720;

export const TourCard = styled.div<{ orientation: TourCardProps['orientation'] }>`
    position: relative;
    display: flex;
    flex-direction: ${({ orientation }) => (orientation === 'horizontal' ? 'row-reverse' : 'column')};
    padding: var(${tokens.padding});
    background: var(${tokens.background});
    border-radius: var(${tokens.borderRadius});
    box-sizing: border-box;
    width: ${({ orientation }) => (orientation === 'horizontal' ? WIDTH_HORIZONTAL : WIDTH_VERTICAL)}px;
    height: ${({ orientation }) => (orientation === 'horizontal' ? `${WIDTH_VERTICAL}px` : 'auto')};
    max-height: ${({ orientation }) => (orientation === 'horizontal' ? WIDTH_VERTICAL : WIDTH_HORIZONTAL)}px;
    gap: ${({ orientation }) => (orientation === 'horizontal' ? `var(${tokens.gap})` : '0')};
`;

export const CardBody = styled.div<{ orientation: TourCardProps['orientation'] }>`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Img = styled.img<{ orientation: TourCardProps['orientation'] }>`
    width: ${({ orientation }) => (orientation === 'horizontal' ? 'auto' : '100%')};
    height: ${({ orientation }) => (orientation === 'horizontal' ? '100%' : 'auto')};
    border-radius: calc(var(${tokens.borderRadius}) - var(${tokens.padding}));
`;

export const CardText = styled.div<{ onlyText: boolean }>`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: var(${tokens.textPadding});
    padding: ${({ onlyText }) => (onlyText ? `var(${tokens.textPaddingExtra})` : `var(${tokens.textPadding})`)};
    gap: var(${tokens.textGap});
`;

export const Title = styled.span`
    color: var(${tokens.titleColor});
    font-family: var(${tokens.titleFontFamily});
    font-size: var(${tokens.titleFontSize});
    font-style: var(${tokens.titleFontStyle});
    letter-spacing: var(${tokens.titleFontLetterSpacing});
    line-height: var(${tokens.titleFontLineHeight});
    font-weight: var(${tokens.titleFontWeight});
`;

export const Description = styled.span`
    color: var(${tokens.descriptionColor});
    font-family: var(${tokens.descriptionFontFamily});
    font-size: var(${tokens.descriptionFontSize});
    font-style: var(${tokens.descriptionFontStyle});
    line-height: var(${tokens.descriptionFontLineHeight});
    font-weight: var(${tokens.descriptionFontWeight});
`;

export const Controls = styled.div<{ orientation: TourCardProps['orientation'] }>`
    display: flex;
    flex-direction: ${({ orientation }) => (orientation === 'horizontal' ? 'row' : 'column')};
    align-items: ${({ orientation }) => (orientation === 'horizontal' ? 'center' : 'stretch')};
    justify-content: ${({ orientation }) => (orientation === 'horizontal' ? 'space-between' : 'normal')};
`;

export const DotsContainer = styled.ul<{ orientation: TourCardProps['orientation'] }>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({ orientation }) => (orientation === 'horizontal' ? '0 0 0 8px' : `var(${tokens.dotContainerMargin})`)};
    padding: 0;
    list-style: none;

    gap: var(${tokens.dotsGap});
`;

export const Dot = styled.li<{ isActive: boolean }>`
    width: var(${tokens.dotSize});
    height: var(${tokens.dotSize});

    cursor: pointer;
    border-radius: 50%;
    background: ${({ isActive }) => (isActive ? `var(${tokens.dotActiveBackground})` : `var(${tokens.dotBackground})`)};
    transition: background 0.3s ease-in-out;

    &:hover {
        background: ${({ isActive }) =>
            isActive
                ? `var(${tokens.dotActiveBackgroundHover},var(${tokens.dotActiveBackground}))`
                : `var(${tokens.dotBackgroundHover})`};
    }

    &:active {
        background: ${({ isActive }) =>
            isActive
                ? `var(${tokens.dotActiveBackgroundActive}, var(${tokens.dotActiveBackground}))`
                : `var(${tokens.dotBackgroundActive})`};
    }
`;

export const ActionButtonsContainer = styled.div<{ orientation: TourCardProps['orientation'] }>`
    margin: ${({ orientation }) => (orientation === 'horizontal' ? '0' : `var(${tokens.actionButtonsMargin})`)};
    order: ${({ orientation }) => (orientation === 'horizontal' ? '-1' : 'auto')};
`;

export const SkipButtonContainer = styled.div<{ orientation: TourCardProps['orientation'] }>`
    display: flex;
    justify-content: center;
    margin: ${({ orientation }) => (orientation === 'horizontal' ? '0 0 0 8px' : `var(${tokens.skipButtonMargin})`)};
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    top: 1rem;
    right: 1rem;

    ${iconButtonTokens.iconButtonColor}: var(${tokens.closeButtonColor});
    ${iconButtonTokens.iconButtonBackgroundColor}: var(${tokens.closeButtonBackgroundColor});
    ${iconButtonTokens.iconButtonColorHover}: var(${tokens.closeButtonColorHover});
    ${iconButtonTokens.iconButtonColorActive}: var(${tokens.closeButtonColorActive});

    ${iconButtonTokens.iconButtonHeight}: var(${tokens.closeButtonWidth});
    ${iconButtonTokens.iconButtonWidth}: var(${tokens.closeButtonHeight});
    ${iconButtonTokens.iconButtonRadius}: var(${tokens.closeButtonRadius});

    ${iconButtonTokens.iconButtonFocusColor}: var(${tokens.closeButtonFocusColor});
`;
