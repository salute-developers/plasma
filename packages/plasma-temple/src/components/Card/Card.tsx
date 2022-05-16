import React from 'react';
import styled, { InterpolationFunction } from 'styled-components';
import {
    applyView,
    BadgeProps,
    Card as PlasmaCard,
    CardBadge,
    CardBody,
    CardContent,
    CardMedia,
    Ratio,
    View,
    ViewProps,
} from '@salutejs/plasma-ui';

import { AnyObject, MediaObject } from '../../types';
import { isSberBoxLike } from '../../utils/deviceFamily';
import { getMediaObjectSrc } from '../../utils/getMediaObjectSrc';

const badgePositions = {
    topLeft: {
        top: '0.5rem',
        left: '0.5rem',
    },
    topRight: {
        top: '0.5rem',
        right: '0.5rem',
    },
    bottomLeft: {
        bottom: '0.5rem',
        left: '0.5rem',
    },
    bottomRight: {
        bottom: '0.5rem',
        right: '0.5rem',
    },
};
type BadgePosition = keyof typeof badgePositions;
type BasePositionProps = { position: BadgePosition };

const applyPosition: InterpolationFunction<BasePositionProps> = ({ position }) => badgePositions[position];

export interface CardEntityBadge {
    /** Тип бейджа, влияет на цвет фона бейджа */
    type: View;
    /** Позция бейджа */
    position?: BadgePosition;
    /** Контент бейджа */
    content?: string;
}

export type CardEntity<Id = string, T extends AnyObject = AnyObject> = T & {
    /** Идентификатор */
    id: Id;
    /** Картинка */
    image: MediaObject;
    /** Бейдж */
    badge?: CardEntityBadge;
};

export interface CardCoverProps {
    /** Определяет перекрытие контентом изображения карточки */
    cover?: boolean;
    /** Определяет наличие градиента у контента. Используется только если установлен флаг `cover` */
    coverGradient?: boolean;
}

export interface CardRatioProps {
    /**
     * Соотношение сторон изображения карточки,
     * если установлено свойство ratio непосредственно для изображения, то данный пропс игнорируется.
     * Используется либо один из стандартных вариантов 1/1, 3/4, 9/16 и т. д., либо процент высоты от ширины,
     * например 150 будет означать, что высота будет 150% от ширины.
     */
    ratio?: Ratio | number;
}

export interface CardPositionBadgeProps {
    /** Определяет наличия бейджа с индексом карточки */
    withPositionBadge?: boolean;
}

export interface CardProps<Id = string, T extends AnyObject = AnyObject>
    extends CardCoverProps,
        CardRatioProps,
        CardPositionBadgeProps {
    /** Сущность карточки */
    entity: CardEntity<Id, T>;
    /** Индекс карточки в списке карточек, должен начинаться с 0 */
    index: number;
    /** Может ли компонент быть сфокусирован с помощью клавиатурной навигации */
    focusable?: boolean;
    /** Определяет состояние фокуса */
    focused?: boolean;
    /** Колбэк, вызываемый при клике по карточке */
    onClick: (id: CardEntity<Id, T>, index: number) => void;
    /** Колбэк, вызываемый при получении фокуса карточкой */
    onFocus?: (index: number) => void;
    className?: string;
}

export const getEntityImageRatio = (image: MediaObject, defaultRatio: Ratio | number) => {
    if (image.ratio || image.customRatio) {
        return { ratio: image.ratio, customRatio: image.customRatio };
    }

    if (typeof defaultRatio === 'number') {
        return { customRatio: String(defaultRatio) };
    }

    return { ratio: defaultRatio };
};

const StyledPositionBadge = styled(CardBadge)`
    top: 0.5rem;
    right: 0.5rem;
`;

const StyledBadge = styled(CardBadge)<ViewProps & BasePositionProps>`
    ${applyView}
    ${applyPosition}
`;

/**
 * Компонент для отображение карточки какой-либо сущности (товара, фильма, экскурсии  и т.д. )
 * Может использоваться в каруселях, в компоненте `Grid`
 */
export function Card<Id = string, T extends AnyObject = AnyObject>({
    entity,
    index,
    cover,
    coverGradient,
    ratio = '1 / 1',
    withPositionBadge,
    children,
    className,
    focusable,
    focused,
    onClick,
    onFocus,
}: React.PropsWithChildren<CardProps<Id, T>>) {
    const { id, image } = entity;

    const handleClick = React.useCallback(() => {
        onClick(entity, index);
    }, [id, index, onClick]);

    const handleKeyDown = React.useCallback(
        (event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
                onClick(entity, index);
            }
        },
        [id, index, onClick],
    );

    const handleFocus = React.useCallback(() => {
        onFocus?.(index);
    }, [index, onFocus]);

    const contentProps = React.useMemo(() => (cover ? { cover: true as const, coverGradient } : {}), [
        cover,
        coverGradient,
    ]);

    const { ratio: imageRatio, customRatio } = getEntityImageRatio(image, ratio);

    return (
        <PlasmaCard
            outlined={isSberBoxLike()}
            focused={focused}
            tabIndex={focusable ? 0 : undefined}
            data-focusable={focusable}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            className={className}
            data-cy="Card"
        >
            <CardBody>
                <CardMedia
                    base="div"
                    src={getMediaObjectSrc(image)}
                    ratio={imageRatio}
                    customRatio={customRatio}
                    data-cy="Card-image"
                >
                    {entity.badge && (
                        <StyledBadge
                            size="s"
                            text={entity.badge.content}
                            view={(entity.badge.type as BadgeProps['view']) ?? 'primary'}
                            position={entity.badge.position ?? 'topLeft'}
                        />
                    )}
                </CardMedia>
                <CardContent {...contentProps}>{children}</CardContent>
                {withPositionBadge && <StyledPositionBadge view="secondary" size="l" text={`${index + 1}`} circled />}
            </CardBody>
        </PlasmaCard>
    );
}
