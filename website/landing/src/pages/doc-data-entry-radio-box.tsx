import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntryRadioBoxPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>RadioBox</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=8806-63107">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>RadioBox</h1>

            <p className="article-lead">
                RadioBox — элемент выбора одного значения из группы взаимоисключающих вариантов.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — когда нужно выбрать ровно один вариант из 2–6: пол, тарифный план, способ доставки.'}
            </p>

            <p>
                <b>Don&apos;t use:</b>
            </p>

            <ul className="article-list plain">
                <li>
                    {'Для множественного выбора — используйте '}
                    <b>CheckBox</b>
                </li>
                <li>
                    {'Для большого количества вариантов — используйте '}
                    <b>Select</b>
                </li>
            </ul>

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
                                <code>{'<input type="radio">'}</code>
                            </td>
                            <td>—</td>
                            <td>Всегда</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{'<fieldset>'}</code>
                                {' + '}
                                <code>{'<legend>'}</code>
                            </td>
                            <td>—</td>
                            <td>Для группы RadioBox</td>
                        </tr>
                        <tr>
                            <td>Навигация стрелками</td>
                            <td>—</td>
                            <td>Между вариантами в группе</td>
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
