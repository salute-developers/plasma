import { Header, SiteLink, parseStyle } from '../shared';

export default function DocStatesPage() {
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
                                            <SiteLink href={'/docs/states'} className={'is-current'}>
                                                {'States'}
                                            </SiteLink>
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
                                            <SiteLink href={'/docs/components'}>{'Component Library'}</SiteLink>
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
                                <span>{'States'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Состояния компонентов'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'States'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'Стандарты состояний компонентов SDDS: визуальное отображение и правила комбинирования.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                {'См. также: '}
                                <SiteLink href={'/docs/props-vocabulary'}>
                                    <code>{'props-vocabulary.md'}</code>
                                </SiteLink>
                                {' — свойства состояний, '}
                                <SiteLink href={'/docs/theming'}>
                                    <code>{'theming.md'}</code>
                                </SiteLink>
                                {' — токены состояний, '}
                                <SiteLink href={'/docs/validation-model'}>
                                    <code>{'validation-model.md'}</code>
                                </SiteLink>
                                {' — валидация форм.'}
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'Важно!'}</b>
                            </p>
                            {'\n\n        '}
                            <ol className={'article-list'}>
                                <li>
                                    <b>{'Дизайн:'}</b>
                                    {
                                        ' макеты SDDS предоставляют рекомендуемый набор состояний для компонентов и их визуал. Пользователь может удалять/добавлять состояния в дизайне, а также стилизовать компонент в каждом состоянии под свой продукт.'
                                    }
                                </li>
                                <li>
                                    <b>{'Разработка:'}</b>
                                    {
                                        ' техническая реализация обеспечивает поддержку всех возможных состояний компонента.'
                                    }
                                </li>
                            </ol>
                            {'\n\n        '}
                            <h2 id={'p-1-osnovnye-principy'}>{'1. Основные принципы'}</h2>
                            {'\n\n        '}
                            <h3 id={'p-1-1-konsistentnost'}>{'1.1 Консистентность'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Рекомендуется использовать единые логику и правила отображения состояний для всех компонентов продукта: одинаковые токены, анимации, длительности переходов.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-1-2-predskazuemost'}>{'1.2 Предсказуемость'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Для повышения понимания интерфейса пользователем рекомендуется через визуал состояния отображать:'
                                }
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'текущее состояние компонента;'}</li>
                                <li>{'можно ли взаимодействовать с компонентом;'}</li>
                                <li>{'произошло ли действие.'}</li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-1-3-dostupnost'}>{'1.3 Доступность'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'В соответствии с принципами инклюзивного дизайна и рекомендациями WCAG состояния должны быть различимы и обеспечиваться независимо от цветового восприятия.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>{'Рекомендуется:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {'применять комбинированные индикаторы (цвет + подсказка, цвет + иконка и т.п.);'}
                                </li>
                                <li>
                                    {
                                        'гарантировать видимость состояний при клавиатурной навигации (чёткий индикатор фокуса);'
                                    }
                                </li>
                                <li>
                                    {
                                        'поддерживать семантическую передачу состояний через API доступности (ARIA-роли, состояния и свойства).'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-2-kategorii-sostoyaniy'}>{'2. Категории состояний'}</h2>
                            {'\n\n        '}
                            <p>
                                {'В дизайн-системе SDDS состояния компонентов разделены на 7 семантических категорий:'}
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Категория'}</th>
                                            <th>{'Состояния'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Interaction States'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Кратковременные состояния при взаимодействии пользователя с компонентом. Отражают реакцию компонента на действия пользователя'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Selection States'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Состояния выбора. Отражают устойчивое значение компонента, которое сохраняется после взаимодействия'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Availability States'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Состояния доступности. Отражают функциональную доступность компонента (ограничивают или запрещают взаимодействие)'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Data States'}</b>
                                            </td>
                                            <td>{'Состояния данных. Отражают статус содержимого компонента'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Process & Feedback States'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Состояния процесса и обратной связи. Информируют о статусе процесса или результате'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Visibility States'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Состояния видимости. Отвечают за отображение и раскрытие контента в компоненте'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Drag and Drop'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Специфическое мульти-состояние с собственной логикой и визуальными паттернами для каждого шага'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-1-interaction-states'}>{'2.1 Interaction States'}</h3>
                            {'\n\n        '}
                            <p>{'Состояния кратковременного взаимодействия.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Состояние'}</th>
                                            <th>{'Описание'}</th>
                                            <th>{'Свойство в дизайне'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'default'}</code>
                                            </td>
                                            <td>
                                                {
                                                    'Базовое состояние компонента: готов к взаимодействию, стандартные стили'
                                                }
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Все'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'hovered'}</code>
                                            </td>
                                            <td>
                                                {
                                                    'Показывает пользователю, что компонент интерактивен. Отображается при наведении курсора'
                                                }
                                            </td>
                                            <td>{'В макетах опционально Hovered=True/False (boolean)'}</td>
                                            <td>{'Button, Chip, TextField, Link'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'focused'}</code>
                                            </td>
                                            <td>
                                                {
                                                    'Состояние, при котором компонент готов к взаимодействию с клавиатуры или к вводу данных'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'В макетах опционально Focused=True/False (boolean). Правила отображения фокуса — в '
                                                }
                                                <SiteLink href={'/docs/accessibility'}>
                                                    <code>{'accessibility.md'}</code>
                                                </SiteLink>
                                            </td>
                                            <td>
                                                {
                                                    'Группа Input Controls (элементы ввода) — фокус, обозначающий готовность к вводу данных; Button, Chip, CheckBox — готовность к взаимодействию'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'actived/pressed'}</code>
                                            </td>
                                            <td>
                                                {
                                                    'Состояние получения системой сигнала о взаимодействии с компонентом (активация компонента в момент нажатия)'
                                                }
                                            </td>
                                            <td>{'В макетах опционально Actived=True/False (boolean)'}</td>
                                            <td>{'Button, Chip, Link'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-2-selection-states'}>{'2.2 Selection States'}</h3>
                            {'\n\n        '}
                            <p>{'Состояния выбора.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Состояние'}</th>
                                            <th>{'Описание'}</th>
                                            <th>{'Свойство в дизайне'}</th>
                                            <th>{'Компоненты'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'selected'}</code>
                                            </td>
                                            <td>
                                                {
                                                    'Состояние визуально подтверждает выбор пользователем компонента или его части (элемента)'
                                                }
                                            </td>
                                            <td>{'Selected=True/False (boolean)'}</td>
                                            <td>{'Элементы списков (ListItem)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'checked'}</code>
                                            </td>
                                            <td>
                                                {'Частный случай Selected для контролов или отображением индикацией'}
                                            </td>
                                            <td>{'Checked=True/False (boolean)'}</td>
                                            <td>{'CheckBox, RadioBox'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'turnedOn'}</code>
                                            </td>
                                            <td>{'Включённое состояние (компонент имеет тумблер, переключатель)'}</td>
                                            <td>{'TurnedOn=True/False (boolean)'}</td>
                                            <td>{'Switch'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-3-availability-states'}>{'2.3 Availability States'}</h3>
                            {'\n\n        '}
                            <p>{'Состояния доступности.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Состояние'}</th>
                                            <th>{'Описание'}</th>
                                            <th>{'Свойство в дизайне'}</th>
                                            <th>{'Компоненты'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'disabled'}</code>
                                            </td>
                                            <td>{'Компонент недоступен для взаимодействия'}</td>
                                            <td>{'Disabled=True/False (boolean)'}</td>
                                            <td>{'Группа Input Controls (элементы ввода), Button, Chip'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'readOnly'}</code>
                                            </td>
                                            <td>
                                                {
                                                    'Компонент доступен только для просмотра, нельзя редактировать, но в отличие от disabled данные отправляются на сервер и остаются доступными для копирования'
                                                }
                                            </td>
                                            <td>{'ReadOnly=True/False (boolean)'}</td>
                                            <td>{'Группа Input Controls (элементы ввода)'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-4-data-states'}>{'2.4 Data States'}</h3>
                            {'\n\n        '}
                            <p>{'Состояния данных.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Состояние'}</th>
                                            <th>{'Описание'}</th>
                                            <th>{'Свойство в дизайне'}</th>
                                            <th>{'Компоненты'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'filled'}</code>
                                            </td>
                                            <td>{'Состояние, обозначающее, что компонент заполнен данными'}</td>
                                            <td>{'Filled=True/False (boolean)'}</td>
                                            <td>{'Группа Input Controls (элементы ввода)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'emptyState'}</code>
                                            </td>
                                            <td>{'Пустое состояние компонента (компонент не содержит данных)'}</td>
                                            <td>{'EmptyState=True/False (boolean)'}</td>
                                            <td>{'Списки (List)'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-5-process-amp-feedback-states'}>{'2.5 Process & Feedback States'}</h3>
                            {'\n\n        '}
                            <p>{'Состояния процесса и обратной связи.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Состояние'}</th>
                                            <th>{'Описание'}</th>
                                            <th>{'Свойство в дизайне'}</th>
                                            <th>{'Компоненты'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'loading'}</code>
                                            </td>
                                            <td>{'Состояние обработки/загрузки данных'}</td>
                                            <td>{'Loading=True/False (boolean)'}</td>
                                            <td>{'Button'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'undefined'}</code>
                                            </td>
                                            <td>{'Пустое состояние компонента (компонент не содержит данных)'}</td>
                                            <td>{'—'}</td>
                                            <td>
                                                {
                                                    'Индикатор прогресса — компонент прогресса инициализирован, но процент выполнения неизвестен'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'ValidationState: Error/Success/Warning'}</code>
                                            </td>
                                            <td>
                                                {
                                                    'Определяют текущий статус выполнения операции и тип обратной связи для пользователя: error — действие не выполнено из-за ошибки; success — действие успешно завершено; warning — действие выполнено, но есть важные условия/ограничения'
                                                }
                                            </td>
                                            <td>{'ValidationState=Error/Success/Warning'}</td>
                                            <td>{'Группа Input Controls (элементы ввода)'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-6-visibility-states'}>{'2.6 Visibility States'}</h3>
                            {'\n\n        '}
                            <p>{'Состояния видимости.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Состояние'}</th>
                                            <th>{'Описание'}</th>
                                            <th>{'Свойство в дизайне'}</th>
                                            <th>{'Компоненты'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'hidden'}</code>
                                            </td>
                                            <td>
                                                {'Компонент или его элементы скрыты из интерфейса (не отображается)'}
                                            </td>
                                            <td>{'Hidden=True/False (boolean)'}</td>
                                            <td>{'CodeInput, CodeField'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'opened'}</code>
                                            </td>
                                            <td>{'Состояние, отражающее открытие/раскрытие компонента'}</td>
                                            <td>{'Opened=True/False (boolean)'}</td>
                                            <td>{'DropDown, Select, Accordion'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'visible'}</code>
                                            </td>
                                            <td>{'Состояние отображения контента'}</td>
                                            <td>{'—'}</td>
                                            <td />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-7-drag-and-drop'}>{'2.7 Drag and Drop'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Состояние'}</th>
                                            <th>{'Описание'}</th>
                                            <th>{'Свойство в дизайне'}</th>
                                            <th>{'Компоненты'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Drag and Drop'}</td>
                                            <td>{'Состояние изменения иерархической структуры списка'}</td>
                                            <td>
                                                {
                                                    'Этапы состояния, логика и визуальное отображение шагов описаны в документации'
                                                }
                                            </td>
                                            <td>{'Tree'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-3-kombinirovanie-sostoyaniy-pravila-isklyucheniya-i-ierarhiya-prioritetov'}>
                                {'3. Комбинирование состояний: правила, исключения и иерархия приоритетов'}
                            </h2>
                            {'\n\n        '}
                            <div className={'callout'}>
                                <p>
                                    <b>{'Примечание.'}</b>
                                    {
                                        ' В разделе приведены типовые комбинации и взаимоисключения состояний. Полный перечень состояний и их сочетаний для каждого компонента содержится в его свойствах и вариациях. Взаимоисключаемые состояния нельзя комбинировать на уровне API компонента.'
                                    }
                                </p>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-3-1-kombinirovanie-sostoyaniy'}>{'3.1 Комбинирование состояний'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Категории состояний можно комбинировать между собой для более точного реагирования интерфейса на действия пользователя.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>{'Примеры возможных комбинаций:'}</p>
                            {'\n\n        '}
                            <p>
                                <b>{'Data + Availability:'}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {
                                        'Filled + ReadOnly — состояние «доступен только для чтения» возможно ТОЛЬКО в заполненном данными компоненте'
                                    }
                                </li>
                                <li>{'Filled + Hidden — заполненные скрытые данные'}</li>
                                <li>
                                    {'Filled + Disabled — заполненный, но недоступный для взаимодействия компонент'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                <b>{'Interaction + Availability:'}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {
                                        'Focused + ReadOnly — состояние «доступен только для чтения» с фокусной рамкой при взаимодействии через клавиатуру'
                                    }
                                </li>
                                <li>{'Selected + ReadOnly — выбранный, но не редактируемый элемент'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                <b>{'Interaction + Interaction:'}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'Selected + Checked — элемент выбран и отмечен контролом или индикацией'}</li>
                                <li>{'Hovered + Focused — наведён курсор и фокус клавиатуры'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                <b>{'Interaction + Feedback:'}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'Actived + Loading — элемент нажат и данные/действие загружается'}</li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-3-2-vzaimoisklyuchayuschie-sostoyaniya'}>{'3.2 Взаимоисключающие состояния'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Комбинирование состояний из одной категории чаще неверно — такие состояния взаимоисключающие, например:'
                                }
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Availability States:'}</b>
                                    {
                                        ' disabled и readOnly — если элемент отключён, он уже не может быть «только для чтения»;'
                                    }
                                </li>
                                <li>
                                    <b>{'Visibility States:'}</b>
                                    {' Hidden и Visible;'}
                                </li>
                                <li>
                                    <b>{'Interaction States:'}</b>
                                    {' Actived заменяет Hovered в момент клика.'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Исключения — нестрого взаимоисключающие состояния, но с приоритетом:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {'Hovered и Focused могут быть одновременно, но Active заменяет их в момент клика;'}
                                </li>
                                <li>
                                    {
                                        'Selected и Checked взаимоисключаемые на уровне одного простого компонента, но возможны одновременно при компоновке элементов в компоненте, например: элемент списка с чекбоксом.'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                {
                                    'Недопустимые комбинации состояний компонента нельзя одновременно выбрать в дизайне и коде.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-3-3-prioritet-sostoyaniy'}>{'3.3 Приоритет состояний'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'При конфликте состояний применяется самое высокоприоритетное из них. Нижестоящие состояния либо игнорируются, либо визуально подавляются.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>{'Порядок приоритета групп состояний:'}</p>
                            {'\n\n        '}
                            <ol className={'article-list'}>
                                <li>{'Visibility States'}</li>
                                <li>{'Availability States'}</li>
                                <li>{'Process & Feedback States'}</li>
                                <li>{'Dropping'}</li>
                                <li>{'Selection States'}</li>
                                <li>{'Data States'}</li>
                                <li>{'Interaction States'}</li>
                            </ol>
                            {'\n\n        '}
                            <p>
                                {'Пример: '}
                                <code>{'Disabled → Loading → Error → Focus → Hovered → Default'}</code>
                            </p>
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
                                    <SiteLink href={'#p-1-osnovnye-principy'}>{'1. Основные принципы'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-1-konsistentnost'} className={'is-sub'}>
                                        {'1.1 Консистентность'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-2-predskazuemost'} className={'is-sub'}>
                                        {'1.2 Предсказуемость'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-3-dostupnost'} className={'is-sub'}>
                                        {'1.3 Доступность'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-kategorii-sostoyaniy'}>{'2. Категории состояний'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-1-interaction-states'} className={'is-sub'}>
                                        {'2.1 Interaction States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-2-selection-states'} className={'is-sub'}>
                                        {'2.2 Selection States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-3-availability-states'} className={'is-sub'}>
                                        {'2.3 Availability States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-4-data-states'} className={'is-sub'}>
                                        {'2.4 Data States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-5-process-amp-feedback-states'} className={'is-sub'}>
                                        {'2.5 Process & Feedback States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-6-visibility-states'} className={'is-sub'}>
                                        {'2.6 Visibility States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-7-drag-and-drop'} className={'is-sub'}>
                                        {'2.7 Drag and Drop'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={
                                            '#p-3-kombinirovanie-sostoyaniy-pravila-isklyucheniya-i-ierarhiya-prioritetov'
                                        }
                                    >
                                        {'3. Комбинирование состояний: правила, исключения и иерархия приоритетов'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-1-kombinirovanie-sostoyaniy'} className={'is-sub'}>
                                        {'3.1 Комбинирование состояний'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-2-vzaimoisklyuchayuschie-sostoyaniya'} className={'is-sub'}>
                                        {'3.2 Взаимоисключающие состояния'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-3-prioritet-sostoyaniy'} className={'is-sub'}>
                                        {'3.3 Приоритет состояний'}
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
                                    <SiteLink href={'/docs/theming'}>{'Themes tokens'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/sizes'}>{'Sizes'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/introducing'}>{'Introducing SDDS'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/corner-radius'}>{'Corner Radius'}</SiteLink>
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
