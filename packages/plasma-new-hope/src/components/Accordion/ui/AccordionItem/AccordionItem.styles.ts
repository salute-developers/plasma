import styled from 'styled-components';

import { IconChevronDownFill, IconMinus } from '../../../_Icon';
import { classes, tokens } from '../../Accordion.tokens';
import { addFocus } from '../../../../mixins';

export const StyledAccordionItem = styled.div`
    background: var(${tokens.accordionItemBackground});
    border: var(${tokens.accordionItemBorder});
    border-bottom: var(${tokens.accordionItemBorderBottom});

    &:last-child {
        border-bottom: var(${tokens.accordionItemBorder});
    }

    &.${classes.accordionDisabled} {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

export const StyledAccordionHeader = styled.button`
    width: 100%;
    border: none;
    padding: var(${tokens.accordionItemPadding});
    display: flex;
    gap: var(${tokens.accordionItemGap});
    justify-content: space-between;
    align-items: center;
    background: none;
    box-sizing: border-box;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    ${addFocus({
        outlineOffset: '0.125rem',
        outlineSize: '0.125rem',
        outlineRadius: '0',
        outlineColor: `var(${tokens.accordionItemFocus})`,
    })}
`;

export const StyledAccordionHeaderLeft = styled.div`
    display: flex;
    gap: var(${tokens.accordionItemGap});
    justify-content: space-between;
    align-items: center;
`;

export const StyledAccordionContentRight = styled.div`
    transition: 0.2s;
    transform: rotate(90deg);

    &.${classes.accordionItemShowBody} {
        transition: 0.2s;
        transform: rotate(0deg);
    }
`;

export const StyledAccordionContentLeft = styled.div`
    transition: 0.2s;
    display: flex;
    align-items: center;

    &.${classes.accordionItemShowBody} {
        transition: 0.2s;
        transform: rotate(180deg);
    }
`;

export const StyledAccordionTitle = styled.div`
    color: var(${tokens.accordionItemTitleColor});
    font-family: var(${tokens.accordionItemTitleFontFamily});
    font-size: var(${tokens.accordionItemTitleFontSize});
    font-weight: var(${tokens.accordionItemTitleFontWeight});
    font-style: var(${tokens.accordionItemTitleFontStyle});
    letter-spacing: var(${tokens.accordionItemTitleLetterSpacing});
    line-height: var(${tokens.accordionItemTitleLineHeight});
    text-align: left;
`;

export const StyledAccordionBodyAnimate = styled.div`
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.2s ease-out;
    overflow: hidden;

    &.${classes.accordionItemShowBody} {
        grid-template-rows: 1fr;
        padding-bottom: var(${tokens.accordionItemPaddingVertical});

        &.${classes.accordionPlusAnimationElement} {
            transition: 0.2s;
            transform: rotate(0deg);
        }
    }
`;

export const StyledAccordionBody = styled.div`
    color: var(${tokens.accordionItemTextColor});
    font-family: var(${tokens.accordionItemTextFontFamily});
    font-size: var(${tokens.accordionItemTextFontSize});
    font-weight: var(${tokens.accordionItemTextFontWeight});
    font-style: var(${tokens.accordionItemTextFontStyle});
    letter-spacing: var(${tokens.accordionItemTextLetterSpacing});
    line-height: var(${tokens.accordionItemTextLineHeight});
    overflow: hidden;
    padding-right: var(${tokens.accordionItemPaddingHorizontal});
    padding-left: var(${tokens.accordionItemPaddingHorizontalLeft});
    text-align: left;
`;

export const StyledArrow = styled(IconChevronDownFill)`
    pointer-events: none;
    user-select: none;
    color: var(${tokens.accordionItemIconColor});
`;

export const StyledMinus = styled(IconMinus)`
    pointer-events: none;
    user-select: none;
    color: var(${tokens.accordionItemIconColor});
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    &.${classes.accordionPlusAnimationElement} {
        transition: 0.2s;
        transform: rotate(90deg);
    }

    &.${classes.accordionItemShowBody} {
        transition: 0.2s;
        transform: rotate(0deg);
    }
`;

export const StyledPlus = styled.div`
    position: relative;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
`;
