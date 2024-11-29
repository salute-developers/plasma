import styled from 'styled-components';

import { H2 } from '../Typography';
import { AccordionItem } from '../Accordion';

export const CategoryContainer = styled.div`
    margin-bottom: 1.875rem;
`;

export const Category = styled(H2)`
    margin: 0 0 1.125rem 1.5rem;
`;

export const AccordionInfo = styled.div`
    display: grid;
    grid-template-columns: 18rem 7.938rem 3.813rem;
    grid-column-gap: 1.5rem;

    font-family: var(--plasma-typo-body-m-font-family);
    font-size: var(--plasma-typo-body-m-font-size);
    font-style: var(--plasma-typo-body-m-font-style);
    font-weight: var(--plasma-typo-body-m-font-weight);
    letter-spacing: var(--plasma-typo-body-m-letter-spacing);
    line-height: var(--plasma-typo-body-m-line-height);
`;

export const Subcategory = styled.div`
    color: var(--text-secondary);
`;

export const ColumnTitle = styled.div`
    color: var(--text-tertiary);
    transition: opacity 0.2s;

    &.color {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const StyledAccordionItem = styled(AccordionItem)`
    --plasma-accordion-item-padding: 0;
    --plasma-accordion-item-padding-vertical: 0;

    border-bottom: unset;
    width: max-content;

    div > div > div > svg {
        color: var(--text-secondary);
    }

    .accordion-item-body {
        margin-bottom: 1.125rem;
        padding-top: 0.125rem;
        transition: margin-bottom 0.2s, padding-top 0.2s;
    }

    [aria-expanded] {
        margin-bottom: 1rem;
    }

    [aria-expanded='false'] {
        ${AccordionInfo} ${ColumnTitle} {
            opacity: 0;
        }
    }

    [aria-expanded='false'] + div > .accordion-item-body {
        margin: 0;
        padding: 0;
    }
`;

export const TokenInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: -0.125rem;
`;

export const OpacityPart = styled.span`
    color: var(--text-secondary);
    padding-left: 0.125rem;
`;

export const TokenInfo = styled.div`
    color: var(--text-paragraph);

    cursor: default;

    &.copy {
        cursor: copy;
    }

    &.color {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    &.opacity {
        text-align: right;
    }

    &:not(.opacity):hover {
        color: var(--text-paragraph-hover);

        ${OpacityPart} {
            color: var(--text-paragraph-hover);
        }
    }

    &:not(.opacity):active {
        color: var(--text-paragraph-active);

        ${OpacityPart} {
            color: var(--text-secondary-active);
        }
    }
`;

export const ColorCircle = styled.div<{ background?: string; disableShadow?: boolean }>`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    background: ${(props) => props.background};
    box-shadow: ${(props) => (props.disableShadow ? 'none' : 'inset 0px 0px 0px 1px rgba(8, 8, 8, 0.12)')};
`;
