import React, { forwardRef } from 'react';
import { RootProps } from 'src/engines';
import { IconClose } from 'src/components/_Icon';
import cls from 'classnames';

import type { TourCardProps } from './Card.types';
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
} from './Card.styles';
import { classes } from './Card.tokens';

export const tourCardRoot = (Root: RootProps<HTMLDivElement, TourCardProps>) =>
    forwardRef<HTMLDivElement, TourCardProps>(
        (
            {
                view,
                size,
                image,
                title,
                description,
                orientation = 'horizontal',
                showPagination = true,
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

            const dotOnClick = (index: number) => {
                if (goToStep) {
                    goToStep(index);
                }
            };

            return (
                <Root ref={outerRef} view={view} size={size} {...rest}>
                    <TourCard className={cls(className, classes.card)} style={style} orientation={orientation}>
                        {showClose && (
                            <CloseButton onClick={onClose}>
                                <IconClose size="xs" color="inherit" />
                            </CloseButton>
                        )}

                        {image && <Img {...image} orientation={orientation} />}

                        <CardBody orientation={orientation}>
                            <CardText onlyText={onlyText}>
                                <Title className={classes.title}>{title}</Title>

                                <Description className={classes.description}>{description}</Description>
                            </CardText>

                            <Controls orientation={orientation}>
                                {showPagination && (
                                    <DotsContainer orientation={orientation} className={classes.pagination}>
                                        {Array(stepLength)
                                            .fill(null)
                                            .map((_, index) => (
                                                <Dot
                                                    key={index}
                                                    isActive={stepCurrent === index}
                                                    onClick={() => dotOnClick(index)}
                                                />
                                            ))}
                                    </DotsContainer>
                                )}

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
