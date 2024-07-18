import React, { useState, useRef, useEffect } from 'react';

import { convertRoundnessMatrix } from '../../../../utils/roundness';
import { classes, tokens } from '../../Accordion.tokens';
import { HTMLAttributesWithoutOnChange } from '../../../../engines/types';
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

export const AccordionItem: React.FC<HTMLAttributesWithoutOnChange<HTMLElement> & AccordionItemProps> = ({
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
    view,
    onChange,
}) => {
    const key = eventKey ?? index ?? 0;

    const [leftPadding, setLeftPadding] = useState<string | number | null>();

    const handleOpen = () => {
        if (disabled) {
            return;
        }
        if (onChange) {
            onChange(key, !value);
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

    const openedBodyClass = value ? classes.accordionItemShowBody : undefined;

    const StyledAnimationPLus = () => (
        <StyledPlus>
            <StyledMinus size="xs" color="inhert" />
            <StyledMinus
                size="xs"
                color="inhert"
                className={openedBodyClass ?? classes.accordionPlusAnimationElement}
            />
        </StyledPlus>
    );

    const accordionBorderRadius = convertRoundnessMatrix(pin, `var(${tokens.accordionItemBorderRadius})`, '1.5rem');
    const disabledClass = disabled ? classes.accordionDisabled : '';

    const leftContent = contentLeft ?? (type === 'arrow' ? <StyledArrow size="xs" color="inhert" /> : undefined);
    const leftContentRotate = type === 'arrow' && value ? classes.accordionItemShowBody : undefined;

    const rightContent = contentRight ?? (type === 'sign' ? <StyledAnimationPLus /> : undefined);
    const rightContentRotate = type === 'sign' && value ? classes.accordionItemShowBody : undefined;

    return (
        <StyledAccordionItem
            className={cx(classes.accordionItem, className, disabledClass)}
            key={key}
            style={{ borderRadius: accordionBorderRadius, ...style }}
        >
            <StyledAccordionHeader
                role="tab"
                tabIndex={0}
                onClick={handleOpen}
                aria-expanded={value}
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

                <StyledAccordionContentRight className={rightContentRotate}>
                    {rightContent && rightContent}
                </StyledAccordionContentRight>
            </StyledAccordionHeader>
            <StyledAccordionBodyAnimate
                aria-labelledby={`accordion-item-${key}`}
                aria-hidden={!value}
                id={`accordion-item-section${key}`}
                className={cx(openedBodyClass)}
                style={{ paddingLeft: `${leftPadding}` }}
            >
                <StyledAccordionBody className={classes.accordionItemBody}>{children}</StyledAccordionBody>
            </StyledAccordionBodyAnimate>
        </StyledAccordionItem>
    );
};
