import { Header, SiteLink, parseStyle } from '../shared';

export default function DocValidationModelPage() {
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
                                            <SiteLink href={'/docs/validation-model'} className={'is-current'}>
                                                {'Validation Model'}
                                            </SiteLink>
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
                                <span>{'Validation Model'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Валидация форм'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Validation Model'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>{'Правила валидации полей ввода в SDDS.'}</p>
                            {'\n\n        '}
                            <p>
                                <b>{'См. также:'}</b>{' '}
                                <SiteLink href={'/docs/states'}>
                                    <code>{'states.md'}</code>
                                </SiteLink>
                                {' — состояния Error/Warning/Success, '}
                                <SiteLink href={'/docs/interaction-model'}>
                                    <code>{'interaction-model.md'}</code>
                                </SiteLink>
                                {' — модель взаимодействия, '}
                                <SiteLink href={'/docs/accessibility'}>
                                    <code>{'accessibility.md'}</code>
                                </SiteLink>
                                {' — aria-invalid, aria-required.'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'kogda-pokazyvat-validaciyu'}>{'Когда показывать валидацию'}</h2>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'После взаимодействия'}</b>
                                    {' — пользователь покинул поле (onBlur)'}
                                </li>
                                <li>
                                    <b>{'При попытке отправки'}</b>
                                    {' — пользователь нажал Submit'}
                                </li>
                                <li>
                                    <b>{'В реальном времени'}</b>
                                    {' — только для форматных ограничений (например, максимальная длина)'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>
                                <b>{'Не показывайте ошибку на пустом нетронутом поле.'}</b>
                            </p>
                            {'\n\n        '}
                            <h2 id={'sostoyaniya-validacii-view'}>{'Состояния валидации (View)'}</h2>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'View'}</th>
                                            <th>{'Описание'}</th>
                                            <th>{'Когда'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Default'}</code>
                                            </td>
                                            <td>{'Нейтральное состояние'}</td>
                                            <td>{'Поле не тронуто или введённые данные корректны'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Error'}</code>
                                            </td>
                                            <td>{'Ошибка — данные невалидны'}</td>
                                            <td>{'После взаимодействия, если данные не соответствуют требованиям'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Warning'}</code>
                                            </td>
                                            <td>{'Предупреждение'}</td>
                                            <td>{'Данные допустимы, но могут вызвать проблемы'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Success'}</code>
                                            </td>
                                            <td>{'Успешная валидация'}</td>
                                            <td>{'После успешной проверки, если визуальное подтверждение важно'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'urovni-validacii'}>{'Уровни валидации'}</h2>
                            {'\n\n        '}
                            <p>{'Валидация происходит на двух уровнях:'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Уровень'}</th>
                                            <th>{'Где'}</th>
                                            <th>{'Когда'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>{'Поле'}</b>
                                            </td>
                                            <td>
                                                <code>{'View=Error'}</code>
                                                {' + hint-текст под полем'}
                                            </td>
                                            <td>{'onBlur или при submit'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>{'Форма'}</b>
                                            </td>
                                            <td>{'Summary-блок в начале / конце формы'}</td>
                                            <td>{'При submit, если несколько полей невалидны'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                {
                                    'Используйте field-level валидацию как основной механизм. Form-level summary добавляйте только когда полей с ошибками больше трёх — пользователь иначе не видит всех проблем сразу.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'hint-i-tekst-oshibki'}>{'Hint и текст ошибки'}</h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Поле может иметь hint-текст в нейтральном состоянии и сообщение об ошибке в состоянии '
                                }
                                <code>{'Error'}</code>
                                {'. Это '}
                                <b>{'одна и та же область'}</b>
                                {' (HintPlacement):'}
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Состояние поля'}</th>
                                            <th>{'Что показывается'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'Default'}</code>
                                            </td>
                                            <td>{'Hint-текст (подсказка, требования к формату)'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Error'}</code>
                                            </td>
                                            <td>
                                                {'Текст ошибки '}
                                                <b>{'заменяет'}</b>
                                                {' hint-текст'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Warning'}</code>
                                            </td>
                                            <td>{'Текст предупреждения заменяет hint-текст'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'Success'}</code>
                                            </td>
                                            <td>{'Текст подтверждения или hint возвращается'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                {
                                    'Не показывайте hint и ошибку одновременно — это разные сообщения для разных состояний.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'async-validaciya'}>{'Async-валидация'}</h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Применяется для проверок, требующих запроса к серверу: уникальность email, доступность логина и т.д.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'Паттерн:'}</b>
                            </p>
                            {'\n\n        '}
                            <ol className={'article-list'}>
                                <li>{'Пользователь покидает поле (onBlur)'}</li>
                                <li>
                                    {'Поле переходит в '}
                                    <code>{'loading'}</code>
                                    {'-индикацию (Spinner в contentRight)'}
                                </li>
                                <li>
                                    {'По результату — '}
                                    <code>{'View=Error'}</code>
                                    {' или '}
                                    <code>{'View=Success'}</code>
                                </li>
                            </ol>
                            {'\n\n        '}
                            <p>
                                <b>{'Правила:'}</b>
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {'Не блокируйте submit во время проверки — покажите '}
                                    <code>{'loading'}</code>
                                    {' и отложите отправку'}
                                </li>
                                <li>{'Если запрос не успел завершиться до submit — выполните его синхронно'}</li>
                                <li>
                                    {'Кэшируйте результат: не повторяйте запрос при повторном blur с тем же значением'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'obyazatelnye-i-neobyazatelnye-polya'}>{'Обязательные и необязательные поля'}</h2>
                            {'\n\n        '}
                            <p>
                                <code>{'Required'}</code>
                                {' и '}
                                <code>{'Optional'}</code>
                                {' — взаимодополняющие маркеры. Используйте тот, которых в форме меньше:'}
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Ситуация'}</th>
                                            <th>{'Решение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Большинство полей обязательны'}</td>
                                            <td>
                                                {'Отмечайте только необязательные через '}
                                                <code>{'Optional=True'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Большинство полей необязательны'}</td>
                                            <td>
                                                {'Отмечайте только обязательные через '}
                                                <code>{'Required=True'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'Все поля обязательны'}</td>
                                            <td>
                                                {
                                                    'Достаточно текста "Все поля обязательны" — маркер на каждом избыточен'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                <code>{'Required=True'}</code>
                                {' — визуальный маркер, не триггер валидации. Ошибку "поле обязательно" показывает '}
                                <code>{'View=Error'}</code>
                                {' при submit.'}
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <code>{'RequiredPlacement=Left/Right/None'}</code>
                                    {' — позиция маркера относительно лейбла'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'pravila'}>{'Правила'}</h2>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {
                                        'Всегда предоставляйте текст с объяснением ошибки (через HintPlacement) — не только цвет'
                                    }
                                </li>
                                <li>
                                    <code>{'Error'}</code>
                                    {' блокирует отправку формы; '}
                                    <code>{'Warning'}</code>
                                    {' — нет'}
                                </li>
                                <li>{'Показывайте только одно сообщение за раз (самое важное)'}</li>
                                <li>
                                    <code>{'Success'}</code>
                                    {' используйте только там, где визуальное подтверждение критично'}
                                </li>
                                <li>
                                    {'Не используйте '}
                                    <code>{'View=Error'}</code>
                                    {' как стилистический приём — только для реальных ошибок'}
                                </li>
                                <li>{'Не показывайте ошибку на поле, которого пользователь ещё не касался'}</li>
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
                                    <SiteLink href={'#kogda-pokazyvat-validaciyu'}>
                                        {'Когда показывать валидацию'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#sostoyaniya-validacii-view'}>
                                        {'Состояния валидации (View)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#urovni-validacii'}>{'Уровни валидации'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#hint-i-tekst-oshibki'}>{'Hint и текст ошибки'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#async-validaciya'}>{'Async-валидация'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#obyazatelnye-i-neobyazatelnye-polya'}>
                                        {'Обязательные и необязательные поля'}
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
                                    <SiteLink href={'/docs/accessibility'}>{'Accessibility'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/interaction-model'}>{'Interaction Model'}</SiteLink>
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
