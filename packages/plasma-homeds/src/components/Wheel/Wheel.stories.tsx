import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { useArgs, useEffect } from 'storybook/preview-api';
import { getWheelStories } from '@salutejs/plasma-sb-utils';

import { Wheel } from './Wheel';
import { config } from './Wheel.config';

const { meta: META, Default, CustomItems, CustomSeparator, DependentColumns } = getWheelStories({
    component: Wheel,
    componentConfig: config,
});

const meta: Meta<typeof Wheel> = {
    ...META,
    args: META.args as Meta<typeof Wheel>['args'],
    argTypes: META.argTypes as Meta<typeof Wheel>['argTypes'],
    title: 'Data Entry/Wheel',
    decorators: [
        ...META.decorators,
        (Story, { args }) => {
            const [, updateArgs] = useArgs();
            useEffect(() => {
                updateArgs({
                    textAfterMode: args.size === 'h4' ? 'static' : 'dynamic',
                    hasDescription: args.size !== 'h4',
                    hasControls: args.size !== 'h4',
                    ...(args.size === 'h4' ? { view: 'highlighted' } : {}),
                });
            }, [args.size]);
            return args.size === 'h4' ? (
                <div style={{ width: args.width ?? '348px' }}>
                    <Story args={{ ...args, width: args.width ?? '100%' }} />
                </div>
            ) : (
                <Story />
            );
        },
    ],
};

export default meta;
export { Default, CustomItems, CustomSeparator, DependentColumns };
