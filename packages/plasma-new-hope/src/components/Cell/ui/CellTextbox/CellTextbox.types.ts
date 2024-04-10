import type { HTMLAttributes, ReactNode } from 'react';

type CustomTextboxProps =
    | {
          /**
           * Слот для Title
           */
          title?: string;
          /**
           * Слот для Subtitle
           */
          subtitle?: string;

          /**
           * Слот для Label
           */
          label?: string;

          children?: never;
      }
    | {
          /**
           * Слот для Title
           */
          title?: never;

          /**
           * Слот для Subtitle
           */
          subtitle?: never;

          /**
           * Слот для Label
           */
          label?: never;

          children?: ReactNode;
      };

export type CellTextboxProps = CustomTextboxProps & HTMLAttributes<HTMLDivElement>;
