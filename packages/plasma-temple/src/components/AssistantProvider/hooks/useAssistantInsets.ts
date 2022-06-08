import React from 'react';

import { Insets } from '../../../types';
import { AssistantContext } from '../AssistantContext';

export function useAssistantInsets(): Insets {
    const {
        state: { insets },
    } = React.useContext(AssistantContext);

    return React.useMemo(() => {
        const devicePixelRatio =
            process.env.NODE_ENV === 'development' || typeof window === 'undefined' ? 1 : window.devicePixelRatio;
        const { top, bottom, left, right } = insets;

        return {
            top: top / devicePixelRatio,
            bottom: bottom / devicePixelRatio,
            left: left / devicePixelRatio,
            right: right / devicePixelRatio,
        };
    }, [insets]);
}
