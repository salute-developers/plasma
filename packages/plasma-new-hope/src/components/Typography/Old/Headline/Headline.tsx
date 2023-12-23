import { base as sizeCSS } from '../../variations/_size/base';
import { base } from '../TypographyOld.styles';
import { typographyOldRoot } from '../TypographyOld';
import type { TypographyOldProps } from '../TypographyOld';

export type HeadlineProps = TypographyOldProps;

export const headlineRoot = typographyOldRoot;

export const headlineConfig = {
    name: 'Headline',
    tag: 'div',
    layout: headlineRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'headline1',
    },
};
