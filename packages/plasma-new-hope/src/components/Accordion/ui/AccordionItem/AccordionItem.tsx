import React, { useState, useRef, forwardRef, useEffect } from 'react';

import { convertRoundnessMatrix } from '../../../../utils/roundness';
import { classes, privateTokens, tokens } from '../../Accordion.tokens';
import { cx } from '../../../../utils';

import {
    StyledAccordionItem,
    StyledAccordionHeader,
    StyledAccordionBody,
    StyledAccordionTitle,
    StyledAccordionContentLeft,
    StyledAccordionHeaderLeft,
    StyledAccordionContentRight,
    StyledArrow,
    StyledChevron,
    StyledMinus,
    StyledPlus,
    StyledAccordionBodyAnimate,
} from './AccordionItem.styles';
import type { AccordionItemProps } from './AccordionItem.types';

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
    (
        {
            value,
            contentRight,
            contentLeft,
            defaultIconContent,
            defaultIconPlacement,
            title,
            pin = 'square-square',
            children,
            type,
            index,
            className,
            style,
            eventKey,
            disabled,
            alignWithTitle = true,
            opened,
            view,
            onChange,
            onClick,
            titleProps,
            bodyProps,
            ...rest
        },
        outerRef,
    ) => {
        const key = eventKey ?? index ?? 0;

        const resolvedDefaultIconContent = defaultIconContent ?? type ?? 'sign';
        const resolvedDefaultIconPlacement =
            defaultIconPlacement ?? (defaultIconContent === undefined && type === 'arrow' ? 'left' : 'right');
        const openedState = opened ?? value;

        const [leftPadding, setLeftPadding] = useState<string | number | null>();

        const handleOpen = () => {
            if (disabled) {
                return;
            }
            if (onChange) {
                onChange(key, !value);
            }
            if (onClick) {
                onClick(key, !value);
            }
        };

        const leftContentRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const leftContentWidth = leftContentRef?.current?.offsetWidth ?? 0;
            const leftPaddingBody =
                leftContentWidth && (alignWithTitle || view === 'clear')
                    ? `calc(${leftContentWidth}px + var(${tokens.accordionItemGap}))`
                    : 0;
            setLeftPadding(leftPaddingBody);
        }, [alignWithTitle, contentLeft, defaultIconContent, defaultIconPlacement, type, value, view]);

        const openedBodyClass = openedState ? classes.accordionItemShowBody : undefined;

        const StyledAnimationPlus = () => (
            <StyledPlus>
                <StyledMinus size="xs" color="inherit" sizeCustomProperty={tokens.accordionItemIconSize} />
                <StyledMinus
                    size="xs"
                    color="inherit"
                    className={openedBodyClass ?? classes.accordionPlusAnimationElement}
                    sizeCustomProperty={tokens.accordionItemIconSize}
                />
            </StyledPlus>
        );

        const accordionBorderRadius = convertRoundnessMatrix(
            pin,
            `var(${tokens.accordionItemViewBorderRadius}, var(${tokens.accordionItemBorderRadius}))`,
            '1.5rem',
        );
        const openedClass = openedState ? classes.accordionItemOpened : '';
        const disabledClass = disabled ? classes.accordionDisabled : '';

        const getDefaultIcon = () => {
            switch (resolvedDefaultIconContent) {
                case 'arrow':
                    return <StyledArrow size="xs" color="inherit" sizeCustomProperty={tokens.accordionItemIconSize} />;
                case 'chevron':
                    return (
                        <StyledChevron size="xs" color="inherit" sizeCustomProperty={tokens.accordionItemIconSize} />
                    );
                case 'sign':
                    return <StyledAnimationPlus />;
                default:
                    return undefined;
            }
        };

        const defaultIcon = getDefaultIcon();
        let defaultIconAnimationClass: string | undefined;

        if (resolvedDefaultIconContent === 'sign') {
            defaultIconAnimationClass = classes.accordionSignAnimation;
        } else if (resolvedDefaultIconContent === 'arrow' || resolvedDefaultIconContent === 'chevron') {
            defaultIconAnimationClass = classes.accordionArrowAnimation;
        }

        const defaultLeftContent = resolvedDefaultIconPlacement === 'left' ? defaultIcon : undefined;
        const defaultRightContent = resolvedDefaultIconPlacement === 'right' ? defaultIcon : undefined;

        const leftContent = contentLeft !== undefined ? contentLeft : defaultLeftContent;
        const leftContentClassName =
            contentLeft === undefined ? cx(defaultIconAnimationClass, openedBodyClass) : undefined;
        const rightContentClassName = cx(defaultIconAnimationClass, openedBodyClass);
        let renderedRightContent = contentRight;

        if (contentRight === undefined && defaultRightContent) {
            renderedRightContent = (
                <StyledAccordionContentRight className={rightContentClassName}>
                    {defaultRightContent}
                </StyledAccordionContentRight>
            );
        }

        return (
            <StyledAccordionItem
                className={cx(classes.accordionItem, className, openedClass, disabledClass)}
                key={key}
                ref={outerRef}
                style={{ borderRadius: accordionBorderRadius, ...style }}
                {...rest}
            >
                <StyledAccordionHeader
                    role="tab"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleOpen();
                        }
                    }}
                    tabIndex={0}
                    onClick={handleOpen}
                    aria-expanded={openedState}
                    aria-controls={`accordion-item-section${key}`}
                    id={`accordion-item-${key}`}
                    style={{
                        [privateTokens.calculatedBorderRadius]: accordionBorderRadius,
                    }}
                >
                    <StyledAccordionHeaderLeft>
                        {leftContent && (
                            <StyledAccordionContentLeft ref={leftContentRef} className={leftContentClassName}>
                                {leftContent}
                            </StyledAccordionContentLeft>
                        )}
                        <StyledAccordionTitle {...titleProps}>{title}</StyledAccordionTitle>
                    </StyledAccordionHeaderLeft>

                    {renderedRightContent}
                </StyledAccordionHeader>
                <StyledAccordionBodyAnimate
                    aria-labelledby={`accordion-item-${key}`}
                    aria-hidden={!openedState}
                    id={`accordion-item-section${key}`}
                    className={cx(openedBodyClass)}
                    style={{ paddingLeft: `${leftPadding}` }}
                    {...bodyProps}
                >
                    <StyledAccordionBody className={classes.accordionItemBody}>{children}</StyledAccordionBody>
                </StyledAccordionBodyAnimate>
            </StyledAccordionItem>
        );
    },
);
