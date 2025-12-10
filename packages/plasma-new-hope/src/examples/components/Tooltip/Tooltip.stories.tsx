import React, { useState } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { Button } from '../Button/Button';
import { PopoverPlacement } from '../Popover/Popover';
import { IconDisclosureRight } from '../../../components/_Icon';

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

const disabledProps = [
    'target',
    'children',
    'text',
    'opened',
    'isOpen',
    'isVisible',
    'offset',
    'frame',
    'view',
    'zIndex',
    'minWidth',
    'maxWidth',
    'contentLeft',
    'onDismiss',
];

const meta: Meta<TooltipProps> = {
    title: 'Overlay/Tooltip',
    decorators: [WithTheme],
    component: Tooltip,
    argTypes: {
        ...disableProps(['isVisible', 'isOpen', 'onDismiss']),
    },
    parameters: {
        docs: { story: { inline: false, iframeHeight: '20rem' } },
    },
};

export default meta;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 1rem 3.5rem;
    padding: 3.5rem;
`;

const StoryDefault = (args: TooltipProps) => {
    return (
        <StyledGrid>
            <Tooltip
                target={
                    <Tooltip
                        target={<Button>Btn</Button>}
                        placement="left"
                        {...args}
                        opened
                        hasArrow
                        text="left"
                        frame="theme-root"
                    />
                }
                placement="top-start"
                {...args}
                opened
                hasArrow
                text="top-start"
                frame="theme-root"
            />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="top"
                {...args}
                opened
                hasArrow
                text="top"
                frame="theme-root"
            />
            <Tooltip
                target={
                    <Tooltip
                        target={<Button>Btn</Button>}
                        placement="right"
                        {...args}
                        opened
                        hasArrow
                        text="right"
                        frame="theme-root"
                    />
                }
                placement="top-end"
                {...args}
                opened
                hasArrow
                text="top-end"
                frame="theme-root"
            />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="bottom-start"
                {...args}
                opened
                hasArrow
                text="bottom-start"
                frame="theme-root"
            />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="bottom"
                {...args}
                opened
                hasArrow
                text="bottom"
                frame="theme-root"
            />
            <Tooltip
                target={<Button>Btn</Button>}
                placement="bottom-end"
                {...args}
                opened
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
        ...disableProps([...disabledProps, 'placement']),
    },
    args: {
        maxWidth: 10,
        minWidth: 3,
        hasArrow: true,
        usePortal: false,
        animated: true,
        size: 'm',
    },
    render: (args) => <StoryDefault {...args} />,
};

const StyledRow = styled.div`
    display: flex;
    width: 150vw;
    height: auto;
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
            mapping: placements,
        },
        size: {
            options: ['m', 's'],
            control: {
                type: 'select',
            },
        },
        trigger: {
            options: ['click', 'hover', 'none'],
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
