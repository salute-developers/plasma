import React, { useLayoutEffect } from 'react';
import type { ComponentType, CSSProperties, RefAttributes } from 'react';
import { canUseDOM } from 'src/utils';

export const gradientTextClass = 'sdds-core-gradient-text';
export const gradientTextWrapperClass = 'sdds-core-with-text-gradient';

export const gradientTextVars = {
    gradient: '--sdds-core-text-gradient',
    fill: '--sdds-core-text-gradient-fill',
    gradientHover: '--sdds-core-text-gradient-hover',
    gradientActive: '--sdds-core-text-gradient-active',
} as const;

export type WithTextGradientProps = {
    /**
     * Градиент для текстовой ноды компонента.
     * Принимает любое валидное CSS-значение gradient.
     * @example 'linear-gradient(90deg, #f00, #00f)'
     */
    textGradient?: string;
    /**
     * Градиент текстовой ноды при наведении.
     * Если не задан — используется значение `textGradient`.
     */
    textGradientHover?: string;
    /**
     * Градиент текстовой ноды в активном состоянии.
     * Если не задан — используется значение `textGradient`.
     */
    textGradientActive?: string;
    style?: CSSProperties;
    className?: string;
};

const styleId = 'sdds-core-gradient-text-styles';

const cssRules = `
.${gradientTextWrapperClass} .${gradientTextClass} {
    background: var(${gradientTextVars.gradient});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: var(${gradientTextVars.fill}, currentColor);
}
@media (hover: hover) and (pointer: fine) {
    .${gradientTextWrapperClass}:hover .${gradientTextClass} {
        background: var(${gradientTextVars.gradientHover}, var(${gradientTextVars.gradient}));
        background-clip: text;
        -webkit-background-clip: text;
    }
}
.${gradientTextWrapperClass}:active .${gradientTextClass} {
    background: var(${gradientTextVars.gradientActive}, var(${gradientTextVars.gradient}));
    background-clip: text;
    -webkit-background-clip: text;
}
`.trim();

// useInsertionEffect (React 18+) fires before DOM mutations; fall back to useLayoutEffect for React 16/17.
const { useInsertionEffect } = React as { useInsertionEffect?: typeof useLayoutEffect };
const useStyleInjection: typeof useLayoutEffect = useInsertionEffect ?? useLayoutEffect;

/**
 * HOC, который добавляет пропы `textGradient`, `textGradientHover` и `textGradientActive`
 * любому компоненту, у которого текстовая нода помечена классом `sdds-core-gradient-text`.
 *
 * Должен вызываться на уровне модуля (не внутри render-функции):
 * @example
 * const GradientButton = withTextGradient(Button);
 * // ...
 * <GradientButton
 *     textGradient="linear-gradient(90deg, #f00, #00f)"
 *     textGradientHover="linear-gradient(90deg, #0f0, #00f)"
 * >
 *     Текст
 * </GradientButton>
 */
export const withTextGradient = <P extends WithTextGradientProps, E extends Element = Element>(
    Component: ComponentType<P & RefAttributes<E>>,
) => {
    return React.forwardRef<E, P & WithTextGradientProps>(
        ({ textGradient, textGradientHover, textGradientActive, style, className, ...rest }, ref) => {
            useStyleInjection(() => {
                if (!canUseDOM || document.getElementById(styleId)) {
                    return;
                }

                const styleEl = document.createElement('style');
                styleEl.id = styleId;
                styleEl.textContent = cssRules;
                document.head.appendChild(styleEl);
            }, []);

            return (
                <Component
                    {...(rest as P & RefAttributes<E>)}
                    ref={ref}
                    className={[gradientTextWrapperClass, className].filter(Boolean).join(' ')}
                    style={
                        {
                            ...style,
                            ...(textGradient && {
                                [gradientTextVars.gradient]: textGradient,
                                [gradientTextVars.fill]: 'transparent',
                            }),
                            ...(textGradientHover && {
                                [gradientTextVars.gradientHover]: textGradientHover,
                            }),
                            ...(textGradientActive && {
                                [gradientTextVars.gradientActive]: textGradientActive,
                            }),
                        } as CSSProperties
                    }
                />
            );
        },
    );
};
