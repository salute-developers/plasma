import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataDisplayBadgePage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Display
                <i>/</i>
                <span>Badge</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Display</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=9009-123537">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>Badge</h1>

            <p className="article-lead">
                Badge — компактный информационный элемент: метка статуса, счётчик, категория. Не является интерактивным
                самостоятельно — только информирует.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {
                    ' — для отображения статуса объекта, счётчика уведомлений, категорийной метки, индикатора нового контента.'
                }
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — для интерактивных фильтров или тегов с кнопкой удаления (используйте '}
                <b>Chip</b>
                ).
            </p>

            <h2 id="p-2-anatomy">2. Anatomy</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Слот</th>
                            <th>Проп</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>contentLeft</code>
                            </td>
                            <td>
                                <code>ContentLeft=true</code>
                            </td>
                            <td>Иконка слева</td>
                        </tr>
                        <tr>
                            <td>
                                <code>label</code>
                            </td>
                            <td>
                                <code>Label=true</code>
                            </td>
                            <td>Текстовая метка</td>
                        </tr>
                        <tr>
                            <td>
                                <code>contentRight</code>
                            </td>
                            <td>
                                <code>ContentRight=true</code>
                            </td>
                            <td>Иконка или значение справа</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-3-variants">3. Variants</h2>

            <h3 id="figma-component-sets-stil-razmer">Figma Component Sets (стиль/размер)</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Имя в Figma</th>
                            <th>Стиль</th>
                            <th>Размер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Badge/Solid/BadgeXS</code>
                            </td>
                            <td>Solid</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Solid/BadgeS</code>
                            </td>
                            <td>Solid</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Solid/BadgeM</code>
                            </td>
                            <td>Solid</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Solid/BadgeL</code>
                            </td>
                            <td>Solid</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Transparent/BadgeXS</code>
                            </td>
                            <td>Transparent</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Transparent/BadgeS</code>
                            </td>
                            <td>Transparent</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Transparent/BadgeM</code>
                            </td>
                            <td>Transparent</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Transparent/BadgeL</code>
                            </td>
                            <td>Transparent</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Clear/BadgeXS</code>
                            </td>
                            <td>Clear</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Clear/BadgeS</code>
                            </td>
                            <td>Clear</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Clear/BadgeM</code>
                            </td>
                            <td>Clear</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Badge/Clear/BadgeL</code>
                            </td>
                            <td>Clear</td>
                            <td>L</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="stili">Стили</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Стиль</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Solid</code>
                            </td>
                            <td>Непрозрачная заливка</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Transparent</code>
                            </td>
                            <td>Полупрозрачная заливка</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Clear</code>
                            </td>
                            <td>Без заливки (только текст/иконки)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="view">View</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>View</th>
                            <th>Назначение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Default</code>
                            </td>
                            <td>Нейтральный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Accent</code>
                            </td>
                            <td>Акцентный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Positive</code>
                            </td>
                            <td>Успех / активно</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Negative</code>
                            </td>
                            <td>Ошибка / неактивно</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Warning</code>
                            </td>
                            <td>Предупреждение</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Custom</code>
                            </td>
                            <td>Кастомный цвет</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Black</code>
                                {' / '}
                                <code>White</code>
                            </td>
                            <td>Монохром</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Dark</code>
                                {' / '}
                                <code>Light</code>
                            </td>
                            <td>Темный / Светлый</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="shape">Shape</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Shape</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Pilled</code>
                            </td>
                            <td>Полностью скруглённый</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Default</code>
                            </td>
                            <td>Стандартное скругление (нет у Clear)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-4-sizes">4. Sizes</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>T-shirt</th>
                            <th>Контекст</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>XS</code>
                            </td>
                            <td>Компактные места: аватары, иконки</td>
                        </tr>
                        <tr>
                            <td>
                                <code>S</code>
                            </td>
                            <td>Тулбары, строки таблиц</td>
                        </tr>
                        <tr>
                            <td>
                                <code>M</code>
                            </td>
                            <td>
                                {'Карточки, стандартный контент — '}
                                <b>дефолт</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>L</code>
                            </td>
                            <td>Акцентные метки, крупные блоки</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-5-states">5. States</h2>

            <p>Badge не имеет интерактивных состояний. Это read-only элемент.</p>

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
