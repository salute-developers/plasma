import React from 'react';

import { HeaderProps } from '../Header/types';
import { Insets, MediaObject, ObjectFit } from '../../types';

interface StateLayoutProps {
    /** Основной текст состояния */
    title: React.ReactNode;
    /** @deprecated работает только c PlasmaApp */
    header?: HeaderProps;
    /** Дополнительный текст состояния */
    text?: React.ReactNode;
    /** Дополнительный контент, обычно кнопки для выполнения какого-либо действия */
    button: React.ReactNode;
    /** Ссылка на картинку используемую в качестве фона */
    background?: string;
    /** Устанавливает свойство object-fit для фона, значение по умолчанию используется `cover` */
    backgroundFit?: ObjectFit;
    /** Устанавливает свойство `width`, значение по умолчанию `100%` */
    backgroundWidth?: string;
    /** Добавляет маску, на фоновое изображение, значение по умолчанию `true` */
    backgroundMask?: boolean;
    /** Ссылка на картинку состояния */
    image?: MediaObject | React.ReactNode;
    className?: string;
    /**
     * Отступы, вокруг контента. В текущей версии используется только в мобильной версии
     * для позиционирования контента передаваемого в пропсе `button`
     */
    insets?: Partial<Insets>;
    renderText?: never;
}

interface StateLayoutChildrenProps {
    title?: never;
    text?: never;
    /** Дополнительный контент, обычно кнопки для выполнения какого-либо действия */
    button: React.ReactNode;
    /** @deprecated работает только c PlasmaApp */
    header?: HeaderProps;
    renderText: React.ReactNode;
    /** Ссылка на картинку используемую в качестве фона */
    background?: string;
    /** Устанавливает свойство object-fit для фона, значение по умолчанию используется `cover` */
    backgroundFit?: ObjectFit;
    /** Устанавливает свойство `width`, значение по умолчанию `100%` */
    backgroundWidth?: string;
    /** Добавляет маску, на фоновое изображение, значение по умолчанию `true` */
    backgroundMask?: boolean;
    /** Ссылка на картинку состояния */
    image?: MediaObject | React.ReactNode;
    className?: string;
    /**
     * Отступы, вокруг контента. В текущей версии используется только в мобильной версии
     * для позиционирования контента передаваемого в пропсе `button`
     */
    insets?: Partial<Insets>;
}

export type StateLayoutCommonProps = StateLayoutProps | StateLayoutChildrenProps;
