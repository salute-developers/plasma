import { disableProps, InSpacingDecorator } from '../../index';

import {
    shapes,
    captionAlignVariants,
    codeLengths,
    itemErrorBehaviorVariants,
    codeErrorBehaviorVariants,
    inputModes,
} from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['value', 'onChange', 'onFullCodeEnter', 'setIsError', 'allowedSymbols'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/CodeField',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            view: 'default',
            size: 'm',
            shape: 'default',
            codeLength: 6,
            caption: 'Caption',
            captionAlign: 'center',
            width: '',
            isError: false,
            itemErrorBehavior: 'remove-symbol',
            codeErrorBehavior: 'keep',
            autoFocus: true,
            disabled: false,
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            shape: {
                options: shapes,
                control: { type: 'select' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            isError: {
                control: { type: 'boolean' },
            },
            autoFocus: {
                control: { type: 'boolean' },
            },
            codeLength: {
                options: codeLengths,
                control: { type: 'select' },
            },
            inputMode: {
                options: inputModes,
                control: { type: 'select' },
            },
            itemErrorBehavior: {
                options: itemErrorBehaviorVariants,
                control: { type: 'select' },
            },
            codeErrorBehavior: {
                options: codeErrorBehaviorVariants,
                control: { type: 'select' },
            },
            caption: {
                control: { type: 'text' },
            },
            captionAlign: {
                options: captionAlignVariants,
                control: { type: 'select' },
            },
            width: {
                control: { type: 'text' },
            },
            placeholder: {
                control: { type: 'text' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
