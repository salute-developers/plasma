import { SelectNewProps } from '../../SelectNew.types';

export type TargetProps = Pick<SelectNewProps, 'value' | 'multiselect' | 'isTargetAmount' | 'target' | 'label'> & {
    opened: boolean;
    valueToItemMap: any;
    onChipClick: (value: string) => void;
};
