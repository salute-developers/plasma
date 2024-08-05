import { HTMLAttributes, ReactNode } from 'react';

export type BreadcrumbsItem =
    | {
          /**
           * Ссылка на страницу ( если не указана, то ссылка не кликабельна )
           */
          href?: string;

          /**
           * Элемент заголовка
           */
          title: string;
      }
    | {
          /**
           * Функция рендера элемента
           */
          renderItem: () => ReactNode;
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
