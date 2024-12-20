import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { IconMic } from '../../../../components/_Icon';
import { WithTheme } from '../../../_helpers';

import { Button } from './Button';
import { config } from './Button.config';

const sizesWeights = {
    xxs: 0,
    xxsr: 0.5,
    xs: 1,
    xsr: 1.5,
    s: 2,
    sr: 2.5,
    m: 3,
    mr: 3.5,
    l: 4,
    lr: 4.5,
    xl: 5,
    xlr: 5.5,
    xxl: 6,
    xxlr: 6.5,
};

const nonExistSizeWeight = 100;

const sortSizes = (sizes: string[]) => {
    return sizes.sort((a, b) => {
        return (sizesWeights[a] ?? nonExistSizeWeight) - (sizesWeights[b] ?? nonExistSizeWeight);
    });
};

const viewsWeights = {
    default: 0,
};

const nonExistViewWeight = 100;

const sortViews = (views: string[]) => {
    return views.sort((a, b) => (viewsWeights[a] ?? nonExistViewWeight) - (viewsWeights[b] ?? nonExistViewWeight));
};

const getConfigVariations = () => {
    const sortLexicographically = (keys: string[]) => keys.sort((a, b) => a.localeCompare(b));

    const filterCss = (keys: string[]) => keys.filter((keys) => keys !== 'css');

    const viewsKeys = filterCss(Object.keys(config.variations.view));
    const sizesKeys = filterCss(Object.keys(config.variations.size));

    return {
        views: sortViews(sortLexicographically(viewsKeys)),
        sizes: sortSizes(sizesKeys),
    };
};

const { views, sizes } = getConfigVariations(config);

const stretchingValues = ['auto', 'filled', 'fixed'];
const pinValues = [
    '',
    'square-square',
    'square-clear',
    'clear-square',
    'clear-clear',
    'clear-circle',
    'circle-clear',
    'circle-circle',
];
const contentPlacinValues = ['default', 'relaxed'];
const sizeMap = {
    xxs: '0.75rem', // 12px
    xs: '1rem', // 16px
    s: '1.5rem', // 24px
    m: '1.5rem', // 36px
    l: '1.5rem', // 44px
    xl: '1.5rem', // 56px
    xxl: '1.5rem', // 100px
};

const meta: Meta<typeof Button> = {
    title: 'b2c/Data Entry/Button',
    decorators: [WithTheme],
    component: Button,
    args: {
        view: 'default',
        size: 'm',
        contentPlacing: 'default',
        stretching: 'auto',
        text: 'Hello',
        disabled: false,
        focused: true,
        square: false,
        isLoading: false,
    },
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        contentPlacing: {
            options: contentPlacinValues,
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: stretchingValues,
            control: {
                type: 'select',
            },
        },
        pin: {
            options: pinValues,
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
        ...disableProps(['value', 'focused', 'pin']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Button> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    return (
        <Button
            contentLeft={enableContentLeft ? <IconMic sizeCustomValue={sizeMap[size]} color="inherit" /> : undefined}
            contentRight={enableContentRight ? <IconMic sizeCustomValue={sizeMap[size]} color="inherit" /> : undefined}
            size={size}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        enableContentLeft: false,
        enableContentRight: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

export const WithValue: StoryObj<StoryPropsDefault> = {
    args: {
        enableContentLeft: false,
    },
    argTypes: {
        ...disableProps(['enableContentRight']),
    },
    render: (args) => <StoryDefault {...args} />,
};

export const AccessibilityWithChildren: StoryObj<ComponentProps<typeof Button>> = {
    argTypes: { ...disableProps(['text']) },
    render: (props: ComponentProps<typeof Button>) => {
        const args = { ...props, text: undefined };

        return (
            <Button {...args}>
                <IconMic color="inherit" sizeCustomValue={sizeMap[args.size]} />
                <span>Включить микрофон</span>
            </Button>
        );
    },
};
