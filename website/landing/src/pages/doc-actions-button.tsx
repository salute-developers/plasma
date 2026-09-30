import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink, parseStyle } from '../shared';

export default function DocActionsButtonPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Компоненты</SiteLink>
                <i>/</i>
                Actions
                <i>/</i>
                <span>Button</span>
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

            <h1>Button</h1>

            <p className="article-lead">
                BasicButton — основной элемент взаимодействия с текстовой меткой. Инициирует действие: отправку формы,
                подтверждение, запуск процесса. В отличие от LinkButton, не ведёт к ресурсу.
            </p>

            <h2 id="p-sandbox">Песочница</h2>

            <div className="sandbox" data-component="Button" hidden>
                <p className="sandbox-fallback">Живой пример загружается…</p>
            </div>

            <h2 id="p-1-key-principles-of-use">1. Key Principles of Use</h2>

            <h3 id="when-to-use">When to use</h3>

            <p>
                <b>Use</b>
                {
                    ' — для любого дискретного действия: сохранить, подтвердить, удалить, применить фильтр, перейти к следующему шагу.'
                }
            </p>

            <p>
                <b>Don&apos;t use:</b>
            </p>

            <ul className="article-list plain">
                <li>
                    {'Для навигации к URL — используйте '}
                    <b>LinkButton</b>
                </li>
                <li>
                    {'Только с иконкой без текста — используйте '}
                    <b>IconButton</b>
                </li>
                <li>
                    {'Для встроенных действий внутри полей — используйте '}
                    <b>EmbeddedButton</b>
                </li>
            </ul>

            <h3 id="core-principles">Core principles</h3>

            <ul className="article-list plain">
                <li>
                    <b>Один Accent на контекст</b>
                    {' — несколько Accent-кнопок конкурируют за внимание'}
                </li>
                <li>
                    <b>Label — глагол</b>
                    {' — «Сохранить», «Удалить», «Отправить»; избегайте «OK», «Да»'}
                </li>
                <li>
                    <b>Stretching=Fixed</b>
                    {' только для явного выравнивания в сетке, не по умолчанию'}
                </li>
            </ul>

            <h2 id="p-2-anatomy">2. Anatomy</h2>

            <pre className="doc-code">
                <code>
                    {
                        '┌─────────────────────────────────────────┐\n│  [ContentLeft]   Label   [ContentRight] │\n└─────────────────────────────────────────┘'
                    }
                </code>
            </pre>

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
                            <td>Текст кнопки. Глагол или глагольная фраза</td>
                        </tr>
                        <tr>
                            <td>
                                <code>contentLeft</code>
                            </td>
                            <td>optional</td>
                            <td>Иконка слева от label</td>
                        </tr>
                        <tr>
                            <td>
                                <code>contentRight</code>
                            </td>
                            <td>optional</td>
                            <td>
                                Иконка (<code>Icon</code>
                                ), текстовое значение (<code>Value</code>) или ничего (<code>None</code>)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>spinner</code>
                            </td>
                            <td>conditional</td>
                            <td>
                                {'Появляется при '}
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
                                <code>Button 24 XXS</code>
                            </td>
                            <td>24</td>
                            <td>XXS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' BasicButton 32 XS'}</code>
                            </td>
                            <td>32</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' BasicButton 40 S'}</code>
                            </td>
                            <td>40</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' BasicButton 48 M'}</code>
                            </td>
                            <td>48</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>{' BasicButton 56 L'}</code>
                            </td>
                            <td>56</td>
                            <td>L</td>
                        </tr>
                        <tr>
                            <td>
                                <code>BasicButton 64 XL</code>
                            </td>
                            <td>64</td>
                            <td>XL</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="callout">
                <p>Ведущий пробел в именах XS–L — известная проблема именования, не влияет на поведение.</p>
            </div>

            <h3 id="view-vizualnyy-stil">View (визуальный стиль)</h3>

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
                            <td>Нейтральный стиль, низкий визуальный вес</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Accent</code>
                            </td>
                            <td>Основное действие на экране</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Secondary</code>
                            </td>
                            <td>Второстепенное действие</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Clear</code>
                            </td>
                            <td>Прозрачный фон, минимальный вес</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Positive</code>
                            </td>
                            <td>Позитивное/подтверждающее действие</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Warning</code>
                            </td>
                            <td>Действие с риском</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Negative</code>
                            </td>
                            <td>Деструктивное/опасное действие</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Dark</code>
                            </td>
                            <td>Тёмный стиль (для светлых поверхностей)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Black</code>
                                {' / '}
                                <code>White</code>
                            </td>
                            <td>Монохромные варианты</td>
                        </tr>
                        <tr>
                            <td>
                                <code>AccentTransparent</code>
                            </td>
                            <td>Только в XXS: Accent с прозрачным фоном</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="callout">
                <p>
                    <b>Примечание:</b>
                    {' В '}
                    <code>Button 24 XXS</code>
                    {' есть опечатка — '}
                    <code>&quot;Seccondary&quot;</code>
                    {" (лишняя 'c')."}
                </p>
            </div>

            <h3 id="modifikatory">Модификаторы</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Проп</th>
                            <th>Значения</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Stretching</code>
                            </td>
                            <td>
                                <code>Auto</code>
                                {' / '}
                                <code>Fixed</code>
                            </td>
                            <td>Auto — по контенту; Fixed — на всю ширину контейнера</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Spacing</code>
                            </td>
                            <td>
                                <code>Packed</code>
                                {' / '}
                                <code>Space Between</code>
                            </td>
                            <td>Packed — иконка вплотную к тексту; Space Between — по краям</td>
                        </tr>
                        <tr>
                            <td>
                                <code>ContentLeft</code>
                            </td>
                            <td>
                                <code>True</code>
                                {' / '}
                                <code>False</code>
                            </td>
                            <td>Включить/выключить левый контент</td>
                        </tr>
                        <tr>
                            <td>
                                <code>ContentRight</code>
                            </td>
                            <td>
                                <code>None</code>
                                {' / '}
                                <code>Value</code>
                                {' / '}
                                <code>Icon</code>
                            </td>
                            <td>Тип правого контента</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-4-sizes">4. Sizes</h2>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>T-shirt</th>
                            <th>px</th>
                            <th>Padding H</th>
                            <th>Контекст</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>XXS</code>
                            </td>
                            <td>24</td>
                            <td>8px</td>
                            <td>Встроенные элементы, компактные тулбары</td>
                        </tr>
                        <tr>
                            <td>
                                <code>XS</code>
                            </td>
                            <td>32</td>
                            <td>12px</td>
                            <td>Тулбары, таблицы, inline-действия</td>
                        </tr>
                        <tr>
                            <td>
                                <code>S</code>
                            </td>
                            <td>40</td>
                            <td>12px</td>
                            <td>Вторичные формы, карточки</td>
                        </tr>
                        <tr>
                            <td>
                                <code>M</code>
                            </td>
                            <td>48</td>
                            <td>16px</td>
                            <td>
                                {'Стандартные формы — '}
                                <b>дефолт</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>L</code>
                            </td>
                            <td>56</td>
                            <td>16px</td>
                            <td>Акцентные CTA</td>
                        </tr>
                        <tr>
                            <td>
                                <code>XL</code>
                            </td>
                            <td>64</td>
                            <td>20px</td>
                            <td>Hero-секции, touch-first</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
                                <code>hover</code>
                            </td>
                            <td>—</td>
                            <td>Курсор над кнопкой</td>
                        </tr>
                        <tr>
                            <td>
                                <code>active/pressed</code>
                            </td>
                            <td>—</td>
                            <td>Момент нажатия</td>
                        </tr>
                        <tr>
                            <td>
                                <code>focus</code>
                            </td>
                            <td>—</td>
                            <td>Фокус клавиатуры (кольцо фокуса)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>loading</code>
                            </td>
                            <td>
                                <code>Loading=True</code>
                            </td>
                            <td>Спиннер, кнопка неинтерактивна</td>
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

            <h3 id="dopustimye-kombinacii">Допустимые комбинации</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Комбинация</th>
                            <th>Допустимо</th>
                            <th>Примечание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>hover</code>
                                {' + '}
                                <code>focus</code>
                            </td>
                            <td>✓</td>
                            <td>Tab-навигация при наведении</td>
                        </tr>
                        <tr>
                            <td>
                                <code>loading</code>
                                {' + '}
                                <code>disabled</code>
                            </td>
                            <td>✓</td>
                            <td>Блокировка во время запроса</td>
                        </tr>
                        <tr>
                            <td>
                                <code>hover</code>
                                {' + '}
                                <code>disabled</code>
                            </td>
                            <td>✗</td>
                            <td>disabled отменяет все интерактивные</td>
                        </tr>
                        <tr>
                            <td>
                                <code>loading</code>
                                {' + '}
                                <code>hover</code>
                            </td>
                            <td>✗</td>
                            <td>В loading кнопка визуально недоступна</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
                            <td>Перемещение фокуса</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Enter</code>
                            </td>
                            <td>Активация</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Space</code>
                            </td>
                            <td>Активация</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="loading-state">Loading state</h3>

            <p>
                {'При '}
                <code>Loading=True</code>
                {': лейбл заменяется спиннером, '}
                <code>pointer-events: none</code>
                {', '}
                <code>aria-busy=&quot;true&quot;</code>. Ширина не меняется.
            </p>

            <h3 id="touch-targets">Touch targets</h3>

            <p>Минимальная зона — 44×44px. Для XXS и XS расширяется невидимым padding.</p>

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
                                <code>{'<button>'}</code>
                            </td>
                            <td>—</td>
                            <td>
                                {'Всегда. Не заменять на '}
                                <code>{'<div>'}</code>
                            </td>
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
                                <code>aria-disabled=&quot;true&quot;</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>Loading=True</code>
                                {' (остаётся в tab-order)'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>—</td>
                            <td>
                                <code>Disabled=True</code>
                                {' — нативный атрибут'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ul className="article-list plain">
                <li>Контрастность текста: минимум 4.5:1 (WCAG AA)</li>
                <li>Negative/Warning не передаются только цветом — нужна иконка или явный label</li>
            </ul>

            <h2 id="p-8-design-tokens">8. Design Tokens</h2>

            <h3 id="accent-osnovnoe-deystvie">Accent (основное действие)</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Роль</th>
                            <th>SDDS Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Фон default</td>
                            <td>
                                <code>Surfaces/Default/Accent/Solid/Accent</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Текст / иконка</td>
                            <td>
                                <code>Text&Icons/Default/General/Primary</code>
                                {' (на акцентном фоне)'}
                            </td>
                        </tr>
                        <tr>
                            <td>Фон disabled</td>
                            <td>
                                <code>Surfaces/Default/General/Solid/Tertiary</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Текст disabled</td>
                            <td>
                                <code>Text&Icons/Default/General/Tertiary</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="secondary">Secondary</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Роль</th>
                            <th>SDDS Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Фон default</td>
                            <td>
                                <code>Surfaces/Default/General/Solid/Secondary</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Обводка</td>
                            <td>
                                <code>Outlines/Default/General/Solid/Secondary</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Текст</td>
                            <td>
                                <code>Text&Icons/Default/General/Primary</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="negative">Negative</h3>

            <div className="callout">
                <p>
                    <code>View=Negative</code>
                    {' в SDDS компонентах соответствует токенам группы '}
                    <code>Status/Error</code>
                    {' в коллекции Styles. Это разные уровни: Figma-проп называется '}
                    <code>Negative</code>
                    {', путь токена содержит '}
                    <code>Error</code>.
                </p>
            </div>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Роль</th>
                            <th>SDDS Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Фон default</td>
                            <td>
                                <code>Surfaces/Default/Status/Solid/Error</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Текст</td>
                            <td>
                                <code>Text&Icons/onDark/General/Primary</code>
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
