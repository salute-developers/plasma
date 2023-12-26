import { typographyOldRoot } from '../TypographyOld';
import type { TypographyOldProps } from '../TypographyOld';
import { base as sizeCSS } from '../../variations/_size/base';

import { base } from './Paragraph.styles';

export type ParagraphProps = TypographyOldProps;

export const paragraphRoot = typographyOldRoot;

export const paragraphConfig = {
    name: 'Paragraph',
    tag: 'p',
    layout: paragraphRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'paragraph1',
    },
};
