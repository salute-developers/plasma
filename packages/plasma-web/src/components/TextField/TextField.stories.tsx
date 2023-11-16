import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { IconPlaceholder, InSpacingDecorator } from '../../helpers';

import { TextField } from '.';
import type { TextFieldProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');

const sizes = ['l', 'm', 's'];
const statuses = ['', 'success', 'warning', 'error'];

const meta: Meta<TextFieldProps> = {
    title: 'Controls/TextField',
    component: TextField,
    decorators: [InSpacingDecorator],
    argTypes: {
        status: {
            options: statuses,
            control: {
                type: 'select',
            },
        },
        maxLength: {
            control: {
                type: 'number',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
    },
};

export default meta;

type StorePropsDefault = Omit<
    TextFieldProps,
    | 'helperBlock'
    | 'contentLeft'
    | 'htmlSize'
    | 'contentRight'
    | 'type'
    | 'name'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'value'
    | 'checked'
    | 'maxLength'
    | 'minLength'
    | 'required'
> & {
    'storybook:contentLeft': boolean;
    'storybook:contentRight': boolean;
};

const StoryDefault = ({
    'storybook:contentLeft': enableContentLeft,
    'storybook:contentRight': enableContentRight,
    status,
    ...rest
}: StorePropsDefault) => {
    const [value, setValue] = useState('Значение поля');

    return (
        <TextField
            {...rest}
            value={value}
            contentLeft={enableContentLeft && <IconPlaceholder />}
            contentRight={enableContentRight && <IconPlaceholder />}
            status={status || undefined}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
        />
    );
};

export const Default: StoryObj<StorePropsDefault> = {
    argTypes: {
        animatedHint: {
            options: ['label', 'placeholder'],
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        id: 'example-text-field',
        size: 'l',
        label: 'Лейбл',
        animatedHint: undefined,
        placeholder: 'Заполните поле',
        helperText: 'Подсказка к полю',
        status: '' as 'success',
        disabled: false,
        readOnly: false,
        'storybook:contentLeft': true,
        'storybook:contentRight': true,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryDeferredValue = ({ readOnly }: { readOnly: boolean }) => {
    const [asyncValue, setAsyncValue] = React.useState('');

    React.useEffect(() => {
        setTimeout(() => {
            setAsyncValue("Sorry i'm late :)");
        }, 3000);
    }, []);

    return <TextField placeholder="Wait three seconds..." defaultValue={asyncValue} readOnly={readOnly} />;
};

export const DeferredValue: StoryObj<{ readOnly: boolean }> = {
    args: {
        readOnly: true,
    },
    render: (args) => <StoryDeferredValue {...args} />,
};
