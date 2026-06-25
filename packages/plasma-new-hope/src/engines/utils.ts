import { ComponentConfig, HTMLAnyAttributes, Intersection, MediaQueryRule, PolymorphicClassName } from './types';

export const getStaticVariants = (config: ComponentConfig) => {
    if (!config.variations) {
        return [];
    }
    const res = [];
    const { variations } = config;

    // eslint-disable-next-line guard-for-in
    for (const key in variations) {
        const { css } = variations[key];
        css && res.push(css);
    }

    return res;
};

export const getDynamicVariants = (config: ComponentConfig) => {
    return (props: HTMLAnyAttributes) => {
        const res = [];

        // eslint-disable-next-line guard-for-in
        for (const key in config.variations) {
            if (key in props) {
                const variant = config.variations[key];

                const css = variant[props[key]];
                // no css for { modifier: true }
                css && Array.isArray(css) ? res.push(...css) : res.push(css);
            }
        }

        return res;
    };
};

/**
 * Собирает строку с @media-блоками для адаптивного режима.
 * Используется в исходнике конфига вертикали внутри css:
 *   responsive: css`${getResponsiveCSS([
 *       { from: 0,    to: 559,       size: sizeL },
 *       { from: 560,  to: 789,       size: sizeM },
 *       { from: 1023, to: undefined, size: sizeXL },
 *   ])}`
 *
 * `size` в правиле — это сами декларации (строка с присвоениями токенов),
 * а не имя вариации; декларации обычно вынесены в общую const, чтобы
 * переиспользоваться и в `variations.size.*`, и здесь.
 *
 * Для css/linaria-сборки linaria статически выполняет вызов на этапе сборки
 * вертикали и инлайнит готовый @media-CSS в скомпилированный класс; SC/emotion
 * получают то же в рантайме при первом обращении к модулю.
 *
 * Селектор `&&` поднимает специфичность на ×2, чтобы media-правило перебивало
 * обычную size-вариацию независимо от порядка правил в stylesheet.
 *
 * Семантика границ — диапазон ширины viewport в пикселях:
 *   from → min-width, to → max-width.
 *
 * Правила не пересекаются — массив просто конкатенируется.
 */
export const getResponsiveCSS = (media: MediaQueryRule[]): string =>
    media
        .map(({ from, to, size }) => {
            if (!size) {
                return '';
            }

            const parts: string[] = [];

            if (from !== undefined) {
                parts.push(`(min-width: ${from}px)`);
            }

            if (to !== undefined) {
                parts.push(`(max-width: ${to}px)`);
            }

            if (!parts.length) {
                return '';
            }

            return `@media ${parts.join(' and ')} { && { ${size} } }`;
        })
        .filter(Boolean)
        .join('\n');

export const getIntersectionStyles = (props: Record<string, any>, intersections?: Intersection[]) => {
    if (!intersections) {
        return [];
    }

    return intersections.reduce((styles: PolymorphicClassName[], item) => {
        const hasMatchStyle = Object.entries(item)
            .filter(([key]) => key !== 'style')
            .every(([key, value]) => props[key] === value);

        if (hasMatchStyle) {
            styles.push(item.style);
        }

        return styles;
    }, []);
};
