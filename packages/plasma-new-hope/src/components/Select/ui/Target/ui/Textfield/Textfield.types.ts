import { TargetProps } from '../../Target.types';

export type TextfieldProps = Pick<
    TargetProps,
    | 'inputWrapperRef'
    | 'opened'
    | 'multiselect'
    | 'value'
    | 'label'
    | 'placeholder'
    | 'onKeyDown'
    | 'labelPlacement'
    | 'size'
    | 'view'
    | 'handleClickArrow'
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
