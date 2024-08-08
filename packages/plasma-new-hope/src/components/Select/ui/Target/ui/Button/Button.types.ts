import { TargetProps } from '../../Target.types';

export type ButtonProps = Omit<
    TargetProps,
    'target' | 'onChipClick' | 'labelPlacement' | 'helperText' | 'focusedChipIndex' | 'contentLeft' | 'placeholder'
>;

export type GetButtonLabelProps = Pick<
    ButtonProps,
    'value' | 'valueToItemMap' | 'label' | 'renderValue' | 'selectProps'
>;
