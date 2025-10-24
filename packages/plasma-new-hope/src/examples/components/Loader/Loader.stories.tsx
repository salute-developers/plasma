import React, { ComponentProps, useEffect } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { IconCrossThin } from '../../../components/_Icon';
import { Button } from '../Button/Button';

import { Loader } from './Loader';
import { config } from './Loader.config';

const { views, sizes } = getConfigVariations(config);

const sizeSpinner = ['s', 'm', 'l'];

type StoryPropsDefault = ComponentProps<typeof Loader> & {
    progressSize?: string;
    spinnerSize?: string;
};

const meta: Meta<StoryPropsDefault> = {
    title: 'Overlay/Loader',
    component: Loader,
    decorators: [WithTheme],
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
        strokeWidth: {
            options: [2, 4, 6, 8],
            control: {
                type: 'radio',
            },
            if: {
                arg: 'type',
                eq: 'progress',
            },
        },
        blur: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio',
            },
        },
        overlayColor: {
            control: {
                type: 'color',
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
        return <IconCrossThin size={size === 'l' ? 's' : 'xs'} />;
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
        <div style={{ height: '500px', width: '100%' }}>
            <Button onClick={() => setToggle(true)}>Show Loader</Button>
            {toggle && (
                <Loader
                    size={args.spinnerSize ?? args.progressSize ?? 'm'}
                    maxValue={100}
                    style={{ position: 'absolute', inset: 0 }}
                    value={progress}
                    {...args}
                >
                    {getContent(progress, args.size)}
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
        hasBlur: true,
        hasOverlay: false,
        blur: 'medium',
    },
    render: ({ ...args }) => {
        return <LoaderContent {...args} />;
    },
};
