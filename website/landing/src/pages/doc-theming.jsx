import { Header, SiteLink, parseStyle } from '../shared';

export default function DocThemingPage() {
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
                                            <SiteLink href={'/docs/theming'} className={'is-current'}>
                                                {'Themes tokens'}
                                            </SiteLink>
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
                                <span>{'Themes tokens'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Токены и темы'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Themes tokens'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>{'Система тематизации на семантических токенах.'}</p>
                            {'\n\n        '}
                            <p>
                                {
                                    'Документация описывает архитектуру токенов системы SDDS и может использоваться как справочник для дизайнеров и разработчиков при построении, использовании и расширении брендовых тем.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                {'См. также: '}
                                <SiteLink href={'/docs/glossary'}>
                                    <code>{'glossary.md'}</code>
                                </SiteLink>
                                {' — термины «токен», «тема», «контекст»; '}
                                <SiteLink href={'/docs/introducing'}>
                                    <code>{'introducing.md'}</code>
                                </SiteLink>
                                {' — архитектура системы.'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'bystryy-start-figma'}>{'Быстрый старт (Figma)'}</h2>
                            {'\n\n        '}
                            <p>{'Если вы дизайнер и только начинаете работать с SDDS в Figma:'}</p>
                            {'\n\n        '}
                            <ol className={'article-list'}>
                                <li>
                                    {'Откройте файл '}
                                    <code>{'SDDS | Styles'}</code>
                                    {' (fileKey '}
                                    <code>{'0FxQGHmGUOCjtHM3N9j4Oq'}</code>
                                    {')'}
                                </li>
                                <li>
                                    {'В правой панели → '}
                                    <b>{'Local Variables'}</b>
                                    {' — здесь хранятся все токены'}
                                </li>
                                <li>
                                    {'Чтобы применить тему к макету — выделите фрейм и переключите коллекцию '}
                                    <code>{'01. Theme'}</code>
                                    {' в нужный вариант'}
                                </li>
                                <li>{'Компоненты обновятся автоматически — цвета подтянутся из новой коллекции'}</li>
                            </ol>
                            {'\n\n        '}
                            <p>
                                {
                                    'Если компонент не меняет цвет при смене темы — он использует захардкоженное значение вместо токена. Это баг, а не норма.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-1-obschaya-arhitektura-tokenov'}>{'1. Общая архитектура токенов'}</h2>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Color Tokens'}</b>
                                    {' — токены цвета'}
                                </li>
                                <li>
                                    <b>{'Typography Tokens'}</b>
                                    {' — токены шрифта'}
                                </li>
                                <li>
                                    <b>{'Shadow Tokens'}</b>
                                    {' — токены теней'}
                                </li>
                                <li>
                                    <b>{'Shape Tokens'}</b>
                                    {' — токены скруглений'}
                                </li>
                                <li>
                                    <b>{'Blur Tokens'}</b>
                                    {' — токены размытия'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'theme-tema'}>{'Theme / Тема'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'В дизайн-системе SDDS стиль бренда и переопределение под него компонентов задаётся через Тему — набор семантических токенов, определяющий визуальную идентичность продукта, а не конкретные значения напрямую. Это позволяет переключать темы без изменения компонентов.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-2-color-tokens-tokeny-cveta'}>{'2. Color Tokens — токены цвета'}</h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Токен цвета — это семантически именованная единица, которая хранит не конкретный цвет, а смысл применения этого цвета в интерфейсе. Компоненты никогда не обращаются к Raw Values напрямую — только через семантические токены.'
                                }
                            </p>
                            {'\n\n        '}
                            <pre className={'doc-code'}>
                                <code>
                                    {
                                        'Raw Value        →  Base Token  →  Semantic Token         →  Component\n#118CDF             Blue[500]      DefaultSurfaceAccent      ButtonBG\n                                   DefaultTextAccent         LinkButton'
                                    }
                                </code>
                            </pre>
                            {'\n\n        '}
                            <p>
                                <b>{'Важно:'}</b>
                                {
                                    ' один Raw Value → один Base Token → много Semantic Tokens. Это обеспечивает единую точку изменения цвета для всей темы.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-2-1-struktura-tokena-cveta'}>{'2.1 Структура токена цвета'}</h3>
                            {'\n\n        '}
                            <p>
                                {'Токены структурированы по схеме: '}
                                <b>{'Режим / Контекст / Область применения / Семантическая роль (+ Состояние)'}</b>
                                {'.'}
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Слой'}</th>
                                            <th>{'Design'}</th>
                                            <th>{'Code'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Режим (Mode)'}</td>
                                            <td>{'🌑'}</td>
                                            <td>{'— (отдельные файлы Theme)'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Контекст (Context)'}</td>
                                            <td>{'Default'}</td>
                                            <td>
                                                <code>{'default'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Область применения'}</td>
                                            <td>{'Surface'}</td>
                                            <td>
                                                <code>{'surface'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Семантическая роль'}</td>
                                            <td>{'TransparentPositive'}</td>
                                            <td>
                                                <code>{'transparent-positive'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Состояние'}</td>
                                            <td>{'Hover'}</td>
                                            <td>
                                                <code>{'hover'}</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-2-mode-rezhim-otobrazheniya-interfeysa'}>
                                {'2.2 Mode — режим отображения интерфейса'}
                            </h3>
                            {'\n\n        '}
                            <p>{'В SDDS каждый токен цвета существует в двух режимах: светлом и тёмном.'}</p>
                            {'\n\n        '}
                            <p>{'Значения:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'В дизайне'}</b>
                                    {': выбирается через Variables '}
                                    <code>{'01. Theme'}</code>
                                    {' = 🌕 Light / 🌑 Dark'}
                                </li>
                                <li>
                                    <b>{'В коде'}</b>
                                    {': заданы отдельными файлами Theme'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-2-3-context-kontekst-primeneniya'}>{'2.3 Context — контекст применения'}</h3>
                            {'\n\n        '}
                            <p>{'Определяет поверхность, на которой отрисовывается элемент.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Context'}</th>
                                            <th>{'Применение'}</th>
                                            <th>{'Поведение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Default'}</b>
                                            </td>
                                            <td>{'Элементы на основном фоне темы'}</td>
                                            <td>{'По умолчанию, значения токенов меняются в зависимости от Mode'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'OnDark'}</b>
                                            </td>
                                            <td>{'Элемент находится на тёмной поверхности'}</td>
                                            <td>
                                                {
                                                    'Статические значения токенов из тёмной темы, не меняются при переключении Mode'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'OnLight'}</b>
                                            </td>
                                            <td>{'Элемент находится на светлой поверхности'}</td>
                                            <td>
                                                {
                                                    'Статические значения токенов из светлой темы, не меняются при переключении Mode'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Inverse'}</b>
                                            </td>
                                            <td>{'Инвертированный контекст (тема внутри темы)'}</td>
                                            <td>{'Значения из противоположного Mode'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                {'Пример поведения токена '}
                                <code>{'TextPrimary'}</code>
                                {' в зависимости от контекста:'}
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Mode'}</th>
                                            <th>{'Context'}</th>
                                            <th>{'Значение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'🌕 Light'}</td>
                                            <td>{'Default'}</td>
                                            <td>
                                                <code>{'#080808'}</code>
                                                {' — чёрный текст на светлом фоне'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'🌕 Light'}</td>
                                            <td>{'OnDark'}</td>
                                            <td>
                                                <code>{'#FFFFFF'}</code>
                                                {' — белый текст поверх тёмного блока'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'🌕 Light'}</td>
                                            <td>{'OnLight'}</td>
                                            <td>
                                                <code>{'#080808'}</code>
                                                {' — чёрный текст поверх светлого блока'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'🌕 Light'}</td>
                                            <td>{'Inverse'}</td>
                                            <td>
                                                <code>{'#FFFFFF'}</code>
                                                {' — как будто применяется Dark-тема'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'🌑 Dark'}</td>
                                            <td>{'Default'}</td>
                                            <td>
                                                <code>{'#FFFFFF'}</code>
                                                {' — белый текст на тёмном фоне'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'🌑 Dark'}</td>
                                            <td>{'OnDark'}</td>
                                            <td>
                                                <code>{'#FFFFFF'}</code>
                                                {' — белый текст поверх тёмного блока'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'🌑 Dark'}</td>
                                            <td>{'OnLight'}</td>
                                            <td>
                                                <code>{'#080808'}</code>
                                                {' — чёрный текст поверх светлого блока'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'🌑 Dark'}</td>
                                            <td>{'Inverse'}</td>
                                            <td>
                                                <code>{'#FFFFFF'}</code>
                                                {' — как будто применяется Dark-тема'}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-4-oblast-primeneniya-kategoriya'}>{'2.4 Область применения / Категория'}</h3>
                            {'\n\n        '}
                            <p>{'Определяет, к какому слою UI-элемента или интерфейса применяется токен.'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Text'}</b>
                                    {' — цвет текста и иконок'}
                                </li>
                                <li>
                                    <b>{'Surface'}</b>
                                    {' — цвет поверхностей (фона) компонентов'}
                                </li>
                                <li>
                                    <b>{'Outline'}</b>
                                    {' — цвет обводок и фокуса компонентов'}
                                </li>
                                <li>
                                    <b>{'BG'}</b>
                                    {' — фон страниц, группа не применима к компонентам'}
                                </li>
                                <li>
                                    <b>{'Overlay'}</b>
                                    {' — наложение под модальными окнами'}
                                </li>
                                <li>
                                    <b>{'Syntax'}</b>
                                    {' — подсветка синтаксиса кода'}
                                </li>
                                <li>
                                    <b>{'Data'}</b>
                                    {' — токены для визуализации данных и графиков'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                {
                                    'Один и тот же смысловой цвет (например, «акцентный») существует отдельно для каждой группы, потому что значения могут быть одинаковыми, а могут отличаться:'
                                }
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <code>{'TextAccent'}</code>
                                    {' — Green[600] ('}
                                    <code>{'#108E26'}</code>
                                    {') — насыщенный для текста'}
                                </li>
                                <li>
                                    <code>{'SurfaceAccent'}</code>
                                    {' — Green[400] ('}
                                    <code>{'#24B23E'}</code>
                                    {') — более светлый оттенок цвета'}
                                </li>
                                <li>
                                    <code>{'OutlineAccent'}</code>
                                    {' — Green[600] ('}
                                    <code>{'#108E26'}</code>
                                    {') — цвет обводки в цвет текста'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-2-5-semanticheskaya-rol'}>{'2.5 Семантическая роль'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Роль описывает смысл и иерархию токена внутри группы. Ниже приведены примеры ролей; полный список семантических токенов — в базовом наборе токенов цвета.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'General'}</b>
                                {
                                    ' — иерархические роли. Используются для построения визуальной иерархии от главного к второстепенному.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Примеры токенов'}</th>
                                            <th>{'Роль'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'TextPrimary'}</code>
                                            </td>
                                            <td>{'Основной текст'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'TextSecondary'}</code>
                                            </td>
                                            <td>{'Вторичный текст'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'TextTertiary'}</code>
                                            </td>
                                            <td>{'Третичный текст'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'TextParagraph'}</code>
                                            </td>
                                            <td>{'Текст параграфов'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfacePrimary'}</code>
                                            </td>
                                            <td>{'Основной непрозрачный фон поверхности/контрола'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceSecondary'}</code>
                                            </td>
                                            <td>{'Вторичный непрозрачный фон поверхности/контрола'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceTransparentPrimary'}</code>
                                            </td>
                                            <td>{'Основной прозрачный фон поверхности/контрола'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                <b>{'Accent'}</b>
                                {' — акцентные роли. Фирменный/акцентный цвет бренда.'}
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Примеры токенов'}</th>
                                            <th>{'Роль'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'TextAccent'}</code>
                                            </td>
                                            <td>{'Акцентный цвет текста'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'TextAccentMinor'}</code>
                                            </td>
                                            <td>{'Приглушённый, менее интенсивный акцентный цвет текста'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceAccent'}</code>
                                            </td>
                                            <td>{'Акцентный фон поверхности/контрола'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                <b>{'Status'}</b>
                                {' — статусные роли. Несут смысловую нагрузку.'}
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Примеры токенов'}</th>
                                            <th>{'Роль'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'TextPositive'}</code>
                                            </td>
                                            <td>{'Цвет успеха текстового блока'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'TextWarning'}</code>
                                            </td>
                                            <td>{'Цвет предупреждения текстового блока'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfacePositive'}</code>
                                            </td>
                                            <td>{'Цвет успеха фона поверхности/контрола'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceWarning'}</code>
                                            </td>
                                            <td>{'Цвет предупреждения фона поверхности/контрола'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                <b>{'Специальные роли'}</b>
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Примеры токенов'}</th>
                                            <th>{'Роль'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceSkeletonGradient'}</code>
                                            </td>
                                            <td>{'Цвет skeleton-загрузки'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceReadOnly'}</code>
                                            </td>
                                            <td>{'Цвет состояния readOnly'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>{'Для уточнения роли в имя токена может добавляться модификатор:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Solid'}</b>
                                    {' — непрозрачный вариант'}
                                </li>
                                <li>
                                    <b>{'Transparent'}</b>
                                    {' — вариант с прозрачностью'}
                                </li>
                                <li>
                                    <b>{'Gradient'}</b>
                                    {' — градиент'}
                                </li>
                                <li>
                                    <b>{'Minor'}</b>
                                    {' — приглушённый, менее интенсивный'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Примеры токенов с модификаторами'}</th>
                                            <th>{'Роль'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceAccent'}</code>
                                            </td>
                                            <td>{'Базовый вариант'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceTransparentAccent'}</code>
                                            </td>
                                            <td>{'Акцентный прозрачный фон поверхности/контрола'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceAccentGradient'}</code>
                                            </td>
                                            <td>{'Акцентный фон поверхности/контрола с градиентом'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceAccentMinor'}</code>
                                            </td>
                                            <td>{'Акцентный минорный непрозрачный фон поверхности/контрола'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'SurfaceAccentGradientMinor'}</code>
                                            </td>
                                            <td>{'Акцентный второстепенный фон поверхности/контрола с градиентом'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-6-state-sostoyanie'}>{'2.6 State — состояние'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Описывает интерактивное изменение токена при взаимодействии пользователя с интерфейсом.'
                                }
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Default'}</b>
                                    {' — отсутствует в имени, базовое состояние'}
                                </li>
                                <li>
                                    <b>{'Hover'}</b>
                                    {' — курсор наведён'}
                                </li>
                                <li>
                                    <b>{'Active'}</b>
                                    {' — элемент нажат / активен прямо сейчас'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Пример'}</th>
                                            <th>{'Роль'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'TextPrimary'}</code>
                                            </td>
                                            <td>{'Основной цвет текста'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'TextPrimaryHover'}</code>
                                            </td>
                                            <td>{'Основной цвет текста при наведении'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'TextPrimaryActive'}</code>
                                            </td>
                                            <td>{'Основной цвет текста при нажатии'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                {
                                    'Значения цвета токенов для интерактивных состояний рассчитываются в SDDS по формулам для заданной цветовой схемы.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>{'Стандартные значения токенов цвета SDDS — в документации Color.'}</p>
                            {'\n\n        '}
                            <h2 id={'p-3-typography-tokens-tokeny-shrifta'}>
                                {'3. Typography Tokens — токены шрифта'}
                            </h2>
                            {'\n\n        '}
                            <p>{'Система иерархической организации текстовой информации.'}</p>
                            {'\n\n        '}
                            <h3 id={'p-3-1-struktura'}>{'3.1 Структура'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Токены типографики описывают полную систему текстовых стилей. Каждый токен — композитный объект: '
                                }
                                <b>{'Группа / Подгруппа / Название группы + Размер + Начертание'}</b>
                                {'.'}
                            </p>
                            {'\n\n        '}
                            <p>
                                {'Пример: '}
                                <code>{'Display/Large Screens/DisplayL B'}</code>
                                {'.'}
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-3-2-osnovnye-gruppy'}>{'3.2 Основные группы'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Группа'}</th>
                                            <th>{'Назначение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Display'}</b>
                                            </td>
                                            <td>{'Крупные заголовки-витрины (в базовой SDDS — SB Sans Display)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Header'}</b>
                                            </td>
                                            <td>{'Заголовки секций (в базовой SDDS — SB Sans Text)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Text'}</b>
                                            </td>
                                            <td>{'Многострочный текст (в базовой SDDS — SB Sans Text)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Body'}</b>
                                            </td>
                                            <td>
                                                {'Текстовые слои внутри компонентов (в базовой SDDS — SB Sans Text)'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Numbers'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Моноширинные числа внутри компонентов (в базовой SDDS — SB Sans Text)'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Code'}</b>
                                            </td>
                                            <td>
                                                {
                                                    'Отображение кода внутри компонентов, CodeView (в базовой SDDS — SB Sans Text Mono)'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-3-3-podgruppy'}>{'3.3 Подгруппы'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Подгруппы разделены относительно размерных групп компонента Grid (подробнее — документация Grid). Определяют размер шрифта в токене в зависимости от размера устройства или области просмотра.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Подгруппа'}</th>
                                            <th>{'Назначение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Large Screens'}</b>
                                            </td>
                                            <td>{'Размерная группа Grid — Large, большой экран'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Medium Screens'}</b>
                                            </td>
                                            <td>{'Размерная группа Grid — Medium, средний экран'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Small Screens'}</b>
                                            </td>
                                            <td>{'Размерная группа Grid — Small, маленький экран'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-3-4-razmer'}>{'3.4 Размер'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Размер в названии токена типографики — это не конкретное значение в пикселях, а смысловое значение. Это позволяет менять реальные пиксели, не меняя имени токена.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>{'Шкала размеров — относительные буквенные метки:'}</p>
                            {'\n\n        '}
                            <pre className={'doc-code'}>
                                <code>{'xxs < xs < s < m < l'}</code>
                            </pre>
                            {'\n\n        '}
                            <p>
                                <b>{'Исключение:'}</b>
                                {' группа Header — размер описывается числовыми значениями по возрастанию от 6 до 1.'}
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-3-5-nachertanie'}>{'3.5 Начертание'}</h3>
                            {'\n\n        '}
                            <p>{'В SDDS два смысловых значения начертания типографики:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Bold (b)'}</b>
                                </li>
                                <li>
                                    <b>{'Normal (n)'}</b>
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Реальное значение fontStyle задаётся пользователем.'}</p>
                            {'\n\n        '}
                            <p>{'Стандартные значения токенов типографики SDDS — в документации Typography.'}</p>
                            {'\n\n        '}
                            <h2 id={'p-4-shadow-tokens-tokeny-teney'}>{'4. Shadow Tokens — токены теней'}</h2>
                            {'\n\n        '}
                            <p>{'Набор значений, определяющих эффекты теней у компонентов.'}</p>
                            {'\n\n        '}
                            <p>
                                {'Структура имени: '}
                                <b>{'Namespace / Direction / Character / Size'}</b>
                                {' — например, '}
                                <code>{'Shadows/Down/Soft/S'}</code>
                                {'.'}
                            </p>
                            {'\n\n        '}
                            <ol className={'article-list'}>
                                <li>
                                    <b>{'Namespace'}</b>
                                    {' — группа токенов теней'}
                                </li>
                                <li>
                                    <b>{'Direction'}</b>
                                    {' — направление'}
                                </li>
                                <li>
                                    <b>{'Character'}</b>
                                    {' — характер/интенсивность'}
                                </li>
                                <li>
                                    <b>{'Size'}</b>
                                    {' — размер'}
                                </li>
                            </ol>
                            {'\n\n        '}
                            <p>
                                {
                                    'В SDDS есть базовый набор токенов тени, значения которых определяются переменными направления, интенсивности и размера.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'Direction'}</b>
                                {' — переменная направления:'}
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Down'}</b>
                                    {' — направлена вниз'}
                                </li>
                                <li>
                                    <b>{'Up'}</b>
                                    {' — направлена вверх'}
                                </li>
                                <li>
                                    <b>{'Center'}</b>
                                    {' — вокруг элемента'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                <b>{'Character'}</b>
                                {' — переменная интенсивности:'}
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Soft'}</b>
                                    {' — мягкая тень с большим размытием, рассеянная'}
                                </li>
                                <li>
                                    <b>{'Hard'}</b>
                                    {' — чёткая, контрастная, резкая тень'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                <b>{'Size'}</b>
                                {' — размер тени:'}
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'S'}</b>
                                    {' — малая тень'}
                                </li>
                                <li>
                                    <b>{'M'}</b>
                                    {' — средняя тень'}
                                </li>
                                <li>
                                    <b>{'L'}</b>
                                    {' — большая тень'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Стандартные значения токенов тени SDDS — в документации Shadow.'}</p>
                            {'\n\n        '}
                            <h2 id={'p-5-cornerradius-tokens-tokeny-skrugleniy'}>
                                {'5. CornerRadius Tokens — токены скруглений'}
                            </h2>
                            {'\n\n        '}
                            <p>{'Набор значений, определяющих радиус скругления углов у компонентов.'}</p>
                            {'\n\n        '}
                            <p>
                                {'Структура имени: '}
                                <b>{'Namespace + Size'}</b>
                                {' — например, '}
                                <code>{'CR S'}</code>
                                {'.'}
                            </p>
                            {'\n\n        '}
                            <ol className={'article-list'}>
                                <li>
                                    <b>{'Namespace'}</b>
                                    {' — группа токенов скруглений'}
                                </li>
                                <li>
                                    <b>{'Size'}</b>
                                    {' — размер'}
                                </li>
                            </ol>
                            {'\n\n        '}
                            <p>{'В токенах скругления есть стандартные буквенные значения и вычисляемые.'}</p>
                            {'\n\n        '}
                            <h3 id={'p-5-1-shkala-standartnyh-razmerov'}>{'5.1 Шкала стандартных размеров'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Размер описывается через относительные буквенные метки. Значение размера — это позиция в шкале, а не конкретное значение в пикселях:'
                                }
                            </p>
                            {'\n\n        '}
                            <pre className={'doc-code'}>
                                <code>{'Null (0) < XXS < XS < S < M < L < XL < XXL < Rounded (100%)'}</code>
                            </pre>
                            {'\n\n        '}
                            <h3 id={'p-5-2-vychislyaemye-znacheniya'}>{'5.2 Вычисляемые значения'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'В компонентах применяются промежуточные значения — расчётные токены с правилом шага ±2px от базового токена. Например:'
                                }
                            </p>
                            {'\n\n        '}
                            <pre className={'doc-code'}>
                                <code>{'calc:[CRXXL-2], calc:[CRM-2], calc:[CRL-2], calc:[CRXL-2]'}</code>
                            </pre>
                            {'\n\n        '}
                            <p>
                                {
                                    'Стандартные значения токенов скруглений SDDS и правила вычисления — в документации Corner Radius ('
                                }
                                <SiteLink href={'/docs/corner-radius'}>
                                    <code>{'corner-radius.md'}</code>
                                </SiteLink>
                                {').'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-6-blur-tokens-tokeny-razmytiya'}>{'6. Blur Tokens — токены размытия'}</h2>
                            {'\n\n        '}
                            <p>{'Набор значений, определяющих эффекты размытия у компонентов.'}</p>
                            {'\n\n        '}
                            <p>{'Токены Blur используются для:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'Стеклянных / frosted-glass поверхностей'}</li>
                                <li>{'Фоновых панелей с backdrop-filter'}</li>
                                <li>{'Модальных окон с размытым задним планом'}</li>
                                <li>{'Системы уровней глубины (depth layers)'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                {'Структура имени: '}
                                <b>{'Namespace / Role + Effect marker + Size'}</b>
                                {' — например, '}
                                <code>{'Layer/BlurS'}</code>
                                {'.'}
                            </p>
                            {'\n\n        '}
                            <ol className={'article-list'}>
                                <li>
                                    <b>{'Namespace'}</b>
                                    {' — группа токенов размытия'}
                                </li>
                                <li>
                                    <b>{'Role'}</b>
                                    {' — роль применения'}
                                </li>
                                <li>
                                    <b>{'Effect marker'}</b>
                                    {' — неизменный уточняющий маркер внутри имени, явно указывает на blur-эффект'}
                                </li>
                                <li>
                                    <b>{'Size'}</b>
                                    {' — размер'}
                                </li>
                            </ol>
                            {'\n\n        '}
                            <p>
                                {
                                    'В SDDS есть базовый набор токенов размытия, значения которых определяются переменными роли применения и размера.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'Role'}</b>
                                {' — роль применения, определяет, к чему применяется эффект размытия:'}
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Layer'}</b>
                                    {' — размывает сам элемент'}
                                </li>
                                <li>
                                    <b>{'Background'}</b>
                                    {' — размывает фон за элементом (glass-эффект)'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                <b>{'Size'}</b>
                                {' — размер размытия:'}
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'S'}</b>
                                    {' — лёгкое размытие'}
                                </li>
                                <li>
                                    <b>{'M'}</b>
                                    {' — среднее размытие'}
                                </li>
                                <li>
                                    <b>{'L'}</b>
                                    {' — сильное размытие'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Стандартные значения токенов размытия SDDS — в документации Blur.'}</p>
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
                                    <SiteLink href={'#bystryy-start-figma'}>{'Быстрый старт (Figma)'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-obschaya-arhitektura-tokenov'}>
                                        {'1. Общая архитектура токенов'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#theme-tema'} className={'is-sub'}>
                                        {'Theme / Тема'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-color-tokens-tokeny-cveta'}>
                                        {'2. Color Tokens — токены цвета'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-1-struktura-tokena-cveta'} className={'is-sub'}>
                                        {'2.1 Структура токена цвета'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-2-mode-rezhim-otobrazheniya-interfeysa'} className={'is-sub'}>
                                        {'2.2 Mode — режим отображения интерфейса'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-3-context-kontekst-primeneniya'} className={'is-sub'}>
                                        {'2.3 Context — контекст применения'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-4-oblast-primeneniya-kategoriya'} className={'is-sub'}>
                                        {'2.4 Область применения / Категория'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-5-semanticheskaya-rol'} className={'is-sub'}>
                                        {'2.5 Семантическая роль'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-6-state-sostoyanie'} className={'is-sub'}>
                                        {'2.6 State — состояние'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-typography-tokens-tokeny-shrifta'}>
                                        {'3. Typography Tokens — токены шрифта'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-1-struktura'} className={'is-sub'}>
                                        {'3.1 Структура'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-2-osnovnye-gruppy'} className={'is-sub'}>
                                        {'3.2 Основные группы'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-3-podgruppy'} className={'is-sub'}>
                                        {'3.3 Подгруппы'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-4-razmer'} className={'is-sub'}>
                                        {'3.4 Размер'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-5-nachertanie'} className={'is-sub'}>
                                        {'3.5 Начертание'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-shadow-tokens-tokeny-teney'}>
                                        {'4. Shadow Tokens — токены теней'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-cornerradius-tokens-tokeny-skrugleniy'}>
                                        {'5. CornerRadius Tokens — токены скруглений'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-1-shkala-standartnyh-razmerov'} className={'is-sub'}>
                                        {'5.1 Шкала стандартных размеров'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-2-vychislyaemye-znacheniya'} className={'is-sub'}>
                                        {'5.2 Вычисляемые значения'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-6-blur-tokens-tokeny-razmytiya'}>
                                        {'6. Blur Tokens — токены размытия'}
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
                                    <SiteLink href={'/docs/corner-radius'}>{'Corner Radius'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/states'}>{'States'}</SiteLink>
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
