import { codeInputConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const CodeInput = component(mergeConfig(codeInputConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const CodeInputDefault = {
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
            items: toItems(['remove-symbol', 'forbid-enter']),
        },
        {
            name: 'codeErrorBehavior',
            value: 'remove-code',
            items: toItems(['remove-code', 'keep']),
        },
        {
            name: 'hidden',
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
        const { codeLength, width, ...rest } = args;

        return (
            <CodeInput
                {...rest}
                codeLength={Number(codeLength)}
                width={width || undefined}
                value={value}
                onChange={setValue}
            />
        );
    },
};

export const CodeInputStories = [CodeInputDefault];
