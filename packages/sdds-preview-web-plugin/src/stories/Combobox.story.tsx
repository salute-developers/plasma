import { IconDone } from '@salutejs/plasma-icons';
import { comboboxConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

import { regionItems } from './fixtures/regions';

const Combobox = component(mergeConfig(comboboxConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const comboboxArgs = [
    {
        name: 'label',
        value: 'Label',
    },
    {
        name: 'placeholder',
        value: 'Placeholder',
    },
    {
        name: 'helperText',
        value: 'Helper text',
    },
    {
        name: 'enableContentLeft',
        value: false,
    },
    {
        name: 'variant',
        value: 'normal',
        items: toItems(['normal', 'tight']),
    },
    {
        name: 'alwaysOpened',
        value: false,
    },
    {
        name: 'disabled',
        value: false,
    },
    {
        name: 'readOnly',
        value: false,
    },
    {
        name: 'required',
        value: false,
    },
    {
        name: 'optional',
        value: false,
    },
    {
        name: 'hasHint',
        value: false,
    },
    {
        name: 'hintText',
        value: 'Текст подсказки',
    },
];

const ComboboxSingle = {
    name: 'Default',
    args: comboboxArgs,
    render: function Story(args: any) {
        const [value, setValue] = useState('');
        const { enableContentLeft, ...rest } = args;

        return (
            <div style={{ width: '400px' }}>
                <Combobox
                    {...rest}
                    items={regionItems}
                    value={value}
                    onChange={setValue}
                    contentLeft={enableContentLeft ? <IconDone size={rest.size === 'xs' ? 'xs' : 's'} /> : undefined}
                />
            </div>
        );
    },
};

const ComboboxMultiple = {
    name: 'Multiple',
    args: comboboxArgs,
    render: function Story(args: any) {
        const [value, setValue] = useState<string[]>([]);
        const { enableContentLeft, ...rest } = args;

        return (
            <div style={{ width: '400px' }}>
                <Combobox
                    {...rest}
                    multiple
                    items={regionItems}
                    value={value}
                    onChange={setValue}
                    contentLeft={enableContentLeft ? <IconDone size={rest.size === 'xs' ? 'xs' : 's'} /> : undefined}
                />
            </div>
        );
    },
};

export const ComboboxStories = [ComboboxSingle, ComboboxMultiple];
