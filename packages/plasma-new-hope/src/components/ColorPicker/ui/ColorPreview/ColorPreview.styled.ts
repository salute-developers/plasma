import styled from 'styled-components';

export const StyledColorPreview = styled.div<{ $backgroundColor?: string }>`
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: 1px solid #f3f3f3;
    background: ${({ $backgroundColor }) => $backgroundColor ?? 'unset'};
`;
