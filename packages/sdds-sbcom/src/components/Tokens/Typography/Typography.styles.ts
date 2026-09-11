import styled from 'styled-components';
import { segmentTokens, bodyXS, bodyM } from '@salutejs/plasma-new-hope/styled-components';

import { AccordionItem } from '../../Accordion';
import { SegmentItem } from '../../Segment/Segment';

export const TypographyTokensWrapper = styled.div`
    width: 100%;
    margin: 1.5rem auto auto 2.5rem;
`;

export const FontPropsSwitcher = styled.div`
    margin: -0.5rem 0 2.5rem;
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    box-sizing: border-box;
`;

export const FontWeightSwitcher = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const BreakpointSwitcher = styled.div`
    width: fit-content;

    position: relative;

    &:before {
        content: 'Экран';
        position: absolute;
        top: 50%;
        transform: translate(-100%, -50%);
        left: -0.75rem;
        color: var(--text-tertiary);

        ${bodyXS};
    }
`;

export const StyledSegmentItem = styled(SegmentItem)`
    ${segmentTokens.itemHeight}: 1.75rem;
    ${segmentTokens.itemPilledPadding}: 0.375rem 0.5rem;
`;

export const AccordionTypographyTitle = styled.div`
    color: var(--text-secondary);

    ${bodyM};
`;

export const FontFamily = styled.span`
    color: var(--text-tertiary);
`;

export const AccordionInfo = styled.div`
    display: grid;
    grid-template-columns: 16.75rem 35.75rem;
    grid-column-gap: 1.5rem;

    max-width: 55.5rem;
`;

export const StyledAccordionItem = styled(AccordionItem)`
    --plasma-accordion-item-padding: 0;
    --plasma-accordion-item-padding-vertical: 0;

    border-bottom: unset;

    .accordion-item-body {
        margin-bottom: 2rem;
        padding-top: 0.125rem;
        transition: margin-bottom 0.2s, padding-top 0.2s;
    }

    [aria-expanded] {
        margin-bottom: 1rem;
    }

    [aria-expanded='false'] {
        margin-bottom: 1.125rem;

        ${AccordionInfo} {
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
    gap: 2rem;
`;

export const TokenShortName = styled.div`
    cursor: copy;
    color: var(--text-paragraph);

    ${bodyM};

    &:hover {
        color: var(--text-paragraph-hover);
    }

    &:active {
        color: var(--text-paragraph-active);
    }
`;

export const TokenInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const TokenText = styled.div<{
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    letterSpacing: string;
    fontStyle: string;
    isDisplay: boolean;
}>`
    color: var(--text-primary);

    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: ${({ lineHeight }) => lineHeight};
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    font-style: ${({ fontStyle }) => fontStyle};

    white-space: ${({ isDisplay }) => (isDisplay ? 'nowrap' : 'normal')};
`;

export const TokenPropValue = styled.div`
    color: var(--text-paragraph);
`;

export const TokenPropName = styled.div`
    color: var(--text-tertiary);
`;

export const TokenPropsWrapper = styled.div`
    cursor: copy;
    width: fit-content;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    ${bodyXS};

    &:hover {
        ${TokenPropValue} {
            color: var(--text-paragraph-hover);
        }
    }

    &:active {
        ${TokenPropValue} {
            color: var(--text-paragraph-active);
        }

        ${TokenPropName} {
            color: var(--text-tertiary-active);
        }
    }
`;

export const TokenProps = styled.div`
    display: flex;
    gap: 1rem;
`;
