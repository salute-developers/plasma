import { detectDevice } from '@salutejs/plasma-ui/utils';

export const deviceFamily = detectDevice();
export const isSberBoxLike = () => detectDevice() === 'sberBox';
