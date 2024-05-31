import type { Theme, WizardItemType } from './types';

export enum ActionTypes {
    SET_THEME = 'SET_THEME',
    SET_ITEM = 'SET_ITEM',
    SET_ITEM_COLOR = 'SET_ITEM_COLOR',
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
          payload: {
              value: string;
              label: string;
          };
      };

export const setTheme = (theme: Theme): Action => ({ type: ActionTypes.SET_THEME, payload: { theme } });

export const setWizardItem = (wizardItemType: WizardItemType, wizardItemName: string): Action => ({
    type: ActionTypes.SET_ITEM,
    payload: { wizardItemType, wizardItemName },
});

export const setIconColor = (payload: { value: string; label: string }): Action => ({
    type: ActionTypes.SET_ITEM_COLOR,
    payload,
});
