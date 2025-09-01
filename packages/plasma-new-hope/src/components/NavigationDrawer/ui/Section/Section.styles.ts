import { styled } from '@linaria/react';
import { IconDisclosureDownCentered } from 'src/components/_Icon';
import { applyEllipsis } from 'src/mixins';

import { tokens } from '../../NavigationDrawer.tokens';

export const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding: var(${tokens.sectionPadding});
    gap: var(${tokens.sectionHeaderGap});
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    height: var(${tokens.sidebarWidthClosed});
    min-width: var(${tokens.sidebarWidthClosed});

    color: var(${tokens.sectionColor});
    font-size: var(${tokens.sectionFontSize});
    font-family: var(--plasma-typo-body-s-font-family);
    font-style: var(--plasma-typo-text-s-font-style);
    font-weight: var(--plasma-typo-text-s-font-weight);
    line-height: var(--plasma-typo-text-s-line-height);
    letter-spacing: var(--plasma-typo-text-s-letter-spacing);

    border-radius: var(${tokens.sectionBorderRadius});

    user-select: none;
`;

export const SectionDivider = styled.div`
    height: var(${tokens.dividerHeight});
    background: var(${tokens.dividerColor});
    margin: 10px 0;
`;

export const SectionIcon = styled.div`
    width: var(${tokens.iconContainerSize});
    min-width: var(${tokens.iconContainerSize});
    height: var(${tokens.iconContainerSize});
    display: flex;

    div {
        width: var(${tokens.iconSize});
        height: var(${tokens.iconSize});
    }
`;

export const ArrowIcon = styled(IconDisclosureDownCentered)`
    margin: auto;
`;

export const Label = styled.span`
    ${applyEllipsis()};
`;
