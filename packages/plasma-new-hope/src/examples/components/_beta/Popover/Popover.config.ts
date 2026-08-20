// @ts-expect-error CSS Modules are processed by Storybook.
import closeInnerSizeStyles from './config/CloseInnerSize.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import closeInnerViewStyles from './config/CloseInnerView.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import closeNoneSizeStyles from './config/CloseNoneSize.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import closeNoneViewStyles from './config/CloseNoneView.module.css';

export const appearanceConfig = {
    default: {
        defaults: {
            view: 'default',
            size: 'm',
        },
        componentProps: {
            appearance: 'closeInner',
        },
        variations: {
            view: {
                default: closeInnerViewStyles.default,
                accent: closeInnerViewStyles.accent,
            },
            size: {
                l: closeInnerSizeStyles.l,
                m: closeInnerSizeStyles.m,
                s: closeInnerSizeStyles.s,
            },
        },
    },
    closeNone: {
        defaults: {
            view: 'default',
            size: 'm',
        },
        componentProps: {
            appearance: 'closeNone',
        },
        variations: {
            view: {
                default: closeNoneViewStyles.default,
                accent: closeNoneViewStyles.accent,
            },
            size: {
                l: closeNoneSizeStyles.l,
                m: closeNoneSizeStyles.m,
                s: closeNoneSizeStyles.s,
            },
        },
    },
} as const;

export const DEFAULT_APPEARANCE = 'default' as const;

export type Appearance = keyof typeof appearanceConfig;

export type AppearanceView<A extends Appearance> = keyof typeof appearanceConfig[A]['variations']['view'];
export type AppearanceSize<A extends Appearance> = keyof typeof appearanceConfig[A]['variations']['size'];
