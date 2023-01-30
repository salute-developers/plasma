import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder, InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { TextFieldView } from './TextField';

import { TextField, TextFieldProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');

const propsToDisable = [
    'helperBlock',
    'contentLeft',
    'htmlSize',
    '$isFocused',
    'label',
    'contentRight',
    'type',
    'name',
    'onFocus',
    'onBlur',
    'onChange',
    'value',
    'checked',
    'minLength',
    'required',
];

export default {
    title: 'Controls/TextField',
    component: TextField,
    decorators: [InSpacingDecorator],
    argTypes: {
        status: {
            control: {
                type: 'select',
                options: { default: '', success: 'success', error: 'error' },
            },
        },
        view: {
            control: {
                type: 'select',
                options: { ...TextFieldView, ...{ empty: '' } },
            },
        },
        maxLength: {
            control: {
                type: 'number',
            },
        },
        ...disableProps(propsToDisable),
    },
} as Meta;

interface DefaultStoryProps extends TextFieldProps {
    enableContentLeft: boolean;
    enableContentRight: boolean;
}

export const Default: Story<DefaultStoryProps> = ({ enableContentLeft, enableContentRight, status, ...rest }) => {
    const [value, setValue] = React.useState('Значение поля');

    return (
        <TextField
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
            {...rest}
        />
    );
};

Default.args = {
    id: 'example-text-field',
    type: 'text',
    placeholder: 'Заполните поле имя',
    caption: 'Имя',
    helperText: 'Допустимы только символы кириллицы',
    enableContentLeft: true,
    enableContentRight: true,
    status: '' as 'success',
    disabled: false,
    readOnly: false,
    size: 'm',
};

export const DeferredValue: Story<{ readOnly: boolean }> = ({ readOnly }) => {
    const [asyncValue, setAsyncValue] = React.useState('');

    React.useEffect(() => {
        setTimeout(() => {
            setAsyncValue("Sorry i'm late :)");
        }, 3000);
    }, []);

    return <TextField placeholder="Wait three seconds..." defaultValue={asyncValue} readOnly={readOnly} />;
};

DeferredValue.args = {
    readOnly: true,
};

const defValuePropsToDisable = [...propsToDisable, 'status', 'helperText', 'placeholder', 'disabled'];

DeferredValue.argTypes = {
    ...disableProps(defValuePropsToDisable),
};
