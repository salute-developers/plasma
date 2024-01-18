import { lineSkeletonConfig, textSkeleton, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './LineSkeleton.config';

const mergedConfig = mergeConfig(lineSkeletonConfig, config);
const LineSkeletonComponent = component(mergedConfig);

/**
 * Копонент-составляющая Скелетона
 */
export const LineSkeleton = LineSkeletonComponent;

/**
 * Компонент плейсхолдера нескольких строк текста.
 * Размеры компонента задаются с помощью констант и соответствуют размерам [типографических элементов](/?path=/docs/).
 */
export const TextSkeleton = textSkeleton(LineSkeleton);

/**
 * Компонент для создания прямоугольного плейсхолдера.
 */
export { RectSkeleton } from '@salutejs/plasma-new-hope/styled-components';
