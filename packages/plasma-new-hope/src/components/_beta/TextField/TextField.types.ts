import type { InputProps } from '../Input';

export type TextFieldLabelPlacement = 'outer' | 'inner' | 'none';

export type TextFieldProps = Omit<InputProps, 'chips' | 'hidePlaceholderOnChips' | 'indicator' | 'label'> & {
    /**
     * Подпись поля. При labelPlacement="none" используется как доступное имя, если aria-label не задан.
     */
    label?: string;
    /**
     * Положение подписи: снаружи, внутри или без видимой подписи.
     * При внешней подписи подсказка находится рядом с ней; иначе положение задаёт hint.targetPlacement.
     * @default outer
     */
    labelPlacement?: TextFieldLabelPlacement;
    /**
     * Одновременно отображать внутреннюю подпись и placeholder при пустом значении.
     * @default false
     */
    keepPlaceholder?: boolean;
    /**
     * Отображать индикатор обязательности поля. Не включает нативную валидацию required.
     * Имеет приоритет над optionalText.
     * @default false
     */
    requiredIndicator?: boolean;
    /**
     * Положение индикатора обязательности относительно подписи или поля.
     * @default right
     */
    requiredPlacement?: 'left' | 'right';
    /**
     * Подпись необязательного поля. Скрывается при requiredIndicator=true.
     */
    optionalText?: string;
};
