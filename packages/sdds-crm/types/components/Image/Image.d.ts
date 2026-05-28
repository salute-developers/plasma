/**
 * Компонент Image.
 */
export declare const Image: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<
        import('@salutejs/plasma-new-hope/types/engines/types.js').Variants
    > &
        import('react').ImgHTMLAttributes<HTMLImageElement> & {
            base?: 'div' | 'img';
            ratio?: import('@salutejs/plasma-new-hope/styled-components').Ratio;
            customRatio?: string;
        } & import('react').RefAttributes<HTMLDivElement>
>;
