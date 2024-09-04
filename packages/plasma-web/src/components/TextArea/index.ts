import type { TextAreaProps as TextAreaPropsBase } from '@salutejs/plasma-hope';

export { TextArea } from './TextArea';

type RequiredProps = {
    /**
     * Задает выравнивание индикатора обязательности поля
     * @default right
     */
    requiredPlacement?: 'left' | 'right';
} & (
    | {
          /**
           * Флаг обязательности поля
           */
          required: true;
          /**
           * Флаг необязательности поля
           */
          optional?: never | false;
      }
    | {
          /**
           * Флаг необязательности поля
           */
          optional?: true;
          /**
           * Флаг обязательности поля
           */
          required?: never | false;
      }
);

export type TextAreaProps = TextAreaPropsBase & {
    /**
     * @deprecated не используется в компоненте
     */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
} & RequiredProps;
