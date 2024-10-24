import React, { useState } from 'react';
import styled from 'styled-components';
import { IconDisclosureRight } from '@salutejs/plasma-icons';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';

import { Tooltip } from '.';
import type { TooltipProps } from '.';

const placements: Array<string> = [
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

const StoryDefault = (props: Pick<TooltipProps, 'hasArrow' | 'size' | 'usePortal'>) => {
    return (
        <StyledGrid>
            <Tooltip
                target={<Tooltip target={<Button>Btn</Button>} placement="left" opened text="left" {...props} />}
                placement="top-start"
                opened
                text="top-start"
                view="default"
                {...props}
            />
            <Tooltip target={<Button>Btn</Button>} placement="top" opened text="top" {...props} />
            <Tooltip
                target={<Tooltip target={<Button>Btn</Button>} placement="right" opened text="right" {...props} />}
                placement="top-end"
                opened
                text="top-end"
                {...props}
            />
            <Tooltip target={<Button>Btn</Button>} placement="bottom-start" opened text="bottom-start" {...props} />
            <Tooltip target={<Button>Btn</Button>} placement="bottom" opened text="bottom" {...props} />
            <Tooltip target={<Button>Btn</Button>} placement="bottom-end" opened text="bottom-end" {...props} />
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
        ...disableProps([
            'target',
            'children',
            'text',
            'opened',
            'isOpen',
            'isVisible',
            'placement',
            'offset',
            'frame',
            'view',
            'zIndex',
            'minWidth',
            'maxWidth',
            'contentLeft',
            'onDismiss',
        ]),
    },
    args: {
        size: 'm',
        hasArrow: true,
        usePortal: false,
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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <StyledRow>
                <Tooltip
                    target={<Button onClick={() => setIsOpen(!isOpen)}>Show tooltip</Button>}
                    contentLeft={<IconDisclosureRight size="xs" />}
                    {...args}
                    id="example-tooltip-firstname"
                    text="Tooltip text"
                    opened={isOpen}
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
        ...disableProps([
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
            'contentLeft',
            'onDismiss',
        ]),
    },
    args: {
        placement: 'bottom',
        maxWidth: 10,
        minWidth: 3,
        hasArrow: true,
        usePortal: false,
        animated: true,
        size: 'm',
    },
    render: (args) => <StoryLive {...args} />,
};
