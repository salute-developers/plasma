import { base as sizeCSS } from '../../variations/_size/base';
import { base } from '../TypographyOld.styles';
import { typographyOldRoot } from '../TypographyOld';
import type { TypographyOldProps } from '../TypographyOld';

export type FootnoteProps = TypographyOldProps;

export const footnoteRoot = typographyOldRoot;

export const footnoteConfig = {
    name: 'Footnote',
    tag: 'div',
    layout: footnoteRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'footnote1',
    },
};
