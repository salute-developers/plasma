import styled from 'styled-components';

export const TokensWrapper = styled.div`
    margin-top: 1.5rem;
    margin-left: 3rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const TokensTitle = styled.h2`
    margin: 0;
    font-family: var(--plasma-typo-h2-font-family);
    font-size: var(--plasma-typo-h2-font-size);
    font-style: var(--plasma-typo-h2-font-style);
    font-weight: var(--plasma-typo-h2-font-weight);
    letter-spacing: var(--plasma-typo-h2-letter-spacing);
    line-height: var(--plasma-typo-h2-line-height);
`;

export const TokensDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const TokenInfo = styled.p`
    margin: 0;
    font-family: var(--plasma-typo-body-m-font-family);
    font-size: var(--plasma-typo-body-m-font-size);
    font-style: var(--plasma-typo-body-m-font-style);
    font-weight: var(--plasma-typo-body-m-font-weight);
    letter-spacing: var(--plasma-typo-body-m-letter-spacing);
    line-height: var(--plasma-typo-body-m-line-height);
    cursor: copy;

    color: var(--text-paragraph);

    &.value {
        text-align: end;
    }

    &:hover {
        color: var(--text-paragraph-hover);
    }

    &:active {
        color: var(--text-paragraph-active);
    }
`;

export const TokenData = styled.div`
    display: grid;
    grid-template-columns: 16.75rem 3.813rem;
    column-gap: 1.5rem;
    row-gap: 0.75rem;
`;

export const TokenDataHeader = styled(TokenData)`
    ${TokenInfo} {
        color: var(--text-secondary);
        cursor: default;
        pointer-events: none;

        &:hover {
            color: var(--text-secondary);
        }

        &:active {
            color: var(--text-secondary);
        }
    }
`;
