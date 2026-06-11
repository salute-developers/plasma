import React, { useState, useEffect } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../../../engines/types';
import { classes } from '../../Steps.tokens';

import type { StepItemExtendedProps } from './StepItem.types';
import {
    Bullet,
    BulletIndicator,
    BulletIndicatorWrapper,
    BulletSlot,
    StepItemContent,
    StepItemContentWrapper,
    StepItemDivider,
    StepItemTitle,
    SpinnerStyled,
    base,
    StepItemCenteredDivider,
} from './StepItem.styles';
import { base as viewCSS } from './variations/_view/base';

type RootStepItemProps = {
    view?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const stepItemRoot = (Root: RootProps<HTMLDivElement, RootStepItemProps>) => ({
    index,
    title,
    content,
    indicator,
    status = 'inactive',
    size,
    orientation,
    contentAlign,
    hasLine,
    hasLoader,
    onClick,
    items,
    rootView,
}: StepItemExtendedProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const isFirst = index === 0;
    const isLast = index === items.length - 1;

    const item = items[index];
    const prevItem = items?.[index - 1];
    const nextItem = items?.[index + 1];

    const isActive = status === 'active';
    const isNextActive = nextItem?.status === 'active';
    const isInactive = status === 'inactive';
    const isPrevInactive = (prevItem && !prevItem?.status) || prevItem?.status === 'inactive';
    const isPrevCompleted = prevItem?.status === 'completed';
    const isNextInactive = !nextItem?.status || nextItem?.status === 'inactive';

    const hasIndicator = indicator != null;

    const BulletNode = hasIndicator ? BulletIndicator : Bullet;

    const completedItemView = item?.completedItemView ?? rootView;
    const prevCompletedView = prevItem?.completedItemView ?? rootView;
    const isSimple = !title && !content;
    const clickable = Boolean(onClick);
    const isVertical = orientation === 'vertical';
    const isCentered = contentAlign === 'center';
    const isDisabled = item?.disabled;

    const onClickHandler = onClick && !isDisabled ? () => onClick(item, index) : undefined;

    const onMouseOver = clickable && !isDisabled ? () => setIsHovered(true) : undefined;
    const onMouseOut = clickable && !isDisabled ? () => setIsHovered(false) : undefined;

    const interactiveHandlers = {
        onClick: onClickHandler,
        onFocus: onMouseOver,
        onBlur: onMouseOut,
        onMouseOver,
        onMouseOut,
    };

    const bulletContent = hasLoader ? (
        <SpinnerStyled hasIndicator={hasIndicator} />
    ) : (
        <BulletNode
            className={cls({ [classes.active]: isActive, [classes.inactive]: isInactive })}
            disabled={isDisabled}
        >
            {typeof indicator === 'function' ? indicator({ status, item, size }) : indicator}
        </BulletNode>
    );

    useEffect(() => {
        if (isDisabled) {
            setIsHovered(false);
        }
    }, [isDisabled]);

    return (
        <Root
            view={completedItemView}
            className={cls(classes.stepItem, {
                [classes.simple]: isSimple,
                [classes.active]: isActive,
                [classes.hovered]: isHovered && !isActive,
                [classes.inactive]: isInactive,
                [classes.centered]: isCentered,
                [classes.disabled]: isDisabled,
                [classes.clickable]: clickable && !isActive,
                [classes.hasIndicator]: hasIndicator,
                [classes.verticalOrientation]: isVertical,
                isNextActive,
            })}
        >
            <BulletIndicatorWrapper
                className={cls({
                    [classes.simple]: isSimple,
                    [classes.verticalOrientation]: isVertical,
                    [classes.centered]: isCentered,
                    [classes.hasIndicator]: hasIndicator,
                })}
                {...interactiveHandlers}
            >
                {
                    contentAlign === 'center' && (
                        <Root view={prevCompletedView} style={{ display: 'inline-block' }}>
                            <StepItemCenteredDivider
                                className={cls({
                                    [classes.verticalOrientation]: isVertical,
                                    [classes.transparentDivider]: !hasLine || isFirst,
                                    [classes.inactive]: isInactive || isPrevInactive,
                                    [classes.prevCompleted]: isPrevCompleted && isActive,
                                })}
                            />
                        </Root>
                    )
                    // ))
                }

                <BulletSlot>{bulletContent}</BulletSlot>

                <StepItemDivider
                    className={cls({
                        [classes.verticalOrientation]: isVertical,
                        [classes.transparentDivider]: !hasLine || isLast,
                        [classes.inactive]: isInactive || isNextInactive,
                        [classes.nextActive]: isNextActive && !isInactive,
                    })}
                />
            </BulletIndicatorWrapper>

            {!isSimple && (
                <StepItemContentWrapper
                    className={cls({
                        [classes.verticalOrientation]: isVertical,
                        [classes.centered]: isCentered,
                        [classes.active]: isActive,
                        [classes.hasIndicator]: hasIndicator,
                    })}
                >
                    <StepItemTitle {...interactiveHandlers}>{title}</StepItemTitle>

                    {content && (
                        <StepItemContent>
                            {typeof content === 'function' ? content(status, index, items) : content}
                        </StepItemContent>
                    )}
                </StepItemContentWrapper>
            )}
        </Root>
    );
};

export const stepItemConfig = {
    name: 'StepItem',
    tag: 'div',
    layout: stepItemRoot,
    base,
    variations: {
        view: viewCSS,
    },
    defaults: {
        view: 'default',
    },
};
