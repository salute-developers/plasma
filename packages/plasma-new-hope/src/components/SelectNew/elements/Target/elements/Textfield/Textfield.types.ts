import { TargetProps } from '../../Target.types';

export type TextfieldProps = Omit<TargetProps, 'target'>;

export type GetLabelProps = Omit<TextfieldProps, 'opened'>;
