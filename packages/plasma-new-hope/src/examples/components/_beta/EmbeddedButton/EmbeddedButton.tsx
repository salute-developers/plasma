import React, { forwardRef } from 'react';
import cls from 'classnames';

import { _beta_embeddedButtonRoot } from '../../../../components/_beta/EmbeddedButton';
import type { _beta_EmbeddedButtonProps } from '../../../../components/_beta/EmbeddedButton';

// @ts-expect-error CSS Modules are processed by Storybook.
import disabledStyles from './config/Disabled.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import sizeStyles from './config/Size.module.css';
// @ts-expect-error CSS Modules are processed by Storybook.
import viewStyles from './config/View.module.css';

type EmbeddedButtonView = 'default' | 'secondary' | 'accent' | 'positive' | 'warning' | 'negative' | 'info';
type EmbeddedButtonSize = 'l' | 'm' | 's' | 'xs';

type EmbeddedButtonProps = Omit<_beta_EmbeddedButtonProps, 'view' | 'size'> & {
    view?: EmbeddedButtonView;
    size?: EmbeddedButtonSize;
};

const Root = forwardRef<HTMLButtonElement, _beta_EmbeddedButtonProps>(({ view, size, ...rest }, ref) => (
    <button ref={ref} type="button" {...rest} />
));

const CoreEmbeddedButton = _beta_embeddedButtonRoot(Root);

export const EmbeddedButton = forwardRef<HTMLButtonElement, EmbeddedButtonProps>(
    ({ view = 'default', size = 'm', disabled = false, className, ...rest }, ref) => {
        const rootClassName = cls(viewStyles[view], sizeStyles[size], disabled && disabledStyles.disabled, className);

        return (
            <CoreEmbeddedButton
                ref={ref}
                view={view}
                size={size}
                disabled={disabled}
                className={rootClassName}
                {...rest}
            />
        );
    },
);
