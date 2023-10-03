import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { surfaceSolid03 } from '@salutejs/plasma-tokens';

import { InSpacingDecorator, disableProps } from '../../helpers';
import { Button } from '../Button';

import { Popover, PopoverProps, PopoverPlacement } from '.';

const placements: Array<PopoverPlacement> = ['top', 'bottom', 'right', 'left', 'auto'];

export default {
    title: 'Controls/Popover',
    decorators: [InSpacingDecorator],
} as Meta;

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

export const Live: Story<PopoverProps & { skidding?: number; distance?: number }> = ({
    skidding = 0,
    distance = 0,
    ...args
}) => {
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

Live.args = {
    placement: 'bottom',
    trigger: 'click',
    closeOnOverlayClick: true,
    closeOnEsc: true,
    isFocusTrapped: true,
    skidding: 0,
    distance: 6,
};

Live.argTypes = {
    placement: {
        options: placements,
        control: {
            type: 'select',
        },
    },
    trigger: {
        options: ['click', 'hover'],
        control: {
            type: 'select',
        },
    },
    ...disableProps(['isOpen']),
};
