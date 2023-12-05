import React, { useState } from 'react';
import styled from 'styled-components';
import { IconDisclosureRight } from '@salutejs/plasma-icons';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';
import { PopoverPlacement } from '../Popover';
import { TextField } from '../TextField';

import { Tooltip } from '.';
import type { TooltipProps } from '.';

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

const meta: Meta<TooltipProps> = {
    title: 'Controls/Tooltip',
    decorators: [InSpacingDecorator],
    component: Tooltip,
};

export default meta;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 1rem 3.5rem;
    padding: 3.5rem;
`;

const StoryDefault = ({ size }: TooltipProps) => {
    return (
        <StyledGrid>
            <Tooltip
                target={
                    <Tooltip target={<Button>Btn</Button>} placement="left" size={size} isOpen hasArrow text="left" />
                }
                placement="top-start"
                size={size}
                isOpen
                hasArrow
                text="top-start"
            />
            <Tooltip target={<Button>Btn</Button>} placement="top" size={size} isOpen hasArrow text="top" />
            <Tooltip
                target={
                    <Tooltip target={<Button>Btn</Button>} placement="right" size={size} isOpen hasArrow text="right" />
                }
                placement="top-end"
                size={size}
                isOpen
                hasArrow
                text="top-end"
            />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="bottom-start"
                size={size}
                isOpen
                hasArrow
                text="bottom-start"
            />
            <Tooltip target={<Button>Btn</Button>} placement="bottom" size={size} isOpen hasArrow text="bottom" />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="bottom-end"
                size={size}
                isOpen
                hasArrow
                text="bottom-end"
            />
        </StyledGrid>
    );
};

export const Default: StoryObj<TooltipProps> = {
    argTypes: {
        size: {
            options: ['m', 's'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        size: 'm',
    },
    render: (args) => <StoryDefault {...args} />,
};

const StyledRow = styled.div`
    display: flex;
    width: 150vw;
    height: 150vh;
    padding: 10rem;
`;

const StoryLive = (args: TooltipProps) => {
    const [text, setText] = useState('Type here');

    return (
        <>
            <StyledRow>
                <Tooltip
                    target={
                        <TextField
                            label="Имя"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            aria-describedby="example-tooltip-firstname"
                        />
                    }
                    contentLeft={<IconDisclosureRight size="xs" />}
                    {...args}
                    id="example-tooltip-firstname"
                    text={text}
                    isOpen
                />
            </StyledRow>
        </>
    );
};

export const Live: StoryObj<TooltipProps> = {
    argTypes: {
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['m', 's'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        placement: 'bottom',
        maxWidth: 10,
        minWidth: 3,
        hasArrow: true,
        size: 'm',
    },
    render: (args) => <StoryLive {...args} />,
};
