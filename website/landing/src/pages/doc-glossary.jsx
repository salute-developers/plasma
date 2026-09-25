import { Header, SiteLink, parseStyle } from '../shared';

export default function DocGlossaryPage() {
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
                                            <SiteLink href={'/docs/components'}>{'Component Library'}</SiteLink>
                                            {'\n              '}
                                            <SiteLink href={'/docs/glossary'} className={'is-current'}>
                                                {'Glossary'}
                                            </SiteLink>
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
                                <span>{'Glossary'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Термины'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Glossary'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'Ключевые термины SDDS. Если встречаете незнакомое слово в документации — ищите здесь.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                {'Новым пользователям: начните с '}
                                <SiteLink href={'/docs/introducing'}>
                                    <code>{'introducing.md'}</code>
                                </SiteLink>
                                {' — там контекст системы и маршрут чтения по роли.'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-1-bazovye-ponyatiya'}>{'1. Базовые понятия'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Термин'}</th>
                                            <th>{'Определение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'ДС — Дизайн-система'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Набор стандартов, компонентов и базовых правил для создания цифровых продуктов и сервисов'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'White-label'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Принцип ДС, при котором нейтральные компоненты стилизуются через токены темы бренда'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Токены'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Именованная переменная, хранящая значение. В SDDS токены делятся на базовые и семантические'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Семантические токены'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Именованная переменная, хранящая значение стиля. В SDDS токенами задаются цвета, шрифты, радиусы скругления, тени и размытие (blur). Токен описывает роль, а не значение. Пример: SurfaceNegative — это «поверхность ошибки», а не «красный цвет»'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Базовые токены / Base Tokens'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Нижний слой архитектуры SDDS: примитивы значений токенов, на которых строятся семантические токены'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Библиотека компонентов / Component Library'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Коллекция компонентов, доступная для дизайнеров в Figma/Pixso и npm-пакетом для разработчиков'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Компонент / Master'}</b>
                                            </td>
                                            <td>{'UI-элемент с заданными токенами, свойствами и поведением'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Инстанс / Instance'}</b>
                                            </td>
                                            <td>{'Копия компонента, которую пользователь использует в макетах'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-2-vizualnyy-yazyk'}>{'2. Визуальный язык'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Термин'}</th>
                                            <th>{'Определение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Палитра'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Расширенный набор базовых цветовых токенов, рекомендованных для стилизации семантических токенов'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Theme / Тема'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Набор токенов, определяющий визуальную идентичность продукта/бренда. Несколько продуктов могут использовать одну библиотеку компонентов с разными Product Theme'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Mode'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Режим отображения интерфейса, определяющий палитру токенов для светлой и тёмной тем'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Context'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Набор токенов для адаптации цвета элемента под фон, на котором он находится'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Typography Tokens / Типографика'}</b>
                                            </td>
                                            <td>{'Система иерархической организации текстовой информации'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'CornerRadius Tokens / Токены скругления'}</b>
                                            </td>
                                            <td>{'Система скруглений углов компонентов'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Breakpoints / Брейкпоинты'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Контрольные точки, которые определяют, как адаптивный макет будет вести себя в зависимости от размера устройства или области просмотра'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Grid / Сетка'}</b>
                                            </td>
                                            <td>{'Система колонок и отступов для выравнивания элементов в макете'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-3-terminy-komponentov'}>{'3. Термины компонентов'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Термин'}</th>
                                            <th>{'Определение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Конфигурация'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Набор вариаций компонента, описывающий различные визуальные представления компонента. Конфигурация создаётся, когда компонент имеет существенно различающиеся представления, влияющие на структуру, состав или требующие изменений на уровне множества элементов (например, TextareaDefault / TextAreaClear)'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Вариация'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Набор свойств компонента. Если в макете у компонента изменяется значение одного или нескольких токенов или изменяются отступы/размеры, то эти изменения отражены на уровне вариаций. Является частью публичного API компонента; имеет семантическое значение (size меняет размеры, view меняет цвета); содержит набор свойств; может иметь зависимости от других вариаций'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Свойство'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Неделимая сущность, применяемая к компоненту и меняющая его внешний вид. Имеет булевое значение (True/False); не зависит от вариаций; имеет одинаковое значение для всех вариаций в рамках конфигурации'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Слот'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Именованная позиция внутри компонента для размещения контента: ContentBefore, ContentAfter и т.п. Компонент не знает, что попадёт в слот — только отображает или скрывает позицию. Управляется свойствами (например, hasContentBefore, hasContentAfter)'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Состояние / State'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Визуальное или функциональное условие компонента: hover, focus, disabled, error и др. Состояния реализованы через токены — смена темы автоматически меняет вид всех состояний'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'View'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Семантическая вариация View для компонентов (не полей ввода): Negative, Warning, Positive. Передаёт смысл действия или информации — не состояние данных'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Размеры / Size'}</b>
                                            </td>
                                            <td>
                                                {'Принадлежность компонента к масштабному уровню системы (см. '}
                                                <SiteLink href={'/docs/sizes'}>
                                                    <code>{'sizes.md'}</code>
                                                </SiteLink>
                                                {'). '}
                                                <i>
                                                    {
                                                        'Примечание: в исходнике блока определение продублировано из State — требует уточнения у команды'
                                                    }
                                                </i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-dostupnost'}>{'4. Доступность'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Термин'}</th>
                                            <th>{'Определение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Доступность / Accessibility (A11y)'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Принцип проектирования с учётом доступности интерфейса для людей с ограниченными возможностями. Включает зрительную, слуховую, моторную и когнитивную доступность'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'WCAG — стандарт доступности'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Международный стандарт доступности веб-интерфейсов. Определяет критерии и уровни доступности. Уровни соответствия: A — минимальный (базовые требования), AA — стандартный (рекомендуемый для большинства продуктов), AAA — расширенный (максимальный)'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Индикатор фокуса'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Визуальный элемент, который показывает интерактивность компонента/элемента интерфейса при клавиатурной навигации'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-5-leyaut-i-struktura'}>{'5. Лейаут и структура'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Термин'}</th>
                                            <th>{'Определение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Контейнер'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Блок-обёртка, который ограничивает размеры контента или компонента на странице'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Лейаут / Layout'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Система расположения элементов на странице/экране и их адаптивности при изменении размера экрана'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Внешний отступ / Margin'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Расстояние между компонентами или от компонента до родительского контейнера'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Внутренний отступ / Padding'}</b>
                                            </td>
                                            <td>{'Расстояние от границы компонента до вложенных в него элементов'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Отступ / Gap'}</b>
                                            </td>
                                            <td>{'Расстояние между элементами в компоненте'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-6-tehnicheskie-terminy'}>{'6. Технические термины'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Термин'}</th>
                                            <th>{'Определение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Figma Variables'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Механизм хранения токенов в Figma. SDDS использует четыре коллекции: 01. Theme (цвета), 02. SubTheme (под-тема), 03. Typography (шрифты), 04. Numbers (скругления). → Подробнее: '
                                                }
                                                <SiteLink href={'/docs/theming'}>
                                                    <code>{'theming.md'}</code>
                                                </SiteLink>
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
                                    <SiteLink href={'#p-1-bazovye-ponyatiya'}>{'1. Базовые понятия'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-vizualnyy-yazyk'}>{'2. Визуальный язык'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-terminy-komponentov'}>{'3. Термины компонентов'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-dostupnost'}>{'4. Доступность'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-leyaut-i-struktura'}>{'5. Лейаут и структура'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-6-tehnicheskie-terminy'}>{'6. Технические термины'}</SiteLink>
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
                                    <SiteLink href={'/docs/icons'}>{'Icons'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/components'}>{'Component Library'}</SiteLink>
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
