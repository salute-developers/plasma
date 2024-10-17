import React, { useState, useRef, forwardRef, useEffect } from 'react';

import { convertRoundnessMatrix } from '../../../../utils/roundness';
import { classes, tokens } from '../../Accordion.tokens';
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
            title,
            pin = 'square-square',
            children,
            type = 'sign',
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
        },
        outerRef,
    ) => {
        const key = eventKey ?? index ?? 0;

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
        }, [value, type, leftContentRef, setLeftPadding]);

        const openedBodyClass = opened ?? value ? classes.accordionItemShowBody : undefined;

        const StyledAnimationPlus = () => (
            <StyledPlus>
                <StyledMinus size="xs" color="inherit" />
                <StyledMinus
                    size="xs"
                    color="inhert"
                    className={openedBodyClass ?? classes.accordionPlusAnimationElement}
                />
            </StyledPlus>
        );

        const accordionBorderRadius = convertRoundnessMatrix(pin, `var(${tokens.accordionItemBorderRadius})`, '1.5rem');
        const disabledClass = disabled ? classes.accordionDisabled : '';

        const leftContent = contentLeft ?? (type === 'arrow' ? <StyledArrow size="xs" color="inherit" /> : undefined);
        const leftContentRotate = type === 'arrow' && (opened ?? value) ? classes.accordionItemShowBody : undefined;

        const rightContent = contentRight ?? (type === 'sign' ? <StyledAnimationPlus /> : undefined);
        const rightContentRotate = type === 'sign' && (opened ?? value) ? classes.accordionItemShowBody : undefined;

        return (
            <StyledAccordionItem
                className={cx(classes.accordionItem, className, disabledClass)}
                key={key}
                ref={outerRef}
                style={{ borderRadius: accordionBorderRadius, ...style }}
            >
                <StyledAccordionHeader
                    role="tab"
                    tabIndex={0}
                    onClick={handleOpen}
                    aria-expanded={opened ?? value}
                    aria-controls={`accordion-item-section${key}`}
                    id={`accordion-item-${key}`}
                >
                    <StyledAccordionHeaderLeft>
                        {leftContent && (
                            <StyledAccordionContentLeft ref={leftContentRef} className={leftContentRotate}>
                                {leftContent}
                            </StyledAccordionContentLeft>
                        )}
                        <StyledAccordionTitle>{title}</StyledAccordionTitle>
                    </StyledAccordionHeaderLeft>

                    {contentRight || (
                        <StyledAccordionContentRight className={rightContentRotate}>
                            {rightContent && rightContent}
                        </StyledAccordionContentRight>
                    )}
                </StyledAccordionHeader>
                <StyledAccordionBodyAnimate
                    aria-labelledby={`accordion-item-${key}`}
                    aria-hidden={!(opened ?? value)}
                    id={`accordion-item-section${key}`}
                    className={cx(openedBodyClass)}
                    style={{ paddingLeft: `${leftPadding}` }}
                >
                    <StyledAccordionBody className={classes.accordionItemBody}>{children}</StyledAccordionBody>
                </StyledAccordionBodyAnimate>
            </StyledAccordionItem>
        );
    },
);
