import React, { forwardRef, useState, useEffect, HTMLAttributes, useMemo } from 'react';
import cls from 'classnames';

import type { RootPropsOmitOnChange } from '../../engines/types';

import { classes } from './Steps.tokens';
import { StepsProps as BaseStepsProps } from './Steps.types';
import { StepItem } from './ui';
import { base } from './Steps.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as itemViewCSS } from './variations/_itemView/base';
import { getItemStatus } from './utils/getItemStatus';

type StepsProps = BaseStepsProps & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export const stepsRoot = (Root: RootPropsOmitOnChange<HTMLDivElement, StepsProps>) =>
    forwardRef<HTMLDivElement, StepsProps>((props, outerRef) => {
        const {
            view = 'default',
            itemView = 'default',
            size,
            orientation = 'horizontal',
            contentAlign = 'left',
            hasLine = true,
            hasContent = 'all',
            hasLoader,
            items = [],
            onChange,
            current,
            status,
            ...rest
        } = props;

        const [prevIndex, setPrevIndex] = useState<number | undefined>();

        const hasIndicator = items.some((item) => item.indicator != null);
        const isSimple = items.every((item) => !item.title && !item.content);

        const innerItems = useMemo(() => {
            const isUncontrolled = current !== undefined;

            return items.map((item, index) => {
                const itemStatus = getItemStatus({
                    isUncontrolled,
                    current,
                    status,
                    index,
                    item,
                });

                return {
                    ...item,
                    status: itemStatus,
                };
            });
        }, [status, current, items]);

        useEffect(() => {
            const calcPrevIndex = () => {
                if (current !== undefined) {
                    setPrevIndex(current);
                } else {
                    const index = innerItems.findIndex((item) => item.status === 'active');
                    setPrevIndex(index !== -1 ? index : undefined);
                }
            };

            calcPrevIndex();

            return () => {
                calcPrevIndex();
            };
        }, [current, innerItems]);

        return (
            <Root
                size={size}
                view={view}
                itemView={itemView}
                ref={outerRef}
                className={cls({
                    [classes.verticalOrientation]: orientation === 'vertical',
                    [classes.simple]: isSimple,
                    [classes.hasIndicator]: hasIndicator,
                })}
                {...rest}
            >
                {innerItems.map((item, index) => {
                    const isActive = item.status === 'active';

                    const itemContent =
                        (hasContent === 'active' && !isActive) || hasContent === 'none' ? '' : item.content;

                    const itemContentAlign = orientation === 'horizontal' ? contentAlign : 'left';
                    const onClick = onChange ? () => onChange(item, index, prevIndex) : undefined;

                    return (
                        <StepItem
                            key={index}
                            index={index}
                            title={item.title}
                            content={itemContent}
                            indicator={item.indicator}
                            status={item.status}
                            size={size!}
                            orientation={orientation}
                            contentAlign={itemContentAlign}
                            hasLine={hasLine}
                            hasLoader={hasLoader && isActive}
                            onClick={onClick}
                            items={innerItems}
                        />
                    );
                })}
            </Root>
        );
    });

export const stepsConfig = {
    name: 'Steps',
    tag: 'div',
    layout: stepsRoot,
    base,
    variations: {
        size: sizeCSS,
        view: viewCSS,
        itemView: itemViewCSS,
    },
    defaults: {
        view: 'default',
        size: 'm',
        itemView: 'default',
    },
};
