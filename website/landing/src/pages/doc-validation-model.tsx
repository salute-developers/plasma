import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocValidationModelPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Основы</SiteLink>
                <i>/</i>
                <span>Validation Model</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Основы</span>

                <span>Валидация форм</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Validation Model</h1>

            <p className="article-lead">Правила валидации полей ввода в SDDS.</p>

            <p>
                <b>См. также:</b>{' '}
                <SiteLink href="/docs/states">
                    <code>states.md</code>
                </SiteLink>
                {' — состояния Error/Warning/Success, '}
                <SiteLink href="/docs/interaction-model">
                    <code>interaction-model.md</code>
                </SiteLink>
                {' — модель взаимодействия, '}
                <SiteLink href="/docs/accessibility">
                    <code>accessibility.md</code>
                </SiteLink>
                {' — aria-invalid, aria-required.'}
            </p>

            <h2 id="kogda-pokazyvat-validaciyu">Когда показывать валидацию</h2>

            <ul className="article-list plain">
                <li>
                    <b>После взаимодействия</b>
                    {' — пользователь покинул поле (onBlur)'}
                </li>
                <li>
                    <b>При попытке отправки</b>
                    {' — пользователь нажал Submit'}
                </li>
                <li>
                    <b>В реальном времени</b>
                    {' — только для форматных ограничений (например, максимальная длина)'}
                </li>
            </ul>

            <p>
                <b>Не показывайте ошибку на пустом нетронутом поле.</b>
            </p>

            <h2 id="sostoyaniya-validacii-view">Состояния валидации (View)</h2>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>View</th>
                            <th>Описание</th>
                            <th>Когда</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Default</code>
                            </td>
                            <td>Нейтральное состояние</td>
                            <td>Поле не тронуто или введённые данные корректны</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Error</code>
                            </td>
                            <td>Ошибка — данные невалидны</td>
                            <td>После взаимодействия, если данные не соответствуют требованиям</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Warning</code>
                            </td>
                            <td>Предупреждение</td>
                            <td>Данные допустимы, но могут вызвать проблемы</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Success</code>
                            </td>
                            <td>Успешная валидация</td>
                            <td>После успешной проверки, если визуальное подтверждение важно</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="urovni-validacii">Уровни валидации</h2>

            <p>Валидация происходит на двух уровнях:</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Уровень</th>
                            <th>Где</th>
                            <th>Когда</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <b>Поле</b>
                            </td>
                            <td>
                                <code>View=Error</code>
                                {' + hint-текст под полем'}
                            </td>
                            <td>onBlur или при submit</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Форма</b>
                            </td>
                            <td>Summary-блок в начале / конце формы</td>
                            <td>При submit, если несколько полей невалидны</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                Используйте field-level валидацию как основной механизм. Form-level summary добавляйте только когда
                полей с ошибками больше трёх — пользователь иначе не видит всех проблем сразу.
            </p>

            <h2 id="hint-i-tekst-oshibki">Hint и текст ошибки</h2>

            <p>
                {'Поле может иметь hint-текст в нейтральном состоянии и сообщение об ошибке в состоянии '}
                <code>Error</code>
                {'. Это '}
                <b>одна и та же область</b>
                {' (HintPlacement):'}
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Состояние поля</th>
                            <th>Что показывается</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>Default</code>
                            </td>
                            <td>Hint-текст (подсказка, требования к формату)</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Error</code>
                            </td>
                            <td>
                                {'Текст ошибки '}
                                <b>заменяет</b>
                                {' hint-текст'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>Warning</code>
                            </td>
                            <td>Текст предупреждения заменяет hint-текст</td>
                        </tr>
                        <tr>
                            <td>
                                <code>Success</code>
                            </td>
                            <td>Текст подтверждения или hint возвращается</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>Не показывайте hint и ошибку одновременно — это разные сообщения для разных состояний.</p>

            <h2 id="async-validaciya">Async-валидация</h2>

            <p>Применяется для проверок, требующих запроса к серверу: уникальность email, доступность логина и т.д.</p>

            <p>
                <b>Паттерн:</b>
            </p>

            <ol className="article-list">
                <li>Пользователь покидает поле (onBlur)</li>
                <li>
                    {'Поле переходит в '}
                    <code>loading</code>
                    -индикацию (Spinner в contentRight)
                </li>
                <li>
                    {'По результату — '}
                    <code>View=Error</code>
                    {' или '}
                    <code>View=Success</code>
                </li>
            </ol>

            <p>
                <b>Правила:</b>
            </p>

            <ul className="article-list plain">
                <li>
                    {'Не блокируйте submit во время проверки — покажите '}
                    <code>loading</code>
                    {' и отложите отправку'}
                </li>
                <li>Если запрос не успел завершиться до submit — выполните его синхронно</li>
                <li>Кэшируйте результат: не повторяйте запрос при повторном blur с тем же значением</li>
            </ul>

            <h2 id="obyazatelnye-i-neobyazatelnye-polya">Обязательные и необязательные поля</h2>

            <p>
                <code>Required</code>
                {' и '}
                <code>Optional</code>
                {' — взаимодополняющие маркеры. Используйте тот, которых в форме меньше:'}
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Ситуация</th>
                            <th>Решение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Большинство полей обязательны</td>
                            <td>
                                {'Отмечайте только необязательные через '}
                                <code>Optional=True</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Большинство полей необязательны</td>
                            <td>
                                {'Отмечайте только обязательные через '}
                                <code>Required=True</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Все поля обязательны</td>
                            <td>Достаточно текста &quot;Все поля обязательны&quot; — маркер на каждом избыточен</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <code>Required=True</code>
                {' — визуальный маркер, не триггер валидации. Ошибку "поле обязательно" показывает '}
                <code>View=Error</code>
                {' при submit.'}
            </p>

            <ul className="article-list plain">
                <li>
                    <code>RequiredPlacement=Left/Right/None</code>
                    {' — позиция маркера относительно лейбла'}
                </li>
            </ul>

            <h2 id="pravila">Правила</h2>

            <ul className="article-list plain">
                <li>Всегда предоставляйте текст с объяснением ошибки (через HintPlacement) — не только цвет</li>
                <li>
                    <code>Error</code>
                    {' блокирует отправку формы; '}
                    <code>Warning</code>
                    {' — нет'}
                </li>
                <li>Показывайте только одно сообщение за раз (самое важное)</li>
                <li>
                    <code>Success</code>
                    {' используйте только там, где визуальное подтверждение критично'}
                </li>
                <li>
                    {'Не используйте '}
                    <code>View=Error</code>
                    {' как стилистический приём — только для реальных ошибок'}
                </li>
                <li>Не показывайте ошибку на поле, которого пользователь ещё не касался</li>
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
