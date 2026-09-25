import { Header, SiteLink, parseStyle } from '../shared';

export default function DocSizesPage() {
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
                        {'\n      '}
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
                                            <SiteLink href={'/docs/sizes'} className={'is-current'}>
                                                {'Sizes'}
                                            </SiteLink>
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
                        {'\n      '}
                        <article className={'article doc-body'}>
                            {'\n        '}
                            <nav className={'crumbs'}>
                                {'\n          '}
                                <SiteLink href={'/docs'}>{'Документация'}</SiteLink>
                                <i>{'/'}</i>
                                <SiteLink href={'/docs'}>{'Основы'}</SiteLink>
                                <i>{'/'}</i>
                                <span>{'Sizes'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Обновлено 18 сентября 2026'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Sizes'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'Размеры в дизайн-системе — это единая шкала значений, которая обеспечивает визуальную консистентность между компонентами интерфейса.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'callout'}>
                                {'\n          '}
                                <b>{'Главное правило'}</b>
                                {'\n          '}
                                <p>
                                    {
                                        'Токен размера не означает единую высоту в пикселях для всех компонентов. Он означает, что компонент принадлежит одному масштабному уровню системы: использует одинаковую типографику, консистентные отступы и определённые токены скруглений. Фактическая высота зависит от роли компонента в интерфейсе.'
                                    }
                                </p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h2 id={'principles'}>{'Основные принципы'}</h2>
                            {'\n        '}
                            <p>{'Компоненты в SDDS делятся на два типа по логике высоты:'}</p>
                            {'\n        '}
                            <ul className={'article-list plain'}>
                                {'\n          '}
                                <li>
                                    <b>{'Самостоятельные компоненты'}</b>
                                    {
                                        ' — занимают полную высоту размера и используются как основные строительные блоки интерфейса.'
                                    }
                                </li>
                                {'\n          '}
                                <li>
                                    <b>{'Зависимые компоненты'}</b>
                                    {
                                        ' — имеют собственную высоту, не привязанную к полной высоте размера, так как предназначены для размещения внутри других компонентов или в качестве вспомогательных элементов.'
                                    }
                                </li>
                                {'\n        '}
                            </ul>
                            {'\n\n        '}
                            <h3 id={'standalone'}>{'Самостоятельные компоненты'}</h3>
                            {'\n        '}
                            <p>
                                {
                                    'Все основные интерактивные компоненты одного размера имеют одинаковую высоту и токены скруглений. Горизонтальные отступы могут варьироваться в зависимости от типа компонента. Это обеспечивает вертикальное выравнивание при совместном использовании — например, в строке формы.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                {'\n          '}
                                <table className={'doc-table'}>
                                    {'\n            '}
                                    <thead>
                                        <tr>
                                            <th>{'Пример компонента'}</th>
                                            <th>{'Размер'}</th>
                                            <th>{'Высота'}</th>
                                        </tr>
                                    </thead>
                                    {'\n            '}
                                    <tbody>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Button'}</td>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'48px'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'IconButton'}</td>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'48px'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'TextField'}</td>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'48px'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Select'}</td>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'48px'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Segment'}</td>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'48px'}</td>
                                        </tr>
                                        {'\n            '}
                                    </tbody>
                                    {'\n          '}
                                </table>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <p>
                                {
                                    'Кнопка, поле ввода и сегмент в одном размере всегда выровнены по высоте и могут стоять в одной строке без дополнительных подгонок.'
                                }
                            </p>
                            {'\n\n        '}
                            <figure className={'article-figure'}>
                                {'\n          '}
                                <img
                                    src={'/media/news/fig-sizes.svg'}
                                    alt={'Высота контролов по ступеням размера'}
                                    loading={'lazy'}
                                />
                                {'\n          '}
                                <figcaption>
                                    {'Ступени размера и высота самостоятельных компонентов на каждой из них'}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n\n        '}
                            <h3 id={'dependent'}>{'Зависимые компоненты'}</h3>
                            {'\n        '}
                            <p>
                                {
                                    'Часть компонентов имеет высоту, которая меньше полной высоты размера. Это не отклонение от системы, а намеренное решение: такие компоненты выполняют вспомогательную роль — они размещаются внутри самостоятельных компонентов или рядом с текстом и контентом, а не в качестве самостоятельных элементов строки интерфейса.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                {'\n          '}
                                <table className={'doc-table'}>
                                    {'\n            '}
                                    <thead>
                                        <tr>
                                            <th>{'Пример компонента'}</th>
                                            <th>{'Размер'}</th>
                                            <th>{'Высота'}</th>
                                            <th>{'Роль'}</th>
                                        </tr>
                                    </thead>
                                    {'\n            '}
                                    <tbody>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Chip'}</td>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'40px'}</td>
                                            <td>{'Вкладывается в TextField, используется в фильтрах'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Counter'}</td>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'24px'}</td>
                                            <td>{'Отображается внутри кнопок, табов, списков'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Badge'}</td>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'24px'}</td>
                                            <td>{'Накладывается поверх других компонентов'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>{'Indicator'}</td>
                                            <td>
                                                <code>{'M'}</code>
                                            </td>
                                            <td>{'8px'}</td>
                                            <td>{'Точечный статусный маркер'}</td>
                                        </tr>
                                        {'\n            '}
                                    </tbody>
                                    {'\n          '}
                                </table>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <p>
                                {
                                    'Зависимые компоненты намеренно меньше своего размерного контейнера — это создаёт внутренние отступы и визуальный воздух при вложении, сохраняя пропорциональность интерфейса.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'typography'}>{'Размер и типографика'}</h3>
                            {'\n        '}
                            <ul className={'article-list plain'}>
                                {'\n          '}
                                <li>
                                    {'Токен размера в '}
                                    <b>{'самостоятельных компонентах'}</b>
                                    {
                                        ' соответствует токену типографики внутри компонента. Независимо от ряда — основного, заголовочного или витринного — размер компонента и его типографика составляют единую пару и никогда не расходятся.'
                                    }
                                </li>
                                {'\n          '}
                                <li>
                                    {'В '}
                                    <b>{'зависимых компонентах'}</b>
                                    {
                                        ' есть исключения: Badge и Counter намеренно используют типографику меньшего размера, чем их размерный токен. Такие компоненты компактны по определению и всегда существуют в контексте другого компонента, поэтому увеличение типографики нарушило бы баланс внутри родителя.'
                                    }
                                </li>
                                {'\n        '}
                            </ul>
                            {'\n\n        '}
                            <h2 id={'scale'}>{'Основная шкала размеров'}</h2>
                            {'\n        '}
                            <p>
                                {
                                    'Базовая шкала охватывает шесть ступеней и применяется к большинству компонентов системы.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                {'\n          '}
                                <table className={'doc-table'}>
                                    {'\n            '}
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Типографика'}</th>
                                            <th>{'Высота'}</th>
                                            <th>{'Применение'}</th>
                                            <th>{'Платформа и контекст'}</th>
                                        </tr>
                                    </thead>
                                    {'\n            '}
                                    <tbody>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'XS'}</b>
                                            </td>
                                            <td>
                                                <code>{'BodyXS'}</code>
                                            </td>
                                            <td>{'32px'}</td>
                                            <td>{'Компактные, вспомогательные компоненты'}</td>
                                            <td>
                                                {
                                                    'Desktop Web: ERP, CRM, административные панели и дашборды — максимальная плотность данных'
                                                }
                                            </td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'S'}</b>
                                            </td>
                                            <td>
                                                <code>{'BodyS'}</code>
                                            </td>
                                            <td>{'40px'}</td>
                                            <td>{'Второстепенные действия, дополнительные поля'}</td>
                                            <td>{'Desktop Web: B2B-продукты, вспомогательные элементы на планшете'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'M'}</b>
                                            </td>
                                            <td>
                                                <code>{'BodyM'}</code>
                                            </td>
                                            <td>{'48px'}</td>
                                            <td>{'Базовый размер по умолчанию для большинства интерфейсов'}</td>
                                            <td>{'Desktop Web, Mobile'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'L'}</b>
                                            </td>
                                            <td>
                                                <code>{'BodyL'}</code>
                                            </td>
                                            <td>{'56px'}</td>
                                            <td>{'Основные действия, формы с приоритетом на ввод'}</td>
                                            <td>{'Mobile iOS и Android: основной размер, главные действия, формы'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'XL'}</b>
                                            </td>
                                            <td>
                                                <code>{'BodyL'}</code>{' '}
                                                <span className={'td-note'}>
                                                    {'исключение из правила соответствия'}
                                                </span>
                                            </td>
                                            <td>{'64px'}</td>
                                            <td>{'Акцентные элементы, крупные точки взаимодействия'}</td>
                                            <td>
                                                {'TV, Smart TV, киоски, интерактивные панели, лендинги с акцентным CTA'}
                                            </td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'Scalable'}</b>
                                            </td>
                                            <td>{'—'}</td>
                                            <td>{'По контейнеру'}</td>
                                            <td>{'Размер следует контейнеру, а не фиксированным пресетам'}</td>
                                            <td>
                                                {
                                                    'Desktop Web: B2C-продукты. Mobile: вложенные вспомогательные элементы'
                                                }
                                            </td>
                                        </tr>
                                        {'\n            '}
                                    </tbody>
                                    {'\n          '}
                                </table>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <figure className={'article-figure'}>
                                {'\n          '}
                                <img
                                    src={'/media/news/fig-density.svg'}
                                    alt={'Одна тема в плотном и в десятифутовом интерфейсе'}
                                    loading={'lazy'}
                                />
                                {'\n          '}
                                <figcaption>
                                    {
                                        'Одна шкала покрывает и плотный аналитический экран, и интерфейс для большого экрана'
                                    }
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n\n        '}
                            <h2 id={'extended'}>{'Расширенные шкалы'}</h2>
                            {'\n        '}
                            <p>
                                {
                                    'Помимо основной шкалы в системе есть дополнительные размерные ряды. Они применяются в отдельных компонентах, где стандартной шкалы недостаточно для покрытия всех сценариев.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'ultra'}>{'Сверхкомпактный ряд'}</h3>
                            {'\n        '}
                            <p>
                                {
                                    'Используется в компонентах, которым нужен размер меньше XS: высокоплотные интерфейсы и вспомогательные элементы с минимальной визуальной нагрузкой.'
                                }
                            </p>
                            {'\n        '}
                            <div className={'doc-table-wrap'}>
                                {'\n          '}
                                <table className={'doc-table'}>
                                    {'\n            '}
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Типографика'}</th>
                                            <th>{'Высота'}</th>
                                            <th>{'Применение'}</th>
                                        </tr>
                                    </thead>
                                    {'\n            '}
                                    <tbody>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'XXS'}</b>
                                            </td>
                                            <td>
                                                <code>{'BodyXS'}</code>
                                                {', '}
                                                <code>{'BodyXXS'}</code>
                                            </td>
                                            <td>{'24px'}</td>
                                            <td>
                                                {'Индикаторы, метки, вспомогательные маркеры в плотных интерфейсах'}
                                            </td>
                                        </tr>
                                        {'\n            '}
                                    </tbody>
                                    {'\n          '}
                                </table>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h3 id={'headers'}>{'Заголовочный ряд'}</h3>
                            {'\n        '}
                            <p>
                                {
                                    'Применяется в компонентах, типографика которых привязана к заголовочным токенам. Размер здесь определяется не высотой контейнера, а используемым типографическим токеном.'
                                }
                            </p>
                            {'\n        '}
                            <div className={'doc-table-wrap'}>
                                {'\n          '}
                                <table className={'doc-table'}>
                                    {'\n            '}
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Типографика'}</th>
                                            <th>{'Применение'}</th>
                                        </tr>
                                    </thead>
                                    {'\n            '}
                                    <tbody>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'H5'}</b>
                                            </td>
                                            <td>
                                                <code>{'Header/H5'}</code>
                                            </td>
                                            <td>{'Минимальный заголовочный акцент'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'H4'}</b>
                                            </td>
                                            <td>
                                                <code>{'Header/H4'}</code>
                                            </td>
                                            <td>{'Умеренный акцент: компонент заметен, но не доминирует'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'H3'}</b>
                                            </td>
                                            <td>
                                                <code>{'Header/H3'}</code>
                                            </td>
                                            <td>{'Крупный акцент на компоненте'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'H2'}</b>
                                            </td>
                                            <td>
                                                <code>{'Header/H2'}</code>
                                            </td>
                                            <td>{'Высокий акцент на компоненте'}</td>
                                        </tr>
                                        {'\n            '}
                                    </tbody>
                                    {'\n          '}
                                </table>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h3 id={'display'}>{'Витринный ряд'}</h3>
                            {'\n        '}
                            <p>
                                {
                                    'Применяется в единичных компонентах для максимально акцентного отображения контента — лендинги, акцентные блоки, экраны TV.'
                                }
                            </p>
                            {'\n        '}
                            <div className={'doc-table-wrap'}>
                                {'\n          '}
                                <table className={'doc-table'}>
                                    {'\n            '}
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Типографика'}</th>
                                            <th>{'Применение'}</th>
                                        </tr>
                                    </thead>
                                    {'\n            '}
                                    <tbody>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'DisplayS'}</b>
                                            </td>
                                            <td>
                                                <code>{'DisplayS'}</code>
                                            </td>
                                            <td>{'Крупные акцентные элементы'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'DisplayM'}</b>
                                            </td>
                                            <td>
                                                <code>{'DisplayM'}</code>
                                            </td>
                                            <td>{'Крупные акцентные элементы'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'DisplayL'}</b>
                                            </td>
                                            <td>
                                                <code>{'DisplayL'}</code>
                                            </td>
                                            <td>{'Крупные акцентные элементы'}</td>
                                        </tr>
                                        {'\n            '}
                                    </tbody>
                                    {'\n          '}
                                </table>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h3 id={'sizeless'}>{'Без размера'}</h3>
                            {'\n        '}
                            <p>
                                {
                                    'Часть компонентов не имеет параметра Size и шкалы размеров вовсе. Их габариты определяются не токеном, а:'
                                }
                            </p>
                            {'\n        '}
                            <ul className={'article-list plain'}>
                                {'\n          '}
                                <li>{'содержимым;'}</li>
                                {'\n          '}
                                <li>{'ограничениями контейнера;'}</li>
                                {'\n          '}
                                <li>{'вьюпортом и брейкпоинтами;'}</li>
                                {'\n          '}
                                <li>{'платформенными зонами безопасности и системными паттернами.'}</li>
                                {'\n        '}
                            </ul>
                            {'\n        '}
                            <p>{'Примеры таких компонентов: Modal, BottomSheet, Image, Gallery.'}</p>
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
                        {'\n      '}
                        <aside className={'article-side'} data-lenis-prevent={''}>
                            {'\n        '}
                            <div className={'side-card toc'}>
                                {'\n          '}
                                <h3>{'На странице'}</h3>
                                {'\n          '}
                                <nav className={'toc-list'}>
                                    {'\n            '}
                                    <SiteLink href={'#principles'}>{'Основные принципы'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#standalone'} className={'is-sub'}>
                                        {'Самостоятельные компоненты'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#dependent'} className={'is-sub'}>
                                        {'Зависимые компоненты'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#typography'} className={'is-sub'}>
                                        {'Размер и типографика'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#scale'}>{'Основная шкала'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#extended'}>{'Расширенные шкалы'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#ultra'} className={'is-sub'}>
                                        {'Сверхкомпактный ряд'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#headers'} className={'is-sub'}>
                                        {'Заголовочный ряд'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#display'} className={'is-sub'}>
                                        {'Витринный ряд'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#sizeless'} className={'is-sub'}>
                                        {'Без размера'}
                                    </SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'side-card'}>
                                {'\n          '}
                                <h3>{'Связанные страницы'}</h3>
                                {'\n          '}
                                <nav className={'link-list'}>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'States — состояния компонентов'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Themes tokens — тематизация'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Corner Radius — скругления'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Spacing & Layout — отступы'}</SiteLink>
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
                                    <SiteLink href={'#'}>{'Библиотека Figma: ступени размера'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/#theme'}>{'Конфигуратор тем: ступень блока'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/news/article'}>{'Релиз 1.5: что изменилось в шкале'}</SiteLink>
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
