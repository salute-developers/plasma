import type { ImgHTMLAttributes } from 'react';

import { ratios } from './Image.utils';

export type Ratio = keyof typeof ratios;

type ImageBaseProps = 'div' | 'img';

type CustomImageProps = {
    base?: ImageBaseProps;
    ratio?: Ratio;
    customRatio?: string;
};

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & CustomImageProps;
