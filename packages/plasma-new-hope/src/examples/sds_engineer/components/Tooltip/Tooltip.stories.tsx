import React, { useState } from 'react';
import { styled } from '@linaria/react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';
import { Button } from '../Button/Button';
import { PopoverPlacement } from '../Popover/Popover';
import { IconDisclosureRight } from '../../../../components/_Icon';

import { Tooltip } from './Tooltip';
import type { TooltipProps } from './Tooltip';

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
    title: 'sds_engineer/Tooltip',
    decorators: [WithTheme],
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
                    <Tooltip
                        target={<Button>Btn</Button>}
                        placement="left"
                        size={size}
                        isOpen
                        hasArrow
                        text="left"
                        frame="theme-root"
                    />
                }
                placement="top-start"
                size={size}
                isOpen
                hasArrow
                text="top-start"
                frame="theme-root"
            />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="top"
                size={size}
                isOpen
                hasArrow
                text="top"
                frame="theme-root"
            />
            <Tooltip
                target={
                    <Tooltip
                        target={<Button>Btn</Button>}
                        placement="right"
                        size={size}
                        isOpen
                        hasArrow
                        text="right"
                        frame="theme-root"
                    />
                }
                placement="top-end"
                size={size}
                isOpen
                hasArrow
                text="top-end"
                frame="theme-root"
            />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="bottom-start"
                size={size}
                isOpen
                hasArrow
                text="bottom-start"
                frame="theme-root"
            />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="bottom"
                size={size}
                isOpen
                hasArrow
                text="bottom"
                frame="theme-root"
            />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="bottom-end"
                size={size}
                isOpen
                hasArrow
                text="bottom-end"
                frame="theme-root"
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
                        <input
                            name="Имя"
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
                    frame="theme-root"
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
