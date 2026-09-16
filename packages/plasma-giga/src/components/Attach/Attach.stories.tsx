import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { getAttachStories } from '@salutejs/plasma-sb-utils';

import { InformationWrapper } from '../InformationWrapper';

import { Attach } from './Attach';
import { config } from './Attach.config';

type AttachProps = ComponentProps<typeof Attach> & {
    label?: string;
    hintText?: string;
    leftHelper?: string;
};

const { meta: META, Default } = getAttachStories({
    component: Attach,
    componentConfig: config,
});

const meta: Meta<AttachProps> = {
    ...META,
    title: 'Data Entry/Attach',
};

export default meta;

export { Default };

export const WithInformationWrapper: StoryObj<AttachProps> = {
    render: (args) => {
        const { label, hintText, leftHelper, ...rest } = args;
        const wrapperId = 'example-id-attach';

        return (
            <InformationWrapper
                labelHtmlFor={wrapperId}
                label={label}
                hintText={hintText}
                leftHelper={leftHelper}
                size={rest.size}
            >
                {Default.render?.({ ...rest, id: wrapperId, helperText: undefined })}
            </InformationWrapper>
        );
    },
    args: {
        label: 'Title',
        hintText: 'Hint text',
        leftHelper: 'Caption',
        helperText: '',
    },
    argTypes: {
        label: { control: 'text' },
        hintText: { control: 'text' },
        leftHelper: { control: 'text' },
    },
};
