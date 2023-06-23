import styled from 'styled-components';

interface PreviewColorProps {
    background: string;
    size: string;
    borderRadius: string;
}

export const PreviewColor = styled.div<PreviewColorProps>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: ${({ borderRadius }) => borderRadius};
    background: ${({ background }) => background};
`;
