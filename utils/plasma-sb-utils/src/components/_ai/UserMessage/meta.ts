import { disableProps } from '../../../index';

export const createMeta = ({ component, componentConfig, decorators = [] }: any) => {
    const { views, sizes } = componentConfig;
    const fileContentViews = ['default', 'secondary'];
    const attachmentTypes = ['file', 'fileGroup', 'image', 'none'] as const;

    return {
        title: 'AI Kit/UserMessage',
        component,
        decorators,
        parameters: {
            controls: {
                disableSaveFromUI: true,
            },
        },
        argTypes: {
            view: {
                description: 'Вид компонента',
                options: views,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            size: {
                description: 'Размер компонента',
                options: sizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            attachmentsView: {
                description: 'Вид прикреплённых файлов',
                options: fileContentViews,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            maxRows: {
                description: 'Максимальное количество строк при редактировании',
                control: { type: 'number' },
                table: { category: 'layout-related' },
            },
            attachmentType: {
                description: 'Тип вложений для демонстрации',
                options: attachmentTypes,
                control: { type: 'select' },
                table: { category: 'content-related' },
            },
            initialValue: {
                description: 'Начальное значение текста сообщения',
                control: 'text',
                table: { category: 'content-related' },
            },
            ...disableProps([
                'actions',
                'attachments',
                'isEditing',
                'onEdit',
                'onEditKeyDown',
                'value',
                'textAreaRef',
                'onFocus',
                'onBlur',
                'onEditKeyDown',
            ]),
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
};
