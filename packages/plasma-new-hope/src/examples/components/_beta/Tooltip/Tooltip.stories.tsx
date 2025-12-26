import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { IconDone } from '../../../../components/_Icon';
import { Button } from '../../Button/Button';

import { Tooltip } from './Tooltip';

type StoryProps = ComponentProps<typeof Tooltip>;

const placements = [
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
];
const trigger = ['click', 'hover', 'focus'];
const view = ['default', 'accent'];
const size = ['m', 's'];

const meta: Meta<StoryProps> = {
    title: '_Beta/Overlay/Tooltip',
    component: Tooltip,
    argTypes: {
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        trigger: {
            options: trigger,
            control: {
                type: 'select',
            },
        },
        hasTail: {
            control: {
                type: 'boolean',
            },
        },
        offset: {
            control: {
                type: 'number',
            },
        },
        delayOpen: {
            control: {
                type: 'number',
            },
        },
        delayClose: {
            control: {
                type: 'number',
            },
        },
        view: {
            options: view,
            control: {
                type: 'select',
            },
        },
        size: {
            options: size,
            control: {
                type: 'select',
            },
        },
        hasIcon: {
            control: {
                type: 'boolean',
            },
        },
    },
    args: {
        placement: 'bottom',
        trigger: 'click',
        hasTail: true,
        offset: 0,
        delayOpen: 0,
        delayClose: 0,
        view: 'default',
        size: 'm',
        hasIcon: false,
    },
};

export default meta;

const StoryDefault = (args: StoryProps) => {
    React.useEffect(() => {
        window.scrollTo(
            (document.documentElement.scrollWidth - window.innerWidth) / 2,
            (document.documentElement.scrollHeight - window.innerHeight) / 2,
        );
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '400vw',
                height: '400vh',
            }}
        >
            <Tooltip
                iconSlot={args.hasIcon ? <IconDone size="xs" color="inherit" /> : undefined}
                target={<Button>Target</Button>}
                {...args}
            >
                Контент выпадающего окна
            </Tooltip>
        </div>
    );
};

export const Default: StoryObj<StoryProps> = {
    render: (args) => <StoryDefault {...args} />,
};
