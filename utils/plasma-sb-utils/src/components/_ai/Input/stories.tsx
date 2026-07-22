import React, { useState } from 'react';
import styled from 'styled-components';
import { IconMic } from '@salutejs/plasma-icons';
import { action } from 'storybook/actions';

export const createDefaultStory = (Input: any, IconButton: any) => {
    const onSendAction = action('onSend');
    const onAttachmentRemoveAction = action('onAttachmentRemove');

    const Wrapper = styled.div`
        width: 100%;
        max-width: 620px;
    `;

    const attachmentsData = [
        {
            id: 1,
            type: 'image',
            thumbUrl: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        },
        {
            id: 2,
            type: 'image',
            thumbUrl: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        },
        {
            id: 3,
            type: 'file',
            label: 'Document1.pdf',
            size: '1.2MB',
            thumbUrl: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        },
        {
            id: 4,
            type: 'file',
            label: 'Document2.pdf',
            size: '2.4MB',
            thumbUrl: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        },
        {
            id: 5,
            type: 'file',
            label: 'Document1.pdf',
            size: '1.2MB',
            thumbUrl: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        },
    ];

    const mapSizeToIconButtonSize = (size: string) => {
        switch (size) {
            case 'xl':
                return 'l';
            case 'l':
                return 'm';
            case 'm':
                return 's';
            case 's':
                return 'xs';
            case 'xs':
                return 'xs';
            default:
                return 'xs';
        }
    };

    const mapSizeToIconSize = (size: string) => {
        switch (size) {
            case 'xl':
            case 'l':
            case 'm': {
                return 's';
            }
            case 's':
            case 'xs': {
                return 'xs';
            }
            default: {
                return 's';
            }
        }
    };

    const StoryDefault = (args: any) => {
        const [attachments, setAttachments] = useState(attachmentsData);

        const handleAttachmentRemove = (attachment) => {
            onAttachmentRemoveAction(attachment);
            setAttachments((prev) => prev.filter((item) => item.id !== attachment.id));
        };

        return (
            <Wrapper>
                <Input
                    attachments={attachments}
                    onAttachmentRemove={handleAttachmentRemove}
                    actionBefore={
                        args.hasActionBefore && (
                            <IconButton view="clear" size={mapSizeToIconButtonSize(args.size)}>
                                <IconMic size={mapSizeToIconSize(args.size)} color="inherit" />
                            </IconButton>
                        )
                    }
                    actionAfter={
                        args.hasActionAfter && (
                            <IconButton view="clear" size={mapSizeToIconButtonSize(args.size)}>
                                <IconMic size={mapSizeToIconSize(args.size)} color="inherit" />
                            </IconButton>
                        )
                    }
                    onSend={onSendAction}
                    {...args}
                />
            </Wrapper>
        );
    };

    return StoryDefault;
};
