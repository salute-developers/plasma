// INFO: Issue об этом решении - https://github.com/salute-developers/plasma/issues/1219

/**
 * Работает только со styled-components
 */
export type AsProps<T = any> = {
    /**
     * Сменить рендер на другой тип компонента.
     */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<T>;
    /**
     * Альтернатива для `as` для случаев, когда при большой вложенности стилей,
     * не применяются родительские стили styled-components.
     */
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<T>;
};
