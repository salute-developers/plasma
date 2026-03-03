import React, { forwardRef } from 'react';
import { safeUseId } from 'src/utils';
import type { RootProps } from 'src/engines';

import type { UserMessageProps, UserMessageRootProps } from './UserMessage.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as fileContentViewCSS } from './variations/_fileContentView/base';
import {
    base,
    Bubble,
    FileContentWrapper,
    ImageWrapper,
    TextContent,
    ActionsWrapper,
    FileUI,
    ImageComponent,
    TextAreaUI,
} from './UserMessage.styles';

export const userMessageRoot = (Root: RootProps<HTMLDivElement, UserMessageRootProps>) =>
    forwardRef<HTMLDivElement, UserMessageProps>(
        (
            {
                textAreaRef,
                id,
                name,

                value,
                isEditing = false,

                maxRows = 4,
                actions,
                attachments,

                size,
                view,
                attachmentsView,

                onEdit,
                onEditKeyDown,
                onFocus,
                onBlur,
                ...rest
            },
            ref,
        ) => {
            const safeId = safeUseId();
            const innerId = id || safeId;

            const isSingleImage = attachments?.length === 1 && attachments[0]?.type === 'image';

            const renderFileAttachments = () => {
                if (!attachments) {
                    return null;
                }

                if (isSingleImage) {
                    return (
                        <ImageWrapper>
                            <ImageComponent src={attachments[0]?.thumbUrl} alt={attachments[0]?.label} ratio="1/1" />
                        </ImageWrapper>
                    );
                }

                return (
                    <FileContentWrapper>
                        {attachments.map(({ id, label, size: fileSize, thumbUrl }) => (
                            <FileUI
                                key={id}
                                filename={label || ''}
                                description={fileSize}
                                view={attachmentsView}
                                size={size}
                                {...(thumbUrl ? { thumbUrl } : { fileUrl: label })}
                            />
                        ))}
                    </FileContentWrapper>
                );
            };

            return (
                <Root ref={ref} view={view} size={size} attachmentsView={attachmentsView} {...rest}>
                    {renderFileAttachments()}

                    {(Boolean(value) || isEditing) && (
                        <Bubble isEditing={isEditing}>
                            {isEditing ? (
                                <TextAreaUI
                                    ref={textAreaRef}
                                    id={innerId}
                                    name={name}
                                    value={value ?? ''}
                                    autoResize
                                    minAuto={1}
                                    maxAuto={maxRows}
                                    onChange={onEdit}
                                    onKeyDown={onEditKeyDown}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                />
                            ) : (
                                value && <TextContent>{value}</TextContent>
                            )}

                            {actions && isEditing && <ActionsWrapper isEditing>{actions}</ActionsWrapper>}
                        </Bubble>
                    )}

                    {actions && !isEditing && <ActionsWrapper>{actions}</ActionsWrapper>}
                </Root>
            );
        },
    );

export const userMessageConfig = {
    name: 'UserMessage',
    tag: 'div',
    layout: userMessageRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        attachmentsView: {
            css: fileContentViewCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
        attachmentsView: 'default',
    },
};
