import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import { z } from 'zod';

import type { Site } from './site.ts';

/** Все tools, которые умеет `@salutejs/sdds-mcp`. Сайт выбирает из них свой набор. */
export const KNOWN_TOOLS = [
    'list_components',
    'search_icons',
    'get_installation_guide',
    'get_nextjs_guide',
    'get_functions',
    'get_design_system_configuration',
    'get_form_guide',
    'get_tokens',
    'get_component',
] as const;

export const McpDataConfigSchema = z
    .strictObject({
        /** Адрес сайта документации, от него строятся ссылки на страницы. */
        baseUrl: z.url(),
        /** Разрешённые tools, попадают в `manifest.tools` в указанном порядке. */
        tools: z
            .array(z.enum(KNOWN_TOOLS))
            .min(1)
            .refine((tools) => new Set(tools).size === tools.length, { message: 'tools содержит дубликаты' }),
        /**
         * Токены темы для `get_tokens`. `entry` — модуль, из которого их импортируют, например
         * `@salutejs/sdds-themes/tokens/sdds_serv`. Он разрешается от `packages/<lib>`, читается его `.d.ts`.
         */
        tokens: z.strictObject({ entry: z.string().min(1) }).optional(),
        /** Дополнительные исключения при обходе `docs`. Файлы и папки с префиксом `_` пропускаются всегда. */
        exclude: z.array(z.string().min(1)).default([]),
        /**
         * Категории, страницы которых описывают компоненты. Они собираются как паспорта (props, examples)
         * и попадают в `components/index.json`. `package` — точка входа для импорта компонентов категории.
         * `stability: 'beta'` — beta-компоненты: имя получает префикс `beta/`, в паспорт добавляются
         * `stability` и `warning`, а одноимённый стабильный паспорт получает `recommendation`.
         */
        extraComponentCategories: z
            .record(z.string(), z.strictObject({ package: z.string().min(1), stability: z.literal('beta').optional() }))
            .default({}),
        /** Перенесено из старого конфига без изменений. Генератор поле не читает. */
        qdrantConfig: z.unknown().optional(),
    })
    .refine((config) => !config.tools.includes('get_tokens') || config.tokens !== undefined, {
        path: ['tokens'],
        message: 'tool get_tokens требует tokens.entry',
    });

/** Тип `mcp.config.mjs` сайта. */
export type McpDataConfig = z.input<typeof McpDataConfigSchema>;

/** Конфиг после проверки, со значениями по умолчанию. */
export type ResolvedMcpDataConfig = z.output<typeof McpDataConfigSchema>;

export function parseConfig(value: unknown, source: string): ResolvedMcpDataConfig {
    const result = McpDataConfigSchema.safeParse(value);

    if (!result.success) {
        throw new Error(`Некорректный конфиг ${source}:\n${z.prettifyError(result.error)}`);
    }

    return result.data;
}

export async function loadConfig(site: Site): Promise<ResolvedMcpDataConfig> {
    if (!fs.existsSync(site.configPath)) {
        throw new Error(`Не найден конфиг: ${site.configPath}`);
    }

    const module = (await import(pathToFileURL(site.configPath).href)) as { default?: unknown };

    return parseConfig(module.default, site.configPath);
}
