import React from 'react';
import { action } from 'storybook/actions';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');

type CustomIcon = (size: string, disabled?: boolean, readOnly?: boolean) => JSX.Element;

export const createDefaultStory = (NumberFormat: any, customIcon?: CustomIcon) => {
    return ({ contentLeft: _contentLeft, contentRight: _contentRight, ...rest }: any) => {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    width: '70%',
                    margin: '0 auto',
                }}
            >
                <NumberFormat
                    {...rest}
                    contentRight={customIcon?.(rest.size, rest.disabled, rest.readOnly)}
                    enumerationType="plain"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                />
            </div>
        );
    };
};
