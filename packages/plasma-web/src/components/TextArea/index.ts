import type { TextAreaProps as TextAreaPropsBase } from '@salutejs/plasma-hope';

export { TextArea } from './TextArea';

export interface TextAreaProps extends TextAreaPropsBase {
    /**
     * @deprecated не используется в компоненте
     */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}
