'use client';
import { createContext, Dispatch, ReactNode, useContext } from 'react';

import { useImmerReducer } from 'use-immer';

export type modName = string;
export type modValue = string;
export type componentName = string;

export type tokenName = string;
export type tokenValue = string;

export interface ModifierTheme {
    [key: modValue]: Record<tokenName, tokenValue>;
}

export interface ComponentTheme {
    variations: {
        [key: modName]: ModifierTheme;
    }
    defaults: {
        [key: modName]: modValue;
    }
}

export interface ThemeState {
    name: string;
    components: {
        [key: componentName]: ComponentTheme;
    };
}

const ThemeContext = createContext<ThemeState | null>(null);
const ThemeDispatchContext = createContext<Dispatch<Action> | null>(null);

export function ThemeProvider({ children, initialTheme }: { children: ReactNode; initialTheme: ThemeState }) {
    const [theme, dispatch] = useImmerReducer(themeReducer, initialTheme);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext)!;
}

export function useThemeDispatch() {
    return useContext(ThemeDispatchContext)!;
}

type Action =
    | {
          type: 'update_tokens';
          componentName: string;
          modName: string;
          modValue: string;
          tokens: Record<tokenName, tokenValue>;
      }
    | {
          type: 'remove_tokens';
          componentName: string;
          modName: string;
          modValue: string;
      }
    | {
          type: 'add_modifier';
          componentName: string;
          modName: string;
          modValue: string;
      }
    | {
        type: 'set_default';
        componentName: string;
        modName: string;
        modValue: string;
    };

export function themeReducer(theme: ThemeState, action: Action) {
    console.log('ACTION ===>', action);

    switch (action.type) {
        case 'update_tokens': {
            const { componentName, modName, modValue } = action;
            theme.components[componentName].variations[modName][modValue] = action.tokens;
            break;
        }
        case 'remove_tokens': {
            const { componentName, modName, modValue } = action;
            delete theme.components[componentName].variations[modName][modValue];
            delete theme.components[componentName].defaults[modName];
            break;
        }
        case 'add_modifier': {
            const { componentName, modName, modValue } = action;
            theme.components[componentName].variations[modName] = {
                ...theme.components[componentName].variations[modName],
                [modValue]: {},
            };
            break;
        }
        case 'set_default': {
            const { componentName, modName, modValue } = action;
            theme.components[componentName].defaults[modName] = modValue;
            break;
        }
    }
}
