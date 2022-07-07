import styled from 'styled-components';
import { Image as BaseImage, ImageProps as BaseProps } from '@salutejs/plasma-core';

export type ImageProps = BaseProps;

/**
 * Компонент для отображения картинок.
 */
export const Image: React.FC<React.PropsWithChildren<ImageProps>> = styled(BaseImage)``;
