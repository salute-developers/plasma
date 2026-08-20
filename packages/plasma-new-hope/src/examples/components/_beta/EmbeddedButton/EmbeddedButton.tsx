import React, { forwardRef } from 'react';
import cls from 'classnames';

import { EmbeddedButton as CoreEmbeddedButton } from '../../../../components/_beta/EmbeddedButton';
import type { EmbeddedButtonProps as CoreEmbeddedButtonProps } from '../../../../components/_beta/EmbeddedButton';

// @ts-expect-error CSS Modules are processed by Storybook.
import disabledStyles from './config/Disabled.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import sizeStyles from './config/Size.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
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
