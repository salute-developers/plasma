import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { getAttachStories } from '@salutejs/plasma-sb-utils';

import { InformationWrapper } from '../InformationWrapper';

import { Attach } from './Attach';
import { config } from './Attach.config';

type AttachProps = ComponentProps<typeof Attach> & {
    trigger?: string;
    enableContentLeft?: boolean;
    enableContentRight?: boolean;
    buttonText?: string;
    buttonValue?: string;
    fileFormat?: string;
    width?: string;
    placement?: string;
    closeOnOverlayClick?: boolean;
    listWidth?: string;
    buttonType?: string;
    label?: string;
    titleCaption?: string;
    hintText?: string;
};

const { meta: META, Default } = getAttachStories({
    component: Attach,
    componentConfig: config,
    disablePropsList: ['size'],
    defaultArgs: { size: 's' },
});

const meta: Meta<AttachProps> = {
    ...META,
    title: 'Data Entry/Attach',
};

export default meta;

export { Default };

export const WithInformationWrapper: StoryObj<AttachProps> = {
    render: (args) => {
        const {
            label,
            titleCaption,
            hintText,
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
        } = args;
        const wrapperId = 'example-id-attach';
        const accepted = fileFormat && fileFormat !== 'all' ? [fileFormat] : undefined;

        const dropdownOptions = {
            placement,
            trigger,
            listWidth,
            closeOnOverlayClick,
        };

        return (
            <InformationWrapper labelHtmlFor={wrapperId} label={label} titleCaption={titleCaption} hintText={hintText}>
                <Attach
                    id={wrapperId}
                    style={{ width }}
                    size={size}
                    buttonType={buttonType}
                    acceptedFileFormats={accepted}
                    text={buttonText}
                    value={buttonValue}
                    {...rest}
                    dropdownOptions={dropdownOptions}
                />
            </InformationWrapper>
        );
    },
    args: {
        label: 'Label',
        titleCaption: 'Title',
        hintText: 'Hint text',
    },
    argTypes: {
        label: { control: 'text' },
        titleCaption: { control: 'text' },
        hintText: { control: 'text' },
    },
};
