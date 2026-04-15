import { TargetProps } from '../../Target.types';

export type ButtonProps = Pick<
    TargetProps,
    | 'opened'
    | 'value'
    | 'valueToItemMap'
    | 'onKeyDown'
    | 'label'
    | 'size'
    | 'disabled'
    | 'renderValue'
    | 'treeId'
    | 'activeDescendantItemValue'
    | 'multiselect'
    | 'isTargetAmount'
>;

export type GetButtonLabelProps = Required<
    Pick<ButtonProps, 'value' | 'valueToItemMap' | 'label' | 'renderValue' | 'multiselect' | 'isTargetAmount'>
>;
