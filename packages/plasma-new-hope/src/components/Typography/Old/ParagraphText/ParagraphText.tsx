import { base as sizeCSS } from '../../variations/_size/base';
import { base } from '../TypographyOld.styles';
import { typographyOldRoot } from '../TypographyOld';
import type { TypographyOldProps } from '../TypographyOld';

export type ParagraphTextProps = TypographyOldProps;

export const paragraphTextRoot = typographyOldRoot;

export const paragraphTextConfig = {
    name: 'ParagraphText',
    tag: 'div',
    layout: paragraphTextRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'paragraphText1',
    },
};
