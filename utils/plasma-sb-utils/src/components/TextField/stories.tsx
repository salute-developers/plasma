import React, { ChangeEvent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { IconBellFill } from '@salutejs/plasma-icons';
import type { IconProps } from '@salutejs/plasma-icons';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');
const onChipsChange = action('onChipsChange');

const getIcon = (IconComponent: React.FC<IconProps>, size: string) => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    return <IconComponent size={iconSize} color="inherit" />;
};

export const createDefaultStory = (TextField: any, customIcon?: (size: string) => JSX.Element) => {
    return ({ enableContentLeft, enableContentRight, view, readOnly, ...rest }: any) => {
        const [text, setText] = useState('Значение поля');
        const innerGetIcon = customIcon ? customIcon(rest.size) : getIcon(IconBellFill, rest.size);

        const contentRight = enableContentRight || readOnly ? innerGetIcon : undefined;

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
                <TextField
                    {...rest}
                    value={text}
                    readOnly={readOnly}
                    contentLeft={enableContentLeft ? innerGetIcon : undefined}
                    contentRight={contentRight}
                    view={view}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setText(e.target.value);
                        onChange(e.target.value);
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                />

                <TextField
                    {...rest}
                    label="Uncontrolled TextField"
                    defaultValue="Дефолтное значение"
                    contentLeft={enableContentLeft ? innerGetIcon : undefined}
                    contentRight={contentRight}
                    view={view}
                    readOnly={readOnly}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                />
            </div>
        );
    };
};

export const createChipsStory = (TextField: any, customIcon?: (size: string) => JSX.Element) => {
    return ({ enableContentLeft, enableContentRight, view, readOnly, ...rest }: any) => {
        const [text, setText] = useState('Значение поля');
        const innerGetIcon = customIcon ? customIcon(rest.size) : getIcon(IconBellFill, rest.size);

        const contentRight = enableContentRight || readOnly ? innerGetIcon : undefined;

        const validateChip = (value: string) => (value === '1 value' ? { view: 'negative' } : {});

        return (
            <TextField
                {...rest}
                enumerationType="chip"
                value={text}
                contentLeft={enableContentLeft ? innerGetIcon : undefined}
                contentRight={contentRight}
                view={view}
                readOnly={readOnly}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setText(e.target.value);
                    onChange(e.target.value);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeChips={onChipsChange}
                chipValidator={validateChip}
                style={{
                    width: '70%',
                    margin: '0 auto',
                }}
            />
        );
    };
};
