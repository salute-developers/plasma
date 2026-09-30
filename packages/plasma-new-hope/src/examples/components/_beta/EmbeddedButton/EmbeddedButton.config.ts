import disabledStyles from './config/Disabled.module.css';
import sizeStyles from './config/Size.module.css';
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
