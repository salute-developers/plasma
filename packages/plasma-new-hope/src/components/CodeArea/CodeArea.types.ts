import type { ReactNode, TextareaHTMLAttributes } from 'react';
import type { Language } from 'prism-react-renderer';

export type CodeAreaProps = {
    /**
     * Слот заголовка над полем кода.
     */
    header?: ReactNode;
    /**
     * Размер компонента.
     * @default m
     */
    size?: string;
    /**
     * Автоматически подстраивать высоту поля под количество строк.
     * @default false
     */
    autoResize?: boolean;
    /**
     * Язык подсветки синтаксиса.
     * @default tsx
     */
    language?: Language;
    /**
     * Показывать номера строк.
     * @default false
     */
    showLineNumbers?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
