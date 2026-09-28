import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink, parseStyle } from '../shared';

export default function DocStatesPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Основы</SiteLink>
                <i>/</i>
                <span>States</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Основы</span>

                <span>Состояния компонентов</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>States</h1>

            <p className="article-lead">
                Стандарты состояний компонентов SDDS: визуальное отображение и правила комбинирования.
            </p>

            <p>
                {'См. также: '}
                <SiteLink href="/docs/props-vocabulary">
                    <code>props-vocabulary.md</code>
                </SiteLink>
                {' — свойства состояний, '}
                <SiteLink href="/docs/theming">
                    <code>theming.md</code>
                </SiteLink>
                {' — токены состояний, '}
                <SiteLink href="/docs/validation-model">
                    <code>validation-model.md</code>
                </SiteLink>
                {' — валидация форм.'}
            </p>

            <p>
                <b>Важно!</b>
            </p>

            <ol className="article-list">
                <li>
                    <b>Дизайн:</b>
                    {
                        ' макеты SDDS предоставляют рекомендуемый набор состояний для компонентов и их визуал. Пользователь может удалять/добавлять состояния в дизайне, а также стилизовать компонент в каждом состоянии под свой продукт.'
                    }
                </li>
                <li>
                    <b>Разработка:</b>
                    {' техническая реализация обеспечивает поддержку всех возможных состояний компонента.'}
                </li>
            </ol>

            <h2 id="p-1-osnovnye-principy">1. Основные принципы</h2>

            <h3 id="p-1-1-konsistentnost">1.1 Консистентность</h3>

            <p>
                Рекомендуется использовать единые логику и правила отображения состояний для всех компонентов продукта:
                одинаковые токены, анимации, длительности переходов.
            </p>

            <h3 id="p-1-2-predskazuemost">1.2 Предсказуемость</h3>

            <p>Для повышения понимания интерфейса пользователем рекомендуется через визуал состояния отображать:</p>

            <ul className="article-list plain">
                <li>текущее состояние компонента;</li>
                <li>можно ли взаимодействовать с компонентом;</li>
                <li>произошло ли действие.</li>
            </ul>

            <h3 id="p-1-3-dostupnost">1.3 Доступность</h3>

            <p>
                В соответствии с принципами инклюзивного дизайна и рекомендациями WCAG состояния должны быть различимы и
                обеспечиваться независимо от цветового восприятия.
            </p>

            <p>Рекомендуется:</p>

            <ul className="article-list plain">
                <li>применять комбинированные индикаторы (цвет + подсказка, цвет + иконка и т.п.);</li>
                <li>гарантировать видимость состояний при клавиатурной навигации (чёткий индикатор фокуса);</li>
                <li>
                    поддерживать семантическую передачу состояний через API доступности (ARIA-роли, состояния и
                    свойства).
                </li>
            </ul>

            <h2 id="p-2-kategorii-sostoyaniy">2. Категории состояний</h2>

            <p>В дизайн-системе SDDS состояния компонентов разделены на 7 семантических категорий:</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Категория</th>
                            <th>Состояния</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <b>Interaction States</b>
                            </td>
                            <td>
                                Кратковременные состояния при взаимодействии пользователя с компонентом. Отражают
                                реакцию компонента на действия пользователя
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Selection States</b>
                            </td>
                            <td>
                                Состояния выбора. Отражают устойчивое значение компонента, которое сохраняется после
                                взаимодействия
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Availability States</b>
                            </td>
                            <td>
                                Состояния доступности. Отражают функциональную доступность компонента (ограничивают или
                                запрещают взаимодействие)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Data States</b>
                            </td>
                            <td>Состояния данных. Отражают статус содержимого компонента</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Process & Feedback States</b>
                            </td>
                            <td>Состояния процесса и обратной связи. Информируют о статусе процесса или результате</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Visibility States</b>
                            </td>
                            <td>Состояния видимости. Отвечают за отображение и раскрытие контента в компоненте</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Drag and Drop</b>
                            </td>
                            <td>
                                Специфическое мульти-состояние с собственной логикой и визуальными паттернами для
                                каждого шага
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-1-interaction-states">2.1 Interaction States</h3>

            <p>Состояния кратковременного взаимодействия.</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Состояние</th>
                            <th>Описание</th>
                            <th>Свойство в дизайне</th>
                            <th>Примеры компонентов</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>default</code>
                            </td>
                            <td>Базовое состояние компонента: готов к взаимодействию, стандартные стили</td>
                            <td>—</td>
                            <td>Все</td>
                        </tr>
                        <tr>
                            <td>
                                <code>hovered</code>
                            </td>
                            <td>
                                Показывает пользователю, что компонент интерактивен. Отображается при наведении курсора
                            </td>
                            <td>В макетах опционально Hovered=True/False (boolean)</td>
                            <td>Button, Chip, TextField, Link</td>
                        </tr>
                        <tr>
                            <td>
                                <code>focused</code>
                            </td>
                            <td>
                                Состояние, при котором компонент готов к взаимодействию с клавиатуры или к вводу данных
                            </td>
                            <td>
                                {'В макетах опционально Focused=True/False (boolean). Правила отображения фокуса — в '}
                                <SiteLink href="/docs/accessibility">
                                    <code>accessibility.md</code>
                                </SiteLink>
                            </td>
                            <td>
                                Группа Input Controls (элементы ввода) — фокус, обозначающий готовность к вводу данных;
                                Button, Chip, CheckBox — готовность к взаимодействию
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>actived/pressed</code>
                            </td>
                            <td>
                                Состояние получения системой сигнала о взаимодействии с компонентом (активация
                                компонента в момент нажатия)
                            </td>
                            <td>В макетах опционально Actived=True/False (boolean)</td>
                            <td>Button, Chip, Link</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-2-selection-states">2.2 Selection States</h3>

            <p>Состояния выбора.</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Состояние</th>
                            <th>Описание</th>
                            <th>Свойство в дизайне</th>
                            <th>Компоненты</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>selected</code>
                            </td>
                            <td>
                                Состояние визуально подтверждает выбор пользователем компонента или его части (элемента)
                            </td>
                            <td>Selected=True/False (boolean)</td>
                            <td>Элементы списков (ListItem)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>checked</code>
                            </td>
                            <td>Частный случай Selected для контролов или отображением индикацией</td>
                            <td>Checked=True/False (boolean)</td>
                            <td>CheckBox, RadioBox</td>
                        </tr>
                        <tr>
                            <td>
                                <code>turnedOn</code>
                            </td>
                            <td>Включённое состояние (компонент имеет тумблер, переключатель)</td>
                            <td>TurnedOn=True/False (boolean)</td>
                            <td>Switch</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-3-availability-states">2.3 Availability States</h3>

            <p>Состояния доступности.</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Состояние</th>
                            <th>Описание</th>
                            <th>Свойство в дизайне</th>
                            <th>Компоненты</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>disabled</code>
                            </td>
                            <td>Компонент недоступен для взаимодействия</td>
                            <td>Disabled=True/False (boolean)</td>
                            <td>Группа Input Controls (элементы ввода), Button, Chip</td>
                        </tr>
                        <tr>
                            <td>
                                <code>readOnly</code>
                            </td>
                            <td>
                                Компонент доступен только для просмотра, нельзя редактировать, но в отличие от disabled
                                данные отправляются на сервер и остаются доступными для копирования
                            </td>
                            <td>ReadOnly=True/False (boolean)</td>
                            <td>Группа Input Controls (элементы ввода)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-4-data-states">2.4 Data States</h3>

            <p>Состояния данных.</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Состояние</th>
                            <th>Описание</th>
                            <th>Свойство в дизайне</th>
                            <th>Компоненты</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>filled</code>
                            </td>
                            <td>Состояние, обозначающее, что компонент заполнен данными</td>
                            <td>Filled=True/False (boolean)</td>
                            <td>Группа Input Controls (элементы ввода)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>emptyState</code>
                            </td>
                            <td>Пустое состояние компонента (компонент не содержит данных)</td>
                            <td>EmptyState=True/False (boolean)</td>
                            <td>Списки (List)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-5-process-amp-feedback-states">2.5 Process & Feedback States</h3>

            <p>Состояния процесса и обратной связи.</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Состояние</th>
                            <th>Описание</th>
                            <th>Свойство в дизайне</th>
                            <th>Компоненты</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>loading</code>
                            </td>
                            <td>Состояние обработки/загрузки данных</td>
                            <td>Loading=True/False (boolean)</td>
                            <td>Button</td>
                        </tr>
                        <tr>
                            <td>
                                <code>undefined</code>
                            </td>
                            <td>Пустое состояние компонента (компонент не содержит данных)</td>
                            <td>—</td>
                            <td>
                                Индикатор прогресса — компонент прогресса инициализирован, но процент выполнения
                                неизвестен
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>ValidationState: Error/Success/Warning</code>
                            </td>
                            <td>
                                Определяют текущий статус выполнения операции и тип обратной связи для пользователя:
                                error — действие не выполнено из-за ошибки; success — действие успешно завершено;
                                warning — действие выполнено, но есть важные условия/ограничения
                            </td>
                            <td>ValidationState=Error/Success/Warning</td>
                            <td>Группа Input Controls (элементы ввода)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-6-visibility-states">2.6 Visibility States</h3>

            <p>Состояния видимости.</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Состояние</th>
                            <th>Описание</th>
                            <th>Свойство в дизайне</th>
                            <th>Компоненты</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>hidden</code>
                            </td>
                            <td>Компонент или его элементы скрыты из интерфейса (не отображается)</td>
                            <td>Hidden=True/False (boolean)</td>
                            <td>CodeInput, CodeField</td>
                        </tr>
                        <tr>
                            <td>
                                <code>opened</code>
                            </td>
                            <td>Состояние, отражающее открытие/раскрытие компонента</td>
                            <td>Opened=True/False (boolean)</td>
                            <td>DropDown, Select, Accordion</td>
                        </tr>
                        <tr>
                            <td>
                                <code>visible</code>
                            </td>
                            <td>Состояние отображения контента</td>
                            <td>—</td>
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-7-drag-and-drop">2.7 Drag and Drop</h3>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Состояние</th>
                            <th>Описание</th>
                            <th>Свойство в дизайне</th>
                            <th>Компоненты</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Drag and Drop</td>
                            <td>Состояние изменения иерархической структуры списка</td>
                            <td>Этапы состояния, логика и визуальное отображение шагов описаны в документации</td>
                            <td>Tree</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-3-kombinirovanie-sostoyaniy-pravila-isklyucheniya-i-ierarhiya-prioritetov">
                3. Комбинирование состояний: правила, исключения и иерархия приоритетов
            </h2>

            <div className="callout">
                <p>
                    <b>Примечание.</b>
                    {
                        ' В разделе приведены типовые комбинации и взаимоисключения состояний. Полный перечень состояний и их сочетаний для каждого компонента содержится в его свойствах и вариациях. Взаимоисключаемые состояния нельзя комбинировать на уровне API компонента.'
                    }
                </p>
            </div>

            <h3 id="p-3-1-kombinirovanie-sostoyaniy">3.1 Комбинирование состояний</h3>

            <p>
                Категории состояний можно комбинировать между собой для более точного реагирования интерфейса на
                действия пользователя.
            </p>

            <p>Примеры возможных комбинаций:</p>

            <p>
                <b>Data + Availability:</b>
            </p>

            <ul className="article-list plain">
                <li>
                    Filled + ReadOnly — состояние «доступен только для чтения» возможно ТОЛЬКО в заполненном данными
                    компоненте
                </li>
                <li>Filled + Hidden — заполненные скрытые данные</li>
                <li>Filled + Disabled — заполненный, но недоступный для взаимодействия компонент</li>
            </ul>

            <p>
                <b>Interaction + Availability:</b>
            </p>

            <ul className="article-list plain">
                <li>
                    Focused + ReadOnly — состояние «доступен только для чтения» с фокусной рамкой при взаимодействии
                    через клавиатуру
                </li>
                <li>Selected + ReadOnly — выбранный, но не редактируемый элемент</li>
            </ul>

            <p>
                <b>Interaction + Interaction:</b>
            </p>

            <ul className="article-list plain">
                <li>Selected + Checked — элемент выбран и отмечен контролом или индикацией</li>
                <li>Hovered + Focused — наведён курсор и фокус клавиатуры</li>
            </ul>

            <p>
                <b>Interaction + Feedback:</b>
            </p>

            <ul className="article-list plain">
                <li>Actived + Loading — элемент нажат и данные/действие загружается</li>
            </ul>

            <h3 id="p-3-2-vzaimoisklyuchayuschie-sostoyaniya">3.2 Взаимоисключающие состояния</h3>

            <p>
                Комбинирование состояний из одной категории чаще неверно — такие состояния взаимоисключающие, например:
            </p>

            <ul className="article-list plain">
                <li>
                    <b>Availability States:</b>
                    {' disabled и readOnly — если элемент отключён, он уже не может быть «только для чтения»;'}
                </li>
                <li>
                    <b>Visibility States:</b>
                    {' Hidden и Visible;'}
                </li>
                <li>
                    <b>Interaction States:</b>
                    {' Actived заменяет Hovered в момент клика.'}
                </li>
            </ul>

            <p>Исключения — нестрого взаимоисключающие состояния, но с приоритетом:</p>

            <ul className="article-list plain">
                <li>Hovered и Focused могут быть одновременно, но Active заменяет их в момент клика;</li>
                <li>
                    Selected и Checked взаимоисключаемые на уровне одного простого компонента, но возможны одновременно
                    при компоновке элементов в компоненте, например: элемент списка с чекбоксом.
                </li>
            </ul>

            <p>Недопустимые комбинации состояний компонента нельзя одновременно выбрать в дизайне и коде.</p>

            <h3 id="p-3-3-prioritet-sostoyaniy">3.3 Приоритет состояний</h3>

            <p>
                При конфликте состояний применяется самое высокоприоритетное из них. Нижестоящие состояния либо
                игнорируются, либо визуально подавляются.
            </p>

            <p>Порядок приоритета групп состояний:</p>

            <ol className="article-list">
                <li>Visibility States</li>
                <li>Availability States</li>
                <li>Process & Feedback States</li>
                <li>Dropping</li>
                <li>Selection States</li>
                <li>Data States</li>
                <li>Interaction States</li>
            </ol>

            <p>
                {'Пример: '}
                <code>Disabled → Loading → Error → Focus → Hovered → Default</code>
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
