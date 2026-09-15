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
            },
            mode: {
                description: 'Режим отображения компонента',
                control: 'select',
                options: ['condensed', 'extended'],
            },
            placeholder: {
                description: 'Плейсхолдер поля ввода',
                control: 'text',
            },
            autoFocus: {
                description: 'Автофокус на поле ввода',
                control: 'boolean',
            },
            minRows: {
                description: 'Минимальное количество строк textarea',
                control: 'number',
            },
            maxRows: {
                description: 'Максимальное количество строк textarea',
                control: 'number',
            },
            submitOnEnter: {
                description: 'Отправлять сообщение по Enter (Shift+Enter — новая строка)',
                control: 'boolean',
            },
            clearOnSubmit: {
                description: 'Очищать текст после отправки',
                control: 'boolean',
            },
            loading: {
                description: 'Состояние загрузки кнопки отправки',
                control: 'boolean',
            },
            hasActionBefore: {
                description: 'Показывать слот перед полем ввода',
                control: 'boolean',
            },
            hasActionAfter: {
                description: 'Показывать слот после поля ввода',
                control: 'boolean',
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
