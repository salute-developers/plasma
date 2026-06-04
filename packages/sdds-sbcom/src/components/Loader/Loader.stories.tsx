import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';
import React, { ComponentProps, useEffect } from 'react';

import { config } from './Loader.config';

import { Loader } from '.';

const { views, sizes } = getConfigVariations(config);

const sizeSpinner = ['40', '32', '24', '16'] as const;

type StoryPropsDefault = ComponentProps<typeof Loader> & {
    progressSize?: string;
    spinnerSize?: typeof sizeSpinner;
};

const meta: Meta<StoryPropsDefault> = {
    title: 'Overlay/⚠️ Loader',
    component: Loader,
    decorators: [InSpacingDecorator],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        progressSize: {
            options: sizes,
            control: {
                type: 'select',
            },
            if: {
                arg: 'type',
                eq: 'progress',
            },
        },
        spinnerSize: {
            options: sizeSpinner,
            control: {
                type: 'select',
            },
        },
        strokeSize: {
            options: [2, 4, 6, 8],
            control: {
                type: 'radio',
            },
            if: {
                arg: 'type',
                eq: 'progress',
            },
        },
        hasOverlay: {
            control: {
                type: 'boolean',
            },
            description: 'Наличие overlay на фоне',
        },
        overlayColor: {
            control: {
                type: 'color',
            },
            if: {
                arg: 'hasOverlay',
                eq: true,
            },
        },
        withBlur: {
            control: {
                type: 'boolean',
            },
            description: 'Применить blur эффект к overlay',
            if: {
                arg: 'hasOverlay',
                eq: true,
            },
        },
        zIndex: {
            control: {
                type: 'text',
            },
            description: 'Z-index для loader и overlay',
            if: {
                arg: 'hasOverlay',
                eq: true,
            },
        },
    },
};

export default meta;

const LoaderContent = (args: StoryPropsDefault) => {
    const [progress, setProgress] = React.useState(0);
    const [toggle, setToggle] = React.useState(false);

    useEffect(() => {
        let counter = 0;
        const interval = setInterval(() => {
            if (counter < 100 && toggle) {
                counter++;
                setProgress(counter);
            } else if (counter === 100 && toggle) {
                counter++;
                clearInterval(interval);
                setTimeout(() => {
                    setProgress(0);
                    setToggle(false);
                }, 300);
            }
        }, 300);
    }, [toggle, setProgress]);

    return (
        // <div style={{ position:'relative' }}>
        <Loader size={args.spinnerSize ?? '40'} maxValue={100} value={progress} type="spinner" {...args} />
        /* <IconCross size={'m'} /> */
        /* </Loader> */
        // </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'white',
        progressSize: 'm',
        spinnerSize: '40',
        hasOverlay: false,
        hasTrack: true,
    },
    render: ({ ...args }) => {
        return <LoaderContent {...args} />;
    },
};
