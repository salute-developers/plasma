import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routeManifest } from './routeManifest';

export function parseStyle(value) {
    return Object.fromEntries(
        value
            .split(';')
            .filter(Boolean)
            .map((declaration) => {
                const index = declaration.indexOf(':');
                const name = declaration.slice(0, index).trim();
                const key = name.startsWith('--')
                    ? name
                    : name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
                return [key, declaration.slice(index + 1).trim()];
            }),
    );
}

export function SiteLink({ href = '#', children, ...props }) {
    if (href.startsWith('/') && !href.startsWith('//'))
        return (
            <Link to={href} {...props}>
                {children}
            </Link>
        );
    return (
        <a href={href} {...props}>
            {children}
        </a>
    );
}

const navigation = [
    { name: 'Дизайн система', href: '/' },
    { name: 'Документация', href: '/docs' },
    { name: 'Builder', href: '/builder' },
    { name: 'Новости', href: '/news' },
    { name: 'Контакты', href: '/contacts' },
];

const menus = {
    '/': [
        {
            title: 'О системе',
            links: [
                ['Introducing SDDS', '/docs/introducing'],
                ['Как устроена система', '/docs/components'],
                ['Глоссарий', '/docs/glossary'],
                ['Доступность', '/docs/accessibility'],
            ],
        },
        {
            title: 'Инструменты',
            links: [
                ['DS Builder', '/builder'],
                ['Темы и токены', '/docs/theming'],
                ['Библиотека в Figma', 'https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/'],
            ],
        },
        {
            title: 'Что нового',
            links: [
                ['Новости системы', '/news'],
                ['Разбор релиза', '/news/article'],
                ['Контакты команды', '/contacts'],
            ],
        },
    ],
    '/docs': [
        {
            title: 'Основы',
            links: [
                ['Размерная шкала', '/docs/sizes'],
                ['Состояния', '/docs/states'],
                ['Радиусы скругления', '/docs/corner-radius'],
                ['Сетка и отступы', '/docs/spacing-layout'],
            ],
        },
        {
            title: 'Правила',
            links: [
                ['Словарь свойств', '/docs/props-vocabulary'],
                ['Модель взаимодействия', '/docs/interaction-model'],
                ['Модель валидации', '/docs/validation-model'],
            ],
        },
        {
            title: 'Компоненты',
            links: [
                ['Все разделы', '/docs'],
                ['Библиотека компонентов', '/docs/components'],
                ['Иконки', '/docs/icons'],
                ['Button', '/docs/actions-button'],
            ],
        },
    ],
};

function Search({ close }) {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const input = useRef(null);
    useEffect(() => {
        input.current?.focus();
    }, []);
    const results = routeManifest
        .filter((route) => (route.title + ' ' + route.description).toLowerCase().includes(query.toLowerCase()))
        .slice(0, 12);
    const handleKey = (event) => {
        if (event.key === 'Escape') close();
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActive((value) => (value + 1) % Math.max(results.length, 1));
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActive((value) => (value - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1));
        }
        if (event.key === 'Enter' && results[active]) {
            navigate(results[active].route);
            close();
        }
    };
    return (
        <div className="gsearch is-open" onKeyDown={handleKey}>
            <div className="gsearch-backdrop" onClick={close} />
            <div className="gsearch-window" role="dialog" aria-modal="true" aria-label="Поиск по порталу">
                <div className="gsearch-field">
                    <img src="/media/icon-search-20.svg" alt="" />
                    <input
                        ref={input}
                        type="search"
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value);
                            setActive(0);
                        }}
                        placeholder="Поиск по документации, компонентам и новостям"
                        aria-label="Поисковый запрос"
                    />
                    <button className="gsearch-esc" type="button" onClick={close}>
                        esc
                    </button>
                </div>
                <div className="gsearch-body">
                    <div className="gsearch-group">
                        <span className="gsearch-group-title">
                            {query ? `Результаты: ${results.length}` : 'Страницы портала'}
                        </span>
                        <nav className="gsearch-list">
                            {results.map((route, index) => (
                                <SiteLink
                                    key={route.route}
                                    className={`gsearch-item${active === index ? ' is-active' : ''}`}
                                    href={route.route}
                                    onClick={close}
                                >
                                    <span className="gsearch-item-icon">
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M6 3h8l4 4v14H6zM14 3v4h4" />
                                            <path d="M9 12h6M9 16h4" />
                                        </svg>
                                    </span>
                                    <span className="gsearch-item-text">
                                        <b>{route.title}</b>
                                        <span>{route.description}</span>
                                    </span>
                                    <svg className="gsearch-item-go" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M9 6l6 6-6 6" />
                                    </svg>
                                </SiteLink>
                            ))}
                        </nav>
                    </div>
                </div>
                <div className="gsearch-foot">
                    <span>
                        <i>↑</i>
                        <i>↓</i> выбрать
                    </span>
                    <span>
                        <i>↵</i> открыть
                    </span>
                    <span>
                        <i>esc</i> закрыть
                    </span>
                </div>
            </div>
        </div>
    );
}

export function Header() {
    const { pathname } = useLocation();
    const [menu, setMenu] = useState(null);
    const [mobile, setMobile] = useState(false);
    const [search, setSearch] = useState(false);
    const [stuck, setStuck] = useState(false);
    const megaRef = useRef(null);
    const closeTimer = useRef(0);
    useEffect(() => {
        const update = () => setStuck(window.scrollY > 30);
        window.addEventListener('scroll', update, { passive: true });
        update();
        return () => window.removeEventListener('scroll', update);
    }, []);
    useEffect(() => {
        setMenu(null);
        setMobile(false);
        setSearch(false);
    }, [pathname]);
    useEffect(() => {
        if (!menu || !megaRef.current) return undefined;
        const place = () => {
            const panel = document.getElementById('panel')?.getBoundingClientRect();
            const trigger = document.querySelector(`.panel-nav a[href="${menu}"]`)?.getBoundingClientRect();
            const shell = megaRef.current?.querySelector('.mega-shell');
            const content = megaRef.current?.querySelector('.mega-panel');
            const glass = megaRef.current?.querySelector('.mega-glass');
            if (!panel || !trigger || !shell || !content || !glass) return;
            const width = Math.min(content.offsetWidth, window.innerWidth - 32);
            const height = content.offsetHeight;
            const left = Math.min(Math.max(trigger.left - 20, panel.left), window.innerWidth - width - 16);
            const top = panel.bottom + 8;
            Object.assign(shell.style, {
                left: `${left}px`,
                top: `${top}px`,
                width: `${width}px`,
                height: `${height}px`,
            });
            glass.style.clipPath = `inset(${top}px ${Math.max(0, window.innerWidth - left - width)}px ${Math.max(
                0,
                window.innerHeight - top - height,
            )}px ${left}px round 16px)`;
        };
        place();
        window.addEventListener('resize', place);
        return () => window.removeEventListener('resize', place);
    }, [menu]);
    useEffect(() => {
        const close = (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
                event.preventDefault();
                setSearch((value) => !value);
            }
            if (event.key === 'Escape') {
                setMenu(null);
                setMobile(false);
                setSearch(false);
            }
        };
        document.addEventListener('keydown', close);
        return () => document.removeEventListener('keydown', close);
    }, []);
    const active = pathname.startsWith('/docs') ? '/docs' : pathname.startsWith('/news') ? '/news' : pathname;
    const later = () => {
        window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(() => setMenu(null), 150);
    };
    const keep = () => window.clearTimeout(closeTimer.current);
    return (
        <>
            <nav className={`panel${stuck ? ' is-stuck' : ''}`} id="panel">
                <div className="panel-side">
                    <SiteLink className="panel-brand" href="/">
                        <b>SDDS</b>
                        <i className="divider" />
                        <span>Sber Digital Design System</span>
                    </SiteLink>
                </div>
                <div className={`panel-nav${menu ? ' has-open' : ''}`} onMouseLeave={later} onMouseEnter={keep}>
                    {navigation.map((item) => (
                        <SiteLink
                            key={item.href}
                            className={`${active === item.href ? 'is-active' : ''}${
                                menus[item.href] ? ' has-menu' : ''
                            }${menu === item.href ? ' is-open' : ''}`}
                            href={item.href}
                            onMouseEnter={() => setMenu(menus[item.href] ? item.href : null)}
                            aria-haspopup={menus[item.href] ? 'true' : undefined}
                            aria-expanded={menus[item.href] ? menu === item.href : undefined}
                        >
                            {item.name}
                            {menus[item.href] && (
                                <svg className="nav-chevron" viewBox="0 0 12 12" aria-hidden="true">
                                    <path d="M2.5 4.5 6 8l3.5-3.5" />
                                </svg>
                            )}
                        </SiteLink>
                    ))}
                </div>
                <div className="panel-side right">
                    <button className="panel-control" type="button" aria-label="Поиск" onClick={() => setSearch(true)}>
                        <img src="/media/icon-search-20.svg" alt="" />
                    </button>
                    <SiteLink className="panel-cta" href="#" id="builderCta">
                        Войти в билдер
                    </SiteLink>
                    <button
                        type="button"
                        className={`panel-burger${mobile ? ' is-on' : ''}`}
                        aria-label="Меню"
                        aria-expanded={mobile}
                        onClick={() => setMobile(!mobile)}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
            {menu && (
                <div ref={megaRef} className="mega is-open" onMouseEnter={keep} onMouseLeave={later}>
                    <div className="mega-glass" />
                    <div className="mega-shell">
                        <div className="mega-body">
                            <div className="mega-panel is-open is-first">
                                {menus[menu].map((column) => (
                                    <div className="mega-col" key={column.title}>
                                        <p className="mega-col-title">{column.title}</p>
                                        <ul>
                                            {column.links.map(([name, href]) => (
                                                <li key={href}>
                                                    <SiteLink href={href} onClick={() => setMenu(null)}>
                                                        {name}
                                                    </SiteLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {mobile && (
                <div className="navsheet is-open">
                    <div className="navsheet-backdrop" onClick={() => setMobile(false)} />
                    <nav className="navsheet-panel" aria-label="Разделы портала">
                        <div className="navsheet-body">
                            {navigation.map((item) => (
                                <React.Fragment key={item.href}>
                                    {menus[item.href] ? (
                                        <details className="navsheet-group">
                                            <summary>{item.name}</summary>
                                            <SiteLink
                                                className="navsheet-link is-self"
                                                href={item.href}
                                                onClick={() => setMobile(false)}
                                            >
                                                Обзор раздела
                                            </SiteLink>
                                            {menus[item.href].map((column) => (
                                                <React.Fragment key={column.title}>
                                                    <p className="navsheet-title">{column.title}</p>
                                                    {column.links.map(([name, href]) => (
                                                        <SiteLink
                                                            key={href}
                                                            className="navsheet-link"
                                                            href={href}
                                                            onClick={() => setMobile(false)}
                                                        >
                                                            {name}
                                                        </SiteLink>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </details>
                                    ) : (
                                        <SiteLink
                                            className="navsheet-link"
                                            href={item.href}
                                            onClick={() => setMobile(false)}
                                        >
                                            {item.name}
                                        </SiteLink>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
            {search && <Search close={() => setSearch(false)} />}
        </>
    );
}
