import { codeFieldConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const CodeField = component(mergeConfig(codeFieldConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const CodeFieldDefault = {
    name: 'Default',
    args: [
        {
            name: 'codeLength',
            value: 6,
            items: [4, 5, 6].map((value) => ({ value, label: String(value) })),
        },
        {
            name: 'caption',
            value: 'Caption',
        },
        {
            name: 'captionAlign',
            value: 'center',
            items: toItems(['left', 'center']),
        },
        {
            name: 'width',
            value: '',
        },
        {
            name: 'placeholder',
            value: '',
        },
        {
            name: 'inputMode',
            value: 'numeric',
            items: toItems(['numeric', 'text']),
        },
        {
            name: 'isError',
            value: false,
        },
        {
            name: 'itemErrorBehavior',
            value: 'remove-symbol',
            items: toItems(['remove-symbol', 'keep', 'forbid-enter']),
        },
        {
            name: 'codeErrorBehavior',
            value: 'keep',
            items: toItems(['remove-code', 'keep']),
        },
        {
            name: 'enableWebOTP',
            value: false,
        },
        {
            name: 'autoFocus',
            value: false,
        },
        {
            name: 'disabled',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const [value, setValue] = useState('');
        const { codeLength, width, placeholder, ...rest } = args;

        return (
            <CodeField
                {...rest}
                codeLength={Number(codeLength)}
                width={width || undefined}
                placeholder={placeholder || undefined}
                value={value}
                onChange={setValue}
            />
        );
    },
};

export const CodeFieldStories = [CodeFieldDefault];
