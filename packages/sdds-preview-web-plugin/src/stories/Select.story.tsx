import { IconPlasma } from '@salutejs/plasma-icons';
import { component, mergeConfig, selectConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

import { regionItems } from './fixtures/regions';

const Select = component(mergeConfig(selectConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const selectArgs = [
    {
        name: 'target',
        value: 'textfield-like',
        items: toItems(['textfield-like', 'button-like']),
    },
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

const SelectSingle = {
    name: 'Default',
    args: selectArgs,
    render: function Story(args: any) {
        const [value, setValue] = useState('');
        const { enableContentLeft, ...rest } = args;

        return (
            <div style={{ width: '300px' }}>
                <Select
                    {...rest}
                    items={regionItems}
                    value={value}
                    onChange={setValue}
                    contentLeft={
                        enableContentLeft ? (
                            <IconPlasma size={rest.size === 'xs' ? 'xs' : 's'} color="inherit" />
                        ) : undefined
                    }
                />
            </div>
        );
    },
};

const SelectMultiple = {
    name: 'Multiple',
    args: selectArgs,
    render: function Story(args: any) {
        const [value, setValue] = useState<string[]>([]);
        const { enableContentLeft, ...rest } = args;

        return (
            <div style={{ width: '300px' }}>
                <Select
                    {...rest}
                    multiselect
                    items={regionItems}
                    value={value}
                    onChange={setValue}
                    contentLeft={
                        enableContentLeft ? (
                            <IconPlasma size={rest.size === 'xs' ? 'xs' : 's'} color="inherit" />
                        ) : undefined
                    }
                />
            </div>
        );
    },
};

export const SelectStories = [SelectSingle, SelectMultiple];
