import { AssistantCharacterType } from '@salutejs/client';
import React from 'react';

import { AppStateContext } from '../components/PlasmaApp/AppStateContext';

export function useCharacter(): AssistantCharacterType {
    const {
        state: {
            ui: { character },
        },
    } = React.useContext(AppStateContext);

    return character;
}
