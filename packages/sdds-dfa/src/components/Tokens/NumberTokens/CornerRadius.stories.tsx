import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { sdds_dfa__dark, sdds_dfa__light } from '@salutejs/sdds-themes/es/themes';
import { InSpacingDecorator, getGroupedSpacingTokens } from '@salutejs/plasma-sb-utils';
import type { GroupedNumberTokens } from '@salutejs/plasma-sb-utils';

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

const themes: Record<string, GroupedNumberTokens> = {
    'sdds-dfa:light': getGroupedSpacingTokens(sdds_dfa__light[0]),
    'sdds-dfa:dark': getGroupedSpacingTokens(sdds_dfa__dark[0]),
};

const StoryDemo = ({ context }) => {
    const groupedTokens = themes[context.globals.theme];
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
