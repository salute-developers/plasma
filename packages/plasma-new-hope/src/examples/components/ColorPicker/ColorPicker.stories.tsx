import { Meta, StoryObj } from '@storybook/react-vite';
import React, { ComponentProps, PropsWithChildren, useEffect, useState } from 'react';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { Button } from '../Button/Button';

import { ColorPicker } from './ColorPicker';
import { config } from './ColorPicker.config';

const { views, sizes } = getConfigVariations(config);

const meta: Meta<typeof ColorPicker> = {
    title: 'Data Entry/ColorPicker',
    decorators: [WithTheme],
    component: ColorPicker,
    args: {
        size: 's',
        value: '#fff',
        locales: {
            CONTROLS: {
                SOLID: 'Cплошной',
                GRADIENT: 'Градиент',
            },
        },
        presets: [
            'linear-gradient(135deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%)',
            '#262626',
            '#4E4E4E',
            '#7A7A7A',
            '#949494',
            '#B3B3B3',
            '#DDDDDD',
            '#FEB3BB',
            '#FFD1B8',
            '#FFE785',
            '#94FF94',
            '#85CEFF',
            '#EAD0FB',
            '#F9CDF2',
            '#FF8F9A',
            '#FD9C68',
            '#FFD83D',
            '#3CE73C',
            '#52BAFF',
            '#D39CF7',
            '#F391E2',
            '#FF293E',
            '#FA5F05',
            '#DCB104',
            '#15B015',
            '#118CDF',
            '#B559F3',
            '#E833CA',
            '#9C1422',
            '#D14D00',
            '#B79201',
            '#0B8C0B',
            '#0C72B6',
            '#A139E5',
            '#8A2178',
            '#4A0D13',
            '#5C2709',
            '#5E4D08',
            '#055C05',
            '#0D3B59',
            '#36154C',
            '#450E3C',
        ],
        width: 256,
        height: 256,
        hideControls: false,
        hideInputs: false,
        hideOpacity: false,
        hidePresets: false,
        hideHue: false,
        hideEyeDrop: false,
        hideColorGuide: false,
        hideInputType: false,
        hideColorTypeControls: false,
        hideGradientType: false,
        hideGradientAngle: false,
        hideGradientStop: false,
        hideGradientControls: false,
        hidePickerSquare: false,
        showHexAlpha: true,
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
                type: 'inline-radio',
            },
        },
        value: {
            options: ['#fff', 'rgba(255, 178, 28, 0.4)', 'linear-gradient(45.00deg, #1A9E32FF 0%, #04C6C9FF 99.688%)'],
            control: {
                type: 'select',
            },
        },
        locales: {
            control: {
                type: 'object',
            },
        },
        presets: {
            control: {
                type: 'object',
            },
        },
        width: {
            control: {
                type: 'number',
            },
        },
        height: {
            control: {
                type: 'number',
            },
        },
        hideControls: {
            control: { type: 'boolean' },
        },
        hideInputs: {
            control: { type: 'boolean' },
        },
        hideOpacity: {
            control: { type: 'boolean' },
        },
        hidePresets: {
            control: { type: 'boolean' },
        },
        hideHue: {
            control: { type: 'boolean' },
        },
        hideEyeDrop: {
            control: { type: 'boolean' },
        },
        hideColorGuide: {
            control: {
                type: 'boolean',
            },
        },
        hideInputType: {
            control: {
                type: 'boolean',
            },
        },
        hideColorTypeControls: {
            control: {
                type: 'boolean',
            },
        },
        hideGradientType: {
            control: {
                type: 'boolean',
            },
        },
        hideGradientAngle: {
            control: {
                type: 'boolean',
            },
        },
        hideGradientStop: {
            control: {
                type: 'boolean',
            },
        },
        hideGradientControls: {
            control: {
                type: 'boolean',
            },
        },
        hidePickerSquare: {
            control: {
                type: 'boolean',
            },
        },
        showHexAlpha: {
            control: {
                type: 'boolean',
            },
        },
    },
    parameters: {
        controls: {
            exclude: ['view'],
        },
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof ColorPicker>;
const Paper = ({ children }: PropsWithChildren) => {
    return (
        <div
            style={{
                width: 'fit-content',
                boxShadow: '0 1px 4px -1px rgba(0 0 0 0.4), 0 4px 14px -4px rgba(8 8 8 0.08)',
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '1.5rem',
            }}
        >
            {children}
        </div>
    );
};

const StoryDefault = (props: StoryPropsDefault) => {
    const [color, setColor] = useState(props.value);

    useEffect(() => {
        setColor(props.value);
    }, [props.value]);

    return (
        <Paper>
            <ColorPicker {...props} value={color} onChange={setColor} />
        </Paper>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    render: (args) => <StoryDefault {...args} />,
};

const StoryWithCustomEyeDropperButton = (props: StoryPropsDefault) => {
    const [color, setColor] = useState('rgba(255,255,255,1)');

    return (
        <Paper>
            <ColorPicker
                value={color}
                onChange={setColor}
                {...props}
                dropperButtonSlot={(onClick) => (
                    <Button size="xs" view="secondary" onClick={onClick}>
                        C
                    </Button>
                )}
            />
        </Paper>
    );
};

export const WithCustomEyeDropperButton: StoryObj<StoryPropsDefault> = {
    render: (args) => <StoryWithCustomEyeDropperButton {...args} />,
};
