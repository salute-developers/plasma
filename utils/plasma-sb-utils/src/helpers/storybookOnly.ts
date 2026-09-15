import { apiProps, htmlProps, withoutHtmlProps } from '../apiProps.generated';

/** Пропсы компонента */
const COMPONENT_PROPS_CATEGORY = 'Component props';
/** Пропсы, заведённые только ради стори */
const EXAMPLE_ONLY_CATEGORY = 'Example only';

type ApiProps = {
    apiProps: Record<string, string[]>;
    withoutHtmlProps: string[];
};

type ArgType = {
    table?: {
        category?: string;
        subcategory?: string;
        disable?: boolean;
        [key: string]: unknown;
    };
    [key: string]: unknown;
};

type StoryContext = {
    title?: string;
    argTypes: Record<string, ArgType>;
    initialArgs?: Record<string, unknown>;
    parameters: {
        /** Компонент, если по `title` стори его не найти. `false` — не разделять контролы вовсе. */
        apiComponent?: string | false;
        [key: string]: unknown;
    };
};

const onlyLetters = (segment = '') => segment.replace(/[^A-Za-z]/g, '');

/**
 * Ключи для поиска компонента в карте: `_Beta/Overlay/Popover` -> `['_beta/Popover', 'Popover']`.
 * Их два, потому что namespace в карте появляется только при совпадении имён — берём первый найденный.
 */
const getComponentKeysFromTitle = (title = '') => {
    const segments = title.split('/');
    const name = onlyLetters(segments[segments.length - 1]);
    const namespace = segments[0].startsWith('_') ? `_${onlyLetters(segments[0]).toLowerCase()}` : '';

    return namespace ? [`${namespace}/${name}`, name] : [name];
};

/** Публичные пропсы компонента, либо `undefined`, если про него ничего не известно */
const getApiProps = (keys: string[], local?: ApiProps) => {
    const key = keys.find((candidate) => apiProps[candidate] || local?.apiProps[candidate]);

    if (!key) {
        return undefined;
    }

    const packageProps = local?.apiProps[key];
    const props = new Set([...(apiProps[key] || []), ...(packageProps || [])]);

    const acceptsHtmlProps = packageProps ? !local?.withoutHtmlProps.includes(key) : !withoutHtmlProps.includes(key);

    if (acceptsHtmlProps) {
        htmlProps.forEach((prop) => props.add(prop));
    }

    return props;
};

/** Категорию задаёт только этот энхансер: всё, что пришло из стори, затирается */
const withCategory = (argType: ArgType, category: string): ArgType => ({
    ...argType,
    table: { ...argType.table, category, subcategory: undefined },
});

/**
 * Секции в таблице идут в порядке ключей argTypes, но последним в цепочке всегда отрабатывает
 * встроенный `inferArgTypes` (`secondPass`), а он пересобирает argTypes в порядке `initialArgs` —
 * встать после него нечем. Поэтому переставляем сами args: на рендер это не влияет,
 * зато `Component props` оказывается первой секцией.
 */
const reorderInitialArgs = (initialArgs: Record<string, unknown> | undefined, order: string[]) => {
    if (!initialArgs || !Object.isExtensible(initialArgs)) {
        return;
    }

    const values = { ...initialArgs };
    const names = order.filter((name) => name in values);

    names.forEach((name) => delete initialArgs[name]);
    names.forEach((name) => {
        initialArgs[name] = values[name];
    });
};

/**
 * Storybook `argTypesEnhancer`: раскладывает контролы по двум категориям —
 * `Component props` (API компонента) и `Example only` (заведено только ради стори).
 *
 * @param local пропсы компонентов пакета, `<пакет>/.storybook/apiProps.generated.ts`
 */
export const createStorybookOnlyArgTypesEnhancer = (local?: ApiProps) => ({
    title,
    argTypes,
    initialArgs,
    parameters,
}: StoryContext) => {
    const { apiComponent } = parameters || {};

    if (apiComponent === false) {
        return argTypes;
    }

    const api = getApiProps(apiComponent ? [apiComponent] : getComponentKeysFromTitle(title), local);

    if (!api) {
        return argTypes;
    }

    // часть пропсов задана только через `args` — их argTypes Storybook выведет сам
    const names = new Set([...Object.keys(argTypes), ...Object.keys(initialArgs || {})]);

    const componentProps: Record<string, ArgType> = {};
    const exampleOnly: Record<string, ArgType> = {};

    names.forEach((name) => {
        const argType = argTypes[name] || {};

        if (argType.table?.disable) {
            componentProps[name] = argType;
        } else if (api.has(name)) {
            componentProps[name] = withCategory(argType, COMPONENT_PROPS_CATEGORY);
        } else {
            exampleOnly[name] = withCategory(argType, EXAMPLE_ONLY_CATEGORY);
        }
    });

    // порядок секций в таблице задаётся порядком ключей, поэтому API идёт первым
    const ordered = { ...componentProps, ...exampleOnly };

    reorderInitialArgs(initialArgs, Object.keys(ordered));

    return ordered;
};

/** Вариант без пропсов пакета — только база `plasma-new-hope` */
export const storybookOnlyArgTypesEnhancer = createStorybookOnlyArgTypesEnhancer();
