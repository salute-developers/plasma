import React, { useEffect, useRef } from 'react';
import { useArgs } from 'storybook/preview-api';

import { disableProps, InSpacingDecorator } from '../../index';

const islandSeparations = ['none', 'shadow'];
const separations = ['none', 'shadow', 'divider'];

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['children'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Navigation/TabBar',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [
        (Story: any) => {
            const [args, updateArgs] = useArgs();
            const islandRef = useRef(args.island);

            useEffect(() => {
                if (islandRef.current === args.island) {
                    return;
                }

                const previousIsland = islandRef.current;
                islandRef.current = args.island;

                if (args.island) {
                    const next = args.separation === 'divider' ? 'none' : args.separation;
                    updateArgs({
                        islandSeparation: next,
                        ...(args.separation === 'divider' ? { separation: 'none' } : {}),
                    });
                } else if (previousIsland) {
                    updateArgs({ separation: args.islandSeparation ?? 'none' });
                }
            }, [args.island, args.islandSeparation, args.separation, updateArgs]);

            return React.createElement(Story);
        },
        InSpacingDecorator,
    ],
    component,
    args: {
        view: 'default',
        size: 'm',
        island: true,
        separation: 'none',
        islandSeparation: 'none',
        hasSelectedItemBackground: false,
        homeIndicator: true,
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
        island: {
            control: { type: 'boolean' },
        },
        separation: {
            options: separations,
            control: { type: 'select' },
            if: { arg: 'island', truthy: false },
        },
        islandSeparation: {
            name: 'separation',
            options: islandSeparations,
            control: { type: 'select' },
            if: { arg: 'island', truthy: true },
        },
        hasSelectedItemBackground: {
            control: { type: 'boolean' },
        },
        homeIndicator: {
            control: { type: 'boolean' },
        },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
