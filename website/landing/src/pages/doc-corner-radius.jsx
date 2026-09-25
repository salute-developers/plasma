import { Header, SiteLink, parseStyle } from '../shared';

export default function DocCornerRadiusPage() {
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
                                            <SiteLink href={'/docs/corner-radius'} className={'is-current'}>
                                                {'Corner Radius'}
                                            </SiteLink>
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
                                <span>{'Corner Radius'}</span>
                                {'\n        '}
                            </nav>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Основы'}</span>
                                {'\n          '}
                                <span>{'Скругления'}</span>
                                <span>{'·'}</span>
                                <span>{'версия 1.5.0'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'Corner Radius'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>{'Система скруглений в SDDS.'}</p>
                            {'\n\n        '}
                            <p>
                                {
                                    'Система токенов Corner Radius определяет радиус скругления углов компонентов. Обеспечивает визуальную согласованность и передаёт характер бренда — от строгого (0) до мягкого (Rounded).'
                                }
                            </p>
                            {'\n\n        '}
                            <p>
                                {
                                    'Документ описывает уровни токенов, правила именования, а также правила использования вычисляемых значений.'
                                }
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
                            <p>{'Система токенов скруглений решает две задачи:'}</p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Единый язык'}</b>
                                    {
                                        ' — дизайнеры и разработчики используют одни и те же названия и значения, не придумывая числа вручную.'
                                    }
                                </li>
                                <li>
                                    <b>{'Визуальная согласованность'}</b>
                                    {
                                        ' — компоненты одного размера выглядят согласованно. Например, в размере L у Button, TextField и Select (триггер и выпадающее меню) одинаковый радиус 14px.'
                                    }
                                </li>
                            </ul>
                            {'\n\n        '}
                            <h2 id={'p-2-cornerradius-tokens-tokeny-skrugleniy'}>
                                {'2. CornerRadius Tokens — токены скруглений'}
                            </h2>
                            {'\n\n        '}
                            <p>{'Набор значений, определяющих радиус скругления углов у компонентов.'}</p>
                            {'\n\n        '}
                            <pre className={'doc-code'}>
                                <code>
                                    {
                                        'Raw Value  →  Base Token  →  Semantic Token    →  Component\n14px          CR14           CRL                Button L\n                                                  Chip XL\n                                                  Notification M'
                                    }
                                </code>
                            </pre>
                            {'\n\n        '}
                            <h2 id={'p-3-bazovaya-shkala-base-tokens'}>{'3. Базовая шкала (Base Tokens)'}</h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Примитивы/базовые токены — это набор допустимых числовых значений. Все семантические токены ссылаются только на эти числа. Новые промежуточные значения не вводятся.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Token'}</th>
                                            <th>{'Значение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'CR0'}</td>
                                            <td>{'0px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR2'}</td>
                                            <td>{'2px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR4'}</td>
                                            <td>{'4px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR6'}</td>
                                            <td>{'6px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR8'}</td>
                                            <td>{'8px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR10'}</td>
                                            <td>{'10px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR12'}</td>
                                            <td>{'12px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR14'}</td>
                                            <td>{'14px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR16'}</td>
                                            <td>{'16px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR18'}</td>
                                            <td>{'18px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR20'}</td>
                                            <td>{'20px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CR32'}</td>
                                            <td>{'32px'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CRRounded'}</td>
                                            <td>{'100% или 1000px'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-4-semanticheskie-tokeny-semantic-tokens'}>
                                {'4. Семантические токены (Semantic Tokens)'}
                            </h2>
                            {'\n\n        '}
                            <p>
                                {
                                    'Семантические токены связывают размер компонента с соответствующей ступенью шкалы скруглений.'
                                }
                            </p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Semantic Token'}</th>
                                            <th>{'Base Token'}</th>
                                            <th>{'Применение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Null'}</td>
                                            <td>{'CR0'}</td>
                                            <td>
                                                {
                                                    'Все элементы, имеющие заливку или обводку, если не нужны скругления углов'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'CRXXS'}</td>
                                            <td>{'CR6'}</td>
                                            <td>{'Самостоятельные компоненты размера XXS'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CRXS'}</td>
                                            <td>{'CR8'}</td>
                                            <td>{'Самостоятельные компоненты размера XS'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CRS'}</td>
                                            <td>{'CR10'}</td>
                                            <td>{'Самостоятельные компоненты размера S'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CRM'}</td>
                                            <td>{'CR12'}</td>
                                            <td>{'Самостоятельные компоненты размера M'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CRL'}</td>
                                            <td>{'CR14'}</td>
                                            <td>{'Самостоятельные компоненты размера L'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'CRXL'}</td>
                                            <td>{'CR16'}</td>
                                            <td>{'Самостоятельные компоненты размера XL'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'Rounded'}</td>
                                            <td>{'CRRounded'}</td>
                                            <td>{'Круглые или овальные компоненты'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                <b>{'Компоненты:'}</b>
                                {
                                    ' TextField, Button, Select (триггер + меню), Autocomplete, DatePicker, Accordion, Range и т.д.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'p-5-vychislyaemye-znacheniya'}>{'5. Вычисляемые значения'}</h2>
                            {'\n\n        '}
                            <h3 id={'p-5-1-kompaktnye-i-vlozhennye-elementy-malye-overlei'}>
                                {'5.1 Компактные и вложенные элементы, малые оверлеи'}
                            </h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Для небольших самостоятельных элементов, зависимых компонентов и миниатюрных оверлеев, где крупный радиус выглядит избыточным, используется '
                                }
                                <b>{'правило «−2»'}</b>
                                {':'}
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {
                                        'токен скругления внутренних плашек, ListItems, подсветки и хайлайтов внутри компонента вычисляется вычитанием из токена родительского компонента с шагом 2px;'
                                    }
                                </li>
                                <li>{'если значение есть в Semantic Token — используем его.'}</li>
                            </ul>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Token'}</th>
                                            <th>{'Base Token'}</th>
                                            <th>{'Применение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'calc:[cRxxs-4]'}</code>
                                            </td>
                                            <td>{'CR2'}</td>
                                            <td>
                                                {
                                                    'Компоненты или элементы, вложенные в самостоятельные компоненты размера XXS'
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'calc:[cRxxs-2]'}</code>
                                            </td>
                                            <td>{'CR4'}</td>
                                            <td>
                                                {
                                                    'Компоненты или элементы, вложенные в самостоятельные компоненты размера XXS'
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                <b>{'Компоненты:'}</b>
                                {' Tooltip, Chip, прямоугольный Avatar, ListItem (строки списков), EmbeddedChip и т.д.'}
                            </p>
                            {'\n\n        '}
                            <p>{'Пример: компонент Chip'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Скругление'}</th>
                                            <th>{'Base Token'}</th>
                                            <th>{'Token'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'XXS'}</td>
                                            <td>{'4px'}</td>
                                            <td>{'CR4'}</td>
                                            <td>
                                                <code>{'calc:[cRxxs-2]'}</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{'XS'}</td>
                                            <td>{'6px'}</td>
                                            <td>{'CR6'}</td>
                                            <td>{'CRXXS'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'S'}</td>
                                            <td>{'8px'}</td>
                                            <td>{'CR8'}</td>
                                            <td>{'CRXS'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'M'}</td>
                                            <td>{'10px'}</td>
                                            <td>{'CR10'}</td>
                                            <td>{'CRS'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'L'}</td>
                                            <td>{'12px'}</td>
                                            <td>{'CR12'}</td>
                                            <td>{'CRM'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'XL'}</td>
                                            <td>{'14px'}</td>
                                            <td>{'CR14'}</td>
                                            <td>{'CRL'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h4 id={'isklyucheniya-indikatornye-komponenty'}>
                                {'Исключения — индикаторные компоненты'}
                            </h4>
                            {'\n\n        '}
                            <p>
                                {
                                    'Для Badge и аналогичных компонентов радиус ограничен их высотой — он равен ±¼ высоты и вписывается в значения семантических или вычисляемых токенов. Такое исключение нужно, чтобы форма компонента непреднамеренно не становилась «таблеткой».'
                                }
                            </p>
                            {'\n\n        '}
                            <p>{'Пример: Badge'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:850px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Высота'}</th>
                                            <th>{'¼ высоты'}</th>
                                            <th>{'Token'}</th>
                                            <th>{'Base Token'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'XS'}</td>
                                            <td>{'16px'}</td>
                                            <td>{'4px'}</td>
                                            <td>
                                                <code>{'calc:[cRxxs-2]'}</code>
                                            </td>
                                            <td>{'CR4'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'S'}</td>
                                            <td>{'20px'}</td>
                                            <td>{'5px'}</td>
                                            <td>{'CRXXS'}</td>
                                            <td>{'CR6'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'M'}</td>
                                            <td>{'24px'}</td>
                                            <td>{'6px'}</td>
                                            <td>{'CRXXS'}</td>
                                            <td>{'CR6'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'L'}</td>
                                            <td>{'28px'}</td>
                                            <td>{'7px'}</td>
                                            <td>{'CRXS'}</td>
                                            <td>{'CR8'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                {
                                    'S и L незначительно превышают ¼ — на 1px. Это не ошибка, а следствие того, что шкала Base Tokens имеет шаг 2px, а высоты компонентов дают нечётные значения (5 и 7px), которых в шкале нет.'
                                }
                            </p>
                            {'\n\n        '}
                            <h3 id={'p-5-2-samostoyatelnye-poverhnosti-i-overlei-elementy-obertki'}>
                                {'5.2 Самостоятельные поверхности и оверлеи, элементы-«обёртки»'}
                            </h3>
                            {'\n\n        '}
                            <p>
                                {
                                    'Для компонентов с собственным визуальным весом, которые не привязаны к конкретному триггеру как его прямая часть, а также для элементов-обёрток компонентов с токенами скругления из базовой сетки используется '
                                }
                                <b>{'правило «+2»'}</b>
                                {':'}
                            </p>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    {'значение токена вычисляется прибавлением значения с шагом 2px к Semantic Token;'}
                                </li>
                                <li>{'если значение есть в Semantic Token — используем его.'}</li>
                            </ul>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'}>
                                    <thead>
                                        <tr>
                                            <th>{'Token'}</th>
                                            <th>{'Значение'}</th>
                                            <th>{'Применение'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <code>{'calc:[CRL+2]'}</code>
                                            </td>
                                            <td>{'16px'}</td>
                                            <td>{'CardS, самостоятельные поверхности и оверлеи размера S'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'calc:[CRXL+4]'}</code>
                                            </td>
                                            <td>{'18px'}</td>
                                            <td>{'CardM, самостоятельные поверхности и оверлеи размера M'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'calc:[CRXL+6]'}</code>
                                            </td>
                                            <td>{'20px'}</td>
                                            <td>{'Самостоятельные поверхности и оверлеи'}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <code>{'calc:[CRXL+18]'}</code>
                                            </td>
                                            <td>{'32px'}</td>
                                            <td>{'Самостоятельные поверхности и оверлеи'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>
                                <b>{'Компоненты:'}</b>
                                {' Card, Popover, Notification, Toast, Tour, Modal и т.д.'}
                            </p>
                            {'\n\n        '}
                            <p>{'Пример: компонент Tour'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Скругление'}</th>
                                            <th>{'Base Token'}</th>
                                            <th>{'Token'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'S'}</td>
                                            <td>{'12px'}</td>
                                            <td>{'CR12'}</td>
                                            <td>{'CRM'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'M'}</td>
                                            <td>{'14px'}</td>
                                            <td>{'CR14'}</td>
                                            <td>{'CRL'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'L'}</td>
                                            <td>{'18px'}</td>
                                            <td>{'CR18'}</td>
                                            <td>
                                                <code>{'calc:[CRXL+2]'}</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <p>{'Пример: компоненты Modal, Dropzone'}</p>
                            {'\n\n        '}
                            <div className={'doc-table-wrap'}>
                                <table className={'doc-table'} style={parseStyle('min-width:680px')}>
                                    <thead>
                                        <tr>
                                            <th>{'Размер'}</th>
                                            <th>{'Скругление'}</th>
                                            <th>{'Base Token'}</th>
                                            <th>{'Token'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{'Без размера'}</td>
                                            <td>{'20px'}</td>
                                            <td>{'CR20'}</td>
                                            <td>
                                                <code>{'calc:[cRXL+6]'}</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {'\n\n        '}
                            <h2 id={'p-6-pravila-primeneniya'}>{'6. Правила применения'}</h2>
                            {'\n\n        '}
                            <ul className={'article-list plain'}>
                                <li>
                                    <b>{'Используйте токены.'}</b>
                                    {
                                        ' Не вводите произвольные промежуточные значения (например, 11px или 13px). Используйте только значения из базовой шкалы Base tokens.'
                                    }
                                </li>
                                <li>
                                    <b>{'Интерактивные пары.'}</b>
                                    {
                                        ' Триггер и его привязанная панель используют один и тот же токен в рамках размера. Нельзя задавать триггеру и панели разные значения. Например, пара «кнопка и дропдаун» в компоненте Select.'
                                    }
                                </li>
                                <li>
                                    <b>{'Правило «−2».'}</b>
                                    {
                                        ' Токен скругления внутренних плашек, ListItems, подсветки и хайлайтов внутри компонента вычисляется вычитанием из токена родительского компонента с шагом 2px.'
                                    }
                                </li>
                                <li>
                                    <b>{'Правило «+2».'}</b>
                                    {
                                        ' Если компонент с токеном скругления из базовой сетки оборачивается в другой элемент, то для согласования скруглений значение для обёртки вычисляется прибавлением с шагом 2px к токену родительского компонента.'
                                    }
                                </li>
                                <li>
                                    <b>{'Индикаторные компоненты.'}</b>
                                    {
                                        ' Для Badge и аналогичных компонентов радиус ограничен высотой: значение не превышает ¼ высоты компонента. Используются нижние ступени шкалы Semantic Tokens. Это не нарушение системы — осознанное ограничение, продиктованное формой компонентов.'
                                    }
                                </li>
                                <li>
                                    <b>{'Обрезка контента.'}</b>
                                    {
                                        ' Контейнеры со скроллом или подсветкой должны визуально обрезать содержимое по своей форме — контент не должен «выпирать» за скруглённые углы.'
                                    }
                                </li>
                                <li>
                                    <b>{'Хвостики и стрелки.'}</b>
                                    {
                                        ' Хвостики (arrow) у Tooltip, Popover, Tour не имеют собственного скругления. Корпус компонента сохраняет свой токен без изменений.'
                                    }
                                </li>
                                <li>
                                    <b>{'Тени и эффекты.'}</b>
                                    {
                                        ' Тени, обводки и внутренние эффекты не должны визуально «срезать» углы. Они должны повторять форму контейнера.'
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
                                    <SiteLink href={'#p-1-osnovnye-principy'}>{'1. Основные принципы'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-2-cornerradius-tokens-tokeny-skrugleniy'}>
                                        {'2. CornerRadius Tokens — токены скруглений'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-3-bazovaya-shkala-base-tokens'}>
                                        {'3. Базовая шкала (Base Tokens)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-4-semanticheskie-tokeny-semantic-tokens'}>
                                        {'4. Семантические токены (Semantic Tokens)'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-5-vychislyaemye-znacheniya'}>
                                        {'5. Вычисляемые значения'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-5-1-kompaktnye-i-vlozhennye-elementy-malye-overlei'}
                                        className={'is-sub'}
                                    >
                                        {'5.1 Компактные и вложенные элементы, малые оверлеи'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink
                                        href={'#p-5-2-samostoyatelnye-poverhnosti-i-overlei-elementy-obertki'}
                                        className={'is-sub'}
                                    >
                                        {'5.2 Самостоятельные поверхности и оверлеи, элементы-«обёртки»'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#p-6-pravila-primeneniya'}>{'6. Правила применения'}</SiteLink>
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
                                    <SiteLink href={'/docs/spacing-layout'}>{'Spacing & Layout'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/docs/theming'}>{'Themes tokens'}</SiteLink>
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
