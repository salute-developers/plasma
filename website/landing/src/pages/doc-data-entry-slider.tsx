import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocDataEntrySliderPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Data Entry
                <i>/</i>
                <span>Slider</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Data Entry</span>

                <span>Спецификация компонента</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Slider</h1>

            <p className="article-lead">Slider — ползунок для выбора числового значения в диапазоне.</p>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <p>
                <b>Use</b>
                {' — для регулировки громкости, яркости, фильтра по цене, процентных значений.'}
            </p>

            <p>
                <b>Don&apos;t use</b>
                {' — для точного ввода числа (используйте '}
                <b>NumberInput</b>
                ).
            </p>

            <h2 id="p-5-states">5. States</h2>

            <p>
                <code>default</code>
                {' · '}
                <code>hover</code>
                {' · '}
                <code>active/drag</code>
                {' · '}
                <code>focus</code>
                {' · '}
                <code>disabled</code>
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
                            <td>Фокус на ползунок</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Arrow keys</code>
                            </td>
                            <td>Изменение значения на шаг</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Home</code>
                                {' / '}
                                <code>End</code>
                            </td>
                            <td>Минимум / максимум</td>
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
