import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import {
    createSingleStory,
    createMultipleStory,
    createPredefinedStory,
    createCommonStory,
    createSelectAllStory,
} from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    disablePropsList?: string[];
    defaultArgs?: {};
    customGetContentRight?: (size: string, disabled?: boolean, readOnly?: boolean) => JSX.Element | undefined;
    additionalArgTypes?: {};
};

// По запросу дизайна appearance и hasDivider должны быть в начале списка контролов.
const pinLeadingControls = (meta: ReturnType<typeof createMeta>) => {
    const pin = (source: Record<string, unknown> = {}) => ({
        ...(source.appearance !== undefined ? { appearance: source.appearance } : {}),
        ...(source.hasDivider !== undefined ? { hasDivider: source.hasDivider } : {}),
        ...source,
    });

    return {
        ...meta,
        args: pin(meta.args),
        argTypes: pin(meta.argTypes),
        parameters: {
            controls: {
                sort: 'none' as const,
            },
        },
    };
};

export const getSelectStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, customGetContentRight, ...rest } = config;

    const selectConfig = getConfigVariations(componentConfig);

    const meta = pinLeadingControls(
        createMeta({
            component,
            componentConfig: selectConfig,
            ...rest,
        }),
    );

    const SingleStoryComponent = createSingleStory(component, customGetContentRight);

    const Single = {
        render: (args: any) => <SingleStoryComponent {...args} />,
        args: {
            closeAfterSelect: true,
        },
        parameters: {
            controls: {
                exclude: ['chipView', 'isTargetAmount', 'chipType', 'chipClickArea'],
            },
        },
    };

    const MultipleStoryComponent = createMultipleStory(component, customGetContentRight);

    const Multiselect = {
        render: (args: any) => <MultipleStoryComponent {...args} />,
        args: {
            closeAfterSelect: false,
        },
        parameters: {
            controls: {
                exclude: ['mode', 'multiselect'],
            },
        },
    };

    const PredefinedStoryComponent = createPredefinedStory(component, customGetContentRight);

    const Predefined = {
        render: (args: any) => <PredefinedStoryComponent {...args} />,
    };

    const CommonStoryComponent = createCommonStory(component);

    const Common = {
        render: (args: any) => <CommonStoryComponent {...args} />,
        parameters: {
            controls: {
                exclude: ['target', 'view'],
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

    return {
        meta,
        Single,
        Multiselect,
        Predefined,
        Common,
        SelectAll,
    };
};
