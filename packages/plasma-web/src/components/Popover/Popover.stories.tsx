import React, { useRef } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';

import { InSpacingDecorator, disableProps } from '../../helpers';
import { Button } from '../Button';

import { Popover, PopoverProps, PopoverPlacement } from '.';

const placements: Array<PopoverPlacement> = ['top', 'bottom', 'right', 'left', 'auto'];

export default {
    title: 'Controls/Popover',
    decorators: [InSpacingDecorator],
} as Meta;

export const Live: Story<PopoverProps> = (args) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = (is) => {
        setIsOpen(is);
        console.log('toggleO', is);
    };

    const click = () => {
        setIsOpen(true);
        console.log('clickO', isOpen);
    };

    return (
        <>
            <Button onClick={click}>Open</Button>
            <Popover
                isOpen={isOpen}
                onToggle={toggle}
                role="presentation"
                key="popover"
                id="popover"
                target={<div>Trigger</div>}
                {...args}
            >
                <>Content</>
            </Popover>
        </>
    );
};

Live.args = {
    placement: 'bottom',
    showArrow: false,
    trigger: 'hover',
    closeOnOverlayClick: true,
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
