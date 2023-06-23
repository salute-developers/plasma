import React from 'react';
import styled from 'styled-components';

import { PreviewColor } from '../PreviewColor/PreviewColor';

const Root = styled.div`
    display: flex;
    gap: 1rem;

    font-size: 0.875rem;
`;

const LayerValue = styled.div`
    flex: 1;
`;

interface GradientTokenLayerProps {
    originalColor: string;
}

export const GradientTokenCSSLayer = ({ originalColor }: GradientTokenLayerProps) => {
    return (
        <Root>
            <LayerValue>{originalColor}</LayerValue>
            <PreviewColor background={originalColor} borderRadius="50%" size="1.25rem" />
        </Root>
    );
};
