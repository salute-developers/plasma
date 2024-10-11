import { HTMLAttributes, ReactNode } from 'react';

export type BreadcrumbsItem =
    | {
          /**
           * Обработчик клика на элемент
           */
          onClick?: () => void;
          /**
           * Элемент заголовка
           */
          title: string;
          /**
           * Элемент выключен
           */
          disabled?: boolean;

          href?: never;
          renderItem?: never;
      }
    | {
          /**
           * Ссылка на страницу ( если не указана, то ссылка не кликабельна )
           */
          href?: string;
          /**
           * Элемент заголовка
           */
          title: string;
          /**
           * Элемент выключен
           */
          disabled?: boolean;

          onClick?: never;
          renderItem?: never;
      }
    | {
          /**
           * Функция рендера элемента
           */
          renderItem: () => ReactNode;

          onClick?: never;
          disabled?: never;
          href?: never;
          title?: never;
      };

type Breadcrumbs = {
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;

    /**
     * Элемент разделителя
     */
    separator?: ReactNode;

    /**
     * Элементы Breadcrumbs
     */
    items: BreadcrumbsItem[];

    /**
     * Количество показываемых элементов - все остальные сокращаются
     */
    showItems?: number;
};

export type BreadcrumbsProps = HTMLAttributes<HTMLDivElement> & Breadcrumbs;
