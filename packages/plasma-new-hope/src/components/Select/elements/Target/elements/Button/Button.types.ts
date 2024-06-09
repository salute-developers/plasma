import { TargetProps } from '../../Target.types';

export type ButtonProps = Omit<
    TargetProps,
    'target' | 'onChipClick' | 'labelPlacement' | 'helperText' | 'focusedChipIndex' | 'contentLeft'
>;

export type GetButtonLabelProps = Omit<
    ButtonProps,
    'opened' | 'onKeyDown' | 'size' | 'focusedToValueMap' | 'focusedPath'
>;
