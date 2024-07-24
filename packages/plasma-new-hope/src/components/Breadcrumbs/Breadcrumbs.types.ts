import { HTMLAttributes, ReactNode } from 'react';

export type BreadcrumbsItem =
    | {
          /**
           * Ссылка на страницу ( если не указана, то ссылка не кликабельна )
           */
          href?: string;

          /**
           * Элемент крошки
           */
          title: string;
      }
    | {
          /**
           * Функция рендера элемента)
           */
          renderItem: () => ReactNode;
      };

type Breadcrumbs = {
    view?: string;
    /**
     * Стандартный размер текста элементов
     */
    size?: 'xs' | 's' | 'm' | 'l';

    /**
     * Элемент разделителя
     */
    separator?: ReactNode;

    /**
     * Элементы крошек
     */
    items: BreadcrumbsItem[];

    /**
     * Количество показываемых элементов - все оставльные сокращаются
     */
    showItems?: number;
};

export type BreadcrumbsProps = HTMLAttributes<HTMLDivElement> & Breadcrumbs;
