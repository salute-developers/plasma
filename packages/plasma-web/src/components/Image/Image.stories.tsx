import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Image, Ratio } from '.';
import type { ImageProps } from '.';

const meta: Meta<ImageProps> = {
    title: 'Content/Image',
    component: Image,
    decorators: [InSpacingDecorator],
    argTypes: {
        base: {
            options: ['div', 'img'],
            control: {
                type: 'inline-radio',
            },
        },
        ratio: {
            options: ['1/1', '3/4', '4/3', '9/16', '16/9', '1/2', '2/1'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['height', 'customRatio']),
    },
};

export default meta;

export const Default: StoryObj<ImageProps & { ratio: Ratio }> = {
    args: {
        base: 'div',
        src: './images/320_320_9.jpg',
        alt: 'картинка для примера фоном',
        width: '200px',
        height: '200px',
    },
    render: ({ base, ratio, ...args }) => (
        <div style={{ maxWidth: '10rem' }}>
            <Image style={{ position: 'relative' }} {...args} />
        </div>
    ),
};
