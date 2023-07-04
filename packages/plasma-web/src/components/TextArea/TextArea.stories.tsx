import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { IconPlaceholder, InSpacingDecorator, disableProps } from '../../helpers';

import { TextArea, TextAreaProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const statuses = ['', 'success', 'error'];
const resizes = ['none', 'both', 'horizontal', 'vertical'];

const propsToDisable = [
    '$isFocused',
    'label',
    'contentRight',
    'autoComplete',
    'autoFocus',
    'dirName',
    'form',
    'minLength',
    'maxLength',
    'name',
    'required',
    'value',
    'wrap',
    'onChange',
    'onFocus',
    'onBlur',
    'helperText',
    'helperBlock',
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
    enableContentRight,
    status,
    ...rest
}) => {
    const [value, setValue] = React.useState('Значение поля');

    return (
        <TextArea
            value={value}
            contentRight={enableContentRight && <IconPlaceholder />}
            status={status || undefined}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
    );
};

Default.args = {
    id: 'example-textarea',
    placeholder: 'Заполните многострочное поле',
    leftHelper: 'Подсказка к полю слева',
    rightHelper: 'Подсказка к полю справа',
    enableContentRight: true,
    status: '' as 'success',
    resize: 'vertical',
    disabled: false,
    readOnly: false,
};
