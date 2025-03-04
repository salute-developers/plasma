export interface BoldProps {
    /**
     * Полужирное начертание.
     */
    bold?: boolean;
    medium?: never;
}

export interface MediumProps {
    /**
     * Среднее начертание.
     */
    medium?: boolean;
    bold?: never;
}

export type FontFamily =
    | 'SB Sans Display'
    | 'SB Serif Display'
    | 'SB Sans Cond Mono'
    | 'SB Sans Text'
    | 'SB Sans Text Mono';

export type TypoCommonProps = (
    displayFontFamily: string,
    textFontFamily: string,
) => Record<
    TypoPropName,
    {
        'font-family': string;
        'letter-spacing': string;
        'font-style': string;
    }
>;

export interface CreateVariablesByArcheTypeProps {
    displayFontFamily?: FontFamily;
    textFontFamily?: FontFamily;
    typoS?: TypoProps;
    typoM?: TypoProps;
    typoL?: TypoProps;
    getTypoCommonProps?: TypoCommonProps;
}

export type TypoPropName =
    | 'dspl-l'
    | 'dspl-l-bold'
    | 'dspl-l-medium'
    | 'dspl-m'
    | 'dspl-m-bold'
    | 'dspl-m-medium'
    | 'dspl-s'
    | 'dspl-s-bold'
    | 'dspl-s-medium'
    | 'h1'
    | 'h1-bold'
    | 'h1-medium'
    | 'h2'
    | 'h2-bold'
    | 'h2-medium'
    | 'h3'
    | 'h3-bold'
    | 'h3-medium'
    | 'h4'
    | 'h4-bold'
    | 'h4-medium'
    | 'h5'
    | 'h5-bold'
    | 'h5-medium'
    | 'body-l'
    | 'body-l-bold'
    | 'body-l-medium'
    | 'body-m'
    | 'body-m-bold'
    | 'body-m-medium'
    | 'body-s'
    | 'body-s-bold'
    | 'body-s-medium'
    | 'body-xs'
    | 'body-xs-bold'
    | 'body-xs-medium'
    | 'body-xxs'
    | 'body-xxs-bold'
    | 'body-xxs-medium'
    | 'text-l'
    | 'text-l-bold'
    | 'text-l-medium'
    | 'text-m'
    | 'text-m-bold'
    | 'text-m-medium'
    | 'text-s'
    | 'text-s-bold'
    | 'text-s-medium'
    | 'text-xs'
    | 'text-xs-bold'
    | 'text-xs-medium';

export type TypoCSSPropName = 'font-size' | 'font-weight' | 'line-height' | 'letter-spacing' | 'font-style';

export type TypoProps = Partial<Record<TypoPropName, Partial<Record<TypoCSSPropName, string>>>>;
