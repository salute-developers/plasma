import styled, { CSSObject } from 'styled-components';

const typography = (name: string) =>
    (({
        fontFamily: `var(--plasma-typo-${name}-font-family)`,
        fontWeight: `var(--plasma-typo-${name}-font-weight)`,
        fontStyle: `var(--plasma-typo-${name}-font-style)`,
        fontSize: `var(--plasma-typo-${name}-font-size)`,
        letterSpacing: `var(--plasma-typo-${name}-letter-spacing)`,
        lineHeight: `var(--plasma-typo-${name}-line-height)`,
        overflowWrap: 'var(--plasma-typo-overflow-wrap, var(--typo-overflow-wrap))',
        hyphens: 'var(--plasma-typo-hyphens, var(--typo-hyphens))',
    } as unknown) as CSSObject);

export const Body1 = styled.div`
    ${typography('body1')}
`;

export const Caption = styled.div`
    ${typography('caption')}
`;

export const Footnote1 = styled.div`
    ${typography('footnote1')}
`;

export const Headline1 = styled.div`
    ${typography('headline1')}
`;

export const Headline3 = styled.div`
    ${typography('headline3')}
`;
