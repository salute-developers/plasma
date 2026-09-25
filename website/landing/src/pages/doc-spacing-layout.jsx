import { Header, SiteLink, parseStyle } from '../shared';

export default function DocSpacingLayoutPage() {
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
                                            <SiteLink href={'/docs/spacing-layout'} className={'is-current'}>
                                                {'Spacing & Layout'}
                                            </SiteLink>
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
                                <span>{'Spacing & Layout'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Отступы и сетка'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Spacing & Layout'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>{'Система отступов и компоновки в SDDS.'}</p>
                            {'\n\n        '}
                            <p>
                                <b>{'См. также:'}</b>{' '}
                                <SiteLink href={'/docs/sizes'}>
                                    <code>{'sizes.md'}</code>
                                </SiteLink>
                                {' — размерная шкала компонентов, '}
                                <SiteLink href={'/docs/interaction-model'}>
                                    <code>{'interaction-model.md'}</code>
                                </SiteLink>
                                {' — правила взаимодействия.'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'shkala-otstupov'}>{'Шкала отступов'}</h2>
                            {'\n\n        '}
                            <p>
                                {'Базовый шаг: '}
                                <b>{'4px'}</b>
                                {'. Все значения кратны 4 — произвольные числа не допускаются.'}
                            </p>
                            {'\n\n        '}
                            <p>
                                {'SDDS не использует отдельные spacing-переменные (CSS-переменные вида '}
                                <code>{'--spacing/N'}</code>
                                {
                                    ' отсутствуют). Компоненты применяют значения напрямую как hardcoded px. Шкала ниже — справочник допустимых значений.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                {
                                    'Логика шкалы: каждый следующий шаг = +4px. Размер компонента определяет его внутренний padding; расстояния между компонентами выбираются из той же шкалы.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Значение'}</th>
                                            <th>{'px → T-shirt'}</th>
                                            <th>{'Применение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'4px'}</td>
                                            <td>{'—'}</td>
                                            <td>{'Внутренние отступы мелких элементов, gap внутри Badge/Chip'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'8px'}</td>
                                            <td>{'—'}</td>
                                            <td>{'Отступ между иконкой и лейблом внутри компонента'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'12px'}</td>
                                            <td>{'XS'}</td>
                                            <td>{'Внутренний padding XS-компонентов'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'16px'}</td>
                                            <td>{'S'}</td>
                                            <td>{'Внутренний padding S-компонентов'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'20px'}</td>
                                            <td>{'M'}</td>
                                            <td>{'Внутренний padding M-компонентов'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'24px'}</td>
                                            <td>{'L'}</td>
                                            <td>{'Внутренний padding L-компонентов'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'28px'}</td>
                                            <td>{'XL'}</td>
                                            <td>{'Внутренний padding XL-компонентов'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'32px'}</td>
                                            <td>{'—'}</td>
                                            <td>{'Расстояние между крупными блоками, gap между секциями формы'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'40px'}</td>
                                            <td>{'—'}</td>
                                            <td>{'Секционный отступ, разделение смысловых групп'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'vnutrennie-otstupy-komponentov'}>{'Внутренние отступы компонентов'}</h2>
                            {'\n\n        '}
                            <h3 id={'knopki-gorizontalnyy-padding'}>{'Кнопки (горизонтальный padding)'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Высота'}</th>
                                            <th>{'Padding H'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'XS'}</td>
                                            <td>{'32px'}</td>
                                            <td>{'12px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'S'}</td>
                                            <td>{'40px'}</td>
                                            <td>{'16px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'M'}</td>
                                            <td>{'48px'}</td>
                                            <td>{'20px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'L'}</td>
                                            <td>{'56px'}</td>
                                            <td>{'24px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'XL'}</td>
                                            <td>{'64px'}</td>
                                            <td>{'28px'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'polya-vvoda-textfield-select-gorizontalnyy-padding'}>
                                {'Поля ввода (TextField, Select — горизонтальный padding)'}
                            </h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Высота'}</th>
                                            <th>{'Padding H'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'XS'}</td>
                                            <td>{'32px'}</td>
                                            <td>{'12px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'S'}</td>
                                            <td>{'40px'}</td>
                                            <td>{'16px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'M'}</td>
                                            <td>{'48px'}</td>
                                            <td>{'20px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'L'}</td>
                                            <td>{'56px'}</td>
                                            <td>{'24px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'XL'}</td>
                                            <td>{'64px'}</td>
                                            <td>{'28px'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                {
                                    'Горизонтальный padding полей совпадает с кнопками той же ступени — это обеспечивает визуальное выравнивание при соседстве в одной строке.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'rasstoyaniya-mezhdu-komponentami'}>{'Расстояния между компонентами'}</h2>
                            {'\n\n        '}
                            <p>
                                {'Внутренние отступы компонентов задаются системой выше. Расстояния '}
                                <b>{'между'}</b>
                                {' компонентами выбираются из той же шкалы:'}
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Контекст'}</th>
                                            <th>{'Gap'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Иконка и лейбл внутри компонента'}</td>
                                            <td>{'8px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Поля в inline-группе (TextField + Button)'}</td>
                                            <td>{'8px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Поля в вертикальной форме'}</td>
                                            <td>{'16px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Группы полей между собой'}</td>
                                            <td>{'24px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Секции формы / смысловые блоки'}</td>
                                            <td>{'32–40px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Отдельные карточки / панели'}</td>
                                            <td>{'16–24px'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'pravila'}>{'Правила'}</h2>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'Используйте только значения из шкалы — не произвольные числа'}</li>
                                <li>{'Не смешивайте разные единицы (px и %) в одном блоке без явной причины'}</li>
                                <li>{'Сохраняйте вертикальный ритм: отступы между элементами кратны 4px'}</li>
                                <li>{'Иконка и лейбл разделяются 8px'}</li>
                                <li>
                                    {'Не уменьшайте gap между полями формы ниже 16px — элементы сливаются визуально'}
                                </li>
                                <li>
                                    {
                                        'Один размер отступа на контекст: не смешивайте 16px и 24px между полями одной формы'
                                    }
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
                                    <SiteLink href={'#shkala-otstupov'}>{'Шкала отступов'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#vnutrennie-otstupy-komponentov'}>
                                        {'Внутренние отступы компонентов'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#knopki-gorizontalnyy-padding'} className={'is-sub'}>
                                        {'Кнопки (горизонтальный padding)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#polya-vvoda-textfield-select-gorizontalnyy-padding'}
                                        className={'is-sub'}
                                    >
                                        {'Поля ввода (TextField, Select — горизонтальный padding)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#rasstoyaniya-mezhdu-komponentami'}>
                                        {'Расстояния между компонентами'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#pravila'}>{'Правила'}</SiteLink>
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
                                    <SiteLink href={'/docs/props-vocabulary'}>{'Properties Vocabulary'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/corner-radius'}>{'Corner Radius'}</SiteLink>
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
