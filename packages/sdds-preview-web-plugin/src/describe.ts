import { PREVIEW_PROTOCOL_VERSION } from './protocol';
import type { PreviewComponentDescription, PreviewExamplePropertyDescription } from './protocol';
import type { PreviewComponentEntry } from './registry';
import type { StoryArg, WebStory } from './stories/types';

/**
 * Имена свойств, которые протокол не разрешает в описании (`variant`, `appearance` — понятия конфигурации). Аргументы
 * story с такими именами — пропсы web-компонента; в протоколе они идут под псевдонимом и возвращаются при отрисовке.
 */
const RESERVED_ARG_ALIASES: Record<string, string> = { variant: 'storyVariant', appearance: 'storyAppearance' };

/** Имя аргумента story в протоколе. */
export const protocolArgName = (name: string) => RESERVED_ARG_ALIASES[name] ?? name;

/** Имя пропса story по имени свойства протокола. */
export const storyArgName = (name: string) =>
    Object.entries(RESERVED_ARG_ALIASES).find(([, alias]) => alias === name)?.[0] ?? name;

const describeArg = (arg: StoryArg): PreviewExamplePropertyDescription => {
    const { value } = arg;
    const name = protocolArgName(arg.name);

    if (typeof value === 'boolean') {
        return { type: 'boolean', name, defaultValue: value };
    }
    if (typeof value === 'number') {
        return Number.isInteger(value)
            ? { type: 'int', name, defaultValue: value }
            : { type: 'float', name, defaultValue: value };
    }
    if (arg.items?.length) {
        const variants = arg.items.map((item) => String(item.value));
        return { type: 'singleChoice', name, defaultValue: variants.includes(value) ? value : variants[0], variants };
    }

    return { type: 'string', name, defaultValue: value };
};

/**
 * Ответ на `describe`: список story компонента и аргументы описываемой story как свойства примера. Логические —
 * `boolean`, строковые со списком — `singleChoice` (варианты — значения пунктов), прочие строковые — `string`,
 * числа — `int` или `float`.
 */
export const describeStory = (
    componentId: string,
    entry: PreviewComponentEntry,
    story: WebStory,
): PreviewComponentDescription => ({
    protocolVersion: PREVIEW_PROTOCOL_VERSION,
    componentId,
    storyId: story.name,
    stories: entry.stories.map(({ name }) => ({ id: name, name })),
    properties: story.args.map(describeArg),
});

/** Значения аргументов story по умолчанию. */
export const storyDefaults = (story: WebStory): Record<string, string | boolean | number> =>
    Object.fromEntries(story.args.map((arg) => [arg.name, arg.value]));
