import styled from 'styled-components';
import { Image as BaseImage, ImageProps as BaseProps } from '@salutejs/plasma-core';
import { ReactElement } from 'react';

export type ImageProps = BaseProps;

/**
 * Компонент для отображения картинок.
 */
export const Image: (props: ImageProps) => ReactElement = styled(BaseImage)``;
