import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Button, Header, mediaQuery } from '@salutejs/plasma-ui';
import { background } from '@salutejs/plasma-tokens';

import { Gallery } from './Gallery';
import { GallerySkeleton } from './GallerySkeleton/GallerySkeleton';
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
            name: index % 2 ? 'Очень очень длинное длинное название' : 'Название',
            caption: index % 3 ? 'доп. инфо' : undefined,
            image: { src: 'images/img.png' },
            badge: { type: 'accent', content: 'Скидка 40%' },
        } as GalleryCardEntity<number>),
);

const StyledContainer = styled.div`
    height: 100vh;
    padding-top: 4.5rem;

    ${mediaQuery(
        'XL',
        2,
    )(css`
        padding-top: 5rem;
    `)}
`;

const StyledHeader = styled(Header)`
    top: 0;
    left: 0;
    position: fixed;
    background: ${background};
    z-index: 99;
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

export const MultiGalleryWithExternalControls = (): React.ReactElement => {
    const galleryRef = React.useRef<GalleryControl>(null);

    return (
        <StyledContainer>
            <StyledHeader>
                {galleries.map((_, index) => (
                    <Button
                        size="s"
                        style={{ marginRight: '0.5rem' }}
                        onClick={() => galleryRef.current.setActiveGallery(index)}
                    >
                        {galleries[index].title}
                    </Button>
                ))}
            </StyledHeader>
            <Gallery ref={galleryRef} items={galleries} autoFocus onCardClick={action('onCardClick')} />
        </StyledContainer>
    );
};

export const Skeleton = (): React.ReactElement => {
    return <GallerySkeleton galleries={2} items={4} columnXL={4} columnM={3} columnS={2} />;
};
