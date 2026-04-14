export declare const Dropzone: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('@salutejs/plasma-new-hope/types/engines/types.js').InputHTMLAttributesWithoutDraggable<
            HTMLInputElement,
            'size' | 'title'
        > & {
            multiple?: boolean;
            title?: React.ReactNode;
            description?: React.ReactNode;
            icon?: React.ReactNode;
            iconPlacement?: 'top' | 'left';
            size?: string;
            view?: string;
            disabled?: boolean;
            stretch?: boolean;
            onDragEnter?: (event: import('react').DragEvent<HTMLDivElement>) => void;
            onDragLeave?: (event: import('react').DragEvent<HTMLDivElement>) => void;
            onDragOver?: (event: import('react').DragEvent<HTMLDivElement>) => void;
            validator?: (
                files: File[],
            ) => import('@salutejs/plasma-new-hope/types/components/Dropzone/Dropzone.types.js').ValidatorReturnType;
            onDrop?: import('@salutejs/plasma-new-hope/types/components/Dropzone/Dropzone.types.js').FileProcessHandler;
            onChoseFiles?: import('@salutejs/plasma-new-hope/types/components/Dropzone/Dropzone.types.js').FileProcessHandler;
        } & import('react').RefAttributes<HTMLInputElement>
>;
