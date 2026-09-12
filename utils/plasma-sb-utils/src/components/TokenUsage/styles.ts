import styled from 'styled-components';

export const Layout = styled.div`
    box-sizing: border-box;

    display: grid;
    grid-template-columns: minmax(0, 17rem) minmax(0, 1fr);
    gap: 2rem;

    width: 100%;
    max-width: 100%;
    height: calc(100vh - 5rem);
    padding-top: 1rem;

    overflow: hidden;
`;

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    min-width: 0;
    min-height: 0;
`;

export const SidebarHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
`;

export const Hint = styled.div`
    color: var(--text-tertiary);
    font-family: var(--plasma-typo-body-xxs-font-family);
    font-size: var(--plasma-typo-body-xxs-font-size);
    line-height: var(--plasma-typo-body-xxs-line-height);
`;

export const TokenList = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 0;

    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;

    margin: 0 -0.5rem;
    padding: 0 0.5rem 1rem;
`;

export const TokenListItem = styled.button<{ $isSelected?: boolean; $isUnused?: boolean }>`
    display: grid;
    grid-template-columns: 0.875rem minmax(0, 1fr) auto;
    align-items: center;
    gap: 0.5rem;

    padding: 0.3125rem 0.5rem;

    color: ${({ $isUnused }) => ($isUnused ? 'var(--text-tertiary)' : 'var(--text-primary)')};
    background: ${({ $isSelected }) => ($isSelected ? 'var(--surface-transparent-secondary)' : 'transparent')};
    border: none;
    border-radius: var(--border-radius-xxs);
    box-shadow: ${({ $isSelected }) => ($isSelected ? 'inset 0.125rem 0 0 var(--surface-accent)' : 'none')};

    font-family: var(--plasma-typo-body-xs-font-family);
    font-size: var(--plasma-typo-body-xs-font-size);
    line-height: var(--plasma-typo-body-xs-line-height);
    text-align: left;
    cursor: pointer;

    &:hover {
        background: var(--surface-transparent-secondary);
    }

    mark {
        color: inherit;
        background: transparent;
        font-weight: var(--plasma-typo-body-xs-bold-font-weight);
    }
`;

export const TokenListName = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const TokenListCount = styled.span<{ $isSelected?: boolean }>`
    color: ${({ $isSelected }) => ($isSelected ? 'var(--text-secondary)' : 'var(--text-tertiary)')};
    font-size: 0.6875rem;
    font-variant-numeric: tabular-nums;
`;

export const ColorCircle = styled.div<{ $background?: string; $size?: string }>`
    box-sizing: border-box;
    flex-shrink: 0;

    width: ${({ $size }) => $size || '0.875rem'};
    height: ${({ $size }) => $size || '0.875rem'};

    background: ${({ $background }) => $background || 'transparent'};
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px var(--outline-solid-primary);
`;

export const ShadowBox = styled.div<{ $boxShadow?: string; $size?: string }>`
    box-sizing: border-box;
    flex-shrink: 0;

    width: ${({ $size }) => $size || '0.875rem'};
    height: ${({ $size }) => $size || '0.875rem'};

    background: var(--surface-solid-card);
    border-radius: var(--border-radius-xxs);
    box-shadow: ${({ $boxShadow }) => $boxShadow || 'none'};
`;

export const TokenGlyph = styled.div<{ $size?: string }>`
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-shrink: 0;

    min-width: ${({ $size }) => $size || '0.875rem'};

    color: var(--text-tertiary);
    font-size: ${({ $size }) => $size || '0.625rem'};
    line-height: 1;
    white-space: nowrap;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;

    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;

    padding-right: 0.5rem;
`;

export const DetailsHeader = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;

    padding: 0.5rem 0 0.75rem;
    margin: -0.5rem 0 0.25rem;

    background: var(--surface-solid-primary);
    border-bottom: 1px solid var(--outline-solid-secondary);
`;

export const DetailsTitle = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.375rem;
    flex-wrap: wrap;
    min-width: 0;
`;

export const TokenName = styled.span`
    font-family: var(--plasma-typo-body-l-font-family);
    font-size: var(--plasma-typo-body-l-font-size);
    font-weight: var(--plasma-typo-body-l-bold-font-weight);
    line-height: var(--plasma-typo-body-l-line-height);

    cursor: pointer;
`;

export const TokenValue = styled.span`
    color: var(--text-secondary);

    font-family: 'SB Sans Mono', monospace;
    font-size: 0.75rem;

    cursor: pointer;
`;

export const MetaInfo = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    flex-wrap: wrap;

    color: var(--text-tertiary);
    font-family: var(--plasma-typo-body-xs-font-family);
    font-size: var(--plasma-typo-body-xs-font-size);
    line-height: var(--plasma-typo-body-xs-line-height);
`;

export const TypographyPreview = styled.div`
    overflow: hidden;

    min-width: 0;
    max-width: 100%;
    padding: 0.25rem 0;

    color: var(--text-primary);
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ComponentTitle = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    min-width: 0;
`;

export const ComponentCount = styled.span`
    color: var(--text-tertiary);
    font-size: 0.6875rem;
    font-variant-numeric: tabular-nums;
    font-weight: var(--plasma-typo-body-xs-font-weight);
`;

export const UsageGroup = styled.div`
    display: grid;
    grid-template-columns: 10rem minmax(0, 1fr);
    align-items: baseline;
    gap: 0.5rem;

    padding: 0.1875rem 0;
`;

export const VariationName = styled.div`
    overflow: hidden;

    color: var(--text-secondary);
    white-space: nowrap;
    text-overflow: ellipsis;

    font-family: var(--plasma-typo-body-xs-font-family);
    font-size: var(--plasma-typo-body-xs-font-size);
    line-height: 1.5rem;
`;

export const PropertyList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
`;

export const PropertyRow = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    flex-wrap: wrap;

    max-width: 100%;
    padding: 0 0.25rem;
    margin-left: -0.25rem;

    border-radius: var(--border-radius-xxs);

    min-width: 0;

    font-family: 'SB Sans Mono', monospace;
    font-size: 0.75rem;
    line-height: 1.5rem;
    word-break: break-all;
    cursor: pointer;

    &:hover {
        background: var(--surface-transparent-secondary);
    }
`;

export const PropertyName = styled.span`
    color: var(--text-primary);
`;

export const Via = styled.span`
    color: var(--text-tertiary);

    font-family: var(--plasma-typo-body-xxs-font-family);
    font-size: var(--plasma-typo-body-xxs-font-size);
`;

export const EmptyDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;

    height: 100%;
    padding-bottom: 6rem;

    color: var(--text-secondary);
    text-align: center;
`;

export const createStyledAccordion = (Accordion: any) => styled(Accordion)`
    --plasma-accordion-item-padding-vertical: 0.5rem;
    --plasma-accordion-item-padding-horizontal: 0;
    --plasma-accordion-item-padding-horizontal-left: 0;
    --plasma-accordion-item-body-padding-bottom: 0.75rem;
    --plasma-accordion-item-title-font-size: var(--plasma-typo-body-s-font-size);
    --plasma-accordion-item-title-font-weight: var(--plasma-typo-body-s-bold-font-weight);
    --plasma-accordion-item-title-line-height: var(--plasma-typo-body-s-line-height);
    --plasma-accordion-item-icon-size: 0.75rem;
`;
