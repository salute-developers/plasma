export type SpinnerInnerProps = {
    wrapperWidth: string;
    wrapperHeight: string;
    svgWidth: string | number;
    svgHeight: string | number;
    color: string;
};

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> &
    (
        | {
              width?: never;
              height?: never;
              /**
               * Размер спиннера
               */
              size?: string | number;
              /**
               * Цвет спиннера
               */
              view?: string;
          }
        | {
              /**
               * Кастомная ширина спиннера
               */
              width: number;
              /**
               * Кастомная высота спиннера
               */
              height: number;
              size?: never;
              /**
               * Цвет спиннера
               */
              view?: string;
          }
        | {
              /**
               * Кастомная ширина спиннера
               */
              width: string;
              /**
               * Кастомная высота спиннера
               */
              height: string;
              size?: never;
              /**
               * Цвет спиннера
               */
              view?: string;
          }
    );
