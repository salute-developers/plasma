import { Header, SiteLink, parseStyle } from '../shared';

export default function DocsPage() {
    return (
        <>
            {'\n\n'}
            <Header />
            {'\n\n'}
            <section className={'section screen page-top'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <h1 className={'page-title'}>{'Документация'}</h1>
                    {'\n    '}
                    <p className={'page-lead'}>
                        {
                            'Правила системы: размерная шкала, состояния, токены темы, словарь свойств и спецификации компонентов. Это источник, из которого собираются библиотеки в Figma, темы в Builder и контекст для агентов.'
                        }
                    </p>
                    {'\n\n    '}
                    <div className={'doc-search'}>
                        {'\n      '}
                        <img src={'/media/icon-search-20.svg'} alt={''} />
                        {'\n      '}
                        <input
                            id={'docSearch'}
                            type={'search'}
                            placeholder={'Поиск по разделам — например, «состояния» или «токены»'}
                            autoComplete={'off'}
                        />
                        {'\n      '}
                        <span className={'doc-search-count'}>
                            <b id={'docFound'}>{'67'}</b>
                            {' из 67'}
                        </span>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'doc-block'}>
                        {'\n      '}
                        <div className={'doc-block-head'}>
                            {'\n        '}
                            <h2>{'Основы'}</h2>
                            {'\n        '}
                            <span>{'12 страниц · база перед первым продуктом'}</span>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'doc-cards'}>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/introducing'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M6 21V4h12l-2.2 4.2L18 12H6'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Introducing SDDS'}</b>
                                        <span className={'doc-tag'}>{'Старт'}</span>
                                    </span>
                                    {'\n          '}
                                    <p>
                                        {'Что это за система, как работает white-label-модель и с чего начать по роли.'}
                                    </p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/sizes'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M4 20v-5M10 20V10M16 20V5M4 20h16'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Sizes'}</b>
                                        <span className={'doc-tag'}>{'Обновлено'}</span>
                                    </span>
                                    {'\n          '}
                                    <p>{'Единая шкала: токен размера — уровень системы, а не высота в пикселях.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/states'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <circle cx={'6'} cy={'12'} r={'2.6'} />
                                        <circle cx={'12'} cy={'12'} r={'2.6'} />
                                        <circle cx={'18'} cy={'12'} r={'2.6'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'States'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'Как выглядит каждое состояние и по каким правилам они комбинируются.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/theming'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <circle cx={'9.5'} cy={'12'} r={'6'} />
                                        <circle cx={'15'} cy={'12'} r={'6'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Themes tokens'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'Как построить, применить и расширить брендовую тему на токенах.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/corner-radius'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M4 20V11a7 7 0 0 1 7-7h9'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Corner Radius'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'От строгого нуля до Rounded: как радиус передаёт характер бренда.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/spacing-layout'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M4 4h16v16H4zM10 4v16M4 10h16'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Spacing & Layout'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'Шкала расстояний и правила сборки блоков на сетке.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/props-vocabulary'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M4 7h9M4 12h16M4 17h6'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Properties Vocabulary'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'Единые имена свойств, их значения и правила применения.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/interaction-model'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M5 3l14 8-6 2.2L11 20z'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Interaction Model'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'Что происходит по клику, наведению и с клавиатуры.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/validation-model'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <circle cx={'12'} cy={'12'} r={'8.4'} />
                                        <path d={'M8.5 12.4l2.6 2.6 4.6-5.2'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Validation Model'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'Когда показывать ошибку и как её формулировать.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/accessibility'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <circle cx={'12'} cy={'6.6'} r={'2.4'} />
                                        <path d={'M5.5 20v-1.2A6.5 6.5 0 0 1 12 12.3a6.5 6.5 0 0 1 6.5 6.5V20'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Accessibility'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'Контраст, фокус, размеры целей и вспомогательные технологии.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/components'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Component Library'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'Как компоненты сгруппированы по назначению и почему именно так.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/icons'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z'} />
                                        <circle cx={'16.5'} cy={'16.5'} r={'3.5'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Icons'}</b>
                                        <span className={'doc-tag'}>{'новое'}</span>
                                    </span>
                                    {'\n          '}
                                    <p>{'Весь набор: три начертания, три размера, поиск по тегам.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'doc-card'} href={'/docs/glossary'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M5 4h9a4 4 0 0 1 4 4v12H9a4 4 0 0 0-4 4V4z'} />
                                        <path d={'M9 9h6M9 13h4'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'doc-card-head'}>
                                        <b>{'Glossary'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>{'Ключевые термины системы: незнакомое слово — ищите здесь.'}</p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'doc-block'}>
                        {'\n      '}
                        <div className={'doc-block-head'}>
                            {'\n        '}
                            <h2>{'Для агентов и разработчиков'}</h2>
                            {'\n        '}
                            <span>{'Тот же источник, но в машинном виде'}</span>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'cat-cards'}>
                            {'\n        '}
                            <SiteLink className={'cat-card'} href={'/#ai'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <circle cx={'12'} cy={'12'} r={'2.6'} />
                                        <circle cx={'5'} cy={'6'} r={'1.8'} />
                                        <circle cx={'19'} cy={'6'} r={'1.8'} />
                                        <circle cx={'5'} cy={'18'} r={'1.8'} />
                                        <circle cx={'19'} cy={'18'} r={'1.8'} />
                                        <path d={'M10 10.4L6.4 7.4M14 10.4l3.6-3M10 13.6l-3.6 3M14 13.6l3.6 3'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'cat-head'}>
                                        <b>{'AI-ready контекст'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>
                                        {
                                            'Структура со связями между сущностями и версиями — агент получает правила системы, а не текст страницы.'
                                        }
                                    </p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'cat-card'} href={'/#ai'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M9 3v6M15 3v6M6 9h12v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6z'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'cat-head'}>
                                        <b>{'MCP'}</b>
                                        <span className={'cat-count'}>{'бета'}</span>
                                    </span>
                                    {'\n          '}
                                    <p>
                                        {
                                            'Подключение по Model Context Protocol: компоненты, токены и правила читаются напрямую из системы.'
                                        }
                                    </p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'cat-card'} href={'#'}>
                                {'\n          '}
                                <span className={'doc-card-media'}>
                                    <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                        <path d={'M6 3h8l4 4v14H6zM14 3v4h4'} />
                                        <path d={'M9 12h6M9 16h4'} />
                                    </svg>
                                </span>
                                {'\n          '}
                                <span className={'doc-card-body'}>
                                    <span className={'cat-head'}>
                                        <b>{'Шаблон спецификации'}</b>
                                    </span>
                                    {'\n          '}
                                    <p>
                                        {
                                            'По нему пишется новая страница компонента. Пока не заполнены обязательные разделы — это черновик.'
                                        }
                                    </p>
                                    {'\n          '}
                                </span>
                                {'\n        '}
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'doc-block'}>
                        {'\n      '}
                        <div className={'doc-block-head'}>
                            {'\n        '}
                            <h2>{'Компоненты'}</h2>
                            {'\n        '}
                            <span>{'55 спецификаций · категория — это раздел библиотеки'}</span>
                            {'\n      '}
                        </div>
                        {'\n    '}
                        <div className={'comp-sections'}>
                            {'\n      '}
                            <div className={'comp-group'}>
                                {'\n        '}
                                <h3 className={'comp-group-head'}>
                                    {'Actions'}
                                    <i>{'4'}</i>
                                </h3>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'comp-cards'}>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/actions-button'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'14'}
                                                y={'16'}
                                                width={'60'}
                                                height={'18'}
                                                rx={'9'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'28'}
                                                y={'23'}
                                                width={'32'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Button'}</b>
                                        <p>{'Интерактивный элемент для выполнения действия'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/actions-icon-button'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'35'}
                                                y={'15'}
                                                width={'20'}
                                                height={'20'}
                                                rx={'7'}
                                                className={'a-box'}
                                            />
                                            <circle cx={'45'} cy={'25'} r={'3'} className={'a-dot'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'IconButton'}</b>
                                        <p>{'Кнопка только с иконкой'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/actions-link-button'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'24'}
                                                y={'22'}
                                                width={'40'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'24'}
                                                y={'30'}
                                                width={'40'}
                                                height={'2'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'LinkButton'}</b>
                                        <p>{'Кнопка, стилизованная как текстовая ссылка'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/actions-button-group'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'10'}
                                                y={'16'}
                                                width={'24'}
                                                height={'18'}
                                                rx={'9'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'32'}
                                                y={'16'}
                                                width={'24'}
                                                height={'18'}
                                                rx={'0'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'54'}
                                                y={'16'}
                                                width={'24'}
                                                height={'18'}
                                                rx={'9'}
                                                className={'a-box'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'ButtonGroup'}</b>
                                        <p>{'Группа связанных кнопок, объединённых в единый контрол'}</p>
                                    </span>
                                </SiteLink>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'comp-group'}>
                                {'\n        '}
                                <h3 className={'comp-group-head'}>
                                    {'Data Entry'}
                                    <i>{'17'}</i>
                                </h3>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'comp-cards'}>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-autocomplete'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'6'}
                                                width={'64'}
                                                height={'16'}
                                                rx={'6'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'18'}
                                                y={'12'}
                                                width={'18'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'12'}
                                                y={'26'}
                                                width={'64'}
                                                height={'16'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'18'}
                                                y={'30'}
                                                width={'30'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'18'}
                                                y={'36'}
                                                width={'22'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Autocomplete'}</b>
                                        <p>{'Текстовое поле с выпадающим списком подсказок на основе…'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-checkbox'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'14'}
                                                y={'18'}
                                                width={'14'}
                                                height={'14'}
                                                rx={'4'}
                                                className={'a-stroke'}
                                            />
                                            <path d={'M17.5 25l3 3 5-6'} className={'a-path'} />
                                            <rect
                                                x={'34'}
                                                y={'22'}
                                                width={'40'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'CheckBox'}</b>
                                        <p>{'Элемент для независимого выбора одного или нескольких вариантов'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'10'}
                                                y={'16'}
                                                width={'16'}
                                                height={'18'}
                                                rx={'5'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'30'}
                                                y={'16'}
                                                width={'16'}
                                                height={'18'}
                                                rx={'5'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'50'}
                                                y={'16'}
                                                width={'16'}
                                                height={'18'}
                                                rx={'5'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'70'}
                                                y={'16'}
                                                width={'8'}
                                                height={'18'}
                                                rx={'5'}
                                                className={'a-stroke'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'CodeInput / CodeField'}</b>
                                        <p>{'Поле для ввода короткого кода'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'6'}
                                                width={'64'}
                                                height={'16'}
                                                rx={'6'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'18'}
                                                y={'12'}
                                                width={'22'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'12'}
                                                y={'26'}
                                                width={'64'}
                                                height={'16'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'18'}
                                                y={'32'}
                                                width={'34'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'ComboBox'}</b>
                                        <p>{'Поле ввода, которое позволяет выбирать значения из выпадающего…'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-date-picker'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'8'}
                                                width={'64'}
                                                height={'32'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'12'}
                                                y={'17'}
                                                width={'64'}
                                                height={'2'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <circle cx={'24'} cy={'27'} r={'2.5'} className={'a-dot'} />
                                            <circle cx={'36'} cy={'27'} r={'2.5'} className={'a-dot'} />
                                            <circle cx={'48'} cy={'27'} r={'2.5'} className={'a-dot'} />
                                            <circle cx={'60'} cy={'27'} r={'2.5'} className={'a-dot'} />
                                            <circle cx={'24'} cy={'34'} r={'2.5'} className={'a-dot'} />
                                            <circle cx={'36'} cy={'34'} r={'2.5'} className={'a-dot'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'DatePicker'}</b>
                                        <p>{'Комбинация текстового поля и выпадающего календаря с…'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'8'}
                                                width={'64'}
                                                height={'32'}
                                                rx={'8'}
                                                className={'a-dashed'}
                                            />
                                            <path d={'M44 30v-9m-4 4l4-4 4 4'} className={'a-path'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Dropzone'}</b>
                                        <p>{'Интерактивная область, предназначенная для перетаскивания и…'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'14'}
                                                width={'64'}
                                                height={'20'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'19'}
                                                y={'22'}
                                                width={'16'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <path d={'M62 22l3-3 3 3M62 27l3 3 3-3'} className={'a-path'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'NumberInput'}</b>
                                        <p>{'Числовое поле ввода со стрелками инкремента/декремента'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-radio-box'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <circle cx={'21'} cy={'25'} r={'7'} className={'a-ring'} />
                                            <circle cx={'21'} cy={'25'} r={'3'} className={'a-dot'} />
                                            <rect
                                                x={'34'}
                                                y={'22'}
                                                width={'40'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'RadioBox'}</b>
                                        <p>{'Элемент для выбора одного варианта из группы взаимоисключающих'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'23'}
                                                width={'64'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'28'}
                                                y={'23'}
                                                width={'32'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-box'}
                                            />
                                            <circle cx={'28'} cy={'24.5'} r={'6'} className={'a-knob'} />
                                            <circle cx={'60'} cy={'24.5'} r={'6'} className={'a-knob'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Range'}</b>
                                        <p>{'Компонент для ввода диапазона значений'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-segment'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'15'}
                                                width={'64'}
                                                height={'18'}
                                                rx={'9'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'14'}
                                                y={'17'}
                                                width={'20'}
                                                height={'14'}
                                                rx={'7'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'42'}
                                                y={'22'}
                                                width={'12'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'60'}
                                                y={'22'}
                                                width={'10'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Segment'}</b>
                                        <p>{'Группа элементов для переключения между несколькими категориями…'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-select'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'14'}
                                                width={'64'}
                                                height={'20'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'19'}
                                                y={'22'}
                                                width={'22'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <path d={'M62 21l4 4 4-4'} className={'a-path'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Select'}</b>
                                        <p>{'Выпадающий список для выбора одного или нескольких значений'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-slider'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'23'}
                                                width={'64'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <circle cx={'46'} cy={'24.5'} r={'6'} className={'a-knob'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Slider'}</b>
                                        <p>{'Ползунок для выбора числового значения в диапазоне'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-switch'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'14'}
                                                y={'18'}
                                                width={'26'}
                                                height={'14'}
                                                rx={'7'}
                                                className={'a-box'}
                                            />
                                            <circle cx={'33'} cy={'25'} r={'5'} className={'a-knob'} />
                                            <rect
                                                x={'46'}
                                                y={'22'}
                                                width={'28'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Switch'}</b>
                                        <p>{'Переключатель бинарного состояния'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-text-area'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'8'}
                                                width={'64'}
                                                height={'32'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'19'}
                                                y={'16'}
                                                width={'40'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'19'}
                                                y={'23'}
                                                width={'46'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'19'}
                                                y={'30'}
                                                width={'26'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'TextArea'}</b>
                                        <p>{'Многострочное поле для ввода текста'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-entry-text-field'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'14'}
                                                width={'64'}
                                                height={'20'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'19'}
                                                y={'22'}
                                                width={'20'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'TextField'}</b>
                                        <p>{'Однострочное поле для ввода текста'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <circle cx={'44'} cy={'24'} r={'14'} className={'a-ring'} />
                                            <path d={'M44 16v8l6 4'} className={'a-path'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'TimePicker'}</b>
                                        <p>{'Поле для выбора времени суток с раскрывающимся списком значений'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'6'}
                                                width={'64'}
                                                height={'16'}
                                                rx={'6'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'18'}
                                                y={'12'}
                                                width={'24'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'18'}
                                                y={'28'}
                                                width={'22'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'26'}
                                                y={'35'}
                                                width={'26'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'TreeSelect'}</b>
                                        <p>{'Иерархический выпадающий список с раскрытием уровней дерева'}</p>
                                    </span>
                                </span>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'comp-group'}>
                                {'\n        '}
                                <h3 className={'comp-group-head'}>
                                    {'Data Display'}
                                    <i>{'14'}</i>
                                </h3>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'comp-cards'}>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-display-accordion'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'8'}
                                                width={'64'}
                                                height={'12'}
                                                rx={'5'}
                                                className={'a-stroke'}
                                            />
                                            <path d={'M64 12l4 4 4-4'} className={'a-path'} />
                                            <rect
                                                x={'12'}
                                                y={'24'}
                                                width={'64'}
                                                height={'12'}
                                                rx={'5'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'18'}
                                                y={'29'}
                                                width={'26'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Accordion'}</b>
                                        <p>{'Список со сворачиваемыми секциями контента'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-display-avatar'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <circle cx={'44'} cy={'24'} r={'14'} className={'a-ring'} />
                                            <circle cx={'44'} cy={'20'} r={'5'} className={'a-dot'} />
                                            <path d={'M34 36a10 10 0 0120 0'} className={'a-path'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Avatar'}</b>
                                        <p>{'Визуальное представление пользователя или сущности в виде…'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-display-badge'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'26'}
                                                y={'18'}
                                                width={'36'}
                                                height={'14'}
                                                rx={'7'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'33'}
                                                y={'23'}
                                                width={'22'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Badge'}</b>
                                        <p>{'Небольшая метка, накладываемая на другой компонент'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-display-card'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'14'}
                                                y={'8'}
                                                width={'60'}
                                                height={'32'}
                                                rx={'8'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'14'}
                                                y={'8'}
                                                width={'60'}
                                                height={'12'}
                                                rx={'8'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'22'}
                                                y={'26'}
                                                width={'30'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'22'}
                                                y={'32'}
                                                width={'20'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Card'}</b>
                                        <p>{'Контейнер для группировки связанного контента'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <circle cx={'22'} cy={'24'} r={'8'} className={'a-ring'} />
                                            <rect
                                                x={'38'}
                                                y={'19'}
                                                width={'34'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'38'}
                                                y={'27'}
                                                width={'22'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Cell'}</b>
                                        <p>{'Строка-ячейка для списков и таблиц'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-display-chip'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'20'}
                                                y={'18'}
                                                width={'48'}
                                                height={'14'}
                                                rx={'7'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'26'}
                                                y={'23'}
                                                width={'20'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <path d={'M56 22l6 6m0-6l-6 6'} className={'a-path'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Chip'}</b>
                                        <p>{'Компактный элемент в виде метки или тега для отображения…'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'32'}
                                                y={'16'}
                                                width={'24'}
                                                height={'18'}
                                                rx={'9'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'40'}
                                                y={'23'}
                                                width={'8'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Counter'}</b>
                                        <p>{'Числовой индикатор количества'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-display-divider'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'23'}
                                                width={'64'}
                                                height={'2'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Divider'}</b>
                                        <p>{'Разделительная линия'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <circle cx={'44'} cy={'24'} r={'5'} className={'a-dot'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Indicator'}</b>
                                        <p>{'Точечный или цветовой маркер состояния'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'14'}
                                                y={'12'}
                                                width={'60'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'14'}
                                                y={'22'}
                                                width={'60'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'14'}
                                                y={'32'}
                                                width={'42'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'List'}</b>
                                        <p>{'Компонент для отображения упорядоченного набора элементов списком'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <path d={'M44 10a14 14 0 11-14 14'} className={'a-path'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Loader'}</b>
                                        <p>{'Индикатор загрузки контента'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'12'}
                                                width={'64'}
                                                height={'24'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'12'}
                                                y={'12'}
                                                width={'4'}
                                                height={'24'}
                                                rx={'2'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'24'}
                                                y={'20'}
                                                width={'40'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'24'}
                                                y={'27'}
                                                width={'28'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Note'}</b>
                                        <p>{'Компонент для отображения вспомогательной или пояснительной…'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <path
                                                d={'M16 18l2 5 5 .4-4 3.4 1.2 5-4.2-2.8-4.2 2.8 1.2-5-4-3.4 5-.4z'}
                                                className={'a-path'}
                                            />
                                            <path
                                                d={'M34 18l2 5 5 .4-4 3.4 1.2 5-4.2-2.8-4.2 2.8 1.2-5-4-3.4 5-.4z'}
                                                className={'a-path'}
                                            />
                                            <path
                                                d={'M52 18l2 5 5 .4-4 3.4 1.2 5-4.2-2.8-4.2 2.8 1.2-5-4-3.4 5-.4z'}
                                                className={'a-path'}
                                            />
                                            <path
                                                d={'M70 18l2 5 5 .4-4 3.4 1.2 5-4.2-2.8-4.2 2.8 1.2-5-4-3.4 5-.4z'}
                                                className={'a-path'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Rating'}</b>
                                        <p>{'Визуальное отображение оценки в виде звёзд или произвольных…'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/data-display-spinner'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <path d={'M44 12a12 12 0 11-12 12'} className={'a-path'} />
                                            <circle cx={'44'} cy={'12'} r={'2.5'} className={'a-dot'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Spinner'}</b>
                                        <p>{'Частный случай Loader в виде крутящегося элемента, который…'}</p>
                                    </span>
                                </SiteLink>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'comp-group'}>
                                {'\n        '}
                                <h3 className={'comp-group-head'}>
                                    {'Navigation'}
                                    <i>{'11'}</i>
                                </h3>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'comp-cards'}>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'22'}
                                                width={'16'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <circle cx={'34'} cy={'24'} r={'1.5'} className={'a-dot'} />
                                            <rect
                                                x={'40'}
                                                y={'22'}
                                                width={'16'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <circle cx={'62'} cy={'24'} r={'1.5'} className={'a-dot'} />
                                            <rect
                                                x={'68'}
                                                y={'22'}
                                                width={'10'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'BreadCrumbs'}</b>
                                        <p>{'Цепочка ссылок, отображающая путь пользователя в иерархии раздела'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'8'}
                                                y={'12'}
                                                width={'20'}
                                                height={'24'}
                                                rx={'5'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'32'}
                                                y={'8'}
                                                width={'28'}
                                                height={'32'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'64'}
                                                y={'12'}
                                                width={'20'}
                                                height={'24'}
                                                rx={'5'}
                                                className={'a-box'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Carousel'}</b>
                                        <p>{'Компонент для горизонтального прокручивания набора элементов'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'24'}
                                                y={'6'}
                                                width={'40'}
                                                height={'14'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'24'}
                                                y={'24'}
                                                width={'40'}
                                                height={'18'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'30'}
                                                y={'29'}
                                                width={'24'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'30'}
                                                y={'35'}
                                                width={'18'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'DropdownMenu'}</b>
                                        <p>{'Выпадающее меню со списком навигационных пунктов или действий'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <circle cx={'22'} cy={'24'} r={'8'} className={'a-ring'} />
                                            <rect
                                                x={'36'}
                                                y={'16'}
                                                width={'16'}
                                                height={'16'}
                                                rx={'8'}
                                                className={'a-box'}
                                            />
                                            <circle cx={'66'} cy={'24'} r={'8'} className={'a-ring'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Pagination'}</b>
                                        <p>{'Компонент для постраничной навигации по большому набору данных'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <circle cx={'26'} cy={'24'} r={'3'} className={'a-dot'} />
                                            <rect
                                                x={'36'}
                                                y={'21'}
                                                width={'16'}
                                                height={'6'}
                                                rx={'3'}
                                                className={'a-box'}
                                            />
                                            <circle cx={'62'} cy={'24'} r={'3'} className={'a-dot'} />
                                            <circle cx={'72'} cy={'24'} r={'3'} className={'a-dot'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'PaginationDots'}</b>
                                        <p>{'Элементы переключения с индикатором текущей позиции'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'38'}
                                                y={'6'}
                                                width={'12'}
                                                height={'36'}
                                                rx={'6'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'40'}
                                                y={'10'}
                                                width={'8'}
                                                height={'18'}
                                                rx={'4'}
                                                className={'a-box'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'ScrollBar'}</b>
                                        <p>{'Кастомный компонент полосы прокрутки'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <circle cx={'18'} cy={'24'} r={'7'} className={'a-ring'} />
                                            <rect
                                                x={'25'}
                                                y={'23'}
                                                width={'14'}
                                                height={'2'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'39'}
                                                y={'17'}
                                                width={'14'}
                                                height={'14'}
                                                rx={'7'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'53'}
                                                y={'23'}
                                                width={'14'}
                                                height={'2'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <circle cx={'74'} cy={'24'} r={'7'} className={'a-ring'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Steps'}</b>
                                        <p>{'Горизонтальный или вертикальный набор шагов многоэтапного процесса'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'14'}
                                                y={'16'}
                                                width={'18'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'38'}
                                                y={'16'}
                                                width={'18'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'62'}
                                                y={'16'}
                                                width={'14'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'14'}
                                                y={'28'}
                                                width={'18'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'14'}
                                                y={'33'}
                                                width={'60'}
                                                height={'1'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'TabBar'}</b>
                                        <p>{'Нижняя панель вкладок для мобильного интерфейса'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/navigation-tabs'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'14'}
                                                y={'16'}
                                                width={'18'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'38'}
                                                y={'16'}
                                                width={'18'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'62'}
                                                y={'16'}
                                                width={'14'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'14'}
                                                y={'28'}
                                                width={'18'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'14'}
                                                y={'33'}
                                                width={'60'}
                                                height={'1'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Tabs'}</b>
                                        <p>{'Горизонтальные вкладки для переключения между разделами'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'10'}
                                                width={'50'}
                                                height={'28'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'20'}
                                                y={'20'}
                                                width={'28'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'20'}
                                                y={'27'}
                                                width={'18'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <circle cx={'68'} cy={'16'} r={'5'} className={'a-dot'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Tour'}</b>
                                        <p>{'Онбординг-тур'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'16'}
                                                y={'12'}
                                                width={'30'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'26'}
                                                y={'22'}
                                                width={'30'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'36'}
                                                y={'32'}
                                                width={'30'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <path d={'M18 16v16h6M28 26v12h6'} className={'a-path'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Tree'}</b>
                                        <p>{'Иерархический список с раскрываемыми узлами'}</p>
                                    </span>
                                </span>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'comp-group'}>
                                {'\n        '}
                                <h3 className={'comp-group-head'}>
                                    {'Overlay'}
                                    <i>{'9'}</i>
                                </h3>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'comp-cards'}>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'6'}
                                                y={'6'}
                                                width={'76'}
                                                height={'36'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'14'}
                                                y={'24'}
                                                width={'60'}
                                                height={'18'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'38'}
                                                y={'28'}
                                                width={'12'}
                                                height={'2.5'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'BottomSheet'}</b>
                                        <p>{'Панель, появляющаяся снизу экрана поверх контента'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'6'}
                                                y={'6'}
                                                width={'76'}
                                                height={'36'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'50'}
                                                y={'6'}
                                                width={'32'}
                                                height={'36'}
                                                rx={'6'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'56'}
                                                y={'16'}
                                                width={'20'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'56'}
                                                y={'24'}
                                                width={'14'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Drawer'}</b>
                                        <p>{'Боковая панель, выезжающая поверх основного контента'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'6'}
                                                y={'6'}
                                                width={'76'}
                                                height={'36'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <rect
                                                x={'18'}
                                                y={'12'}
                                                width={'52'}
                                                height={'24'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'26'}
                                                y={'20'}
                                                width={'24'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'26'}
                                                y={'27'}
                                                width={'34'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Modal'}</b>
                                        <p>{'Диалоговое окно, блокирующее взаимодействие с основным контентом'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'10'}
                                                width={'64'}
                                                height={'28'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <circle cx={'22'} cy={'20'} r={'4'} className={'a-dot'} />
                                            <rect
                                                x={'32'}
                                                y={'18'}
                                                width={'34'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'32'}
                                                y={'26'}
                                                width={'22'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Notification'}</b>
                                        <p>{'Уведомления поверх контента с возможностью закрытия'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'14'}
                                                y={'8'}
                                                width={'60'}
                                                height={'22'}
                                                rx={'7'}
                                                className={'a-stroke'}
                                            />
                                            <path d={'M40 30l4 6 4-6'} className={'a-path'} />
                                            <rect
                                                x={'22'}
                                                y={'14'}
                                                width={'30'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                            <rect
                                                x={'22'}
                                                y={'21'}
                                                width={'20'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Popover'}</b>
                                        <p>{'Всплывающий контейнер с расширенным контентом, привязанный к…'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'12'}
                                                y={'21'}
                                                width={'64'}
                                                height={'8'}
                                                rx={'4'}
                                                className={'a-stroke'}
                                            />
                                            <rect
                                                x={'12'}
                                                y={'21'}
                                                width={'38'}
                                                height={'8'}
                                                rx={'4'}
                                                className={'a-box'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'ProgressBar'}</b>
                                        <p>{'Горизонтальная полоса загрузки с известным процентом завершения'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <SiteLink className={'comp-card'} href={'/docs/overlay-toast'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'10'}
                                                y={'16'}
                                                width={'68'}
                                                height={'18'}
                                                rx={'8'}
                                                className={'a-box'}
                                            />
                                            <circle cx={'22'} cy={'25'} r={'4'} className={'a-dot'} />
                                            <rect
                                                x={'32'}
                                                y={'23'}
                                                width={'34'}
                                                height={'4'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Toast'}</b>
                                        <p>{'Временное всплывающее уведомление'}</p>
                                    </span>
                                </SiteLink>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'10'}
                                                y={'16'}
                                                width={'68'}
                                                height={'18'}
                                                rx={'9'}
                                                className={'a-stroke'}
                                            />
                                            <circle cx={'22'} cy={'25'} r={'3'} className={'a-dot'} />
                                            <circle cx={'34'} cy={'25'} r={'3'} className={'a-dot'} />
                                            <circle cx={'46'} cy={'25'} r={'3'} className={'a-dot'} />
                                            <circle cx={'58'} cy={'25'} r={'3'} className={'a-dot'} />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'ToolBar'}</b>
                                        <p>{'Панель инструментов с набором действий'}</p>
                                    </span>
                                </span>
                                {'\n        '}
                                <span className={'comp-card is-soon'}>
                                    <span className={'comp-card-art'} aria-hidden={'true'}>
                                        <svg viewBox={'0 0 88 48'}>
                                            <rect
                                                x={'22'}
                                                y={'12'}
                                                width={'44'}
                                                height={'16'}
                                                rx={'6'}
                                                className={'a-box'}
                                            />
                                            <path d={'M40 28l4 5 4-5'} className={'a-path'} />
                                            <rect
                                                x={'28'}
                                                y={'18'}
                                                width={'24'}
                                                height={'3'}
                                                rx={'1.5'}
                                                className={'a-line'}
                                            />
                                        </svg>
                                    </span>
                                    <span className={'comp-card-body'}>
                                        <b>{'Tooltip'}</b>
                                        <p>{'Небольшая всплывающая подсказка по наведению или фокусу'}</p>
                                    </span>
                                </span>
                                {'\n      '}
                            </div>
                            {'\n    '}
                        </div>
                        {'\n  '}
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
