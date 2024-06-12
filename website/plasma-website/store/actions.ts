import type { Theme, WizardItemType, State } from './types';

export enum ActionTypes {
    SET_THEME = 'SET_THEME',
    SET_ITEM = 'SET_ITEM',
    SET_ITEM_COLOR = 'SET_ITEM_COLOR',
    SET_ITEM_SIZE = 'SET_ITEM_SIZE',
}

export type Action =
    | { type: ActionTypes.SET_THEME; payload: { theme: Theme } }
    | {
          type: ActionTypes.SET_ITEM;
          payload: {
              wizardItemType: WizardItemType;
              wizardItemName: string;
          };
      }
    | {
          type: ActionTypes.SET_ITEM_COLOR;
          payload: State['color'];
      }
    | {
          type: ActionTypes.SET_ITEM_SIZE;
          payload: State['size'];
      };

export const setTheme = (theme: Theme): Action => ({ type: ActionTypes.SET_THEME, payload: { theme } });

export const setWizardItem = (wizardItemType: WizardItemType, wizardItemName: string): Action => ({
    type: ActionTypes.SET_ITEM,
    payload: { wizardItemType, wizardItemName },
});

export const setIconColor = (payload: State['color']): Action => ({
    type: ActionTypes.SET_ITEM_COLOR,
    payload,
});

export const setIconSize = (payload: State['size']): Action => ({
    type: ActionTypes.SET_ITEM_SIZE,
    payload,
});
