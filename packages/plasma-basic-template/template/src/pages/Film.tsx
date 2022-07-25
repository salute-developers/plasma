import React from 'react';
import { useMount, PageComponent, ItemPage, ItemPageState } from '@salutejs/plasma-temple';

import { PageStateType, Film as FilmType, PageParamsType } from '../types';

// Имитируем получение данных экрана
const getFilm = (id: string): Promise<FilmType> =>
    Promise.resolve({
        id,
        name: 'Имя фильма',
        rating: 5,
        genre: 'комедия',
        poster: '/1920x1080.png',
    });

export const Film: PageComponent<PageStateType, 'film', PageParamsType> = ({ state, header, params, changeState }) => {
    useMount(() => {
        if (!state) {
            // Если экран открыт с помощью вызова pushScreen
            getFilm(params.id).then((film) => {
                changeState(film);
            });
        }
    });

    const onItemShow = React.useCallback(() => {}, []);

    // `state` заполнятся при первом рендере компонента вызовом `changeState(nextState)`
    if (!state) {
        return null;
    }

    const { id, name, poster, genre, rating } = state;

    const itemPageState: ItemPageState = {
        id,
        title: name,
        background: { src: poster },
        entities: [],
        entitiesTitle: '',
        description: [
            {
                title: 'Жанр',
                content: genre,
            },
            {
                title: 'Рейтинг',
                content: rating,
            },
        ],
        actionButtonText: 'Просмотр',
    };

    // В качестве компонента экрана используется компонент ItemPage из пакета @salutejs/plasma-temple
    return <ItemPage header={header} state={itemPageState} onItemShow={onItemShow} />;
};
