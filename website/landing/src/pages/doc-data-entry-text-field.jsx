import { Header, SiteLink, parseStyle } from '../shared';

export default function DocDataEntryTextFieldPage() {
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
                                            <SiteLink
                                                className={'is-child is-current'}
                                                href={'/docs/data-entry-text-field'}
                                            >
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
                                <SiteLink href={'/docs'}>{'Компоненты'}</SiteLink>
                                <i>{'/'}</i>
                                {'Data Entry'}
                                <i>{'/'}</i>
                                <span>{'TextField'}</span>
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
                                    href={'https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8688-468'}
                                >
                                    {'Открыть в Figma'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'TextField'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {'Связанные компоненты: TextFieldClear ('}
                                <code>{'14446:247159'}</code>
                                {'), TextFieldGroup ('}
                                <code>{'13943:164509'}</code>
                                {'), TextFieldSlider ('}
                                <code>{'22919:4905'}</code>
                                {')'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-1-key-principles-of-use'}>{'1. Key Principles of Use'}</h2>
                            {'\n\n        '}
                            <h3 id={'what-it-is'}>{'What it is'}</h3>
                            {'\n\n        '}
                            <p>{'TextField — однострочное поле ввода текстовых данных. Основной инпут системы.'}</p>
                            {'\n\n        '}
                            <h3 id={'when-to-use'}>{'When to use'}</h3>
                            {'\n\n        '}
                            <p>
                                <b>{'Use'}</b>
                                {' — для ввода имени, email, телефона, пароля, поискового запроса, числа.'}
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{"Don't use:"}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {'Для длинных текстов — используйте '}
                                    <b>{'TextArea'}</b>
                                </li>
                                <li>
                                    {'Для выбора из списка — используйте '}
                                    <b>{'Select'}</b>
                                    {' или '}
                                    <b>{'Autocomplete'}</b>
                                </li>
                                <li>
                                    {'Для числового диапазона — используйте '}
                                    <b>{'Range'}</b>
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-2-anatomy'}>{'2. Anatomy'}</h2>
                            {'\n\n        '}
                            <pre className={'doc-code'}>
                                <code>
                                    {
                                        '[Label]\n┌──────────────────────────────────────────┐\n│ [prefix]  placeholder / value  [suffix]  │\n└──────────────────────────────────────────┘\n[Hint text]'
                                    }
                                </code>
                            </pre>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Слот'}</th>
                                            <th>{'Проп'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'label'}</code>
                                            </td>
                                            <td>
                                                <code>{'LabelPlacement'}</code>
                                            </td>
                                            <td>{'Метка поля. Может быть снаружи, внутри или скрыта'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'input'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Само поле ввода'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'prefix'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Иконка, текст или элемент слева внутри поля'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'suffix'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Иконка, текст или элемент справа'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'hint'}</code>
                                            </td>
                                            <td>
                                                <code>{'HintPlacement'}</code>
                                            </td>
                                            <td>{'Подсказка / текст ошибки'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'requiredMarker'}</code>
                                            </td>
                                            <td>
                                                <code>{'RequiredPlacement'}</code>
                                            </td>
                                            <td>{'Маркер обязательности'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-3-variants'}>{'3. Variants'}</h2>
                            {'\n\n        '}
                            <h3 id={'figma-component-sets'}>{'Figma Component Sets'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Имя в Figma'}</th>
                                            <th>{'px'}</th>
                                            <th>{'T-shirt'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{' TextField 32 XS'}</code>
                                            </td>
                                            <td>{'32'}</td>
                                            <td>{'XS'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' TextField 40 S'}</code>
                                            </td>
                                            <td>{'40'}</td>
                                            <td>{'S'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' TextField 48 M'}</code>
                                            </td>
                                            <td>{'48'}</td>
                                            <td>{'M'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' TextField 56 L'}</code>
                                            </td>
                                            <td>{'56'}</td>
                                            <td>{'L'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'TextField 64 XL'}</code>
                                            </td>
                                            <td>{'64'}</td>
                                            <td>{'XL'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'view-sostoyanie-validacii'}>{'View (состояние валидации)'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'View'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Default'}</code>
                                            </td>
                                            <td>{'Нейтральное'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Error'}</code>
                                            </td>
                                            <td>{'Ошибка валидации'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Warning'}</code>
                                            </td>
                                            <td>{'Предупреждение'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Success'}</code>
                                            </td>
                                            <td>{'Успешная валидация'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'labelplacement'}>{'LabelPlacement'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Значение'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Outer'}</code>
                                            </td>
                                            <td>{'Лейбл над полем'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Inner'}</code>
                                            </td>
                                            <td>{'Floating label внутри поля (XS не поддерживает)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'None'}</code>
                                            </td>
                                            <td>{'Лейбл скрыт'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'hintplacement'}>{'HintPlacement'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Значение'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Outer'}</code>
                                            </td>
                                            <td>{'Подсказка под полем'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Inner'}</code>
                                            </td>
                                            <td>{'Подсказка внутри при пустом поле'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'value-sostoyanie-zapolnennosti'}>{'Value (состояние заполненности)'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Значение'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Empty'}</code>
                                            </td>
                                            <td>{'Поле пустое'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Single'}</code>
                                            </td>
                                            <td>{'Однострочное значение'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Multiple'}</code>
                                            </td>
                                            <td>{'Многострочное значение'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-sizes'}>{'4. Sizes'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'T-shirt'}</th>
                                            <th>{'px'}</th>
                                            <th>{'Контекст'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'XS'}</code>
                                            </td>
                                            <td>{'32'}</td>
                                            <td>{'Тулбары, компактные формы'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'S'}</code>
                                            </td>
                                            <td>{'40'}</td>
                                            <td>{'Вторичные формы'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'48'}</td>
                                            <td>
                                                {'Стандартные формы — '}
                                                <b>{'дефолт'}</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'L'}</code>
                                            </td>
                                            <td>{'56'}</td>
                                            <td>{'Акцентные поля'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'XL'}</code>
                                            </td>
                                            <td>{'64'}</td>
                                            <td>{'Touch-first'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
                                                <code>{'View=Default'}</code>
                                            </td>
                                            <td>{'Нейтральное'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'focus'}</code>
                                            </td>
                                            <td>
                                                <code>{'Focused=True'}</code>
                                            </td>
                                            <td>{'Фокус, выделение поля'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'filled'}</code>
                                            </td>
                                            <td>
                                                <code>{'Value=Single/Multiple'}</code>
                                            </td>
                                            <td>{'Есть значение'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'error'}</code>
                                            </td>
                                            <td>
                                                <code>{'View=Error'}</code>
                                            </td>
                                            <td>{'Ошибка'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'warning'}</code>
                                            </td>
                                            <td>
                                                <code>{'View=Warning'}</code>
                                            </td>
                                            <td>{'Предупреждение'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'success'}</code>
                                            </td>
                                            <td>
                                                <code>{'View=Success'}</code>
                                            </td>
                                            <td>{'Успех'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'disabled'}</code>
                                            </td>
                                            <td>
                                                <code>{'Disabled=True'}</code>
                                            </td>
                                            <td>{'Недоступно'}</td>
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
                                        <tr>
                                            <td>
                                                <code>{'required'}</code>
                                            </td>
                                            <td>
                                                <code>{'Required=True'}</code>
                                            </td>
                                            <td>{'Обязательное'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'optional'}</code>
                                            </td>
                                            <td>
                                                <code>{'Optional=True'}</code>
                                            </td>
                                            <td>{'Необязательное (маркер)'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-6-behavior'}>{'6. Behavior'}</h2>
                            {'\n\n        '}
                            <h3 id={'keyboard-interaction'}>{'Keyboard interaction'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Клавиша'}</th>
                                            <th>{'Действие'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Tab'}</code>
                                                {' / '}
                                                <code>{'Shift+Tab'}</code>
                                            </td>
                                            <td>{'Переход к полю / из поля'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Ввод символов'}</td>
                                            <td>{'Заполнение значения'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Escape'}</code>
                                            </td>
                                            <td>{'Снять фокус (опционально)'}</td>
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
                                                <code>{'<input>'}</code>
                                                {' с '}
                                                <code>{'<label>'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Всегда'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-invalid="true"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'View=Error'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-describedby'}</code>
                                            </td>
                                            <td>{'ID hint-элемента'}</td>
                                            <td>{'При наличии подсказки / ошибки'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-required="true"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'Required=True'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'readonly'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'ReadOnly=True'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'disabled'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'Disabled=True'}</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-8-design-tokens'}>{'8. Design Tokens'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Роль'}</th>
                                            <th>{'SDDS Token'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Фон поля'}</td>
                                            <td>
                                                <code>{'Surfaces/Default/General/Solid/Secondary'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Обводка default'}</td>
                                            <td>
                                                <code>{'Outlines/Default/General/Solid/Secondary'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Обводка focus'}</td>
                                            <td>
                                                <code>{'Outlines/Default/Accent/Solid/Accent'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Обводка error'}</td>
                                            <td>
                                                <code>{'Outlines/Default/Status/Solid/Error'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Текст значения'}</td>
                                            <td>
                                                <code>{'Text&Icons/Default/General/Primary'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Лейбл (outer)'}</td>
                                            <td>
                                                <code>{'Text&Icons/Default/General/Secondary'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Placeholder'}</td>
                                            <td>
                                                <code>{'Text&Icons/Default/General/Tertiary'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Hint (ошибка)'}</td>
                                            <td>
                                                <code>{'Text&Icons/Default/Status/Error'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Disabled фон'}</td>
                                            <td>
                                                <code>{'Surfaces/Default/General/Solid/Tertiary'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Disabled текст'}</td>
                                            <td>
                                                <code>{'Text&Icons/Default/General/Tertiary'}</code>
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
                                    <SiteLink href={'#p-1-key-principles-of-use'}>
                                        {'1. Key Principles of Use'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#what-it-is'} className={'is-sub'}>
                                        {'What it is'}
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
                                    <SiteLink href={'#view-sostoyanie-validacii'} className={'is-sub'}>
                                        {'View (состояние валидации)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#labelplacement'} className={'is-sub'}>
                                        {'LabelPlacement'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#hintplacement'} className={'is-sub'}>
                                        {'HintPlacement'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#value-sostoyanie-zapolnennosti'} className={'is-sub'}>
                                        {'Value (состояние заполненности)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-sizes'}>{'4. Sizes'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-states'}>{'5. States'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-6-behavior'}>{'6. Behavior'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#keyboard-interaction'} className={'is-sub'}>
                                        {'Keyboard interaction'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-7-accessibility'}>{'7. Accessibility'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-8-design-tokens'}>{'8. Design Tokens'}</SiteLink>
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
                                    <SiteLink href={'/docs/data-entry-text-area'}>{'TextArea'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/data-entry-select'}>{'Select'}</SiteLink>
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
