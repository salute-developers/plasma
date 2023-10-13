import React, { useState, useCallback } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconEdit, IconSize } from '@salutejs/plasma-icons';

import * as typography from '../Typography';

import { Editable } from '.';
import type { EditableProps } from '.';

const meta: Meta<EditablePropsExtend> = {
    title: 'Controls/Editable',
    component: Editable,
    argTypes: {
        iconSize: {
            options: ['s', 'xs'],
            control: { type: 'select' },
        },
        componentName: {
            options: Object.keys(typography),
            control: { type: 'select' },
        },
        ...disableProps([
            'ref',
            'theme',
            'as',
            'forwardedAs',
            'textComponent',
            'icon',
            'onChange',
            'onBlur',
            'onPaste',
            'value',
        ]),
    },
    decorators: [InSpacingDecorator],
};

export default meta;

type EditablePropsExtend = EditableProps & {
    iconSize: IconSize;
    componentName: keyof typeof typography;
    defaultValue: string;
};

const StoryDefault = ({ defaultValue, componentName, iconSize, ...rest }: EditablePropsExtend) => {
    const [value, setValue] = useState<string>(defaultValue);

    const handleChange = useCallback((e) => {
        setValue(e.target.textContent);
    }, []);

    return (
        <Editable
            icon={<IconEdit size={iconSize} color="inherit" />}
            textComponent={typography[componentName]}
            value={defaultValue}
            onChange={handleChange}
            {...rest}
        />
    );
};

export const Default: StoryObj<EditablePropsExtend> = {
    args: {
        iconSize: 's',
        componentName: 'Headline1',
        defaultValue: 'Document 1',
        placeholder: 'Компонент с возможностью редактирования текста',
    },
    render: (args) => <StoryDefault {...args} />,
};
