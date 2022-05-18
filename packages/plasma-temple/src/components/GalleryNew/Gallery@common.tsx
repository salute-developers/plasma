import React from 'react';
import styled from 'styled-components';

import { AnyObject } from '../../types';
import { useFocusedState } from '../../hooks/useFocusedState';
import { useMount } from '../../hooks';
import { UnifiedComponentProps } from '../../registry/types';

import {
    GalleryNewCardProps,
    GalleryControl,
    GalleryState,
    MultiGalleryProps,
    OnCardClickFn,
    OnChangeCardFn,
    OnChangeGalleryFn,
    SingleGalleryEntity,
    SingleGalleryProps,
} from './types';

interface MultiProps<Id, T extends AnyObject> {
    /** Список элементов галереи */
    items: SingleGalleryEntity<Id, T>[];
    /** Начальное состояние галереи */
    initialState?: GalleryState;
}

interface SingleProps<Id, T extends AnyObject> {
    /** Список элементов галереи */
    items: SingleGalleryEntity<Id, T>;
    /** Начальное состояние галереи */
    initialState?: number;
}

export type GalleryProps<Id = string, T extends AnyObject = AnyObject> = {
    /** Автофокус галереи при монтировании компонента */
    autoFocus?: boolean;
    className?: string;
    /** Колбэк, вызываемый при клике по карточке галереи */
    onCardClick?: OnCardClickFn<Id, T>;
    /** Компонент кастомной карточки галереи */
    galleryCard?: React.ComponentType<GalleryNewCardProps<Id, T>>;
} & (MultiProps<Id, T> | SingleProps<Id, T>);

export type GalleryComponent = <Id = string, T extends AnyObject = AnyObject>(
    props: GalleryProps<Id, T> & { ref?: React.Ref<GalleryControl> },
) => React.ReactElement;

type PlatformComponents = {
    SingleGallery: SingleGalleryProps;
    MultiGallery: MultiGalleryProps;
};

const StyledContainer = styled.div`
    height: 100%;
`;

const getInitialState = <Id, T extends AnyObject>(
    items: SingleGalleryEntity<Id, T> | SingleGalleryEntity<Id, T>[],
    initialState?: GalleryState | number,
) => {
    if (typeof initialState === 'undefined') {
        return Array.isArray(items)
            ? { activeGallery: 0, activeCards: items.map(() => 0) }
            : { activeGallery: 0, activeCards: [0] };
    }

    if (typeof initialState === 'number') {
        return {
            activeGallery: 0,
            activeCards: [initialState],
        };
    }

    return initialState;
};

export const GalleryCommon = React.forwardRef<GalleryControl, UnifiedComponentProps<GalleryProps, PlatformComponents>>(
    ({ items, initialState, autoFocus, className, platformComponents, ...props }, ref) => {
        const [state, setState] = React.useState<GalleryState>(getInitialState(items, initialState));

        const handleChangeGallery = React.useCallback<OnChangeGalleryFn>(({ galleryIndex, cardIndex = -1 }) => {
            setState(({ activeCards }) => ({
                activeGallery: galleryIndex,
                activeCards:
                    cardIndex > -1
                        ? [...activeCards.slice(0, galleryIndex), cardIndex, ...activeCards.slice(galleryIndex + 1)]
                        : activeCards,
            }));
        }, []);

        const handleChangeCard = React.useCallback<OnChangeCardFn>(({ galleryIndex, cardIndex }) => {
            setState((prevState) => ({
                ...prevState,
                activeCards: [
                    ...prevState.activeCards.slice(0, galleryIndex),
                    cardIndex,
                    ...prevState.activeCards.slice(galleryIndex + 1),
                ],
            }));
        }, []);

        React.useImperativeHandle(
            ref,
            (): GalleryControl => ({
                getGalleryState: () => state,
                setGalleryState: (newState) => setState(newState),
            }),
        );

        const galleryRef = React.useRef<HTMLDivElement>(null);
        const focused = useFocusedState(galleryRef);

        useMount(() => {
            if (autoFocus) {
                (galleryRef.current?.querySelector(
                    `[data-name="gallery-${state.activeGallery}"]`,
                ) as HTMLElement)?.focus();
            }
        });

        const { SingleGallery, MultiGallery } = platformComponents;

        return (
            <StyledContainer ref={galleryRef} className={className}>
                {Array.isArray(items) ? (
                    <MultiGallery
                        {...props}
                        items={items}
                        state={state}
                        isActive={focused}
                        onChangeGallery={handleChangeGallery}
                        onChangeCard={handleChangeCard}
                    />
                ) : (
                    <SingleGallery
                        {...props}
                        gallery={items}
                        galleryIndex={state.activeGallery}
                        activeCard={state.activeCards[0]}
                        isActive={focused}
                        onChangeGallery={handleChangeGallery}
                        onChangeCard={handleChangeCard}
                    />
                )}
            </StyledContainer>
        );
    },
);
