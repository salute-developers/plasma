import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder, InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { TextArea, TextAreaProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const statuses = ['', 'success', 'error'];
const resizes = ['none', 'both', 'horizontal', 'vertical'];

const propsToDisable = [
    'helperBlock',
    '$isFocused',
    'label',
    'contentRight',
    'autoComplete',
    'autoFocus',
    'cols',
    'dirName',
    'form',
    'minLength',
    'maxLength',
    'name',
    'required',
    'rows',
    'value',
    'wrap',
    'onChange',
    'onFocus',
    'onBlur',
];

export default {
    title: 'Controls/TextArea',
    component: TextArea,
    decorators: [InSpacingDecorator],
    argTypes: {
        status: {
            options: statuses,
            control: {
                type: 'select',
            },
        },
        resize: {
            options: resizes,
            control: {
                type: 'select',
            },
        },
        ...disableProps(propsToDisable),
    },
} as Meta;

export const Default: Story<TextAreaProps & { enableContentRight: boolean }> = ({
    status,
    enableContentRight,
    ...rest
}) => {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e);
    };

    return (
        <TextArea
            value={value}
            contentRight={enableContentRight && <IconPlaceholder />}
            status={status || undefined}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
    );
};

Default.args = {
    id: 'example-textarea',
    placeholder: 'Заполните многострочное поле',
    leftHelper: 'Подсказка к полю',
    rightHelper: '125 слов',
    enableContentRight: true,
    status: '' as 'success',
    resize: 'vertical',
    disabled: false,
    size: 'm',
};

export const Live: Story<TextAreaProps & { enableContentRight: boolean }> = ({ status, ...rest }) => {
    const [value, setValue] = React.useState('');
    const l = value.length;
    const max = 140;

    return (
        <TextArea
            value={value}
            status={max <= l ? 'error' : ('' as 'success')}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            rightHelper={`${max - l} символов`}
            {...rest}
        />
    );
};

Live.args = {
    placeholder: 'Placeholder text',
    leftHelper: 'Helper text',
    resize: 'vertical',
    disabled: false,
};
