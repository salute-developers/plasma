// INFO: Issue об этом решении - https://github.com/salute-developers/plasma/issues/1219

import React from 'react';

interface DisabledProps {
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
}

export interface InputHTMLAttributes<T> extends DisabledProps, React.InputHTMLAttributes<T> {
    /**
     * Тип элемента формы
     */
    type?: string;
    /**
     * Определяет уникальное имя элемента формы
     */
    name?: string;
    /**
     * Определяет значение элемента формы
     */
    value?: string | ReadonlyArray<string> | number;
    /**
     * Помечен ли заранее такой элемент формы, как флажок или переключатель
     */
    checked?: boolean;
    /**
     * Элемент формы не может изменяться пользователем
     */
    readOnly?: boolean;
    /**
     * Выводит текст внутри поля формы, который исчезает при получении фокуса
     */
    placeholder?: string;
    /**
     * Флаг обязательности поля
     */
    required?: boolean;
    /**
     * Минимальная длина значения поля
     */
    minLength?: number;
    /**
     * Максимальная длина значения поля
     */
    maxLength?: number;
    /**
     * Обработчик изменения элемента формы
     */
    onChange?: React.InputHTMLAttributes<T>['onChange'];
    /**
     * Обработчик focus на элементе формы
     */
    onFocus?: React.InputHTMLAttributes<T>['onFocus'];
    /**
     * Обработчик blur на элементе формы
     */
    onBlur?: React.InputHTMLAttributes<T>['onBlur'];
}
