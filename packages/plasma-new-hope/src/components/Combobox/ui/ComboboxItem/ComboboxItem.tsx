import React, { forwardRef, useCallback, useMemo } from 'react';
import { safeUseId } from '@salutejs/plasma-core';

import type { RootProps } from '../../../../engines';
import { classes } from '../../Combobox.tokens';
import { getValidComponent } from '../../utils';
import { cx } from '../../../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { StyledContentLeft, StyledContentRight, StyledText, base } from './ComboboxItem.styles';
import { ComboboxItemProps } from './ComboboxItem.type';

export const comboboxItemRoot = (Root: RootProps<HTMLDivElement, ComboboxItemProps>) =>
    forwardRef<HTMLDivElement, ComboboxItemProps>(
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
                view,
                size,
                disabled,
                role = 'option',
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

            const withComboboxItemIsSelected = checked || isSelected ? classes.comboboxItemIsDisabled : undefined;
            const withComboboxItemIsDisabled = disabled ? classes.comboboxItemIsDisabled : undefined;

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
                tabIndex: -1,
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
                    className={cx(withComboboxItemIsSelected, withComboboxItemIsDisabled, className)}
                    view={view}
                    size={size}
                    id={innerId}
                    isSelected={isSelected}
                    role={role}
                    ref={outerRootRef}
                    tabIndex={0}
                    aria-disabled={disabled}
                    aria-selected={isSelected}
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

export const comboboxItemConfig = {
    name: 'ComboboxItem',
    tag: 'div',
    layout: comboboxItemRoot,
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
