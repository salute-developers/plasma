import React from 'react';
import { CharacterId } from '@salutejs/client';

import { AssistantContext } from '../AssistantContext';

export function useAssistantCharacter(): CharacterId {
    const {
        state: { character },
    } = React.useContext(AssistantContext);

    return character;
}
