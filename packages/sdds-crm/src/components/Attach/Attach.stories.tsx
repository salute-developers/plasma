import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import { Attach } from './Attach';
import { config } from './Attach.config';

const { views, sizes } = getConfigVariations(config);

const flowOptions = ['horizontal', 'vertical', 'auto'];
const fileFormatOptions = ['all', '.doc', '.xls', '.pdf', '.csv', '.txt'];

const placements = ['auto', 'top', 'right', 'bottom', 'left'];
const triggers = ['click', 'hover'];
const buttonTypeVariant = ['button', 'iconButton'];

type StoryAttachProps = ComponentProps<typeof Attach> & {
    trigger: string;
    enableContentLeft: boolean;
    enableContentRight: boolean;
    buttonText?: string;
    buttonValue?: string;
    fileFormat?: string;
    width?: string;
    placement?: string;
    closeOnOverlayClick?: boolean;
    listWidth?: string;
    buttonType?: string;
};

const meta: Meta<StoryAttachProps> = {
    title: 'Data Entry/Attach',
    decorators: [InSpacingDecorator],
    component: Attach,
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
        buttonType: {
            options: buttonTypeVariant,
            control: {
                type: 'select',
            },
        },
        buttonText: {
            control: {
                type: 'text',
            },
            if: { arg: 'buttonType', eq: 'button' },
        },
        buttonValue: {
            control: {
                type: 'text',
            },
            if: { arg: 'buttonType', eq: 'button' },
        },
        enableContentLeft: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'buttonType', eq: 'button' },
        },
        enableContentRight: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'buttonType', eq: 'button' },
        },
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
        hasAttachment: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'hideButtonOnAttach', truthy: false },
        },
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        trigger: {
            options: triggers,
            control: {
                type: 'select',
            },
        },
        closeOnOverlayClick: {
            control: { type: 'boolean' },
            if: { arg: 'alwaysOpened', truthy: false },
        },
        listWidth: {
            control: { type: 'text' },
        },
    },
    args: {
        size: 'm',
        view: 'accent',
        width: '400px',

        fileFormat: 'all',
        multiple: false,
        flow: 'horizontal',
        hasAttachment: true,
        hideButtonOnAttach: false,

        buttonType: 'button',
        buttonText: 'Загрузить файл',
        buttonValue: '',
        enableContentLeft: false,
        enableContentRight: false,

        helperTextView: 'default',
        helperText: 'Подсказка',

        placement: 'bottom-start',
        trigger: 'click',
        listWidth: '300px',
        closeOnOverlayClick: true,
    },
};

export default meta;

const StoryDefault = ({
    buttonType,
    buttonText,
    buttonValue,
    width,
    size,
    fileFormat,
    enableContentLeft,
    enableContentRight,
    placement,
    trigger,
    listWidth,
    closeOnOverlayClick,
    ...rest
}: StoryAttachProps) => {
    const accepted = fileFormat && fileFormat !== 'all' ? [fileFormat] : undefined;
    const iconSize = size === 'xs' ? 'xs' : 's';

    const dropdownOptions = {
        placement,
        trigger,
        listWidth,
        closeOnOverlayClick,
    };

    return (
        <Attach
            style={{ width }}
            size={size}
            buttonType={buttonType}
            contentLeft={enableContentLeft ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
            contentRight={enableContentRight ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
            acceptedFileFormats={accepted}
            text={buttonText}
            value={buttonValue}
            {...rest}
            dropdownOptions={dropdownOptions}
        />
    );
};

export const Default: StoryObj<StoryAttachProps> = {
    render: StoryDefault,
};
