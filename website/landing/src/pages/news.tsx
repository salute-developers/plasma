import { Header, SiteFooter, SiteLink } from '../shared';

export default function NewsPage() {
    return (
        <>
            <Header />

            <section className="section screen page-top">
                <div className="shell">
                    <h1 className="page-title">Новости</h1>

                    <div className="news-layout">
                        <div>
                            <div className="filters">
                                <button className="filter-chip is-active" data-kind="all" type="button">
                                    Все
                                </button>

                                <button className="filter-chip" data-kind="release" type="button">
                                    Релизы
                                </button>

                                <button className="filter-chip" data-kind="component" type="button">
                                    Компоненты
                                </button>

                                <button className="filter-chip" data-kind="guide" type="button">
                                    Гайдлайны
                                </button>

                                <button className="filter-chip" data-kind="ai" type="button">
                                    AI и MCP
                                </button>

                                <span className="filter-count">
                                    <b id="postCount">7</b>
                                    {' материалов'}
                                </span>
                            </div>

                            <div className="posts">
                                <SiteLink className="post" href="/news/article" data-kind="release">
                                    <span className="post-cover">
                                        <img src="/media/news/cover-sizes.svg" alt="" loading="lazy" />
                                        <span className="post-kind">Релиз</span>
                                    </span>

                                    <span className="post-body">
                                        <span className="post-meta">
                                            <span>18 сентября 2026</span>
                                            <span>·</span>
                                            <span>4 мин</span>
                                        </span>

                                        <h3>SDDS 1.5: размеры XS–XL во всех контролах и новая схема состояний</h3>

                                        <p>
                                            Размерная шкала стала единой для всех интерактивных компонентов, состояния
                                            описаны через токены, а не через локальные значения. Темы, собранные в
                                            Builder, обновятся автоматически при следующей синхронизации — правок в
                                            продуктах не требуется.
                                        </p>

                                        <span className="post-more">
                                            Читать разбор
                                            <svg viewBox="0 0 24 24">
                                                <path d="M9 6l6 6-6 6" />
                                            </svg>
                                        </span>
                                    </span>
                                </SiteLink>

                                <SiteLink className="post" href="#" data-kind="component">
                                    <span className="post-cover">
                                        <img src="/media/news/cover-table.svg" alt="" loading="lazy" />
                                        <span className="post-kind">Компонент</span>
                                    </span>

                                    <span className="post-body">
                                        <span className="post-meta">
                                            <span>11 сентября 2026</span>
                                            <span>·</span>
                                            <span>3 мин</span>
                                        </span>

                                        <h3>DataTable: сортировка, закрепление колонок и плотность строк</h3>

                                        <p>
                                            Таблица дополнена тремя режимами плотности и закреплением первой колонки.
                                            Контракт props не изменился, поведение включается через свойства.
                                        </p>

                                        <span className="post-more">
                                            Открыть спецификацию
                                            <svg viewBox="0 0 24 24">
                                                <path d="M9 6l6 6-6 6" />
                                            </svg>
                                        </span>
                                    </span>
                                </SiteLink>

                                <SiteLink className="post" href="#" data-kind="ai">
                                    <span className="post-cover">
                                        <img src="/media/news/cover-mcp.svg" alt="" loading="lazy" />
                                        <span className="post-kind">AI и MCP</span>
                                    </span>

                                    <span className="post-body">
                                        <span className="post-meta">
                                            <span>4 сентября 2026</span>
                                            <span>·</span>
                                            <span>5 мин</span>
                                        </span>

                                        <h3>MCP-подключение: что уже доступно в бете и как читать контекст темы</h3>

                                        <p>
                                            Агент получает компоненты, токены и правила напрямую из системы. Разбираем
                                            состав методов, ограничения беты и как подключить тему продукта из Builder.
                                        </p>

                                        <span className="post-more">
                                            Как подключить
                                            <svg viewBox="0 0 24 24">
                                                <path d="M9 6l6 6-6 6" />
                                            </svg>
                                        </span>
                                    </span>
                                </SiteLink>

                                <SiteLink className="post" href="#" data-kind="guide">
                                    <span className="post-cover">
                                        <img src="/media/news/cover-forms.svg" alt="" loading="lazy" />
                                        <span className="post-kind">Гайдлайн</span>
                                    </span>

                                    <span className="post-body">
                                        <span className="post-meta">
                                            <span>28 августа 2026</span>
                                            <span>·</span>
                                            <span>6 мин</span>
                                        </span>

                                        <h3>Формы: когда валидировать на вводе, а когда на отправке</h3>

                                        <p>
                                            Обновили правила проверки полей: описали сценарии, в которых мгновенная
                                            валидация мешает, и добавили примеры сообщений об ошибке.
                                        </p>

                                        <span className="post-more">
                                            Читать гайдлайн
                                            <svg viewBox="0 0 24 24">
                                                <path d="M9 6l6 6-6 6" />
                                            </svg>
                                        </span>
                                    </span>
                                </SiteLink>

                                <SiteLink className="post" href="#" data-kind="component">
                                    <span className="post-cover">
                                        <img src="/media/news/cover-toast.svg" alt="" loading="lazy" />
                                        <span className="post-kind">Компонент</span>
                                    </span>

                                    <span className="post-body">
                                        <span className="post-meta">
                                            <span>21 августа 2026</span>
                                            <span>·</span>
                                            <span>2 мин</span>
                                        </span>

                                        <h3>Toast и Snackbar: единое поведение очереди уведомлений</h3>

                                        <p>
                                            Уведомления больше не перекрывают друг друга: очередь, приоритеты и время
                                            показа описаны в системе и одинаковы на всех платформах.
                                        </p>

                                        <span className="post-more">
                                            Посмотреть примеры
                                            <svg viewBox="0 0 24 24">
                                                <path d="M9 6l6 6-6 6" />
                                            </svg>
                                        </span>
                                    </span>
                                </SiteLink>

                                <SiteLink className="post" href="#" data-kind="release">
                                    <span className="post-cover">
                                        <img src="/media/news/cover-icons.svg" alt="" loading="lazy" />
                                        <span className="post-kind">Релиз</span>
                                    </span>

                                    <span className="post-body">
                                        <span className="post-meta">
                                            <span>14 августа 2026</span>
                                            <span>·</span>
                                            <span>3 мин</span>
                                        </span>

                                        <h3>Иконки: третий стиль Fill и правила выбора набора</h3>

                                        <p>
                                            К Outline и OutlineBold добавился Fill. В гайдлайне описано, какой стиль
                                            брать для навигации, статусов и акцентных действий.
                                        </p>

                                        <span className="post-more">
                                            Открыть набор
                                            <svg viewBox="0 0 24 24">
                                                <path d="M9 6l6 6-6 6" />
                                            </svg>
                                        </span>
                                    </span>
                                </SiteLink>

                                <SiteLink className="post" href="#" data-kind="guide">
                                    <span className="post-cover">
                                        <img src="/media/news/cover-contrast.svg" alt="" loading="lazy" />
                                        <span className="post-kind">Гайдлайн</span>
                                    </span>

                                    <span className="post-body">
                                        <span className="post-meta">
                                            <span>7 августа 2026</span>
                                            <span>·</span>
                                            <span>4 мин</span>
                                        </span>

                                        <h3>Доступность: контраст акцентов в тёмной теме</h3>

                                        <p>
                                            Разобрали типичные ошибки при подборе акцентного цвета и добавили проверку
                                            контраста прямо в конфигуратор темы.
                                        </p>

                                        <span className="post-more">
                                            Читать разбор
                                            <svg viewBox="0 0 24 24">
                                                <path d="M9 6l6 6-6 6" />
                                            </svg>
                                        </span>
                                    </span>
                                </SiteLink>
                            </div>
                        </div>

                        <aside>
                            <div className="side-card">
                                <h3>Последние версии</h3>

                                <div className="release-list">
                                    <div className="release-row">
                                        <b>1.5.0</b>
                                        <span>Размерная шкала и состояния через токены</span>
                                    </div>

                                    <div className="release-row">
                                        <b>1.4.2</b>
                                        <span>Исправления в DataTable и Select</span>
                                    </div>

                                    <div className="release-row">
                                        <b>1.4.0</b>
                                        <span>Набор иконок Fill, обновление Builder</span>
                                    </div>

                                    <div className="release-row">
                                        <b>1.3.1</b>
                                        <span>Контраст акцентов в тёмной теме</span>
                                    </div>
                                </div>
                            </div>

                            <div className="side-card">
                                <h3>Не пропускать обновления</h3>

                                <p>
                                    Раз в две недели присылаем дайджест: что вышло, что изменилось в правилах и что
                                    стоит обновить у себя.
                                </p>

                                <SiteLink className="side-cta" href="#">
                                    Подписаться в Telegram
                                </SiteLink>
                            </div>

                            <div className="side-card">
                                <h3>Нужен компонент?</h3>

                                <p>
                                    Если в системе нет нужного элемента — оставьте заявку. Разберём сценарий и вернёмся
                                    с решением.
                                </p>

                                <SiteLink className="side-cta" href="/contacts">
                                    Запросить компонент
                                </SiteLink>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </>
    );
}
