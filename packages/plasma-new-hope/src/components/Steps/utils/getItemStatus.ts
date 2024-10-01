import { StepItemProps, StepStatus } from '../ui';

export const getItemStatus = ({
    isUncontrolled,
    current,
    status,
    index,
    item,
}: {
    isUncontrolled: boolean;
    current?: number;
    status?: StepStatus;
    index: number;
    item: StepItemProps;
}) => {
    if (item.disabled) {
        return 'inactive';
    }

    if (!isUncontrolled) {
        return status || item.status || 'inactive';
    }

    if (current! > index) {
        return 'completed';
    }

    if (current === index) {
        return status || 'active';
    }

    return 'inactive';
};
