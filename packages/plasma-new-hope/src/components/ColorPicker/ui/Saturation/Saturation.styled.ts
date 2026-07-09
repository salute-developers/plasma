import styled from 'styled-components';

export const SaturationRoot = styled.div`
    position: relative;
    margin-bottom: 0.75rem;
`;

export const SaturationCanvasWrapper = styled.div<{ $height?: number }>`
    border-radius: 8px;
    overflow: hidden;
    height: ${(props) => props.$height ?? 256}px;
`;
