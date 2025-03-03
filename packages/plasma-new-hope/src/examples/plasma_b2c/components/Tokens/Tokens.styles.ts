import { styled } from '@linaria/react';

import { AccordionItem } from '../Accordion/Accordion';
import { SegmentItem } from '../Segment/Segment';
import { segmentTokens } from '../../../../components/Segment';
import { bodyXS } from '../../../../mixins';

export const ColorTokensWrapper = styled.div`
    width: max-content;
`;

export const SubthemeSwitcher = styled.div`
    margin: -0.5rem auto 2.5rem 15.75rem;
    width: fit-content;
`;

export const SubtemeTitle = styled.p`
    display: inline;
    margin-right: 0.75rem;
    color: var(--text-tertiary);

    ${bodyXS};
`;

export const StyledSegmentItem = styled(SegmentItem)`
    ${segmentTokens.itemHeight}: 1.75rem;
    ${segmentTokens.itemPilledPadding}: 0.375rem 0.5rem;
`;

export const AccordionInfo = styled.div`
    display: grid;
    grid-template-columns: 16.75rem 7.938rem 2.375rem 3.813rem 6.25rem;
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

    &.no-interaction {
        text-align: right;
    }

    &:not(.no-interaction):hover {
        color: var(--text-paragraph-hover);

        ${OpacityPart} {
            color: var(--text-paragraph-hover);
        }
    }

    &:not(.no-interaction):active {
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

    background: ${(props) => props.background || 'transparent'};
    box-shadow: ${(props) => (props.disableShadow ? 'none' : 'inset 0px 0px 0px 1px rgba(8, 8, 8, 0.12)')};
`;
