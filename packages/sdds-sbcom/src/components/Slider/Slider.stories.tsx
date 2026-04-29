import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSliderStories } from '@salutejs/plasma-sb-utils';

import { Slider } from './Slider';
import { config } from './Slider.config';

type SliderProps = ComponentProps<typeof Slider>;

const { meta: META, Default: DefaultStory, MultipleValues: MultipleValuesStory } = getSliderStories({
    component: Slider,
    componentConfig: config,
});

const meta: Meta<SliderProps> = {
    ...META,
    title: 'Data Entry/Slider',
};

export default meta;

const Default = {
    render: (args) => {
        return (
            <div style={{ background: 'rgb(237, 237, 237)', padding: '2rem', borderRadius: '1rem' }}>
                {DefaultStory.render(args)}
            </div>
        );
    },
};

const MultipleValues = {
    render: (args) => {
        return (
            <div style={{ background: 'rgb(237, 237, 237)', padding: '2rem', borderRadius: '1rem' }}>
                {MultipleValuesStory.render(args)}
            </div>
        );
    },
};

export { Default, MultipleValues };
