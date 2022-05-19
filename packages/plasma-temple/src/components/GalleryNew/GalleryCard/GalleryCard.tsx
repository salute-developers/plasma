import React from 'react';
import styled, { css } from 'styled-components';
import { mediaQuery } from '@salutejs/plasma-ui';
import { body1, body2, footnote1, footnote2 } from '@salutejs/plasma-tokens';

import { Card } from '../../Card';
import { GalleryCardEntity, GalleryNewCardProps } from '../types';
import { getGalleryCardName } from '../utils';

const StyledContainer = styled.div`
    height: 100%;
`;

const StyledCard = styled(Card)`
    height: 100%;

    ${mediaQuery(
        'XL',
        2,
    )(css`
        width: 12.25rem;
    `)}

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
        width: 100%;
    `)}
` as typeof Card;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`;

const StyledName = styled.div<{ lines: number }>`
    ${body1}

    ${mediaQuery(
        'M',
        2,
    )(css`
        ${footnote1}
    `)}

    ${mediaQuery(
        'S',
        1,
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
    margin-top: 0.25rem;

    ${body2}

    ${mediaQuery(
        'M',
        2,
    )(css`
        ${footnote2}
    `)}

    ${mediaQuery(
        'S',
        1,
    )(css`
        ${footnote1}
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
        <StyledContainer
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            data-name={getGalleryCardName(galleryIndex, index)}
        >
            {CustomGalleryCard ? (
                <CustomGalleryCard entity={entity} galleryIndex={galleryIndex} index={index} isActive={isActive} />
            ) : (
                <StyledCard entity={entity} index={index} focused={isActive} onClick={handleClick}>
                    <StyledContent>
                        <StyledName lines={entity.caption ? 2 : 3}>{entity.name}</StyledName>
                        {entity.caption && <StyledCaption>{entity.caption}</StyledCaption>}
                    </StyledContent>
                </StyledCard>
            )}
        </StyledContainer>
    );
}

export const GalleryCard = React.memo(GalleryCardComponent);
