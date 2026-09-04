import { apiProps, htmlProps, withoutHtmlProps } from '../apiProps.generated';

const STORYBOOK_ONLY_CATEGORY = 'storybook-only';

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

const asStorybookOnly = (argType: ArgType): ArgType => ({
    ...argType,
    table: { ...argType.table, category: STORYBOOK_ONLY_CATEGORY, subcategory: undefined },
});

/**
 * Storybook `argTypesEnhancer`: отделяет пропсы, заведённые только ради стори, от API компонента.
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

    return Array.from(names).reduce((acc, name) => {
        const argType = argTypes[name] || {};

        acc[name] = api.has(name) || argType.table?.disable ? argType : asStorybookOnly(argType);

        return acc;
    }, {} as Record<string, ArgType>);
};

/** Вариант без пропсов пакета — только база `plasma-new-hope` */
export const storybookOnlyArgTypesEnhancer = createStorybookOnlyArgTypesEnhancer();
