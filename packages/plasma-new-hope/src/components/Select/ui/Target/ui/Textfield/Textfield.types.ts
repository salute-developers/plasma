import { TargetProps } from '../../Target.types';

export type TextfieldProps = Omit<TargetProps, 'target'>;

export type GetTextfieldLabelProps = Pick<
    TextfieldProps,
    | 'value'
    | 'valueToItemMap'
    | 'onChipClick'
    | 'focusedChipIndex'
    | 'label'
    | 'labelPlacement'
    | 'placeholder'
    | 'renderValue'
    | 'size'
> & { isTargetAmount?: boolean };
