import { Header, SiteLink, parseStyle } from '../shared';

export default function DocIntroducingPage() {
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
                                            <SiteLink href={'/docs/introducing'} className={'is-current'}>
                                                {'Introducing SDDS'}
                                            </SiteLink>
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
                                <span>{'Introducing SDDS'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Точка входа в систему'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Introducing SDDS'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'SDDS — дизайн-система Сбера для быстрого создания брендированных внутренних цифровых продуктов и сервисов: B2C-площадки, B2B-порталы, операционные инструменты, личные кабинеты и административные интерфейсы.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'white-label'}>{'White-label design system'}</h2>
                            {'\n        '}
                            <p>
                                {
                                    'SDDS — универсальная дизайн-система, которая определяет базовую структуру и набор свойств нейтрально спроектированных компонентов. Бренд-пользователь кастомизирует токены дизайн-системы под свой фирменный стиль, а компоненты динамически принимают значения без необходимости вносить правки в код.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'callout'}>
                                {'\n          '}
                                <b>{'Что это значит на практике'}</b>
                                {'\n          '}
                                <p>
                                    {
                                        'Продукт не форкает систему под свой бренд. Он меняет значения токенов — цвета, шрифты — и получает те же компоненты в своей стилистике. Код компонентов при этом остаётся системным и продолжает обновляться вместе с релизами.'
                                    }
                                </p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h2 id={'platforms'}>{'Платформы'}</h2>
                            {'\n        '}
                            <p>{'SDDS покрывает Web и Mobile через единый файл в дизайне и единый набор токенов.'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                {'\n          '}
                                <table className={'doc-table'}>
                                    {'\n            '}
                                    <thead>
                                        <tr>
                                            <th>{'Платформа'}</th>
                                            <th>{'Контексты'}</th>
                                            <th>{'Особенности'}</th>
                                        </tr>
                                    </thead>
                                    {'\n            '}
                                    <tbody>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'Web'}</b>
                                            </td>
                                            <td>{'Десктоп, адаптив'}</td>
                                            <td>{'Полный набор компонентов'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'Mobile'}</b>
                                            </td>
                                            <td>{'iOS, Android'}</td>
                                            <td>
                                                {
                                                    'Полный набор компонентов и специфичные для мобильных платформ компоненты'
                                                }
                                            </td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'TV'}</b>
                                            </td>
                                            <td>{'Android'}</td>
                                            <td>{'Набор компонентов, адаптированный под TV-платформы'}</td>
                                        </tr>
                                        {'\n            '}
                                    </tbody>
                                    {'\n          '}
                                </table>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h2 id={'resources'}>{'Ресурсы SDDS'}</h2>
                            {'\n        '}
                            <p>
                                {
                                    'В отличие от потребительских дизайн-систем, SDDS оптимизирована под плотную информационную среду — таблицы, формы, дашборды — и рассчитана на разные бренды внутри экосистемы Сбера.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'res-cards'}>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Базовые элементы визуального языка'}</h3>
                                    {'\n            '}
                                    <ul>
                                        {'\n              '}
                                        <li>{'Цветовые токены'}</li>
                                        {'\n              '}
                                        <li>{'Типографические токены'}</li>
                                        {'\n              '}
                                        <li>{'Токены эффектов тени и размытия'}</li>
                                        {'\n              '}
                                        <li>{'Адаптивная сетка и правила её построения'}</li>
                                        {'\n              '}
                                        <li>{'Иконки в едином стиле'}</li>
                                        {'\n            '}
                                    </ul>
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Компонентная библиотека'}</h3>
                                    {'\n            '}
                                    <ul>
                                        {'\n              '}
                                        <li>
                                            {
                                                'Библиотека UI-компонентов (~80 компонентов) для веб- и мобильных интерфейсов'
                                            }
                                        </li>
                                        {'\n            '}
                                    </ul>
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Паттерны взаимодействия'}</h3>
                                    {'\n            '}
                                    <ul>
                                        {'\n              '}
                                        <li>
                                            {
                                                'Валидация, подсказки, маски ввода, навигационные паттерны и другие сквозные решения'
                                            }
                                        </li>
                                        {'\n            '}
                                    </ul>
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Документация'}</h3>
                                    {'\n            '}
                                    <ul>
                                        {'\n              '}
                                        <li>{'Гайдлайны по использованию токенов'}</li>
                                        {'\n              '}
                                        <li>{'Руководства по использованию компонентов'}</li>
                                        {'\n              '}
                                        <li>{'Инструкции по внедрению для дизайнеров и разработчиков'}</li>
                                        {'\n            '}
                                    </ul>
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Инструменты и ресурсы'}</h3>
                                    {'\n            '}
                                    <ul>
                                        {'\n              '}
                                        <li>{'Библиотеки компонентов в Figma и Pixso'}</li>
                                        {'\n              '}
                                        <li>
                                            {'Фреймворки и библиотеки кода: React, Compose UI, ViewSystem, SwiftUI'}
                                        </li>
                                        {'\n              '}
                                        <li>{'Инструменты для тестирования'}</li>
                                        {'\n            '}
                                    </ul>
                                    {'\n          '}
                                </div>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h2 id={'customization'}>{'Кастомизация'}</h2>
                            {'\n        '}
                            <p>{'Бренд-пользователь заменяет:'}</p>
                            {'\n        '}
                            <ul className={'article-list plain'}>
                                {'\n          '}
                                <li>{'значения цветовых токенов;'}</li>
                                {'\n          '}
                                <li>{'набор шрифтов;'}</li>
                                {'\n          '}
                                <li>{'адаптирует компоненты под свои сценарии использования.'}</li>
                                {'\n        '}
                            </ul>
                            {'\n        '}
                            <p>
                                {
                                    'Собрать и проверить такую тему можно в конфигураторе — он покажет, как изменения расходятся по компонентам и состояниям.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'benefits'}>{'Преимущества для бренда-пользователя'}</h2>
                            {'\n        '}
                            <div className={'res-cards'}>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Экономия времени'}</h3>
                                    {'\n            '}
                                    <ul>
                                        {'\n              '}
                                        <li>{'Быстрый запуск за счёт готовой системы'}</li>
                                        {'\n              '}
                                        <li>{'Переключение на стилистику бренда через замену токенов'}</li>
                                        {'\n              '}
                                        <li>
                                            {
                                                'Готовые решения протестированы, соответствуют UX-стандартам и требованиям доступности'
                                            }
                                        </li>
                                        {'\n            '}
                                    </ul>
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Консистентность интерфейсов'}</h3>
                                    {'\n            '}
                                    <ul>
                                        {'\n              '}
                                        <li>
                                            {'Единый набор компонентов и токенов в Figma и Pixso — для Web и Mobile'}
                                        </li>
                                        {'\n            '}
                                    </ul>
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Масштабируемость'}</h3>
                                    {'\n            '}
                                    <ul>
                                        {'\n              '}
                                        <li>{'Добавление тем'}</li>
                                        {'\n              '}
                                        <li>{'Добавление новых функций в существующие компоненты'}</li>
                                        {'\n            '}
                                    </ul>
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Техническая поддержка'}</h3>
                                    {'\n            '}
                                    <ul>
                                        {'\n              '}
                                        <li>{'Команда системы разбирает обращения, ведёт доработки и мониторинг'}</li>
                                        {'\n            '}
                                    </ul>
                                    {'\n          '}
                                </div>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h2 id={'how-to-read'}>{'Как читать документацию'}</h2>
                            {'\n        '}
                            <p>
                                {'Начните с '}
                                <b>{'Glossary'}</b>
                                {
                                    ' — там объяснены термины, которые встречаются везде. Дальнейший путь зависит от роли.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'route-cards'}>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Дизайнеру'}</h3>
                                    {'\n            '}
                                    <ol className={'route-list'}>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'#'}>{'Glossary'}</SiteLink>
                                            {' — термины'}
                                        </li>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'#'}>{'Component Library'}</SiteLink>
                                            {' — выбор компонента под задачу'}
                                        </li>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'/docs/sizes'}>{'Sizes'}</SiteLink>
                                            {' — размерная шкала'}
                                        </li>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'#'}>{'Themes tokens'}</SiteLink>
                                            {' — быстрый старт в Figma, переключение тем'}
                                        </li>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'#'}>{'States'}</SiteLink>
                                            {' — состояния компонентов в макете'}
                                        </li>
                                        {'\n            '}
                                    </ol>
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <div className={'res-card'}>
                                    {'\n            '}
                                    <h3>{'Разработчику'}</h3>
                                    {'\n            '}
                                    <ol className={'route-list'}>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'#'}>{'Glossary'}</SiteLink>
                                            {' — термины'}
                                        </li>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'#'}>{'Themes tokens'}</SiteLink>
                                            {' — токены, коллекции Variables, контексты'}
                                        </li>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'/docs/sizes'}>{'Sizes'}</SiteLink>
                                            {' — размерная шкала'}
                                        </li>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'#'}>{'States'}</SiteLink>
                                            {' — состояния, пропы, комбинирование'}
                                        </li>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'#'}>{'Properties Vocabulary'}</SiteLink>
                                            {' — полный справочник пропов'}
                                        </li>
                                        {'\n              '}
                                        <li>
                                            <SiteLink href={'#'}>{'Component Library'}</SiteLink>
                                            {' — список компонентов'}
                                        </li>
                                        {'\n            '}
                                    </ol>
                                    {'\n          '}
                                </div>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h3 id={'reference'}>{'Справочные документы'}</h3>
                            {'\n        '}
                            <p>{'Эти страницы не нужно читать подряд — открывайте по необходимости.'}</p>
                            {'\n        '}
                            <div className={'doc-table-wrap'}>
                                {'\n          '}
                                <table className={'doc-table'}>
                                    {'\n            '}
                                    <thead>
                                        <tr>
                                            <th>{'Документ'}</th>
                                            <th>{'Когда нужен'}</th>
                                        </tr>
                                    </thead>
                                    {'\n            '}
                                    <tbody>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'Spacing & Layout'}</b>
                                            </td>
                                            <td>{'При вёрстке форм и лейаутов'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'Interaction Model'}</b>
                                            </td>
                                            <td>{'При реализации клавиатурной навигации'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'Validation Model'}</b>
                                            </td>
                                            <td>{'При проектировании форм с валидацией'}</td>
                                        </tr>
                                        {'\n              '}
                                        <tr>
                                            <td>
                                                <b>{'Accessibility'}</b>
                                            </td>
                                            <td>{'При проверке доступности компонентов'}</td>
                                        </tr>
                                        {'\n            '}
                                    </tbody>
                                    {'\n          '}
                                </table>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'article-foot'}>
                                {'\n          '}
                                <span>{'Не нашли ответ в документации — напишите команде системы.'}</span>
                                {'\n          '}
                                <SiteLink className={'side-cta'} href={'/contacts'}>
                                    {'Задать вопрос'}
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
                                    <SiteLink href={'#white-label'}>{'White-label design system'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#platforms'}>{'Платформы'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#resources'}>{'Ресурсы SDDS'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#customization'}>{'Кастомизация'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#benefits'}>{'Преимущества'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#how-to-read'}>{'Как читать документацию'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#reference'} className={'is-sub'}>
                                        {'Справочные документы'}
                                    </SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'side-card'}>
                                {'\n          '}
                                <h3>{'Следующий шаг'}</h3>
                                {'\n          '}
                                <nav className={'link-list'}>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Glossary — термины системы'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/sizes'}>{'Sizes — размерная шкала'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Themes tokens — тематизация'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Component Library — состав'}</SiteLink>
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
                                    <SiteLink href={'/#theme'}>{'Конфигуратор тем: собрать свою тему'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/#bento'}>{'Библиотеки Figma и Pixso'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/contacts'}>{'Онбординг для новой команды'}</SiteLink>
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
