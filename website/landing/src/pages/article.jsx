import { Header, SiteLink, parseStyle } from '../shared';

export default function ArticlePage() {
    return (
        <>
            {'\n\n'}
            <Header />
            {'\n\n'}
            <section className={'section screen page-top'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'news-layout'}>
                        {'\n      '}
                        <article className={'article'}>
                            {'\n        '}
                            <SiteLink className={'article-back'} href={'/news'}>
                                {'\n          '}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M15 6l-6 6 6 6'} />
                                </svg>
                                {'Все материалы\n        '}
                            </SiteLink>
                            {'\n\n        '}
                            <div className={'article-meta'}>
                                {'\n          '}
                                <span className={'post-kind'}>{'Релиз'}</span>
                                {'\n          '}
                                <span>{'18 сентября 2026'}</span>
                                <span>{'·'}</span>
                                <span>{'4 мин'}</span>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h1>{'SDDS 1.5: размеры XS–XL во всех контролах и новая схема состояний'}</h1>
                            {'\n        '}
                            <p className={'article-lead'}>
                                {
                                    'Размерная шкала стала единой для всех интерактивных компонентов, состояния описаны через токены, а не через локальные значения. Темы, собранные в Builder, обновятся автоматически при следующей синхронизации — правок в продуктах не требуется.'
                                }
                            </p>
                            {'\n\n        '}
                            <figure className={'article-figure'}>
                                {'\n          '}
                                <img
                                    src={'/media/news/cover-sizes.svg'}
                                    alt={'Размерная шкала от XS до XL'}
                                    loading={'lazy'}
                                />
                                {'\n          '}
                                <figcaption>
                                    {'Пять ступеней размера: от компактного XS до XL для больших экранов'}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n\n        '}
                            <h2 id={'sizes'}>{'Размеры: одна шкала на все компоненты'}</h2>
                            {'\n        '}
                            <p>
                                {
                                    'До 1.5 каждый компонент задавал высоту сам: у кнопок было три размера, у полей — четыре, а у чипов вообще свои значения. Теперь шкала одна, и она описана в токенах: '
                                }
                                <code>{'XS 32'}</code>
                                {', '}
                                <code>{'S 40'}</code>
                                {', '}
                                <code>{'M 48'}</code>
                                {', '}
                                <code>{'L 56'}</code>
                                {', '}
                                <code>{'XL 64'}</code>
                                {'. Компонент берёт высоту из ступени, а не из локальной константы.'}
                            </p>
                            {'\n        '}
                            <p>
                                {
                                    'Это меняет и работу с плотностью интерфейса: чтобы сделать раздел компактнее, достаточно переключить ступень на уровне блока — вложенные контролы подхватят её сами.'
                                }
                            </p>
                            {'\n\n        '}
                            <figure className={'article-figure'}>
                                {'\n          '}
                                <img
                                    src={'/media/news/fig-sizes.svg'}
                                    alt={'Высота контролов по ступеням'}
                                    loading={'lazy'}
                                />
                                {'\n          '}
                                <figcaption>
                                    {'Высоты ступеней и то, как они применяются к кнопкам, полям и чипам'}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n\n        '}
                            <div className={'callout'}>
                                {'\n          '}
                                <b>{'Что делать командам'}</b>
                                {'\n          '}
                                <p>
                                    {
                                        'Ничего, если вы не переопределяли высоту контролов вручную. Если переопределяли — сверьтесь со шкалой: локальные значения перестанут совпадать с системными на ступенях S и L.'
                                    }
                                </p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <h2 id={'states'}>{'Состояния: токены вместо значений'}</h2>
                            {'\n        '}
                            <p>
                                {
                                    'Раньше состояние описывалось конкретным цветом: например, для наведения бралось значение на 8% светлее базового. В 1.5 состояния вынесены в отдельный слой токенов, и компонент ссылается на состояние, а не на цвет.'
                                }
                            </p>
                            {'\n        '}
                            <p>
                                {
                                    'Практическая разница: когда команда меняет акцент в Builder, все состояния пересчитываются вместе с ним. Раньше приходилось проверять каждое вручную — особенно контраст фокуса на тёмной теме.'
                                }
                            </p>
                            {'\n\n        '}
                            <figure className={'article-figure'}>
                                {'\n          '}
                                <img
                                    src={'/media/news/fig-states.svg'}
                                    alt={'Матрица компонентов и состояний'}
                                    loading={'lazy'}
                                />
                                {'\n          '}
                                <figcaption>
                                    {'Матрица «компонент × состояние»: значения приходят из токенов темы'}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n\n        '}
                            <h3 id={'focus'}>{'Фокус стал отдельным состоянием'}</h3>
                            {'\n        '}
                            <p>
                                {
                                    'Фокус больше не наследует стиль наведения. У него своя обводка, которая не зависит от акцента и остаётся различимой на любой теме — это снимает частую претензию по доступности.'
                                }
                            </p>
                            {'\n\n        '}
                            <h2 id={'density'}>{'Плотность: один набор, разные сценарии'}</h2>
                            {'\n        '}
                            <p>
                                {
                                    'Общая шкала позволила собрать плотный интерфейс и десятифутовый на одних компонентах. Разница только в ступени: аналитический экран живёт на XS–S, интерфейс для телевизора — на L–XL.'
                                }
                            </p>
                            {'\n\n        '}
                            <figure className={'article-figure'}>
                                {'\n          '}
                                <img
                                    src={'/media/news/fig-density.svg'}
                                    alt={'Одна тема в плотном и десятифутовом интерфейсе'}
                                    loading={'lazy'}
                                />
                                {'\n          '}
                                <figcaption>
                                    {'Слева плотный сценарий, справа интерфейс для большого экрана — компоненты те же'}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n\n        '}
                            <h2 id={'migration'}>{'Как обновиться'}</h2>
                            {'\n        '}
                            <p>
                                {
                                    'Тема из Builder подтянется автоматически при следующей синхронизации. Если библиотека подключена напрямую, обновите пакет до 1.5.0 и прогоните проверку: она покажет места, где высота задана вручную.'
                                }
                            </p>
                            {'\n        '}
                            <ol className={'article-list'}>
                                {'\n          '}
                                <li>{'Обновить пакет до 1.5.0'}</li>
                                {'\n          '}
                                <li>{'Прогнать проверку темы в Builder'}</li>
                                {'\n          '}
                                <li>{'Убрать локальные переопределения высоты, если они остались'}</li>
                                {'\n          '}
                                <li>{'Проверить состояния фокуса на тёмной теме'}</li>
                                {'\n        '}
                            </ol>
                            {'\n\n        '}
                            <div className={'article-foot'}>
                                {'\n          '}
                                <span>{'Вопросы по релизу — в сообществе или через форму запроса.'}</span>
                                {'\n          '}
                                <SiteLink className={'side-cta'} href={'/contacts'}>
                                    {'Написать команде'}
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
                                <h3>{'Оглавление'}</h3>
                                {'\n          '}
                                <nav className={'toc-list'}>
                                    {'\n            '}
                                    <SiteLink href={'#sizes'}>{'Размеры: одна шкала'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#states'}>{'Состояния: токены вместо значений'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#focus'} className={'is-sub'}>
                                        {'Фокус стал отдельным состоянием'}
                                    </SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#density'}>{'Плотность: один набор'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#migration'}>{'Как обновиться'}</SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'side-card'}>
                                {'\n          '}
                                <h3>{'Полезные ссылки'}</h3>
                                {'\n          '}
                                <nav className={'link-list'}>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Спецификация размеров'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Токены состояний'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Changelog 1.5.0'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'/#theme'}>{'Конфигуратор тем'}</SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <div className={'side-card'}>
                                {'\n          '}
                                <h3>{'Что читать дальше'}</h3>
                                {'\n          '}
                                <nav className={'read-next'}>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'DataTable: сортировка и плотность строк'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'Доступность: контраст акцентов в тёмной теме'}</SiteLink>
                                    {'\n            '}
                                    <SiteLink href={'#'}>{'MCP: как агент читает контекст темы'}</SiteLink>
                                    {'\n          '}
                                </nav>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </aside>
                        {'\n    '}
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
