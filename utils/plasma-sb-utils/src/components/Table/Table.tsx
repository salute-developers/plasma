import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import {
    createDefaultComponent,
    createComplexComponent,
    createPaginationComponent,
    createInfiniteLoadingComponent,
} from './stories';

export type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    additionalComponents: {
        Dropdown: React.FC<any>;
        IconButton: React.FC<any>;
        ButtonGroup: React.FC<any>;
        Button: React.FC<any>;
        Pagination: React.FC<any>;
        LineSkeleton: React.FC<any>;
    };
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getTableStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;

    const buttonConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: buttonConfig,
        ...rest,
    });

    const DefaultComponent = createDefaultComponent(component);

    const Default = {
        render: (args: any) => <DefaultComponent {...args} />,
        parameters: {
            controls: {
                exclude: ['stickyHeader', 'maxHeight', 'enableSelection'],
            },
        },
    };

    const ComplexComponent = createComplexComponent(component, additionalComponents);

    const Complex = {
        render: (args: any) => <ComplexComponent {...args} />,
        args: {
            maxHeight: '400px',
            stickyHeader: true,
            enableSelection: true,
        },
        parameters: {
            controls: {
                exclude: ['hasTopContent', 'hasBottomContent'],
            },
        },
    };

    const PaginationComponent = createPaginationComponent(component, additionalComponents);

    const Pagination = {
        render: (args: any) => <PaginationComponent {...args} />,
        args: { stickyHeader: true, maxHeight: '300px' },
        parameters: {
            controls: {
                exclude: ['enableSelection', 'hasTopContent', 'hasBottomContent'],
            },
        },
    };

    const InfiniteLoadingComponent = createInfiniteLoadingComponent(component, additionalComponents);

    const InfiniteLoading = {
        render: (args: any) => <InfiniteLoadingComponent {...args} />,
        args: { stickyHeader: true, maxHeight: '400px' },
        parameters: {
            controls: {
                exclude: ['enableSelection', 'hasTopContent', 'hasBottomContent'],
            },
        },
    };

    return {
        meta,
        Default,
        Complex,
        Pagination,
        InfiniteLoading,
    };
};
