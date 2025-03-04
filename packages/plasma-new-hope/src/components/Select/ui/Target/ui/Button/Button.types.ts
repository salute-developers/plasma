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
    | 'selectProps'
    | 'separator'
    | 'treeId'
    | 'activeDescendantItemValue'
>;

export type GetButtonLabelProps = Pick<
    ButtonProps,
    'value' | 'valueToItemMap' | 'label' | 'renderValue' | 'selectProps'
>;
