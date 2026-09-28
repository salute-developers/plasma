import { Header, SiteFooter, SiteLink, parseStyle } from '../shared';

export default function IndexPage() {
    return (
        <>
            <div className="float-preview" id="floatPreview">
                <img alt="" id="floatImg" />
            </div>

            <Header />

            <section className="hero">
                <div className="hero-media">
                    <video
                        id="heroVideo"
                        src="/media/hero-loop.mp4"
                        poster="/media/hero-frame.webp"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />
                </div>

                <div className="hero-scrim" />

                <div className="hero-inner">
                    <div className="hero-head">
                        <h1>
                            <span>
                                <span className="plate" data-text="Разные">
                                    Разные
                                </span>{' '}
                                <span className="plate" data-text="продукты">
                                    продукты
                                </span>
                            </span>
                            <span>
                                <span className="plate" data-text="Одна">
                                    Одна
                                </span>{' '}
                                <span className="accent">
                                    основа
                                    <span className="selection" aria-hidden="true">
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                    </span>
                                </span>
                            </span>
                        </h1>

                        <p className="subtitle">
                            Инфраструктура для создания продуктовых дизайн-систем. Компоненты, токены, плагины и
                            инструменты, на которых команды создают свои дизайн-системы.
                        </p>
                    </div>

                    <div>
                        <div className="resume" id="resume">
                            <p>Вы уже начинали работу в билдере</p>

                            <div className="spacer" />

                            <SiteLink href="#">Продолжить в билдере</SiteLink>

                            <button type="button" id="resumeReset">
                                Сбросить
                            </button>
                        </div>

                        <div className="hero-cards">
                            <div className="hero-card">
                                <span className="hero-card-glass" aria-hidden="true" />
                                <span className="hero-card-frame" aria-hidden="true" />

                                <div className="hero-figure">80+</div>

                                <div className="hero-card-text">
                                    <h2>Компонентов</h2>
                                    <p>Готовы закрыть любой продуктовый сценарий.</p>
                                </div>
                            </div>

                            <div className="hero-card">
                                <span className="hero-card-glass" aria-hidden="true" />
                                <span className="hero-card-frame" aria-hidden="true" />

                                <div className="hero-figure">4</div>

                                <div className="hero-card-text">
                                    <h2>Платформы</h2>
                                    <p>Web, iOS, Android и TV на одной библиотеке.</p>
                                </div>
                            </div>

                            <div className="hero-card">
                                <span className="hero-card-glass" aria-hidden="true" />
                                <span className="hero-card-frame" aria-hidden="true" />

                                <div className="hero-figure">1000+</div>

                                <div className="hero-card-text">
                                    <h2>Иконок</h2>
                                    <p>Три стиля: Outline, OutlineBold и Fill.</p>
                                </div>
                            </div>

                            <div className="hero-card">
                                <span className="hero-card-glass" aria-hidden="true" />
                                <span className="hero-card-frame" aria-hidden="true" />

                                <div className="hero-figure">AA</div>

                                <div className="hero-card-text">
                                    <h2>Доступность</h2>
                                    <p>WCAG 2.1 из коробки — для всех продуктов сразу.</p>
                                </div>
                            </div>
                        </div>

                        <SiteLink className="hero-scroll" href="#teams">
                            <span>Смотреть дальше</span>

                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 4v14M6 12.5 12 19l6-6.5" />
                            </svg>
                        </SiteLink>
                    </div>
                </div>
            </section>

            <section className="section screen" id="teams">
                <div className="shell">
                    <div className="teams-head">
                        <h2>
                            С нами уже работают
                            <span className="dim">шестнадцать команд Сбера</span>
                        </h2>

                        <p>У каждой команды своя тема и свой бренд — библиотека, токены и правила остаются общими.</p>
                    </div>

                    <div className="teams-grid">
                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#3b78ff"
                            data-radius="20"
                            data-weight="600"
                        >
                            <b>GigaChat</b>
                            <span>AI</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#24b23e"
                            data-radius="28"
                            data-weight="500"
                        >
                            <b>HomeOS</b>
                            <span>TV</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#6d5dfc"
                            data-radius="16"
                            data-weight="600"
                        >
                            <b>SberDevices</b>
                            <span>Web</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#0ea5b0"
                            data-radius="12"
                            data-weight="500"
                        >
                            <b>FinAI</b>
                            <span>Данные</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#e0518a"
                            data-radius="18"
                            data-weight="600"
                        >
                            <b>PlatformAI</b>
                            <span>ML</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#f7b733"
                            data-radius="24"
                            data-weight="500"
                        >
                            <b>SberScan</b>
                            <span>Mobile</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#29ad18"
                            data-radius="14"
                            data-weight="600"
                        >
                            <b>Sber Com</b>
                            <span>Web</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#1f6feb"
                            data-radius="22"
                            data-weight="500"
                        >
                            <b>Нетология</b>
                            <span>Обучение</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#2f8f6b"
                            data-radius="16"
                            data-weight="600"
                        >
                            <b>СберСтрахование</b>
                            <span>Web</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#d4642a"
                            data-radius="20"
                            data-weight="500"
                        >
                            <b>СберИндия</b>
                            <span>Web</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#8a8f98"
                            data-radius="10"
                            data-weight="600"
                        >
                            <b>SDDS OS</b>
                            <span>Система</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#4a5bd4"
                            data-radius="18"
                            data-weight="500"
                        >
                            <b>SDDS DFA</b>
                            <span>Финтех</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#21a038"
                            data-radius="24"
                            data-weight="600"
                        >
                            <b>GigaCosmos</b>
                            <span>Web</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#0f8f8f"
                            data-radius="14"
                            data-weight="500"
                        >
                            <b>Bizcom</b>
                            <span>Web</span>
                        </SiteLink>

                        <SiteLink
                            className="team-cell"
                            href="#products"
                            data-brand="#b36bff"
                            data-radius="26"
                            data-weight="600"
                        >
                            <b>StarDS</b>
                            <span>Медиа</span>
                        </SiteLink>

                        <SiteLink className="team-cell more" href="#products">
                            <b>и другие →</b>
                        </SiteLink>
                    </div>

                    <div className="team-peek" id="teamPeek" aria-hidden="true">
                        <div className="peek-head">
                            <span className="peek-name" />

                            <span className="peek-meta" />
                        </div>

                        <div className="peek-palette" aria-hidden="true">
                            <div className="peek-bars" />
                        </div>

                        <div className="peek-type">
                            <span className="peek-label">Typography</span>

                            <b className="peek-aa">Aa</b>

                            <span className="peek-sample">Аа Бб Вв Гг Дд</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section screen" id="theme">
                <div className="shell">
                    <div className="screen-head">
                        <h2>
                            {'Меняется тема, '}
                            <span className="dim">а не система</span>
                        </h2>

                        <p>
                            Компоненты, размеры и правила остаются общими. Продукт меняет цвет, типографику и радиусы —
                            через значения темы, а не через правку библиотеки.
                        </p>
                    </div>

                    <div className="app-window" id="builderWindow">
                        <div className="release-bar" aria-hidden="true">
                            <i />
                        </div>

                        <div className="app-titlebar">
                            <span className="app-dots" aria-hidden="true">
                                <i />
                                <i />
                                <i />
                            </span>

                            <span className="app-title">
                                <b>SDDS Builder</b>
                                <i>{' · тема продукта'}</i>
                            </span>

                            <span className="app-actions">
                                <button type="button" id="layerToggle" aria-controls="stage" aria-pressed="false">
                                    Показать слои
                                </button>

                                <button
                                    type="button"
                                    id="propsBtn"
                                    aria-controls="builderProps"
                                    aria-expanded="false"
                                    aria-label="Настроить тему"
                                >
                                    <svg className="ico" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M3 6h7M14 6h3M3 14h3M10 14h7" />
                                        <circle cx="12" cy="6" r="2" />
                                        <circle cx="8" cy="14" r="2" />
                                    </svg>
                                </button>

                                <button type="button" className="primary" id="releaseBtn">
                                    <svg className="ico" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M10 2.2c2.1 2.1 3.3 4.8 3.3 7.6 0 1.3-.3 2.6-.8 3.8H7.5c-.5-1.2-.8-2.5-.8-3.8 0-2.8 1.2-5.5 3.3-7.6Z" />
                                        <circle cx="10" cy="8.2" r="1.5" />
                                        <path d="M7 10.6 4.9 12.8c-.3.3-.5.7-.5 1.1v1.9l2.7-1.3M13 10.6l2.1 2.2c.3.3.5.7.5 1.1v1.9l-2.7-1.3" />
                                        <path d="M8.8 15.6c.3.9.7 1.5 1.2 2 .5-.5.9-1.1 1.2-2" />
                                    </svg>

                                    <span className="label">Выпустить версию</span>
                                </button>
                            </span>
                        </div>

                        <div className="release-steps" id="releaseSteps" aria-hidden="true">
                            <div className="release-step">
                                <span className="dot" />
                                Сборка токенов
                            </div>

                            <div className="release-step">
                                <span className="dot" />
                                Проверка контраста
                            </div>

                            <div className="release-step">
                                <span className="dot" />
                                Публикация пакета
                            </div>
                        </div>

                        <div className="release-done" id="releaseDone" aria-hidden="true">
                            <div className="release-card">
                                <span className="release-ver">v1.5.0</span>

                                <strong>Версия выпущена</strong>

                                <p>
                                    Тема продукта собрана и доступна командам. Изменения подтянутся при следующей
                                    синхронизации.
                                </p>
                            </div>
                        </div>

                        <div className="app-body">
                            <div className="ws-stage" id="stage">
                                <div className="ws-top">
                                    <span className="mono">Одна структура / разный характер</span>

                                    <span className="mono">01 / 04 · live preview</span>
                                </div>

                                <div className="composition">
                                    <span className="layer-label label-type">Типографика</span>

                                    <div className="sample-type">
                                        <span className="mono">Typography</span>

                                        <span className="type-glyph">Aa</span>

                                        <span className="type-baseline">
                                            <span>Аа Бб Вв Гг Дд</span>
                                            <span>123</span>
                                        </span>
                                    </div>

                                    <span className="layer-label label-color">Палитра</span>

                                    <div className="sample-ramp">
                                        <i style={parseStyle('--ramp:#13300f')} />
                                        <i style={parseStyle('--ramp:#1f6b16')} />
                                        <i style={parseStyle('--ramp:#29ad18')} />
                                        <i style={parseStyle('--ramp:#8ed684')} />
                                        <i style={parseStyle('--ramp:#e4f1e1')} />
                                    </div>

                                    <span className="layer-label label-component">Компонент</span>

                                    <div className="sample-card">
                                        <div className="sample-card-top">
                                            <span className="sample-mark" aria-hidden="true">
                                                <i />
                                                <i />
                                                <i />
                                            </span>

                                            <span className="sample-badge">Рабочее пространство</span>
                                        </div>

                                        <h3>Место для идей.</h3>

                                        <p>Соберите команду вокруг своего продукта.</p>

                                        <input
                                            className="specimen-field"
                                            defaultValue="Новый продукт"
                                            aria-label="Название продукта"
                                        />

                                        <div className="sample-bottom">
                                            <span className="sample-avatars">
                                                <span>А</span>
                                                <span>М</span>
                                                <span>+2</span>
                                            </span>

                                            <button type="button" className="sample-submit">
                                                Создать →
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <span className="cross cross-a" aria-hidden="true">
                                    +
                                </span>

                                <span className="cross cross-b" aria-hidden="true">
                                    +
                                </span>
                            </div>

                            <aside className="props" id="builderProps">
                                <div className="props-head">
                                    {'Конфигуратор тем\n            '}
                                    <button type="button" className="props-close" aria-label="Закрыть настройки">
                                        <svg viewBox="0 0 20 20" aria-hidden="true">
                                            <path d="m6 6 8 8M14 6l-8 8" />
                                        </svg>
                                    </button>
                                </div>

                                <section className="prop-group">
                                    <h4>Палитра</h4>

                                    <div className="swatches" id="toneList">
                                        <button
                                            type="button"
                                            className="swatch"
                                            style={parseStyle('--tone:#29ad18')}
                                            data-tone="0"
                                            aria-pressed="true"
                                            aria-label="Базовая"
                                        />

                                        <button
                                            type="button"
                                            className="swatch"
                                            style={parseStyle('--tone:#2b8ced')}
                                            data-tone="1"
                                            aria-pressed="false"
                                            aria-label="Сдержанная"
                                        />

                                        <button
                                            type="button"
                                            className="swatch"
                                            style={parseStyle('--tone:#f0762b')}
                                            data-tone="2"
                                            aria-pressed="false"
                                            aria-label="Тёплая"
                                        />

                                        <button
                                            type="button"
                                            className="swatch"
                                            style={parseStyle('--tone:#7c5cff')}
                                            data-tone="3"
                                            aria-pressed="false"
                                            aria-label="Контрастная"
                                        />
                                    </div>

                                    <div className="prop-row">
                                        <span>SurfaceAccent</span>
                                        <b id="pHex">#29AD18</b>
                                    </div>
                                </section>

                                <section className="prop-group">
                                    <h4>Форма</h4>

                                    <div className="prop-slider">
                                        <input
                                            type="range"
                                            min="0"
                                            max="28"
                                            defaultValue="12"
                                            id="pRadius"
                                            aria-label="Радиус скругления"
                                        />

                                        <b id="pRadiusVal">12 px</b>
                                    </div>
                                </section>

                                <section className="prop-group">
                                    <h4>Размер</h4>

                                    <div className="seg" id="pSize">
                                        <button type="button" data-size="s" aria-pressed="false">
                                            S
                                        </button>

                                        <button type="button" data-size="m" aria-pressed="true">
                                            M
                                        </button>

                                        <button type="button" data-size="l" aria-pressed="false">
                                            L
                                        </button>
                                    </div>

                                    <div className="prop-row">
                                        <span>Высота контролов</span>
                                        <b id="pHeight">48 px</b>
                                    </div>
                                </section>

                                <section className="prop-group">
                                    <h4>Начертание</h4>

                                    <div className="seg" id="pWeight">
                                        <button type="button" data-weight="400" aria-pressed="false">
                                            Regular
                                        </button>

                                        <button type="button" data-weight="500" aria-pressed="true">
                                            Medium
                                        </button>

                                        <button type="button" data-weight="600" aria-pressed="false">
                                            Semibold
                                        </button>
                                    </div>
                                </section>

                                <div className="props-foot">
                                    <span id="toneIndex">01 / 04</span>

                                    <span>Live preview</span>
                                </div>
                            </aside>
                        </div>

                        <div className="props-scrim" id="propsScrim" aria-hidden="true" />
                    </div>
                </div>
            </section>

            <section className="section screen" id="products">
                <div className="shell">
                    <div className="screen-head">
                        <h2>
                            Одна система
                            <br />
                            <span className="dim">от чата до телевизора</span>
                        </h2>

                        <p>
                            GigaChat в вебе, HomeOS на Smart TV и другие продукты собраны из компонентов SDDS. Разные
                            платформы, размеры и бренды — общий набор токенов и правил.
                        </p>
                    </div>
                </div>

                <div className="showcase-pin-wrap">
                    <div className="showcase-pin">
                        <div className="showcase-stage" role="group" aria-label="Продукты на SDDS">
                            <figure className="showcase-slide is-active" style={parseStyle('--sc-accent:#3b78ff')}>
                                <div className="showcase-media">
                                    <div className="showcase-placeholder">
                                        <span>GigaChat</span>
                                        <small>реальный скриншот</small>
                                    </div>

                                    <img
                                        src="/assets/giga.webp"
                                        alt="Интерфейс GigaChat"
                                        width="1280"
                                        height="800"
                                        loading="lazy"
                                        draggable="false"
                                    />
                                </div>

                                <figcaption>
                                    <div className="showcase-cap-head">
                                        <strong>GigaChat</strong>
                                        <span className="showcase-badge">Web · Desktop</span>
                                    </div>

                                    <p>
                                        ИИ-помощник: чат, боковая навигация, инструменты и голосовой режим — плотный
                                        продуктовый интерфейс.
                                    </p>
                                </figcaption>
                            </figure>

                            <figure className="showcase-slide" style={parseStyle('--sc-accent:#29ad18')}>
                                <div className="showcase-media">
                                    <div className="showcase-placeholder">
                                        <span>HomeOS</span>
                                        <small>реальный скриншот</small>
                                    </div>

                                    <img
                                        src="/assets/homeos.webp"
                                        alt="Интерфейс HomeOS"
                                        width="1280"
                                        height="800"
                                        loading="lazy"
                                        draggable="false"
                                    />
                                </div>

                                <figcaption>
                                    <div className="showcase-cap-head">
                                        <strong>HomeOS</strong>
                                        <span className="showcase-badge">Smart TV</span>
                                    </div>

                                    <p>
                                        Медиа-витрина на большом экране: крупные размеры, десятифутовый интерфейс и
                                        навигация пультом.
                                    </p>
                                </figcaption>
                            </figure>

                            <figure className="showcase-slide" style={parseStyle('--sc-accent:#6d5dfc')}>
                                <div className="showcase-media">
                                    <div className="showcase-placeholder">
                                        <span>SberDevices</span>
                                        <small>реальный скриншот</small>
                                    </div>

                                    <img
                                        src="/assets/sberdevices.jpg"
                                        alt="Интерфейс SberDevices"
                                        width="1280"
                                        height="800"
                                        loading="lazy"
                                        draggable="false"
                                    />
                                </div>

                                <figcaption>
                                    <div className="showcase-cap-head">
                                        <strong>SberDevices</strong>
                                        <span className="showcase-badge">Web</span>
                                    </div>

                                    <p>Портал устройств и сервисов: карточки, таблицы и настройки на общих токенах.</p>
                                </figcaption>
                            </figure>

                            <figure className="showcase-slide" style={parseStyle('--sc-accent:#0ea5b0')}>
                                <div className="showcase-media">
                                    <div className="showcase-placeholder">
                                        <span>FinAI</span>
                                        <small>реальный скриншот</small>
                                    </div>

                                    <video
                                        preload="none"
                                        data-src="/assets/finai.webm"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        disablePictureInPicture
                                        aria-label="Интерфейс FinAI"
                                    />
                                </div>

                                <figcaption>
                                    <div className="showcase-cap-head">
                                        <strong>FinAI</strong>
                                        <span className="showcase-badge">Web · Desktop</span>
                                    </div>

                                    <p>
                                        Аналитический интерфейс с плотными данными, графиками и формами — размеры XS–M.
                                    </p>
                                </figcaption>
                            </figure>

                            <figure className="showcase-slide" style={parseStyle('--sc-accent:#e0518a')}>
                                <div className="showcase-media">
                                    <div className="showcase-placeholder">
                                        <span>PlatformAI</span>
                                        <small>реальный скриншот</small>
                                    </div>

                                    <video
                                        preload="none"
                                        data-src="/assets/platformai.webm"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        disablePictureInPicture
                                        aria-label="Интерфейс PlatformAI"
                                    />
                                </div>

                                <figcaption>
                                    <div className="showcase-cap-head">
                                        <strong>PlatformAI</strong>
                                        <span className="showcase-badge">Web</span>
                                    </div>

                                    <p>Рабочее пространство ML-платформы: навигация, панели и статусы процессов.</p>
                                </figcaption>
                            </figure>

                            <figure className="showcase-slide" style={parseStyle('--sc-accent:#f7b733')}>
                                <div className="showcase-media">
                                    <div className="showcase-placeholder">
                                        <span>SberScan</span>
                                        <small>реальный скриншот</small>
                                    </div>

                                    <img
                                        src="/assets/sberscan.webp"
                                        alt="Интерфейс SberScan"
                                        width="1280"
                                        height="800"
                                        loading="lazy"
                                        draggable="false"
                                    />
                                </div>

                                <figcaption>
                                    <div className="showcase-cap-head">
                                        <strong>SberScan</strong>
                                        <span className="showcase-badge">iOS · Android</span>
                                    </div>

                                    <p>Мобильный сценарий: touch-размеры L–XL, safe-area и платформенные паттерны.</p>
                                </figcaption>
                            </figure>

                            <div className="showcase-dots" role="tablist" aria-label="Продукты">
                                <button type="button" className="is-active" data-index="0" aria-label="GigaChat" />
                                <button type="button" className="" data-index="1" aria-label="HomeOS" />
                                <button type="button" className="" data-index="2" aria-label="SberDevices" />
                                <button type="button" className="" data-index="3" aria-label="FinAI" />
                                <button type="button" className="" data-index="4" aria-label="PlatformAI" />
                                <button type="button" className="" data-index="5" aria-label="SberScan" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section screen" id="ai">
                <div className="shell">
                    <div className="screen-head">
                        <h2>
                            Builder — knowledge layer:
                            <br />
                            <span className="dim">ядро, из которого берут контекст</span>
                        </h2>

                        <p>
                            Тему собирают руками в конфигураторе: цвет, радиусы, размеры, начертание. Builder хранит её
                            версии и правила системы, агенты и плагины читают оттуда актуальные значения, продукты
                            применяют ту же тему — копий и расхождений не возникает.
                        </p>
                    </div>

                    <div className="kn-stage is-light" id="knStage">
                        <svg className="kn-wires" id="knWires" aria-hidden="true" />

                        <article className="kn-card kn-in" data-node="agent" style={parseStyle('--kx:0; --ky:0')}>
                            <header>
                                <b>AI-агент</b>
                                <span>CLIENT</span>
                            </header>

                            <div className="kn-body">
                                <div className="kn-params">
                                    <div>
                                        Контекст
                                        <i>
                                            <u style={parseStyle('width:82%')} />
                                        </i>
                                    </div>

                                    <div>
                                        Глубина
                                        <i>
                                            <u style={parseStyle('width:54%')} />
                                        </i>
                                    </div>
                                </div>

                                <p className="kn-note">components · tokens · rules</p>
                            </div>

                            <span className="kn-port out" />
                        </article>

                        <article className="kn-card kn-in" data-node="mcp" style={parseStyle('--kx:0; --ky:1')}>
                            <header>
                                <b>MCP</b>
                                <span>PROTOCOL</span>
                            </header>

                            <div className="kn-body">
                                <div className="kn-params">
                                    <div>
                                        Методы
                                        <i>
                                            <u style={parseStyle('width:66%')} />
                                        </i>
                                    </div>

                                    <div>
                                        Версия схемы
                                        <i>
                                            <u style={parseStyle('width:40%')} />
                                        </i>
                                    </div>
                                </div>

                                <p className="kn-note">бета · состав меняется</p>
                            </div>

                            <span className="kn-port out" />
                        </article>

                        <article className="kn-card kn-in" data-node="plugin" style={parseStyle('--kx:0; --ky:2')}>
                            <header>
                                <b>Плагин Figma/Pixso</b>
                                <span>CLIENT</span>
                            </header>

                            <div className="kn-body">
                                <div className="kn-params">
                                    <div>
                                        Библиотека
                                        <i>
                                            <u style={parseStyle('width:92%')} />
                                        </i>
                                    </div>

                                    <div>
                                        Синхронизация
                                        <i>
                                            <u style={parseStyle('width:71%')} />
                                        </i>
                                    </div>
                                </div>

                                <p className="kn-note">компоненты и стили</p>
                            </div>

                            <span className="kn-port out" />
                        </article>

                        <article className="kn-card kn-core-card" data-node="core">
                            <header>
                                <b>SDDS Builder</b>
                                <span>CORE</span>
                            </header>

                            <div className="kn-body">
                                <div className="kn-core-body">
                                    <div className="kn-orb" aria-hidden="true">
                                        <span className="kn-halo" />

                                        <span className="kn-orbit o1">
                                            <i />
                                            <i />
                                        </span>

                                        <span className="kn-orbit o2">
                                            <i />
                                            <i />
                                            <i />
                                        </span>

                                        <span className="kn-orbit o3">
                                            <i />
                                        </span>

                                        <span className="kn-orb-dot" />
                                    </div>

                                    <div className="kn-rows">
                                        <span>
                                            Токены
                                            <b>цвет · шрифт · радиусы</b>
                                        </span>

                                        <span>
                                            Правила
                                            <b>размеры и состояния</b>
                                        </span>

                                        <span>
                                            Компоненты
                                            <b>контракты и варианты</b>
                                        </span>

                                        <span>
                                            Версия темы
                                            <b>v1.5.0</b>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <span className="kn-port in" />

                            <span className="kn-port out" />

                            <span className="kn-port down" />
                        </article>

                        <article className="kn-card kn-edit" data-node="team">
                            <header>
                                <b>Команда SDDS</b>
                                <span>MAINTAINER</span>
                            </header>

                            <div className="kn-body">
                                <div className="kn-edit-list">
                                    <span className="kn-edit-row">
                                        <i aria-hidden="true">+</i>
                                        Доработка
                                        <b>компоненты и правила</b>
                                    </span>

                                    <span className="kn-edit-row">
                                        <i aria-hidden="true">◎</i>
                                        Мониторинг
                                        <b>использование и статусы</b>
                                    </span>

                                    <span className="kn-edit-row">
                                        <i aria-hidden="true">↑</i>
                                        Изменения
                                        <b>версии и миграции</b>
                                    </span>
                                </div>

                                <p className="kn-note">развиваем систему и следим за тем, как её применяют</p>
                            </div>

                            <span className="kn-port up" />
                        </article>

                        <article className="kn-card kn-out" data-node="giga" style={parseStyle('--kx:2; --ky:0')}>
                            <header>
                                <b>GigaChat</b>
                                <span>PRODUCT</span>
                            </header>

                            <div className="kn-body">
                                <div className="kn-chips">
                                    <span>Web</span>
                                    <span>Desktop</span>
                                </div>

                                <p className="kn-note">своя тема, общие правила</p>
                            </div>

                            <span className="kn-port in" />
                        </article>

                        <article className="kn-card kn-out" data-node="homeos" style={parseStyle('--kx:2; --ky:1')}>
                            <header>
                                <b>HomeOS</b>
                                <span>PRODUCT</span>
                            </header>

                            <div className="kn-body">
                                <div className="kn-chips">
                                    <span>Smart TV</span>
                                    <span>L–XL</span>
                                </div>

                                <p className="kn-note">десятифутовый интерфейс</p>
                            </div>

                            <span className="kn-port in" />
                        </article>

                        <article className="kn-card kn-out" data-node="scan" style={parseStyle('--kx:2; --ky:2')}>
                            <header>
                                <b>SberScan</b>
                                <span>PRODUCT</span>
                            </header>

                            <div className="kn-body">
                                <div className="kn-chips">
                                    <span>iOS</span>
                                    <span>Android</span>
                                </div>

                                <p className="kn-note">touch-размеры и safe-area</p>
                            </div>

                            <span className="kn-port in" />
                        </article>

                        <div className="kn-legend">
                            <span>Читают контекст</span>
                            <span>Развивают систему</span>
                            <span>Применяют тему</span>
                        </div>
                    </div>

                    <div className="bento kn-extra">
                        <div className="bento-card">
                            <div>
                                <h3>Документация AI-ready</h3>

                                <p>
                                    Структурированный контекст со связями между сущностями и версиями — агент получает
                                    правила системы, а не текст страницы.
                                </p>
                            </div>

                            <div className="bento-links">
                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Как устроен контекст
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Правила для агентов
                                </SiteLink>
                            </div>
                        </div>

                        <div className="bento-card">
                            <div>
                                <h3>MCP</h3>

                                <p>
                                    Подключение по Model Context Protocol: агент читает компоненты, токены и правила
                                    напрямую из системы.
                                </p>
                            </div>

                            <div className="bento-links">
                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Подключить MCP
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Что уже доступно
                                </SiteLink>
                            </div>
                        </div>

                        <div className="bento-card">
                            <div>
                                <h3>Прототипирование с контекстом</h3>

                                <p>
                                    Агент собирает экран на реальных компонентах и вашей теме, а не на приблизительной
                                    вёрстке.
                                </p>
                            </div>

                            <div className="bento-links">
                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Сценарии работы
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Ограничения
                                </SiteLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section screen" id="bento">
                <div className="shell">
                    <div className="screen-head">
                        <h2>
                            Уже работаете с SDDS?
                            <br />
                            <span className="dim">Всё нужное — здесь</span>
                        </h2>
                    </div>

                    <div className="bento">
                        <div className="bento-card wide">
                            <div className="bento-main">
                                <div>
                                    <h3>Ресурсы для дизайна</h3>
                                    <p>Библиотеки, компоненты и всё, что подключается в Figma одним файлом.</p>
                                </div>

                                <div className="bento-links">
                                    <SiteLink href="#">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                        Библиотека Figma
                                    </SiteLink>

                                    <SiteLink href="#">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                        Компоненты
                                    </SiteLink>

                                    <SiteLink href="#">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                        Онбординг
                                    </SiteLink>
                                </div>
                            </div>

                            <div className="bento-aside">
                                <div className="lib-grid">
                                    <span>SDDS Core</span>
                                    <span>SDDS Icons</span>
                                    <span>Plasma Legacy</span>
                                    <span>Patterns</span>
                                </div>
                            </div>
                        </div>

                        <div className="bento-card">
                            <div>
                                <h3>Документация</h3>
                                <p>Правила системы, спецификации и требования платформ.</p>
                            </div>

                            <div className="bento-links">
                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Гайдлайны и основы
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Разработчикам
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Платформы и совместимость
                                </SiteLink>
                            </div>
                        </div>

                        <div className="bento-card">
                            <div>
                                <h3>AI и MCP</h3>
                                <p>Как агенты читают систему и что уже доступно в бете.</p>
                            </div>

                            <div className="bento-links">
                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Подключить MCP
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Правила для агентов
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Что уже готово
                                </SiteLink>
                            </div>
                        </div>

                        <div className="bento-card wide">
                            <div className="bento-main">
                                <div>
                                    <h3>Builder</h3>
                                    <p>Конфигуратор тем и версий: собрать, проверить и выпустить.</p>
                                </div>

                                <div className="bento-links">
                                    <SiteLink href="#">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                        Перейти в конфигуратор
                                    </SiteLink>

                                    <SiteLink href="#">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                        Каталог систем команд
                                    </SiteLink>

                                    <SiteLink href="#">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                        Обновления и версии
                                    </SiteLink>
                                </div>
                            </div>

                            <div className="bento-aside" aria-hidden="true">
                                <div className="builder-sketch">
                                    <div className="rail">
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                    </div>

                                    <div className="body">
                                        <div className="toolbar" />

                                        <div className="canvas">
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bento-card wide">
                            <div className="bento-main">
                                <div>
                                    <h3>Иконки SDDS и Plasma</h3>
                                    <p>Новый набор и легаси-библиотека с планом миграции.</p>
                                </div>

                                <div className="bento-links">
                                    <SiteLink href="#">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                        Каталог иконок
                                    </SiteLink>

                                    <SiteLink href="#">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                        Стили и размеры
                                    </SiteLink>

                                    <SiteLink href="#">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                        Миграция с Plasma Icons
                                    </SiteLink>
                                </div>
                            </div>

                            <div className="bento-aside">
                                <div className="icon-grid">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />

                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />

                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>

                        <div className="bento-card">
                            <div>
                                <h3>Поддержка</h3>
                                <p>Вопрос команде, заявка на компонент и текущие релизы.</p>
                            </div>

                            <div className="bento-links">
                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Написать команде
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Запросить компонент
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Статус и релизы
                                </SiteLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section screen" id="contact">
                <div className="shell">
                    <div className="screen-head">
                        <h2>
                            Хороший продукт
                            <br />
                            <span className="dim">начинается с диалога</span>
                        </h2>

                        <p>
                            Есть вопросы по библиотеке или нужна помощь с подключением? Начните с документации или
                            задайте вопрос команде.
                        </p>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-card">
                            <div>
                                <h3>Задать вопрос</h3>

                                <p>Разберём сценарий, поможем с подключением библиотеки и темой продукта.</p>
                            </div>

                            <div className="bento-links">
                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Сообщество в Telegram
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Написать команде
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Частые вопросы
                                </SiteLink>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div>
                                <h3>Запросить изменение</h3>

                                <p>Нужен новый компонент, размер или тема — оставьте заявку, мы вернёмся с решением.</p>
                            </div>

                            <div className="bento-links">
                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Запросить компонент или тему
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Сообщить о проблеме
                                </SiteLink>

                                <SiteLink href="#">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                    Статус заявок и релизы
                                </SiteLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SiteFooter contactHref="#" />

            <canvas className="confetti" id="confetti" aria-hidden="true" />
        </>
    );
}
