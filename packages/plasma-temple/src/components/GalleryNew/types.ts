import { AnyObject } from '../../types';
import { CardEntity } from '../Card';

export interface GalleryState {
    /** Индексы активных карт в галереях */
    activeCards: number[];
    /** Индекс активной галереи */
    activeGallery: number;
}

export interface GalleryControl {
    /** Получить текущее состояние галереи */
    getGalleryState: () => GalleryState;
    /** Установить новое состояние галереи */
    setGalleryState: (args: GalleryState) => void;
}

export type GalleryCardEntity<Id = string, T extends AnyObject = AnyObject> = CardEntity<Id, T> & {
    /** Имя карты */
    name: string;
    /** Доп информация о карте */
    caption?: string;
};

export interface SingleGalleryEntity<Id = string, T extends AnyObject = AnyObject> {
    /** Заголовок галереи */
    title?: string;
    /** Список карт галереи */
    items: GalleryCardEntity<Id, T>[];
}

export type OnCardClickFn<Id = string, T extends AnyObject = AnyObject> = (
    cardEntity: GalleryCardEntity<Id, T>,
    galleryIndex: number,
    cardIndex: number,
) => void;

export type OnChangeGalleryFn = (args: { galleryIndex: number; cardIndex?: number }) => void;
export type OnChangeCardFn = (args: { galleryIndex: number; cardIndex: number }) => void;
