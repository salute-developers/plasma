import React, { useState } from 'react';
import styled from 'styled-components';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Slider } from '.';
import type { SliderProps, SliderProps as DoubleSliderProps } from '.';

const meta: Meta = {
    title: 'Controls/Slider',
    component: Slider,
    decorators: [InSpacingDecorator],
    argTypes: {
        ...disableProps([
            'value',
            'onChangeCommitted',
            'theme',
            'as',
            'forwardedAs',
            'onChange',
            'fontSizeMultiplier',
            'gap',
            'settings',
            'hasHoverAnimation',
        ]),
    },
};

export default meta;

const SliderWrapper = styled.div`
    width: 25rem;
`;

const StoryDefault = (args: SliderProps) => {
    const [value, setValue] = useState(30);

    const onChangeCommittedHandle = (values) => {
        setValue(values);
    };

    return (
        <SliderWrapper>
            <Slider value={value} onChange={action('onChange')} onChangeCommitted={onChangeCommittedHandle} {...args} />
        </SliderWrapper>
    );
};

export const Default: StoryObj<SliderProps> = {
    args: {
        min: 0,
        max: 100,
        disabled: false,
        ariaLabel: 'Цена товара',
        multipleStepSize: 10,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryMultipleValues = (args: DoubleSliderProps) => {
    const [value, setValue] = useState([10, 80]);

    const onChangeCommittedHandle = (values) => {
        setValue(values);
    };

    return (
        <SliderWrapper>
            <Slider value={value} onChange={action('onChange')} onChangeCommitted={onChangeCommittedHandle} {...args} />
        </SliderWrapper>
    );
};

export const MultipleValues: StoryObj<DoubleSliderProps> = {
    args: {
        min: 0,
        max: 100,
        disabled: false,
        ariaLabel: ['Минимальная цена товара', 'Максимальная цена товара'],
        multipleStepSize: 10,
    },
    render: (args) => <StoryMultipleValues {...args} />,
};
