import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntrySegmentPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>Segment</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Segment</h1>

            <p className="article-lead">
                Segment (Segmented Control) — горизонтальная группа взаимоисключающих сегментов. Используется для
                переключения режимов или фильтров внутри одного контекста.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <p>
                <b>Use</b>
                {' — 2–5 вариантов переключения: вид таблица/список, фильтры по периоду.'}
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — более 5 вариантов (используйте '}
                <b>Tabs</b>
                {' или '}
                <b>Select</b>
                ).
            </p>

            <h2 id="p-6-keyboard">6. Keyboard</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Клавиша</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Tab</code>
                            </td>
                            <td>Фокус на группу</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Arrow keys</code>
                            </td>
                            <td>Переключение между сегментами</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Enter</code>
                                {' / '}
                                <code>Space</code>
                            </td>
                            <td>Выбор сегмента</td>
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
