import React, { useState, useEffect } from 'react';
import cls from 'classnames';
import type { RootProps } from 'src/engines';

import { classes, tokens } from '../../Steps.tokens';

import {
    Bullet,
    BulletIndicator,
    BulletIndicatorWrapper,
    StepItemContent,
    StepItemContentWrapper,
    StepItemDivider,
    StepItemStyled,
    StepItemTitle,
    SpinnerStyled,
    base,
} from './StepItem.styles';
import type { RootStepItemProps, StepItemExtendedProps } from './StepItem.types';
import { base as viewCSS } from './variations/_view/base';

// todo попробовать заменить через baseline выравнивание
const indicatorSizesIndentsMap = {
    8: `var(${tokens.smallBulletIndentHeight})`,
    16: `var(${tokens.largeBulletIndentHeight})`,
    24: `var(${tokens.smallIndicatorIndentHeight})`,
    36: `var(${tokens.largeIndicatorIndentHeight})`,
} as const;

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
    rootView,
    onClick,
    items,
}: StepItemExtendedProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const isFirst = index === 0;
    const isLast = index === items.length - 1;

    const prevItem = items[index - 1];
    const nextItem = items[index + 1];

    const isActive = status === 'active';
    const isNextActive = nextItem?.status === 'active';
    const isInactive = status === 'inactive';
    const isPrevInactive = (prevItem && !prevItem?.status) || prevItem?.status === 'inactive';
    const isNextInactive = !nextItem?.status || nextItem?.status === 'inactive';

    const hasIndicator = indicator != null;

    const BulletNode = hasIndicator ? BulletIndicator : Bullet;

    const item = items[index];
    const completedItemView = item.completedItemView ?? rootView;
    const prevCompletedItemView = !isFirst ? prevItem?.completedItemView ?? rootView : completedItemView;
    const isSimple = !title && !content;
    const clickable = Boolean(onClick);
    const isVertical = orientation === 'vertical';
    const isCentered = contentAlign === 'center';
    const isDisabled = item.disabled;

    const onClickHandler = onClick && !isDisabled ? () => onClick(item, index) : undefined;

    let resultIndicatorSize: keyof typeof indicatorSizesIndentsMap;
    if (hasIndicator) {
        resultIndicatorSize = isActive ? 36 : 24;
    } else {
        resultIndicatorSize = isActive ? 16 : 8;
    }

    const indentToken = indicatorSizesIndentsMap[resultIndicatorSize];

    // todo заменить на callback с условиями внутри
    const onMouseOver =
        clickable && !isDisabled
            ? () => {
                  if (isDisabled) {
                      setIsHovered(false);
                  }

                  setIsHovered(true);
              }
            : undefined;

    const onMouseOut =
        clickable && !isDisabled
            ? () => {
                  setIsHovered(false);
              }
            : undefined;

    useEffect(() => {
        if (isDisabled) {
            setIsHovered(false);
        }
    }, [isDisabled]);

    if (isSimple) {
        return (
            <Root
                view={completedItemView}
                className={cls({
                    [classes.simple]: isSimple,
                    [classes.active]: isActive,
                    [classes.hovered]: isHovered && !isActive,
                    [classes.inactive]: isInactive,
                    [classes.centered]: isCentered,
                    [classes.disabled]: isDisabled,
                    [classes.clickable]: clickable && !isActive,
                    [classes.hasIndicator]: hasIndicator,
                    [classes.transparentDivider]: !hasLine,
                    [classes.verticalOrientation]: isVertical,
                    isFirst,
                    isLast,
                    isPrevInactive,
                    isNextInactive,
                })}
            >
                <BulletIndicatorWrapper
                    className={cls({
                        [classes.verticalOrientation]: isVertical,
                        [classes.centered]: isCentered,
                        [classes.simple]: isSimple,
                        [classes.hasIndicator]: hasIndicator,
                    })}
                    onClick={onClickHandler}
                    onFocus={onMouseOver}
                    onBlur={onMouseOut}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                >
                    {hasLoader && <SpinnerStyled hasIndicator={hasIndicator} />}

                    {!hasLoader && (
                        <BulletNode
                            className={cls({
                                [classes.active]: isActive,
                                [classes.inactive]: isInactive,
                            })}
                            disabled={isDisabled}
                        >
                            {typeof indicator === 'function' && indicator({ status, item, size })}
                            {typeof indicator !== 'function' && indicator}
                        </BulletNode>
                    )}
                </BulletIndicatorWrapper>
                {!isLast && (
                    <StepItemDivider
                        className={cls(classes.simple, {
                            [classes.verticalOrientation]: isVertical,
                            [classes.transparentDivider]: !hasLine,
                            [classes.active]: isActive,
                            [classes.inactive]: isInactive || isNextInactive,
                            [classes.nextActive]: isNextActive,
                            [classes.disabled]: isDisabled,
                        })}
                    />
                )}
            </Root>
        );
    }

    return (
        <Root
            view={completedItemView}
            className={cls({
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
                    [classes.verticalOrientation]: isVertical,
                    [classes.centered]: isCentered,
                    [classes.simple]: isSimple,
                    [classes.hasIndicator]: hasIndicator,
                })}
                onClick={onClickHandler}
                onFocus={onMouseOver}
                onBlur={onMouseOut}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            >
                {contentAlign === 'center' && !isSimple && (
                    <Root view={prevCompletedItemView} style={{ display: 'contents' }}>
                        <StepItemDivider
                            className={cls({
                                [classes.simple]: isSimple,
                                [classes.verticalOrientation]: isVertical,
                                [classes.transparentDivider]: !hasLine || isFirst,
                                [classes.inactive]: isInactive || isPrevInactive,
                                [classes.active]: isActive,
                            })}
                        />
                    </Root>
                )}

                {isVertical && (
                    <Root view={prevCompletedItemView} style={{ display: 'contents' }}>
                        <StepItemDivider
                            className={cls(classes.indentDivider, {
                                [classes.verticalOrientation]: isVertical,
                                [classes.simple]: isSimple,
                                [classes.transparentDivider]: !hasLine || isFirst,
                                [classes.inactive]: isInactive || isPrevInactive,
                                [classes.active]: isActive,
                            })}
                            indentToken={indentToken}
                        />
                    </Root>
                )}

                {hasLoader && <SpinnerStyled hasIndicator={hasIndicator} />}

                {!hasLoader && (
                    <BulletNode
                        className={cls({
                            [classes.active]: isActive,
                            [classes.inactive]: isInactive,
                        })}
                        disabled={isDisabled}
                    >
                        {typeof indicator === 'function' && indicator({ status, item, size })}
                        {typeof indicator !== 'function' && indicator}
                    </BulletNode>
                )}

                <StepItemDivider
                    className={cls({
                        [classes.simple]: isSimple,
                        [classes.verticalOrientation]: isVertical,
                        [classes.transparentDivider]: !hasLine || isLast,
                        [classes.inactive]: isInactive || isNextInactive,
                        [classes.nextActive]: isNextActive,
                    })}
                />
            </BulletIndicatorWrapper>

            <StepItemContentWrapper
                className={cls({
                    [classes.verticalOrientation]: isVertical,
                    [classes.centered]: isCentered,
                    [classes.active]: isActive,
                    [classes.hasIndicator]: hasIndicator,
                })}
            >
                <StepItemTitle
                    onClick={onClickHandler}
                    onFocus={onMouseOver}
                    onBlur={onMouseOut}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                >
                    {title}
                </StepItemTitle>

                {content && (
                    <StepItemContent>
                        {typeof content === 'function' ? content(status, index, items) : content}
                    </StepItemContent>
                )}
            </StepItemContentWrapper>
        </Root>
    );
};

export const stepItemConfig = {
    name: 'Steps',
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
