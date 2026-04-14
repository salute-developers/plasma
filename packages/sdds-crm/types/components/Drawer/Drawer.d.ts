/**
 * Компонент Drawer.
 */
export declare const Drawer: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        borderRadius: {
            none: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        Omit<import('@salutejs/plasma-new-hope/styled-components').PopupProps, 'draggable' | 'resizable'> &
        import('@salutejs/plasma-new-hope/types/components/Panel/Panel.types.js').PanelProps & {
            animationInfo?: import('@salutejs/plasma-new-hope/types/components/Drawer/Drawer.types.js').DrawerAnimationInfo;
            placement?: import('@salutejs/plasma-new-hope/types/components/Drawer/Drawer.types.js').DrawerPlacement;
            asModal?: boolean;
            customBackgroundColor?: string;
            customContentBackgroundColor?: string;
            withBlur?: boolean;
            closeOnEsc?: boolean;
            closeOnOverlayClick?: boolean;
            onEscKeyDown?: (event: KeyboardEvent) => void;
            onOverlayClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
            initialFocusRef?: React.RefObject<HTMLElement>;
            focusAfterRef?: React.RefObject<HTMLElement>;
            onClose?: () => void;
        } & import('react').RefAttributes<HTMLDivElement>
>;
/**
 * Компонент части контента Drawer.
 */
export declare const DrawerContent: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<
        import('@salutejs/plasma-new-hope/types/engines/types.js').Variants
    > & {
        view?: string;
    } & import('react').HTMLAttributes<HTMLDivElement> &
        import('react').RefAttributes<HTMLDivElement>
>;
/**
 * Компонент верхней части Drawer.
 */
export declare const DrawerHeader: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<
        import('@salutejs/plasma-new-hope/types/engines/types.js').Variants
    > & {
        hasClose?: boolean;
        closePlacement?: import('@salutejs/plasma-new-hope/styled-components').ClosePlacementType;
        actions?: import('react').ReactNode;
        onClose?: () => void;
        view?: string;
    } & import('react').HTMLAttributes<HTMLDivElement> &
        import('react').RefAttributes<HTMLDivElement>
>;
/**
 * Компонент нижней контента Drawer.
 */
export declare const DrawerFooter: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<
        import('@salutejs/plasma-new-hope/types/engines/types.js').Variants
    > & {
        view?: string;
    } & import('react').HTMLAttributes<HTMLDivElement> &
        import('react').RefAttributes<HTMLDivElement>
>;
