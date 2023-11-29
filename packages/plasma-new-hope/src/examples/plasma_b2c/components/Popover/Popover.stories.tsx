import React, { useState } from 'react';
import { styled } from '@linaria/react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';

import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
    title: 'plasma_b2c/Popover',
    decorators: [WithTheme],
    component: Popover,
    argTypes: {
        placement: {
            options: ['top', 'bottom', 'right', 'left', 'auto'],
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
    },
};

export default meta;

type StoryPopoverProps = ComponentProps<typeof Popover> & {
    skidding?: number;
    distance?: number;
};

const StyledContent = styled.div`
    background: var(--plasma-colors-surface-solid03);
    padding: 1rem;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StoryDefault = (args: StoryPopoverProps) => {
    const { skidding = 0, distance = 6 } = args;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover
            isOpen={isOpen}
            onToggle={(is) => setIsOpen(is)}
            frame="theme-root"
            insidePortal={false}
            role="presentation"
            id="popover"
            target={<Button>Target</Button>}
            hasArrow
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
    render: (args) => <StoryDefault {...args} />,
};
