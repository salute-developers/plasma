import type { Dispatch, HTMLAttributes, InputHTMLAttributes, ReactNode, SetStateAction } from 'react';

export type ItemErrorBehavior = 'remove-symbol' | 'keep' | 'remove-code' | 'forbid-enter';
export type CodeErrorBehavior = 'remove-code' | 'keep';

export type CodeInputProps = {
    /**
     * Значение поля ввода
     */
    value?: string;
    /**
     * Строка равная, длине кода или же один символ,
     * для отображения в качестве placeholder
     */
    placeholder?: string;
    /**
     * Автофокус на компоненте
     */
    autoFocus?: boolean;
    /**
     * Длина кода
     * @default 6
     */
    codeLength?: 4 | 5 | 6;
    /**
     * Подпись к компоненту
     */
    caption?: ReactNode;
    /**
     * Выравнивание подписи
     * @default left
     */
    captionAlign?: 'left' | 'center';
    /**
     * Скрытые поля
     */
    hidden?: boolean;
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Размер экрана
     */
    screen?: 'large' | 'medium' | 'small';
    /**
     * Компонент не активен
     */
    disabled?: boolean;
    /**
     * Флаг ошибки кода
     */
    isError?: boolean;
    /**
     * Ширина компонента
     * @description
     * Значение может принимать строку с единицой измерения CSS (px, rem и тд.).
     * Если передано число без единицы измерения - рассчитывается в rem.
     */
    width?: string | number;
    /**
     * Колбек для установки флага ошибки
     */
    setIsError?: Dispatch<SetStateAction<boolean>>;
    /**
     * Регулярное выражение или строка, по которой проверяется символ при вводе
     * @default '^\\d+$' - только цифры
     */
    allowedSymbols?: string | RegExp;
    /**
     * Поведение элемента поля ввода, при вводе некорректного значения
     * - `remove-symbol` - проигрывается анимация ошибки, значение элемента очищается
     * - `keep` - проигрывается анимация ошибки, значение остается
     * - `remove-code` - проигрывается анимация ошибки, значение всего поля очищается
     * @default 'remove-symbol'
     */
    itemErrorBehavior?: ItemErrorBehavior;
    /**
     * Поведение элемента поля ввода, при вводе некорректного значения
     * - `remove-code` - проигрывается анимация ошибки, значение всего поля очищается
     * - `keep` - проигрывается анимация ошибки, значение остается
     * @default 'remove-code'
     */
    codeErrorBehavior?: CodeErrorBehavior;
    /**
     * Коллбек, вызываемый при изменении значения кода
     */
    onChange?: (value: string) => void;
    /**
     * Коллбек, вызываемый при вводе полного значения в поле
     */
    onFullCodeEnter?: (code: string) => void;
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'aria-label' | 'autoComplete'> &
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;
