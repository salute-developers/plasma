import { disableProps } from '../../../index';

export const createMeta = ({ component, decorators = [] }: any) => {
    return {
        title: 'AI Kit/Input',
        decorators,
        component,
        parameters: {
            controls: {
                disableSaveFromUI: true,
            },
        },
        args: {
            size: 'm',
            mode: 'condensed',
            placeholder: 'Введите сообщение',
            autoFocus: false,
            minRows: 1,
            maxRows: 4,
            submitOnEnter: true,
            clearOnSubmit: true,
            loading: false,
            hasActionBefore: true,
            hasActionAfter: true,
        },
        argTypes: {
            size: {
                description: 'Размер компонента',
                control: 'select',
                options: ['xs', 's', 'm', 'l', 'xl'],
                table: { category: 'variation' },
            },
            mode: {
                description: 'Режим отображения компонента',
                control: 'select',
                options: ['condensed', 'extended'],
                table: { category: 'variation' },
            },
            placeholder: {
                description: 'Плейсхолдер поля ввода',
                control: 'text',
                table: { category: 'content-related' },
            },
            autoFocus: {
                description: 'Автофокус на поле ввода',
                control: 'boolean',
                table: { category: 'content-related' },
            },
            minRows: {
                description: 'Минимальное количество строк textarea',
                control: 'number',
                table: { category: 'layout-related' },
            },
            maxRows: {
                description: 'Максимальное количество строк textarea',
                control: 'number',
                table: { category: 'layout-related' },
            },
            submitOnEnter: {
                description: 'Отправлять сообщение по Enter (Shift+Enter — новая строка)',
                control: 'boolean',
                table: { category: 'behavior-related' },
            },
            clearOnSubmit: {
                description: 'Очищать текст после отправки',
                control: 'boolean',
                table: { category: 'behavior-related' },
            },
            loading: {
                description: 'Состояние загрузки кнопки отправки',
                control: 'boolean',
                table: { category: 'state-related' },
            },
            hasActionBefore: {
                description: 'Показывать слот перед полем ввода',
                control: 'boolean',
                table: { category: 'story-related' },
            },
            hasActionAfter: {
                description: 'Показывать слот после поля ввода',
                control: 'boolean',
                table: { category: 'story-related' },
            },
            ...disableProps([
                'value',
                'onChange',
                'attachments',
                'onAttachmentRemove',
                'onSend',
                'actionBefore',
                'actionAfter',
                'sendNode',
            ]),
        },
    };
};
