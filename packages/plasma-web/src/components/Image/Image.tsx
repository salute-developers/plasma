import styled from 'styled-components';
import { Image as BaseImage } from '@salutejs/plasma-core';
import type { ImageProps as BaseProps } from '@salutejs/plasma-core';

export type ImageProps = BaseProps;

/**
 * Компонент для отображения картинок.
 */
export const Image: React.FC<ImageProps> = styled(BaseImage)``;
