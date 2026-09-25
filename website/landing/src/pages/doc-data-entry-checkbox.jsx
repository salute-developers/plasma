import { Header, SiteLink, parseStyle } from '../shared';

export default function DocDataEntryCheckboxPage() {
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
                                            <SiteLink className={'is-child'} href={'/docs/data-entry-select'}>
                                                {'Select'}
                                            </SiteLink>
                                            {'\n              '}
                                            <SiteLink
                                                className={'is-child is-current'}
                                                href={'/docs/data-entry-checkbox'}
                                            >
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
                                <span>{'CheckBox'}</span>
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
                                    href={'https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8806-63106'}
                                >
                                    {'Открыть в Figma'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'CheckBox'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {'Связанный компонент: CheckBoxGroup ('}
                                <code>{'10560:111515'}</code>
                                {')'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-1-key-principles-of-use'}>{'1. Key Principles of Use'}</h2>
                            {'\n\n        '}
                            <h3 id={'what-it-is'}>{'What it is'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'CheckBox — элемент выбора одного или нескольких значений из набора. Поддерживает три состояния: снято, выбрано, частично выбрано (indeterminate).'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'when-to-use'}>{'When to use'}</h3>
                            {'\n\n        '}
                            <p>
                                <b>{'Use'}</b>
                                {
                                    ' — для независимых опций, которые можно включать/выключать раздельно: настройки, фильтры, согласие с условиями.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{"Don't use"}</b>
                                {' — для выбора одного из взаимоисключающих вариантов (используйте '}
                                <b>{'RadioBox'}</b>
                                {').'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-2-anatomy'}>{'2. Anatomy'}</h2>
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
                                                <code>{'control'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Сам флажок'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'label'}</code>
                                            </td>
                                            <td>
                                                <code>{'hasLabel=Yes'}</code>
                                            </td>
                                            <td>{'Текстовая метка'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'description'}</code>
                                            </td>
                                            <td>
                                                <code>{'hasDescription=Yes'}</code>
                                            </td>
                                            <td>{'Дополнительное описание под лейблом'}</td>
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
                                            <th>{'Размер'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'CheckBoxS'}</code>
                                            </td>
                                            <td>{'S'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'CheckBoxM'}</code>
                                            </td>
                                            <td>{'M'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'CheckBoxL'}</code>
                                            </td>
                                            <td>{'L'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'value-sostoyanie-vybora'}>{'Value (состояние выбора)'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Value'}</th>
                                            <th>{'Семантика'}</th>
                                            <th>{'CSS'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Empty'}</code>
                                            </td>
                                            <td>{'Не выбран'}</td>
                                            <td>
                                                <code>{'unchecked'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Single'}</code>
                                            </td>
                                            <td>{'Выбран'}</td>
                                            <td>
                                                <code>{'checked'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Multiple'}</code>
                                            </td>
                                            <td>{'Частично (indeterminate)'}</td>
                                            <td>
                                                <code>{'indeterminate'}</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'view'}>{'View'}</h3>
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
                                            <td>{'Стандартный'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Negative'}</code>
                                            </td>
                                            <td>{'Ошибка / невалидный выбор'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <div className={'callout'}>
                                <p>
                                    <b>{'Внимание:'}</b> <code>{'hasLabel'}</code>
                                    {' и '}
                                    <code>{'hasDescription'}</code>
                                    {' используют '}
                                    <code>{'Yes/No'}</code>
                                    {' вместо стандартных '}
                                    <code>{'True/False'}</code>
                                    {'.'}
                                </p>
                            </div>
                            {'\n\n        '}
                            <div className={'callout'}>
                                <p>
                                    <b>{'Внимание:'}</b>
                                    {' в '}
                                    <code>{'CheckBoxS'}</code> <code>{'Disabled=false/true'}</code>
                                    {' (нижний регистр), в M и L — '}
                                    <code>{'False/True'}</code>
                                    {'.'}
                                </p>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-sizes'}>{'4. Sizes'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'T-shirt'}</th>
                                            <th>{'Контекст'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'S'}</code>
                                            </td>
                                            <td>{'Компактные формы, тулбары'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>
                                                {'Стандартные формы — '}
                                                <b>{'дефолт'}</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'L'}</code>
                                            </td>
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
                                                <code>{'unchecked'}</code>
                                            </td>
                                            <td>
                                                <code>{'Value=Empty'}</code>
                                            </td>
                                            <td>{'Не выбран'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'checked'}</code>
                                            </td>
                                            <td>
                                                <code>{'Value=Single'}</code>
                                            </td>
                                            <td>{'Выбран'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'indeterminate'}</code>
                                            </td>
                                            <td>
                                                <code>{'Value=Multiple'}</code>
                                            </td>
                                            <td>{'Частично'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'negative'}</code>
                                            </td>
                                            <td>
                                                <code>{'View=Negative'}</code>
                                            </td>
                                            <td>{'Ошибка / невалидный выбор'}</td>
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
                                                <code>{'<input type="checkbox">'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Всегда'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'<label>'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'hasLabel=Yes'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-checked="mixed"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'Value=Multiple'}</code>
                                                {' (indeterminate)'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-invalid="true"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'View=Negative'}</code>
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
                                    <SiteLink href={'#value-sostoyanie-vybora'} className={'is-sub'}>
                                        {'Value (состояние выбора)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#view'} className={'is-sub'}>
                                        {'View'}
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
                                    <SiteLink href={'/docs/data-entry-select'}>{'Select'}</SiteLink>
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
