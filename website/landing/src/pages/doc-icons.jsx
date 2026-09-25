import { Header, SiteLink, parseStyle } from '../shared';

export default function DocIconsPage() {
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
                                            <SiteLink href={'/docs/icons'} className={'is-current'}>
                                                {'Icons'}
                                            </SiteLink>
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
                                <span>{'Иконки'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Набор иконок'}</span>
                                <span>{'·'}</span>
                                <span id={'iconsVersion'}>{'библиотека SDDS Icons'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Иконки'}</h1>
                            {'\n\n        '}
                            <p className={'article-lead'}>
                                {
                                    'Три начертания и три размера. Иконка нарисована под каждый размер\n        отдельно — 16 и 36 это не масштабированная 24. Ищите по названию, категории или\n        по-русски: «стрелка», «оплата», «профиль».'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-search'} id={'p-icons'}>
                                {'\n          '}
                                <img src={'/media/icon-search-20.svg'} alt={''} />
                                {'\n          '}
                                <input
                                    type={'search'}
                                    id={'iconsSearch'}
                                    placeholder={
                                        'Поиск по названию, категории и тегам — например, «стрелка» или «оплата»'
                                    }
                                    autoComplete={'off'}
                                    spellCheck={'false'}
                                />
                                {'\n          '}
                                <span className={'doc-search-count'} id={'iconsCount'}>
                                    <b>{'0'}</b>
                                    {' иконок'}
                                </span>
                                {'\n          '}
                                <button
                                    type={'button'}
                                    className={'doc-search-clear'}
                                    id={'iconsClear'}
                                    aria-label={'Очистить поиск'}
                                >
                                    {'\n            '}
                                    <svg viewBox={'0 0 16 16'} aria-hidden={'true'}>
                                        <path d={'M4 4l8 8M12 4l-8 8'} />
                                    </svg>
                                    {'\n          '}
                                </button>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'icons-panel'}>
                                {'\n          '}
                                <div className={'icons-switch'} role={'group'} aria-label={'Набор'}>
                                    {'\n            '}
                                    <button type={'button'} className={'is-on'} data-set={'sdds'}>
                                        {'SDDS'}
                                        <i>{'new'}</i>
                                    </button>
                                    {'\n            '}
                                    <button type={'button'} data-set={'plasma'}>
                                        {'Plasma'}
                                        <i>{'до 31.12.2026'}</i>
                                    </button>
                                    {'\n          '}
                                </div>
                                {'\n\n          '}
                                <div className={'icons-switch'} role={'group'} aria-label={'Начертание'}>
                                    {'\n            '}
                                    <button type={'button'} className={'is-on'} data-style={'Outline'}>
                                        {'Outline'}
                                    </button>
                                    {'\n            '}
                                    <button type={'button'} data-style={'OutlineBold'}>
                                        {'Outline Bold'}
                                    </button>
                                    {'\n            '}
                                    <button type={'button'} data-style={'Fill'}>
                                        {'Fill'}
                                    </button>
                                    {'\n          '}
                                </div>
                                {'\n\n          '}
                                <div className={'icons-switch'} role={'group'} aria-label={'Размер'}>
                                    {'\n            '}
                                    <button type={'button'} data-size={'16'}>
                                        {'16'}
                                    </button>
                                    {'\n            '}
                                    <button type={'button'} className={'is-on'} data-size={'24'}>
                                        {'24'}
                                    </button>
                                    {'\n            '}
                                    <button type={'button'} data-size={'36'}>
                                        {'36'}
                                    </button>
                                    {'\n          '}
                                </div>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'icons-cats'} id={'iconsCats'} role={'group'} aria-label={'Категории'} />
                            {'\n\n        '}
                            <div className={'icons-grid'} id={'iconsGrid'} />
                            {'\n\n        '}
                            <h2 id={'p-usage'}>{'Как подключить'}</h2>
                            {'\n\n        '}
                            <p>
                                {'Иконки поставляются пакетом '}
                                <code>{'@salutejs/sdds-icons'}</code>
                                {
                                    '. Имя иконки\n        в каталоге — это имя импорта: кликните по ней, и оно окажется в буфере.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                {'\n          '}
                                <table className={'doc-table'}>
                                    {'\n            '}
                                    <thead>
                                        <tr>
                                            <th>{'Шаг'}</th>
                                            <th>{'Что сделать'}</th>
                                        </tr>
                                    </thead>
                                    {'\n            '}
                                    <tbody>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Установка'}</td>
                                            <td>
                                                <code>{'npm i @salutejs/sdds-icons'}</code>
                                            </td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Импорт'}</td>
                                            <td>
                                                <code>{"import { AddOutline } from '@salutejs/sdds-icons';"}</code>
                                            </td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Размер'}</td>
                                            <td>
                                                {'Берётся из имени папки: '}
                                                <code>{'.../24/AddOutline'}</code>
                                                {'. Размер выбирают под контекст, а не масштабированием'}
                                            </td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Цвет'}</td>
                                            <td>
                                                {'Наследуется от текста: иконка рисуется '}
                                                <code>{'currentColor'}</code>
                                            </td>
                                        </tr>
                                        {'\n            '}
                                    </tbody>
                                    {'\n          '}
                                </table>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-rules'}>{'Правила использования'}</h2>
                            {'\n\n        '}
                            <ul>
                                {'\n          '}
                                <li>
                                    <b>{'Размер под контекст.'}</b>
                                    {
                                        ' 16 — внутри строк и компактных контролов, 24 — основной\n          размер интерфейса, 36 — крупные акценты и сенсорные экраны.'
                                    }
                                </li>
                                {'\n          '}
                                <li>
                                    <b>{'Одно начертание на экран.'}</b>
                                    {
                                        ' Outline — основное, Fill — для активных состояний\n          и акцентов, Outline Bold — для мелких размеров и плотных интерфейсов.'
                                    }
                                </li>
                                {'\n          '}
                                <li>
                                    <b>{'Иконка без подписи требует доступного имени.'}</b>
                                    {' Для IconButton задайте\n          '}
                                    <code>{'aria-label'}</code>
                                    {' или tooltip.'}
                                </li>
                                {'\n        '}
                            </ul>
                            {'\n\n        '}
                            <div className={'article-foot'}>
                                {'\n          '}
                                <p>
                                    {
                                        'Не нашли нужную иконку или заметили расхождение с макетом — напишите команде,\n          набор пополняется.'
                                    }
                                </p>
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
                                    <SiteLink href={'#p-icons'}>{'Иконки'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-usage'}>{'Как подключить'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-rules'}>{'Правила использования'}</SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'side-card'}>
                                {'\n          '}
                                <h3>{'Рядом по теме'}</h3>
                                {'\n          '}
                                <nav className={'link-list'}>
                                    {'\n            '}
                                    <SiteLink href={'/docs/actions-icon-button'}>{'IconButton'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/sizes'}>{'Размерная шкала'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/accessibility'}>{'Доступность'}</SiteLink>
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
                                    <SiteLink href={'https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/'}>
                                        {'Библиотека иконок в Figma'}
                                    </SiteLink>
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
