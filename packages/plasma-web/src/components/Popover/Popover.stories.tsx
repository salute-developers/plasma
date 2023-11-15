import React, { useState } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { surfaceSolid03 } from '@salutejs/plasma-tokens-web';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';

import { Popover } from '.';
import type { PopoverPlacement, PopoverTrigger, PopoverProps } from '.';

const placements: Array<PopoverPlacement> = ['top', 'bottom', 'right', 'left', 'auto'];

const triggers: Array<PopoverTrigger> = ['click', 'hover'];

const meta: Meta<PopoverProps> = {
    title: 'Controls/Popover',
    decorators: [InSpacingDecorator],
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
        ...disableProps(['isOpen']),
    },
};

export default meta;

type StoryPopoverProps = {
    placement?: PopoverPlacement;
    trigger?: PopoverTrigger;
    isFocusTrapped?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
    skidding?: number;
    distance?: number;
};

const StyledArrow = styled.div`
    visibility: hidden;

    &,
    &::before {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background: ${surfaceSolid03};
    }

    &::before {
        visibility: visible;
        content: '';
        transform: rotate(45deg);
    }
`;

const StyledContent = styled.div`
    background: ${surfaceSolid03};
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StoryDefault = ({ skidding = 0, distance = 0, ...args }: StoryPopoverProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
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
                    <Button onClick={() => setIsOpen(false)}>close1</Button>
                    <Button onClick={() => setIsOpen(false)}>close2</Button>
                </StyledContent>
            </Popover>
        </>
    );
};

export const Default: StoryObj<StoryPopoverProps> = {
    args: {
        placement: 'bottom',
        trigger: 'click',
        closeOnOverlayClick: true,
        closeOnEsc: true,
        isFocusTrapped: true,
        skidding: 0,
        distance: 6,
    },
    render: (args) => <StoryDefault {...args} />,
};
