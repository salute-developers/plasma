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
};
