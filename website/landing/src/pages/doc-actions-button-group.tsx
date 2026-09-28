import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocActionsButtonGroupPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Actions
                <i>/</i>
                <span>ButtonGroup</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Actions</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
                <span>·</span>
                <SiteLink href="https://www.figma.com/design/0FxQGHmGUOCjtHM3N9j4Oq/?node-id=13890-51346">
                    Открыть в Figma
                </SiteLink>
            </div>

            <h1>ButtonGroup</h1>

            <p className="article-lead">
                ButtonGroup — группа связанных кнопок, объединённых в единый контрол. Используется для переключения
                режимов, фильтрации или выбора одного из взаимоисключающих вариантов.
            </p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {' — для переключения между режимами просмотра, выбора временного диапазона, фильтрации по категориям.'}
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — если варианты не взаимоисключающие (используйте отдельные CheckBox).'}
            </p>

            <h2 id="p-3-variants">3. Variants</h2>

            <p>Компонент использует BasicButton как основу. Размеры и View наследуются от BasicButton.</p>

            <h2 id="p-5-states">5. States</h2>

            <p>
                {'Состояния наследуются от BasicButton. Активная кнопка группы имеет состояние '}
                <code>Checked</code>/<code>selected</code>.
            </p>

            <h2 id="p-6-behavior">6. Behavior</h2>

            <h3 id="keyboard-interaction">Keyboard interaction</h3>

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
                                {' / '}
                                <code>Shift+Tab</code>
                            </td>
                            <td>Переход между кнопками</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Enter</code>
                                {' / '}
                                <code>Space</code>
                            </td>
                            <td>Активация кнопки</td>
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
