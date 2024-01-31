import React, { forwardRef, useCallback, useMemo } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import { RootProps } from '../../../../engines';
import { classes } from '../../Dropdown.tokens';
import { cx } from '../../../../utils';
import { getValidComponent } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { StyledContentLeft, StyledContentRight, StyledText, base } from './DropdownItem.styles';
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

            const withDropdownItemIsSelected = checked || isSelected ? classes.dropdownItemIsSelected : undefined;
            const withDropdownItemIsDisabled = disabled ? classes.dropdownItemIsDisabled : undefined;

            const handleOnClick = useCallback(
                (event: React.MouseEvent<HTMLDivElement>) => {
                    if (disabled) {
                        return;
                    }

                    onClick?.(event);

                    if (onSelect && !ContentLeftComponent) {
                        onSelect(value, text);
                    }
                },
                [onSelect, disabled],
            );

            const handleOnChange = useCallback(
                (event: React.MouseEvent<HTMLInputElement>) => {
                    if (disabled) {
                        return;
                    }

                    onChange?.(event);

                    if (onSelect && ContentLeftComponent) {
                        onSelect(value, text);
                    }
                },
                [onSelect, disabled],
            );

            const contentProps = {
                name,
                value,
                checked: checked || isSelected,
                disabled,
                tabIndex: 0,
                ...(!disabled && { onChange: handleOnChange }),
            };

            const ContentLeft = useMemo(() => getValidComponent(ContentLeftComponent, contentProps), [
                ContentRightComponent,
                contentProps,
            ]);

            const ContentRight = useMemo(() => getValidComponent(ContentRightComponent, contentProps), [
                ContentRightComponent,
                contentProps,
            ]);

            return (
                <Root
                    className={cx(withDropdownItemIsSelected, withDropdownItemIsDisabled, className)}
                    view={view}
                    size={size}
                    id={innerId}
                    isSelected={isSelected}
                    role={role}
                    ref={outerRootRef}
                    tabIndex={0}
                    aria-disabled={disabled}
                    onClick={handleOnClick}
                    data-value={value}
                    {...rest}
                >
                    {text ? (
                        <>
                            <StyledContentLeft>{ContentLeftComponent && ContentLeft}</StyledContentLeft>
                            <StyledText>{text}</StyledText>
                            <StyledContentRight>{ContentRightComponent && ContentRight}</StyledContentRight>
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
