import { HtmlHTMLAttributes } from 'react';

export type StyledHeaderRootProps = {
    $size?: string;
    $gradientColor?: string;
};

type HeaderRootCustomProps = {
    /**
     * Задать размер, зависимый от устройства.
     * Если не задан, на каждом брейкпоинте будет свой размер.
     */
    size?: string;
    /**
     * Цвет для создания градиента сверху вниз.
     * Указаный цвет займет верхнюю точку градента,
     * а его, рассчитываемая программно, прозрачная версия - нижнюю.
     * Можно использовать hex, rgb и rgba значения цвета.
     */
    gradientColor?: string;

    view?: string;
};

export type HeaderRootProps = HtmlHTMLAttributes<HTMLDivElement> & HeaderRootCustomProps;
