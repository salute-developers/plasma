import styled from 'styled-components';

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: var(--grid-template-columns);
    column-gap: 8px;

    direction: ltr;

    @media (min-width: 960px) and (max-width: 1199px) {
        --grid-template-columns: repeat(24, 1fr);
    }

    @media (min-width: 770px) and (max-width: 959px) {
        --grid-template-columns: repeat(18, 1fr);
    }

    @media (min-width: 560px) and (max-width: 769px) {
        --grid-template-columns: repeat(12, 1fr);
    }

    @media (max-width: 559px) {
        --grid-template-columns: repeat(12, 1fr);
    }
`;
