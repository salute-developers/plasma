import React, { ReactNode, Ref } from 'react';

import { TargetProps } from '../../Target.types';

type Props = Pick<TargetProps, 'multiselect' | 'value' | 'opened' | 'renderTarget' | 'valueToItemMap'> & {
    inputWrapperRef?: Ref<HTMLElement>;
};

export const RenderTarget: React.FC<Props> = ({
    multiselect,
    value,
    opened,
    renderTarget,
    valueToItemMap,
    inputWrapperRef,
}) => {
    let content: ReactNode;

    if (multiselect) {
        const selectedItems = (value as string[])
            .map((itemValue) => valueToItemMap.get(itemValue))
            .filter((item): item is NonNullable<typeof item> => Boolean(item));

        content = (renderTarget as any)(selectedItems, opened);
    } else {
        const selectedItem = valueToItemMap.get(value as string) ?? null;

        content = (renderTarget as any)(selectedItem, opened);
    }

    return <div ref={inputWrapperRef as Ref<HTMLDivElement>}>{content}</div>;
};
