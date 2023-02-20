import React, { useState } from 'react';
import styled from 'styled-components';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Slider, SliderProps, SliderProps as DoubleSliderProps } from '.';

const propsToDisable = [
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
];

export default {
    title: 'Controls/Slider',
    component: Slider,
    decorators: [InSpacingDecorator],
    argTypes: {
        ...disableProps(propsToDisable),
    },
};

const SliderWrapper = styled.div`
    width: 25rem;
`;

export const Default: Story<SliderProps> = (args) => {
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

Default.args = {
    min: 0,
    max: 100,
    disabled: false,
    ariaLabel: 'Цена товара',
    multipleStepSize: 10,
};

export const MultipleValues: Story<DoubleSliderProps> = (args) => {
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

MultipleValues.args = {
    min: 0,
    max: 100,
    disabled: false,
    ariaLabel: ['Минимальная цена товара', 'Максимальная цена товара'],
    multipleStepSize: 10,
};
