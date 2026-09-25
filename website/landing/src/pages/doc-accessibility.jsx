import { Header, SiteLink, parseStyle } from '../shared';

export default function DocAccessibilityPage() {
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
                                            <SiteLink href={'/docs/accessibility'} className={'is-current'}>
                                                {'Accessibility'}
                                            </SiteLink>
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
                                <span>{'Accessibility'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Доступность'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Accessibility'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>{'Принципы доступности компонентов SDDS.'}</p>
                            {'\n\n        '}
                            <p>
                                {
                                    'Доступность (accessibility, a11y) — это практика создания продуктов, которыми могут пользоваться все люди, независимо от их физических, когнитивных или технических возможностей.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'Целевой уровень: WCAG 2.1 AA.'}</b>
                            </p>
                            {'\n\n        '}
                            <p>
                                {'См. также: '}
                                <SiteLink href={'/docs/sizes'}>
                                    <code>{'sizes.md'}</code>
                                </SiteLink>
                                {' — размерная шкала, '}
                                <SiteLink href={'/docs/theming'}>
                                    <code>{'theming.md'}</code>
                                </SiteLink>
                                {' — система тематизации на токенах.'}
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-1-osnovnye-principy'}>{'1. Основные принципы'}</h2>
                            {'\n\n        '}
                            <p>{'SDDS следует четырём основным принципам WCAG — POUR.'}</p>
                            {'\n\n        '}
                            <h3 id={'p-1-1-perceivable-vosprinimaemost'}>{'1.1 Perceivable (Воспринимаемость)'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Вся информация и компоненты интерфейса должны быть представлены таким образом, чтобы пользователи могли их воспринять.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'✅ Правильно'}</th>
                                            <th>{'❌ Неправильно'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Изображения имеют текстовые альтернативы'}</td>
                                            <td>{'Иконки без подписей или aria-label'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Контент не зависит только от цвета'}</td>
                                            <td>{'Только цветовая индикация ошибки'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Текст можно увеличить до 200% без потери функциональности'}</td>
                                            <td>{'Аудиоконтент без возможности транскрипции'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Видео содержит субтитры'}</td>
                                            <td />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-1-2-operable-upravlyaemost'}>{'1.2 Operable (Управляемость)'}</h3>
                            {'\n\n        '}
                            <p>{'Компоненты интерфейса и навигация должны быть управляемы.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'✅ Правильно'}</th>
                                            <th>{'❌ Неправильно'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Весь функционал доступен с клавиатуры'}</td>
                                            <td>{'Действия, доступные только через мышь'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'У пользователей достаточно времени для взаимодействия'}</td>
                                            <td>{'Таймауты без возможности продления'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Нет контента, вызывающего эпилептические припадки'}</td>
                                            <td>{'Мигающий контент >3 раз в секунду'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-1-3-understandable-ponyatnost'}>{'1.3 Understandable (Понятность)'}</h3>
                            {'\n\n        '}
                            <p>{'Информация и работа интерфейса должны быть понятны.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'✅ Правильно'}</th>
                                            <th>{'❌ Неправильно'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Предсказуемое поведение элементов'}</td>
                                            <td>{'Неожиданные изменения контента'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Подсказки при ошибках ввода'}</td>
                                            <td>{'Нестандартное поведение элементов интерфейса'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Навигация предсказуема и последовательна'}</td>
                                            <td>{'Непоследовательные метки для одинаковых действий'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-1-4-robust-nadezhnost'}>{'1.4 Robust (Надёжность)'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Контент должен быть достаточно надёжным для интерпретации широким кругом вспомогательных технологий.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'✅ Правильно'}</th>
                                            <th>{'❌ Неправильно'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Валидная HTML-разметка'}</td>
                                            <td>{'Кастомные элементы без ARIA-ролей'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Полное использование ARIA-атрибутов'}</td>
                                            <td>{'Нестандартное использование HTML-тегов'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Статус элементов программно определяем'}</td>
                                            <td>{'Состояния только через визуальные стили'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-2-standarty-i-sootvetstvie'}>{'2. Стандарты и соответствие'}</h2>
                            {'\n\n        '}
                            <h3 id={'p-2-1-celevoy-uroven-sootvetstviya'}>{'2.1 Целевой уровень соответствия'}</h3>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Платформа'}</th>
                                            <th>{'Стандарт'}</th>
                                            <th>{'Уровень'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Web'}</td>
                                            <td>{'WCAG 2.1'}</td>
                                            <td>{'AA'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Web (критические продукты)'}</td>
                                            <td>{'WCAG 2.2'}</td>
                                            <td>{'AA'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Mobile iOS'}</td>
                                            <td>{'WCAG 2.1 + Apple HIG'}</td>
                                            <td>{'AA'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Mobile Android'}</td>
                                            <td>{'WCAG 2.1 + Material Guidelines'}</td>
                                            <td>{'AA'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'TV/SmartTV'}</td>
                                            <td>{'WCAG 2.1 (адаптировано)'}</td>
                                            <td>{'A+'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-2-2-prioritizaciya-kriteriev'}>{'2.2 Приоритизация критериев'}</h3>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Уровень A'}</b>
                                    {
                                        ' — обязателен. Минимальные требования. Несоответствие делает контент недоступным для определённых групп пользователей.'
                                    }
                                </li>
                                <li>
                                    <b>{'Уровень AA'}</b>
                                    {' — целевой уровень для всех продуктов SDDS. Устраняет наиболее значимые барьеры.'}
                                </li>
                                <li>
                                    <b>{'Уровень AAA'}</b>
                                    {
                                        ' — расширенный стандарт. Применяется там, где это технически и контекстуально возможно.'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-3-cvet-i-kontrast'}>{'3. Цвет и контраст'}</h2>
                            {'\n\n        '}
                            <p>{'Токены SDDS и их использование в компонентах отвечают требованиям стандартов.'}</p>
                            {'\n\n        '}
                            <p>
                                {
                                    'Коэффициент контраста — это математическое соотношение яркости цвета текста и цвета фона. Вычисляется по формуле WCAG:'
                                }
                            </p>
                            {'\n\n        '}
                            <pre className={'doc-code'}>
                                <code>{'Контраст = (L1 + 0.05) / (L2 + 0.05)'}</code>
                            </pre>
                            {'\n\n        '}
                            <p>
                                {
                                    'где L1 — относительная яркость более светлого цвета, L2 — относительная яркость более тёмного цвета.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>{'Диапазон значений:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'1:1'}</b>
                                    {' — нет контраста (текст сливается с фоном)'}
                                </li>
                                <li>
                                    <b>{'21:1'}</b>
                                    {' — максимальный контраст (чёрный на белом)'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-3-1-trebovaniya-k-kontrastu'}>{'3.1 Требования к контрасту'}</h3>
                            {'\n\n        '}
                            <p>{'Текст:'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Элемент'}</th>
                                            <th>{'Минимальный контраст (AA)'}</th>
                                            <th>{'Рекомендуемый (AAA)'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Основной текст (шрифт до 18px normal, до 14px bold)'}</td>
                                            <td>{'4.5:1'}</td>
                                            <td>{'7:1'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Крупный текст (шрифт от 18px normal, от 14px bold)'}</td>
                                            <td>{'3:1'}</td>
                                            <td>{'4.5:1'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Текст на изображении'}</td>
                                            <td>{'4.5:1'}</td>
                                            <td>{'7:1'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'UI-компоненты и иконки'}</td>
                                            <td>{'3:1'}</td>
                                            <td>{'—'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Декоративные элементы'}</td>
                                            <td>{'не требуется'}</td>
                                            <td>{'—'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-3-2-dopolnitelnaya-indikaciya'}>{'3.2 Дополнительная индикация'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Цвет — не единственный индикатор: рекомендуется использовать дополнительные визуальные маркеры.'
                                }
                            </p>
                            {'\n\n        '}
                            <p>{'Пример: паттерны для состояния ошибки TextField'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'✅ Правильно'}</th>
                                            <th>{'❌ Неправильно'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Цвет фона SurfaceTransparentNegative'}</td>
                                            <td>{'Цвет фона SurfaceTransparentNegative (только цвет)'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Иконка индикации ошибки'}</td>
                                            <td />
                                        </tr>
                                        <tr>
                                            <td>{'Подсказка к полю ввода'}</td>
                                            <td />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-tipografika'}>{'4. Типографика'}</h2>
                            {'\n\n        '}
                            <p>{'Основные правила доступности:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Читаемость'}</b>
                                    {
                                        ' — используйте рекомендованные размеры шрифтов и межстрочные интервалы из SDDS. Минимальный размер основного текста — 16px.'
                                    }
                                </li>
                                <li>
                                    <b>{'Иерархия'}</b>
                                    {
                                        ' — стройте чёткую визуальную иерархию с помощью заголовков H1–H6. Не пропускайте уровни (например, H3 не должен идти сразу после H1).'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-4-1-minimalnye-razmery-shrifta'}>{'4.1 Минимальные размеры шрифта'}</h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Минимальные размеры шрифта обеспечивают читаемость интерфейса и соответствие стандартам доступности (WCAG).'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                <b>{'Важно:'}</b>
                                {' текст меньше 12px не рекомендуется для смыслового контента.'}
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Контекст'}</th>
                                            <th>{'Минимальный размер'}</th>
                                            <th>{'Рекомендуемый размер'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Основной текст'}</td>
                                            <td>{'14px / 0.875rem'}</td>
                                            <td>{'16px / 1rem'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Вспомогательный текст'}</td>
                                            <td>{'12px / 0.75rem'}</td>
                                            <td>{'14px / 0.875rem'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Формы'}</td>
                                            <td>{'14px / 0.875rem'}</td>
                                            <td>{'16px / 1rem'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Кнопки'}</td>
                                            <td>{'14px / 0.875rem'}</td>
                                            <td>{'16px / 1rem'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Подсказки (tooltip)'}</td>
                                            <td>{'12px / 0.75rem'}</td>
                                            <td>{'14px / 0.875rem'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-2-mezhbukvennyy-interval-i-chitaemost'}>
                                {'4.2 Межбуквенный интервал и читаемость'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Параметры, рекомендуемые WCAG 1.4.12 (Text Spacing):'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Параметр'}</th>
                                            <th>{'Значение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Высота строки (line-height)'}</td>
                                            <td>{'≥ 1.5x от размера шрифта'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Межбуквенный интервал (tracking)'}</td>
                                            <td>{'≥ 0.12x от размера шрифта'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Межсловный интервал (word-spacing)'}</td>
                                            <td>{'≥ 0.16x от размера шрифта'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Отступ между параграфами'}</td>
                                            <td>{'≥ 2x от размера шрифта'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-4-3-vybor-garnitury'}>{'4.3 Выбор гарнитуры'}</h3>
                            {'\n\n        '}
                            <p>{'Рекомендуемые характеристики:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'Чёткое различие между символами (I, l, 1 / O, 0)'}</li>
                                <li>{'Достаточная x-height'}</li>
                                <li>{'Различимые строчные и прописные буквы'}</li>
                                <li>{'Поддержка кириллицы с одинаковым качеством'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Шрифты SDDS:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'SB Sans Display'}</b>
                                    {' — для акцентных текстовых элементов крупным кеглем'}
                                </li>
                                <li>
                                    <b>{'SB Sans Text'}</b>
                                    {' — для интерфейсного текста и заголовков'}
                                </li>
                                <li>
                                    <b>{'SB Sans Text Mono'}</b>
                                    {' — CodeView внутри компонентов'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Подробнее про типографику SDDS — в документации Typography.'}</p>
                            {'\n\n        '}
                            <h2 id={'p-5-fokus-i-navigaciya-s-klaviatury'}>{'5. Фокус и навигация с клавиатуры'}</h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Все интерактивные элементы должны быть доступны с клавиатуры. Пользователь должен иметь возможность выполнить любое действие без использования мыши или касания.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-5-1-stil-fokusa'}>{'5.1 Стиль фокуса'}</h3>
                            {'\n\n        '}
                            <p>{'Требования к индикатору фокуса:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>{'Минимальный контраст 3:1 к соседним цветам'}</li>
                                <li>{'Должен быть видим на любом фоне'}</li>
                                <li>{'Не должен перекрываться другими элементами'}</li>
                            </ul>
                            {'\n\n        '}
                            <p>{'Базовый фокус SDDS:'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Свойство'}</th>
                                            <th>{'Значение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Outline width'}</td>
                                            <td>{'1px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Outline style'}</td>
                                            <td>{'solid'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Outline color'}</td>
                                            <td>{'SurfaceAccent'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Outline offset'}</td>
                                            <td>{'2px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Border-radius'}</td>
                                            <td>{'CR компонента + 2px'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h3 id={'p-5-2-poryadok-fokusa-tab-order'}>{'5.2 Порядок фокуса (Tab Order)'}</h3>
                            {'\n\n        '}
                            <p>{'Порядок фокуса должен соответствовать визуальному порядку и логике контента.'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {'✅ Порядок Tab соответствует визуальному порядку: слева → направо, сверху → вниз'}
                                </li>
                                <li>
                                    {'✅ Используется '}
                                    <code>{'tabindex="0"'}</code>
                                    {' для кастомных интерактивных элементов'}
                                </li>
                                <li>
                                    {'✅ Используй '}
                                    <code>{'tabindex="-1"'}</code>
                                    {' для программного управления фокусом (модальные окна, dropdown)'}
                                </li>
                                <li>{'❌ Не убирай элементы из tab order без альтернативы'}</li>
                                <li>
                                    {'❌ Не используй '}
                                    <code>{'tabindex="0"'}</code>
                                    {' на неинтерактивных элементах'}
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h3 id={'p-5-3-klaviaturnye-patterny-dlya-komponentov'}>
                                {'5.3 Клавиатурные паттерны для компонентов'}
                            </h3>
                            {'\n\n        '}
                            <p>{'Keyboard Shortcuts (горячие клавиши):'}</p>
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
                                            <td>{'Tab'}</td>
                                            <td>{'Переход к следующему интерактивному элементу'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Shift + Tab'}</td>
                                            <td>{'Переход к предыдущему интерактивному элементу'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Enter'}</td>
                                            <td>{'Активация элемента (кнопки, ссылки)'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Space'}</td>
                                            <td>{'Активация (чекбокс, кнопка) / прокрутка страницы'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Esc'}</td>
                                            <td>{'Закрытие диалога, дропдауна, отмена действия'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Arrow Keys'}</td>
                                            <td>{'Навигация внутри компонента (меню, список, слайдер)'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Home / End'}</td>
                                            <td>{'Первый / последний элемент'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Page Up / Down'}</td>
                                            <td>{'Прокрутка, диапазонные компоненты'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>{'Примеры паттернов для составных компонентов:'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Компонент'}</th>
                                            <th>{'Клавиши и действие'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'DropdownMenu'}</td>
                                            <td>{'↓↑ — навигация, Enter — выбор, Esc — закрытие'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Tabs'}</td>
                                            <td>{'←→ — переключение вкладок, Tab — переход в контент'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Slider'}</td>
                                            <td>{'←→ — изменение значения, Home/End — мин/макс значения'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Checkbox'}</td>
                                            <td>{'Space — переключение выбора'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Accordion'}</td>
                                            <td>{'↓↑ — навигация, Enter/Space — раскрытие или закрытие'}</td>
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
                                    <SiteLink href={'#p-1-osnovnye-principy'}>{'1. Основные принципы'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-1-perceivable-vosprinimaemost'} className={'is-sub'}>
                                        {'1.1 Perceivable (Воспринимаемость)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-2-operable-upravlyaemost'} className={'is-sub'}>
                                        {'1.2 Operable (Управляемость)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-3-understandable-ponyatnost'} className={'is-sub'}>
                                        {'1.3 Understandable (Понятность)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-1-4-robust-nadezhnost'} className={'is-sub'}>
                                        {'1.4 Robust (Надёжность)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-standarty-i-sootvetstvie'}>
                                        {'2. Стандарты и соответствие'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-1-celevoy-uroven-sootvetstviya'} className={'is-sub'}>
                                        {'2.1 Целевой уровень соответствия'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-2-prioritizaciya-kriteriev'} className={'is-sub'}>
                                        {'2.2 Приоритизация критериев'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-cvet-i-kontrast'}>{'3. Цвет и контраст'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-1-trebovaniya-k-kontrastu'} className={'is-sub'}>
                                        {'3.1 Требования к контрасту'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-2-dopolnitelnaya-indikaciya'} className={'is-sub'}>
                                        {'3.2 Дополнительная индикация'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-tipografika'}>{'4. Типографика'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-1-minimalnye-razmery-shrifta'} className={'is-sub'}>
                                        {'4.1 Минимальные размеры шрифта'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-2-mezhbukvennyy-interval-i-chitaemost'} className={'is-sub'}>
                                        {'4.2 Межбуквенный интервал и читаемость'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-3-vybor-garnitury'} className={'is-sub'}>
                                        {'4.3 Выбор гарнитуры'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-fokus-i-navigaciya-s-klaviatury'}>
                                        {'5. Фокус и навигация с клавиатуры'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-1-stil-fokusa'} className={'is-sub'}>
                                        {'5.1 Стиль фокуса'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-2-poryadok-fokusa-tab-order'} className={'is-sub'}>
                                        {'5.2 Порядок фокуса (Tab Order)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-5-3-klaviaturnye-patterny-dlya-komponentov'}
                                        className={'is-sub'}
                                    >
                                        {'5.3 Клавиатурные паттерны для компонентов'}
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
                                    <SiteLink href={'/docs/components'}>{'Component Library'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/validation-model'}>{'Validation Model'}</SiteLink>
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
