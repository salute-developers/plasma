import { buttonConfig } from '../Button';
import { component, mergeConfig } from '../../engines';

export const DEFAULT_FADE = true;
export const DEFAULT_POSITION = 'bottom';
export const TIMER_DELAY = 300;
export const FADE_Z_INDEX = 9900;
export const TOAST_Z_INDEX = '9901';

export const gradients = {
    top: 'radial-gradient(200% 200% at 50% -100%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
    bottom: 'radial-gradient(200% 200% at 50% 200%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
};

const mergedButtonConfig = mergeConfig(buttonConfig);
export const Button = component(mergedButtonConfig);
