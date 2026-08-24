import React from 'react';
import { action } from 'storybook/actions';
import { IconPlasma } from '@salutejs/plasma-icons';

const onClick = action('onClick');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const iconSizeMap = {
    l: '2.25rem',
    m: '1.5rem',
    s: '1rem',
    xs: '0.75rem',
};

export const createDefaultStory = (EmbeddedButton: any) => {
    return ({ view, buttonContainerWidth, buttonContainerHeight, size, ...rest }: any) => (
        <div style={{ width: buttonContainerWidth, height: buttonContainerHeight }}>
            <EmbeddedButton view={view} size={size} onClick={onClick} onFocus={onFocus} onBlur={onBlur} {...rest}>
                <IconPlasma
                    color={
                        view === 'gradient'
                            ? 'linear-gradient(100.49deg,#199AF0FF 0%,#12C2F3FF 41.912%,#528EFFFF 106.22%)'
                            : 'inherit'
                    }
                    style={{ width: iconSizeMap[size], height: iconSizeMap[size] }}
                />
            </EmbeddedButton>
        </div>
    );
};
