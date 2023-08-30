export interface BoldProps {
    /**
     * Полужирное начертание.
     */
    bold?: boolean;
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
    | 'dspl-m'
    | 'dspl-m-bold'
    | 'dspl-s'
    | 'dspl-s-bold'
    | 'h1'
    | 'h1-bold'
    | 'h2'
    | 'h2-bold'
    | 'h3'
    | 'h3-bold'
    | 'h4'
    | 'h4-bold'
    | 'h5'
    | 'h5-bold'
    | 'body-l'
    | 'body-l-bold'
    | 'body-m'
    | 'body-m-bold'
    | 'body-s'
    | 'body-s-bold'
    | 'body-xs'
    | 'body-xs-bold'
    | 'body-xxs'
    | 'body-xxs-bold'
    | 'text-l'
    | 'text-l-bold'
    | 'text-m'
    | 'text-m-bold'
    | 'text-s'
    | 'text-s-bold'
    | 'text-xs'
    | 'text-xs-bold';

export type TypoCSSPropName = 'font-size' | 'font-weight' | 'line-height' | 'letter-spacing' | 'font-style';

export type TypoProps = Partial<Record<TypoPropName, Partial<Record<TypoCSSPropName, string>>>>;
