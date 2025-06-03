import React, { useState } from 'react';
import { styled } from '@linaria/react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '../Button/Button';
import { WithTheme } from '../../_helpers';
import { IconDisclosureRight } from '../../../components/_Icon';
import { IconButton } from '../IconButton/IconButton';

import { Popover, PopoverPlacement } from './Popover';

import './style.css';

const placements: Array<PopoverPlacement> = [
    'top',
    'top-start',
    'top-end',

    'bottom',
    'bottom-start',
    'bottom-end',

    'left',
    'left-start',
    'left-end',

    'right',
    'right-start',
    'right-end',

    'auto',
];

const meta: Meta<typeof Popover> = {
    title: 'Overlay/Popover',
    decorators: [WithTheme],
    component: Popover,
    argTypes: {
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
        trigger: {
            options: ['click', 'hover'],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'click' } },
        },
        closeOnOverlayClick: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: true } },
        },
        closeOnEsc: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: true } },
        },
        isFocusTrapped: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: true } },
        },
        skidding: {
            control: {
                type: 'number',
            },
            table: { defaultValue: { summary: 0 } },
        },
        distance: {
            control: {
                type: 'number',
            },
            table: { defaultValue: { summary: 6 } },
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
        hasArrow: true,
        animated: true,
    },
};

export default meta;

type StoryPopoverProps = ComponentProps<typeof Popover> & {
    skidding?: number;
    distance?: number;
};

const StyledContent = styled.div`
    background: var(--surface-solid-tertiary);
    padding: 1rem;
    border-radius: var(--popover-border-radius);

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StoryDefault = (args: StoryPopoverProps) => {
    const { skidding = 0, distance = 6 } = args;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover
            opened={isOpen}
            onToggle={(is) => setIsOpen(is)}
            frame="theme-root"
            usePortal={false}
            role="presentation"
            id="popover"
            target={<Button>Target</Button>}
            offset={[skidding, distance]}
            {...args}
        >
            <StyledContent>
                <>Content</>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </StyledContent>
        </Popover>
    );
};

export const Default: StoryObj<StoryPopoverProps> = {
    args: {
        placement: 'bottom-start',
    },
    render: (args) => <StoryDefault {...args} />,
};
