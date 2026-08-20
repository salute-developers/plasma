import React, { forwardRef } from 'react';
import cls from 'classnames';

import { EmbeddedButton as CoreEmbeddedButton } from '../../../../components/_beta/EmbeddedButton';
import type { EmbeddedButtonProps as CoreEmbeddedButtonProps } from '../../../../components/_beta/EmbeddedButton';

import disabledStyles from './config/Disabled.module.css';
import sizeStyles from './config/Size.module.css';
import viewStyles from './config/View.module.css';

type EmbeddedButtonView = 'default' | 'secondary' | 'accent' | 'positive' | 'warning' | 'negative' | 'info';
type EmbeddedButtonSize = 'l' | 'm' | 's' | 'xs';

type EmbeddedButtonProps = CoreEmbeddedButtonProps & {
    view?: EmbeddedButtonView;
    size?: EmbeddedButtonSize;
};

export const EmbeddedButton = forwardRef<HTMLButtonElement, EmbeddedButtonProps>(
    ({ view = 'default', size = 'm', ...rest }, ref) => {
        const configClassName = cls(viewStyles[view], sizeStyles[size], rest.disabled && disabledStyles.disabled);

        // @ts-expect-error _configClassName is an internal runtime property.
        return <CoreEmbeddedButton ref={ref} _configClassName={configClassName} {...rest} />;
    },
);
