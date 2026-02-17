import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTextFieldSliderStories } from '@salutejs/plasma-sb-utils';

import { TextFieldSlider } from './TextFieldSlider';
import { config } from './TextFieldSlider.config';

type TextFieldSliderProps = ComponentProps<typeof TextFieldSlider>;

const { meta: META, Default } = getTextFieldSliderStories({
    component: TextFieldSlider,
    componentConfig: config,
});

const meta: Meta<TextFieldSliderProps> = {
    ...META,
    title: 'Data Entry/TextFieldSlider',
};

export default meta;

export { Default };
