import React, { useRef } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { surfaceSolid03 } from '@salutejs/plasma-tokens-web';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';

import { Popover } from '.';
import type { PopoverPlacement, PopoverTrigger } from '.';

const placements: Array<PopoverPlacement> = ['top', 'bottom', 'right', 'left', 'auto'];
const triggers: Array<PopoverTrigger> = ['click', 'hover'];

export default {
    title: 'Controls/Popover',
    decorators: [InSpacingDecorator],
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
} as Meta;

type PopoverStoryProps = {
    placement?: PopoverPlacement;
    trigger?: PopoverTrigger;
    isFocusTrapped?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
    skidding?: number;
    distance?: number;
};

const args: PopoverStoryProps = {
    placement: 'bottom',
    trigger: 'click',
    closeOnOverlayClick: true,
    closeOnEsc: true,
    isFocusTrapped: true,
    skidding: 0,
    distance: 6,
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

export const Default: Story<PopoverStoryProps> = ({ skidding = 0, distance = 0, ...args }) => {
    const [isOpen, setIsOpen] = React.useState(false);

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

Default.args = args;
