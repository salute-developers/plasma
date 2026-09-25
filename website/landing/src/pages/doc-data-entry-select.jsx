import { Header, SiteLink, parseStyle } from '../shared';

export default function DocDataEntrySelectPage() {
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
                                            <SiteLink
                                                className={'is-child is-current'}
                                                href={'/docs/data-entry-select'}
                                            >
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
                                <SiteLink href={'/docs'}>{'Компоненты'}</SiteLink>
                                <i>{'/'}</i>
                                {'Data Entry'}
                                <i>{'/'}</i>
                                <span>{'Select'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Data Entry'}</span>
                                {'\n          '}
                                <span>{'Спецификация компонента'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                <span>{'·'}</span>
                                <SiteLink
                                    href={'https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=12012-74693'}
                                >
                                    {'Открыть в Figma'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Select'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'Select — выпадающий список для выбора одного или нескольких значений из предустановленного набора.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-1-key-principles-of-use'}>{'1. Key Principles of Use'}</h2>
                            {'\n\n        '}
                            <h3 id={'when-to-use'}>{'When to use'}</h3>
                            {'\n\n        '}
                            <p>
                                <b>{'Use'}</b>
                                {
                                    ' — когда вариантов более 5 и они не помещаются на экране. Для форм выбора страны, категории, типа.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{"Don't use:"}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {'До 5 вариантов — используйте '}
                                    <b>{'RadioBox'}</b>
                                    {' (Single) или '}
                                    <b>{'CheckBox'}</b>
                                    {' (Multiple)'}
                                </li>
                                <li>
                                    {'Для поиска по длинному списку — используйте '}
                                    <b>{'Autocomplete'}</b>
                                    {' или '}
                                    <b>{'ComboBox'}</b>
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-2-anatomy'}>{'2. Anatomy'}</h2>
                            {'\n\n        '}
                            <p>{'Аналогично TextField, дополнительно:'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Слот'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'trigger'}</code>
                                            </td>
                                            <td>{'Кнопка открытия списка (SelectButton)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'dropdown'}</code>
                                            </td>
                                            <td>{'Выпадающий список опций'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'option'}</code>
                                            </td>
                                            <td>{'Отдельная опция в списке'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-3-variants'}>{'3. Variants'}</h2>
                            {'\n\n        '}
                            <h3 id={'figma-component-sets'}>{'Figma Component Sets'}</h3>
                            {'\n\n        '}
                            <p>
                                {'Именование: '}
                                <code>{'Select/{Single|Multiple}/Select{T-shirt}'}</code>
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Имя'}</th>
                                            <th>{'Режим'}</th>
                                            <th>{'T-shirt'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Select/Single/Select32XS'}</code>
                                            </td>
                                            <td>{'Single'}</td>
                                            <td>{'XS'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Select/Single/Select40S'}</code>
                                            </td>
                                            <td>{'Single'}</td>
                                            <td>{'S'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Select/Single/Select48M'}</code>
                                            </td>
                                            <td>{'Single'}</td>
                                            <td>{'M'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Select/Single/Select56L'}</code>
                                            </td>
                                            <td>{'Single'}</td>
                                            <td>{'L'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Select/Single/Select64XL'}</code>
                                            </td>
                                            <td>{'Single'}</td>
                                            <td>{'XL'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Select/Multiple/Select32XS'}</code>
                                            </td>
                                            <td>{'Multiple'}</td>
                                            <td>{'XS'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Select/Multiple/Select40S'}</code>
                                            </td>
                                            <td>{'Multiple'}</td>
                                            <td>{'S'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Select/Multiple/Select48M'}</code>
                                            </td>
                                            <td>{'Multiple'}</td>
                                            <td>{'M'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Select/Multiple/Select56L'}</code>
                                            </td>
                                            <td>{'Multiple'}</td>
                                            <td>{'L'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Select/Multiple/Select64XL'}</code>
                                            </td>
                                            <td>{'Multiple'}</td>
                                            <td>{'XL'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                {'Отдельно: '}
                                <code>{'SelectButton/{Single|Multiple}/SelectButton{T-shirt}'}</code>
                                {' — изолированный триггер.'}
                            </p>
                            {'\n\n        '}
                            <h3 id={'rezhimy'}>{'Режимы'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Режим'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Single'}</code>
                                            </td>
                                            <td>{'Выбор одного значения'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Multiple'}</code>
                                            </td>
                                            <td>{'Выбор нескольких значений'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'propy-analogichno-textfield'}>{'Пропы (аналогично TextField)'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Проп'}</th>
                                            <th>{'Значения'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'LabelPlacement'}</code>
                                            </td>
                                            <td>{'Outer / Inner / None (XS: только Outer/None)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Value'}</code>
                                            </td>
                                            <td>{'Empty / Filled'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Opened'}</code>
                                            </td>
                                            <td>{'True / False'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'EmptyState'}</code>
                                            </td>
                                            <td>{'True / False — нет результатов'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Disabled'}</code>
                                            </td>
                                            <td>{'True / False'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'ReadOnly'}</code>
                                            </td>
                                            <td>{'True / False'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Required'}</code>
                                            </td>
                                            <td>{'True / False (осторожно: mixed case в разных сетах)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'RequiredPlacement'}</code>
                                            </td>
                                            <td>{'None / Left / Right'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-sizes'}>{'4. Sizes'}</h2>
                            {'\n\n        '}
                            <p>{'Аналогично TextField: XS(32) · S(40) · M(48) · L(56) · XL(64).'}</p>
                            {'\n\n        '}
                            <h2 id={'p-5-states'}>{'5. States'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Состояние'}</th>
                                            <th>{'Figma-проп'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'default'}</code>
                                            </td>
                                            <td>
                                                <code>{'Value=Empty, Opened=False'}</code>
                                            </td>
                                            <td>{'Пустое, закрытое'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'filled'}</code>
                                            </td>
                                            <td>
                                                <code>{'Value=Filled'}</code>
                                            </td>
                                            <td>{'Есть выбранное значение'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'opened'}</code>
                                            </td>
                                            <td>
                                                <code>{'Opened=True'}</code>
                                            </td>
                                            <td>{'Список раскрыт'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'empty-state'}</code>
                                            </td>
                                            <td>
                                                <code>{'EmptyState=True'}</code>
                                            </td>
                                            <td>{'Нет подходящих вариантов'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'disabled'}</code>
                                            </td>
                                            <td>
                                                <code>{'Disabled=True'}</code>
                                            </td>
                                            <td>{'Недоступен'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'read-only'}</code>
                                            </td>
                                            <td>
                                                <code>{'ReadOnly=True'}</code>
                                            </td>
                                            <td>{'Только чтение'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-7-accessibility'}>{'7. Accessibility'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Атрибут'}</th>
                                            <th>{'Значение'}</th>
                                            <th>{'Когда'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'role="combobox"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'На триггере'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-expanded'}</code>
                                            </td>
                                            <td>
                                                <code>{'true'}</code>
                                                {' / '}
                                                <code>{'false'}</code>
                                            </td>
                                            <td>
                                                <code>{'Opened=True/False'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-haspopup="listbox"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Всегда'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'role="listbox"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'На контейнере списка'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'role="option"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'На каждой опции'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-selected'}</code>
                                            </td>
                                            <td>
                                                <code>{'true'}</code>
                                                {' / '}
                                                <code>{'false'}</code>
                                            </td>
                                            <td>{'На опциях'}</td>
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
                                    <SiteLink href={'#p-1-key-principles-of-use'}>
                                        {'1. Key Principles of Use'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#when-to-use'} className={'is-sub'}>
                                        {'When to use'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-anatomy'}>{'2. Anatomy'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-variants'}>{'3. Variants'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#figma-component-sets'} className={'is-sub'}>
                                        {'Figma Component Sets'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#rezhimy'} className={'is-sub'}>
                                        {'Режимы'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#propy-analogichno-textfield'} className={'is-sub'}>
                                        {'Пропы (аналогично TextField)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-sizes'}>{'4. Sizes'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-states'}>{'5. States'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-7-accessibility'}>{'7. Accessibility'}</SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'side-card'}>
                                {'\n          '}
                                <h3>{'Рядом в категории'}</h3>
                                {'\n          '}
                                <nav className={'link-list'}>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-text-field'}>{'TextField'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-text-area'}>{'TextArea'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-checkbox'}>{'CheckBox'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-radio-box'}>{'RadioBox'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-switch'}>{'Switch'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-autocomplete'}>{'Autocomplete'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-date-picker'}>{'DatePicker'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-segment'}>{'Segment'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-slider'}>{'Slider'}</SiteLink>
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
