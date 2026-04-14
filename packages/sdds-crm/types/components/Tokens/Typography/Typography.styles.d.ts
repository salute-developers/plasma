export declare const TypographyTokensWrapper: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const FontPropsSwitcher: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const FontWeightSwitcher: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const BreakpointSwitcher: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const StyledSegmentItem: import('styled-components').StyledComponent<
    import('react').FunctionComponent<
        import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
            view: {
                clear: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            };
            size: {
                xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            };
            disabled: {
                true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            };
            pilled: {
                true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            };
        }> &
            import('react').ButtonHTMLAttributes<HTMLButtonElement> & {
                value: string;
                id?: string;
                label?: React.ReactNode;
                pilled?: boolean;
                customHandleSelect?: (e: import('react').MouseEvent<HTMLButtonElement>) => void;
                size?: string;
                view?: string;
                contentLeft?: React.ReactNode;
                contentRight?: React.ReactNode | string;
                maxItemWidth?: React.CSSProperties['width'];
            } & import('react').RefAttributes<HTMLLabelElement>
    >,
    any,
    {},
    never
>;
export declare const AccordionTypographyTitle: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const FontFamily: import('styled-components').StyledComponent<'span', any, {}, never>;
export declare const AccordionInfo: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const StyledAccordionItem: import('styled-components').StyledComponent<
    import('react').ForwardRefExoticComponent<
        Omit<import('react').HTMLAttributes<HTMLElement>, 'onChange' | 'title'> & {
            value?: boolean;
            type?: 'clear' | 'arrow' | 'sign';
            contentLeft?: React.ReactNode;
            alignWithTitle?: boolean;
            contentRight?: React.ReactNode;
            pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
            title?: React.ReactNode | string;
            children: React.ReactNode;
            onChange?: (index: number, value: boolean) => void;
            onClick?: (index: number, value: boolean) => void;
            disabled?: boolean;
            opened?: boolean;
            eventKey?: number;
            index?: number;
            view?: string;
        } & import('react').RefAttributes<HTMLDivElement>
    >,
    any,
    {},
    never
>;
export declare const TokenInfoWrapper: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const TokenShortName: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const TokenInfo: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const TokenText: import('styled-components').StyledComponent<
    'div',
    any,
    {
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
        letterSpacing: string;
        fontStyle: string;
        isDisplay: boolean;
    },
    never
>;
export declare const TokenPropValue: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const TokenPropName: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const TokenPropsWrapper: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const TokenProps: import('styled-components').StyledComponent<'div', any, {}, never>;
