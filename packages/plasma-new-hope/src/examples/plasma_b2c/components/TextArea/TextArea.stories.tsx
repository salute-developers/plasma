import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { tertiary } from '@salutejs/plasma-core';
import { styled } from '@linaria/react';

import { textAreaConfig } from '../../../../components/TextArea';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './TextArea.config';
import { TextArea } from './TextArea';

const labelPlacements = ['inner', 'outer'];

type StoryTextAreaPropsCustom = {
    enableContentRight?: boolean;
};

type StoryTextAreaProps = ComponentProps<typeof TextArea> & StoryTextAreaPropsCustom;

const meta: Meta<StoryTextAreaProps> = {
    title: 'plasma_b2c/TextArea',
    decorators: [WithTheme],
    component: TextArea,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(textAreaConfig, config)),
        rows: {
            control: {
                type: 'number',
            },
        },
        cols: {
            control: {
                type: 'number',
            },
        },
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        id: 'example-textarea',
        enableContentRight: true,
        label: 'Подсказка',
        placeholder: 'Заполните многострочное поле',
        leftHelper: 'Подсказка к полю слева',
        rightHelper: 'Подсказка к полю справа',
        disabled: false,
        readOnly: false,
        autoResize: false,
        minAuto: 0,
        maxAuto: 0,
    },
};

export default meta;

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const IconPlaceholder = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${tertiary};
`;

const StoryDefault = (props: StoryTextAreaProps) => {
    const [value, setValue] = useState('Значение поля');

    return (
        <TextArea
            value={value}
            contentRight={props.enableContentRight ? <IconPlaceholder /> : undefined}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            {...props}
        />
    );
};

export const Default: StoryObj<StoryTextAreaProps> = {
    render: (args) => <StoryDefault {...args} />,
};
