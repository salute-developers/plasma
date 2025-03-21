import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '../Button/Button';

import { Popover } from './Popover';

import './style.css';

const meta: Meta<typeof Popover> = {
    title: 'Overlay/Popover',
    decorators: [InSpacingDecorator],
    component: Popover,
    argTypes: {
        placement: {
            options: ['top', 'bottom', 'right', 'left', 'auto'],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
            mapping: {
                top: 'top',
                bottom: 'bottom',
                right: 'right',
                left: 'left',
                auto: 'auto',
            },
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
            usePortal={false}
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
