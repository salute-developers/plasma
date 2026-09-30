import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocIntroducingPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Основы</SiteLink>
                <i>/</i>
                <span>Introducing SDDS</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Основы</span>

                <span>Точка входа в систему</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Introducing SDDS</h1>

            <p className="article-lead">
                SDDS — дизайн-система Сбера для быстрого создания брендированных внутренних цифровых продуктов и
                сервисов: B2C-площадки, B2B-порталы, операционные инструменты, личные кабинеты и административные
                интерфейсы.
            </p>

            <h2 id="white-label">White-label design system</h2>

            <p>
                SDDS — универсальная дизайн-система, которая определяет базовую структуру и набор свойств нейтрально
                спроектированных компонентов. Бренд-пользователь кастомизирует токены дизайн-системы под свой фирменный
                стиль, а компоненты динамически принимают значения без необходимости вносить правки в код.
            </p>

            <div className="callout">
                <b>Что это значит на практике</b>

                <p>
                    Продукт не форкает систему под свой бренд. Он меняет значения токенов — цвета, шрифты — и получает
                    те же компоненты в своей стилистике. Код компонентов при этом остаётся системным и продолжает
                    обновляться вместе с релизами.
                </p>
            </div>

            <h2 id="platforms">Платформы</h2>

            <p>SDDS покрывает Web и Mobile через единый файл в дизайне и единый набор токенов.</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Платформа</th>
                            <th>Контексты</th>
                            <th>Особенности</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <b>Web</b>
                            </td>
                            <td>Десктоп, адаптив</td>
                            <td>Полный набор компонентов</td>
                        </tr>

                        <tr>
                            <td>
                                <b>Mobile</b>
                            </td>
                            <td>iOS, Android</td>
                            <td>Полный набор компонентов и специфичные для мобильных платформ компоненты</td>
                        </tr>

                        <tr>
                            <td>
                                <b>TV</b>
                            </td>
                            <td>Android</td>
                            <td>Набор компонентов, адаптированный под TV-платформы</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="resources">Ресурсы SDDS</h2>

            <p>
                В отличие от потребительских дизайн-систем, SDDS оптимизирована под плотную информационную среду —
                таблицы, формы, дашборды — и рассчитана на разные бренды внутри экосистемы Сбера.
            </p>

            <div className="res-cards">
                <div className="res-card">
                    <h3>Базовые элементы визуального языка</h3>

                    <ul>
                        <li>Цветовые токены</li>

                        <li>Типографические токены</li>

                        <li>Токены эффектов тени и размытия</li>

                        <li>Адаптивная сетка и правила её построения</li>

                        <li>Иконки в едином стиле</li>
                    </ul>
                </div>

                <div className="res-card">
                    <h3>Компонентная библиотека</h3>

                    <ul>
                        <li>Библиотека UI-компонентов (~80 компонентов) для веб- и мобильных интерфейсов</li>
                    </ul>
                </div>

                <div className="res-card">
                    <h3>Паттерны взаимодействия</h3>

                    <ul>
                        <li>Валидация, подсказки, маски ввода, навигационные паттерны и другие сквозные решения</li>
                    </ul>
                </div>

                <div className="res-card">
                    <h3>Документация</h3>

                    <ul>
                        <li>Гайдлайны по использованию токенов</li>

                        <li>Руководства по использованию компонентов</li>

                        <li>Инструкции по внедрению для дизайнеров и разработчиков</li>
                    </ul>
                </div>

                <div className="res-card">
                    <h3>Инструменты и ресурсы</h3>

                    <ul>
                        <li>Библиотеки компонентов в Figma и Pixso</li>

                        <li>Фреймворки и библиотеки кода: React, Compose UI, ViewSystem, SwiftUI</li>

                        <li>Инструменты для тестирования</li>
                    </ul>
                </div>
            </div>

            <h2 id="customization">Кастомизация</h2>

            <p>Бренд-пользователь заменяет:</p>

            <ul className="article-list plain">
                <li>значения цветовых токенов;</li>

                <li>набор шрифтов;</li>

                <li>адаптирует компоненты под свои сценарии использования.</li>
            </ul>

            <p>
                Собрать и проверить такую тему можно в конфигураторе — он покажет, как изменения расходятся по
                компонентам и состояниям.
            </p>

            <h2 id="benefits">Преимущества для бренда-пользователя</h2>

            <div className="res-cards">
                <div className="res-card">
                    <h3>Экономия времени</h3>

                    <ul>
                        <li>Быстрый запуск за счёт готовой системы</li>

                        <li>Переключение на стилистику бренда через замену токенов</li>

                        <li>Готовые решения протестированы, соответствуют UX-стандартам и требованиям доступности</li>
                    </ul>
                </div>

                <div className="res-card">
                    <h3>Консистентность интерфейсов</h3>

                    <ul>
                        <li>Единый набор компонентов и токенов в Figma и Pixso — для Web и Mobile</li>
                    </ul>
                </div>

                <div className="res-card">
                    <h3>Масштабируемость</h3>

                    <ul>
                        <li>Добавление тем</li>

                        <li>Добавление новых функций в существующие компоненты</li>
                    </ul>
                </div>

                <div className="res-card">
                    <h3>Техническая поддержка</h3>

                    <ul>
                        <li>Команда системы разбирает обращения, ведёт доработки и мониторинг</li>
                    </ul>
                </div>
            </div>

            <h2 id="how-to-read">Как читать документацию</h2>

            <p>
                {'Начните с '}
                <b>Glossary</b>
                {' — там объяснены термины, которые встречаются везде. Дальнейший путь зависит от роли.'}
            </p>

            <div className="route-cards">
                <div className="res-card">
                    <h3>Дизайнеру</h3>

                    <ol className="route-list">
                        <li>
                            <SiteLink href="#">Glossary</SiteLink>
                            {' — термины'}
                        </li>

                        <li>
                            <SiteLink href="#">Component Library</SiteLink>
                            {' — выбор компонента под задачу'}
                        </li>

                        <li>
                            <SiteLink href="/docs/sizes">Sizes</SiteLink>
                            {' — размерная шкала'}
                        </li>

                        <li>
                            <SiteLink href="#">Themes tokens</SiteLink>
                            {' — быстрый старт в Figma, переключение тем'}
                        </li>

                        <li>
                            <SiteLink href="#">States</SiteLink>
                            {' — состояния компонентов в макете'}
                        </li>
                    </ol>
                </div>

                <div className="res-card">
                    <h3>Разработчику</h3>

                    <ol className="route-list">
                        <li>
                            <SiteLink href="#">Glossary</SiteLink>
                            {' — термины'}
                        </li>

                        <li>
                            <SiteLink href="#">Themes tokens</SiteLink>
                            {' — токены, коллекции Variables, контексты'}
                        </li>

                        <li>
                            <SiteLink href="/docs/sizes">Sizes</SiteLink>
                            {' — размерная шкала'}
                        </li>

                        <li>
                            <SiteLink href="#">States</SiteLink>
                            {' — состояния, пропы, комбинирование'}
                        </li>

                        <li>
                            <SiteLink href="#">Properties Vocabulary</SiteLink>
                            {' — полный справочник пропов'}
                        </li>

                        <li>
                            <SiteLink href="#">Component Library</SiteLink>
                            {' — список компонентов'}
                        </li>
                    </ol>
                </div>
            </div>

            <h3 id="reference">Справочные документы</h3>

            <p>Эти страницы не нужно читать подряд — открывайте по необходимости.</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Документ</th>
                            <th>Когда нужен</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <b>Spacing & Layout</b>
                            </td>
                            <td>При вёрстке форм и лейаутов</td>
                        </tr>

                        <tr>
                            <td>
                                <b>Interaction Model</b>
                            </td>
                            <td>При реализации клавиатурной навигации</td>
                        </tr>

                        <tr>
                            <td>
                                <b>Validation Model</b>
                            </td>
                            <td>При проектировании форм с валидацией</td>
                        </tr>

                        <tr>
                            <td>
                                <b>Accessibility</b>
                            </td>
                            <td>При проверке доступности компонентов</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="article-foot">
                <span>Не нашли ответ в документации — напишите команде системы.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Задать вопрос
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
