import { TargetProps } from '../../Target.types';

export type ButtonProps = Omit<TargetProps, 'target' | 'onChipClick' | 'label' | 'focusedChipIndex'>;

export type GetLabelProps = Omit<ButtonProps, 'opened' | 'onKeyDown'>;
