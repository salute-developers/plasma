import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Image } from './Image';
import type { ImageProps, Ratio } from './Image';

const bases = ['div', 'img'];

const ratios = ['1/1', '3/4', '4/3', '9/16', '16/9', '1/2', '2/1'];

const meta: Meta<ImageProps> = {
    title: 'plasma_web/Image',
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
        ...disableProps(['view', 'height', 'customRatio']),
    },
};

export default meta;

export const Default: StoryObj<ImageProps & { ratio: Ratio }> = {
    args: {
        base: 'div',
        ratio: '1/1',
    },
    render: ({ base, ratio }) => (
        <div style={{ maxWidth: '10rem' }}>
            <Image
                src="./images/320_320_9.jpg"
                ratio={ratio}
                base={base}
                alt="картинка для примера фоном"
                style={{ position: 'relative' }}
            />
        </div>
    ),
};
