import { disableProps, InSpacingDecorator } from '../../index';

import { underlineOptions } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs: string[] = [];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Navigation/Link',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            text: 'приложение',
            href: 'https://google.com',
            view: 'default',
            disabled: false,
            focused: true,
            underline: 'none',
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            focused: {
                control: { type: 'boolean' },
            },
            underline: {
                options: underlineOptions,
                control: { type: 'select' },
            },
            text: {
                control: { type: 'text' },
            },
            href: {
                control: { type: 'text' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
