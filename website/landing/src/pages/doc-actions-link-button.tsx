import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocActionsLinkButtonPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Actions
                <i>/</i>
                <span>LinkButton</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Actions</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8923-75680">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>LinkButton</h1>

            <p className="article-lead">
                LinkButton — кнопка-ссылка. Визуально похожа на текстовую ссылку, но может инициировать действие или
                навигацию. Отличается от BasicButton отсутствием фона и границы.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — для вторичных действий в тексте, ссылок внутри форм, навигации с минимальным визуальным весом.'}
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — как основное CTA (используйте BasicButton с View=Accent).'}
            </p>

            <h2 id="p-2-anatomy">2. Anatomy</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Слот</th>
                            <th>Обязательность</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>label</code>
                            </td>
                            <td>required</td>
                            <td>Текст ссылки</td>
                        </tr>
                        <tr>
                            <td>
                                <code>contentLeft</code>
                            </td>
                            <td>optional</td>
                            <td>Иконка слева</td>
                        </tr>
                        <tr>
                            <td>
                                <code>contentRight</code>
                            </td>
                            <td>optional</td>
                            <td>Иконка справа</td>
                        </tr>
                        <tr>
                            <td>
                                <code>spinner</code>
                            </td>
                            <td>conditional</td>
                            <td>
                                {'При '}
                                <code>Loading=True</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-3-variants">3. Variants</h2>

            <h3 id="figma-component-sets">Figma Component Sets</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Имя в Figma</th>
                            <th>px</th>
                            <th>T-shirt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>LinkButton 24 XXS</code>
                            </td>
                            <td>24</td>
                            <td>XXS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' LinkButton 32 XS'}</code>
                            </td>
                            <td>32</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' LinkButton 40 S'}</code>
                            </td>
                            <td>40</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' LinkButton 48 M'}</code>
                            </td>
                            <td>48</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' LinkButton 56 L'}</code>
                            </td>
                            <td>56</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td>
                                <code>LinkButton 64 XL</code>
                            </td>
                            <td>64</td>
                            <td>XL</td>
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
                            <td>Стандартный цвет ссылки</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Accent</code>
                            </td>
                            <td>Акцентный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Secondary</code>
                            </td>
                            <td>Вторичный, менее заметный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Positive</code>
                            </td>
                            <td>Позитивный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Negative</code>
                            </td>
                            <td>Деструктивный / опасный</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Warning</code>
                            </td>
                            <td>Предупреждение</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Info</code>
                            </td>
                            <td>Информационный</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-4-sizes">4. Sizes</h2>

            <p>Аналогично BasicButton: XXS(24) · XS(32) · S(40) · M(48) · L(56) · XL(64).</p>

            <h2 id="p-5-states">5. States</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Состояние</th>
                            <th>Figma-проп</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>default</code>
                            </td>
                            <td>—</td>
                            <td>Базовый вид</td>
                        </tr>
                        <tr>
                            <td>
                                <code>loading</code>
                            </td>
                            <td>
                                <code>Loading=True</code>
                            </td>
                            <td>Спиннер</td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>
                                <code>Disabled=True</code>
                            </td>
                            <td>Недоступна</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-7-accessibility">7. Accessibility</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Атрибут</th>
                            <th>Значение</th>
                            <th>Когда</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>{'<a href>'}</code>
                            </td>
                            <td>—</td>
                            <td>Для навигации к URL</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{'<button>'}</code>
                            </td>
                            <td>—</td>
                            <td>Для действий без перехода</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-busy=&quot;true&quot;</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>Loading=True</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                                {' / '}
                                <code>aria-disabled</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>Disabled=True</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
