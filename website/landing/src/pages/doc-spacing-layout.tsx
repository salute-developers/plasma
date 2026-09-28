import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocSpacingLayoutPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Основы</SiteLink>
                <i>/</i>
                <span>Spacing & Layout</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Основы</span>

                <span>Отступы и сетка</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Spacing & Layout</h1>

            <p className="article-lead">Система отступов и компоновки в SDDS.</p>

            <p>
                <b>См. также:</b>{' '}
                <SiteLink href="/docs/sizes">
                    <code>sizes.md</code>
                </SiteLink>
                {' — размерная шкала компонентов, '}
                <SiteLink href="/docs/interaction-model">
                    <code>interaction-model.md</code>
                </SiteLink>
                {' — правила взаимодействия.'}
            </p>

            <h2 id="shkala-otstupov">Шкала отступов</h2>

            <p>
                {'Базовый шаг: '}
                <b>4px</b>. Все значения кратны 4 — произвольные числа не допускаются.
            </p>

            <p>
                {'SDDS не использует отдельные spacing-переменные (CSS-переменные вида '}
                <code>--spacing/N</code>
                {
                    ' отсутствуют). Компоненты применяют значения напрямую как hardcoded px. Шкала ниже — справочник допустимых значений.'
                }
            </p>

            <p>
                Логика шкалы: каждый следующий шаг = +4px. Размер компонента определяет его внутренний padding;
                расстояния между компонентами выбираются из той же шкалы.
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Значение</th>
                            <th>px → T-shirt</th>
                            <th>Применение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4px</td>
                            <td>—</td>
                            <td>Внутренние отступы мелких элементов, gap внутри Badge/Chip</td>
                        </tr>
                        <tr>
                            <td>8px</td>
                            <td>—</td>
                            <td>Отступ между иконкой и лейблом внутри компонента</td>
                        </tr>
                        <tr>
                            <td>12px</td>
                            <td>XS</td>
                            <td>Внутренний padding XS-компонентов</td>
                        </tr>
                        <tr>
                            <td>16px</td>
                            <td>S</td>
                            <td>Внутренний padding S-компонентов</td>
                        </tr>
                        <tr>
                            <td>20px</td>
                            <td>M</td>
                            <td>Внутренний padding M-компонентов</td>
                        </tr>
                        <tr>
                            <td>24px</td>
                            <td>L</td>
                            <td>Внутренний padding L-компонентов</td>
                        </tr>
                        <tr>
                            <td>28px</td>
                            <td>XL</td>
                            <td>Внутренний padding XL-компонентов</td>
                        </tr>
                        <tr>
                            <td>32px</td>
                            <td>—</td>
                            <td>Расстояние между крупными блоками, gap между секциями формы</td>
                        </tr>
                        <tr>
                            <td>40px</td>
                            <td>—</td>
                            <td>Секционный отступ, разделение смысловых групп</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="vnutrennie-otstupy-komponentov">Внутренние отступы компонентов</h2>

            <h3 id="knopki-gorizontalnyy-padding">Кнопки (горизонтальный padding)</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Размер</th>
                            <th>Высота</th>
                            <th>Padding H</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XS</td>
                            <td>32px</td>
                            <td>12px</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>40px</td>
                            <td>16px</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>48px</td>
                            <td>20px</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>56px</td>
                            <td>24px</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>64px</td>
                            <td>28px</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="polya-vvoda-textfield-select-gorizontalnyy-padding">
                Поля ввода (TextField, Select — горизонтальный padding)
            </h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Размер</th>
                            <th>Высота</th>
                            <th>Padding H</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XS</td>
                            <td>32px</td>
                            <td>12px</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>40px</td>
                            <td>16px</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>48px</td>
                            <td>20px</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>56px</td>
                            <td>24px</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>64px</td>
                            <td>28px</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                Горизонтальный padding полей совпадает с кнопками той же ступени — это обеспечивает визуальное
                выравнивание при соседстве в одной строке.
            </p>

            <h2 id="rasstoyaniya-mezhdu-komponentami">Расстояния между компонентами</h2>

            <p>
                {'Внутренние отступы компонентов задаются системой выше. Расстояния '}
                <b>между</b>
                {' компонентами выбираются из той же шкалы:'}
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Контекст</th>
                            <th>Gap</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Иконка и лейбл внутри компонента</td>
                            <td>8px</td>
                        </tr>
                        <tr>
                            <td>Поля в inline-группе (TextField + Button)</td>
                            <td>8px</td>
                        </tr>
                        <tr>
                            <td>Поля в вертикальной форме</td>
                            <td>16px</td>
                        </tr>
                        <tr>
                            <td>Группы полей между собой</td>
                            <td>24px</td>
                        </tr>
                        <tr>
                            <td>Секции формы / смысловые блоки</td>
                            <td>32–40px</td>
                        </tr>
                        <tr>
                            <td>Отдельные карточки / панели</td>
                            <td>16–24px</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="pravila">Правила</h2>

            <ul className="article-list plain">
                <li>Используйте только значения из шкалы — не произвольные числа</li>
                <li>Не смешивайте разные единицы (px и %) в одном блоке без явной причины</li>
                <li>Сохраняйте вертикальный ритм: отступы между элементами кратны 4px</li>
                <li>Иконка и лейбл разделяются 8px</li>
                <li>Не уменьшайте gap между полями формы ниже 16px — элементы сливаются визуально</li>
                <li>Один размер отступа на контекст: не смешивайте 16px и 24px между полями одной формы</li>
            </ul>

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
