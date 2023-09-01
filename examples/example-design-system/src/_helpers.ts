import { ComponentConfig } from "@salutejs/plasma-new-hope";

import { ArgTypes } from '@storybook/react';

export function argTypesFromConfig(config: ComponentConfig) {

    const { defaults, variations } = config;

    const argTypes: ArgTypes = {};
    for (const [key, val] of Object.entries(variations)) {
        const control: ArgTypes[''] = {
            control: {}
        };
        if (val['true']) {
            control.control.type = 'boolean';
            control.defaultValue = false;
        } else {
            control.control.type = 'select';
            control.options = Object.keys(val).filter(name => name !== 'css');
        }

        const defaultValue = defaults[key];
        if (defaultValue) {
            control.defaultValue = val['true'] ? Boolean(defaultValue) : defaultValue;
        }

        argTypes[key] = control;
    }

    return argTypes;
}