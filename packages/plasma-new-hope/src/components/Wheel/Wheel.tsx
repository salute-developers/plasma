import React, { Fragment, forwardRef } from 'react';
import cls from 'classnames';
import type { RootPropsOmitOnChangeAndDefaultValue } from 'src/engines';

import type { WheelProps } from './Wheel.types';
import { WheelColumn } from './ui/WheelColumn';
import { base, Separator } from './Wheel.styles';
import { classes } from './Wheel.tokens';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';

export const wheelRoot = (
    Root: RootPropsOmitOnChangeAndDefaultValue<HTMLDivElement, Omit<WheelProps, 'columns' | 'value'>>,
) =>
    forwardRef<HTMLDivElement, WheelProps>(
        (
            {
                columns,
                value,
                onChange,
                disabled,
                hasControls = true,
                visibleItemsCount = 5,
                animated = true,
                align = 'center',
                separator = 'none',
                className,
                width,
                style,
                size,
                view,
                ...rest
            },
            ref,
        ) => {
            const reserveDescription = columns.some((column) => column.description != null);
            const hasSeparator =
                separator != null && typeof separator !== 'boolean' && separator !== '' && separator !== 'none';
            const isCustomSeparator = hasSeparator && separator !== 'dots' && separator !== 'divider';
            const separatorClassName = cls(
                separator === 'dots' && classes.dots,
                separator === 'divider' && classes.divider,
                isCustomSeparator && classes.customSeparator,
            );

            return (
                <Root
                    ref={ref}
                    role="group"
                    aria-disabled={disabled || undefined}
                    disabled={disabled}
                    size={size}
                    view={view}
                    style={{ width, ...style }}
                    className={cls(
                        className,
                        disabled && classes.disabled,
                        reserveDescription && classes.hasDescription,
                        separatorClassName,
                        align === 'left' && classes.alignLeft,
                        align === 'right' && classes.alignRight,
                        align === 'mixed' && classes.alignMixed,
                    )}
                    {...rest}
                >
                    {columns.map((column, index) => (
                        <Fragment key={column.name}>
                            {index > 0 && hasSeparator && (
                                <Separator
                                    aria-hidden={isCustomSeparator ? undefined : true}
                                    className={cls(
                                        classes.separator,
                                        separatorClassName,
                                        reserveDescription && classes.hasDescription,
                                    )}
                                >
                                    {isCustomSeparator && separator}
                                </Separator>
                            )}
                            <WheelColumn
                                {...column}
                                value={value[column.name]}
                                disabled={disabled || column.disabled}
                                hasControls={hasControls}
                                visibleItemsCount={visibleItemsCount}
                                animated={animated}
                                reserveDescription={reserveDescription}
                                onChange={(nextValue) => {
                                    if (onChange) {
                                        onChange({ ...value, [column.name]: nextValue }, column.name);
                                    }
                                }}
                            />
                        </Fragment>
                    ))}
                </Root>
            );
        },
    );

export const wheelConfig = {
    name: 'Wheel',
    tag: 'div',
    layout: wheelRoot,
    base,
    variations: {
        size: { css: sizeCSS },
        view: { css: viewCSS },
        disabled: { css: disabledCSS, attrs: true },
    },
    defaults: { size: 'displayL', view: 'default' },
};
