import { GetButtonLabelProps } from '../elements/Target/elements/Button/Button.types';
import { isEmpty } from '../../../utils';

const getLabel = ({ renderValue, value, valueToItemMap }: GetButtonLabelProps) => {
    const { label } = valueToItemMap.get(value.toString())!;

    return renderValue ? renderValue(value as string, label) : label;
};

export const getButtonLabel = ({
    value,
    label,
    isTargetAmount,
    multiselect,
    valueToItemMap,
    renderValue,
}: GetButtonLabelProps) => {
    if (isEmpty(value)) {
        return label;
    }

    if (multiselect && isTargetAmount) {
        return `Выбрано: ${value.length}`;
    }

    if (multiselect && Array.isArray(value)) {
        return value
            .map((itemValue) =>
                getLabel({
                    renderValue,
                    value: itemValue,
                    valueToItemMap,
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
