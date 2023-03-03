import { detectDevice } from '@salutejs/plasma-ui';

export const deviceFamily = detectDevice();
export const isSberBoxLike = () => detectDevice() === 'sberBox';
