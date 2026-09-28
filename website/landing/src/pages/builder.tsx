import { Header, SiteFooter, SiteLink } from '../shared';

export default function BuilderPage() {
    return (
        <>
            <Header />

            <section className="section screen page-top hero-builder">
                <div className="shell">
                    <div className="hero-builder-text">
                        <span className="doc-tag">Бета</span>

                        <h1>
                            Тема проекта
                            <br />
                            <span className="dim">собирается в билдере</span>
                        </h1>

                        <div className="hero-builder-sub">
                            <p>
                                Настроить, проверить и опубликовать тему — без правок в коде компонентов и без сборки
                                пакетов.
                            </p>

                            <SiteLink className="text-link" href="#tokens">
                                Как это выглядит внутри
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>
                        </div>
                    </div>
                </div>

                <div className="hero-shot">
                    <div className="shell">
                        <figure>
                            <img
                                src="/media/builder/palette.webp"
                                alt="Экран палитры в DS Builder: дерево семейств, рампы ступеней и инспектор со связанными токенами"
                                width="2880"
                                height="1600"
                            />
                        </figure>
                    </div>
                </div>

                <div className="shell">
                    <div className="res-cards builder-values">
                        <div className="res-card">
                            <h3>Тема вместо форка</h3>

                            <ul>
                                <li>Значения токенов, шрифты и шкалы меняются в интерфейсе</li>

                                <li>Компоненты остаются системными и обновляются с релизами</li>
                            </ul>
                        </div>

                        <div className="res-card">
                            <h3>Проверка до публикации</h3>

                            <ul>
                                <li>Превью темы на реальных компонентах</li>

                                <li>Валидация показывает риски и затронутые объекты</li>
                            </ul>
                        </div>

                        <div className="res-card">
                            <h3>Версия как результат</h3>

                            <ul>
                                <li>Публикация фиксирует конфигурацию под номером версии</li>

                                <li>Разработчик получает её через CLI, а не через npm-пакет от нас</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section screen" id="tokens">
                <div className="shell">
                    <div className="split-row">
                        <h2>
                            Меняется значение,
                            <br />
                            <span className="dim">а не код компонентов</span>
                        </h2>

                        <div className="split-text">
                            <p>
                                Продукт правит значения, а не библиотеку: ступень палитры, набор типографики, шкалу
                                отступов. Токены, которые ссылаются на изменённое значение, пересчитываются сами —
                                инспектор показывает их списком, а превью сразу отражает результат.
                            </p>

                            <SiteLink className="text-link" href="/docs/theming">
                                Как устроены токены
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>
                        </div>
                    </div>

                    <figure className="shot">
                        <img
                            src="/media/builder/color-tokens.webp"
                            alt="Экран цветовых токенов: дерево семантических токенов, превью пар Light и Dark, инспектор с темами по умолчанию и подтемами"
                            loading="lazy"
                        />

                        <figcaption>
                            Экран «Цветовые токены»: слева семантические токены, в центре пары Light и Dark, справа —
                            значения по умолчанию и подтемы OnDark, OnLight, Inverse
                        </figcaption>
                    </figure>

                    <div className="feature-row">
                        <span className="eyebrow">Основания</span>

                        <div className="feature-cols">
                            <SiteLink className="text-link" href="/docs/theming">
                                Токены темы
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>

                            <SiteLink className="text-link" href="/docs/sizes">
                                Размерная шкала
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>

                            <SiteLink className="text-link" href="/docs/corner-radius">
                                Скругления
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>
                        </div>

                        <div className="feature-cols">
                            <SiteLink className="text-link" href="/docs/states">
                                Состояния
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>

                            <SiteLink className="text-link" href="/docs/accessibility">
                                Доступность
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>

                            <SiteLink className="text-link" href="/docs">
                                Компоненты
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section screen" id="flow">
                <div className="shell">
                    <div className="split-row">
                        <h2>
                            Путь от правки
                            <br />
                            <span className="dim">до версии в продукте</span>
                        </h2>

                        <div className="split-text">
                            <p>
                                Работа идёт по уровням: проект — дизайн-система — тема. Изменения собираются в черновик,
                                проверяются и публикуются одной версией. Ревью и согласования в этом пути нет: валидация
                                сообщает о рисках, но не блокирует публикацию.
                            </p>

                            <SiteLink className="text-link" href="/docs">
                                Документация системы
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>
                        </div>
                    </div>

                    <ol className="flow-chain">
                        <li>
                            <b>Проект и дизайн-система</b>

                            <p>
                                Каталог проектов, внутри — дизайн-системы и их темы. Участники и роли живут на уровне
                                проекта.
                            </p>
                        </li>

                        <li>
                            <b>Тема</b>

                            <p>Название, preset, светлый и тёмный режимы. Дальше — правка оснований и компонентов.</p>
                        </li>

                        <li>
                            <b>Черновик изменений</b>

                            <p>
                                Каждая правка попадает в Changes: старое и новое значение, автор, дата, затронутые
                                объекты.
                            </p>
                        </li>

                        <li>
                            <b>Превью и валидация</b>

                            <p>
                                Результат виден на компонентах; из проблемы можно перейти к её источнику и исправить
                                значение.
                            </p>
                        </li>

                        <li>
                            <b>Публикация</b>

                            <p>Выбранные изменения становятся версией конфигурации со снимком состояния темы.</p>
                        </li>

                        <li>
                            <b>CLI у разработчика</b>

                            <p>CLI забирает выбранную версию и генерирует файлы для платформы проекта.</p>
                        </li>
                    </ol>
                </div>
            </section>

            <section className="section screen">
                <div className="shell">
                    <div className="split-row">
                        <h2>
                            Что настраивается
                            <br />
                            <span className="dim">в теме</span>
                        </h2>

                        <div className="split-text">
                            <p>
                                Основания темы правятся по одному сценарию: раздел → объект в рабочей области → то же в
                                инспекторе → новое значение → результат в превью и в черновике. Выбор объекта сам по
                                себе ничего не меняет.
                            </p>

                            <SiteLink className="text-link" href="/docs/theming">
                                Как устроены токены
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>
                        </div>
                    </div>

                    <div className="doc-table-wrap">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Основание</th>
                                    <th>Что меняется</th>
                                    <th>Контексты и режимы</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <b>Палитра и цвет</b>
                                    </td>
                                    <td>Ступени палитры, перестройка рампы от бренд-цвета, значения токенов</td>
                                    <td>Light / Dark; Default, OnDark, OnLight, Inverse</td>
                                </tr>

                                <tr>
                                    <td>
                                        <b>Типографика</b>
                                    </td>
                                    <td>Наборы типографических токенов</td>
                                    <td>Large / Medium / Small</td>
                                </tr>

                                <tr>
                                    <td>
                                        <b>Отступы</b>
                                    </td>
                                    <td>Шкала spacing со своим представлением</td>
                                    <td>—</td>
                                </tr>

                                <tr>
                                    <td>
                                        <b>Скругления</b>
                                    </td>
                                    <td>Шкала radius со своим представлением</td>
                                    <td>—</td>
                                </tr>

                                <tr>
                                    <td>
                                        <b>Компоненты</b>
                                    </td>
                                    <td>Разрешённая конфигурация компонента</td>
                                    <td>Демонстрационные свойства в превью черновик не меняют</td>
                                </tr>

                                <tr>
                                    <td>
                                        <b>Подтемы</b>
                                    </td>
                                    <td>Значения токена для инверсных поверхностей</td>
                                    <td>OnDark, OnLight, Inverse — каждая со своими Light и Dark</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout">
                        <b>Правки палитры считаются наравне с токенами</b>

                        <p>
                            Точечная замена ступени и перестройка рампы входят в счётчик публикации, сбрасываются через
                            Reset и попадают в снимок версии. База для сравнения — состояние палитры на момент последней
                            публикации, поэтому уже опубликованные правки новыми не считаются.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section screen">
                <div className="shell">
                    <div className="split-row">
                        <h2>
                            Изменения, проверка
                            <br />
                            <span className="dim">и версии</span>
                        </h2>

                        <div className="split-text">
                            <p>
                                {
                                    'Отдельного статуса «черновик / опубликовано» в интерфейсе нет: факт публикации выводится из номера версии — '
                                }
                                <code>0.1.0</code>
                                {
                                    ' означает, что тема ещё не публиковалась. В списке тем показывается признак «есть изменения» — его из номера не вывести.'
                                }
                            </p>
                        </div>
                    </div>

                    <div className="res-cards">
                        <div className="res-card">
                            <h3>Changes</h3>

                            <ul>
                                <li>Изменения черновика относительно его базы</li>

                                <li>Строка открывает детали, переход — источник значения</li>

                                <li>Revert отменяет конкретное изменение</li>
                            </ul>
                        </div>

                        <div className="res-card">
                            <h3>Validation</h3>

                            <ul>
                                <li>Причины и затронутые объекты для той же ревизии черновика</li>

                                <li>Исключение оформляется как исключение, а не как исправление</li>

                                <li>Публикацию не блокирует</li>
                            </ul>
                        </div>

                        <div className="res-card">
                            <h3>Versions</h3>

                            <ul>
                                <li>Версия хранит снимок состояния темы</li>

                                <li>Ошибка CLI не отменяет уже опубликованную версию</li>

                                <li>Номер меняется только в момент публикации</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section screen">
                <div className="shell">
                    <div className="split-row">
                        <h2>
                            Роли
                            <br />
                            <span className="dim">и доступ</span>
                        </h2>

                        <div className="split-text">
                            <p>
                                Права назначаются в рамках участия в проекте: один человек может иметь разные роли в
                                разных проектах. Дизайн-системы и темы наследуют доступы проекта — отдельного управления
                                участниками на их уровне нет.
                            </p>
                        </div>
                    </div>

                    <div className="doc-table-wrap">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Роль</th>
                                    <th>Что может</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <b>Owner</b>
                                    </td>
                                    <td>Владелец проекта: максимальная ответственность и полный доступ</td>
                                </tr>

                                <tr>
                                    <td>
                                        <b>Editor</b>
                                    </td>
                                    <td>Редактирует темы, проверяет и публикует изменения</td>
                                </tr>

                                <tr>
                                    <td>
                                        <b>Viewer</b>
                                    </td>
                                    <td>Смотрит состояние, версии и результаты без редактирования</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="note-line">
                        Разработчик — потребитель опубликованной конфигурации через CLI, отдельная роль в билдере ему не
                        нужна. При доступе к проекту достаточно Viewer.
                    </p>
                </div>
            </section>

            <section className="section screen">
                <div className="shell">
                    <div className="split-row">
                        <h2>
                            Figma и билдер
                            <br />
                            <span className="dim">один черновик темы</span>
                        </h2>

                        <div className="split-text">
                            <p>
                                {
                                    'Figma и билдер — два инструмента авторства одной темы. Перенос ручной: плагин выгружает '
                                }
                                <code>tokens.json</code>, билдер принимает файл из верхней панели темы.
                            </p>
                        </div>
                    </div>

                    <div className="res-cards">
                        <div className="res-card">
                            <h3>Что делает плагин</h3>

                            <ul>
                                <li>Локальный импорт и экспорт без сети</li>

                                <li>Проверка схемы и preflight до применения</li>

                                <li>Учёт коллекций и алиасов, стабильные ключи Figma</li>
                            </ul>
                        </div>

                        <div className="res-card">
                            <h3>Что делает билдер при импорте</h3>

                            <ul>
                                <li>Сверяет версию формата и контрольную сумму</li>

                                <li>Сопоставляет значения с опубликованной базой и черновиком</li>

                                <li>Показывает Import Review и требует выбрать сторону в конфликтах</li>

                                <li>Пишет результат одним действием в Changes</li>
                            </ul>
                        </div>

                        <div className="res-card">
                            <h3>Границы</h3>

                            <ul>
                                <li>Импорт не удаляет отсутствующие токены</li>

                                <li>Версия не публикуется автоматически</li>

                                <li>Публикация — только через билдер</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section screen">
                <div className="shell">
                    <div className="split-row">
                        <h2>
                            Статус
                            <br />
                            <span className="dim">и что дальше</span>
                        </h2>

                        <div className="split-text">
                            <p>
                                Билдер в бете: пути описаны как целевое поведение, и не все ветки подтверждены
                                реализацией. Если сценарий расходится с описанным — это повод написать команде, а не
                                обходить.
                            </p>

                            <SiteLink className="text-link" href="/contacts">
                                Написать команде
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </SiteLink>
                        </div>
                    </div>

                    <div className="metrics">
                        <div>
                            <b>1974</b>
                            <span>токена в проверке на реальном legacy-файле</span>
                        </div>

                        <div>
                            <b>484</b>
                            <span>алиаса без альтернативной цели — их плагин не угадывает</span>
                        </div>

                        <div>
                            <b>3</b>
                            <span>роли в проекте: Owner, Editor, Viewer</span>
                        </div>

                        <div>
                            <b>0.1.0</b>
                            <span>номер темы, которая ещё не публиковалась</span>
                        </div>
                    </div>

                    <div className="doc-cards">
                        <SiteLink className="doc-card" href="/docs/theming">
                            <span className="doc-card-media">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <circle cx="9.5" cy="12" r="6" />
                                    <circle cx="15" cy="12" r="6" />
                                </svg>
                            </span>

                            <span className="doc-card-body">
                                <span className="doc-card-head">
                                    <b>Токены и темы</b>
                                </span>

                                <p>
                                    Архитектура семантических токенов: как построить тему и чем ограничены её значения.
                                </p>

                                <span className="doc-card-foot">Документация · основы</span>
                            </span>
                        </SiteLink>

                        <SiteLink className="doc-card" href="/docs/sizes">
                            <span className="doc-card-media">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M4 20v-5M10 20V10M16 20V5M4 20h16" />
                                </svg>
                            </span>

                            <span className="doc-card-body">
                                <span className="doc-card-head">
                                    <b>Размерная шкала</b>
                                </span>

                                <p>Ступени размера и их связь с типографикой — то, что тема настраивает в билдере.</p>

                                <span className="doc-card-foot">Документация · основы</span>
                            </span>
                        </SiteLink>

                        <SiteLink className="doc-card" href="/news">
                            <span className="doc-card-media">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6 3h8l4 4v14H6zM14 3v4h4" />
                                    <path d="M9 12h6M9 16h4" />
                                </svg>
                            </span>

                            <span className="doc-card-body">
                                <span className="doc-card-head">
                                    <b>Что меняется</b>
                                </span>

                                <p>Релизы системы и билдера: новые возможности, исправления и правила миграции.</p>

                                <span className="doc-card-foot">Новости портала</span>
                            </span>
                        </SiteLink>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </>
    );
}
