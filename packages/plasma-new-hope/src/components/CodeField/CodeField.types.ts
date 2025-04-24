import type { ChangeEvent } from 'react';

export type CodeFieldProps = {
    /**
     * Коллбек, вызываемый при вводе полного значения в поле
     */
    onFullCodeEnter: (code: string) => void;
    /**
     * Длина кода
     * @default 6
     */
    codeLength?: number;
    /**
     * Подпись к компоненту
     */
    caption?: string;
    /**
     * Выравнивание подписи
     * @default left
     */
    captionAlign?: 'left' | 'center';
    /**
     * Вид компонента
     * @default default
     */
    shape?: 'default' | 'segmented';
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Код неверный
     */
    isError?: boolean;
    /**
     * Регулярное выражение, по которому проверяется символ при вводе
     * @default \/d\g - только цифры
     */
    itemAllowedSymbols?: RegExp;
    /**
     * Поведение элемента поля ввода, при вводе некорректного значения
     * - `remove-symbol` - проигрывается анимация ошибки, значение элемента очищается
     * - `keep` - проигрывается анимация ошибки, значение остается
     * - `remove-code` - проигрывается анимация ошибки, значение всего поля очищается
     * @default 'remove-symbol'
     */
    itemErrorBehavior?: 'remove-symbol' | 'keep' | 'remove-code';
    /**
     * Коллбек, вызываемый при изменении значения кода
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
