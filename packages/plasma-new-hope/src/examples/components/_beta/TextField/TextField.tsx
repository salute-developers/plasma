import React, { forwardRef } from 'react';
import cls from 'classnames';

import { TextField as CoreTextField } from '../../../../components/_beta/TextField';
import type { TextFieldProps as CoreTextFieldProps } from '../../../../components/_beta/TextField';

import defaultSizeStyles from './config/DefaultSize.module.css';
import defaultViewStyles from './config/DefaultView.module.css';
import clearSizeStyles from './config/ClearSize.module.css';
import clearViewStyles from './config/ClearView.module.css';
import hintStyles from './config/Hint.module.css';
import hintSizeStyles from './config/HintSize.module.css';

export type TextFieldProps = CoreTextFieldProps & {
    size?: 'xl' | 'l' | 'm' | 's' | 'xs';
    view?: 'default' | 'positive' | 'warning' | 'negative';
    appearance?: 'default' | 'clear';
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ size = 'l', view = 'default', appearance = 'default', rootProps, hint, ...rest }, ref) => {
        const sizeStyles = appearance === 'default' ? defaultSizeStyles : clearSizeStyles;
        const viewStyles = appearance === 'default' ? defaultViewStyles : clearViewStyles;
        const hasOuterLabel = Boolean(rest.label) && rest.labelPlacement !== 'inner' && rest.labelPlacement !== 'none';
        const hintSize = hint?.size ?? (hasOuterLabel || size === 'xs' ? 's' : 'm');

        return (
            <CoreTextField
                {...rest}
                ref={ref}
                hint={hint && { ...hint, size: hintSize, ...{ _configClassName: hintStyles.hint } }}
                rootProps={{
                    ...rootProps,
                    className: cls(sizeStyles[size], viewStyles[view], hintSizeStyles[hintSize], rootProps?.className),
                }}
            />
        );
    },
);
