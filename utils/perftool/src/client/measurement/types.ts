import { ComponentType } from 'react';

import { JSONSerializable } from '../../utils/types';

export type MeasurerConfig = {
    [key: string]: MeasurerConfig | Array<MeasurerConfig> | string | number | boolean;
};

export type TaskAim = 'increase' | 'decrease';

export type RunParams<C extends MeasurerConfig | void> = {
    /**
     * Component to test
     */
    Subject: ComponentType;
    /**
     * DOM node to render in
     */
    container: HTMLElement;
    /**
     * Task config
     */
    config: C;
};

export type Task<T extends JSONSerializable, C extends MeasurerConfig | void> = {
    /**
     * Internal id (for JSON reports)
     */
    id: string;
    /**
     * Flag indicating the result is unchanged if task is repeated
     */
    isIdempotent: T extends number ? boolean : true;
    /**
     * Applicable stabilizers for the task
     */
    availableStabilizers?: string[];
    /**
     * Display name
     */
    name: string;
    /**
     * Aim of the result values change
     */
    aim?: T extends number ? TaskAim : never;
    /**
     * Default config
     */
    defaultConfig: C;
    /**
     * Description (for UI reports)
     */
    description?: string;
    /**
     * Formatter function (for UI reports)
     */
    format?: (result: T) => string;
    /**
     * Task itself (measurer function)
     */
    run: (params: RunParams<C>) => Promise<T>;
};
