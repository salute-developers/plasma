/** @type {import('../../utils/mcp-data/src/config.ts').McpDataConfig} */
export default {
    baseUrl: 'https://plasma.sberdevices.ru/sdds-bizcom/',
    tools: [
        'list_components',
        'search_icons',
        'get_installation_guide',
        'get_nextjs_guide',
        'get_form_guide',
        'get_tokens',
        'get_component',
    ],
    // Модуль, из которого импортируются токены темы. Разрешается от packages/sdds-bizcom.
    tokens: { entry: '@salutejs/sdds-themes/tokens/sdds_bizcom' },
    // Категории, страницы которых описывают компоненты: собираются как паспорта (props, examples)
    // и попадают в components/index.json. `package` — точка входа для импорта.
    extraComponentCategories: {
        ai: { package: 'sdds-bizcom/ai' },
    },
    // Перенесено из старого config.mjs без изменений; генератор это поле не читает.
    qdrantConfig: {
        collectionName: 'plasma-docs',
        payloadSchema: ['metadata.productId', 'metadata.source.url'],
    },
};
