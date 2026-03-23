import React, { useEffect, useRef, useState } from 'react';
import type { ComponentProps, Key } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import {
    IconClose,
    IconPlasma,
    IconBlankDocOutline,
    IconHeartOutline,
    IconHeartDashOutline,
    IconCopyOutline,
    IconRefresh,
    IconEditOutline,
} from '../../../../components/_Icon';
import { WithTheme } from '../../../_helpers';
import { IconButton } from '../../IconButton/IconButton';
import { Button } from '../../Button/Button';
import { EmbedIconButton } from '../../EmbedIconButton/EmbedIconButton';
import { Flow } from '../../Flow/Flow';
import { Chip } from '../../Chip/Chip';
import { ChipGroup } from '../../ChipGroup/ChipGroup';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { Answer } from '../Answer/Answer';
import { UserMessage } from '../UserMessage/UserMessage';

import { Container } from './Container';
import { config } from './Container.config';

type Attachment = {
    id: Key;
    type?: 'file' | 'image';
    label?: string;
    size?: string;
    thumbUrl?: string;
};

type Message = {
    id: number;
    type: 'user' | 'answer';
    text: string;
    isLoading?: boolean;
    attachments?: Attachment[];
};

type StoryArgs = ComponentProps<typeof Container> & {
    // Header
    headerView?: 'default' | 'secondary' | 'clear';
    headerTextAlign?: 'start' | 'center';
    headerHasDivider?: boolean;
    headerTitle?: string;
    headerDescription?: string;
    // Input
    inputMode?: 'condensed' | 'extended';
    inputPlaceholder?: string;
    inputSubmitOnEnter?: boolean;
    inputClearOnSubmit?: boolean;
    inputMinRows?: number;
    inputMaxRows?: number;
    // Answer
    answerLoaderTitle?: string;
    // UserMessage
    userMessageView?: 'default' | 'secondary' | 'accent' | 'positive' | 'negative' | 'warning';
    userMessageAttachmentsView?: 'default' | 'secondary';
    userMessageMaxRows?: number;
};

const { views, sizes } = getConfigVariations(config);

const meta: Meta<StoryArgs> = {
    title: 'AI Kit/Container',
    decorators: [WithTheme],
    parameters: {
        docs: {
            source: {
                type: 'code',
            },
        },
    },
    argTypes: {
        // Container
        view: {
            description: 'Вид компонента',
            options: views,
            control: { type: 'select' },
            table: { category: 'Container' },
        },
        size: {
            description: 'Размер компонента',
            options: sizes,
            control: { type: 'select' },
            table: { category: 'Container' },
        },
        footerCaptionAlign: {
            description: 'Выравнивание подписи к нижней части чата',
            options: ['center', 'start'],
            control: { type: 'select' },
            table: { category: 'Container' },
        },
        // Header
        headerView: {
            description: 'Вид компонента Header',
            options: ['default', 'secondary', 'clear'],
            control: { type: 'select' },
            table: { category: 'Header' },
        },
        headerTextAlign: {
            description: 'Выравнивание текстового контента Header',
            options: ['start', 'center'],
            control: { type: 'select' },
            table: { category: 'Header' },
        },
        headerHasDivider: {
            description: 'Показывать разделитель в Header',
            control: { type: 'boolean' },
            table: { category: 'Header' },
        },
        headerTitle: {
            description: 'Заголовок Header',
            control: { type: 'text' },
            table: { category: 'Header' },
        },
        headerDescription: {
            description: 'Подзаголовок Header',
            control: { type: 'text' },
            table: { category: 'Header' },
        },
        // Input
        inputMode: {
            description: 'Режим отображения Input',
            options: ['condensed', 'extended'],
            control: { type: 'select' },
            table: { category: 'Input' },
        },
        inputPlaceholder: {
            description: 'Плейсхолдер поля ввода',
            control: { type: 'text' },
            table: { category: 'Input' },
        },
        inputSubmitOnEnter: {
            description: 'Отправлять сообщение по Enter (Shift+Enter — новая строка)',
            control: { type: 'boolean' },
            table: { category: 'Input' },
        },
        inputClearOnSubmit: {
            description: 'Очищать текст после отправки',
            control: { type: 'boolean' },
            table: { category: 'Input' },
        },
        inputMinRows: {
            description: 'Минимальное количество строк textarea',
            control: { type: 'number' },
            table: { category: 'Input' },
        },
        inputMaxRows: {
            description: 'Максимальное количество строк textarea',
            control: { type: 'number' },
            table: { category: 'Input' },
        },
        // Answer
        answerLoaderTitle: {
            description: 'Заголовок при загрузке Answer',
            control: { type: 'text' },
            table: { category: 'Answer' },
        },
        // UserMessage
        userMessageView: {
            description: 'Вид компонента UserMessage',
            options: ['default', 'secondary', 'accent', 'positive', 'negative', 'warning'],
            control: { type: 'select' },
            table: { category: 'UserMessage' },
        },
        userMessageAttachmentsView: {
            description: 'Вид прикреплённых файлов в UserMessage',
            options: ['default', 'secondary'],
            control: { type: 'select' },
            table: { category: 'UserMessage' },
        },
        userMessageMaxRows: {
            description: 'Максимальное количество строк при редактировании UserMessage',
            control: { type: 'number' },
            table: { category: 'UserMessage' },
        },
        ...disableProps(['messages', 'attachments', 'header', 'content', 'contentRef', 'footer', 'footerCaption']),
    },
    args: {
        // Container
        size: 'xl',
        view: 'default',
        footerCaptionAlign: 'center',
        // Header
        headerView: 'default',
        headerTextAlign: 'start',
        headerHasDivider: true,
        headerTitle: 'ИИ чат',
        headerDescription: 'Создано при помощи AI-Kit',
        // Input
        inputMode: 'condensed',
        inputPlaceholder: 'Введите сообщение',
        inputSubmitOnEnter: true,
        inputClearOnSubmit: true,
        inputMinRows: 1,
        inputMaxRows: 4,
        // Answer
        answerLoaderTitle: 'Генерирую ответ...',
        // UserMessage
        userMessageView: 'secondary',
        userMessageAttachmentsView: 'secondary',
        userMessageMaxRows: 4,
    },
};

export default meta;

const aiResponses = [
    'Конечно! Вот краткий ответ на ваш вопрос. Я постараюсь помочь вам разобраться в этой теме максимально понятно.',
    'Это очень интересный вопрос. Позвольте объяснить подробнее — здесь есть несколько важных нюансов.',
    'Я понял ваш запрос. Вот что могу сказать по этой теме: всё зависит от контекста и конкретных условий.',
    'Отличный вопрос! Давайте разберём его по шагам, чтобы вы получили наиболее полное представление.',
    'Рад помочь! Ответ на ваш вопрос достаточно прост, если посмотреть на него под правильным углом.',
];

const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} Б`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} КБ`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
};

const getHeaderButtonSize = (size: string) => {
    switch (size) {
        case 'xl':
            return 'l';
        case 'l':
            return 'm';
        case 'm':
            return 's';
        case 's':
        case 'xs':
            return 'xs';
        default:
            return 's';
    }
};

const getHeaderIconSize = (size: string) => {
    return size === 'xs' || size === 's' ? 'xs' : 's';
};

const getInputButtonSize = (size: string) => {
    switch (size) {
        case 'xl':
            return 'l';
        case 'l':
            return 'm';
        case 'm':
            return 's';
        case 's':
        case 'xs':
            return 'xs';
        default:
            return 's';
    }
};

const getInputIconSize = (size: string) => {
    return size === 'xs' || size === 's' ? 'xs' : 's';
};

// Размеры для кнопок действий в UserMessage
const getUserMessageButtonSize = (size: string) => {
    switch (size) {
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

// Размеры для EmbedIconButton и иконок в Answer/UserMessage
const getEmbedButtonSize = (size: string) => {
    return size === 's' || size === 'xs' ? 's' : 'm';
};

const getEmbedIconSize = (size: string) => {
    return size === 's' || size === 'xs' ? 'xs' : 's';
};

// Размеры для кнопки в Answer footer
const getAnswerButtonSize = (size: string) => {
    switch (size) {
        case 'xl':
            return 'm';
        case 'l':
        case 'm':
            return 's';
        case 's':
        case 'xs':
            return 'xs';
        default:
            return 's';
    }
};

// Размеры для ChipGroup в Answer footer
const getChipGroupSize = (size: string) => {
    switch (size) {
        case 'xl':
            return 'l';
        case 'l':
            return 'm';
        case 'm':
            return 's';
        case 's':
        case 'xs':
            return 'xs';
        default:
            return 's';
    }
};

const AnswerFooter = ({ size }: { size: string }) => (
    <Flow orientation="vertical" mainAxisGap="20px">
        <Flow
            orientation="horizontal"
            arrangement="spaceBetween"
            alignment="center"
            mainAxisGap="8px"
            style={{ width: '100%' }}
        >
            <Flow orientation="horizontal" arrangement="start" mainAxisGap="8px" crossAxisGap="8px">
                {[IconHeartOutline, IconHeartDashOutline, IconCopyOutline, IconRefresh].map((Icon, i) => (
                    <EmbedIconButton key={i} size={getEmbedButtonSize(size)} view="secondary">
                        <Icon color="inherit" size={getEmbedIconSize(size)} />
                    </EmbedIconButton>
                ))}
            </Flow>
            <Button size={getAnswerButtonSize(size)} view="secondary">
                Перейти в источник
            </Button>
        </Flow>
        <ChipGroup
            size={getChipGroupSize(size)}
            view="secondary"
            gap="wide"
            style={{ flexDirection: 'column', width: 'fit-content' }}
        >
            {['Расскажи подробнее', 'Приведи пример', 'Что ещё почитать?'].map((label, i) => (
                <Chip key={i} text={label} hasClear={false} pilled style={{ width: 'fit-content' }} />
            ))}
        </ChipGroup>
    </Flow>
);

const StoryDefault = ({
    view,
    size,
    footerCaptionAlign,
    headerView,
    headerTextAlign,
    headerHasDivider,
    headerTitle,
    headerDescription,
    inputMode,
    inputPlaceholder,
    inputSubmitOnEnter,
    inputClearOnSubmit,
    inputMinRows,
    inputMaxRows,
    answerLoaderTitle,
    userMessageView,
    userMessageAttachmentsView,
    userMessageMaxRows,
}: StoryArgs) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputLoading, setInputLoading] = useState(false);
    const [attachments, setAttachments] = useState<Attachment[]>([]);
    const [editingMessageId, setEditingMessageId] = useState<number | null>(null);
    const [editingValue, setEditingValue] = useState('');
    const contentRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const nextId = useRef(0);

    const scrollToBottom = () => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        const newAttachments: Attachment[] = files.map((file) => {
            const isImage = file.type.startsWith('image/');
            return {
                id: `${file.name}-${Date.now()}-${Math.random()}`,
                type: isImage ? 'image' : 'file',
                label: file.name,
                size: formatFileSize(file.size),
                thumbUrl: isImage ? URL.createObjectURL(file) : undefined,
            };
        });

        setAttachments((prev) => [...prev, ...newAttachments]);

        e.target.value = '';
    };

    const handleAttachmentRemove = (attachment: Attachment) => {
        setAttachments((prev) => prev.filter((a) => a.id !== attachment.id));
    };

    const handleEditBegin = (msgId: number, currentText: string) => {
        setEditingValue(currentText);
        setEditingMessageId(msgId);

        setTimeout(() => {
            if (textAreaRef.current) {
                textAreaRef.current.focus();
                textAreaRef.current.setSelectionRange(currentText.length, currentText.length);
            }
        });
    };

    const handleEditComplete = (msgId: number) => {
        setMessages((prev) => prev.map((msg) => (msg.id === msgId ? { ...msg, text: editingValue } : msg)));
        setEditingMessageId(null);
        setEditingValue('');
    };

    const handleEditCancel = () => {
        setEditingMessageId(null);
        setEditingValue('');
    };

    const handleSend = (value: string) => {
        if (!value.trim() && attachments.length === 0) return;

        const snapshot = attachments;
        setAttachments([]);

        const userMsgId = nextId.current++;
        setMessages((prev) => [
            ...prev,
            { id: userMsgId, type: 'user', text: value, attachments: snapshot.length > 0 ? snapshot : undefined },
        ]);
        setInputLoading(true);

        const answerMsgId = nextId.current++;

        setTimeout(() => {
            setMessages((prev) => [...prev, { id: answerMsgId, type: 'answer', text: '', isLoading: true }]);
        }, 300);

        setTimeout(() => {
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            setMessages((prev) =>
                prev.map((msg) => (msg.id === answerMsgId ? { ...msg, text: randomResponse, isLoading: false } : msg)),
            );
            setInputLoading(false);
        }, 2000);
    };

    const renderUserMessageActions = (msg: Message) => {
        const isEditing = editingMessageId === msg.id;
        const iconSize = getEmbedIconSize(size);

        if (isEditing) {
            return (
                <>
                    <Button view="default" size={getUserMessageButtonSize(size)} onClick={handleEditCancel}>
                        Отмена
                    </Button>
                    <Button
                        view="accent"
                        size={getUserMessageButtonSize(size)}
                        onClick={() => handleEditComplete(msg.id)}
                    >
                        Сохранить
                    </Button>
                </>
            );
        }

        return (
            <>
                {[IconPlasma, IconCopyOutline, IconHeartOutline].map((Icon, i) => (
                    <EmbedIconButton key={i} size={getEmbedButtonSize(size)} view="secondary">
                        <Icon size={iconSize} color="inherit" />
                    </EmbedIconButton>
                ))}
                <EmbedIconButton
                    size={getEmbedButtonSize(size)}
                    view="secondary"
                    onClick={() => handleEditBegin(msg.id, msg.text)}
                >
                    <IconEditOutline size={iconSize} color="inherit" />
                </EmbedIconButton>
            </>
        );
    };

    return (
        <div style={{ width: '100%', height: 'calc(100vh - 2rem)' }}>
            <input ref={fileInputRef} type="file" multiple style={{ display: 'none' }} onChange={handleFileChange} />
            <Container
                size={size}
                view={view}
                header={
                    <Header
                        view={headerView}
                        size={size}
                        textAlign={headerTextAlign}
                        hasDivider={headerHasDivider}
                        title={headerTitle}
                        description={headerDescription}
                        style={{ paddingRight: '1rem', paddingLeft: '1rem' }}
                        actionBefore={
                            <IconButton view="clear" size={getHeaderButtonSize(size)}>
                                <IconPlasma size={getHeaderIconSize(size)} color="inherit" />
                            </IconButton>
                        }
                        actionAfter={
                            <IconButton view="clear" size={getHeaderButtonSize(size)}>
                                <IconClose size={getHeaderIconSize(size)} color="inherit" />
                            </IconButton>
                        }
                    />
                }
                content={
                    <>
                        {messages.map((msg) =>
                            msg.type === 'user' ? (
                                <UserMessage
                                    key={msg.id}
                                    value={editingMessageId === msg.id ? editingValue : msg.text}
                                    size={size}
                                    view={userMessageView}
                                    attachments={msg.attachments}
                                    attachmentsView={userMessageAttachmentsView}
                                    maxRows={userMessageMaxRows}
                                    isEditing={editingMessageId === msg.id}
                                    textAreaRef={editingMessageId === msg.id ? textAreaRef : undefined}
                                    onEdit={(e) => setEditingValue(e.target.value)}
                                    actions={renderUserMessageActions(msg)}
                                />
                            ) : (
                                <Answer
                                    key={msg.id}
                                    size={size}
                                    view="default"
                                    content={msg.text}
                                    isLoading={msg.isLoading}
                                    loaderTitle={answerLoaderTitle}
                                    footer={msg.isLoading ? undefined : <AnswerFooter size={size} />}
                                />
                            ),
                        )}
                    </>
                }
                contentRef={contentRef}
                footer={
                    <Input
                        size={size}
                        mode={inputMode}
                        placeholder={inputPlaceholder}
                        loading={inputLoading}
                        submitOnEnter={inputSubmitOnEnter}
                        clearOnSubmit={inputClearOnSubmit}
                        minRows={inputMinRows}
                        maxRows={inputMaxRows}
                        attachments={attachments}
                        onAttachmentRemove={handleAttachmentRemove}
                        actionBefore={
                            <IconButton
                                view="clear"
                                size={getInputButtonSize(size)}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <IconBlankDocOutline size={getInputIconSize(size)} color="inherit" />
                            </IconButton>
                        }
                        onSend={handleSend}
                    />
                }
                footerCaption="AI может допускать ошибки. Проверяйте важную информацию."
                footerCaptionAlign={footerCaptionAlign}
            />
        </div>
    );
};

export const Default: StoryObj<StoryArgs> = {
    render: StoryDefault,
};
