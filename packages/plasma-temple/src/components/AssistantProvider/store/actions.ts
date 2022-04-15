import { CharacterId, ThemeColorName } from '@salutejs/client';

import { createAction } from '../../../utils/createAction';

import { AssistantActionType, CharacterAction, InsetsAction, AssistantInsets, ThemeAction } from './types';

export const setCharacter = (character: CharacterId): CharacterAction =>
    createAction(AssistantActionType.CHARACTER, { character });

export const setInsets = (insets: AssistantInsets): InsetsAction =>
    createAction(AssistantActionType.INSETS, { insets });

export const setTheme = (theme: ThemeColorName): ThemeAction => createAction(AssistantActionType.THEME, { theme });
