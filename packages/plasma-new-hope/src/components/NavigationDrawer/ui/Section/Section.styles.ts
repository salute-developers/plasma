import { styled } from '@linaria/react';
import { IconDisclosureDownCentered, IconDisclosureUpCentered } from 'src/components/_Icon';

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

    color: var(${tokens.sectionColor});
    font-size: var(${tokens.sectionFontSize});

    font-style: var(--plasma-typo-text-s-font-style);
    font-weight: var(--plasma-typo-text-s-font-weight);
    line-height: var(--plasma-typo-text-s-line-height);
    letter-spacing: var(--plasma-typo-text-s-letter-spacing);

    svg {
        color: var(${tokens.sectionColor});
    }
`;

export const SectionDivider = styled.div`
    height: var(${tokens.dividerHeight});
    background: var(${tokens.dividerColor});
    margin: 10px 0;
`;

export const SectionIcon = styled.div`
    width: 16px;
    height: var(--plasma-typo-text-s-line-height);
    display: flex;
`;

export const StyledIconDisclosureDownCentered = styled(IconDisclosureDownCentered)`
    margin: auto;
`;

export const StyledIconDisclosureUpCentered = styled(IconDisclosureUpCentered)`
    margin: auto;
`;
