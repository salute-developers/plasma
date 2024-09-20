import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { attachConfig } from '../../../../components/Attach';
import { IconMic } from '../../../../components/_Icon';

import { Attach } from './Attach';
import { config } from './Attach.config';

const buttonViewOptions = [
    'default',
    'accent',
    'secondary',
    'clear',
    'positive',
    'warning',
    'negative',
    'dark',
    'black',
    'white',
];
const iconButtonViewOptions = [
    'default',
    'accent',
    'secondary',
    'clear',
    'success',
    'warning',
    'critical',
    'dark',
    'black',
    'white',
];
const flowOptions = ['horizontal', 'vertical', 'auto'];
const fileFormatOptions = ['all', '.doc', '.xls', '.pdf', '.csv', '.txt'];

type StoryAttachProps = ComponentProps<typeof Attach> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
    buttonText?: string;
    buttonValue?: string;
    fileFormat?: string;
    width?: string;
};

const meta: Meta<StoryAttachProps> = {
    title: 'plasma_web/Attach',
    decorators: [WithTheme],
    component: Attach,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(attachConfig, config)),
        fileFormat: {
            options: fileFormatOptions,
            control: {
                type: 'select',
            },
        },
        flow: {
            options: flowOptions,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryButton = (props: StoryAttachProps) => {
    return <Attach {...props} />;
};

export const Button: StoryObj<StoryAttachProps> = {
    args: {
        fileFormat: 'all',
        flow: 'horizontal',
        hasAttachment: true,
        width: '400px',
        buttonText: 'Загрузить файл',
        buttonValue: '',
        square: false,
        enableContentLeft: false,
        enableContentRight: false,
        size: 'm',
        view: 'accent',
    },
    argTypes: {
        view: {
            options: buttonViewOptions,
            control: {
                type: 'select',
            },
        },
    },
    render: (args) => {
        const { buttonText, buttonValue, width, size, fileFormat, contentLeft, contentRight, ...rest } = args;
        const accepted = fileFormat && fileFormat !== 'all' ? [fileFormat] : undefined;
        const iconSize = size === 'xs' ? 'xs' : 's';

        return (
            <StoryButton
                style={{ width }}
                size={size}
                buttonType="button"
                contentLeft={contentLeft ? <IconMic size={iconSize} color="inherit" /> : undefined}
                contentRight={contentRight ? <IconMic size={iconSize} color="inherit" /> : undefined}
                acceptedFileFormats={accepted}
                text={buttonText}
                value={buttonValue}
                {...rest}
            />
        );
    },
};

const StoryIconButton = (props: StoryAttachProps) => {
    return <Attach {...props} />;
};

export const IconButton: StoryObj<StoryAttachProps> = {
    args: {
        fileFormat: 'all',
        flow: 'horizontal',
        hasAttachment: true,
        width: '400px',
        size: 'm',
        view: 'accent',
    },
    argTypes: {
        view: {
            options: iconButtonViewOptions,
            control: {
                type: 'select',
            },
        },
    },
    render: (args) => {
        const {
            buttonText,
            buttonValue,
            width,
            size,
            fileFormat,
            enableContentLeft,
            enableContentRight,
            ...rest
        } = args;
        const accepted = fileFormat && fileFormat !== 'all' ? [fileFormat] : undefined;
        const iconSize = size === 'xs' ? 'xs' : 's';

        return (
            <StoryIconButton
                style={{ width }}
                size={size}
                buttonType="iconButton"
                contentLeft={enableContentLeft ? <IconMic size={iconSize} color="inherit" /> : undefined}
                contentRight={enableContentRight ? <IconMic size={iconSize} color="inherit" /> : undefined}
                acceptedFileFormats={accepted}
                text={buttonText}
                value={buttonValue}
                {...rest}
            />
        );
    },
};
