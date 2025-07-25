import type { ReactNode } from 'react';

import type { HintProps } from '../Hint/Hint.types';

export type LabelComponentProps = {
    hasRequiredIndicator?: boolean;
    requiredIndicatorPlacement?: 'right' | 'left';
    optional?: boolean;
    optionalText?: string;
    label?: string;
    labelHtmlFor?: string | undefined;
    titleCaption?: ReactNode;
    hintText?: string;
    disabled?: boolean;
} & Omit<HintProps, 'hintText' | 'isHintVisible' | 'handleHintShow' | 'handleHintHide' | 'handleHintClick'>;
