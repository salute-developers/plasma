import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createAddItemStory, createMultipleStory, createSelectAllStory, createSingleStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getComboboxStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const comboboxConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: comboboxConfig,
        ...rest,
    });

    const SingleStoryComponent = createSingleStory(component);

    const Single = {
        render: (args: any) => <SingleStoryComponent {...args} />,
        args: {
            closeAfterSelect: true,
        },
        parameters: {
            controls: {
                exclude: ['isTargetAmount', 'targetAmount', 'chipClickArea'],
            },
        },
    };

    const MultipleStoryComponent = createMultipleStory(component);

    const Multiple = {
        render: (args: any) => <MultipleStoryComponent {...args} />,
        parameters: {
            controls: {
                exclude: ['mode'],
            },
        },
    };

    const SelectAllStoryComponent = createSelectAllStory(component);

    const SelectAll = {
        render: (args: any) => <SelectAllStoryComponent {...args} />,
        argTypes: {
            selectAllSticky: {
                control: 'boolean',
            },
            selectAllLabel: {
                control: 'text',
            },
        },
        args: {
            selectAllSticky: false,
            selectAllLabel: 'Выбрать все',
        },
        parameters: {
            controls: {
                include: ['selectAllSticky', 'selectAllLabel'],
            },
        },
    };

    const AddItemStoryComponent = createAddItemStory(component);

    const AddItem = {
        render: (args: any) => <AddItemStoryComponent {...args} />,
        args: {
            emptyStateDescription: 'Нажмите Enter, чтобы добавить значение в список.',
            helperText: 'Введите новое слово',
        },
        parameters: {
            controls: {
                include: ['helperText', 'emptyStateDescription'],
            },
        },
    };

    return {
        meta,
        Single,
        Multiple,
        SelectAll,
        AddItem,
    };
};
