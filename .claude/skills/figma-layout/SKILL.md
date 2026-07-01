---
name: figma-layout
description: Верстать продуктовые Figma-макеты на готовых компонентах SDDS/Plasma. Использовать, когда нужно реализовать страницу, экран приложения, форму, dashboard, widget, layout section или feature view по Figma, опираясь на sdds-mcp как источник актуальной информации о компонентах, props, variants, tokens, темах и примерах. Не использовать для создания или правки компонентов самой дизайн-системы.
---

# Верстка Figma-макетов на SDDS/Plasma

Использовать этот skill, чтобы собрать пользовательский интерфейс из существующих компонентов SDDS/Plasma по Figma-макету. Агент должен действовать как consumer дизайн-системы: выбирать готовые компоненты, компоновать их, применять токены и темы, но не менять реализацию компонентов дизайн-системы без прямого запроса.

## Границы skill

-   Использовать для продуктовой верстки: страницы, экраны, формы, карточки, списки, панели, dashboard, виджеты и составные layouts.
-   Не использовать `imagegen` для UI, который можно сверстать кодом и компонентами.
-   Не полагаться на память о компонентах. Актуальную информацию сначала получать из `sdds-mcp`, затем сверять с установленными зависимостями проекта.

## Обязательный порядок работы

1. Определить цель верстки:
    - какой экран или flow реализуется;
    - где должен появиться код: app, package, route, story, playground или отдельный компонент приложения;
    - какой UI framework и styling stack уже используются в проекте.
2. Получить точную Figma-ноду:
    - извлечь `fileKey` и `nodeId` из ссылки;
    - преобразовать `node-id=123-456` в `123:456`;
    - если ссылки на конкретную ноду нет, попросить ее до реализации.
3. Извлечь данные из Figma:
    - вызвать доступный Figma MCP/tool для design context точной ноды;
    - получить screenshot той же ноды;
    - получить/извлечь component properties и text styles всех Figma-инстансов дизайн-системы внутри ноды: `component name`, `size`, `view`, `appearance`, `state`, `labelPlacement`, `contentLeft`, `contentRight`, typography token и другие;
    - если обычный design context не раскрывает свойства конкретного инстанса, использовать Figma MCP/Plugin API для чтения component properties, variants и текстовых стилей нужных потомков до реализации;
    - использовать Figma-generated React/Tailwind только как справочник по структуре, не как готовый код.
4. Подключить знания SDDS через MCP:
    - найти доступные `sdds-mcp` инструменты через уже активные tools или `tool_search` по `sdds`;
    - использовать `sdds-mcp` до выбора компонентов;
    - запросить через MCP подходящие компоненты, их props, variants, imports, usage examples, tokens, themes, limitations и accessibility notes;
    - если `sdds-mcp` недоступен, явно сообщить об этом и продолжать только по локальным зависимостям/документации проекта.
5. Проверить установленную версию дизайн-системы в проекте:
    - прочитать `package.json`, lockfile или workspace config;
    - найти существующие примеры использования SDDS/Plasma в кодовой базе;
    - если данные MCP конфликтуют с установленной версией, использовать API, который реально доступен в проекте, и отметить расхождение.
6. Сопоставить макет с компонентами:
    - для каждого смыслового блока выбрать готовый компонент или композицию компонентов;
    - сначала искать прямое соответствие через `sdds-mcp`, затем близкий паттерн в проекте;
    - если Figma layer/component name указывает на DS-компонент (`TextField`, `DatePicker`, `Accordion`, `Card`, `Segment`, `Button`, `Steps`, `Cell`, `List` и т.п.), использовать этот DS-компонент или явно объяснить, почему он недоступен;
    - не заменять DS-компонент локальной имитацией только потому, что визуально проще: например, `Accordion L` должен быть `Accordion`, карточка должна быть `Card`, сегмент должен быть `Segment`, поле должно быть `TextField`/`DatePicker`;
    - кастомную product-local разметку писать только для layout glue, специфичной бизнес-логики или отсутствующего в DS паттерна.
7. Реализовать consumer-код:
    - импортировать компоненты из установленного SDDS/Plasma package;
    - использовать props, variants и slots из MCP-документации;
    - явно переносить props, заданные в Figma instance properties, даже если они совпадают с предполагаемыми дефолтами: `size`, `view`, `appearance`, `labelPlacement`, `disabled`, `checked`, `selected`, `opened`, `type`, `stretch`, `stretching`, `backgroundType`, `orientation` и т.д.;
    - переносить Figma text style в соответствующий typography-компонент (`H1`-`H6`, `Body*`, `Text*`) без подбора "на глаз"; если в Figma указан `Header/H4 B`, использовать `H4`, а не `div`, `BodyS` или локальный CSS;
    - не переопределять typography-компонент через `as`, если Figma требует конкретный семантический/типографический компонент, кроме случаев, когда это нужно для валидной HTML-структуры и явно отмечено;
    - применять tokens/theme variables вместо хардкода цветов, типографики и radii;
    - не редактировать исходники дизайн-системы, `node_modules` или `packages/*/src/components` без явного запроса.
8. Проверить результат:
    - запустить минимальные релевантные команды: typecheck, lint, unit/component tests или Storybook build;
    - если есть браузерная/визуальная проверка, сравнить rendered result со screenshot Figma;
    - зафиксировать непокрытые расхождения и причины.

## Работа с sdds-mcp

Считать `sdds-mcp` главным источником знаний о дизайн-системе для внешнего пользователя. Не придумывать названия props, variants, tokens или import paths.

Минимальный набор запросов к MCP перед реализацией:

-   найти компоненты-кандидаты по назначению блока из Figma;
-   получить API выбранных компонентов: props, variants, slots, defaults;
-   получить пример использования или recommended composition;
-   получить tokens/theme guidance для цветов, typography, spacing и states;
-   проверить accessibility/interaction constraints для interactive components.

Если MCP предоставляет несколько похожих компонентов, выбирать по семантике, а не по визуальному сходству. Например, action item, list item, button, segment, tab, select и input не взаимозаменяемы, даже если похожи на screenshot.

## Правила маппинга Figma в код

-   Маппить слой или frame на смысловую UI-сущность, затем искать компонент в `sdds-mcp`.
-   Использовать Figma layer names как подсказку, но API и итоговые props брать из component properties Figma, `sdds-mcp` и установленной версии пакета.
-   Для layout использовать CSS/grid/flex wrappers проекта; для controls использовать DS-компоненты.
-   Для цветов, отступов, radii, shadows и typography сначала искать tokens или theme variables.
-   Для иконок использовать `@salutejs/plasma-icons` package или existing project assets; не вставлять временные Figma asset URLs в код.
-   Для responsive behavior выводить правила из макета и существующего product layout; если поведение не задано, выбрать самый простой устойчивый вариант и отметить допущение.
-   Для состояний interactive components проверить через MCP, какие states поддержаны компонентом: disabled, focused, selected, checked, error, loading, readonly.
-   Для `TextField`/`DatePicker` всегда сверять `labelPlacement`; если в Figma лейбл внутри поля, в коде должен быть явный `labelPlacement="inner"`.
-   Для `Card`/панелей сверять `backgroundType`, фон и `border-radius`; если Figma показывает solid/card surface, использовать DS-prop (`backgroundType="solid"`) и token fallback только как layout glue.
-   Для `Accordion` сверять `size`, `view`, `type` item и начальное состояние раскрытия; блоки, подписанные как accordion, не реализовывать статичным списком.
-   Для предзаполненных редактируемых полей использовать `defaultValue`, а не `value` без `onChange`; `readOnly`/`disabled` ставить только если это явно указано в Figma state или бизнес-требовании.

## Обязательный props-audit

Перед первой правкой кода составить краткий внутренний список DS-инстансов из Figma и их обязательных props. Не нужно выводить его пользователю, но он должен направлять реализацию.

Формат проверки для каждого DS-инстанса:

-   `Figma component/layer` → code component from `@salutejs/{{ package }}`;
-   exact props: `size`, `view`, `appearance`, `state`, slots, `labelPlacement`, `backgroundType`, `type`, `stretch`, `orientation`;
-   typography token for every visible text node;
-   token-backed background/radius/spacing only when not provided by component props.

Запрещено завершать реализацию, если:

-   DS-инстанс из Figma заменен локальной разметкой без явной причины;
-   `size` или `view` пропущены у компонента, где они указаны в Figma;
-   text style из Figma заменен "похожей" типографикой;
-   `value` используется у редактируемого input без `onChange`;
-   локальный CSS перебивает внутренние размеры, шрифты или states DS-компонента вместо использования props.

## Правила реализации

-   Держать изменения в consumer application layer.
-   Не форкать компонент дизайн-системы из-за мелкого визуального отличия; сначала проверить props, variants, tokens и composition.
-   Не добавлять ad hoc CSS, который ломает внутренние размеры и states DS-компонента.
-   Не создавать новый product-local компонент, если достаточно простой композиции существующих компонентов.
-   Создавать product-local компонент только когда блок повторяется, имеет бизнес-семантику или иначе раздувает страницу.
-   Не менять публичный API, exports, stories или tests пакетов дизайн-системы без прямого запроса пользователя.
-   Если нужного компонента нет в `sdds-mcp`, реализовать минимальную product-local fallback-разметку и явно указать, что это не DS-компонент.

## Проверка качества

Перед финальным ответом проверить:

-   импортируются только существующие компоненты и tokens;
-   props соответствуют данным `sdds-mcp` и установленной версии package;
-   props-audit по Figma-инстансам пройден: `size`, `view`, `labelPlacement`, `backgroundType`, `type`, states и typography tokens перенесены явно там, где они есть в макете;
-   семантические DS-блоки (`Accordion`, `Card`, `Segment`, `Steps`, `TextField`, `DatePicker`, `Button`) не заменены локальными имитациями;
-   код проходит typecheck/lint там, где это возможно;
-   UI не содержит временных Figma URLs;
-   layout не ломается на узких/широких экранах, если это применимо;
-   расхождения с Figma объяснены: отсутствующий DS-компонент, неясный state, другой token, неизвестный asset или responsive gap.

## Финальный ответ

Сообщать кратко:

-   какая Figma-нода использовалась;
-   какие `sdds-mcp` данные были запрошены и какие компоненты выбраны;
-   какие файлы изменены;
-   какие design-to-code решения важны;
-   какие проверки запущены и чем закончились;
-   какие Figma детали или DS gaps остались неясными.
