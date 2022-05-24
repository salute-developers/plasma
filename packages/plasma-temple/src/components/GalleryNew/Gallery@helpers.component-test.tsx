import React from 'react';
import styled, { css } from 'styled-components';
import { Button, Header, mediaQuery } from '@salutejs/plasma-ui';

import { startScreensApp } from '../../testHelpers/testRenderHelpers';
import { useAssistant } from '../AssistantProvider';

import { Gallery } from './Gallery';
import { GalleryProps } from './Gallery@common';
import { GalleryCardEntity, GalleryControl, SingleGalleryEntity } from './types';

const items = Array.from(
    { length: 6 },
    (_, index) =>
        ({
            id: index,
            name: index % 2 ? 'Очень очень длинное длинное название' : 'Название',
            caption: index % 3 ? 'доп. инфо' : undefined,
            image: { src: 'images/img.png' },
            badge: { type: 'accent', content: 'Скидка 40%' },
        } as GalleryCardEntity<number>),
);

export const galleries: SingleGalleryEntity<number>[] = [
    { title: 'Галерея 1', items },
    { title: 'Галерея 2', items },
];

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
    z-index: 99;
`;

const GalleryPage: React.FC<GalleryProps<number>> = (props) => {
    const galleryRef = React.useRef<GalleryControl>(null);
    const { assistant } = useAssistant();

    return (
        <StyledContainer>
            <StyledHeader>
                {Array.isArray(props.items) &&
                    props.items.map((_, index) => (
                        <Button
                            key={index}
                            size="s"
                            style={{ marginRight: '0.5rem' }}
                            onClick={() => galleryRef.current.setActiveGallery(index)}
                            data-cy={`goto-gallery-${index}`}
                        >
                            {galleries[index].title}
                        </Button>
                    ))}
            </StyledHeader>
            <Gallery {...props} ref={galleryRef} assistant={assistant} />
        </StyledContainer>
    );
};

export function generateWrapper(passedProps?: Partial<GalleryProps<number>>) {
    const defaultProps: GalleryProps<number> = {
        items: galleries,
    };

    const props = { ...defaultProps, ...passedProps };

    startScreensApp({
        screens: [
            {
                name: 'gallery',
                component: <GalleryPage {...(props as GalleryProps<number>)} />,
            },
        ],
    });

    cy.mockBackgroundImage('[data-cy="Card-image"] > div', 'images/img.png');
}
