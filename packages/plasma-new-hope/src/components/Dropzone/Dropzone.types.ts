import type { DragEvent, ReactNode } from 'react';
import type { HTMLAttributesWithoutDraggable, InputHTMLAttributesWithoutDraggable } from 'src/engines/types';

export type FileArgs = {
    acceptedFiles: File[];
    rejectedFiles?: File[];
    error?: string;
};

export type ValidatorReturnType = Promise<FileArgs>;
export type FileProcessHandler = (files: FileArgs) => Promise<void> | void;

export type DropzoneProps = InputHTMLAttributesWithoutDraggable<HTMLInputElement, 'title' | 'size'> & {
    /**
     * Позволяет выбирать несколько файлов для загрузки
     */
    multiple?: boolean;
    /**
     * Слот для Title
     */
    title?: ReactNode;
    /**
     * Слот для описания
     */
    description?: ReactNode;
    /**
     * Слот для иконки
     */
    icon?: ReactNode;
    /**
     * Расположение иконки
     * @default 'left'
     */
    iconPlacement?: 'top' | 'left';
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
    /**
     * Компонент растягивается на всю доступную ширину
     */
    stretch?: boolean;
    /**
     * Функция, вызываемая в момент вхождения (один раз) курсора внутрь границ Dropzone
     */
    onDragEnter?: (event: DragEvent<HTMLDivElement>) => void;
    /**
     * Функция, вызываемая в момент выхода (один раз) курсора из Dropzone
     */
    onDragLeave?: (event: DragEvent<HTMLDivElement>) => void;
    /**
     * Функция, вызываемая при движении курсора с файлами внутри Dropzone
     */
    onDragOver?: (event: DragEvent<HTMLDivElement>) => void;
    /**
     * Функция, вызываемая для валидации файлов, перед onDrop или onChoseFiles
     */
    validator?: (files: File[]) => ValidatorReturnType;
    /**
     * Функция, вызываемая при drop файлов
     */
    onDrop?: FileProcessHandler;
    /**
     * Функция, вызываемая при выборе файлов
     */
    onChoseFiles?: FileProcessHandler;
};

export type DropzoneRootProps = HTMLAttributesWithoutDraggable<HTMLDivElement> & {
    view?: string;
    size?: string;
    disabled?: boolean;
};
