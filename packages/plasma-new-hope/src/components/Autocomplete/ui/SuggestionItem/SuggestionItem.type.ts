import type { ReactNode } from 'react';

import { SuggestionItemType } from '../../Autocomplete.types';

export interface SuggestionItemProps {
    id: string;
    item: SuggestionItemType;
    onClick: (data: SuggestionItemType) => void;
    focused: boolean;
    renderItem?: (item: SuggestionItemType) => ReactNode;
}
