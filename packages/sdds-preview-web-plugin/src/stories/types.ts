import type { ComponentType } from 'react';

export interface StoryArgItem {
    /** У части story (`ProgressBarCircular`, `Card`, `Rating`) значения пунктов — числа. */
    value: string | number;
    label: string;
}

/** Аргумент story в формате stories клиента: значение по умолчанию и, для выбора, список значений. */
export interface StoryArg {
    name: string;
    value: string | boolean | number;
    items?: StoryArgItem[];
}

export interface WebStory {
    name: string;
    args: StoryArg[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: ComponentType<any>;
}
