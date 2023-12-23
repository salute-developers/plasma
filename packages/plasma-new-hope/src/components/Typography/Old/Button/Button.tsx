import { base as sizeCSS } from '../../variations/_size/base';
import { base } from '../TypographyOld.styles';
import { typographyOldRoot } from '../TypographyOld';
import type { TypographyOldProps } from '../TypographyOld';

export type ButtonProps = TypographyOldProps;

export const buttonTypographyRoot = typographyOldRoot;

export const buttonTypographyConfig = {
    name: 'Button',
    tag: 'div',
    layout: buttonTypographyRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'button1',
    },
};
