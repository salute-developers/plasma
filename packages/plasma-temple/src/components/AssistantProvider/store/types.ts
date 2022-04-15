import { CharacterId, AssistantInsetsCommand, ThemeColorName } from '@salutejs/client';

import { Action as StateAction } from '../../../utils/createAction';

export type AssistantInsets = AssistantInsetsCommand['insets'];

export interface AssistantState {
    character: CharacterId;
    insets: AssistantInsets;
    theme: ThemeColorName;
}

export enum AssistantActionType {
    CHARACTER = 'character',
    INSETS = 'insets',
    THEME = 'theme',
}

export type CharacterAction = StateAction<AssistantActionType.CHARACTER, { character: CharacterId }>;
export type InsetsAction = StateAction<AssistantActionType.INSETS, { insets: AssistantInsets }>;
export type ThemeAction = StateAction<AssistantActionType.THEME, { theme: ThemeColorName }>;

export type AssistantAction = CharacterAction | InsetsAction | ThemeAction;
