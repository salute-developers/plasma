import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Gallery } from './Gallery';
import { GalleryCardEntity } from './types';

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
            name: index % 2 ? 'Очень очень длинное длинное название' : 'Название',
            caption: index % 3 ? 'доп. инфо' : undefined,
            image: { src: 'images/img.png' },
            badge: { type: 'accent', content: 'Скидка 40%' },
        } as GalleryCardEntity<number>),
);

const StyledContainer = styled.div`
    height: 100vh;
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
    return (
        <StyledContainer>
            <Gallery items={galleries} autoFocus onCardClick={action('onCardClick')} />
        </StyledContainer>
    );
};

export const MultiGalleryWithInitialState = (): React.ReactElement => {
    return (
        <StyledContainer>
            <Gallery
                items={galleries}
                autoFocus
                initialState={{ activeGallery: 0, activeCards: [10, 3, 5] }}
                onCardClick={action('onCardClick')}
            />
        </StyledContainer>
    );
};
