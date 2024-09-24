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

type ClearProps =
    | {
          /**
           * view применяется с clear-токенами
           */
          clear?: boolean;
          /**
           * отобразить ли divider
           */
          hasDivider?: boolean;
      }
    | {
          /**
           * view применяется с clear-токенами
           */
          clear?: false;
          /**
           * отобразить ли divider
           */
          hasDivider?: never;
      };

export type TextAreaProps = TextAreaPropsBase & {
    /**
     * @deprecated не используется в компоненте
     */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
} & RequiredProps &
    ClearProps;
