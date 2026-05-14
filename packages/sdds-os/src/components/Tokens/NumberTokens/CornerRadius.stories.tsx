import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { sdds_os__dark, sdds_os__light } from '@salutejs-ds/sdds_os';
import { InSpacingDecorator, getGroupedCornerRadiusTokens } from '@salutejs/plasma-sb-utils';
import type { GroupedNumberTokens } from '@salutejs/plasma-sb-utils';
import { addNotification } from '@salutejs/plasma-new-hope';

import { NotificationsProvider } from '../../Notification/Notification';

import {
    TokenData,
    TokenDataHeader,
    TokenInfo,
    TokensDataWrapper,
    TokensTitle,
    TokensWrapper,
} from './NumberTokens.styles';

const meta: Meta = {
    title: 'Tokens/Corner Radius',
    decorators: [InSpacingDecorator],
};

export default meta;

const themes: Record<string, GroupedNumberTokens> = {
    'sdds-os:light': getGroupedCornerRadiusTokens(sdds_os__light[0]),
    'sdds-os:dark': getGroupedCornerRadiusTokens(sdds_os__dark[0]),
};

const StoryDemo = ({ context }) => {
    const groupedTokens = themes[context.globals.theme] || themes['sdds-os:light'];

    const copyToClipboard = async (value: string, opacity?: string | null) => {
        try {
            await navigator.clipboard.writeText(value + (opacity || ''));

            addNotification({ title: 'Скопировано', view: 'positive', size: 'xxs', role: 'alert' }, 3000);
        } catch (err) {
            addNotification(
                { title: 'Ошибка при копировании текста', view: 'negative', size: 'xxs', role: 'alert' },
                3000,
            );
        }
    };

    if (!groupedTokens) {
        return null;
    }

    return (
        <TokensWrapper>
            <TokensTitle>CornerRadius</TokensTitle>
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
        <NotificationsProvider placement="bottom">
            <StoryDemo context={context} />
        </NotificationsProvider>
    ),
};
