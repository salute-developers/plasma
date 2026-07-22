import { disableProps } from '../../../index';

export const createMeta = ({ component, componentConfig, decorators = [] }: any) => {
    const { views, sizes } = componentConfig;
    const contentVariants = ['placeholder', 'text', 'gallery'];

    return {
        title: 'AI Kit/Answer',
        component,
        decorators,
        parameters: {
            controls: {
                disableSaveFromUI: true,
            },
        },
        argTypes: {
            storyContainerWidth: {
                description: 'Ширина контейнера стори (только для демонстрации)',
                control: { type: 'number' },
            },
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
                description: 'Заголовок ответа',
                control: 'text',
                table: { category: 'content-related' },
            },
            contentVariant: {
                description: 'Вариант контента для демонстрации',
                options: contentVariants,
                control: { type: 'select' },
                table: { category: 'content-related' },
            },
            isLoading: {
                description: 'Состояние загрузки',
                control: { type: 'boolean' },
                table: { category: 'loading-related' },
                if: { arg: 'isError', truthy: false },
            },
            loaderTitle: {
                description: 'Заголовок при загрузке',
                control: 'text',
                table: { category: 'loading-related' },
                if: { arg: 'isError', truthy: false },
            },
            isError: {
                description: 'Состояние ошибки',
                control: { type: 'boolean' },
                table: { category: 'error-related' },
                if: { arg: 'isLoading', truthy: false },
            },
            errorTitle: {
                description: 'Заголовок при ошибке',
                control: 'text',
                table: { category: 'error-related' },
                if: { arg: 'isLoading', truthy: false },
            },
            errorDescription: {
                description: 'Подпись при ошибке',
                control: 'text',
                table: { category: 'error-related' },
                if: { arg: 'isLoading', truthy: false },
            },
            ...disableProps(['title', 'content', 'footer', 'customLoader', 'customError']),
        },
        args: {
            storyContainerWidth: 800,
            view: 'default',
            size: 'm',
            title: 'Заголовок ответа',
            contentVariant: 'placeholder',
            isLoading: false,
            loaderTitle: 'Генерирую ответ...',
            isError: false,
            errorTitle: 'Произошла ошибка',
            errorDescription: 'Не удалось получить ответ. Попробуйте ещё раз.',
        },
    };
};
