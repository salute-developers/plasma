import styled from 'styled-components';

interface PreviewRectProps {
    background: string;
}

export const PreviewRect = styled.div<PreviewRectProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    background: ${({ background }) => background};
`;
