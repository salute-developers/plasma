import React, { useState } from 'react';
import styled from 'styled-components';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { Story } from '@storybook/react';

import { Slider, SliderProps, SliderProps as DoubleSliderProps } from '.';

const propsToDisable = ['value', 'onChangeCommitted'];

export default {
    title: 'Controls/Slider',
    component: Slider,
    decorators: [InSpacingDecorator],
    argTypes: {
        ...disableProps(propsToDisable),
        onChange: { action: 'onChange' },
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
            <Slider value={value} onChangeCommitted={onChangeCommittedHandle} {...args} />
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
            <Slider value={value} onChangeCommitted={onChangeCommittedHandle} {...args} />
        </SliderWrapper>
    );
};

MultipleValues.args = {
    min: 0,
    max: 100,
    disabled: false,
    ariaLabel: ['Минимальцая цена товара', 'Максимальная цена товара'],
    multipleStepSize: 10,
};
