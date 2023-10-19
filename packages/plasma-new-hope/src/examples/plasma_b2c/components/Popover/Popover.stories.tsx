import React, { useState } from 'react';
import { styled } from '@linaria/react';
import { Meta, Story } from '@storybook/react';

import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';

import { Popover } from './Popover';
import type { PopoverPlacement, PopoverTrigger } from './Popover';

const placements: Array<PopoverPlacement> = ['top', 'bottom', 'right', 'left', 'auto'];
const triggers: Array<PopoverTrigger> = ['click', 'hover'];

type PopoverStoryProps = {
    skidding?: number;
    distance?: number;
};

export default ({
    title: 'plasma_b2c/Popover',
    decorators: [WithTheme],
    component: Popover,
    argTypes: {
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        trigger: {
            options: triggers,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        placement: 'bottom',
        trigger: 'click',
        closeOnOverlayClick: true,
        closeOnEsc: true,
        isFocusTrapped: true,
        skidding: 0,
        distance: 6,
    },
} as unknown) as Meta<typeof Popover>;

const StyledArrow = styled.div`
    visibility: hidden;

    &,
    &::before {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background: var(--plasma-colors-surface-solid03);
    }

    &::before {
        visibility: visible;
        content: '';
        transform: rotate(45deg);
    }
`;

const StyledContent = styled.div`
    background: var(--plasma-colors-surface-solid03);
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Default: Story<typeof Popover & PopoverStoryProps> = (args) => {
    const { skidding = 0, distance = 6 } = args;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover
            isOpen={isOpen}
            onToggle={(is) => setIsOpen(is)}
            role="presentation"
            id="popover"
            target={<Button>Target</Button>}
            arrow={<StyledArrow />}
            offset={[skidding, distance]}
            {...args}
        >
            <StyledContent>
                <>Content</>
                <Button onClick={() => setIsOpen(false)}>close</Button>
            </StyledContent>
        </Popover>
    );
};
