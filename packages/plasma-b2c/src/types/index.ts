import type { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';

export type AsProps<T = any> = plasmaCore.AsProps<T>;
export type InputHTMLAttributes<T> = plasmaCore.InputHTMLAttributes<T>;
export type TextareaHTMLAttributes<T> = plasmaCore.TextareaHTMLAttributes<T>;
export type PickOptional<T, K extends keyof T> = plasmaCore.PickOptional<T, K>;
export type ShiftProps = plasmaCore.ShiftProps;
export type SnapType = plasmaCore.SnapType;
export type SnapAlign = plasmaCore.SnapAlign;
export type TextareaResize = plasmaCore.TextareaResize;

export type { ResizableType } from '@salutejs/plasma-new-hope';
