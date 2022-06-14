import { AssistantClientCustomizedCommand, AssistantSmartAppData } from '@salutejs/client';

import { AnyObject } from '../../types';

import { History } from './store/types';
import { PushScreenFn } from './hooks/useScreens';

export interface RouterProvider {
    back: () => void;
    push: (name: string, params?: unknown) => void;
    go: (delta: number) => void;
}

export type OnPopStateFn<
    PageStateType extends AnyObject = AnyObject,
    PageParamsType extends Partial<Record<keyof PageStateType, unknown>> = Partial<Record<keyof PageStateType, unknown>>
> = (params: {
    currentHistory: History;
    event: PopStateEvent;
    pushHistory: <T extends keyof PageStateType>(name: T, data: PageStateType[T]) => void;
    pushScreen: PushScreenFn<PageStateType, PageParamsType>;
    goToScreen: <T extends keyof PageStateType>(name: T) => void;
}) => void;

export type OnStartFn<
    PageStateType extends AnyObject = AnyObject,
    PageParamsType extends Partial<Record<keyof PageStateType, unknown>> = Partial<Record<keyof PageStateType, unknown>>
> = (params: {
    pushHistory: <T extends keyof PageStateType>(name: T, data: PageStateType[T]) => void;
    pushScreen: PushScreenFn<PageStateType, PageParamsType>;
}) => void;

export type OnDataFn<
    Command extends AssistantSmartAppData = AssistantSmartAppData,
    PageStateType extends AnyObject = AnyObject,
    PageParamsType extends Partial<Record<keyof PageStateType, unknown>> = Partial<Record<keyof PageStateType, unknown>>
> = (params: {
    command: AssistantClientCustomizedCommand<Command>;
    pushHistory: <T extends keyof PageStateType>(name: T, data: PageStateType[T]) => void;
    pushScreen: PushScreenFn<PageStateType, PageParamsType>;
    goToScreen: <T extends keyof PageStateType>(name: T) => void;
    popScreen: () => void;
}) => void;

export interface ScreensProviderProps {
    /** Обеспечивает историю переходов по истории браузера. По умолчанию используется `Window.history` */
    provider?: RouterProvider;
    /** Колбэк, вызываемый на событие `popstate` */
    onPopState?: OnPopStateFn;
}
