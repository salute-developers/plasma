import { base as sizeCSS } from '../variations/_size/base';
import type { FontProps } from '../Typography.types';
import { base } from '../Typography.styles';
import { typographyRoot } from '../Typography';

export type TextProps = FontProps;

export const textRoot = typographyRoot;

export const textConfig = {
    name: 'Text',
    tag: 'div',
    layout: textRoot,
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
