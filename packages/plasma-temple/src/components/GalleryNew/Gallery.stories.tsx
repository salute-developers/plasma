import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Gallery } from './Gallery';
import { GalleryCardEntity, GalleryControl } from './types';

export default {
    title: 'Gallery',
    parameters: {
        ignoreInsets: true,
    },
};

const items = Array.from(
    { length: 12 },
    (_, index) =>
        ({
            id: index,
            name: 'Очень очень длинное длинное название ',
            image: { src: 'images/img.png' },
            badge: { type: 'accent', content: 'Скидка 40%' },
        } as GalleryCardEntity<number>),
);

const StyledContainer = styled.div`
    height: 100vh;
    padding-top: 144px;
`;

export const SingleGallery = (): React.ReactElement => {
    return (
        <StyledContainer>
            <Gallery items={{ title: 'Галерея 1', items }} onCardClick={action('onCardClick')} autoFocus />
        </StyledContainer>
    );
};

const galleries = [
    { title: 'Галерея 1', items },
    { title: 'Галерея 2', items },
    { title: 'Галерея 3', items },
];

export const MultiGallery = (): React.ReactElement => {
    const galleryRef = React.useRef<GalleryControl>(null);

    // React.useEffect(() => {
    //     console.log(galleryRef.current.getGalleryState());
    //     // setTimeout(() => {
    //     //     galleryRef.current.setGalleryState({ activeGallery: 1, activeCards: [1, 11, 5] });
    //     // }, 3000);
    // }, []);

    return (
        <StyledContainer>
            <Gallery
                ref={galleryRef}
                items={galleries}
                autoFocus
                initialState={{ activeGallery: 0, activeCards: [1, 3, 5] }}
                onCardClick={action('onCardClick')}
            />
        </StyledContainer>
    );
};
