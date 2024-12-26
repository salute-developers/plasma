import { TargetProps } from '../../Target.types';

export type TextfieldProps = Pick<
    TargetProps,
    | 'inputWrapperRef'
    | 'opened'
    | 'multiselect'
    | 'value'
    | 'label'
    | 'labelPlacement'
    | 'keepPlaceholder'
    | 'placeholder'
    | 'onKeyDown'
    | 'size'
    | 'view'
    | 'contentLeft'
    | 'helperText'
    | 'treeId'
    | 'activeDescendantItemValue'
    | 'disabled'
    | 'isTargetAmount'
    | 'valueToItemMap'
    | 'renderValue'
    | 'onChange'
    | 'labelToItemMap'
    | 'chipView'
    | 'requiredProps'
    | 'chipType'
>;
