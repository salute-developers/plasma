import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { plasma_web__dark, plasma_web__light } from '@salutejs/plasma-themes/es/themes';
import { InSpacingDecorator, getGroupedSpacingTokens } from '@salutejs/plasma-sb-utils';

import { ToastProvider, useToast } from '../../Toast/Toast';
import type { ShowToastArgs } from '../../Toast';

import {
    TokenData,
    TokenDataHeader,
    TokenInfo,
    TokensDataWrapper,
    TokensTitle,
    TokensWrapper,
} from './NumberTokens.styles';

const meta: Meta = {
    title: 'Tokens/Spacing',
    decorators: [InSpacingDecorator],
};

export default meta;

const getThemes = (theme) => {
    switch (theme) {
        case 'b2b:light':
        case 'b2c:light':
        case 'light (legacy)':
            return getGroupedSpacingTokens(plasma_web__light[0]);
        default:
            return getGroupedSpacingTokens(plasma_web__dark[0]);
    }
};

const StoryDemo = ({ context }) => {
    const groupedTokens = getThemes(context.globals.theme);
    const { showToast } = useToast();
    const toastData = {
        view: 'default',
        size: 'm',
        hasClose: true,
        fade: false,
        position: 'bottom',
        offset: 0,
        timeout: 3000,
        role: 'alert',
    } as ShowToastArgs;

    const copyToClipboard = async (value: string, opacity?: string | null) => {
        try {
            await navigator.clipboard.writeText(value + (opacity || ''));

            showToast({
                ...toastData,
                text: 'Скопировано',
            });
        } catch (err) {
            showToast({
                ...toastData,
                text: 'Ошибка при копировании текста',
            });
        }
    };

    if (!groupedTokens) {
        return null;
    }

    return (
        <TokensWrapper>
            <TokensTitle>Spacing</TokensTitle>
            <TokensDataWrapper>
                <TokenDataHeader>
                    <TokenInfo>Token/</TokenInfo>
                    <TokenInfo className="value">px</TokenInfo>
                </TokenDataHeader>
                <TokenData>
                    {Object.entries(groupedTokens).map(([tokenName, tokenValue]) => (
                        <>
                            <TokenInfo onClick={() => copyToClipboard(tokenName)}>{tokenName}</TokenInfo>
                            <TokenInfo className="value" onClick={() => copyToClipboard(tokenValue)}>
                                {tokenValue}
                            </TokenInfo>
                        </>
                    ))}
                </TokenData>
            </TokensDataWrapper>
        </TokensWrapper>
    );
};

export const Default: StoryObj = {
    render: (_, context) => (
        <ToastProvider>
            <StoryDemo context={context} />
        </ToastProvider>
    ),
};
