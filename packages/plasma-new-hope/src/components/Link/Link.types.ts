export type LinkCustomProps = {
    /**
     * Компонент может фокусироваться.
     */
    focused?: boolean;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Режим подчёркивания ссылки:
     * - `none` — без подчёркивания
     * - `hover` — подчёркивание при наведении
     * - `always` — всегда подчёркнута
     * @default 'none'
     */
    underline?: 'none' | 'hover' | 'always';
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Размер компонента.
     */
    size?: string;
};

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkCustomProps;
