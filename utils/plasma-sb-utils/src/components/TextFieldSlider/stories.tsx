import React, { useMemo, useState } from 'react';
import { action } from 'storybook/actions';
import { IconPlasma } from '@salutejs/plasma-icons';

const onChange = action('onChange');
const onChangeSlider = action('onChangeSlider');
const onChangeTextField = action('onChangeTextField');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const generateScaleTicks = (min: number, max: number, count = 11): number[] =>
    Array.from({ length: count }, (_, i) => Math.round(min + (i / (count - 1)) * (max - min)));

export const createDefaultStory = (TextFieldSlider: any) => {
    return ({ enableContentLeft, enableContentRight, enableScaleTicks, size, ...rest }: any) => {
        const [value, setValue] = useState(rest.initialValue || 50);
        const iconSize = size === 'xs' ? 'xs' : 's';

        const scaleTicks = useMemo(() => (enableScaleTicks ? generateScaleTicks(rest.min, rest.max) : undefined), [
            enableScaleTicks,
            rest.min,
            rest.max,
        ]);

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
                    scaleTicks={scaleTicks}
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
                    scaleTicks={scaleTicks}
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
