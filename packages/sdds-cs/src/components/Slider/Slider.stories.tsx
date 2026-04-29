import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSliderStories } from '@salutejs/plasma-sb-utils';

import { Slider } from './Slider';
import { config } from './Slider.config';

type SliderProps = ComponentProps<typeof Slider>;

const { meta: META, Default, MultipleValues } = getSliderStories({
    component: Slider,
    componentConfig: config,
    defaultArgs: {
        size: 's',
    },
    disablePropsList: ['size'],
    additionalArgTypes: {
        pointerSize: {
            options: ['small', 'none'],
            control: { type: 'inline-radio' },
            table: { category: 'variation' },
        },
    },
});

const meta: Meta<SliderProps> = {
    ...META,
    title: 'Data Entry/Slider',
};

export default meta;

export { Default, MultipleValues };
