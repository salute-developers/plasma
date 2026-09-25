import { Header, SiteLink, parseStyle } from '../shared';

export default function DocActionsButtonPage() {
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
                                            <SiteLink className={'is-child is-current'} href={'/docs/actions-button'}>
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
                                <SiteLink href={'/docs'}>{'Компоненты'}</SiteLink>
                                <i>{'/'}</i>
                                {'Actions'}
                                <i>{'/'}</i>
                                <span>{'Button'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Actions'}</span>
                                {'\n          '}
                                <span>{'Спецификация компонента'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                <span>{'·'}</span>
                                <SiteLink
                                    href={'https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8923-75680'}
                                >
                                    {'Открыть в Figma'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Button'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'BasicButton — основной элемент взаимодействия с текстовой меткой. Инициирует действие: отправку формы, подтверждение, запуск процесса. В отличие от LinkButton, не ведёт к ресурсу.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-sandbox'}>{'Песочница'}</h2>
                            {'\n\n        '}
                            <div className={'sandbox'} data-component={'Button'} hidden>
                                {'\n          '}
                                <p className={'sandbox-fallback'}>{'Живой пример загружается…'}</p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-1-key-principles-of-use'}>{'1. Key Principles of Use'}</h2>
                            {'\n\n        '}
                            <h3 id={'when-to-use'}>{'When to use'}</h3>
                            {'\n\n        '}
                            <p>
                                <b>{'Use'}</b>
                                {
                                    ' — для любого дискретного действия: сохранить, подтвердить, удалить, применить фильтр, перейти к следующему шагу.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{"Don't use:"}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {'Для навигации к URL — используйте '}
                                    <b>{'LinkButton'}</b>
                                </li>
                                <li>
                                    {'Только с иконкой без текста — используйте '}
                                    <b>{'IconButton'}</b>
                                </li>
                                <li>
                                    {'Для встроенных действий внутри полей — используйте '}
                                    <b>{'EmbeddedButton'}</b>
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'core-principles'}>{'Core principles'}</h3>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Один Accent на контекст'}</b>
                                    {' — несколько Accent-кнопок конкурируют за внимание'}
                                </li>
                                <li>
                                    <b>{'Label — глагол'}</b>
                                    {' — «Сохранить», «Удалить», «Отправить»; избегайте «OK», «Да»'}
                                </li>
                                <li>
                                    <b>{'Stretching=Fixed'}</b>
                                    {' только для явного выравнивания в сетке, не по умолчанию'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-2-anatomy'}>{'2. Anatomy'}</h2>
                            {'\n\n        '}
                            <pre className={'doc-code'}>
                                <code>
                                    {
                                        '┌─────────────────────────────────────────┐\n│  [ContentLeft]   Label   [ContentRight] │\n└─────────────────────────────────────────┘'
                                    }
                                </code>
                            </pre>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Слот'}</th>
                                            <th>{'Обязательность'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'label'}</code>
                                            </td>
                                            <td>{'required'}</td>
                                            <td>{'Текст кнопки. Глагол или глагольная фраза'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'contentLeft'}</code>
                                            </td>
                                            <td>{'optional'}</td>
                                            <td>{'Иконка слева от label'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'contentRight'}</code>
                                            </td>
                                            <td>{'optional'}</td>
                                            <td>
                                                {'Иконка ('}
                                                <code>{'Icon'}</code>
                                                {'), текстовое значение ('}
                                                <code>{'Value'}</code>
                                                {') или ничего ('}
                                                <code>{'None'}</code>
                                                {')'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'spinner'}</code>
                                            </td>
                                            <td>{'conditional'}</td>
                                            <td>
                                                {'Появляется при '}
                                                <code>{'Loading=True'}</code>
                                            </td>
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
                                                <code>{'Button 24 XXS'}</code>
                                            </td>
                                            <td>{'24'}</td>
                                            <td>{'XXS'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' BasicButton 32 XS'}</code>
                                            </td>
                                            <td>{'32'}</td>
                                            <td>{'XS'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' BasicButton 40 S'}</code>
                                            </td>
                                            <td>{'40'}</td>
                                            <td>{'S'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' BasicButton 48 M'}</code>
                                            </td>
                                            <td>{'48'}</td>
                                            <td>{'M'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' BasicButton 56 L'}</code>
                                            </td>
                                            <td>{'56'}</td>
                                            <td>{'L'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'BasicButton 64 XL'}</code>
                                            </td>
                                            <td>{'64'}</td>
                                            <td>{'XL'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <div className={'callout'}>
                                <p>
                                    {
                                        'Ведущий пробел в именах XS–L — известная проблема именования, не влияет на поведение.'
                                    }
                                </p>
                            </div>
                            {'\n\n        '}
                            <h3 id={'view-vizualnyy-stil'}>{'View (визуальный стиль)'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'View'}</th>
                                            <th>{'Назначение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Default'}</code>
                                            </td>
                                            <td>{'Нейтральный стиль, низкий визуальный вес'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Accent'}</code>
                                            </td>
                                            <td>{'Основное действие на экране'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Secondary'}</code>
                                            </td>
                                            <td>{'Второстепенное действие'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Clear'}</code>
                                            </td>
                                            <td>{'Прозрачный фон, минимальный вес'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Positive'}</code>
                                            </td>
                                            <td>{'Позитивное/подтверждающее действие'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Warning'}</code>
                                            </td>
                                            <td>{'Действие с риском'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Negative'}</code>
                                            </td>
                                            <td>{'Деструктивное/опасное действие'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Dark'}</code>
                                            </td>
                                            <td>{'Тёмный стиль (для светлых поверхностей)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Black'}</code>
                                                {' / '}
                                                <code>{'White'}</code>
                                            </td>
                                            <td>{'Монохромные варианты'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'AccentTransparent'}</code>
                                            </td>
                                            <td>{'Только в XXS: Accent с прозрачным фоном'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <div className={'callout'}>
                                <p>
                                    <b>{'Примечание:'}</b>
                                    {' В '}
                                    <code>{'Button 24 XXS'}</code>
                                    {' есть опечатка — '}
                                    <code>{'"Seccondary"'}</code>
                                    {" (лишняя 'c')."}
                                </p>
                            </div>
                            {'\n\n        '}
                            <h3 id={'modifikatory'}>{'Модификаторы'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Проп'}</th>
                                            <th>{'Значения'}</th>
                                            <th>{'Описание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Stretching'}</code>
                                            </td>
                                            <td>
                                                <code>{'Auto'}</code>
                                                {' / '}
                                                <code>{'Fixed'}</code>
                                            </td>
                                            <td>{'Auto — по контенту; Fixed — на всю ширину контейнера'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Spacing'}</code>
                                            </td>
                                            <td>
                                                <code>{'Packed'}</code>
                                                {' / '}
                                                <code>{'Space Between'}</code>
                                            </td>
                                            <td>{'Packed — иконка вплотную к тексту; Space Between — по краям'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'ContentLeft'}</code>
                                            </td>
                                            <td>
                                                <code>{'True'}</code>
                                                {' / '}
                                                <code>{'False'}</code>
                                            </td>
                                            <td>{'Включить/выключить левый контент'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'ContentRight'}</code>
                                            </td>
                                            <td>
                                                <code>{'None'}</code>
                                                {' / '}
                                                <code>{'Value'}</code>
                                                {' / '}
                                                <code>{'Icon'}</code>
                                            </td>
                                            <td>{'Тип правого контента'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-sizes'}>{'4. Sizes'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'T-shirt'}</th>
                                            <th>{'px'}</th>
                                            <th>{'Padding H'}</th>
                                            <th>{'Контекст'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'XXS'}</code>
                                            </td>
                                            <td>{'24'}</td>
                                            <td>{'8px'}</td>
                                            <td>{'Встроенные элементы, компактные тулбары'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'XS'}</code>
                                            </td>
                                            <td>{'32'}</td>
                                            <td>{'12px'}</td>
                                            <td>{'Тулбары, таблицы, inline-действия'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'S'}</code>
                                            </td>
                                            <td>{'40'}</td>
                                            <td>{'12px'}</td>
                                            <td>{'Вторичные формы, карточки'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'48'}</td>
                                            <td>{'16px'}</td>
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
                                            <td>{'16px'}</td>
                                            <td>{'Акцентные CTA'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'XL'}</code>
                                            </td>
                                            <td>{'64'}</td>
                                            <td>{'20px'}</td>
                                            <td>{'Hero-секции, touch-first'}</td>
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
                                            <td>{'—'}</td>
                                            <td>{'Базовый вид'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'hover'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Курсор над кнопкой'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'active/pressed'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Момент нажатия'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'focus'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Фокус клавиатуры (кольцо фокуса)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'loading'}</code>
                                            </td>
                                            <td>
                                                <code>{'Loading=True'}</code>
                                            </td>
                                            <td>{'Спиннер, кнопка неинтерактивна'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'disabled'}</code>
                                            </td>
                                            <td>
                                                <code>{'Disabled=True'}</code>
                                            </td>
                                            <td>{'Недоступна'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'dopustimye-kombinacii'}>{'Допустимые комбинации'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Комбинация'}</th>
                                            <th>{'Допустимо'}</th>
                                            <th>{'Примечание'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'hover'}</code>
                                                {' + '}
                                                <code>{'focus'}</code>
                                            </td>
                                            <td>{'✓'}</td>
                                            <td>{'Tab-навигация при наведении'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'loading'}</code>
                                                {' + '}
                                                <code>{'disabled'}</code>
                                            </td>
                                            <td>{'✓'}</td>
                                            <td>{'Блокировка во время запроса'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'hover'}</code>
                                                {' + '}
                                                <code>{'disabled'}</code>
                                            </td>
                                            <td>{'✗'}</td>
                                            <td>{'disabled отменяет все интерактивные'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'loading'}</code>
                                                {' + '}
                                                <code>{'hover'}</code>
                                            </td>
                                            <td>{'✗'}</td>
                                            <td>{'В loading кнопка визуально недоступна'}</td>
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
                                            <td>{'Перемещение фокуса'}</td>
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
                                            <td>{'Активация'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'loading-state'}>{'Loading state'}</h3>
                            {'\n\n        '}
                            <p>
                                {'При '}
                                <code>{'Loading=True'}</code>
                                {': лейбл заменяется спиннером, '}
                                <code>{'pointer-events: none'}</code>
                                {', '}
                                <code>{'aria-busy="true"'}</code>
                                {'. Ширина не меняется.'}
                            </p>
                            {'\n\n        '}
                            <h3 id={'touch-targets'}>{'Touch targets'}</h3>
                            {'\n\n        '}
                            <p>{'Минимальная зона — 44×44px. Для XXS и XS расширяется невидимым padding.'}</p>
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
                                                <code>{'<button>'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                {'Всегда. Не заменять на '}
                                                <code>{'<div>'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-busy="true"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'Loading=True'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'aria-disabled="true"'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'Loading=True'}</code>
                                                {' (остаётся в tab-order)'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'disabled'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>
                                                <code>{'Disabled=True'}</code>
                                                {' — нативный атрибут'}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'Контрастность текста: минимум 4.5:1 (WCAG AA)'}</li>
                                <li>{'Negative/Warning не передаются только цветом — нужна иконка или явный label'}</li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-8-design-tokens'}>{'8. Design Tokens'}</h2>
                            {'\n\n        '}
                            <h3 id={'accent-osnovnoe-deystvie'}>{'Accent (основное действие)'}</h3>
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
                                            <td>{'Фон default'}</td>
                                            <td>
                                                <code>{'Surfaces/Default/Accent/Solid/Accent'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Текст / иконка'}</td>
                                            <td>
                                                <code>{'Text&Icons/Default/General/Primary'}</code>
                                                {' (на акцентном фоне)'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Фон disabled'}</td>
                                            <td>
                                                <code>{'Surfaces/Default/General/Solid/Tertiary'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Текст disabled'}</td>
                                            <td>
                                                <code>{'Text&Icons/Default/General/Tertiary'}</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'secondary'}>{'Secondary'}</h3>
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
                                            <td>{'Фон default'}</td>
                                            <td>
                                                <code>{'Surfaces/Default/General/Solid/Secondary'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Обводка'}</td>
                                            <td>
                                                <code>{'Outlines/Default/General/Solid/Secondary'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Текст'}</td>
                                            <td>
                                                <code>{'Text&Icons/Default/General/Primary'}</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'negative'}>{'Negative'}</h3>
                            {'\n\n        '}
                            <div className={'callout'}>
                                <p>
                                    <code>{'View=Negative'}</code>
                                    {' в SDDS компонентах соответствует токенам группы '}
                                    <code>{'Status/Error'}</code>
                                    {' в коллекции Styles. Это разные уровни: Figma-проп называется '}
                                    <code>{'Negative'}</code>
                                    {', путь токена содержит '}
                                    <code>{'Error'}</code>
                                    {'.'}
                                </p>
                            </div>
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
                                            <td>{'Фон default'}</td>
                                            <td>
                                                <code>{'Surfaces/Default/Status/Solid/Error'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Текст'}</td>
                                            <td>
                                                <code>{'Text&Icons/onDark/General/Primary'}</code>
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
                                    <SiteLink href={'#p-sandbox'}>{'Песочница'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-key-principles-of-use'}>
                                        {'1. Key Principles of Use'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#when-to-use'} className={'is-sub'}>
                                        {'When to use'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#core-principles'} className={'is-sub'}>
                                        {'Core principles'}
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
                                    <SiteLink href={'#view-vizualnyy-stil'} className={'is-sub'}>
                                        {'View (визуальный стиль)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#modifikatory'} className={'is-sub'}>
                                        {'Модификаторы'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-sizes'}>{'4. Sizes'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-states'}>{'5. States'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#dopustimye-kombinacii'} className={'is-sub'}>
                                        {'Допустимые комбинации'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-6-behavior'}>{'6. Behavior'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#keyboard-interaction'} className={'is-sub'}>
                                        {'Keyboard interaction'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#loading-state'} className={'is-sub'}>
                                        {'Loading state'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#touch-targets'} className={'is-sub'}>
                                        {'Touch targets'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-7-accessibility'}>{'7. Accessibility'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-8-design-tokens'}>{'8. Design Tokens'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#accent-osnovnoe-deystvie'} className={'is-sub'}>
                                        {'Accent (основное действие)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#secondary'} className={'is-sub'}>
                                        {'Secondary'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#negative'} className={'is-sub'}>
                                        {'Negative'}
                                    </SiteLink>
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
                                    <SiteLink href={'/docs/actions-icon-button'}>{'IconButton'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/actions-link-button'}>{'LinkButton'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/actions-button-group'}>{'ButtonGroup'}</SiteLink>
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
            {'\n'}
            {'\n\n\n'}
        </>
    );
}
