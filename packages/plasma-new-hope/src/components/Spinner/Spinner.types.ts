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
               * Размер spinner
               */
              size?: string | number;
              /**
               * Цвет spinner
               */
              view?: string;
          }
        | {
              /**
               * Кастомная ширина spinner
               */
              width: number;
              /**
               * Кастомная высота spinner
               */
              height: number;
              size?: never;
              /**
               * Цвет spinner
               */
              view?: string;
          }
        | {
              /**
               * Кастомная ширина spinner
               */
              width: string;
              /**
               * Кастомная высота spinner
               */
              height: string;
              size?: never;
              /**
               * Цвет spinner
               */
              view?: string;
          }
    );
