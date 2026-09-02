import React, { forwardRef, useCallback, useRef } from 'react';
import cls from 'classnames';
import { RootProps } from 'src/engines';
import { IconClose } from 'src/components/_Icon';
import { usePaginationDots } from 'src/components/PaginationDots/usePaginationDots';

import type { RootTourCardProps, TourCardProps } from './Card.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import {
    CardText,
    CloseButton,
    Description,
    Dot,
    DotsContainer,
    Title,
    TourCard,
    Img,
    Controls,
    ActionButtonsContainer,
    SkipButtonContainer,
    CardBody,
    NumberContainer,
} from './Card.styles';
import { classes, tokens } from './Card.tokens';

export const tourCardRoot = (Root: RootProps<HTMLDivElement, RootTourCardProps>) =>
    forwardRef<HTMLDivElement, TourCardProps>(
        (
            {
                view,
                size,
                image,
                title,
                description,
                orientation = 'horizontal',
                contentDirection = 'row-reverse',
                showPagination = true,
                paginationVisibleItems = 3,
                paginationType = 'dot',
                stepCurrent = 0,
                stepLength = 0,
                actionButtons,
                skipButton,
                showClose = true,
                goToStep,
                onClose,
                style,
                className,
                ...rest
            },
            outerRef,
        ) => {
            // Если показан только текст, то к нему добавляется отступ снизу для компенсации.
            const onlyText = !showPagination && !actionButtons && !skipButton;

            const paginationItems = useRef(
                Array(stepLength)
                    .fill(0)
                    .map((_, ind) => ({ id: ind + 1 })),
            );

            const { sliced, activeId } = usePaginationDots({
                items: paginationItems.current,
                index: stepCurrent,
                visibleItems: Math.min(paginationVisibleItems, stepLength),
            });

            const dotOnClick = (index: number) => {
                if (goToStep) {
                    goToStep(index);
                }
            };

            const getPaginationContent = useCallback(() => {
                const paginationContent = {
                    dot: (
                        <DotsContainer orientation={orientation} className={classes.pagination}>
                            {sliced.map(({ id }, index) => (
                                <Dot key={index} isActive={activeId === id} onClick={() => dotOnClick(index)} />
                            ))}
                        </DotsContainer>
                    ),
                    compact: (
                        <NumberContainer>
                            {activeId}/{stepLength}
                        </NumberContainer>
                    ),
                };

                if (orientation !== 'horizontal') {
                    return paginationContent.dot;
                }

                return paginationContent[paginationType];
            }, [sliced, activeId, stepLength, orientation, paginationType]);

            return (
                <Root ref={outerRef} view={view} size={size} {...rest}>
                    <TourCard
                        className={cls(className, classes.card)}
                        style={style}
                        orientation={orientation}
                        contentDirection={contentDirection}
                    >
                        {showClose && (
                            <CloseButton onClick={onClose}>
                                <IconClose
                                    sizeCustomValue={`var(${tokens.closeButtonIconSize}, 1rem)`}
                                    color="inherit"
                                />
                            </CloseButton>
                        )}

                        {image && <Img {...image} orientation={orientation} />}

                        <CardBody orientation={orientation}>
                            <CardText onlyText={onlyText}>
                                <Title className={classes.title}>{title}</Title>

                                <Description className={classes.description}>{description}</Description>
                            </CardText>

                            <Controls orientation={orientation} contentDirection={contentDirection}>
                                {showPagination && getPaginationContent()}

                                {actionButtons && (
                                    <ActionButtonsContainer orientation={orientation} className={classes.actionButtons}>
                                        {actionButtons}
                                    </ActionButtonsContainer>
                                )}

                                {skipButton && (
                                    <SkipButtonContainer orientation={orientation} className={classes.skipButton}>
                                        {skipButton}
                                    </SkipButtonContainer>
                                )}
                            </Controls>
                        </CardBody>
                    </TourCard>
                </Root>
            );
        },
    );

export const tourCardConfig = {
    name: 'Tour',
    tag: 'div',
    layout: tourCardRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 's',
    },
};
