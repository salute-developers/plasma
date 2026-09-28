import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocInteractionModelPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Основы</SiteLink>
                <i>/</i>
                <span>Interaction Model</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Основы</span>

                <span>Взаимодействие</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Interaction Model</h1>

            <p className="article-lead">Общие правила взаимодействия компонентов SDDS.</p>

            <p>
                <b>См. также:</b>{' '}
                <SiteLink href="/docs/states">
                    <code>states.md</code>
                </SiteLink>
                {' — состояния компонентов, '}
                <SiteLink href="/docs/validation-model">
                    <code>validation-model.md</code>
                </SiteLink>
                {' — валидация форм, '}
                <SiteLink href="/docs/accessibility">
                    <code>accessibility.md</code>
                </SiteLink>
                {' — доступность.'}
            </p>

            <h2 id="principy">Принципы</h2>

            <ul className="article-list plain">
                <li>
                    <b>Native first</b>
                    {' — если нативный HTML-элемент даёт корректное поведение, используйте его как основу'}
                </li>
                <li>
                    <b>Одно действие — один результат</b>
                    {' — Click, Enter и Space не запускают разные сценарии'}
                </li>
                <li>
                    <b>Keyboard parity</b>
                    {' — всё доступное мышью доступно с клавиатуры'}
                </li>
                <li>
                    <b>Predictable focus</b>
                    {' — пользователь понимает, где фокус и куда он перейдёт'}
                </li>
            </ul>

            <h2 id="focus-model">Focus model</h2>

            <ul className="article-list plain">
                <li>
                    <code>Tab</code>
                    {' → следующий интерактивный элемент'}
                </li>
                <li>
                    <code>Shift+Tab</code>
                    {' → предыдущий интерактивный элемент'}
                </li>
                <li>
                    <code>Disabled=True</code>
                    {' — элемент исключается из tab-order'}
                </li>
                <li>
                    <code>ReadOnly=True</code>
                    {' — элемент остаётся в tab-order'}
                </li>
                <li>Focus ring обязателен и не зависит только от цвета</li>
            </ul>

            <h3 id="sostavnye-komponenty">Составные компоненты</h3>

            <p>
                <b>Фокус остаётся на триггере:</b>
            </p>

            <ul className="article-list plain">
                <li>Select, DatePicker, ComboBox, Popover</li>
            </ul>

            <p>
                <b>Фокус переходит внутрь:</b>
            </p>

            <ul className="article-list plain">
                <li>CheckBoxGroup, RadioBox Group, CalendarGrid, Tabs, TreeSelect</li>
            </ul>

            <h2 id="activation-model">Activation model</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Триггер</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Click</code>
                            </td>
                            <td>Активация</td>
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
                            <td>Активация для button-like контролов</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="selection-patterns">Selection patterns</h2>

            <h3 id="edinstvennyy-vybor">Единственный выбор</h3>

            <p>
                {'RadioBox, Segment, Tabs — выбирается один вариант. Навигация стрелками. Состояние: '}
                <code>checked</code>
                {' / '}
                <code>selected</code>.
            </p>

            <h3 id="mnozhestvennyy-vybor">Множественный выбор</h3>

            <p>
                {'CheckBox, Select Multiple, Chip — каждый элемент независим. Состояние: '}
                <code>checked</code>.
            </p>

            <h3 id="switch">Switch</h3>

            <p>
                {'Switch — мгновенное переключение без submit. Состояние: '}
                <code>Turn On=on/off</code>.
            </p>

            <h2 id="open-close-model">Open / Close model</h2>

            <p>
                <b>Открывается по:</b>
                {' Click, Enter, Space, иногда ArrowDown (Select, ComboBox)'}
            </p>

            <p>
                <b>Закрывается по:</b>
            </p>

            <ul className="article-list plain">
                <li>
                    <code>Escape</code>
                </li>
                <li>Click outside</li>
                <li>Выбор опции (если сценарий одношаговый)</li>
                <li>Явное действие (Close, Cancel)</li>
            </ul>

            <p>
                <b>После закрытия:</b>
                {' фокус возвращается на триггер.'}
            </p>

            <h2 id="keyboard-patterns">Keyboard patterns</h2>

            <h3 id="button-like-basicbutton-iconbutton-embeddedbutton">
                Button-like (BasicButton, IconButton, EmbeddedButton)
            </h3>

            <p>
                <code>Tab</code>
                {' / '}
                <code>Shift+Tab</code>
                {', '}
                <code>Enter</code>
                {', '}
                <code>Space</code>
            </p>

            <h3 id="field-like-textfield-textarea-numberinput">Field-like (TextField, TextArea, NumberInput)</h3>

            <p>
                <code>Tab</code>
                {' / '}
                <code>Shift+Tab</code>, текстовый ввод
            </p>

            <h3 id="list-selection-radiobox-group-segment-select-options">
                List selection (RadioBox Group, Segment, Select options)
            </h3>

            <p>
                <code>Tab</code>
                {' / '}
                <code>Shift+Tab</code>
                {', '}
                <code>Arrow keys</code>
                {', '}
                <code>Enter</code>
                {' / '}
                <code>Space</code>
                {', '}
                <code>Escape</code>
            </p>

            <h3 id="range-slider-range">Range (Slider, Range)</h3>

            <p>
                <code>Tab</code>
                {', '}
                <code>Arrow keys</code>
                {', '}
                <code>Home</code>
                {', '}
                <code>End</code>
            </p>

            <h2 id="disabled-vs-read-only">Disabled vs Read-only</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Параметр</th>
                            <th>Disabled</th>
                            <th>Read-only</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Принимает ввод</td>
                            <td>✗</td>
                            <td>✗</td>
                        </tr>
                        <tr>
                            <td>Открывается</td>
                            <td>✗</td>
                            <td>✗</td>
                        </tr>
                        <tr>
                            <td>В tab-order</td>
                            <td>✗</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Значение видимо</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Значение копируется</td>
                            <td>—</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Figma-проп</td>
                            <td>
                                <code>Disabled=True</code>
                            </td>
                            <td>
                                <code>ReadOnly=True</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="touch-patterns">Touch patterns</h2>

            <p>На мобильных платформах мышь заменяется касанием. Ключевые отличия:</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Действие</th>
                            <th>Mouse</th>
                            <th>Touch</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Активация</td>
                            <td>
                                <code>click</code>
                            </td>
                            <td>
                                <code>tap</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Наведение</td>
                            <td>
                                <code>hover</code>
                            </td>
                            <td>— (не существует)</td>
                        </tr>
                        <tr>
                            <td>Удержание</td>
                            <td>
                                <code>mousedown</code>
                                {' длительное'}
                            </td>
                            <td>
                                <code>long press</code>
                                {' (нестандартно, избегать)'}
                            </td>
                        </tr>
                        <tr>
                            <td>Прокрутка</td>
                            <td>
                                <code>scroll</code>
                            </td>
                            <td>
                                <code>swipe</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <b>Нет hover на touch.</b>
                {' Компоненты не должны прятать критичный контент за hover-состоянием — на мобильных оно недостижимо.'}
            </p>

            <p>
                <b>Swipe-паттерны:</b>
            </p>

            <ul className="article-list plain">
                <li>Drawer, BottomSheet — закрываются свайпом в сторону/вниз</li>
                <li>Carousel — переключение свайпом по горизонтали</li>
            </ul>

            <h2 id="drag-patterns">Drag patterns</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Компонент</th>
                            <th>Действие</th>
                            <th>Keyboard-альтернатива</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Slider</td>
                            <td>Drag ползунка</td>
                            <td>Arrow keys, Home, End</td>
                        </tr>
                        <tr>
                            <td>Range</td>
                            <td>Drag двух ползунков</td>
                            <td>Tab между ползунками, Arrow keys</td>
                        </tr>
                        <tr>
                            <td>Dropzone</td>
                            <td>Drag & drop файлов</td>
                            <td>Click для открытия диалога файлов</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>Drag всегда требует keyboard-альтернативы — компонент без неё нарушает WCAG 2.1 SC 2.1.1.</p>

            <h2 id="async-feedback">Async feedback</h2>

            <h3 id="loading">Loading</h3>

            <p>
                Блокирует повторный запуск. Не должен менять размер компонента. Визуально заметен (спиннер вместо иконки
                или лейбла).
            </p>

            <h3 id="oshibka-posle-async-operacii">Ошибка после async-операции</h3>

            <p>Если операция завершилась ошибкой:</p>

            <ul className="article-list plain">
                <li>
                    {'Компонент возвращается из '}
                    <code>loading</code>
                    {' в исходное состояние'}
                </li>
                <li>
                    Ошибка отображается через Toast (<code>View=Negative</code>
                    {') или '}
                    <code>View=Error</code>
                    {' на поле — в зависимости от контекста'}
                </li>
                <li>Фокус возвращается на элемент, который инициировал операцию</li>
                <li>Кнопка снова становится интерактивной — пользователь может повторить попытку</li>
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
