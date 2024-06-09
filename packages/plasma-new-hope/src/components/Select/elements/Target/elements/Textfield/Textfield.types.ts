import { TargetProps } from '../../Target.types';

export type TextfieldProps = Omit<TargetProps, 'target'>;

export type GetTextfieldLabelProps = Omit<TextfieldProps, 'opened' | 'onKeyDown' | 'focusedPath' | 'focusedToValueMap'>;
