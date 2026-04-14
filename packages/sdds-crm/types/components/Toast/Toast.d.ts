export { useToast } from '@salutejs/plasma-new-hope/styled-components';
export declare const Toast: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            light: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        closeIconType: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        pilled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('react').HTMLAttributes<HTMLButtonElement> &
        import('@salutejs/plasma-new-hope/types/components/Toast/Toast.types.js').CustomToastProps &
        import('react').RefAttributes<HTMLDivElement>
>;
export declare const ToastController: (
    props: import('@salutejs/plasma-new-hope/types/components/Toast/Toast.types.js').ToastControllerProps,
) => JSX.Element | null;
export declare const ToastProvider: ({
    children,
    defaultToastArgs,
}: import('@salutejs/plasma-new-hope/types/components/Toast/ToastProvider/ToastProvider.types.js').ToastProviderProps) => JSX.Element;
