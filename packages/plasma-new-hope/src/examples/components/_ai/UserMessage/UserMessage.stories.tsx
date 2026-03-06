import React, { ComponentProps, useRef, useState } from 'react';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { WithTheme } from '../../../_helpers';
import { IconEditOutline, IconPlasma } from '../../../../components/_Icon';
import { Button } from '../../Button/Button';
import { EmbedIconButton } from '../../EmbedIconButton/EmbedIconButton';

import { UserMessage } from './UserMessage';
import { config } from './UserMessage.config';

const { views, sizes } = getConfigVariations(config);
const fileContentViews = ['default', 'secondary'];
const attachmentTypes = ['file', 'fileGroup', 'image', 'none'] as const;

const onEdit = action('onEdit');
const onEditKeyDown = action('onEditKeyDown');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

type StoryProps = ComponentProps<typeof UserMessage> & {
    attachmentType?: typeof attachmentTypes[number];
    initialValue?: string;
};

type AttachmentsMap = Record<typeof attachmentTypes[number], StoryProps['attachments']>;

const attachmentsMap: AttachmentsMap = {
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

const meta: Meta<StoryProps> = {
    title: 'AI Kit/UserMessage',
    component: UserMessage,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: { type: 'select' },
        },
        size: {
            options: sizes,
            control: { type: 'select' },
        },
        attachmentsView: {
            options: fileContentViews,
            control: { type: 'select' },
        },
        maxRows: {
            control: { type: 'number' },
        },
        attachmentType: {
            options: attachmentTypes,
            control: { type: 'select' },
        },
        ...disableProps(['actions', 'attachments', 'isEditing', 'onEdit', 'onEditKeyDown']),
    },
    args: {
        initialValue: 'Привет! Что насчет того, чтобы пройти тест Тьюринга?',
        view: 'default',
        size: 'm',
        attachmentsView: 'default',
        attachmentType: 'fileGroup',
        maxRows: 4,
    },
};

export default meta;

const StoryDefault = (args: StoryProps) => {
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

export const Default: StoryObj<StoryProps> = {
    render: StoryDefault,
};
