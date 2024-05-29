import styled from 'styled-components';

import { IconChevronDown, IconClose } from '../../../_Icon';
import { classes, tokens } from '../../Accordion.tokens';
import { addFocus } from '../../../../mixins';

export const StyledAccordionItem = styled.div`
    background: var(${tokens.accordionItemBackground});

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

export const StyledAccordionHeader = styled.div`
    padding-top: var(${tokens.accordionItemPaddingTop});
    padding-right: var(${tokens.accordionItemPaddingRight});
    padding-bottom: var(${tokens.accordionItemPaddingBottom});
    padding-left: var(${tokens.accordionItemPaddingLeft});
    display: flex;
    gap: var(${tokens.accordionItemGap});
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const StyledAccordionHeaderLeft = styled.div`
    display: flex;
    gap: var(${tokens.accordionItemGap});
    justify-content: space-between;
    align-items: center;
`;

export const StyledAccordionContentRight = styled.div`
    transition: 0.2s;

    &&.${classes.accordionItemShowBody} {
        transition: 0.2s;
        transform: rotate(45deg);
    }
`;

export const StyledAccordionContentLeft = styled.div`
    transition: 0.2s;
    display: flex;
    align-items: center;

    &&.${classes.accordionItemShowBody} {
        transition: 0.2s;
        transform: rotate(180deg);
    }
`;

export const StyledAccordionTitle = styled.div`
    color: var(${tokens.accordionItemTitleColor});
    font-family: var(${tokens.accordionItemTitleFontWeight});
    font-size: var(${tokens.accordionItemTitleFontSize});
    font-weight: var(${tokens.accordionItemTitleFontWeight});
    font-style: var(${tokens.accordionItemTitleFontStyle});
    letter-spacing: var(${tokens.accordionItemTitleLetterSpacing});
    line-height: var(${tokens.accordionItemTitleLineHeight});
`;

export const StyledAccordionBodyAnimate = styled.div`
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.2s ease-out;
    overflow: hidden;

    &&.${classes.accordionItemShowBody} {
        grid-template-rows: 1fr;
        padding-bottom: var(${tokens.accordionItemPaddingBottom});
    }
`;

export const StyledAccordionBody = styled.div`
    color: var(${tokens.accordionItemTextColor});
    font-family: var(${tokens.accordionItemTextFontWeight});
    font-size: var(${tokens.accordionItemTextFontSize});
    font-weight: var(${tokens.accordionItemTextFontWeight});
    font-style: var(${tokens.accordionItemTextFontStyle});
    letter-spacing: var(${tokens.accordionItemTextLetterSpacing});
    line-height: var(${tokens.accordionItemTextLineHeight});
    overflow: hidden;
    padding-right: var(${tokens.accordionItemPaddingRight});
    padding-left: var(${tokens.accordionItemPaddingLeft});
`;

export const StyledArrow = styled(IconChevronDown)`
    pointer-events: none;
    user-select: none;
    color: var(${tokens.accordionItemTextColor});
`;

export const StyledClose = styled(IconClose)`
    pointer-events: none;
    user-select: none;
    color: var(${tokens.accordionItemTextColor});
    transform: rotate(45deg);
    display: flex;
    align-items: center;
`;
