import { Header, SiteLink, parseStyle } from '../shared';

export default function DocPropsVocabularyPage() {
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
                                            <SiteLink href={'/docs/props-vocabulary'} className={'is-current'}>
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
                                <span>{'Properties Vocabulary'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Словарь свойств'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Properties Vocabulary'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'Единый словарь свойств и вариаций (props) компонентов дизайн-системы. Определяет унифицированные имена, допустимые значения и правила применения свойств для всех компонентов системы.'
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
                                {' — система тематизации.'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-1-klyuchevye-principy'}>{'1. Ключевые принципы'}</h2>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Единство'}</b>
                                    {' — одинаковые имена и значения свойств для всех компонентов.'}
                                </li>
                                <li>
                                    <b>{'Семантика, не внешний вид'}</b>
                                    {' — описывают смысл и роль, а не конкретные визуальные значения.'}
                                </li>
                                <li>
                                    <b>{'Группировка'}</b>
                                    {' — свойства разделены на три чёткие группы с разными задачами.'}
                                </li>
                                <li>
                                    <b>{'Связь с токенами'}</b>
                                    {
                                        ' — каждое свойство — это не хардкод, а ссылка на токен дизайн-системы. Меняется бренд или тема — меняются токены. Набор свойств и их значения остаются неизменными.'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-2-klassifikaciya-svoystv'}>{'2. Классификация свойств'}</h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Свойства у компонентов и у элементов разделены на три группы и располагаются по порядку:'
                                }
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Appearance'}</b>
                                    {
                                        ' — изменяют визуальное оформление компонента. Напрямую связаны с токенами дизайн-системы.'
                                    }
                                </li>
                                <li>
                                    <b>{'State'}</b>
                                    {' — отображают поведение компонента. Состояния стилизуются токенами.'}
                                </li>
                                <li>
                                    <b>{'Structure'}</b>
                                    {
                                        ' — определяют состав и компоновку содержимого компонента. Управляют слотами и внутренними элементами.'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-3-appearance'}>{'3. Appearance'}</h2>
                            {'\n\n        '}
                            <p>{'Свойства влияют на то:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'как компонент выглядит;'}</li>
                                <li>{'какой визуальный стиль он несёт.'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Не влияют на: поведение компонента, его функциональность, состояние (state).'}</p>
                            {'\n\n        '}
                            <p>{'Правила:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {
                                        'В названиях используются существительные или прилагательные, обозначающие семантическую вариацию внешнего вида.'
                                    }
                                </li>
                                <li>
                                    {
                                        'Для отображения визуальных эффектов в дизайне имеются булевые свойства в квадратных скобках '
                                    }
                                    <code>{'[ ]'}</code>
                                    {
                                        ' с префиксом Has. В коде нет соответствующих свойств компонента — они реализуются через стили, токены или CSS-классы.'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-3-1-visual-style-stil-i-vizualnaya-rol'}>
                                {'3.1 Visual Style / Стиль и визуальная роль'}
                            </h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Свойства отображают семантический визуальный стиль — какую роль компонент играет в интерфейсе.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'View'}</b>
                                                {' — визуальная роль/стиль компонента. Частный вариант: IndicatorView'}
                                            </td>
                                            <td>
                                                {
                                                    'Default — основной, первичный вид; Secondary — вторичный вид; Tertiary — третичный вид; Accent — акцентный; Positive — позитивный сценарий; Warning — предупреждение; Negative — негативный сценарий; Info — нейтральная информация; AccentGradient — акцентный градиентный'
                                                }
                                            </td>
                                            <td>{'Button, Chip и др.'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-3-2-shape-amp-boundaries-forma-i-granicy'}>
                                {'3.2 Shape & Boundaries / Форма и границы'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Свойства отображают геометрию и контур компонента.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Shape'}</b>
                                                {
                                                    ' — определяет форму компонента или элементов внутри группы компонентов. В дизайне свойство располагается на уровне Structure компонента — это исключение, связанное с возможностями Figma/Pixso'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Default — стандартная форма компонента (базовое скругление по токену из ДС); Pilled — овальная форма; Circled — круглая форма; Segmented — форма для группы компонентов: крайние элементы группы имеют стандартные скругления, внутренние — прямые стыкующиеся края'
                                                }
                                            </td>
                                            <td>{'Badge, Chip и др.'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Clipped'}</b>
                                                {
                                                    ' — определяет поведение обрезки содержимого, выходящего за границы компонента. В дизайне свойство располагается на уровне Structure компонента — это исключение, связанное с возможностями Figma/Pixso'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Tabs'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-3-3-separation-razdeliteli'}>{'3.3 Separation / Разделители'}</h3>
                            {'\n\n        '}
                            <p>{'Отображают визуальное разделение между элементами или группами.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'SeparationType'}</b>
                                                {' — определяет, какой тип разделителя'}
                                            </td>
                                            <td>
                                                {
                                                    'None — разделитель не отображается; Shadow — тень; Divider — дивайдер'
                                                }
                                            </td>
                                            <td>{'TabBar и др.'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-3-4-surface-effects-vizualnye-effekty'}>
                                {'3.4 Surface Effects / Визуальные эффекты'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Свойства отображают наложение визуальных эффектов поверх компонента.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'[HasShadow]'}</b>
                                                {
                                                    ' — свойство, определяющее наличие тени. В дизайне может располагаться на уровне Structure компонента — исключение, связанное с возможностями Figma/Pixso'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Notification и др.'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'[HasOverlay]'}</b>
                                                {' — свойство, определяющее наличие затемнения'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Loader'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'[HasBlur]'}</b>
                                                {' — свойство, определяющее наличие размытия'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Loader'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-state'}>{'4. State'}</h2>
                            {'\n\n        '}
                            <p>{'Свойства влияют на:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'поведение — в каком состоянии компонент;'}</li>
                                <li>{'как визуально отображается состояние.'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Не влияют на: его функциональность, содержимое.'}</p>
                            {'\n\n        '}
                            <p>{'Правила:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {
                                        'В названиях используются прилагательные или причастия, обозначающие текущее состояние компонента.'
                                    }
                                </li>
                                <li>
                                    {
                                        'Для отображения визуальных состояний в дизайне имеются булевые свойства в квадратных скобках '
                                    }
                                    <code>{'[ ]'}</code>
                                    {
                                        ' с префиксом Has. В коде нет соответствующих свойств компонента — они реализуются через CSS-псевдоклассы.'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-4-1-process-amp-feedback-states'}>{'4.1 Process & Feedback States'}</h3>
                            {'\n\n        '}
                            <p>{'Свойства отображают состояния процесса и статус валидации.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Loading'}</b>
                                                {' — отображает состояние загрузки'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Button'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'ValidationState'}</b>
                                                {
                                                    ' — определяет текущий статус выполнения операции и тип обратной связи для пользователя'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'Default — нейтральное состояние, визуально компонент отображается в стандартном виде; Success — успешное состояние; Warning — состояние предупреждения, данные приняты, но требуют внимания; Error — состояние ошибки, введённые данные не прошли валидацию'
                                                }
                                            </td>
                                            <td>{'Группа компонентов Input (элементы ввода)'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-2-selection-states'}>{'4.2 Selection States'}</h3>
                            {'\n\n        '}
                            <p>{'Свойства отображают состояния выбора.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Selected'}</b>
                                                {
                                                    ' — отображает состояние выбора пользователем компонента или его части (элемента)'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Элементы списков (ListItem)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Checked'}</b>
                                                {' — частный случай Selected для контролов или отображением индикацией'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'CheckBox, RadioBox'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'TernedOn'}</b>
                                                {
                                                    ' — отображает включённое состояние (компонент имеет тумблер, переключатель)'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Switch'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-3-data-states'}>{'4.3 Data States'}</h3>
                            {'\n\n        '}
                            <p>{'Свойства отображают состояния данных внутри компонента.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Filled'}</b>
                                                {' — отображает состояние, при котором компонент заполнен данными'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Группа компонентов Input (элементы ввода)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'EmptyState'}</b>
                                                {' — отображает пустое состояние компонента'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Select'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Undefined'}</b>
                                                {' — отображает пустое состояние компонента'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-4-visibility-states'}>{'4.4 Visibility States'}</h3>
                            {'\n\n        '}
                            <p>{'Свойства видимости и отображение компонента.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Hidden'}</b>
                                                {' — свойство, обозначающее скрытое состояние'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'CodeInput и др.'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Opened'}</b>
                                                {' — свойство, обозначающее открытое состояние'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'DropDown, Accordion'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Visible'}</b>
                                                {
                                                    ' — свойство, указывающее на видимость объекта. Частный вариант: ValueVisible в компоненте RatingInput'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Rating'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-5-interaction-states'}>{'4.5 Interaction States'}</h3>
                            {'\n\n        '}
                            <p>{'Свойства отображают визуальную реакцию компонента на взаимодействие.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'[Hovered]'}</b>
                                                {
                                                    ' — отображает состояние, которое показывает пользователю, что элемент интерактивен: визуальное состояние при наведении. В макетах опционально'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Группа компонентов Input (элементы ввода), Button, Chip'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'[Actived]'}</b>
                                                {
                                                    ' — отображает состояние, которое показывает пользователю, что элемент интерактивен: визуальное состояние при нажатии. В макетах опционально'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Группа компонентов Input (элементы ввода), Button, Chip'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'[Focused]'}</b>
                                                {
                                                    ' — отображает состояние, при котором компонент готов к вводу или взаимодействию с клавиатуры. Частный вариант: FocusedLeft и FocusedRight — отображает, какое из двух полей ввода (левое или правое) находится в фокусе в компоненте Range'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Группа компонентов Input (элементы ввода)'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-6-availability-states'}>{'4.6 Availability States'}</h3>
                            {'\n\n        '}
                            <p>{'Свойства отображают доступность компонента для взаимодействия.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'ReadOnly'}</b>
                                                {
                                                    ' — отображает состояние, при котором компонент доступен только для чтения'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Группа компонентов Input (элементы ввода)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Disabled'}</b>
                                                {
                                                    ' — отображает состояние, при котором компонент недоступен для взаимодействия'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Группа компонентов Input (элементы ввода), Button, Chip'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-5-structure'}>{'5. Structure'}</h2>
                            {'\n\n        '}
                            <p>{'Свойства влияют на:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'состав компонента — какие части и элементы в него входят;'}</li>
                                <li>{'расположение элементов — как они организованы внутри компонента.'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Не влияют на: визуальное оформление компонента, состояние компонента.'}</p>
                            {'\n\n        '}
                            <p>{'Правила:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {
                                        'В названиях используются существительные, обозначающие структурную часть или элемент компонента.'
                                    }
                                </li>
                                <li>
                                    {
                                        'Булевые свойства, обозначающие наличие частей компонента, начинаются с префикса Has — HasIcon, например.'
                                    }
                                </li>
                                <li>{'Не используется префикс is.'}</li>
                                <li>
                                    {
                                        'Свойства, отвечающие за размещение, выравнивание, позиционирование, называются с суффиксами Placement, Align, Direction, Orientation и т.п.'
                                    }
                                </li>
                                <li>
                                    {
                                        'Если нужно задать свойство, которое определяет пропорции, то название должно состоять из существительного и заканчиваться суффиксом Ratio.'
                                    }
                                </li>
                                <li>
                                    {
                                        'Если компонент содержит слот («дырку»), то помимо булевого свойства для него создаётся свойство с выбором инстанса — Swap Instance Property. В названии такого свойства обязательно указывается символ «◇», а в значениях перечисляются предпочтительные компоненты для подстановки. В остальных случаях Swap Instance Property не применяется.'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-5-1-content-slots-kontent'}>{'5.1 Content Slots / Контент'}</h3>
                            {'\n\n        '}
                            <p>{'Наличие и выбор слотов для контента внутри компонента.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>
                                                    {'Has'}
                                                    <i>{'SlotName'}</i>
                                                </b>
                                                {
                                                    ' — определяет наличие определённого элемента или Слота — именованной позиции внутри компонента, в которую можно поместить контент. Примеры: HasContentBefore, HasContentAfter, HasOptionalIndicator, HasCaption'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Во всех компонентах с опциональными элементами'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>
                                                    {'◇'}
                                                    <i>{'SlotName'}</i>
                                                </b>
                                                {
                                                    ' — свойство выбора инстанса: перечисляются предпочтительные компоненты для подстановки. Примеры: ◇Content, ◇ContentBefore, ◇ContentAfter, ◇Action'
                                                }
                                            </td>
                                            <td>{'SwapContent'}</td>
                                            <td>{'Во всех компонентах, имеющих Content slots'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-5-2-contentplacement'}>{'5.2 ContentPlacement'}</h3>
                            {'\n\n        '}
                            <p>{'Наличие и позиция вложенного контента.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>
                                                    <i>{'ElementName'}</i>
                                                </b>
                                                {
                                                    ' — свойство наследует имя вложенного компонента. Определяет наличие определённого элемента и его позиционирование в компоненте. Примеры: Hint, Caption, Counter'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'None — элемент отсутствует; Inner — элемент расположен внутри основного фрейма компонента; Outer — элемент расположен снаружи основного фрейма компонента'
                                                }
                                            </td>
                                            <td>{'TextField и др.'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-5-3-position-raspolozhenie'}>{'5.3 Position / Расположение'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Placement'}</b>
                                                {
                                                    ' — определяет расположение основного элемента относительно триггера или расположения на экране Overlay-компонента (частный случай для Stack)'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'None — независимое положение, нет элемента/триггера, относительно которого может быть расположен компонент; Start — элемент располагается в начале/перед триггером; End — в конце/после триггера; Top — сверху относительно триггера; Bottom — снизу относительно триггера. Частные варианты для Stack: Top-End, Top-Start, Top-Center, Bottom-End, Bottom-Start, Bottom-Center, End-Top, End-Center, End-Bottom, Start-Top, Start-Center, Start-Bottom, Center'
                                                }
                                            </td>
                                            <td>{'DropdownMenu и др.'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Alignment'}</b>
                                                {
                                                    ' — управляет выравниванием всего компонента или его основного элемента относительно контейнера. Частный вариант: *ElementName*Align — управляет выравниванием конкретного элемента внутри компонента. Примеры: LabelAlign, LimitLabelsAlign, ValueAlign'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    'None — независимое положение; Start — элемент в начале/перед триггером; End — в конце/после триггера; Top — сверху; Bottom — снизу; Center — элемент выровнен по центру'
                                                }
                                            </td>
                                            <td>{'DropdownMenu и др.'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Reversed'}</b>
                                                {
                                                    ' — свойство, которое разворачивает направление компонента на противоположное'
                                                }
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Slider'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-5-4-layout-flow'}>{'5.4 Layout Flow'}</h3>
                            {'\n\n        '}
                            <p>{'Описывают отступы между элементами в группе и перенос на следующую строку.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Gap'}</b>
                                                {' — свойство, определяющее отступ между элементами в группах'}
                                            </td>
                                            <td>
                                                {
                                                    'Dense — маленький отступ, элементы расположены компактно, близко друг к другу; Wide — большой отступ, элементы расположены свободно, с увеличенным пространством между ними; None — без отступа, элементы вплотную друг к другу'
                                                }
                                            </td>
                                            <td>{'Группа компонентов Input (элементы ввода)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Wrapped'}</b>
                                                {' — свойство, определяющее перенос содержимого'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Form'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'HasSingleLine'}</b>
                                                {' — свойство, определяющее обрезку текста в одну строку'}
                                            </td>
                                            <td>{'True / False (boolean)'}</td>
                                            <td>{'Типографические элементы'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-5-5-sizing-razmery'}>{'5.5 Sizing / Размеры'}</h3>
                            {'\n\n        '}
                            <p>{'Описывают размеры элементов и компонентов.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Props'}</th>
                                            <th>{'Значения свойства'}</th>
                                            <th>{'Примеры компонентов'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Size'}</b>
                                                {' — свойство, задающее размер компонента. '}
                                                <b>{'Важно!'}</b>
                                                {
                                                    ' В дизайне компоненты разбиты по размерам на отдельные конфигурации, размер указан в названии компонента. Частный вариант: *ElementName*Size — задаёт размер вложенного элемента. Примеры: SpinnerSize, StrockSize'
                                                }
                                            </td>
                                            <td>{'XXS, XS, S, M, L, XL, XXL, Scale'}</td>
                                            <td>{'Все компоненты, имеющие размер. Progress — частный случай'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'PointerSize'}</b>
                                                {' — частный случай Size для элемента Pointer в компоненте Slider'}
                                            </td>
                                            <td>
                                                {
                                                    'S — маленький размер Pointer; L — большой размер Pointer; None — Pointer отсутствует'
                                                }
                                            </td>
                                            <td>{'Slider'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Ratio'}</b>
                                                {
                                                    ' — свойство, определяющее пропорции компонента — соотношение ширины к высоте. Используется преимущественно в медиа-компонентах'
                                                }
                                            </td>
                                            <td>
                                                {
                                                    '1x1 — квадрат, ширина равна высоте; 1x2 — портретная ориентация, высота в 2 раза больше ширины; 2x1 — альбомная ориентация, ширина в 2 раза больше высоты; 3x4 — близко к портретному формату; 4x3 — классический экранный формат; 16x9 — широкоэкранный формат (видео, баннеры); 9x16 — вертикальный широкоэкранный формат; Custom — произвольные пропорции, задаются вручную'
                                                }
                                            </td>
                                            <td>{'Image'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <div className={'callout'}>
                                <p>
                                    {'Примечания из исходника (требуют уточнения у команды): написание '}
                                    <code>{'TernedOn'}</code>
                                    {' (в states.md — '}
                                    <code>{'turnedOn'}</code>
                                    {'); свойства '}
                                    <code>{'[Hovered]/[Actived]/[Focused]'}</code>
                                    {
                                        ' помечены «в []???»; у PointerSize значения указаны как «Small — надо S / Large — надо L» — в таблице приведены целевые S/L.'
                                    }
                                </p>
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
                                    <SiteLink href={'#p-1-klyuchevye-principy'}>{'1. Ключевые принципы'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-klassifikaciya-svoystv'}>
                                        {'2. Классификация свойств'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-appearance'}>{'3. Appearance'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-1-visual-style-stil-i-vizualnaya-rol'} className={'is-sub'}>
                                        {'3.1 Visual Style / Стиль и визуальная роль'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-2-shape-amp-boundaries-forma-i-granicy'} className={'is-sub'}>
                                        {'3.2 Shape & Boundaries / Форма и границы'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-3-separation-razdeliteli'} className={'is-sub'}>
                                        {'3.3 Separation / Разделители'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-4-surface-effects-vizualnye-effekty'} className={'is-sub'}>
                                        {'3.4 Surface Effects / Визуальные эффекты'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-state'}>{'4. State'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-1-process-amp-feedback-states'} className={'is-sub'}>
                                        {'4.1 Process & Feedback States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-2-selection-states'} className={'is-sub'}>
                                        {'4.2 Selection States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-3-data-states'} className={'is-sub'}>
                                        {'4.3 Data States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-4-visibility-states'} className={'is-sub'}>
                                        {'4.4 Visibility States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-5-interaction-states'} className={'is-sub'}>
                                        {'4.5 Interaction States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-6-availability-states'} className={'is-sub'}>
                                        {'4.6 Availability States'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-structure'}>{'5. Structure'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-1-content-slots-kontent'} className={'is-sub'}>
                                        {'5.1 Content Slots / Контент'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-2-contentplacement'} className={'is-sub'}>
                                        {'5.2 ContentPlacement'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-3-position-raspolozhenie'} className={'is-sub'}>
                                        {'5.3 Position / Расположение'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-4-layout-flow'} className={'is-sub'}>
                                        {'5.4 Layout Flow'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-5-sizing-razmery'} className={'is-sub'}>
                                        {'5.5 Sizing / Размеры'}
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
                                    <SiteLink href={'/docs/interaction-model'}>{'Interaction Model'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/spacing-layout'}>{'Spacing & Layout'}</SiteLink>
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
