import React, { forwardRef, useCallback } from 'react';
// import { safeUseId } from '@salutejs/plasma-core';

import { RootProps } from '../../../engines';
import { classes } from '../Dropdown.tokens';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as selectedCSS } from './variations/_selected/base';
import { StyledDropdownItem } from './DropdownItem.styles';

type DropdownItemProps = React.LabelHTMLAttributes<HTMLInputElement>;

/**
 * Элемент выпадающего списка
 */
export const dropdownItemRoot = (Root: RootProps<HTMLLabelElement, DropdownItemProps>) =>
    forwardRef<HTMLLabelElement, DropdownItemProps>(
        (
            {
                // id,
                // className,
                children,
                text,
                contentLeft,
                contentRight,
                selected,
                onSelect, // здесь должны быть кастомные типы
                onClick, //  здесь должны быть кастомные типы
                //
                name,
                value,
                checked,
                onChange,
                // role,
                view,
                size,
                disabled,
                ...rest
            },
            outerRootRef,
        ) => {
            // const uniqId = safeUseId();
            // const innerId = uniqId;

            const withDropdownItemIsSelected = selected ? classes.dropdownItemIsSelected : undefined;
            const ContentLeftComponent = contentLeft;
            const ContentRightComponent = contentRight;

            const onClickHandle = useCallback(
                (event: React.MouseEvent<HTMLLabelElement>) => {
                    onClick?.(event);

                    onSelect?.(!selected);
                },
                [selected, onSelect],
            );

            const contentProps = {
                name,
                value,
                checked,
                onChange,
            };

            return (
                <Root view={view} size={size} selected={selected} disabled={disabled}>
                    <StyledDropdownItem
                        className={withDropdownItemIsSelected}
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
                    </StyledDropdownItem>
                </Root>
            );
        },
    );

export const dropdownItemConfig = {
    name: 'DropdownItem',
    tag: 'div',
    layout: dropdownItemRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        selected: {
            css: selectedCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
