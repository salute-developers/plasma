import { styled } from '@linaria/react';
import { component, mergeConfig } from 'src/engines';

import { popoverConfig } from '../../../Popover';
import { classes, tokens } from '../../DateTimePicker.tokens';

const mergedPopoverConfig = mergeConfig(popoverConfig);
const Popover = component(mergedPopoverConfig);

export const StyledPopover = styled(Popover)<{ innerWidth?: string; innerHeight?: string }>`
    .${classes.root} {
        box-sizing: border-box;

        display: flex;
        gap: var(${tokens.popoverGap});
        border-radius: var(${tokens.popoverBorderRadius});
        padding: var(${tokens.popoverPadding});

        background: var(${tokens.popoverBackgroundColor});
        box-shadow: var(${tokens.popoverShadow});

        overflow: hidden;

        width: ${({ innerWidth }) => innerWidth || 'fit-content'};
        height: ${({ innerHeight }) => innerHeight || 'fit-content'};
    }
`;

export const StyledSeparator = styled.div`
    background-color: var(${tokens.popoverSeparatorBackground});
    min-width: 0.063rem;
`;
