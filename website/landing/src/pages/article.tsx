import { Header, SiteFooter, SiteLink } from '../shared';
import { publicPath } from '../paths';

export default function ArticlePage() {
    return (
        <>
            <Header />

            <section className="section screen page-top">
                <div className="shell">
                    <div className="news-layout">
                        <article className="article">
                            <SiteLink className="article-back" href="/news">
                                <svg viewBox="0 0 24 24">
                                    <path d="M15 6l-6 6 6 6" />
                                </svg>
                                {'Все материалы\n        '}
                            </SiteLink>

                            <div className="article-meta">
                                <span className="post-kind">Релиз</span>

                                <span>18 сентября 2026</span>
                                <span>·</span>
                                <span>4 мин</span>
                            </div>

                            <h1>SDDS 1.5: размеры XS–XL во всех контролах и новая схема состояний</h1>

                            <p className="article-lead">
                                Размерная шкала стала единой для всех интерактивных компонентов, состояния описаны через
                                токены, а не через локальные значения. Темы, собранные в Builder, обновятся
                                автоматически при следующей синхронизации — правок в продуктах не требуется.
                            </p>

                            <figure className="article-figure">
                                <img
                                    src={publicPath('/media/news/cover-sizes.svg')}
                                    alt="Размерная шкала от XS до XL"
                                    loading="lazy"
                                />

                                <figcaption>
                                    Пять ступеней размера: от компактного XS до XL для больших экранов
                                </figcaption>
                            </figure>

                            <h2 id="sizes">Размеры: одна шкала на все компоненты</h2>

                            <p>
                                {
                                    'До 1.5 каждый компонент задавал высоту сам: у кнопок было три размера, у полей — четыре, а у чипов вообще свои значения. Теперь шкала одна, и она описана в токенах: '
                                }
                                <code>XS 32</code>
                                {', '}
                                <code>S 40</code>
                                {', '}
                                <code>M 48</code>
                                {', '}
                                <code>L 56</code>
                                {', '}
                                <code>XL 64</code>. Компонент берёт высоту из ступени, а не из локальной константы.
                            </p>

                            <p>
                                Это меняет и работу с плотностью интерфейса: чтобы сделать раздел компактнее, достаточно
                                переключить ступень на уровне блока — вложенные контролы подхватят её сами.
                            </p>

                            <figure className="article-figure">
                                <img
                                    src={publicPath('/media/news/fig-sizes.svg')}
                                    alt="Высота контролов по ступеням"
                                    loading="lazy"
                                />

                                <figcaption>
                                    Высоты ступеней и то, как они применяются к кнопкам, полям и чипам
                                </figcaption>
                            </figure>

                            <div className="callout">
                                <b>Что делать командам</b>

                                <p>
                                    Ничего, если вы не переопределяли высоту контролов вручную. Если переопределяли —
                                    сверьтесь со шкалой: локальные значения перестанут совпадать с системными на
                                    ступенях S и L.
                                </p>
                            </div>

                            <h2 id="states">Состояния: токены вместо значений</h2>

                            <p>
                                Раньше состояние описывалось конкретным цветом: например, для наведения бралось значение
                                на 8% светлее базового. В 1.5 состояния вынесены в отдельный слой токенов, и компонент
                                ссылается на состояние, а не на цвет.
                            </p>

                            <p>
                                Практическая разница: когда команда меняет акцент в Builder, все состояния
                                пересчитываются вместе с ним. Раньше приходилось проверять каждое вручную — особенно
                                контраст фокуса на тёмной теме.
                            </p>

                            <figure className="article-figure">
                                <img
                                    src={publicPath('/media/news/fig-states.svg')}
                                    alt="Матрица компонентов и состояний"
                                    loading="lazy"
                                />

                                <figcaption>
                                    Матрица «компонент × состояние»: значения приходят из токенов темы
                                </figcaption>
                            </figure>

                            <h3 id="focus">Фокус стал отдельным состоянием</h3>

                            <p>
                                Фокус больше не наследует стиль наведения. У него своя обводка, которая не зависит от
                                акцента и остаётся различимой на любой теме — это снимает частую претензию по
                                доступности.
                            </p>

                            <h2 id="density">Плотность: один набор, разные сценарии</h2>

                            <p>
                                Общая шкала позволила собрать плотный интерфейс и десятифутовый на одних компонентах.
                                Разница только в ступени: аналитический экран живёт на XS–S, интерфейс для телевизора —
                                на L–XL.
                            </p>

                            <figure className="article-figure">
                                <img
                                    src={publicPath('/media/news/fig-density.svg')}
                                    alt="Одна тема в плотном и десятифутовом интерфейсе"
                                    loading="lazy"
                                />

                                <figcaption>
                                    Слева плотный сценарий, справа интерфейс для большого экрана — компоненты те же
                                </figcaption>
                            </figure>

                            <h2 id="migration">Как обновиться</h2>

                            <p>
                                Тема из Builder подтянется автоматически при следующей синхронизации. Если библиотека
                                подключена напрямую, обновите пакет до 1.5.0 и прогоните проверку: она покажет места,
                                где высота задана вручную.
                            </p>

                            <ol className="article-list">
                                <li>Обновить пакет до 1.5.0</li>

                                <li>Прогнать проверку темы в Builder</li>

                                <li>Убрать локальные переопределения высоты, если они остались</li>

                                <li>Проверить состояния фокуса на тёмной теме</li>
                            </ol>

                            <div className="article-foot">
                                <span>Вопросы по релизу — в сообществе или через форму запроса.</span>

                                <SiteLink className="side-cta" href="/contacts">
                                    Написать команде
                                </SiteLink>
                            </div>
                        </article>

                        <aside className="article-side">
                            <div className="side-card toc">
                                <h3>Оглавление</h3>

                                <nav className="toc-list">
                                    <SiteLink href="#sizes">Размеры: одна шкала</SiteLink>

                                    <SiteLink href="#states">Состояния: токены вместо значений</SiteLink>

                                    <SiteLink href="#focus" className="is-sub">
                                        Фокус стал отдельным состоянием
                                    </SiteLink>

                                    <SiteLink href="#density">Плотность: один набор</SiteLink>

                                    <SiteLink href="#migration">Как обновиться</SiteLink>
                                </nav>
                            </div>

                            <div className="side-card">
                                <h3>Полезные ссылки</h3>

                                <nav className="link-list">
                                    <SiteLink href="#">Спецификация размеров</SiteLink>

                                    <SiteLink href="#">Токены состояний</SiteLink>

                                    <SiteLink href="#">Changelog 1.5.0</SiteLink>

                                    <SiteLink href="/#theme">Конфигуратор тем</SiteLink>
                                </nav>
                            </div>

                            <div className="side-card">
                                <h3>Что читать дальше</h3>

                                <nav className="read-next">
                                    <SiteLink href="#">DataTable: сортировка и плотность строк</SiteLink>

                                    <SiteLink href="#">Доступность: контраст акцентов в тёмной теме</SiteLink>

                                    <SiteLink href="#">MCP: как агент читает контекст темы</SiteLink>
                                </nav>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </>
    );
}
