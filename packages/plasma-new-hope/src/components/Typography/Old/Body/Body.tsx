import { base as sizeCSS } from '../../variations/_size/base';
import { base } from '../TypographyOld.styles';
import { typographyOldRoot } from '../TypographyOld';
import type { TypographyOldProps } from '../TypographyOld';

export type OldBodyProps = TypographyOldProps;

export const oldBodyRoot = typographyOldRoot;

export const oldBodyConfig = {
    name: 'OldBody',
    tag: 'div',
    layout: oldBodyRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'body1',
    },
};
