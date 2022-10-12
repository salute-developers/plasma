import React from 'react';
import styled from 'styled-components';

import { ObjectPosition, ObjectFit } from '../../types';
import { FullScreenBackgroundWrapper } from '../FullScreenBackgroundWrapper/FullScreenBackgroundWrapper';

export interface FullScreenBackgroundProps {
    src: string;
    imageWidth?: string;
    imageFit?: ObjectFit;
    imagePosition?: ObjectPosition;
    mask?: boolean;
    className?: string;
}

const StyledBackgroundImage = styled.img<{ imageWidth: string; imageFit: ObjectFit; imagePosition: ObjectPosition }>`
    position: absolute;
    right: 0px;
    width: ${(props) => props.imageWidth};
    height: 100%;
    object-fit: ${(props) => props.imageFit};
    object-position: ${(props) => props.imagePosition};
`;

export const FullScreenBackground: React.FC<FullScreenBackgroundProps> = ({
    src,
    imageWidth = '100%',
    imageFit = 'cover',
    imagePosition = 'center center',
    mask,
    className,
}) => {
    return (
        <FullScreenBackgroundWrapper className={className} mask={mask}>
            <StyledBackgroundImage
                src={src}
                imageWidth={imageWidth}
                imageFit={imageFit}
                imagePosition={imagePosition}
                data-cy="background-image"
            />
        </FullScreenBackgroundWrapper>
    );
};
