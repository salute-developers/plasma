import { Header, SiteLink, parseStyle } from '../shared';

export default function DocActionsLinkButtonPage() {
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
                                            <SiteLink
                                                className={'is-child is-current'}
                                                href={'/docs/actions-link-button'}
                                            >
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
                                <span>{'LinkButton'}</span>
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
                            <h1>{'LinkButton'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'LinkButton — кнопка-ссылка. Визуально похожа на текстовую ссылку, но может инициировать действие или навигацию. Отличается от BasicButton отсутствием фона и границы.'
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
                                    ' — для вторичных действий в тексте, ссылок внутри форм, навигации с минимальным визуальным весом.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{"Don't use"}</b>
                                {' — как основное CTA (используйте BasicButton с View=Accent).'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-2-anatomy'}>{'2. Anatomy'}</h2>
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
                                            <td>{'Текст ссылки'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'contentLeft'}</code>
                                            </td>
                                            <td>{'optional'}</td>
                                            <td>{'Иконка слева'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'contentRight'}</code>
                                            </td>
                                            <td>{'optional'}</td>
                                            <td>{'Иконка справа'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'spinner'}</code>
                                            </td>
                                            <td>{'conditional'}</td>
                                            <td>
                                                {'При '}
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
                                                <code>{'LinkButton 24 XXS'}</code>
                                            </td>
                                            <td>{'24'}</td>
                                            <td>{'XXS'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' LinkButton 32 XS'}</code>
                                            </td>
                                            <td>{'32'}</td>
                                            <td>{'XS'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' LinkButton 40 S'}</code>
                                            </td>
                                            <td>{'40'}</td>
                                            <td>{'S'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' LinkButton 48 M'}</code>
                                            </td>
                                            <td>{'48'}</td>
                                            <td>{'M'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{' LinkButton 56 L'}</code>
                                            </td>
                                            <td>{'56'}</td>
                                            <td>{'L'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'LinkButton 64 XL'}</code>
                                            </td>
                                            <td>{'64'}</td>
                                            <td>{'XL'}</td>
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
                                            <th>{'Назначение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Default'}</code>
                                            </td>
                                            <td>{'Стандартный цвет ссылки'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Accent'}</code>
                                            </td>
                                            <td>{'Акцентный'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Secondary'}</code>
                                            </td>
                                            <td>{'Вторичный, менее заметный'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Positive'}</code>
                                            </td>
                                            <td>{'Позитивный'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Negative'}</code>
                                            </td>
                                            <td>{'Деструктивный / опасный'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Warning'}</code>
                                            </td>
                                            <td>{'Предупреждение'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Info'}</code>
                                            </td>
                                            <td>{'Информационный'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-sizes'}>{'4. Sizes'}</h2>
                            {'\n\n        '}
                            <p>{'Аналогично BasicButton: XXS(24) · XS(32) · S(40) · M(48) · L(56) · XL(64).'}</p>
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
                                                <code>{'loading'}</code>
                                            </td>
                                            <td>
                                                <code>{'Loading=True'}</code>
                                            </td>
                                            <td>{'Спиннер'}</td>
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
                                                <code>{'<a href>'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Для навигации к URL'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'<button>'}</code>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'Для действий без перехода'}</td>
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
                                                <code>{'disabled'}</code>
                                                {' / '}
                                                <code>{'aria-disabled'}</code>
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
                                    <SiteLink href={'/docs/actions-button'}>{'Button'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/actions-icon-button'}>{'IconButton'}</SiteLink>
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
            {'\n\n\n'}
        </>
    );
}
