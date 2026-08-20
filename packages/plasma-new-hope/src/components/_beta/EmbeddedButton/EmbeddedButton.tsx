import React, { forwardRef } from 'react';
import cls from 'classnames';

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

export const EmbeddedButton = forwardRef<HTMLButtonElement, EmbeddedButtonProps>((props, ref) => {
    const {
        children,
        isLoading,
        loader,
        position = 'center',
        as,
        forwardedAs,
        // @ts-ignore
        _configClassName,
        ...rest
    } = props;

    const Root = (as ?? forwardedAs ?? 'button') as React.ElementType;
    const isLoadingClass = isLoading ? classes.embeddedButtonLoading : undefined;

    return (
        <Root
            ref={ref}
            type="button"
            {...rest}
            className={cls(styles.root, _configClassName, isLoadingClass, rest.className)}
        >
            <div className={styles.loadWrap} data-position={position} data-loading={isLoading}>
                <div className={styles.iconContainer}>{children}</div>
            </div>
            {isLoading && <div className={styles.loader}>{loader || <Spinner />}</div>}
        </Root>
    );
});
