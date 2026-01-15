import type {
    InputHTMLAttributes,
    SyntheticEvent,
    KeyboardEvent,
    MutableRefObject,
    ReactNode,
    CSSProperties,
} from 'react';

import type { DateInfo } from '../Calendar/Calendar.types';
import type { DatePickerPopoverProps, DatePickerTextFieldProps } from '../DatePicker/SingleDate/SingleDate.types';
import type { LabelProps } from '../TextField/TextField.types';
import type { DatePickerCalendarProps } from '../DatePicker/DatePickerBase.types';
import type { CalendarStateType } from '../Calendar';
import type { Langs } from '../DatePicker/utils/dateHelper';

export type FormattedValues = {
    originalDate?: Date;
    isoDate?: string;
    quarterInfo?: DateInfo;
};

export type DateShortcutItemBase = {
    /**
     *  Подпись к предустановленной дате
     */
    label: string;
    /**
     * Неактивный элемент
     */
    disabled?: boolean;
    /**
     * Слот для контента слева
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа
     */
    contentRight?: ReactNode;
};

export type DateShortcutItem = DateShortcutItemBase & {
    /**
     *  Значение даты, которое будет установлено при выборе
     */
    value: Date;
};

export type InputProps = {
    /**
     * Обработчик вызывается при вводе корректной даты, выборе дня на календаре или по нажатию Enter в поле ввода.
     * @param value - значение даты с временем
     * @param {Object} formattedValues - набор дат в разных форматах
     * @param formattedValue.originalDate - дата как экземпляр Date
     * @param formattedValue.isoDate - дата в формате ISO
     * @param formattedValue.quarterInfo - информация о кварталах, если `type='Quarters'`
     * @return void
     */
    onCommitDate?: (value: string, formattedValues: FormattedValues) => void;

    /**
     * Обработчик изменения значения.
     * @param event - событие при изменении значения
     * @param value - значение даты с временем
     * @param {Object} formattedValues - набор дат в разных форматах
     * @param formattedValue.originalDate - дата как экземпляр Date
     * @param formattedValue.isoDate - дата в формате ISO
     * @return void
     */
    onChangeValue?: (
        event: SyntheticEvent<HTMLInputElement> | null,
        value?: string,
        formattedValues?: Omit<FormattedValues, 'quarterInfo'>,
    ) => void;

    /**
     * Обработчик по нажатию Enter
     * @param event - событие при изменении значения
     * @param value - значение даты с временем
     * @return void
     */
    onSearch?: (event?: KeyboardEvent<HTMLInputElement>, value?: string) => void;
} & Omit<DatePickerTextFieldProps, 'onChange' | 'onChangeValue' | 'onCommitDate'> &
    LabelProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value' | 'size'>;

export type PopoverProps = Omit<DatePickerPopoverProps, 'isOpen' | 'closeAfterDateSelect'> &
    Pick<DatePickerCalendarProps, 'calendarContainerWidth' | 'calendarContainerHeight'>;

export type CalendarProps = {
    /**
     * Формат даты без времени
     * @default `DD.MM.YYYY`
     */
    dateFormat?: string;
    /**
     * Формат времени
     * @default `HH:mm:ss`
     */
    timeFormat?: string;
    /**
     * Разделитель между датой и временем
     * @default ` `
     */
    dateTimeSeparator?: string;
    /**
     * Формат даты и времени применяется в качестве маски ввода.
     */
    maskWithFormat?: boolean;
    /**
     * Режим отображения: одиночный или двойной.
     */
    isDouble?: boolean;
    /**
     * Дата, которая будет установлена,
     * если пользователь сперва выберет время на TimeGrid.
     */
    dateOnTimeSelectOnly?: Date;
    /**
     * Список предустановленных дат,
     * которые можно выбрать в выпадающем календаре
     */
    dateShortcuts?: DateShortcutItem[];
    /**
     * Ширина списока предустановленных дат
     */
    dateShortcutsWidth?: CSSProperties['width'];
    /**
     * Положение списка предустановленных дат
     * @default 'left'
     */
    dateShortcutsPlacement?: 'right' | 'left';
} & Omit<DatePickerCalendarProps, 'format' | 'maskWithFormat' | 'calendarContainerWidth' | 'calendarContainerHeight'>;

type VariationProps = {
    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Компонент доступен только для чтения.
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
};

export type DateTimePickerProps = VariationProps & CalendarProps & PopoverProps & InputProps;
export type DateTimePickerRootProps = {
    eventTooltipSize?: string;
} & Omit<DateTimePickerProps, 'opened' | 'defaultValue' | 'onChangeValue'>;

export type CorrectDates = {
    input: string;
    calendar: Date | undefined;
    time: Date | undefined;
};

export type UseDateTimePickerArgs = {
    // currentValue: string;
    inputRef: MutableRefObject<HTMLInputElement | null>;
    outerValue?: Date | string;
    defaultDate?: Date;
    // correctDates: CorrectDates;
    // setInnerDate: Dispatch<SetStateAction<string | DateType>>;
    // setCorrectDates: Dispatch<SetStateAction<CorrectDates>>;

    preserveInvalidOnBlur?: boolean;
    // delimiters?: string[];
    valueError?: boolean;
    valueSuccess?: boolean;
    type?: CalendarStateType;
    lang?: Langs;
    disabled?: boolean;
    readOnly?: boolean;
    maskWithFormat?: boolean;
    // format?: string;
    dateFormat?: string;
    timeFormat?: string;
    dateTimeSeparator?: string;
    min?: Date;
    max?: Date;
    includeEdgeDates?: boolean;
    dateOnTimeSelectOnly?: Date;
    onChangeValue?: InputProps['onChangeValue'];
    onCommitDate?: InputProps['onCommitDate'];
    onBlur?: InputProps['onBlur'];
};
