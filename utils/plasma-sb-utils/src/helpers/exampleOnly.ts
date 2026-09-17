export const EXAMPLE_ONLY_CATEGORY = 'Example only';

type ArgType = {
    table?: Record<string, unknown>;
    [key: string]: unknown;
};

/**
 * Помечает контролы, которых нет в API компонента и которые заведены только ради стори
 * (`enableContentLeft`, `hasHint`, `showFooter` и т.п.).
 * В таблице Storybook они уходят в отдельную секцию `Example only` под пропсами компонента.
 *
 * Пропсы из API компонента не помечаются — у них категории нет.
 */
export const exampleOnly = <T extends Record<string, ArgType>>(argTypes: T): T => {
    const result: Record<string, ArgType> = {};

    Object.entries(argTypes).forEach(([name, argType]) => {
        result[name] = { ...argType, table: { ...argType.table, category: EXAMPLE_ONLY_CATEGORY } };
    });

    return result as T;
};
