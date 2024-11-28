import type { RootProps } from '../../../../engines';
import type { TextFieldPrimitiveValue, TextFieldProps, TextFieldRootProps } from '../../TextField.types';

export interface TextFieldChipProps {
    /**
     * ID для чипа.
     */
    id: string;
    /**
     * Отображаемый текст.
     */
    text: TextFieldPrimitiveValue;
    /**
     * Выбранное значение.
     */
    value: TextFieldPrimitiveValue;
    /**
     * Вид чипа.
     */
    view?: string;
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
    /**
     * Элемент формы не может изменяться пользователем
     */
    readOnly?: boolean;
    /**
     * Root обертка для применения view валидации
     */
    rootWrapper: RootProps<HTMLDivElement, TextFieldRootProps>;
    /**
     * Обработчик удаления выбранного значения.
     */
    onClear: (id: string) => void;
    /**
     * Обработчик клика на выбранное значение.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Обработчик нажатия клавиши.
     */
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>, chipId: string) => void;
    /**
     * Внешний вид chip.
     */
    chipType?: TextFieldProps['chipType'];
}
