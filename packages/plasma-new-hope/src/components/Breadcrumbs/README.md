Структура файлов:

-   Breadcrumbs.types.ts
-   Breadcrumbs.tokens.ts
-   Breadcrumbs.tsx
-   index.ts
-   variants:
-   -   \_size:
-   -   -   base.ts
-   -   -   tokens.json
-   ui:
-   -   BreadcrumbItem:
-   -   -   BreadcrumbItem.tsx
-   -   BreadcrumbShorter:
-   -   -   BreadcrumbShorter.tsx
-   -   BreadcrumbSeparator:
-   -   -   BreadcrumbSeparator.tsx

Логика работы:

1. На вход идет 1 обязательный параметр: items

```jsx
<Breadcrumbs items={[{ title: 'Главная', href: '/' }]}></Breadcreumbs>
```

2. Затем генерируется массив элементов хлебных крошек, между ними сепаратор ( если указан пропс, то используется элемент из параметра, иначе стандартный из BreadcrumbSeparator )

```jsx
<Breadcrumbs items={[{ title: 'Главная', href: '/' }]} separator=">"></Breadcreumbs>
```

2.1. При генерации BreadcrumbItem, смотрит на href. Если он есть, то добавляется тег a, с указанной ссылкой, иначе ссылка не кликабельна

```jsx
<Breadcrumbs
    items={[
        { title: 'Главная', href: '/' },
        { title: 'Контакты' }, // Без ссылки
    ]}
    separator=">"
></Breadcreumbs>
```

3. Можно указать в item, вместо title и href - renderItem. Эта функция, которая возвращает любое, что придумал разработчик. кастомный шортер, определенный функционал для него ( например кнопку )

```jsx
const renderItem = () => {
    return <Button>Контакты</Button>
}
<Breadcrumbs
    items={[
        {title: 'Главная', href: '/'},
        {renderItem: renderItem}
        {title: 'Адрес'}
    ]}
    separator=">">
</Breadcreumbs>
```

ТАКЖЕ: Можно указать кол-во видимых элементов через параметр showItems. ShowItems: если указано четное число, напрмер 2 - то распределяется навномерно по 1 с каждой стороны. Если нечетное, напрмер 3 - то две будет справа и 1 слева. Все оставльное сокращается шортером

```jsx
const renderItem = () => {
    return <Button>Контакты</Button>
}
<Breadcrumbs
    items={[
        {title: 'Главная', href: '/'},
        {renderItem: renderItem}
        {title: 'Адрес'}
    ]}
    showItems={2}
    separator=">">
</Breadcreumbs>
```

4. Затем все элементы рендерятся и показываются пользователю
