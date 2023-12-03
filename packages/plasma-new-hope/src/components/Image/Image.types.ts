import type { ImgHTMLAttributes } from 'react';

import { ratios } from './Image.styles';

export type Ratio = keyof typeof ratios;

type ImageBaseProps = 'div' | 'img';

export type StyledRootProps = {
    $customRatio: string;
    $ratio?: Ratio;
    $width?: string | number;
    $height?: string | number;
};

type CustomImageProps = {
    base?: ImageBaseProps;
    ratio?: Ratio;
    customRatio?: string;
};

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & CustomImageProps;
