import React from 'react';

import { collectTokenUsage, convertTheme } from '../../helpers';

import { createMeta } from './meta';
import { createTokenUsageStory } from './stories';
import type { NotifyHook, TokenUsageComponents } from './types';

type GetTokenUsageStoriesProps = TokenUsageComponents & {
    /** Результат `import.meta.glob('../../**\/*.config.{ts,tsx}', { eager: true })` пакета */
    configModules: Record<string, unknown>;
    /** Светлая тема пакета в виде css-строки */
    theme: string;
    /** Провайдер уведомлений пакета */
    provider: any;
    useNotify: NotifyHook;
    providerProps?: Record<string, unknown>;
    title?: string;
};

export const getTokenUsageStories = ({
    configModules,
    theme,
    provider: Provider,
    providerProps,
    useNotify,
    accordion,
    accordionItem,
    textField,
    title,
}: GetTokenUsageStoriesProps) => {
    const themeTokens = convertTheme(theme);
    const usageIndex = collectTokenUsage(configModules, themeTokens);

    const meta = createMeta({ title });

    const StoryTokenUsage = createTokenUsageStory({
        themeTokens,
        usageIndex,
        components: { accordion, accordionItem, textField },
        useNotify,
    });

    const Default = {
        render: () => (
            <Provider {...providerProps}>
                <StoryTokenUsage />
            </Provider>
        ),
    };

    return { meta, Default };
};
