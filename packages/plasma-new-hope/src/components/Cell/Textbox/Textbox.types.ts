import type { HTMLAttributes, ReactNode } from 'react';

type CustomTextboxProps =
    | {
          /**
           * Слот для Title
           */
          title?: ReactNode;

          /**
           * Слот для Subtitle
           */
          subtitle?: ReactNode;

          /**
           * Слот для Label
           */
          label?: ReactNode;

          children?: undefined;
      }
    | {
          /**
           * Слот для Title
           */
          title?: undefined;

          /**
           * Слот для Subtitle
           */
          subtitle?: undefined;

          /**
           * Слот для Label
           */
          label?: undefined;

          children?: ReactNode;
      };

export type TextboxProps = HTMLAttributes<HTMLDivElement> & CustomTextboxProps;
