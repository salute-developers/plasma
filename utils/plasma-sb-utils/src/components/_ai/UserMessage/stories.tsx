import React, { useRef, useState } from 'react';
import { IconEditOutline, IconPlasma } from '@salutejs/plasma-icons';
import { action } from 'storybook/actions';

export const createDefaultStory = (UserMessage: any, Button: any, EmbedIconButton: any) => {
    const onEdit = action('onEdit');
    const onEditKeyDown = action('onEditKeyDown');
    const onFocus = action('onFocus');
    const onBlur = action('onBlur');

    const attachmentsMap: any = {
        file: [
            {
                id: 'file-1',
                type: 'file',
                label: 'document.pdf',
                size: '2.4 МБ',
            },
        ],
        fileGroup: [
            {
                id: 'file-1',
                type: 'file',
                label: 'report.pdf',
                size: '2.4 МБ',
            },
            {
                id: 'file-2',
                type: 'file',
                label: 'very long named document with time stamp.doc',
                size: '2.4 МБ',
            },
            {
                id: 'file-3',
                type: 'file',
                label: 'data.csv',
                size: '2.4 МБ',
            },
        ],
        image: [
            {
                id: 'file-5',
                type: 'image',
                label: 'картинка для примера фоном',
                size: '123 КБ',
                thumbUrl: './images/320_320_9.jpg',
            },
        ],
        none: undefined,
    };

    const StoryDefault = (args: any) => {
        const [value, setValue] = useState(args.initialValue);
        const [editingValue, setEditingValue] = useState(args.initialValue);
        const [isEditing, setIsEditing] = useState(false);

        const textAreaRef = useRef<HTMLTextAreaElement>(null);

        const handleEditBegin = () => {
            setEditingValue(value);
            setIsEditing(true);

            setTimeout(() => {
                if (textAreaRef.current) {
                    textAreaRef.current.focus();
                    textAreaRef.current.setSelectionRange(value?.length || 0, value?.length || 0);
                }
            });
        };

        const handleEditComplete = () => {
            setValue(editingValue);
            setIsEditing(false);
        };

        const renderActions = () => {
            const buttonSize = () => {
                switch (args.size) {
                    case 'xl':
                    case 'l':
                        return 'm';

                    case 'm':
                        return 's';

                    case 's':
                        return 'xs';

                    case 'xs':
                        return 'xxs';

                    default:
                        return 's';
                }
            };
            const iconSize = args.size === 'xs' || args.size === 's' ? 'xs' : 's';

            if (isEditing) {
                return (
                    <>
                        <Button view="default" size={buttonSize()} onClick={() => setIsEditing(false)}>
                            Отмена
                        </Button>
                        <Button view="accent" size={buttonSize()} onClick={handleEditComplete}>
                            Сохранить
                        </Button>
                    </>
                );
            }

            return (
                <>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <EmbedIconButton size="m" view="secondary" key={index}>
                            <IconPlasma size={iconSize} color="inherit" />
                        </EmbedIconButton>
                    ))}

                    <EmbedIconButton size="m" view="secondary" onClick={handleEditBegin}>
                        <IconEditOutline size={iconSize} color="inherit" />
                    </EmbedIconButton>
                </>
            );
        };

        return (
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
                <UserMessage
                    {...args}
                    textAreaRef={textAreaRef}
                    attachments={attachmentsMap[args.attachmentType as keyof typeof attachmentsMap]}
                    value={isEditing ? editingValue : value}
                    actions={renderActions()}
                    isEditing={isEditing}
                    onEdit={(e) => {
                        setEditingValue(e.target.value);
                        onEdit(e);
                    }}
                    onEditKeyDown={onEditKeyDown}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        );
    };

    return StoryDefault;
};
