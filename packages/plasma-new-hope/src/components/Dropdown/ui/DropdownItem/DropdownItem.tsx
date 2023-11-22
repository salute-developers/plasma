import React, { forwardRef, useCallback } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import { RootProps } from '../../../../engines';
import { classes } from '../../Dropdown.tokens';
import { cx } from '../../../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './DropdownItem.styles';
import type { DropdownItemProps } from './DropdownItem.type';

/**
 * Элемент выпадающего списка
 */
export const dropdownItemRoot = (Root: RootProps<HTMLDivElement, DropdownItemProps>) =>
    forwardRef<HTMLDivElement, DropdownItemProps>(
        (
            {
                id,
                className,
                children,
                text,
                isSelected,
                name,
                checked,
                value,
                role,
                view,
                size,
                disabled,
                contentLeft: ContentLeftComponent,
                contentRight: ContentRightComponent,
                onSelect,
                onClick,
                onChange,
                ...rest
            },
            outerRootRef,
        ) => {
            const uniqId = safeUseId();
            const innerId = id || uniqId;

            const withDropdownItemIsSelected = isSelected ? classes.dropdownItemIsSelected : undefined;
            const withDropdownItemIsDisabled = disabled ? classes.dropdownItemIsDisbaled : undefined;

            const onClickHandle = useCallback(
                (event: React.MouseEvent<HTMLDivElement>) => {
                    if (disabled) return;

                    onClick?.(event);

                    onSelect?.();
                },
                [isSelected, onSelect, disabled],
            );

            const contentProps = {
                name,
                value,
                checked,
                disabled,
                ...(!disabled && { onChange }),
            };

            return (
                <Root
                    className={cx(withDropdownItemIsSelected, withDropdownItemIsDisabled, className)}
                    view={view}
                    size={size}
                    id={innerId}
                    isSelected={isSelected}
                    role={role}
                    ref={outerRootRef}
                    onClick={onClickHandle}
                    {...rest}
                >
                    {text ? (
                        <>
                            {ContentLeftComponent && <ContentLeftComponent {...contentProps} />}
                            {text}
                            {ContentRightComponent && (
                                <ContentRightComponent {...contentProps} style={{ marginLeft: 'auto' }} />
                            )}
                        </>
                    ) : (
                        children
                    )}
                </Root>
            );
        },
    );

export const dropdownItemConfig = {
    name: 'DropdownItem',
    tag: 'div',
    layout: dropdownItemRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
