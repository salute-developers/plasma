import styled from 'styled-components';

import { isValidBackground } from '../../utils/other';

interface PreviewColorProps {
    background: string;
    size: string;
    borderRadius: string;
}

export const PreviewColor = styled.div<PreviewColorProps>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: ${({ borderRadius }) => borderRadius};
    background: ${({ background }) => (isValidBackground(background) ? background : 'transparent')};
    margin-right: 0.5rem;
`;
