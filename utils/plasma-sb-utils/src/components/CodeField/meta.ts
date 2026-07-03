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
                table: { category: 'variation' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            shape: {
                options: shapes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            isError: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            autoFocus: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            codeLength: {
                options: codeLengths,
                control: { type: 'select' },
                table: { category: 'code-related' },
            },
            inputMode: {
                options: inputModes,
                control: { type: 'select' },
                table: { category: 'code-related', subcategory: 'MOBILE INPUT' },
            },
            itemErrorBehavior: {
                options: itemErrorBehaviorVariants,
                control: { type: 'select' },
                table: { category: 'code-related' },
            },
            codeErrorBehavior: {
                options: codeErrorBehaviorVariants,
                control: { type: 'select' },
                table: { category: 'code-related' },
            },
            caption: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            captionAlign: {
                options: captionAlignVariants,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            width: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            placeholder: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
