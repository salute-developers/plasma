import { isEmpty } from '../../../utils';
import { GetButtonLabelProps } from '../ui/Target/ui/Button/Button.types';

const getLabel = ({
    value,
    valueToItemMap,
    renderValue,
}: Omit<GetButtonLabelProps, 'label' | 'selectProps' | 'value'> & { value: any }): string => {
    const label = valueToItemMap.get(value)?.label || value.toString();

    return renderValue ? renderValue(valueToItemMap.get(value) || { value, label }) : label;
};

export const getButtonLabel = ({
    value,
    valueToItemMap,
    label,
    renderValue,
    selectProps,
}: GetButtonLabelProps): string => {
    if (isEmpty(value) && typeof value !== 'number') {
        return label || '';
    }

    if (selectProps.multiselect && Array.isArray(value) && selectProps.isTargetAmount) {
        return `Выбрано ${value.length}`;
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
        value,
        valueToItemMap,
        renderValue,
    });
};
