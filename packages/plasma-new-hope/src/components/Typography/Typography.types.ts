import type { FunctionComponent, HTMLAttributes, ReactElement, RefAttributes } from 'react';
import type { SpacingProps } from 'src/mixins';

import { AsProps } from '../..';

export interface BoldProps {
    /**
     * Полужирное начертание.
     */
    bold?: boolean;
    medium?: never | false;
    extraBold?: never | false;
}

export interface MediumProps {
    /**
     * Среднее начертание.
     */
    medium?: boolean;
    bold?: never | false;
    extraBold?: never | false;
}

export interface ExtraBoldProps {
    /**
     * Жирное начертание.
     */
    extraBold?: boolean;
    bold?: never | false;
    medium?: never | false;
}

type FontWeightProps = MediumProps | BoldProps | ExtraBoldProps;

export type FontProps = {
    /**
     * Не переносить строки.
     */
    noWrap?: boolean;
    /**
     * Переносить слова.
     */
    breakWord?: boolean;
    /**
     * Кастомный цвет текста.
     */
    color?: string;
    /**
     * Размер текста.
     */
    size?: string;
    /**
     * Делает цифровые значения моноширинным.
     */
    isNumeric?: boolean;
    /**
     * Определяет стиль шрифта как italic
     */
    isItalic?: boolean;
} & SpacingProps &
    FontWeightProps &
    AsProps &
    HTMLAttributes<HTMLDivElement> & { as?: keyof AllowedTextHTMLElements };

export interface AllowedTextHTMLElements {
    div: JSX.IntrinsicElements['div'];
    p: JSX.IntrinsicElements['p'];
    span: JSX.IntrinsicElements['span'];
    i: JSX.IntrinsicElements['i'];
    b: JSX.IntrinsicElements['b'];
    strong: JSX.IntrinsicElements['strong'];
    label: JSX.IntrinsicElements['label'];
    h1: JSX.IntrinsicElements['h1'];
    h2: JSX.IntrinsicElements['h2'];
    h3: JSX.IntrinsicElements['h3'];
    h4: JSX.IntrinsicElements['h4'];
    h5: JSX.IntrinsicElements['h5'];
    h6: JSX.IntrinsicElements['h6'];
    legend: JSX.IntrinsicElements['legend'];
    ol: JSX.IntrinsicElements['ol'];
    ul: JSX.IntrinsicElements['ul'];
    li: JSX.IntrinsicElements['li'];
    blockquote: JSX.IntrinsicElements['blockquote'];
    em: JSX.IntrinsicElements['em'];
    small: JSX.IntrinsicElements['small'];
    s: JSX.IntrinsicElements['s'];
    u: JSX.IntrinsicElements['u'];
    mark: JSX.IntrinsicElements['mark'];
    sub: JSX.IntrinsicElements['sub'];
    sup: JSX.IntrinsicElements['sup'];
    code: JSX.IntrinsicElements['code'];
    pre: JSX.IntrinsicElements['pre'];
    q: JSX.IntrinsicElements['q'];
    figcaption: JSX.IntrinsicElements['figcaption'];
    address: JSX.IntrinsicElements['address'];
    abbr: JSX.IntrinsicElements['abbr'];
    cite: JSX.IntrinsicElements['cite'];
    kbd: JSX.IntrinsicElements['kbd'];
    samp: JSX.IntrinsicElements['samp'];
    var: JSX.IntrinsicElements['var'];
    del: JSX.IntrinsicElements['del'];
    ins: JSX.IntrinsicElements['ins'];
    dfn: JSX.IntrinsicElements['dfn'];
    time: JSX.IntrinsicElements['time'];
    data: JSX.IntrinsicElements['data'];
    bdi: JSX.IntrinsicElements['bdi'];
    bdo: JSX.IntrinsicElements['bdo'];
    dt: JSX.IntrinsicElements['dt'];
    dd: JSX.IntrinsicElements['dd'];
}

export type TypographyComponent<K> = <T extends keyof AllowedTextHTMLElements = 'div'>(
    props: (K extends unknown ? Omit<K, 'as' | 'ref'> & { as?: T } : never) & RefAttributes<HTMLElementTagNameMap[T]>,
) => ReactElement | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const typographyComponent = <K extends Record<string, any>>(comp: FunctionComponent<K>) =>
    (comp as unknown) as TypographyComponent<K>;
