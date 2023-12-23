import { base as sizeCSS } from '../../variations/_size/base';
import { base } from '../TypographyOld.styles';
import { typographyOldRoot } from '../TypographyOld';
import type { TypographyOldProps } from '../TypographyOld';

export type CaptionProps = TypographyOldProps;

export const captionRoot = typographyOldRoot;

export const captionConfig = {
    name: 'Caption',
    tag: 'div',
    layout: captionRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'm',
    },
};
