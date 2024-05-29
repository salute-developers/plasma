import React, { HTMLAttributes, useState, KeyboardEvent, useRef, useEffect } from 'react';

import { convertRoundnessMatrix } from '../../../../utils/roundness';
import { classes, tokens } from '../../Accordion.tokens';

import {
    StyledAccordionItem,
    StyledAccordionHeader,
    StyledAccordionBody,
    StyledAccordionTitle,
    StyledAccordionContentLeft,
    StyledAccordionHeaderLeft,
    StyledAccordionContentRight,
    StyledArrow,
    StyledClose,
    StyledAccordionBodyAnimate,
} from './AccordionItem.styles';
import type { AccordionItemProps } from './AccordionItem.types';

export const AccordionItem: React.FC<HTMLAttributes<HTMLDivElement> & AccordionItemProps> = ({
    value,
    contentRight,
    contentLeft,
    title,
    pin = 'square-square',
    body,
    type = 'sign',
    onChangeValue,
}) => {
    const [show, setShow] = useState(value);
    const [leftPadding, setLeftPadding] = useState<string | number | null>();

    const accordionBorderRadius = convertRoundnessMatrix(pin, `var(${tokens.accordionItemBorderRadius})`);

    const leftContent = contentLeft ?? (type === 'arrow' ? <StyledArrow size="s" color="inhert" /> : undefined);
    const leftContentRotate = type === 'arrow' && show ? classes.accordionItemShowBody : undefined;

    const rightContent = contentRight ?? (type === 'sign' ? <StyledClose size="xs" color="inhert" /> : undefined);
    const rightContentRotate = type === 'sign' && show ? classes.accordionItemShowBody : undefined;

    const showedBody = show ? classes.accordionItemShowBody : undefined;

    const showHandler = () => {
        setShow(!show);
        onChangeValue && onChangeValue(!show);
    };

    const onKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
        event.persist();
        if (event.keyCode === 13) {
            showHandler();
        }
    };

    const leftContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const leftContentWidth = leftContentRef?.current?.offsetWidth ?? 0;
        const leftPaddingBody = leftContentWidth ? `calc(${leftContentWidth}px + var(${tokens.accordionItemGap}))` : 0;
        setLeftPadding(leftPaddingBody);
    }, [type, leftContentRef, setLeftPadding]);

    return (
        <StyledAccordionItem
            role="tab"
            tabIndex={0}
            style={{ borderRadius: accordionBorderRadius }}
            onKeyDown={onKeyPress}
        >
            <StyledAccordionHeader onClick={showHandler}>
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
            <StyledAccordionBodyAnimate className={showedBody} style={{ paddingLeft: `${leftPadding}` }}>
                <StyledAccordionBody>{body}</StyledAccordionBody>
            </StyledAccordionBodyAnimate>
        </StyledAccordionItem>
    );
};
