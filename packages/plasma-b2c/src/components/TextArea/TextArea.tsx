import { textAreaConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import { config } from './TextArea.config';

import type { TextAreaProps } from '.';

const mergedConfig = mergeConfig(textAreaConfig, config);
const TextAreaComponent = component(mergedConfig) as ForwardRefExoticComponent<
    TextAreaProps & RefAttributes<HTMLTextAreaElement>
>;

/**
 * Поле ввода многострочного текста.
 */
export const TextArea = TextAreaComponent;
