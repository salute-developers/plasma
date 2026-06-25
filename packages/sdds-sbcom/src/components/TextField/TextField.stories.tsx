import React, { ChangeEvent, ComponentProps, CSSProperties, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { getTextFieldStories } from '@salutejs/plasma-sb-utils';
import { IconChatOutline, IconCrossSmall, IconSearch } from '@salutejs/plasma-icons';
import { action } from 'storybook/actions';
import styled from 'styled-components';
import { surfaceTransparentNaviHover, textSecondaryHover } from '@salutejs-ds/sdds_sbcom/theme/tokens';

import { IconButton } from '../IconButton';

import { TextField } from './TextField';
import { config } from './TextField.config';

type TextFieldProps = ComponentProps<typeof TextField>;

const buttonSizeMap: Record<string, 'm' | 's' | 'xs'> = {
    xl: 'm',
    l: 's',
    m: 's',
    s: 'xs',
    xs: 'xs',
};

const { meta: META, Default, Chips } = getTextFieldStories({
    component: TextField,
    componentConfig: config,
    defaultArgs: {
        ...config.defaults,
        titleCaption: '',
        hasHint: false,
        enableContentLeft: false,
        enableContentRight: true,
    },
    customIcon: (size: string) => {
        const iconSize = size === 'xs' ? 'xs' : 's';
        return (
            <IconButton size={buttonSizeMap[size]} view="clear">
                <IconChatOutline size={iconSize} color="inherit" />
            </IconButton>
        );
    },
});

const meta: Meta<TextFieldProps> = {
    ...META,
    title: 'Data Entry/⚠️ TextField',
};

export default meta;

export { Default, Chips };

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');

const SearchBackground = styled.div``;

const SearchMinWidthBox = styled.div`
    width: 9.75rem;
`;

const SearchStretchBox = styled.div`
    width: 100%;
    max-width: 36rem;
`;

const ShowcaseGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 9.75rem);
    gap: 1rem 1.5rem;
    align-items: center;
`;

const ShowcaseRow = styled.div`
    display: grid;
    grid-template-columns: 6rem repeat(3, 9.75rem);
    gap: 1rem 1.5rem;
    align-items: center;
`;

const ShowcaseLabel = styled.span`
    font-size: 0.875rem;
    opacity: 0.7;
`;

const ColumnLabel = styled.span`
    font-size: 0.75rem;
    opacity: 0.6;
    text-align: center;
`;

const HoverStateWrapper = styled.div`
    --plasma-textfield-bg-color: ${surfaceTransparentNaviHover};
    --plasma-textfield-content-slot-color: ${textSecondaryHover};
`;

const searchIcon = <IconSearch size="s" color="inherit" />;

type SearchFieldProps = {
    value?: string;
    defaultValue?: string;
    autoFocus?: boolean;
    showClear?: boolean;
    hoverOverride?: boolean;
    onClear?: () => void;
};

function SearchField({ value, defaultValue, autoFocus, showClear, hoverOverride, onClear }: SearchFieldProps) {
    const clearButton =
        showClear && onClear ? (
            <button
                type="button"
                aria-label="Очистить"
                onClick={onClear}
                style={{
                    display: 'inline-flex',
                    padding: 0,
                    border: 0,
                    background: 'transparent',
                    cursor: 'pointer',
                    lineHeight: 0,
                }}
            >
                <IconCrossSmall size="xs" color="inherit" />
            </button>
        ) : undefined;

    const field = (
        <TextField
            appearance="search"
            placeholder="Поиск"
            label=""
            leftHelper=""
            value={value}
            defaultValue={defaultValue}
            autoFocus={autoFocus}
            contentLeft={searchIcon}
            contentRight={clearButton}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
        />
    );

    if (hoverOverride) {
        return <HoverStateWrapper>{field}</HoverStateWrapper>;
    }

    return field;
}

function SearchInteractive() {
    const [value, setValue] = useState('');
    const [focused, setFocused] = useState(false);

    const clearButton =
        value && focused ? (
            <button
                type="button"
                aria-label="Очистить"
                onClick={() => setValue('')}
                style={{
                    display: 'inline-flex',
                    padding: 0,
                    border: 0,
                    background: 'transparent',
                    cursor: 'pointer',
                    lineHeight: 0,
                }}
            >
                <IconCrossSmall size="s" color="inherit" />
            </button>
        ) : undefined;

    const commonProps = {
        appearance: 'search' as const,
        placeholder: 'Поиск',
        label: '',
        leftHelper: '',
        value,
        contentLeft: searchIcon,
        contentRight: clearButton,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
            onChange(e.target.value);
        },
        onFocus: () => {
            setFocused(true);
            onFocus();
        },
        onBlur: () => {
            setFocused(false);
            onBlur();
        },
        onSearch,
    };

    return (
        <SearchBackground>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                    <p style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', opacity: 0.8 }}>Min width 156px</p>
                    <SearchMinWidthBox>
                        <TextField {...commonProps} />
                    </SearchMinWidthBox>
                </div>
                <div>
                    <p style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', opacity: 0.8 }}>Stretch 100%</p>
                    <SearchStretchBox>
                        <TextField {...commonProps} />
                    </SearchStretchBox>
                </div>
            </div>
        </SearchBackground>
    );
}

const hoverOverrideStyle: CSSProperties = {
    ['--plasma-textfield-bg-color' as string]: surfaceTransparentNaviHover,
    ['--plasma-textfield-content-slot-color' as string]: textSecondaryHover,
};

export const Search: StoryObj<TextFieldProps> = {
    render: () => <SearchInteractive />,
};

export const SearchShowcase: StoryObj<TextFieldProps> = {
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <SearchBackground>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <ShowcaseGrid>
                    <span />
                    <ColumnLabel>Normal</ColumnLabel>
                    <ColumnLabel>Hover</ColumnLabel>
                    <ColumnLabel>Active</ColumnLabel>
                </ShowcaseGrid>

                <ShowcaseRow>
                    <ShowcaseLabel>Default</ShowcaseLabel>
                    <SearchField />
                    <SearchField hoverOverride />
                    <SearchField autoFocus />
                </ShowcaseRow>

                <ShowcaseRow>
                    <ShowcaseLabel>Filled</ShowcaseLabel>
                    <SearchField defaultValue="Поиск" />
                    <div style={hoverOverrideStyle}>
                        <SearchField defaultValue="Поиск" />
                    </div>
                    <SearchField defaultValue="Поиск" autoFocus showClear onClear={() => undefined} />
                </ShowcaseRow>
            </div>
        </SearchBackground>
    ),
};

export const SearchStretch: StoryObj<TextFieldProps> = {
    parameters: {
        controls: { disable: true },
    },
    render: () => (
        <SearchBackground>
            <SearchStretchBox>
                <SearchField defaultValue="Поиск" autoFocus showClear onClear={() => undefined} />
            </SearchStretchBox>
        </SearchBackground>
    ),
};
