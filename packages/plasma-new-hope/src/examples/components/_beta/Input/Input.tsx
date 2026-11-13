import React, { forwardRef } from 'react';
import cls from 'classnames';

import { Input as CoreInput } from '../../../../components/_beta/Input';
import type { InputProps as CoreInputProps } from '../../../../components/_beta/Input';

import styles from './config/Input.module.css';
import defaultSizeStyles from './config/DefaultSize.module.css';
import defaultViewStyles from './config/DefaultView.module.css';
import clearSizeStyles from './config/ClearSize.module.css';
import clearViewStyles from './config/ClearView.module.css';
import hintStyles from './config/Hint.module.css';

export type InputSize = 'xl' | 'l' | 'm' | 's' | 'xs';
export type InputView = 'default' | 'positive' | 'warning' | 'negative';
export type InputProps = CoreInputProps & {
    view?: InputView;
    size?: InputSize;
    appearance?: 'default' | 'clear';
};

/** Пример конфигурации через CSS-переменные; бизнес-логика остаётся у потребителя. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ rootProps, hint, view = 'default', size = 'm', appearance = 'default', ...rest }, ref) => {
        const viewStyles = appearance === 'default' ? defaultViewStyles : clearViewStyles;
        const sizeStyles = appearance === 'default' ? defaultSizeStyles : clearSizeStyles;
        const configuredHint = hint && { ...hint, _configClassName: hintStyles.hint };

        return (
            <CoreInput
                {...rest}
                ref={ref}
                hint={configuredHint}
                rootProps={{
                    ...rootProps,
                    className: cls(styles.root, viewStyles[view], sizeStyles[size], rootProps?.className),
                }}
            />
        );
    },
);
