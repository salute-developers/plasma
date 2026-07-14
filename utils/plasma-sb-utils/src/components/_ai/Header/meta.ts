import { disableProps } from '../../../index';

export const createMeta = ({ component, componentConfig, decorators = [] }: any) => {
    const { views, sizes } = componentConfig;
    const textAligns = ['start', 'center'] as const;

    return {
        title: 'AI Kit/Header',
        component,
        decorators,
        parameters: {
            docs: {
                source: {
                    type: 'code',
                },
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
            title: {
                description: 'Заголовок',
                control: 'text',
                table: { category: 'content-related' },
            },
            description: {
                description: 'Подзаголовок / описание',
                control: 'text',
                table: { category: 'content-related' },
            },
            textAlign: {
                description: 'Выравнивание текстового контента',
                options: textAligns,
                control: { type: 'select' },
                table: { category: 'content-related' },
            },
            hasDivider: {
                description: 'Показывать разделитель',
                control: 'boolean',
                table: { category: 'layout-related' },
            },
            hasActionBefore: {
                description: 'Показывать контент перед заголовком (иконка, аватар и т.п.)',
                control: 'boolean',
                table: { category: 'story-related' },
            },
            hasActionAfter: {
                description: 'Показывать контент после заголовка (кнопка закрытия и т.п.)',
                control: 'boolean',
                table: { category: 'story-related' },
            },
            ...disableProps(['actionBefore', 'actionAfter']),
        },
        args: {
            view: 'default',
            size: 'xl',
            title: 'AI Chat',
            description: 'SubTitle',
            textAlign: 'start',
            hasDivider: false,
            hasActionBefore: true,
            hasActionAfter: true,
        },
    };
};
