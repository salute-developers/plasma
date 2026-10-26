import React, { forwardRef, useState, useEffect, useLayoutEffect, useRef, HTMLAttributes, useMemo, FC } from 'react';
import cls from 'classnames';

import type { RootPropsOmitOnChange } from '../../engines/types';
import { useForkRef } from '../../hooks';

import { classes, privateTokens } from './Steps.tokens';
import { StepsProps as BaseStepsProps } from './Steps.types';
import { base } from './Steps.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as itemViewCSS } from './variations/_itemView/base';
import { getItemStatus } from './utils/getItemStatus';
import { StepItemExtendedProps } from './ui/StepItem/StepItem.types';

type StepsProps = BaseStepsProps & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export const stepsRoot = (StepItem: FC<StepItemExtendedProps>) => (
    Root: RootPropsOmitOnChange<HTMLDivElement, StepsProps>,
) =>
    forwardRef<HTMLDivElement, StepsProps>((props, outerRef) => {
        const {
            view = 'default',
            itemView = 'default',
            size,
            orientation = 'horizontal',
            contentAlign = 'left',
            hasLine = true,
            hasLastLine = false,
            hasContent = 'all',
            hasLoader,
            items = [],
            onChange,
            current,
            status,
            renderItem,
            ...rest
        } = props;

        const [prevIndex, setPrevIndex] = useState<number | undefined>();
        const rootRef = useRef<HTMLDivElement>(null);
        const ref = useForkRef(outerRef, rootRef);

        const hasIndicator = items.some((item) => item.indicator != null);
        const isSimple = !renderItem && items.every((item) => !item.title && !item.content);

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

        /**
         * Шаги со своим indicatorSize отличаются диаметром индикатора, и чтобы круги стояли на общей оси,
         * обёртке каждого индикатора нужен размер самого большого круга.
         * CSS не умеет брать максимум по соседним элементам, а диаметр шага задаётся числом,
         * поэтому максимум измеряется по DOM и передаётся в стили через приватный токен.
         */
        useLayoutEffect(() => {
            const root = rootRef.current;

            if (!root) {
                return undefined;
            }

            if (!items.some((item) => item.indicatorSize != null)) {
                root.style.removeProperty(privateTokens.indicatorTrack);
                return undefined;
            }

            const slots = root.querySelectorAll<HTMLElement>(`.${classes.bulletSlot}`);
            const track = Math.max(...Array.from(slots, (slot) => slot.offsetWidth));

            root.style.setProperty(privateTokens.indicatorTrack, `${track}px`);

            return undefined;
        }, [innerItems, size, orientation, hasLoader]);

        return (
            <Root
                size={size}
                view={view}
                itemView={itemView}
                ref={ref}
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
                            hasLastLine={hasLastLine}
                            hasLoader={hasLoader && isActive}
                            onClick={onClick}
                            items={innerItems}
                            rootView={view}
                            height={item.height}
                            width={item.width}
                            renderItem={renderItem}
                        />
                    );
                })}
            </Root>
        );
    });

export const stepsConfig = (StepItem: FC<StepItemExtendedProps>) => ({
    name: 'Steps',
    tag: 'div',
    layout: stepsRoot(StepItem),
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
});
