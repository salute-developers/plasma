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
            },
            size: {
                description: 'Размер компонента',
                options: sizes,
                control: { type: 'select' },
            },
            title: {
                description: 'Заголовок',
                control: 'text',
            },
            description: {
                description: 'Подзаголовок / описание',
                control: 'text',
            },
            textAlign: {
                description: 'Выравнивание текстового контента',
                options: textAligns,
                control: { type: 'select' },
            },
            hasDivider: {
                description: 'Показывать разделитель',
                control: 'boolean',
            },
            hasActionBefore: {
                description: 'Показывать контент перед заголовком (иконка, аватар и т.п.)',
                control: 'boolean',
            },
            hasActionAfter: {
                description: 'Показывать контент после заголовка (кнопка закрытия и т.п.)',
                control: 'boolean',
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
