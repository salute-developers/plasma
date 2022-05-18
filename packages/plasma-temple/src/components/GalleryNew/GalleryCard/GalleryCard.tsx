import React from 'react';
import styled, { css } from 'styled-components';
import { mediaQuery } from '@salutejs/plasma-ui';
import { body1, body2, footnote1, footnote2 } from '@salutejs/plasma-tokens';

import { Card } from '../../Card';
import { GalleryCardEntity, GalleryNewCardProps } from '../types';

const StyledCard = styled(Card)`
    width: 12.25rem;

    ${mediaQuery(
        'M',
        2,
    )(css`
        width: 10.375rem;
    `)}

    ${mediaQuery(
        'S',
        1,
    )(css`
        width: 10.375rem;
    `)}
` as typeof Card;

const StyledName = styled.div<{ lines: number }>`
    ${body1}

    ${mediaQuery(
        'M',
        2,
    )(css`
        ${footnote1}
    `)}

    overflow: hidden;
    text-overflow: ellipsis;
    hyphens: none;

    ${({ lines }) =>
        lines > 1
            ? css`
                  display: -webkit-box;
                  -webkit-line-clamp: ${lines};
                  -webkit-box-orient: vertical;
              `
            : css`
                  white-space: nowrap;
              `}
`;

const StyledCaption = styled.div`
    ${body2}

    ${mediaQuery(
        'M',
        2,
    )(css`
        ${footnote2}
    `)}
`;

interface GalleryCardProps extends GalleryNewCardProps {
    galleryCard?: React.ComponentType<GalleryNewCardProps>;
    onClick?: (entity: GalleryCardEntity, galleryIndex: number, cardIndex: number) => void;
}

function GalleryCardComponent({
    entity,
    index,
    galleryIndex,
    isActive,
    galleryCard: CustomGalleryCard,
    onClick,
}: GalleryCardProps) {
    const handleClick = React.useCallback(() => {
        onClick?.(entity, galleryIndex, index);
    }, [entity, galleryIndex, index]);

    const handleKeyDown = React.useCallback(
        (event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
                onClick?.(entity, galleryIndex, index);
            }
        },
        [entity, galleryIndex, index],
    );

    return (
        <div onClick={handleClick} onKeyDown={handleKeyDown}>
            {CustomGalleryCard ? (
                <CustomGalleryCard entity={entity} galleryIndex={galleryIndex} index={index} isActive={isActive} />
            ) : (
                <StyledCard entity={entity} index={index} focused={isActive} onClick={handleClick}>
                    <StyledName lines={entity.caption ? 2 : 3}>{entity.name}</StyledName>
                    {entity.caption && <StyledCaption>{entity.caption}</StyledCaption>}
                </StyledCard>
            )}
        </div>
    );
}

export const GalleryCard = React.memo(GalleryCardComponent);
