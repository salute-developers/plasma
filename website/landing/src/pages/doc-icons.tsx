import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocIconsPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <span>Иконки</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Основы</span>

                <span>Набор иконок</span>
                <span>·</span>
                <span id="iconsVersion">библиотека SDDS Icons</span>
            </div>

            <h1>Иконки</h1>

            <p className="article-lead">
                {
                    'Три начертания и три размера. Иконка нарисована под каждый размер\n        отдельно — 16 и 36 это не масштабированная 24. Ищите по названию, категории или\n        по-русски: «стрелка», «оплата», «профиль».'
                }
            </p>

            <div className="doc-search" id="p-icons">
                <img src="/media/icon-search-20.svg" alt="" />

                <input
                    type="search"
                    id="iconsSearch"
                    placeholder="Поиск по названию, категории и тегам — например, «стрелка» или «оплата»"
                    autoComplete="off"
                    spellCheck="false"
                />

                <span className="doc-search-count" id="iconsCount">
                    <b>0</b>
                    {' иконок'}
                </span>

                <button type="button" className="doc-search-clear" id="iconsClear" aria-label="Очистить поиск">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M4 4l8 8M12 4l-8 8" />
                    </svg>
                </button>
            </div>

            <div className="icons-panel">
                <div className="icons-switch" role="group" aria-label="Набор">
                    <button type="button" className="is-on" data-set="sdds">
                        SDDS
                        <i>new</i>
                    </button>

                    <button type="button" data-set="plasma">
                        Plasma
                        <i>до 31.12.2026</i>
                    </button>
                </div>

                <div className="icons-switch" role="group" aria-label="Начертание">
                    <button type="button" className="is-on" data-style="Outline">
                        Outline
                    </button>

                    <button type="button" data-style="OutlineBold">
                        Outline Bold
                    </button>

                    <button type="button" data-style="Fill">
                        Fill
                    </button>
                </div>

                <div className="icons-switch" role="group" aria-label="Размер">
                    <button type="button" data-size="16">
                        16
                    </button>

                    <button type="button" className="is-on" data-size="24">
                        24
                    </button>

                    <button type="button" data-size="36">
                        36
                    </button>
                </div>
            </div>

            <div className="icons-cats" id="iconsCats" role="group" aria-label="Категории" />

            <div className="icons-grid" id="iconsGrid" />

            <h2 id="p-usage">Как подключить</h2>

            <p>
                {'Иконки поставляются пакетом '}
                <code>@salutejs/sdds-icons</code>
                {'. Имя иконки\n        в каталоге — это имя импорта: кликните по ней, и оно окажется в буфере.'}
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Шаг</th>
                            <th>Что сделать</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Установка</td>
                            <td>
                                <code>npm i @salutejs/sdds-icons</code>
                            </td>
                        </tr>

                        <tr>
                            <td>Импорт</td>
                            <td>
                                <code>{"import { AddOutline } from '@salutejs/sdds-icons';"}</code>
                            </td>
                        </tr>

                        <tr>
                            <td>Размер</td>
                            <td>
                                {'Берётся из имени папки: '}
                                <code>.../24/AddOutline</code>. Размер выбирают под контекст, а не масштабированием
                            </td>
                        </tr>

                        <tr>
                            <td>Цвет</td>
                            <td>
                                {'Наследуется от текста: иконка рисуется '}
                                <code>currentColor</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-rules">Правила использования</h2>

            <ul>
                <li>
                    <b>Размер под контекст.</b>
                    {
                        ' 16 — внутри строк и компактных контролов, 24 — основной\n          размер интерфейса, 36 — крупные акценты и сенсорные экраны.'
                    }
                </li>

                <li>
                    <b>Одно начертание на экран.</b>
                    {
                        ' Outline — основное, Fill — для активных состояний\n          и акцентов, Outline Bold — для мелких размеров и плотных интерфейсов.'
                    }
                </li>

                <li>
                    <b>Иконка без подписи требует доступного имени.</b>
                    {' Для IconButton задайте\n          '}
                    <code>aria-label</code>
                    {' или tooltip.'}
                </li>
            </ul>

            <div className="article-foot">
                <p>
                    {
                        'Не нашли нужную иконку или заметили расхождение с макетом — напишите команде,\n          набор пополняется.'
                    }
                </p>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
