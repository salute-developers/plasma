import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';
import React, { ComponentProps, useEffect } from 'react';
import { IconCross } from '@salutejs/plasma-icons';

import { Button } from '../Button';

import { config } from './Loader.config';

import { Loader } from '.';

const { views, sizes } = getConfigVariations(config);

const sizeSpinner = ['s', 'm', 'l'];

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
            if: {
                arg: 'type',
                eq: 'spinner',
            },
        },
        type: {
            options: ['spinner', 'progress'],
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
            description: 'Z-index для loader і overlay',
            if: {
                arg: 'hasOverlay',
                eq: true,
            },
        },
    },
};

export default meta;

const getContent = (value: number, size?: string) => {
    if (size === 'xxl' || size === 'xl') {
        if (value >= 100) {
            return '100%';
        }
        if (value <= 0) {
            return '0%';
        }
        return `${value}%`;
    }

    if (size !== 'xxs') {
        return <IconCross size={size === 'l' ? 's' : 'xs'} />;
    }

    return '';
};

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
            {toggle && (
                <Loader size={args.spinnerSize ?? args.progressSize ?? 'm'} maxValue={100} value={progress} {...args}>
                    {getContent(progress, args.progressSize)}
                </Loader>
            )}
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        progressSize: 'm',
        spinnerSize: 'm',
        hasOverlay: false,
        type: 'spinner',
        hasTrack: true,
    },
    render: ({ ...args }) => {
        return <LoaderContent {...args} />;
    },
};
