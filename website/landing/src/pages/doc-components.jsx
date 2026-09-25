import { Header, SiteLink, parseStyle } from '../shared';

export default function DocComponentsPage() {
    return (
        <>
            {'\n\n'}
            <Header />
            {'\n\n'}
            <section className={'section screen page-top'}>
                {'\n  '}
                <div className={'shell doc-shell'}>
                    {'\n    '}
                    <div className={'doc-layout'}>
                        {'\n\n      '}
                        <aside className={'doc-tree'} data-lenis-prevent={''}>
                            {'\n        '}
                            <details className={'doc-tree-fold'} open>
                                {'\n        '}
                                <summary>{'Разделы документации'}</summary>
                                {'\n        '}
                                <div className={'doc-tree-inner'}>
                                    {'\n          '}
                                    <div className={'doc-tree-group'}>
                                        {'\n            '}
                                        <h3>{'Основы'}</h3>
                                        {'\n            '}
                                        <nav className={'tree-list'}>
                                            {'\n              '}
                                            <SiteLink href={'/docs/introducing'}>{'Introducing SDDS'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/sizes'}>{'Sizes'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/states'}>{'States'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/theming'}>{'Themes tokens'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/corner-radius'}>{'Corner Radius'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/spacing-layout'}>{'Spacing & Layout'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/props-vocabulary'}>
                                                {'Properties Vocabulary'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/interaction-model'}>{'Interaction Model'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/validation-model'}>{'Validation Model'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/accessibility'}>{'Accessibility'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/components'} className={'is-current'}>
                                                {'Component Library'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/glossary'}>{'Glossary'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/icons'}>{'Icons'}</SiteLink>
                                            {'\n            '}
                                        </nav>
                                        {'\n          '}
                                    </div>
                                    {'\n          '}
                                    <div className={'doc-tree-group'}>
                                        {'\n            '}
                                        <h3>{'Компоненты'}</h3>
                                        {'\n            '}
                                        <nav className={'tree-list'}>
                                            {'\n              '}
                                            <span className={'tree-label'}>
                                                {'Actions '}
                                                <span>{'4'}</span>
                                            </span>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/actions-button'}>
                                                {'Button'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/actions-icon-button'}>
                                                {'IconButton'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/actions-link-button'}>
                                                {'LinkButton'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/actions-button-group'}>
                                                {'ButtonGroup'}
                                            </SiteLink>
                                            {'\n              '}
                                            <span className={'tree-label'}>
                                                {'Data Entry '}
                                                <span>{'17'}</span>
                                            </span>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-text-field'}>
                                                {'TextField'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-text-area'}>
                                                {'TextArea'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-select'}>
                                                {'Select'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-checkbox'}>
                                                {'CheckBox'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-radio-box'}>
                                                {'RadioBox'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-switch'}>
                                                {'Switch'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-autocomplete'}>
                                                {'Autocomplete'}
                                            </SiteLink>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'CodeInput / CodeField'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'ComboBox'}</span>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-date-picker'}>
                                                {'DatePicker'}
                                            </SiteLink>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Dropzone'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'NumberInput'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Range'}</span>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-segment'}>
                                                {'Segment'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-slider'}>
                                                {'Slider'}
                                            </SiteLink>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'TimePicker'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'TreeSelect'}</span>
                                            {'\n              '}
                                            <span className={'tree-label'}>
                                                {'Data Display '}
                                                <span>{'14'}</span>
                                            </span>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-display-card'}>
                                                {'Card'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-display-accordion'}>
                                                {'Accordion'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-display-avatar'}>
                                                {'Avatar'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-display-badge'}>
                                                {'Badge'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-display-chip'}>
                                                {'Chip'}
                                            </SiteLink>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Cell'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Counter'}</span>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-display-divider'}>
                                                {'Divider'}
                                            </SiteLink>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Indicator'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'List'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Loader'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Note'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Rating'}</span>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/data-display-spinner'}>
                                                {'Spinner'}
                                            </SiteLink>
                                            {'\n              '}
                                            <span className={'tree-label'}>
                                                {'Navigation '}
                                                <span>{'11'}</span>
                                            </span>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/navigation-tabs'}>
                                                {'Tabs'}
                                            </SiteLink>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'BreadCrumbs'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Carousel'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'DropdownMenu'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Pagination'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'PaginationDots'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'ScrollBar'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Steps'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'TabBar'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Tour'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Tree'}</span>
                                            {'\n              '}
                                            <span className={'tree-label'}>
                                                {'Overlay '}
                                                <span>{'9'}</span>
                                            </span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Modal'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'BottomSheet'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Drawer'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Notification'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Popover'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'ProgressBar'}</span>
                                            {'\n              '}
                                            <SiteLink className={'is-child'} href={'/docs/overlay-toast'}>
                                                {'Toast'}
                                            </SiteLink>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'ToolBar'}</span>
                                            {'\n              '}
                                            <span className={'is-child is-soon'}>{'Tooltip'}</span>
                                            {'\n            '}
                                        </nav>
                                        {'\n          '}
                                    </div>
                                    {'\n        '}
                                </div>
                                {'\n        '}
                            </details>
                            {'\n      '}
                        </aside>
                        {'\n\n      '}
                        <article className={'article doc-body'}>
                            {'\n        '}
                            <nav className={'crumbs'}>
                                {'\n          '}
                                <SiteLink href={'/docs'}>{'Документация'}</SiteLink>
                                <i>{'/'}</i>
                                <SiteLink href={'/docs'}>{'Основы'}</SiteLink>
                                <i>{'/'}</i>
                                <span>{'Component Library'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Состав библиотеки'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Component Library'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'Библиотека компонентов — структурированный справочник всех UI-компонентов, входящих в состав дизайн-системы. В документации зафиксирована смысловая архитектура библиотеки: группировка компонентов по назначению, их определения, задачи и обоснование выбора каждого решения.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                {'См. также: '}
                                <SiteLink href={'/docs/states'}>
                                    <code>{'states.md'}</code>
                                </SiteLink>
                                {' — стандарты состояний компонентов, '}
                                <SiteLink href={'/docs/sizes'}>
                                    <code>{'sizes.md'}</code>
                                </SiteLink>
                                {' — размерная шкала, '}
                                <SiteLink href={'/docs/theming'}>
                                    <code>{'theming.md'}</code>
                                </SiteLink>
                                {' — система тематизации на токенах.'}
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'Важно!'}</b>
                                {
                                    ' Документ является живым артефактом и обновляется синхронно с развитием библиотеки компонентов. При добавлении, изменении или удалении компонента соответствующая запись в таблице актуализируется.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                {
                                    'Детальные спецификации каждого компонента (анатомия, поведение, edge cases) находятся в ['
                                }
                                <code>{'components/'}</code>
                                {'](../components/).'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-1-kak-polzovatsya-dokumentom'}>{'1. Как пользоваться документом'}</h2>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'При выборе компонента'}</b>
                                    <ul className={'sub-list'}>
                                        <li>
                                            {
                                                'Найдите нужную группу по типу задачи (отображение, ввод, навигация, компонент поверх контента/обратная связь на действие)'
                                            }
                                        </li>
                                        <li>{'Выберите компонент с подходящим назначением'}</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>{'При сомнении между компонентами'}</b>
                                    {
                                        ' — сравните колонки «Задача» и «Почему используется»: это поможет выбрать точное решение'
                                    }
                                </li>
                                <li>
                                    <b>{'При добавлении нового компонента'}</b>
                                    {
                                        ' — убедитесь, что в документе нет существующего компонента с аналогичной задачей, и зафиксируйте новый по той же структуре'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-2-struktura-biblioteki'}>{'2. Структура библиотеки'}</h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Компоненты разделены на основные логические группы по типу взаимодействия пользователя с интерфейсом — от отображения данных до обратной связи системы. Каждая группа в свою очередь разделена на логические подгруппы.'
                                }
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Actions'}</b>
                                    {' — компоненты действия'}
                                </li>
                                <li>
                                    <b>{'Data Display'}</b>
                                    {' — отображение данных и контента'}
                                </li>
                                <li>
                                    <b>{'Data Entry'}</b>
                                    {' — ввод и редактирование данных'}
                                </li>
                                <li>
                                    <b>{'Navigation'}</b>
                                    {' — перемещение по контенту'}
                                </li>
                                <li>
                                    <b>{'Overlay/Feedback'}</b>
                                    {' — компоненты поверх контента / обратная связь системы'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-3-actions-komponenty-deystviya'}>{'3. Actions / Компоненты действия'}</h2>
                            {'\n\n        '}
                            <h3 id={'p-3-1-actions-amp-buttons-deystviya-i-knopki'}>
                                {'3.1 Actions & Buttons / Действия и кнопки'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для инициирования действий пользователем.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Button'}</b>
                                                {' (XXS, XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Интерактивный элемент для выполнения действия'}</td>
                                            <td>{'Запустить основное действие в интерфейсе'}</td>
                                            <td>
                                                {
                                                    'Является primary-паттерном вызова действия — текстовая метка чётко описывает, что произойдёт при нажатии'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'IconButton'}</b>
                                                {' (XXS, XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Кнопка только с иконкой'}</td>
                                            <td>{'Выполнить действие в условиях ограниченного пространства'}</td>
                                            <td>
                                                {
                                                    'Экономит место в интерфейсах, когда действие однозначно передаётся иконкой'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'LinkButton'}</b>
                                                {' (XXS, XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Кнопка, стилизованная как текстовая ссылка'}</td>
                                            <td>
                                                {'Выполнить второстепенное действие с минимальным визуальным весом'}
                                            </td>
                                            <td>
                                                {
                                                    'Подходит для вторичных действий, не конкурирует с основной кнопкой визуально'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'EmbeddedButton'}</b>
                                                {' (S, M, L)'}
                                            </td>
                                            <td>{'Кнопка, встроенная внутрь другого компонента'}</td>
                                            <td>{'Выполнить контекстное действие внутри компонента'}</td>
                                            <td>
                                                {
                                                    'Размещается внутри компонента-контейнера, не нарушая внешний layout и сохраняя контекст действия'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-data-display-otobrazhenie-dannyh'}>
                                {'4. Data Display / Отображение данных'}
                            </h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Компоненты группы Data Display отвечают за представление информации пользователю. Они не принимают пользовательский ввод, а визуализируют данные, структурируют контент и помогают пользователю воспринимать информацию на экране.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-4-1-identity-amp-status-identifikaciya-i-status'}>
                                {'4.1 Identity & Status / Идентификация и статус'}
                            </h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Компоненты, представляющие сущности и их текущее состояние — пользователей, объекты, статусы и счётчики.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Avatar'}</b>
                                                {' (S, M, L, XL, XXL, Scalable)'}
                                            </td>
                                            <td>
                                                {
                                                    'Визуальное представление пользователя или сущности в виде изображения, инициалов или иконки'
                                                }
                                            </td>
                                            <td>{'Идентифицировать пользователя или сущность в интерфейсе'}</td>
                                            <td>
                                                {
                                                    'Создаёт персональную привязку к контенту, мгновенно распознаётся пользователем как идентификатор личности'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'AvatarGroup'}</b>
                                                {' (S, M, L, XL, XXL)'}
                                            </td>
                                            <td>
                                                {
                                                    'Отображение нескольких Avatar-элементов в виде компактной перекрывающейся группы'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Показать набор участников, членов команды или пользователей, связанных с объектом'
                                                }
                                            </td>
                                            <td>
                                                {'Компактно передаёт принадлежность нескольких людей к одному объекту'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Badge'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>{'Небольшая метка, накладываемая на другой компонент'}</td>
                                            <td>
                                                {'Сообщить о наличии новых событий, уведомлений или статуса объекта'}
                                            </td>
                                            <td>
                                                {
                                                    'Не занимает отдельного места в layout, визуально привязана к объекту, к которому относится'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Counter'}</b>
                                                {' (XXS, XS, S, M, L)'}
                                            </td>
                                            <td>{'Числовой индикатор количества'}</td>
                                            <td>
                                                {
                                                    'Отобразить числовое значение — количество уведомлений, сообщений, элементов'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Компактно передаёт количественную информацию без развёрнутого описания'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Indicator'}</b>
                                                {' (S, M, L)'}
                                            </td>
                                            <td>{'Точечный или цветовой маркер состояния'}</td>
                                            <td>{'Обозначить статус объекта — активен, недоступен, в процессе'}</td>
                                            <td>
                                                {'Минималистичный способ передать состояние без использования текста'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Rating'}</b>
                                                {' (XS, S, M, L, H5, H4, H3, H2, DisplayS, DisplayM, DisplayL)'}
                                            </td>
                                            <td>
                                                {
                                                    'Визуальное отображение оценки в виде звёзд или произвольных элементов'
                                                }
                                            </td>
                                            <td>{'Показать рейтинг или оценку объекта'}</td>
                                            <td>
                                                {
                                                    'Интуитивно понятный паттерн оценки, мгновенно считывается пользователем'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Chip'}</b>
                                                {' (XXS, XS, S, M, L, XL)'}
                                            </td>
                                            <td>
                                                {
                                                    'Компактный элемент в виде метки или тега для отображения атрибута, категории или выбранного значения'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Визуально представить тег, фильтр или выбранное значение в компактной форме'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Передаёт принадлежность объекта к категории или статусу компактно и без визуальной перегрузки — в отличие от Badge не накладывается на другой компонент, а существует самостоятельно'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'ChipGroup'}</b>
                                                {' (XXS, XS, S, M, L, XL)'}
                                            </td>
                                            <td>
                                                {
                                                    'Контейнер для группы Chip-элементов с управлением расположением и переносом'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Отобразить набор тегов, фильтров или выбранных значений как единую группу'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Стандартизирует расположение и отступы между Chip-элементами, управляет переносом на новую строку и консистентностью группы'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-2-content-amp-media-kontent-i-media'}>
                                {'4.2 Content & Media / Контент и медиа'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для отображения визуального контента — изображений, галерей и медиа.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Image'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Компонент для отображения изображения с поддержкой состояний загрузки и ошибки'
                                                }
                                            </td>
                                            <td>{'Вывести графический контент в интерфейсе'}</td>
                                            <td>{'Стандартизирует работу с изображениями в системе'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Gallery'}</b>
                                            </td>
                                            <td>
                                                {'Компонент для отображения коллекции изображений или медиа-элементов'}
                                            </td>
                                            <td>
                                                {'Представить набор визуальных материалов с возможностью просмотра'}
                                            </td>
                                            <td>
                                                {
                                                    'Организует множество медиа-элементов в управляемую структуру с навигацией между ними'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Card'}</b>
                                                {' (S, M, L)'}
                                            </td>
                                            <td>
                                                {
                                                    'Контейнер для группировки связанного контента — изображения, текста и действий'
                                                }
                                            </td>
                                            <td>{'Представить сущность или объект как целостный блок информации'}</td>
                                            <td>
                                                {
                                                    'Создаёт визуально обособленный блок, объединяющий все атрибуты сущности в одном месте'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'CodeArea'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Блок для отображения программного кода с подсветкой синтаксиса'}</td>
                                            <td>{'Показать фрагмент кода в читаемом форматированном виде'}</td>
                                            <td>
                                                {
                                                    'Сохраняет форматирование кода, обеспечивает читаемость через моноширинный шрифт и подсветку синтаксиса'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-3-lists-amp-structure-spiski-i-struktura'}>
                                {'4.3 Lists & Structure / Списки и структура'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для структурирования и отображения наборов данных и списков.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'List'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>
                                                {'Компонент для отображения упорядоченного набора элементов списком'}
                                            </td>
                                            <td>{'Представить однотипные данные в виде последовательного перечня'}</td>
                                            <td>
                                                {
                                                    'Обеспечивает единообразное отображение однотипных элементов с консистентными отступами и разделителями'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Accordion'}</b>
                                                {' (XS, S, M, L, H5, H4, H3, H2)'}
                                            </td>
                                            <td>{'Список со сворачиваемыми секциями контента'}</td>
                                            <td>
                                                {
                                                    'Показать структурированный контент, скрывая второстепенные детали до востребования'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Экономит пространство экрана, позволяя пользователю раскрывать только нужные секции'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Note'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>
                                                {
                                                    'Компонент для отображения вспомогательной или пояснительной информации'
                                                }
                                            </td>
                                            <td>
                                                {'Привлечь внимание к важному замечанию, подсказке или предупреждению'}
                                            </td>
                                            <td>
                                                {
                                                    'Визуально выделяет информацию из основного потока контента, не прерывая его структуру'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-4-layout-amp-dividers-razmetka-i-razdeliteli'}>
                                {'4.4 Layout & Dividers / Разметка и разделители'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для разметки пространства и визуального разделения контента.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Divider'}</b>
                                            </td>
                                            <td>{'Разделительная линия'}</td>
                                            <td>{'Визуально разделить секции или элементы интерфейса'}</td>
                                            <td>
                                                {
                                                    'Создаёт чёткую границу между блоками контента без использования отступов или цветовых фонов'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Splitter'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Интерактивный разделитель между двумя панелями с возможностью изменения их размера'
                                                }
                                            </td>
                                            <td>
                                                {'Дать пользователю контроль над размером соседних областей интерфейса'}
                                            </td>
                                            <td>
                                                {
                                                    'Позволяет гибко перераспределять пространство между панелями в сложных layout-структурах'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-5-table-tablicy'}>{'4.5 Table / Таблицы'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Table'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>
                                                {
                                                    'Компонент для отображения структурированных данных в виде строк и столбцов'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Представить табличные данные с возможностью сортировки, фильтрации и пагинации'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Обеспечивает наглядное сравнение данных, упрощает восприятие структурированной информации и позволяет пользователю быстро находить нужные записи'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-5-data-entry-vvod-dannyh'}>{'5. Data Entry / Ввод данных'}</h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Компоненты группы Data Entry обеспечивают взаимодействие пользователя с системой через ввод, выбор и передачу данных. Они принимают, валидируют и передают пользовательский ввод в систему.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-5-1-text-input-tekstovyy-vvod'}>{'5.1 Text Input / Текстовый ввод'}</h3>
                            {'\n\n        '}
                            <p>{'Компоненты для ввода текстовых и числовых данных.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'TextField'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Однострочное поле для ввода текста'}</td>
                                            <td>
                                                {
                                                    'Принять короткий текстовый ввод от пользователя — имя, email, поисковый запрос и т.д.'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Стандартный паттерн для однострочного ввода, поддерживает валидацию, placeholder и вспомогательный текст'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'TextArea'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Многострочное поле для ввода текста'}</td>
                                            <td>
                                                {
                                                    'Принять развёрнутый текстовый ввод — комментарий, описание, сообщение'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Используется, когда ожидается длинный текст — позволяет пользователю видеть несколько строк одновременно'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'TextFieldSlider'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Текстовое поле со встроенным слайдером для числового ввода'}</td>
                                            <td>
                                                {
                                                    'Принять числовое значение в заданном диапазоне через ввод или перетаскивание'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Комбинирует точность ручного ввода с наглядностью слайдера для числовых диапазонов'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Range'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Компонент для ввода диапазона значений'}</td>
                                            <td>
                                                {
                                                    'Задать границы диапазона в одном компактном элементе, не используя два отдельных несвязанных поля'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Используется, когда нужно задать начальное и конечное значение диапазона — например, цену «от» и «до», даты или любые числовые промежутки'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Autocomplete'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>
                                                {
                                                    'Текстовое поле с выпадающим списком подсказок на основе введённого текста'
                                                }
                                            </td>
                                            <td>{'Ускорить ввод за счёт предложения вариантов по мере набора'}</td>
                                            <td>
                                                {
                                                    'Снижает количество ошибок ввода и ускоряет заполнение форм через подсказки на основе существующих данных'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'CodeInput'}</b>
                                                {' (DisplayS, DisplayM, DisplayL)'}
                                            </td>
                                            <td>{'Поле для ввода короткого кода — PIN, OTP, верификационного кода'}</td>
                                            <td>{'Принять структурированный короткий код с разбивкой по символам'}</td>
                                            <td>
                                                {
                                                    'Визуально разделяет символы: горизонтальный ряд графических элементов (точек). Каждая точка вмещает в себя один символ, введённый с клавиатуры'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'CodeField'}</b>
                                                {' (S, M, L)'}
                                            </td>
                                            <td>{'Поле для ввода короткого кода — PIN, OTP, верификационного кода'}</td>
                                            <td>{'Принять структурированный короткий код с разбивкой по символам'}</td>
                                            <td>
                                                {
                                                    'Визуально разделяет символы кода на отдельные ячейки, снижая вероятность ошибки ввода'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-5-2-selection-vybor-znacheniy'}>{'5.2 Selection / Выбор значений'}</h3>
                            {'\n\n        '}
                            <p>{'Компоненты для выбора одного или нескольких значений из набора.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'CheckBox'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Элемент для независимого выбора одного или нескольких вариантов'}</td>
                                            <td>
                                                {
                                                    'Позволить пользователю выбрать несколько значений из списка независимо друг от друга'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Используется для множественного выбора — каждый чекбокс независим от остальных'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'RadioBox'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Элемент для выбора одного варианта из группы взаимоисключающих'}</td>
                                            <td>{'Позволить пользователю выбрать ровно один вариант из нескольких'}</td>
                                            <td>
                                                {
                                                    'Используется для взаимоисключающих вариантов — выбор одного автоматически снимает остальные'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Segment'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>
                                                {
                                                    'Группа элементов для переключения между несколькими категориями или разделами внутри одного экрана'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Организовать навигацию между смысловыми группами контента, не уводя пользователя на другую страницу'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Помогает структурировать информацию по категориям, быстро переключаться между блоками контента и визуально показывать, какой раздел активен в данный момент'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Select'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Выпадающий список для выбора одного или нескольких значений'}</td>
                                            <td>{'Выбрать значение из списка предопределённых вариантов'}</td>
                                            <td>
                                                {
                                                    'Экономит пространство, скрывая список до взаимодействия. Не даёт пользователю возможности вводить значение — только выбор'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Combobox'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>
                                                {
                                                    'Поле ввода, которое позволяет выбирать значения из выпадающего списка или вводить собственные значения'
                                                }
                                            </td>
                                            <td>{'Выбрать значение из списка или ввести произвольное значение'}</td>
                                            <td>
                                                {
                                                    'Используется, когда список вариантов не исчерпывающий и пользователь может добавить собственное значение'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'RatingInput'}</b>
                                                {' (XS, S, M, L, H5, H4, H3, H2, DisplayS, DisplayM, DisplayL)'}
                                            </td>
                                            <td>{'Интерактивный компонент для выставления оценки'}</td>
                                            <td>{'Дать пользователю возможность оценить объект'}</td>
                                            <td>
                                                {
                                                    'Интуитивный паттерн оценки — пользователь сразу понимает, как взаимодействовать, без дополнительных инструкций'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'ColorPicker'}</b>
                                                {' (S, M, L)'}
                                            </td>
                                            <td>
                                                {
                                                    'Интерактивный элемент интерфейса, позволяющий пользователю выбрать цвет из палитры, градиента или ввести значение вручную (HEX, RGB и др.)'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Предоставить пользователю возможность выбрать или задать цвет в рамках интерфейса'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Упрощает ввод цветовых значений, исключает ошибки ручного ввода, визуально демонстрирует результат выбора в режиме реального времени'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-5-3-date-amp-time-data-i-vremya'}>{'5.3 Date & Time / Дата и время'}</h3>
                            {'\n\n        '}
                            <p>{'Компоненты для выбора дат и временных значений.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'CalendarGrid'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Сетка календаря'}</td>
                                            <td>
                                                {
                                                    'Отобразить и выбрать дату или диапазон дат в формате календарной сетки по дням и месяцам, годам, кварталам'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Является базовым строительным блоком для DatePicker и DateTimePicker — может использоваться самостоятельно'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'DatePicker'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>
                                                {
                                                    'Комбинация текстового поля и выпадающего календаря с возможностью ввода и выбора значения'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Дать пользователю возможность выбрать дату или диапазон дат посредством ввода текста либо путём выбора даты из календаря'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Стандартный паттерн для выбора даты — скрывает календарь до взаимодействия, поддерживает ручной ввод и выбор'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'DateTimePicker'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>
                                                {
                                                    'Поле для ввода или выбора даты и времени одновременно с выпадающим календарём'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Дать пользователю возможность выбрать точный момент времени — дату и время в одном контроле'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Используется, когда нужно задать не просто дату, а конкретный момент — встреча, бронирование, расписание'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'TimePicker'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Поле для выбора времени суток с раскрывающимся списком значений'}</td>
                                            <td>{'Дать пользователю возможность выбрать конкретное время'}</td>
                                            <td>
                                                {
                                                    'Специализированный контрол для ввода времени — удобнее обычного текстового поля за счёт визуального выбора значений'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-5-4-file-amp-media-input-zagruzka-faylov'}>
                                {'5.4 File & Media Input / Загрузка файлов'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для загрузки файлов и медиаконтента.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Attach'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>{'Компонент для прикрепления файла'}</td>
                                            <td>{'Инициировать выбор и прикрепление файла к форме или сообщению'}</td>
                                            <td>
                                                {
                                                    'Компактный триггер загрузки файла — не занимает много места, встраивается в поля ввода и формы'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Dropzone'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Интерактивная область, предназначенная для перетаскивания и загрузки файлов'
                                                }
                                            </td>
                                            <td>{'Принять один или несколько файлов от пользователя'}</td>
                                            <td>
                                                {
                                                    'Поддерживает drag-and-drop — более удобный способ загрузки файлов, чем стандартный input, особенно для множественной загрузки'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'File'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>{'Компонент для отображения загруженных файлов'}</td>
                                            <td>{'Показать загруженный файл с возможностью просмотра или удаления'}</td>
                                            <td>
                                                {
                                                    'Стандартизирует отображение прикреплённого файла с его атрибутами — имя, размер, тип и действия над ним'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-5-5-form-amp-informationwrapper-formy'}>
                                {'5.5 Form & InformationWrapper / Формы'}
                            </h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Оболочки для полей ввода и контролов и группировка нескольких полей ввода или элементов управления.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Form'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>
                                                {
                                                    'Обёртка для группировки нескольких полей ввода или элементов управления, содержащая Header, FormList и Footer'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Объединить набор полей в единую логическую форму с вертикальной или горизонтальной структурой'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Управляет layout всей формы целиком — позволяет переключаться между FormVertical и FormHorizontal без изменения внутренних компонентов'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'FormItem'}</b>
                                                {' (information wrapper) (XS, S, M, L)'}
                                            </td>
                                            <td>
                                                {'Компонент-оболочка с набором вариаций и элементами управления формой'}
                                            </td>
                                            <td>
                                                {
                                                    'Обернуть отдельный элемент ввода в единую структуру с подписью, подсказкой и вспомогательными элементами'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Стандартизирует отображение каждого поля — лейбл, подсказка и сам контрол всегда собраны в одном контейнере, что упрощает восприятие и валидацию'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-6-navigation-navigaciya'}>{'6. Navigation / Навигация'}</h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Компоненты группы Navigation обеспечивают перемещение пользователя по интерфейсу — между страницами, разделами, экранами и уровнями иерархии. Они формируют структуру приложения и помогают пользователю ориентироваться в пространстве продукта.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-6-1-global-navigation-globalnaya-navigaciya'}>
                                {'6.1 Global Navigation / Глобальная навигация'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для перемещения между основными разделами продукта.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'NavigationBar'}</b>
                                            </td>
                                            <td>{'Верхняя панель с заголовком и действиями'}</td>
                                            <td>
                                                {
                                                    'Ориентировать пользователя в текущем экране и обеспечивать возврат на предыдущий уровень'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Стандартный паттерн мобильных платформ (iOS/Android) — пользователь интуитивно знает, где он находится и как вернуться назад'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'NavigationDrawer'}</b>
                                            </td>
                                            <td>{'Боковая панель, выезжающая поверх контента'}</td>
                                            <td>
                                                {
                                                    'Отобразить навигационное меню или дополнительный контент без смены экрана'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Экономит пространство, скрывая навигацию до вызова — особенно эффективен на мобильных и планшетных интерфейсах'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'DropdownMenu'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Выпадающее меню со списком навигационных пунктов или действий'}</td>
                                            <td>{'Показать список доступных действий или переходов по триггеру'}</td>
                                            <td>
                                                {
                                                    'Скрывает вторичные пункты до взаимодействия — уменьшает визуальную нагрузку основного интерфейса'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'TabBar'}</b>
                                                {' (M, L)'}
                                            </td>
                                            <td>{'Нижняя панель вкладок для мобильного интерфейса'}</td>
                                            <td>{'Обеспечить переключение между основными разделами приложения'}</td>
                                            <td>
                                                {
                                                    'Паттерн нижней навигации на мобильных устройствах — доступен большому пальцу, всегда виден на экране'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Link'}</b>
                                                {
                                                    ' (в дизайне компонент отсутствует — может быть стилизован текст любым типографическим токеном системы)'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Текстовый элемент для перехода на другую страницу, раздел или внешний ресурс'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Обеспечивать inline-навигацию внутри контента без использования кнопок и панелей'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Минимально занимает место в интерфейсе — встраивается в текст и не перегружает контент дополнительными элементами управления'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-6-2-local-navigation-lokalnaya-navigaciya'}>
                                {'6.2 Local Navigation / Локальная навигация'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для навигации внутри одного экрана или раздела.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Tabs'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>{'Горизонтальные вкладки для переключения между разделами'}</td>
                                            <td>{'Переключать отображение контента в рамках одного экрана'}</td>
                                            <td>
                                                {
                                                    'Организует контент одного уровня иерархии без перехода на новую страницу — пользователь остаётся в контексте'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'BreadCrumbs'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>
                                                {'Цепочка ссылок, отображающая путь пользователя в иерархии раздела'}
                                            </td>
                                            <td>
                                                {
                                                    'Показать текущее местоположение в структуре и дать быстрый доступ к родительским уровням'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Паттерн навигации по иерархии — пользователь всегда знает, где он находится, и может вернуться на любой уровень'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Tree'}</b>
                                                {' (XS, S, M, L, XL)'}
                                            </td>
                                            <td>{'Иерархический список с раскрываемыми узлами'}</td>
                                            <td>{'Навигация по вложенной иерархической структуре'}</td>
                                            <td>
                                                {
                                                    'Наглядно передаёт иерархические отношения — подходит для файловых систем, категорий и многоуровневых структур'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Steps'}</b>
                                                {' (XS, S, M, L, XL, Simple)'}
                                            </td>
                                            <td>
                                                {'Горизонтальный или вертикальный набор шагов многоэтапного процесса'}
                                            </td>
                                            <td>
                                                {
                                                    'Отображают прогресс через последовательность логических шагов. Также могут использоваться для навигации'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Наглядно показывают пользователям этап процесса и сколько осталось до завершения'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-6-3-pagination-amp-scroll-perelistyvanie-i-prokrutka'}>
                                {'6.3 Pagination & Scroll / Перелистывание и прокрутка'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для навигации по контенту — спискам, наборам и длинным страницам.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Pagination'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>{'Компонент для постраничной навигации по большому набору данных'}</td>
                                            <td>
                                                {
                                                    'Разбить большой набор данных на страницы и обеспечить переход между ними'
                                                }
                                            </td>
                                            <td>{'Стандартный паттерн для работы с большим количеством данных'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'PaginationDots'}</b>
                                                {' (S, M)'}
                                            </td>
                                            <td>{'Элементы переключения с индикатором текущей позиции'}</td>
                                            <td>
                                                {
                                                    'Отображают возможность перемещения между небольшим количеством однородных элементов контента'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Компактный индикатор прогресса для карусели или онбординга — отображает позицию без числовых значений'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Carousel'}</b>
                                            </td>
                                            <td>{'Компонент для горизонтального прокручивания набора элементов'}</td>
                                            <td>
                                                {
                                                    'Отобразить коллекцию элементов в ограниченном горизонтальном пространстве'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Позволяет разместить больше контента, чем позволяет область видимости — пользователь листает по одному или группами'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'ScrollBar'}</b>
                                                {' (S, M)'}
                                            </td>
                                            <td>{'Кастомный компонент полосы прокрутки'}</td>
                                            <td>
                                                {
                                                    'Обеспечить прокрутку контента в области с ограниченной высотой или шириной'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Стандартизирует внешний вид полосы прокрутки в рамках дизайн-системы — заменяет нативный скроллбар браузера'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-7-feedback-obratnaya-svyaz'}>{'7. Feedback / Обратная связь'}</h2>
                            {'\n\n        '}
                            <div className={'callout'}>
                                <p>{'Заметка автора в исходнике: «сейчас Overlay — предлагаю переименовать».'}</p>
                            </div>
                            {'\n\n        '}
                            <p>
                                {
                                    'Компоненты группы Feedback обеспечивают обратную связь системы с пользователем. Они появляются поверх основного контента или в специально отведённых областях и сообщают о результатах действий, запрашивают подтверждение, предоставляют дополнительный контекст или отображают прогресс операций.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-7-1-dialogs-amp-sheets-dialogi-i-paneli'}>
                                {'7.1 Dialogs & Sheets / Диалоги и панели'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для показа контента поверх основного экрана с блокировкой или без.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Modal'}</b>
                                            </td>
                                            <td>
                                                {'Диалоговое окно, блокирующее взаимодействие с основным контентом'}
                                            </td>
                                            <td>
                                                {
                                                    'Запросить подтверждение действия или показать критически важный контент, требующий реакции'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Блокирует фон — используется только для задач, требующих немедленного решения пользователя'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'BottomSheet'}</b>
                                            </td>
                                            <td>{'Панель, появляющаяся снизу экрана поверх контента'}</td>
                                            <td>
                                                {'Показать дополнительные действия или контент на мобильном устройстве'}
                                            </td>
                                            <td>
                                                {
                                                    'Паттерн мобильных интерфейсов — появляется в зоне досягаемости большого пальца, не полностью перекрывает контекст'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Drawer'}</b>
                                            </td>
                                            <td>{'Боковая панель, выезжающая поверх основного контента'}</td>
                                            <td>
                                                {
                                                    'Отобразить дополнительный контент или форму, не переходя на новую страницу'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Сохраняет контекст основного экрана, позволяя работать с дополнительным контентом в боковой панели'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Toolbar'}</b>
                                            </td>
                                            <td>{'Панель инструментов с набором действий'}</td>
                                            <td>
                                                {
                                                    'Предоставить быстрый доступ к часто используемым инструментам для работы на основном экране'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Группирует связанные действия в единую панель, доступную без навигации к другим разделам'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-7-2-notifications-amp-alerts-uvedomleniya-i-opovescheniya'}>
                                {'7.2 Notifications & Alerts / Уведомления и оповещения'}
                            </h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Popover'}</b>
                                                {' (S, M)'}
                                            </td>
                                            <td>
                                                {
                                                    'Всплывающий контейнер с расширенным контентом, привязанный к триггеру'
                                                }
                                            </td>
                                            <td>{'Показать дополнительный контент по взаимодействию с триггером'}</td>
                                            <td>{'Привязан к триггеру и не блокирует интерфейс'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Toast'}</b>
                                            </td>
                                            <td>{'Временное всплывающее уведомление'}</td>
                                            <td>{'Сообщить пользователю о результате выполненного действия'}</td>
                                            <td>
                                                {
                                                    'Появляется и исчезает автоматически, не блокирует интерфейс — подходит для некритичных уведомлений о статусе операции'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Notification'}</b>
                                            </td>
                                            <td>{'Уведомления поверх контента с возможностью закрытия'}</td>
                                            <td>
                                                {
                                                    'Сообщить пользователю о важном событии или состоянии системы, требующем внимания'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'В отличие от Toast используется для важных сообщений, которые нельзя пропустить'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Tooltip'}</b>
                                            </td>
                                            <td>{'Небольшая всплывающая подсказка по наведению или фокусу'}</td>
                                            <td>
                                                {'Дать краткое пояснение к элементу интерфейса — иконке, кнопке, полю'}
                                            </td>
                                            <td>
                                                {
                                                    'Появляется только при наведении — идеален для пояснений без перегрузки интерфейса'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-7-3-progress-amp-loading-progress-i-zagruzka'}>
                                {'7.3 Progress & Loading / Прогресс и загрузка'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Компоненты для отображения прогресса операций поверх основного контента.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Определение'}</th>
                                            <th>{'Задача'}</th>
                                            <th>{'Почему используется'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'ProgressBar'}</b>
                                                {' (XS, S, M, L)'}
                                            </td>
                                            <td>{'Горизонтальная полоса загрузки с известным процентом завершения'}</td>
                                            <td>{'Показать прогресс операции с определённой длительностью'}</td>
                                            <td>
                                                {
                                                    'Используется, когда известен процент выполнения — даёт пользователю понимание, сколько осталось ждать'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'ProgressBarCircular'}</b>
                                                {' (XXS, XS, S, M, L, XL, XXL, Scalable)'}
                                            </td>
                                            <td>{'Круглый индикатор загрузки с известным процентом завершения'}</td>
                                            <td>{'Показать прогресс операции с определённой длительностью'}</td>
                                            <td>
                                                {
                                                    'Используется, когда известен процент выполнения — даёт пользователю понимание, сколько осталось ждать'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Loader'}</b>
                                            </td>
                                            <td>{'Индикатор загрузки контента'}</td>
                                            <td>{'Уведомляет пользователей о том, что загрузка контента началась'}</td>
                                            <td>
                                                {'Используется, когда нужно обозначить пользователю загрузку контента'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Spinner'}</b>
                                                {' (XXS, XS, S, M, L, XL, XXL, Scalable)'}
                                            </td>
                                            <td>
                                                {
                                                    'Частный случай Loader в виде крутящегося элемента, который сообщает о самом процессе загрузки'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Сообщить пользователю, что система обрабатывает запрос неизвестной длительности'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Используется, когда невозможно предсказать время завершения операции — даёт обратную связь без конкретных цифр'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Skeleton'}</b>
                                                {
                                                    ' (в дизайне компонент отсутствует — элементы интерфейса стилизуются токенами)'
                                                }
                                            </td>
                                            <td>{'Индикатор загрузки контента'}</td>
                                            <td>{'Визуально показать загрузку контента на странице'}</td>
                                            <td>
                                                {
                                                    'Снижает воспринимаемое время ожидания, сохраняет структуру страницы до появления реальных данных'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <div className={'article-foot'}>
                                {'\n          '}
                                <span>{'Нашли расхождение документации и библиотеки — напишите команде.'}</span>
                                {'\n          '}
                                <SiteLink className={'side-cta'} href={'/contacts'}>
                                    {'Сообщить о расхождении'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </article>
                        {'\n\n      '}
                        <aside className={'article-side'} data-lenis-prevent={''}>
                            {'\n        '}
                            <div className={'side-card toc'}>
                                {'\n          '}
                                <h3>{'На странице'}</h3>
                                {'\n          '}
                                <nav className={'toc-list'}>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-kak-polzovatsya-dokumentom'}>
                                        {'1. Как пользоваться документом'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-struktura-biblioteki'}>{'2. Структура библиотеки'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-actions-komponenty-deystviya'}>
                                        {'3. Actions / Компоненты действия'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-3-1-actions-amp-buttons-deystviya-i-knopki'}
                                        className={'is-sub'}
                                    >
                                        {'3.1 Actions & Buttons / Действия и кнопки'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-data-display-otobrazhenie-dannyh'}>
                                        {'4. Data Display / Отображение данных'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-4-1-identity-amp-status-identifikaciya-i-status'}
                                        className={'is-sub'}
                                    >
                                        {'4.1 Identity & Status / Идентификация и статус'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-2-content-amp-media-kontent-i-media'} className={'is-sub'}>
                                        {'4.2 Content & Media / Контент и медиа'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-4-3-lists-amp-structure-spiski-i-struktura'}
                                        className={'is-sub'}
                                    >
                                        {'4.3 Lists & Structure / Списки и структура'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-4-4-layout-amp-dividers-razmetka-i-razdeliteli'}
                                        className={'is-sub'}
                                    >
                                        {'4.4 Layout & Dividers / Разметка и разделители'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-5-table-tablicy'} className={'is-sub'}>
                                        {'4.5 Table / Таблицы'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-data-entry-vvod-dannyh'}>
                                        {'5. Data Entry / Ввод данных'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-1-text-input-tekstovyy-vvod'} className={'is-sub'}>
                                        {'5.1 Text Input / Текстовый ввод'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-2-selection-vybor-znacheniy'} className={'is-sub'}>
                                        {'5.2 Selection / Выбор значений'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-3-date-amp-time-data-i-vremya'} className={'is-sub'}>
                                        {'5.3 Date & Time / Дата и время'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-4-file-amp-media-input-zagruzka-faylov'} className={'is-sub'}>
                                        {'5.4 File & Media Input / Загрузка файлов'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-5-form-amp-informationwrapper-formy'} className={'is-sub'}>
                                        {'5.5 Form & InformationWrapper / Формы'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-6-navigation-navigaciya'}>
                                        {'6. Navigation / Навигация'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-6-1-global-navigation-globalnaya-navigaciya'}
                                        className={'is-sub'}
                                    >
                                        {'6.1 Global Navigation / Глобальная навигация'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-6-2-local-navigation-lokalnaya-navigaciya'}
                                        className={'is-sub'}
                                    >
                                        {'6.2 Local Navigation / Локальная навигация'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-6-3-pagination-amp-scroll-perelistyvanie-i-prokrutka'}
                                        className={'is-sub'}
                                    >
                                        {'6.3 Pagination & Scroll / Перелистывание и прокрутка'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-7-feedback-obratnaya-svyaz'}>
                                        {'7. Feedback / Обратная связь'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-7-1-dialogs-amp-sheets-dialogi-i-paneli'} className={'is-sub'}>
                                        {'7.1 Dialogs & Sheets / Диалоги и панели'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-7-2-notifications-amp-alerts-uvedomleniya-i-opovescheniya'}
                                        className={'is-sub'}
                                    >
                                        {'7.2 Notifications & Alerts / Уведомления и оповещения'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-7-3-progress-amp-loading-progress-i-zagruzka'}
                                        className={'is-sub'}
                                    >
                                        {'7.3 Progress & Loading / Прогресс и загрузка'}
                                    </SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'side-card'}>
                                {'\n          '}
                                <h3>{'Читать рядом'}</h3>
                                {'\n          '}
                                <nav className={'link-list'}>
                                    {'\n            '}
                                    <SiteLink href={'/docs/glossary'}>{'Glossary'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/accessibility'}>{'Accessibility'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/introducing'}>{'Introducing SDDS'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/sizes'}>{'Sizes'}</SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'side-card'}>
                                {'\n          '}
                                <h3>{'Где посмотреть'}</h3>
                                {'\n          '}
                                <nav className={'read-next'}>
                                    {'\n            '}
                                    <SiteLink href={'/#theme'}>{'Конфигуратор тем'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/#bento'}>{'Библиотеки Figma и Pixso'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/news'}>{'Что изменилось в последнем релизе'}</SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </aside>
                        {'\n\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            <footer>
                {'\n  '}
                <span>{'© 2026 SDDS · Sber Digital Design System'}</span>
                {'\n  '}
                <span>
                    <SiteLink href={'#'}>{'Figma'}</SiteLink>
                    {' · '}
                    <SiteLink href={'#'}>{'Changelog'}</SiteLink>
                    {' · '}
                    <SiteLink href={'#'}>{'Telegram'}</SiteLink>
                    {' · '}
                    <SiteLink href={'/contacts'}>{'Почта'}</SiteLink>
                </span>
                {'\n'}
            </footer>
            {'\n\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n\n\n'}
        </>
    );
}
