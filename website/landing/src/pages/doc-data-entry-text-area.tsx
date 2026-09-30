import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntryTextAreaPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>TextArea</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=10639-112416">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>TextArea</h1>

            <p className="article-lead">
                Связанный компонент: TextAreaClear (<code>14493:1665102</code>)
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="what-it-is">What it is</h3>

            <p>TextArea — многострочное поле ввода. Для комментариев, описаний, длинных текстов.</p>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — когда ввод занимает более одной строки: отзыв, описание, сообщение.'}
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — для коротких однострочных данных (используйте '}
                <b>TextField</b>
                ).
            </p>

            <h2 id="p-3-variants">3. Variants</h2>

            <p>
                Пропы аналогичны TextField: View · Value · LabelPlacement · Focused · Disabled · ReadOnly · Required ·
                RequiredPlacement · Optional · HintPlacement.
            </p>

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
                                <code>{'<textarea>'}</code>
                                {' с '}
                                <code>{'<label>'}</code>
                            </td>
                            <td>—</td>
                            <td>Всегда</td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-invalid=&quot;true&quot;</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>View=Error</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>aria-describedby</code>
                            </td>
                            <td>—</td>
                            <td>При наличии hint</td>
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
