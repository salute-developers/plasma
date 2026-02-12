import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { IconPlasma } from '@salutejs/plasma-icons';

const onChange = action('onChange');
const onChangeSlider = action('onChangeSlider');
const onChangeTextField = action('onChangeTextField');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

export const createDefaultStory = (TextFieldSlider: any) => {
    return ({ enableContentLeft, enableContentRight, size, ...rest }: any) => {
        const [value, setValue] = useState(rest.initialValue || 50);
        const iconSize = size === 'xs' ? 'xs' : 's';

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
                <TextFieldSlider
                    {...rest}
                    value={value}
                    size={size}
                    contentLeft={enableContentLeft ? <IconPlasma color="inherit" size={iconSize} /> : undefined}
                    contentRight={enableContentRight ? <IconPlasma color="inherit" size={iconSize} /> : undefined}
                    onChange={(e, val) => {
                        setValue(val.raw);
                        onChange(e, val);
                    }}
                    onChangeSlider={onChangeSlider}
                    onChangeTextField={onChangeTextField}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                <TextFieldSlider
                    {...rest}
                    size={size}
                    contentLeft={enableContentLeft ? <IconPlasma color="inherit" size={iconSize} /> : undefined}
                    contentRight={enableContentRight ? <IconPlasma color="inherit" size={iconSize} /> : undefined}
                    label="Uncontrolled TextFieldSlider"
                    defaultValue={rest.initialValue || 50}
                    onChangeSlider={onChangeSlider}
                    onChangeTextField={onChangeTextField}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        );
    };
};
