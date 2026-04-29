import type { UIEvent, ReactNode } from 'react';

import { SelectProps } from '../../Select.types';

export interface Props {
    items: SelectProps['items'];
    listMaxHeight: SelectProps['listMaxHeight'];
    emptyStateDescription: SelectProps['emptyStateDescription'];
    onScroll?: (e: UIEvent<HTMLElement>) => void;
    virtual?: boolean;
    beforeList?: ReactNode;
    afterList?: ReactNode;
}
