import React from 'react';
import styled from 'styled-components';
import { IconTrash, IconTrashFilled } from '@salutejs/plasma-icons';
import { surfaceSolid01 } from '@salutejs/plasma-tokens-b2c';

import { PreviewGallery, PreviewGalleryItemProps } from '.';

const StyledAddButton = styled.div`
    width: 100%;
    background: ${surfaceSolid01};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.75rem;
    user-select: none;
    padding-top: 56.25%;
`;

export const AddButton = () => {
    return <StyledAddButton />;
};

const images: Array<PreviewGalleryItemProps> = [
    {
        id: Math.random(),
        image: './images/320_320_0.jpg',
        caption: '3:24',
        tooltip: {
            text: 'Высокое качество воспроизведения',
            placement: 'top',
        },
    },
    { id: 2 * Math.random(), image: './images/320_320_1.jpg', isSelected: true },
    { id: 3 * Math.random(), image: './images/320_320_2.jpg', actionDisabled: true },
    { id: 4 * Math.random(), image: './images/320_320_3.jpg' },
    { id: 5 * Math.random(), image: './images/320_320_4.jpg' },
    { id: 6 * Math.random(), image: './images/320_320_4.jpg', status: 'error' },
    {
        id: 7 * Math.random(),
        tooltip: {
            placement: 'bottom',
            text: 'Не сильно высокое качество воспроизведения',
            animated: false,
        },
        component: <AddButton />,
        customClickHandle: () => {},
    },
];

const func = () => {};

export const Selectable = () => {
    return (
        <PreviewGallery
            items={images}
            onItemAction={func}
            actionIcon={<IconTrashFilled size="xs" color="inherit" />}
            onItemClick={func}
        />
    );
};

export const Draggable = () => {
    return (
        <PreviewGallery
            interactionType="draggable"
            items={images}
            actionIcon={<IconTrash size="xs" color="inherit" />}
            onItemAction={func}
            onItemsSortEnd={func}
        />
    );
};
