import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, getConfigVariations, disableProps } from '@salutejs/plasma-sb-utils';
import React, { ComponentProps, useEffect } from 'react';
import { IconCross } from '@salutejs/plasma-icons';

import { Button } from '../Button';

import { config } from './Loader.config';

import { Loader } from '.';

const { views, sizes } = getConfigVariations(config);

const sizeSpinner = ['s', 'l', 'xl'];

type StoryPropsDefault = ComponentProps<typeof Loader> & {
    progressSize?: string;
    spinnerSize?: string;
};

const meta: Meta<StoryPropsDefault> = {
    title: 'Overlay/Loader',
    component: Loader,
    decorators: [InSpacingDecorator],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        spinnerSize: {
            options: sizeSpinner,
            control: {
                type: 'select',
            },
        },
        type: {
            options: ['spinner'],
            control: {
                type: 'select',
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
            description: 'Z-index для loader і overlay',
            if: {
                arg: 'hasOverlay',
                eq: true,
            },
        },
        ...disableProps(['type', 'progressSize', 'hasTrack', 'strokeSize']),
    },
};

export default meta;

const LoaderContent = (args) => {
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
        <div style={{ position: 'relative', width: '100%' }}>
            <Button onClick={() => setToggle(true)}>Show Loader</Button>
            {toggle && <Loader size={args.spinnerSize ?? 's'} {...args} />}
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        spinnerSize: 's',
        hasOverlay: false,
    },
    render: ({ ...args }) => {
        return <LoaderContent {...args} />;
    },
};
