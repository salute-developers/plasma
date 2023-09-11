import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, _config } from './Button';
import { argTypesFromConfig } from '../../_helpers';

// TODO: get argTypes from config
// const views = ['primary', 'secondary', 'success', 'warning', 'critical', 'checked', 'clear'];
// const size = ['s', 'm', 'l'];

const contentTypes = ['Text', 'Text+Left', 'Text+Right', 'Left'];
const argTypes = {
    contentType: {
        options: contentTypes,
        control: {
            type: 'select',
        },
    },
    text: {
        control: {
            type: 'text',
        },
    },
    ...argTypesFromConfig(_config),
    focused: {
        // TODO: think about it
    }
};

const IconPlaceholder = (props) => <div style={{
    width: props.size === 'xs' ? '1rem' : '1.25rem',
    height:  props.size === 'xs' ? '1rem' : '1.25rem',
    borderRadius: '50%',
    background: 'var(--plasma-colors-tertiary)',
}}/>


export default {
    title: 'Controls/Button',
    component: Button,
    argTypes: argTypes,
    // {
    //     view: {
    //         options: views,
    //         control: {
    //             type: 'select',
    //         },
    //     },
    //     size: {
    //         options: size,
    //         control: {
    //             type: 'select',
    //         },
    //     },
    // },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = ({ contentType, text, ...rest }) => {
    return (
        <div style={{ padding: '1rem' }}>
            <Button
                text={contentType !== 'Left' && text}
                contentLeft={(contentType === 'Left' || contentType === 'Text+Left') && <IconPlaceholder size={rest.size}/>}
                contentRight={contentType === 'Text+Right' && <IconPlaceholder size={rest.size} />}
                {...rest}
            />
        </div>
    )
};


Default.args = {
    view: 'primary',
    size: 'm',
    pin: 'square-square',
    disabled: false,
    text: 'Label',
    contentType: 'Text',
    isLoading: false,
};