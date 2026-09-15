import type { ComponentProps, FunctionComponent } from 'react';
import { spinnerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Spinner.config';

const mergedConfig = mergeConfig(spinnerConfig, config);
const SpinnerComponent = component(mergedConfig);

type Variations = ComponentProps<typeof SpinnerComponent>;

/* Числовой size устарел, но должен компилироваться. */
type SpinnerComponentProps = Omit<Variations, 'size'> & { size?: Variations['size'] | number };

/**
 * Компонент для отображения индикатора загрузки.
 */
export const Spinner = SpinnerComponent as FunctionComponent<SpinnerComponentProps>;
