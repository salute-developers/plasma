import {
    AssistantInsetsCommand,
    AssistantNavigationCommand,
    AssistantSmartAppData,
    createAssistant,
} from '@salutejs/client';
import type { PriceProps, Ratio } from '@salutejs/plasma-ui';
import { DeviceKind } from '@salutejs/plasma-ui/utils';
import { StyledComponent } from 'styled-components';

// infer component props from @salutejs/plasma-core
export type GetStyledComponentProps<T> = T extends StyledComponent<'div', any, infer T1, never> ? T1 : any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = Record<string, any>;

export type PickOptional<S, K extends keyof S> = Partial<Pick<S, K>>;
export type AspectRatio = Ratio;

export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export type ObjectPosition = 'bottom' | 'center' | 'left' | 'right' | 'top' | 0 | string;

export type Axis = 'x' | 'y';

export type Direction = AssistantNavigationCommand['navigation']['command'];

export type DeviceFamily = DeviceKind;

export type Currency = PriceProps['currency'];

export type Insets = AssistantInsetsCommand['insets'];

export interface AssistantAction {
    type: string;
    payload: Record<string, unknown>;
}

export interface AssistantDataAction extends AssistantSmartAppData {
    action: AssistantAction;
}

export interface SmartAppDataAction<A extends Record<string, unknown>> extends AssistantSmartAppData {
    // eslint-disable-next-line camelcase
    smart_app_data: A;
}

export type AssistantInstance = ReturnType<typeof createAssistant>;

export interface MetaPayload {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta?: Record<string, any>;
}

export interface Description {
    title: string;
    content: string;
}

export interface MediaObject {
    src: string[] | string;
    ratio?: AspectRatio;
    customRatio?: string;
    covered?: boolean;
}

export interface AssistantAppStateItem {
    title: string;
    number?: number;
    id?: string;
    action?: {
        type: string;
        payload?: Record<string, unknown>;
    };
}

export interface AssistantAppState {
    // eslint-disable-next-line camelcase
    item_selector: {
        items: Array<AssistantAppStateItem>;
    };
    screen?: string;
    [key: string]: unknown;
}

export interface Entity<ID = string> {
    name: string;
    id: ID;
}
