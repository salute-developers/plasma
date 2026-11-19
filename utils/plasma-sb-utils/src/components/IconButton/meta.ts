import { disableProps, InSpacingDecorator, exampleOnly } from '../../index';

import { appearances, pinValues } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
    outlineViews?: string[];
};

const commonDisabledArgs = [
    'focused',
    'children',
    'theme',
    'loader',
    'onClick',
    'onFocus',
    'onBlur',
    'contentLeft',
    'contentRight',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/IconButton',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
    outlineViews,
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            view: 'default',
            size: 'm',
            disabled: false,
            focused: true,
            isLoading: false,
            ...(outlineViews
                ? {
                      appearance: 'default',
                      viewOutline: 'default',
                  }
                : {}),
            ...defaultArgs,
        },
        argTypes: {
            ...(outlineViews
                ? {
                      appearance: {
                          options: appearances,
                          control: { type: 'select' },
                      },
                  }
                : {}),
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
                ...(outlineViews
                    ? {
                          name: 'view',
                          if: { arg: 'appearance', eq: 'default' },
                      }
                    : {}),
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            ...(outlineViews
                ? exampleOnly({
                      viewOutline: {
                          name: 'view',
                          options: outlineViews,
                          control: { type: 'select' },
                          if: { arg: 'appearance', eq: 'outline' },
                      },
                  })
                : {}),
            pin: {
                options: pinValues,
                control: { type: 'select' },
                table: { defaultValue: { summary: 'bottom' } },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            isLoading: {
                control: { type: 'boolean' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
