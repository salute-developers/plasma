import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Image } from './Image';
import type { ImageProps } from './Image';

const bases = ['div', 'img'];

const ratios = ['1/1', '3/4', '4/3', '9/16', '16/9', '1/2', '2/1'];

const meta: Meta<ImageProps> = {
    title: 'plasma_b2c/Image',
    component: Image,
    decorators: [InSpacingDecorator],
    argTypes: {
        base: {
            options: bases,
            control: {
                type: 'inline-radio',
            },
        },
        ratio: {
            options: ratios,
            control: {
                type: 'select',
            },
        },
        ...disableProps(['src', 'alt', 'customRatio']),
    },
};

export default meta;

export const Default: StoryObj<typeof Image> = {
    args: {
        base: 'div',
        src: './images/320_320_9.jpg',
        alt: 'картинка для примера фоном',
        width: '200px',
        height: '200px',
    },
    render: (args) => (
        <div style={{ maxWidth: '10rem' }}>
            <Image {...args} />
        </div>
    ),
};
