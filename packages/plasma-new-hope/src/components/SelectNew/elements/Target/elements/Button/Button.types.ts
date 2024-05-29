import { TargetProps } from '../../Target.types';

export type ButtonProps = Omit<
    TargetProps,
    'size' | 'target' | 'onChipClick' | 'labelPlacement' | 'helperText' | 'focusedChipIndex'
>;

export type GetLabelProps = Omit<ButtonProps, 'opened' | 'onKeyDown'>;
