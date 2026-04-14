import { ColorStop } from '../ColorPicker.types';

export const low = (color: ColorStop) => color.value.toLowerCase();
export const high = (color: ColorStop) => color.value.toUpperCase();
