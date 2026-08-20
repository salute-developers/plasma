// @ts-expect-error CSS Modules are processed by Storybook.
import disabledStyles from './config/Disabled.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import sizeStyles from './config/Size.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import viewStyles from './config/View.module.css';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: viewStyles,
        size: sizeStyles,
        disabled: {
            true: disabledStyles.disabled,
        },
    },
};
