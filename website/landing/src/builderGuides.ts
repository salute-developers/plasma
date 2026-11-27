/** Инструкции DS Builder в порядке прохождения: от плагинов до генерации кода. */
export const builderGuides = [
    { route: '/docs/builder-plugins', summary: 'Установка плагина, вход и перенос токенов темы в макеты.', short: 'Плагины Figma и Pixso' },
    { route: '/docs/builder-project', summary: 'Проект — пространство команды: участники, роли и дизайн-системы.', short: 'Создание проекта' },
    { route: '/docs/builder-design-system', summary: 'Новая дизайн-система с компонентами SDDS и их токенами.', short: 'Создание дизайн-системы' },
    { route: '/docs/builder-theme', summary: 'Первая тема со стартовым профилем и следующие темы копированием.', short: 'Создание темы' },
    { route: '/docs/builder-tokens', summary: 'Цвета, градиенты, состояния, типографика, размеры и тени.', short: 'Изменение токенов' },
    { route: '/docs/builder-publish', summary: 'Версия дизайн-системы, которую получают CLI, плагины и агенты.', short: 'Публикация дизайн-системы' },
    { route: '/docs/builder-codegen', summary: 'Код дизайн-системы для React, Android и iOS через dsbuilder.', short: 'Генерация кода через CLI' },
] as const;
