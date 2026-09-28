import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocNavigationTabsPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Navigation
                <i>/</i>
                <span>Tabs</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Navigation</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=11887-51">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>Tabs</h1>

            <p className="article-lead">
                Tabs — переключатель между секциями контента. Управляют полноценными view, в отличие от Segment.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <p>
                <b>Use</b>
                {' — для переключения между разделами страницы: «Описание / Отзывы / Характеристики».'}
            </p>

            <h2 id="p-3-variants">3. Variants</h2>

            <p>
                {'Именование: '}
                <code>{'Tabs/{Default|Headers|Icon}/{Horizontal|Vertical}/{size}'}</code>
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Тип</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Default</code>
                            </td>
                            <td>Стандартные табы с текстом</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Headers</code>
                            </td>
                            <td>Заголовочные табы (H1–H5)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Icon</code>
                            </td>
                            <td>Табы с иконками</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Проп</th>
                            <th>Значения</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Clip</code>
                            </td>
                            <td>
                                <code>None</code>
                                {' · '}
                                <code>Show More</code>
                                {' · '}
                                <code>Scroll</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>Strech</code>
                            </td>
                            <td>
                                <code>true</code>
                                {' · '}
                                <code>false</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>hasDivider</code>
                            </td>
                            <td>
                                <code>false</code>
                                {' · '}
                                <code>true</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>hasContentLeft</code>
                            </td>
                            <td>
                                <code>true</code>
                                {' · '}
                                <code>false</code>
                                {' (только Vertical)'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <b>Размеры:</b>
                {' XS · S · M · L (Headers: H1–H5)'}
            </p>

            <h2 id="p-7-accessibility">7. Accessibility</h2>

            <p>
                <code>role=&quot;tablist&quot;</code>
                {' на контейнере · '}
                <code>role=&quot;tab&quot;</code>
                {' на вкладке · '}
                <code>role=&quot;tabpanel&quot;</code>
                {' на панели · '}
                <code>aria-selected</code>
                {' · навигация стрелками между табами.'}
            </p>

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
