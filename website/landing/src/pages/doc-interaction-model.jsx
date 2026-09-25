import { Header, SiteLink, parseStyle } from '../shared';

export default function DocInteractionModelPage() {
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
                                            <SiteLink href={'/docs/interaction-model'} className={'is-current'}>
                                                {'Interaction Model'}
                                            </SiteLink>
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
                                <span>{'Interaction Model'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Взаимодействие'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Interaction Model'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>{'Общие правила взаимодействия компонентов SDDS.'}</p>
                            {'\n\n        '}
                            <p>
                                <b>{'См. также:'}</b>{' '}
                                <SiteLink href={'/docs/states'}>
                                    <code>{'states.md'}</code>
                                </SiteLink>
                                {' — состояния компонентов, '}
                                <SiteLink href={'/docs/validation-model'}>
                                    <code>{'validation-model.md'}</code>
                                </SiteLink>
                                {' — валидация форм, '}
                                <SiteLink href={'/docs/accessibility'}>
                                    <code>{'accessibility.md'}</code>
                                </SiteLink>
                                {' — доступность.'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'principy'}>{'Принципы'}</h2>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Native first'}</b>
                                    {
                                        ' — если нативный HTML-элемент даёт корректное поведение, используйте его как основу'
                                    }
                                </li>
                                <li>
                                    <b>{'Одно действие — один результат'}</b>
                                    {' — Click, Enter и Space не запускают разные сценарии'}
                                </li>
                                <li>
                                    <b>{'Keyboard parity'}</b>
                                    {' — всё доступное мышью доступно с клавиатуры'}
                                </li>
                                <li>
                                    <b>{'Predictable focus'}</b>
                                    {' — пользователь понимает, где фокус и куда он перейдёт'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'focus-model'}>{'Focus model'}</h2>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <code>{'Tab'}</code>
                                    {' → следующий интерактивный элемент'}
                                </li>
                                <li>
                                    <code>{'Shift+Tab'}</code>
                                    {' → предыдущий интерактивный элемент'}
                                </li>
                                <li>
                                    <code>{'Disabled=True'}</code>
                                    {' — элемент исключается из tab-order'}
                                </li>
                                <li>
                                    <code>{'ReadOnly=True'}</code>
                                    {' — элемент остаётся в tab-order'}
                                </li>
                                <li>{'Focus ring обязателен и не зависит только от цвета'}</li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'sostavnye-komponenty'}>{'Составные компоненты'}</h3>
                            {'\n\n        '}
                            <p>
                                <b>{'Фокус остаётся на триггере:'}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'Select, DatePicker, ComboBox, Popover'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                <b>{'Фокус переходит внутрь:'}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'CheckBoxGroup, RadioBox Group, CalendarGrid, Tabs, TreeSelect'}</li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'activation-model'}>{'Activation model'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Триггер'}</th>
                                            <th>{'Действие'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Click'}</code>
                                            </td>
                                            <td>{'Активация'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Enter'}</code>
                                            </td>
                                            <td>{'Активация'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Space'}</code>
                                            </td>
                                            <td>{'Активация для button-like контролов'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'selection-patterns'}>{'Selection patterns'}</h2>
                            {'\n\n        '}
                            <h3 id={'edinstvennyy-vybor'}>{'Единственный выбор'}</h3>
                            {'\n\n        '}
                            <p>
                                {'RadioBox, Segment, Tabs — выбирается один вариант. Навигация стрелками. Состояние: '}
                                <code>{'checked'}</code>
                                {' / '}
                                <code>{'selected'}</code>
                                {'.'}
                            </p>
                            {'\n\n        '}
                            <h3 id={'mnozhestvennyy-vybor'}>{'Множественный выбор'}</h3>
                            {'\n\n        '}
                            <p>
                                {'CheckBox, Select Multiple, Chip — каждый элемент независим. Состояние: '}
                                <code>{'checked'}</code>
                                {'.'}
                            </p>
                            {'\n\n        '}
                            <h3 id={'switch'}>{'Switch'}</h3>
                            {'\n\n        '}
                            <p>
                                {'Switch — мгновенное переключение без submit. Состояние: '}
                                <code>{'Turn On=on/off'}</code>
                                {'.'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'open-close-model'}>{'Open / Close model'}</h2>
                            {'\n\n        '}
                            <p>
                                <b>{'Открывается по:'}</b>
                                {' Click, Enter, Space, иногда ArrowDown (Select, ComboBox)'}
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'Закрывается по:'}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <code>{'Escape'}</code>
                                </li>
                                <li>{'Click outside'}</li>
                                <li>{'Выбор опции (если сценарий одношаговый)'}</li>
                                <li>{'Явное действие (Close, Cancel)'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                <b>{'После закрытия:'}</b>
                                {' фокус возвращается на триггер.'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'keyboard-patterns'}>{'Keyboard patterns'}</h2>
                            {'\n\n        '}
                            <h3 id={'button-like-basicbutton-iconbutton-embeddedbutton'}>
                                {'Button-like (BasicButton, IconButton, EmbeddedButton)'}
                            </h3>
                            {'\n\n        '}
                            <p>
                                <code>{'Tab'}</code>
                                {' / '}
                                <code>{'Shift+Tab'}</code>
                                {', '}
                                <code>{'Enter'}</code>
                                {', '}
                                <code>{'Space'}</code>
                            </p>
                            {'\n\n        '}
                            <h3 id={'field-like-textfield-textarea-numberinput'}>
                                {'Field-like (TextField, TextArea, NumberInput)'}
                            </h3>
                            {'\n\n        '}
                            <p>
                                <code>{'Tab'}</code>
                                {' / '}
                                <code>{'Shift+Tab'}</code>
                                {', текстовый ввод'}
                            </p>
                            {'\n\n        '}
                            <h3 id={'list-selection-radiobox-group-segment-select-options'}>
                                {'List selection (RadioBox Group, Segment, Select options)'}
                            </h3>
                            {'\n\n        '}
                            <p>
                                <code>{'Tab'}</code>
                                {' / '}
                                <code>{'Shift+Tab'}</code>
                                {', '}
                                <code>{'Arrow keys'}</code>
                                {', '}
                                <code>{'Enter'}</code>
                                {' / '}
                                <code>{'Space'}</code>
                                {', '}
                                <code>{'Escape'}</code>
                            </p>
                            {'\n\n        '}
                            <h3 id={'range-slider-range'}>{'Range (Slider, Range)'}</h3>
                            {'\n\n        '}
                            <p>
                                <code>{'Tab'}</code>
                                {', '}
                                <code>{'Arrow keys'}</code>
                                {', '}
                                <code>{'Home'}</code>
                                {', '}
                                <code>{'End'}</code>
                            </p>
                            {'\n\n        '}
                            <h2 id={'disabled-vs-read-only'}>{'Disabled vs Read-only'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th />
                                            <th>{'Disabled'}</th>
                                            <th>{'Read-only'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Принимает ввод'}</td>
                                            <td>{'✗'}</td>
                                            <td>{'✗'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Открывается'}</td>
                                            <td>{'✗'}</td>
                                            <td>{'✗'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'В tab-order'}</td>
                                            <td>{'✗'}</td>
                                            <td>{'✓'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Значение видимо'}</td>
                                            <td>{'✓'}</td>
                                            <td>{'✓'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Значение копируется'}</td>
                                            <td>{'—'}</td>
                                            <td>{'✓'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Figma-проп'}</td>
                                            <td>
                                                <code>{'Disabled=True'}</code>
                                            </td>
                                            <td>
                                                <code>{'ReadOnly=True'}</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'touch-patterns'}>{'Touch patterns'}</h2>
                            {'\n\n        '}
                            <p>{'На мобильных платформах мышь заменяется касанием. Ключевые отличия:'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Действие'}</th>
                                            <th>{'Mouse'}</th>
                                            <th>{'Touch'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Активация'}</td>
                                            <td>
                                                <code>{'click'}</code>
                                            </td>
                                            <td>
                                                <code>{'tap'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Наведение'}</td>
                                            <td>
                                                <code>{'hover'}</code>
                                            </td>
                                            <td>{'— (не существует)'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Удержание'}</td>
                                            <td>
                                                <code>{'mousedown'}</code>
                                                {' длительное'}
                                            </td>
                                            <td>
                                                <code>{'long press'}</code>
                                                {' (нестандартно, избегать)'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Прокрутка'}</td>
                                            <td>
                                                <code>{'scroll'}</code>
                                            </td>
                                            <td>
                                                <code>{'swipe'}</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                <b>{'Нет hover на touch.'}</b>
                                {
                                    ' Компоненты не должны прятать критичный контент за hover-состоянием — на мобильных оно недостижимо.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'Swipe-паттерны:'}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'Drawer, BottomSheet — закрываются свайпом в сторону/вниз'}</li>
                                <li>{'Carousel — переключение свайпом по горизонтали'}</li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'drag-patterns'}>{'Drag patterns'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Действие'}</th>
                                            <th>{'Keyboard-альтернатива'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Slider'}</td>
                                            <td>{'Drag ползунка'}</td>
                                            <td>{'Arrow keys, Home, End'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Range'}</td>
                                            <td>{'Drag двух ползунков'}</td>
                                            <td>{'Tab между ползунками, Arrow keys'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Dropzone'}</td>
                                            <td>{'Drag & drop файлов'}</td>
                                            <td>{'Click для открытия диалога файлов'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                {
                                    'Drag всегда требует keyboard-альтернативы — компонент без неё нарушает WCAG 2.1 SC 2.1.1.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'async-feedback'}>{'Async feedback'}</h2>
                            {'\n\n        '}
                            <h3 id={'loading'}>{'Loading'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Блокирует повторный запуск. Не должен менять размер компонента. Визуально заметен (спиннер вместо иконки или лейбла).'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'oshibka-posle-async-operacii'}>{'Ошибка после async-операции'}</h3>
                            {'\n\n        '}
                            <p>{'Если операция завершилась ошибкой:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {'Компонент возвращается из '}
                                    <code>{'loading'}</code>
                                    {' в исходное состояние'}
                                </li>
                                <li>
                                    {'Ошибка отображается через Toast ('}
                                    <code>{'View=Negative'}</code>
                                    {') или '}
                                    <code>{'View=Error'}</code>
                                    {' на поле — в зависимости от контекста'}
                                </li>
                                <li>{'Фокус возвращается на элемент, который инициировал операцию'}</li>
                                <li>
                                    {'Кнопка снова становится интерактивной — пользователь может повторить попытку'}
                                </li>
                            </ul>
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
                                    <SiteLink href={'#principy'}>{'Принципы'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#focus-model'}>{'Focus model'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#sostavnye-komponenty'} className={'is-sub'}>
                                        {'Составные компоненты'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#activation-model'}>{'Activation model'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#selection-patterns'}>{'Selection patterns'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#edinstvennyy-vybor'} className={'is-sub'}>
                                        {'Единственный выбор'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#mnozhestvennyy-vybor'} className={'is-sub'}>
                                        {'Множественный выбор'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#switch'} className={'is-sub'}>
                                        {'Switch'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#open-close-model'}>{'Open / Close model'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#keyboard-patterns'}>{'Keyboard patterns'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#button-like-basicbutton-iconbutton-embeddedbutton'}
                                        className={'is-sub'}
                                    >
                                        {'Button-like (BasicButton, IconButton, EmbeddedButton)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#field-like-textfield-textarea-numberinput'} className={'is-sub'}>
                                        {'Field-like (TextField, TextArea, NumberInput)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#list-selection-radiobox-group-segment-select-options'}
                                        className={'is-sub'}
                                    >
                                        {'List selection (RadioBox Group, Segment, Select options)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#range-slider-range'} className={'is-sub'}>
                                        {'Range (Slider, Range)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#disabled-vs-read-only'}>{'Disabled vs Read-only'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#touch-patterns'}>{'Touch patterns'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#drag-patterns'}>{'Drag patterns'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#async-feedback'}>{'Async feedback'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#loading'} className={'is-sub'}>
                                        {'Loading'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#oshibka-posle-async-operacii'} className={'is-sub'}>
                                        {'Ошибка после async-операции'}
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
                                    <SiteLink href={'/docs/validation-model'}>{'Validation Model'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/props-vocabulary'}>{'Properties Vocabulary'}</SiteLink>
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
