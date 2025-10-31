import type { UIEvent, ReactNode } from 'react';

import { ComboboxProps } from '../../Combobox.types';

export interface Props {
    items: ComboboxProps['items'];
    listMaxHeight: ComboboxProps['listMaxHeight'];
    onScroll?: (e: UIEvent<HTMLElement>) => void;
    virtual?: boolean;
    beforeList?: ReactNode;
    afterList?: ReactNode;
}
