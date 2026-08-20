import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../../engines/types';

import type { EmbeddedButtonProps } from './EmbeddedButton.types';
import { classes } from './EmbeddedButton.tokens';
// @ts-expect-error CSS Modules are processed during the beta build.
import styles from './EmbeddedButton.module.css';

const Spinner = () => (
    <span className={styles.spinner} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.2" />
            <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    </span>
);

export const embeddedButtonRoot = (Root: RootProps<HTMLButtonElement, EmbeddedButtonProps>) =>
    forwardRef<HTMLButtonElement, EmbeddedButtonProps>((props, ref) => {
        const { children, view, size, disabled, isLoading, loader, position = 'center', className, ...rest } = props;

        const isLoadingClass = isLoading ? classes.embeddedButtonLoading : undefined;

        return (
            <Root
                type="button"
                ref={ref}
                view={view}
                size={size}
                disabled={disabled}
                className={cls(styles.root, isLoadingClass, className)}
                {...rest}
            >
                <div className={styles.loadWrap} data-position={position} data-loading={isLoading}>
                    <div className={styles.iconContainer}>{children}</div>
                </div>
                {isLoading && <div className={styles.loader}>{loader || <Spinner />}</div>}
            </Root>
        );
    });

export const embeddedButtonConfig = {
    name: 'EmbeddedButton',
    tag: 'button',
    layout: embeddedButtonRoot,
    base: '',
    variations: {
        view: {
            css: '',
        },
        size: {
            css: '',
        },
        disabled: {
            css: '',
            attrs: true,
        },
    },
    defaults: {
        view: 'secondary',
        size: 'm',
    },
};
