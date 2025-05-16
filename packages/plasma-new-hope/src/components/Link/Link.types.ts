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
     * Вид компонента.
     */
    view?: string;
    /**
     * Размер компонента.
     */
    size?: string;
};

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkCustomProps;
