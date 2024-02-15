import React, { useState } from 'react';
import { styled } from '@linaria/react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';
import { Overlay } from '../../../../components/Overlay';

const onOverlayClick = action('onOverlayClick');

export default {
    title: 'plasma_b2c/Overlay',
    decorators: [WithTheme],
    argTypes: {
        isClickable: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: true } },
        },
        withBlur: {
            control: {
                type: 'boolean',
            },
            table: { defaultValue: { summary: false } },
        },
        ...disableProps(['onOverlayClick', 'zIndex']),
    },
} as Meta;

type StoryOverlayProps = ComponentProps<typeof Overlay>;

const StyledButton = styled(Button)`
    margin: 1rem;
    width: 15rem;
`;

const StyledCloseButton = styled(Button)`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 101;
    transform: translate(-50%, -50%);
    width: 15rem;
`;

const StoryDefault = (props: StoryOverlayProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <StyledButton text="Показать overlay" onClick={() => setIsVisible(true)} />
            {isVisible && (
                <>
                    <Overlay {...props} />
                    <StyledCloseButton text=" Скрыть overlay" onClick={() => setIsVisible(false)} />
                </>
            )}
        </>
    );
};

export const Default: StoryObj<StoryOverlayProps> = {
    args: {
        zIndex: '100',
        backgroundColorProperty: 'var(--overlay-soft)',
        withBlur: false,
        transparent: false,
        isClickable: true,
        onOverlayClick,
    },
    render: (args) => <StoryDefault {...args} />,
};
