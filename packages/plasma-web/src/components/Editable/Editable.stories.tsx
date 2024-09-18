import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconEdit } from '@salutejs/plasma-icons';

import * as typographyVariants from '../Typography/Typography';

import { Editable } from '.';

const iconSizes = ['s', 'xs'] as const;

const meta: Meta<typeof Editable> = {
    title: 'Controls/Editable',
    decorators: [InSpacingDecorator],
    component: Editable,
    argTypes: {
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
            'view',
            'size',
        ]),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Editable> & {
    iconSize: typeof iconSizes[number];
    componentName: keyof typeof typographyVariants;
    defaultValue: string;
};

const StoryDefault = ({ defaultValue, componentName, iconSize, ...rest }: StoryPropsDefault) => {
    const [, setValue] = useState<string>(defaultValue);

    const handleChange = (e) => {
        setValue(e.target.textContent);
    };

    return (
        <Editable
            {...rest}
            icon={<IconEdit size={iconSize} color="inherit" />}
            textComponent={typographyVariants[componentName]}
            value={defaultValue}
            onChange={handleChange}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    argTypes: {
        iconSize: {
            options: iconSizes,
            control: { type: 'select' },
        },
        componentName: {
            options: Object.keys(typographyVariants),
            control: { type: 'select' },
        },
    },
    args: {
        view: 'default',
        size: 'm',
        iconSize: 'xs',
        componentName: 'BodyL',
        defaultValue: 'Document 1',
        placeholder: 'Компонент с возможностью редактирования текста',
    },
    render: (args) => <StoryDefault {...args} />,
};
