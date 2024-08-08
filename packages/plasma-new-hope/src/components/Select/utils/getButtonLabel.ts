import { GetButtonLabelProps } from '../ui/Target/ui/Button/Button.types';
import { isEmpty } from '../../../utils';

const getLabel = ({
    value,
    valueToItemMap,
    renderValue,
}: Omit<GetButtonLabelProps, 'label' | 'selectProps'>): string => {
    const { label } = valueToItemMap.get(value?.toString())!;

    return renderValue ? renderValue(value as string, label) : label;
};

export const getButtonLabel = ({
    value,
    valueToItemMap,
    label,
    renderValue,
    selectProps,
}: GetButtonLabelProps): string => {
    if (isEmpty(value)) {
        return label || '';
    }

    if (selectProps.multiselect && selectProps.isTargetAmount) {
        return `Выбрано: ${value.length}`;
    }

    if (selectProps.multiselect && Array.isArray(value)) {
        return value
            ?.map((itemValue) =>
                getLabel({
                    value: itemValue,
                    valueToItemMap,
                    renderValue,
                }),
            )
            .join(', ');
    }

    return getLabel({
        renderValue,
        value,
        valueToItemMap,
    });
};
