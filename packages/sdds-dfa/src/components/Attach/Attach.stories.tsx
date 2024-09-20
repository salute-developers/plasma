import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import { Attach } from './Attach';

const viewOptions = [
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
const sizeOptions = ['xs', 's', 'm', 'l'];

type StoryAttachProps = ComponentProps<typeof Attach> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
    buttonText?: string;
    buttonValue?: string;
    fileFormat?: string;
    width?: string;
};

const meta: Meta<StoryAttachProps> = {
    title: 'Controls/Attach',
    decorators: [InSpacingDecorator],
    component: Attach,
    argTypes: {
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
        size: {
            options: sizeOptions,
            control: {
                type: 'select',
            },
        },
        view: {
            options: viewOptions,
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
            <StoryButton
                style={{ width }}
                size={size}
                buttonType="button"
                contentLeft={enableContentLeft ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                contentRight={enableContentRight ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
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
                contentLeft={enableContentLeft ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                contentRight={enableContentRight ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
                acceptedFileFormats={accepted}
                text={buttonText}
                value={buttonValue}
                {...rest}
            />
        );
    },
};
