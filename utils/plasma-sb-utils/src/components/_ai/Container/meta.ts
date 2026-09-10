import { disableProps } from '../../../index';

export const createMeta = ({ componentConfig, decorators = [] }: any) => {
    const { views, sizes } = componentConfig;

    return {
        title: 'AI Kit/Container',
        decorators,
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
            },
            size: {
                description: 'Размер компонента',
                options: sizes,
                control: { type: 'select' },
            },
            footerCaptionAlign: {
                description: 'Выравнивание подписи к нижней части чата',
                options: ['center', 'start'],
                control: { type: 'select' },
            },
            // Header
            headerView: {
                description: 'Вид компонента Header',
                options: ['default', 'secondary', 'clear'],
                control: { type: 'select' },
            },
            headerTextAlign: {
                description: 'Выравнивание текстового контента Header',
                options: ['start', 'center'],
                control: { type: 'select' },
            },
            headerHasDivider: {
                description: 'Показывать разделитель в Header',
                control: { type: 'boolean' },
            },
            headerTitle: {
                description: 'Заголовок Header',
                control: { type: 'text' },
            },
            headerDescription: {
                description: 'Подзаголовок Header',
                control: { type: 'text' },
            },
            // Input
            inputMode: {
                description: 'Режим отображения Input',
                options: ['condensed', 'extended'],
                control: { type: 'select' },
            },
            inputPlaceholder: {
                description: 'Плейсхолдер поля ввода',
                control: { type: 'text' },
            },
            inputSubmitOnEnter: {
                description: 'Отправлять сообщение по Enter (Shift+Enter — новая строка)',
                control: { type: 'boolean' },
            },
            inputClearOnSubmit: {
                description: 'Очищать текст после отправки',
                control: { type: 'boolean' },
            },
            inputMinRows: {
                description: 'Минимальное количество строк textarea',
                control: { type: 'number' },
            },
            inputMaxRows: {
                description: 'Максимальное количество строк textarea',
                control: { type: 'number' },
            },
            // Answer
            answerLoaderTitle: {
                description: 'Заголовок при загрузке Answer',
                control: { type: 'text' },
            },
            // UserMessage
            userMessageView: {
                description: 'Вид компонента UserMessage',
                options: ['default', 'secondary', 'accent', 'positive', 'negative', 'warning'],
                control: { type: 'select' },
            },
            userMessageAttachmentsView: {
                description: 'Вид прикреплённых файлов в UserMessage',
                options: ['default', 'secondary'],
                control: { type: 'select' },
            },
            userMessageMaxRows: {
                description: 'Максимальное количество строк при редактировании UserMessage',
                control: { type: 'number' },
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
};
