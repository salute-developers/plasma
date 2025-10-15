import type { UIEvent, ReactNode } from 'react';

import { MergedSelectProps } from '../../Select.types';

export interface Props {
    items: MergedSelectProps['items'];
    listMaxHeight: MergedSelectProps['listMaxHeight'];
    onScroll?: (e: UIEvent<HTMLElement>) => void;
    virtual?: boolean;
    beforeList?: ReactNode;
    afterList?: ReactNode;
}
