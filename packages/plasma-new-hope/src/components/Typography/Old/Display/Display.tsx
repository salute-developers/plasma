import { base as sizeCSS } from '../../variations/_size/base';
import { base } from '../TypographyOld.styles';
import { typographyOldRoot } from '../TypographyOld';
import type { TypographyOldProps } from '../TypographyOld';

export type DisplayProps = TypographyOldProps;

export const displayRoot = typographyOldRoot;

export const displayConfig = {
    name: 'Display',
    tag: 'div',
    layout: displayRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'display1',
    },
};
