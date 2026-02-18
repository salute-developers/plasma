import React, { useMemo, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { TextField, TabItem, Tabs, Switch, Button } from '@salutejs/plasma-b2c';

import { getHEXAColor, getRestoredColorFromPalette, Grayscale, ThemeConfig } from '@salutejs/plasma-tokens-utils';
import { buildDefaultTheme, ColorToken } from '../../_new';
import { getRGBAColor } from '../../utils';
import { Header } from '../ColorGenerator/Header';

const NoScroll = createGlobalStyle`
    html, body {
        overscroll-behavior: none;
    }
`;

const Container = styled.div`
    position: relative;

    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: #000;
`;

const Wrapper = styled.div`
    position: relative;
    top: 6rem;
    left: 3rem;
    bottom: 3rem;
    right: 3rem;
    border-radius: 0.5rem;
    height: calc(100vh - 9rem);
    width: calc(100% - 6rem);

    overflow: hidden;

    display: flex;
    flex-direction: column;

    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
`;

interface FontFamilyGeneratorProps {
    onNextPage?: () => void;
    onPreviousPage?: () => void;
}

const tokensTypes = [
    {
        label: 'Цвета',
        value: 'color',
        inner: [
            {
                label: 'Темная',
                value: 'dark',
            },
            {
                label: 'Светлая',
                value: 'light',
            },
        ],
    },
    {
        label: 'Градиенты',
        value: 'gradient',
        inner: [
            {
                label: 'Темная',
                value: 'dark',
            },
            {
                label: 'Светлая',
                value: 'light',
            },
        ],
    },
    {
        label: 'Форма',
        value: 'shape',
        inner: [
            {
                label: 'Скругление',
                value: 'round',
            },
        ],
    },
    {
        label: 'Тени',
        value: 'Shadow',
        inner: [
            {
                label: 'Вверх',
                value: 'up',
            },
            {
                label: 'Вниз',
                value: 'down',
            },
        ],
    },
    {
        label: 'Типографика',
        value: 'typography',
        disabled: true,
    },
    {
        label: 'Семейство шрифтов',
        value: 'fontFamily',
        disabled: true,
    },
];

const platformTypes = [
    {
        label: 'Web',
        value: 'web',
    },
    {
        label: 'Android',
        value: 'android',
        disabled: true,
    },
    {
        label: 'iOS',
        value: 'ios',
        disabled: true,
    },
    {
        label: 'React-Native',
        value: 'reactNative',
        disabled: true,
    },
];

export const buildDefaultThemeWithUserConfig = () => {
    const userConfig: ThemeConfig = {
        name: 'default',
        accentColor: {
            dark: '[general.green.500]',
            light: '[general.green.600]',
        },
        grayscale: {
            dark: Grayscale.gray,
            light: Grayscale.gray,
        },
    };

    return buildDefaultTheme(userConfig);
};

const ColorTokenPreview = ({
    token,
    onClick,
}: {
    token: ColorToken;
    onClick: (event?: React.MouseEvent<HTMLDivElement>) => void;
}) => {
    const value = token.getValue('web');
    const newValue = getRestoredColorFromPalette(value);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                height: '2rem',
            }}
            onClick={onClick}
        >
            <div
                style={{
                    minWidth: '30rem',
                }}
            >
                {token.getDisplayName()}
            </div>
            <div
                style={{
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '50%',
                    marginRight: '10rem',
                    background: newValue,
                }}
            />
            <div
                style={{
                    minWidth: '15rem',
                    marginRight: '10rem',
                }}
            >
                {getRGBAColor(newValue)}
            </div>
            <div>{getHEXAColor(newValue)}</div>
        </div>
    );
};

const TokenEditor = ({ token }: { token: ColorToken }) => {
    const tokenName = token.getDisplayName();
    const tokenDescription = token.getDescription();
    const tokenEnabled = token.getEnabled();
    const tokenValue = token.getValue('web');

    return (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
            }}
        >
            <TextField size="s" label="Название (в нотации camelCase)" value={tokenName} />
            <TextField size="s" label="Описание" value={tokenDescription} />
            <Switch label="Отображать токен" checked={tokenEnabled} />
            <Tabs view="divider" size="m">
                {platformTypes.map(({ label, disabled, value }, i) => (
                    <TabItem disabled={disabled} view="divider" key={`item_inner:${label}`} size="m" selected={i === 0}>
                        {label}
                    </TabItem>
                ))}
            </Tabs>
            <TextField size="s" label="Значение" value={tokenValue} />
            <div>
                <Button view="clear" text="Отменить" />
                <Button
                    view="accent"
                    text="Сохранить"
                    onClick={(event) => {
                        const hackButton = event.currentTarget.parentNode?.parentNode?.parentNode?.parentNode
                            ?.parentNode?.children[0] as HTMLButtonElement;

                        hackButton?.click();
                    }}
                />
            </div>
        </div>
    );
};

export const TokensEditor = (props: FontFamilyGeneratorProps) => {
    const [theme, setTheme] = useState(buildDefaultThemeWithUserConfig);
    const [index, setIndex] = useState(0);
    const [tokenEditorIndex, setTokenEditorIndex] = useState<string | undefined>(undefined);

    const [colorMode, setColorMode] = useState('dark');

    const navigate = useNavigate();

    const colorTokens = useMemo(() => theme.getTokens('color'), [theme]);

    const groupedColorTokens = useMemo(
        () => [
            {
                data: colorTokens.filter((item) => item.getTags()[0] === colorMode && item.getTags()[2] === 'default'),
                group: 'default',
            },
            {
                data: colorTokens.filter(
                    (item) =>
                        item.getTags()[0] === colorMode &&
                        (item.getTags()[2] === 'dark' || item.getTags()[2] === 'on-dark'),
                ),
                group: 'onDark',
            },
            {
                data: colorTokens.filter(
                    (item) =>
                        item.getTags()[0] === colorMode &&
                        (item.getTags()[2] === 'light' || item.getTags()[2] === 'on-light'),
                ),
                group: 'onLight',
            },
            {
                data: colorTokens.filter((item) => item.getTags()[0] === colorMode && item.getTags()[2] === 'inverse'),
                group: 'inverse',
            },
        ],
        [colorMode, colorTokens],
    );

    const onClickColorTokenPreview = (index: string) => {
        setTokenEditorIndex((prevIndex) => (prevIndex === index ? undefined : index));
    };

    return (
        <Container>
            <Header text="Типографика" onClick={props.onPreviousPage} />
            <Wrapper>
                <br />
                <Tabs view="divider" size="m" stretch>
                    {tokensTypes.map(({ label, value, disabled }, i) => (
                        <TabItem
                            disabled={disabled}
                            view="divider"
                            key={`item:${label}`}
                            size="m"
                            selected={i === index}
                            onClick={() => setIndex(i)}
                        >
                            {label}
                        </TabItem>
                    ))}
                </Tabs>

                <Tabs view="divider" size="m">
                    {tokensTypes[index].inner?.map(({ label, value }, i) => (
                        <TabItem
                            view="divider"
                            key={`item_inner:${label}`}
                            size="m"
                            selected={colorMode === value}
                            onClick={() => setColorMode(value)}
                        >
                            {label}
                        </TabItem>
                    ))}
                </Tabs>

                <div
                    style={{
                        flex: 1,
                        overflowY: 'scroll',
                    }}
                >
                    {groupedColorTokens.map((item, groupIndex) => (
                        <div>
                            <div style={{ margin: '2rem 0' }}>{item.group}</div>
                            {item.data.map((token, index) => (
                                <div style={{ margin: '0.5rem 0' }}>
                                    <ColorTokenPreview
                                        token={token}
                                        onClick={() => onClickColorTokenPreview(`${groupIndex}_${index}`)}
                                    />
                                    {tokenEditorIndex === `${groupIndex}_${index}` && <TokenEditor token={token} />}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </Wrapper>
            <NoScroll />
        </Container>
    );
};
