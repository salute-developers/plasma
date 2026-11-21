import React, { KeyboardEventHandler, ReactNode, Ref } from 'react';

import type { TextValueProps } from '../../../../TextField/TextField.types';
import type { ComboboxProps, Value } from '../../../Combobox.types';
import type { ValueToItemMapType } from '../../../hooks';

type Props = {
    multiple?: ComboboxProps['multiple'];
    value?: Value;
    opened?: boolean;
    renderTarget: ComboboxProps['renderTarget'];
    valueToItemMap: ValueToItemMapType;
    inputWrapperRef?: Ref<HTMLElement>;
    onClick?: () => void;
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
    textValue?: string;
    onTextValueChange?: TextValueProps['onTextValueChange'];
};

export const RenderTarget: React.FC<Props> = ({
    multiple,
    value,
    opened,
    renderTarget,
    valueToItemMap,
    inputWrapperRef,
    onClick,
    onKeyDown,
    textValue = '',
    onTextValueChange,
}) => {
    const textProps = { textValue, onTextValueChange };

    let content: ReactNode;

    if (multiple) {
        const selectedItems = ((value as string[]) || [])
            .map((itemValue) => valueToItemMap.get(itemValue))
            .filter((item): item is NonNullable<typeof item> => Boolean(item));

        content = (renderTarget as any)(selectedItems, opened, textProps);
    } else {
        const selectedItem = valueToItemMap.get(value as string) ?? null;

        content = (renderTarget as any)(selectedItem, opened, textProps);
    }

    return (
        <div ref={inputWrapperRef as Ref<HTMLDivElement>} onClick={onClick} onKeyDown={onKeyDown}>
            {content}
        </div>
    );
};
