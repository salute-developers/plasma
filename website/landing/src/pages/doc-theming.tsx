import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocThemingPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Основы</SiteLink>
                <i>/</i>
                <span>Themes tokens</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Основы</span>

                <span>Токены и темы</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Themes tokens</h1>

            <p className="article-lead">Система тематизации на семантических токенах.</p>

            <p>
                Документация описывает архитектуру токенов системы SDDS и может использоваться как справочник для
                дизайнеров и разработчиков при построении, использовании и расширении брендовых тем.
            </p>

            <p>
                {'См. также: '}
                <SiteLink href="/docs/glossary">
                    <code>glossary.md</code>
                </SiteLink>
                {' — термины «токен», «тема», «контекст»; '}
                <SiteLink href="/docs/introducing">
                    <code>introducing.md</code>
                </SiteLink>
                {' — архитектура системы.'}
            </p>

            <h2 id="bystryy-start-figma">Быстрый старт (Figma)</h2>

            <p>Если вы дизайнер и только начинаете работать с SDDS в Figma:</p>

            <ol className="article-list">
                <li>
                    {'Откройте файл '}
                    <code>SDDS | Styles</code>
                    {' (fileKey '}
                    <code>0FxQGHmGUOCjtHM3N9j4Oq</code>)
                </li>
                <li>
                    {'В правой панели → '}
                    <b>Local Variables</b>
                    {' — здесь хранятся все токены'}
                </li>
                <li>
                    {'Чтобы применить тему к макету — выделите фрейм и переключите коллекцию '}
                    <code>01. Theme</code>
                    {' в нужный вариант'}
                </li>
                <li>Компоненты обновятся автоматически — цвета подтянутся из новой коллекции</li>
            </ol>

            <p>
                Если компонент не меняет цвет при смене темы — он использует захардкоженное значение вместо токена. Это
                баг, а не норма.
            </p>

            <h2 id="p-1-obschaya-arhitektura-tokenov">1. Общая архитектура токенов</h2>

            <ul className="article-list plain">
                <li>
                    <b>Color Tokens</b>
                    {' — токены цвета'}
                </li>
                <li>
                    <b>Typography Tokens</b>
                    {' — токены шрифта'}
                </li>
                <li>
                    <b>Shadow Tokens</b>
                    {' — токены теней'}
                </li>
                <li>
                    <b>Shape Tokens</b>
                    {' — токены скруглений'}
                </li>
                <li>
                    <b>Blur Tokens</b>
                    {' — токены размытия'}
                </li>
            </ul>

            <h3 id="theme-tema">Theme / Тема</h3>

            <p>
                В дизайн-системе SDDS стиль бренда и переопределение под него компонентов задаётся через Тему — набор
                семантических токенов, определяющий визуальную идентичность продукта, а не конкретные значения напрямую.
                Это позволяет переключать темы без изменения компонентов.
            </p>

            <h2 id="p-2-color-tokens-tokeny-cveta">2. Color Tokens — токены цвета</h2>

            <p>
                Токен цвета — это семантически именованная единица, которая хранит не конкретный цвет, а смысл
                применения этого цвета в интерфейсе. Компоненты никогда не обращаются к Raw Values напрямую — только
                через семантические токены.
            </p>

            <pre className="doc-code">
                <code>
                    {
                        'Raw Value        →  Base Token  →  Semantic Token         →  Component\n#118CDF             Blue[500]      DefaultSurfaceAccent      ButtonBG\n                                   DefaultTextAccent         LinkButton'
                    }
                </code>
            </pre>

            <p>
                <b>Важно:</b>
                {
                    ' один Raw Value → один Base Token → много Semantic Tokens. Это обеспечивает единую точку изменения цвета для всей темы.'
                }
            </p>

            <h3 id="p-2-1-struktura-tokena-cveta">2.1 Структура токена цвета</h3>

            <p>
                {'Токены структурированы по схеме: '}
                <b>Режим / Контекст / Область применения / Семантическая роль (+ Состояние)</b>.
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Слой</th>
                            <th>Design</th>
                            <th>Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Режим (Mode)</td>
                            <td>
                                <span aria-hidden="true">🌑</span>
                            </td>
                            <td>— (отдельные файлы Theme)</td>
                        </tr>
                        <tr>
                            <td>Контекст (Context)</td>
                            <td>Default</td>
                            <td>
                                <code>default</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Область применения</td>
                            <td>Surface</td>
                            <td>
                                <code>surface</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Семантическая роль</td>
                            <td>TransparentPositive</td>
                            <td>
                                <code>transparent-positive</code>
                            </td>
                        </tr>
                        <tr>
                            <td>Состояние</td>
                            <td>Hover</td>
                            <td>
                                <code>hover</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-2-mode-rezhim-otobrazheniya-interfeysa">2.2 Mode — режим отображения интерфейса</h3>

            <p>В SDDS каждый токен цвета существует в двух режимах: светлом и тёмном.</p>

            <p>Значения:</p>

            <ul className="article-list plain">
                <li>
                    <b>В дизайне</b>
                    {': выбирается через Variables '}
                    <code>01. Theme</code>
                    {' = <span aria-hidden="true">🌕</span> Light / <span aria-hidden="true">🌑</span> Dark'}
                </li>
                <li>
                    <b>В коде</b>: заданы отдельными файлами Theme
                </li>
            </ul>

            <h3 id="p-2-3-context-kontekst-primeneniya">2.3 Context — контекст применения</h3>

            <p>Определяет поверхность, на которой отрисовывается элемент.</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Context</th>
                            <th>Применение</th>
                            <th>Поведение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <b>Default</b>
                            </td>
                            <td>Элементы на основном фоне темы</td>
                            <td>По умолчанию, значения токенов меняются в зависимости от Mode</td>
                        </tr>
                        <tr>
                            <td>
                                <b>OnDark</b>
                            </td>
                            <td>Элемент находится на тёмной поверхности</td>
                            <td>Статические значения токенов из тёмной темы, не меняются при переключении Mode</td>
                        </tr>
                        <tr>
                            <td>
                                <b>OnLight</b>
                            </td>
                            <td>Элемент находится на светлой поверхности</td>
                            <td>Статические значения токенов из светлой темы, не меняются при переключении Mode</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Inverse</b>
                            </td>
                            <td>Инвертированный контекст (тема внутри темы)</td>
                            <td>Значения из противоположного Mode</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                {'Пример поведения токена '}
                <code>TextPrimary</code>
                {' в зависимости от контекста:'}
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Mode</th>
                            <th>Context</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span aria-hidden="true">🌕</span> Light
                            </td>
                            <td>Default</td>
                            <td>
                                <code>#080808</code>
                                {' — чёрный текст на светлом фоне'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span aria-hidden="true">🌕</span> Light
                            </td>
                            <td>OnDark</td>
                            <td>
                                <code>#FFFFFF</code>
                                {' — белый текст поверх тёмного блока'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span aria-hidden="true">🌕</span> Light
                            </td>
                            <td>OnLight</td>
                            <td>
                                <code>#080808</code>
                                {' — чёрный текст поверх светлого блока'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span aria-hidden="true">🌕</span> Light
                            </td>
                            <td>Inverse</td>
                            <td>
                                <code>#FFFFFF</code>
                                {' — как будто применяется Dark-тема'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span aria-hidden="true">🌑</span> Dark
                            </td>
                            <td>Default</td>
                            <td>
                                <code>#FFFFFF</code>
                                {' — белый текст на тёмном фоне'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span aria-hidden="true">🌑</span> Dark
                            </td>
                            <td>OnDark</td>
                            <td>
                                <code>#FFFFFF</code>
                                {' — белый текст поверх тёмного блока'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span aria-hidden="true">🌑</span> Dark
                            </td>
                            <td>OnLight</td>
                            <td>
                                <code>#080808</code>
                                {' — чёрный текст поверх светлого блока'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span aria-hidden="true">🌑</span> Dark
                            </td>
                            <td>Inverse</td>
                            <td>
                                <code>#FFFFFF</code>
                                {' — как будто применяется Dark-тема'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-4-oblast-primeneniya-kategoriya">2.4 Область применения / Категория</h3>

            <p>Определяет, к какому слою UI-элемента или интерфейса применяется токен.</p>

            <ul className="article-list plain">
                <li>
                    <b>Text</b>
                    {' — цвет текста и иконок'}
                </li>
                <li>
                    <b>Surface</b>
                    {' — цвет поверхностей (фона) компонентов'}
                </li>
                <li>
                    <b>Outline</b>
                    {' — цвет обводок и фокуса компонентов'}
                </li>
                <li>
                    <b>BG</b>
                    {' — фон страниц, группа не применима к компонентам'}
                </li>
                <li>
                    <b>Overlay</b>
                    {' — наложение под модальными окнами'}
                </li>
                <li>
                    <b>Syntax</b>
                    {' — подсветка синтаксиса кода'}
                </li>
                <li>
                    <b>Data</b>
                    {' — токены для визуализации данных и графиков'}
                </li>
            </ul>

            <p>
                Один и тот же смысловой цвет (например, «акцентный») существует отдельно для каждой группы, потому что
                значения могут быть одинаковыми, а могут отличаться:
            </p>

            <ul className="article-list plain">
                <li>
                    <code>TextAccent</code>
                    {' — Green[600] ('}
                    <code>#108E26</code>) — насыщенный для текста
                </li>
                <li>
                    <code>SurfaceAccent</code>
                    {' — Green[400] ('}
                    <code>#24B23E</code>) — более светлый оттенок цвета
                </li>
                <li>
                    <code>OutlineAccent</code>
                    {' — Green[600] ('}
                    <code>#108E26</code>) — цвет обводки в цвет текста
                </li>
            </ul>

            <h3 id="p-2-5-semanticheskaya-rol">2.5 Семантическая роль</h3>

            <p>
                Роль описывает смысл и иерархию токена внутри группы. Ниже приведены примеры ролей; полный список
                семантических токенов — в базовом наборе токенов цвета.
            </p>

            <p>
                <b>General</b>
                {
                    ' — иерархические роли. Используются для построения визуальной иерархии от главного к второстепенному.'
                }
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Примеры токенов</th>
                            <th>Роль</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>TextPrimary</code>
                            </td>
                            <td>Основной текст</td>
                        </tr>
                        <tr>
                            <td>
                                <code>TextSecondary</code>
                            </td>
                            <td>Вторичный текст</td>
                        </tr>
                        <tr>
                            <td>
                                <code>TextTertiary</code>
                            </td>
                            <td>Третичный текст</td>
                        </tr>
                        <tr>
                            <td>
                                <code>TextParagraph</code>
                            </td>
                            <td>Текст параграфов</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfacePrimary</code>
                            </td>
                            <td>Основной непрозрачный фон поверхности/контрола</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfaceSecondary</code>
                            </td>
                            <td>Вторичный непрозрачный фон поверхности/контрола</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfaceTransparentPrimary</code>
                            </td>
                            <td>Основной прозрачный фон поверхности/контрола</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <b>Accent</b>
                {' — акцентные роли. Фирменный/акцентный цвет бренда.'}
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Примеры токенов</th>
                            <th>Роль</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>TextAccent</code>
                            </td>
                            <td>Акцентный цвет текста</td>
                        </tr>
                        <tr>
                            <td>
                                <code>TextAccentMinor</code>
                            </td>
                            <td>Приглушённый, менее интенсивный акцентный цвет текста</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfaceAccent</code>
                            </td>
                            <td>Акцентный фон поверхности/контрола</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <b>Status</b>
                {' — статусные роли. Несут смысловую нагрузку.'}
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Примеры токенов</th>
                            <th>Роль</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>TextPositive</code>
                            </td>
                            <td>Цвет успеха текстового блока</td>
                        </tr>
                        <tr>
                            <td>
                                <code>TextWarning</code>
                            </td>
                            <td>Цвет предупреждения текстового блока</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfacePositive</code>
                            </td>
                            <td>Цвет успеха фона поверхности/контрола</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfaceWarning</code>
                            </td>
                            <td>Цвет предупреждения фона поверхности/контрола</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <b>Специальные роли</b>
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Примеры токенов</th>
                            <th>Роль</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>SurfaceSkeletonGradient</code>
                            </td>
                            <td>Цвет skeleton-загрузки</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfaceReadOnly</code>
                            </td>
                            <td>Цвет состояния readOnly</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>Для уточнения роли в имя токена может добавляться модификатор:</p>

            <ul className="article-list plain">
                <li>
                    <b>Solid</b>
                    {' — непрозрачный вариант'}
                </li>
                <li>
                    <b>Transparent</b>
                    {' — вариант с прозрачностью'}
                </li>
                <li>
                    <b>Gradient</b>
                    {' — градиент'}
                </li>
                <li>
                    <b>Minor</b>
                    {' — приглушённый, менее интенсивный'}
                </li>
            </ul>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Примеры токенов с модификаторами</th>
                            <th>Роль</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>SurfaceAccent</code>
                            </td>
                            <td>Базовый вариант</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfaceTransparentAccent</code>
                            </td>
                            <td>Акцентный прозрачный фон поверхности/контрола</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfaceAccentGradient</code>
                            </td>
                            <td>Акцентный фон поверхности/контрола с градиентом</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfaceAccentMinor</code>
                            </td>
                            <td>Акцентный минорный непрозрачный фон поверхности/контрола</td>
                        </tr>
                        <tr>
                            <td>
                                <code>SurfaceAccentGradientMinor</code>
                            </td>
                            <td>Акцентный второстепенный фон поверхности/контрола с градиентом</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-6-state-sostoyanie">2.6 State — состояние</h3>

            <p>Описывает интерактивное изменение токена при взаимодействии пользователя с интерфейсом.</p>

            <ul className="article-list plain">
                <li>
                    <b>Default</b>
                    {' — отсутствует в имени, базовое состояние'}
                </li>
                <li>
                    <b>Hover</b>
                    {' — курсор наведён'}
                </li>
                <li>
                    <b>Active</b>
                    {' — элемент нажат / активен прямо сейчас'}
                </li>
            </ul>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Пример</th>
                            <th>Роль</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>TextPrimary</code>
                            </td>
                            <td>Основной цвет текста</td>
                        </tr>
                        <tr>
                            <td>
                                <code>TextPrimaryHover</code>
                            </td>
                            <td>Основной цвет текста при наведении</td>
                        </tr>
                        <tr>
                            <td>
                                <code>TextPrimaryActive</code>
                            </td>
                            <td>Основной цвет текста при нажатии</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                Значения цвета токенов для интерактивных состояний рассчитываются в SDDS по формулам для заданной
                цветовой схемы.
            </p>

            <p>Стандартные значения токенов цвета SDDS — в документации Color.</p>

            <h2 id="p-3-typography-tokens-tokeny-shrifta">3. Typography Tokens — токены шрифта</h2>

            <p>Система иерархической организации текстовой информации.</p>

            <h3 id="p-3-1-struktura">3.1 Структура</h3>

            <p>
                {'Токены типографики описывают полную систему текстовых стилей. Каждый токен — композитный объект: '}
                <b>Группа / Подгруппа / Название группы + Размер + Начертание</b>.
            </p>

            <p>
                {'Пример: '}
                <code>Display/Large Screens/DisplayL B</code>.
            </p>

            <h3 id="p-3-2-osnovnye-gruppy">3.2 Основные группы</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Группа</th>
                            <th>Назначение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <b>Display</b>
                            </td>
                            <td>Крупные заголовки-витрины (в базовой SDDS — SB Sans Display)</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Header</b>
                            </td>
                            <td>Заголовки секций (в базовой SDDS — SB Sans Text)</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Text</b>
                            </td>
                            <td>Многострочный текст (в базовой SDDS — SB Sans Text)</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Body</b>
                            </td>
                            <td>Текстовые слои внутри компонентов (в базовой SDDS — SB Sans Text)</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Numbers</b>
                            </td>
                            <td>Моноширинные числа внутри компонентов (в базовой SDDS — SB Sans Text)</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Code</b>
                            </td>
                            <td>Отображение кода внутри компонентов, CodeView (в базовой SDDS — SB Sans Text Mono)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-3-3-podgruppy">3.3 Подгруппы</h3>

            <p>
                Подгруппы разделены относительно размерных групп компонента Grid (подробнее — документация Grid).
                Определяют размер шрифта в токене в зависимости от размера устройства или области просмотра.
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Подгруппа</th>
                            <th>Назначение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <b>Large Screens</b>
                            </td>
                            <td>Размерная группа Grid — Large, большой экран</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Medium Screens</b>
                            </td>
                            <td>Размерная группа Grid — Medium, средний экран</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Small Screens</b>
                            </td>
                            <td>Размерная группа Grid — Small, маленький экран</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-3-4-razmer">3.4 Размер</h3>

            <p>
                Размер в названии токена типографики — это не конкретное значение в пикселях, а смысловое значение. Это
                позволяет менять реальные пиксели, не меняя имени токена.
            </p>

            <p>Шкала размеров — относительные буквенные метки:</p>

            <pre className="doc-code">
                <code>{'xxs < xs < s < m < l'}</code>
            </pre>

            <p>
                <b>Исключение:</b>
                {' группа Header — размер описывается числовыми значениями по возрастанию от 6 до 1.'}
            </p>

            <h3 id="p-3-5-nachertanie">3.5 Начертание</h3>

            <p>В SDDS два смысловых значения начертания типографики:</p>

            <ul className="article-list plain">
                <li>
                    <b>Bold (b)</b>
                </li>
                <li>
                    <b>Normal (n)</b>
                </li>
            </ul>

            <p>Реальное значение fontStyle задаётся пользователем.</p>

            <p>Стандартные значения токенов типографики SDDS — в документации Typography.</p>

            <h2 id="p-4-shadow-tokens-tokeny-teney">4. Shadow Tokens — токены теней</h2>

            <p>Набор значений, определяющих эффекты теней у компонентов.</p>

            <p>
                {'Структура имени: '}
                <b>Namespace / Direction / Character / Size</b>
                {' — например, '}
                <code>Shadows/Down/Soft/S</code>.
            </p>

            <ol className="article-list">
                <li>
                    <b>Namespace</b>
                    {' — группа токенов теней'}
                </li>
                <li>
                    <b>Direction</b>
                    {' — направление'}
                </li>
                <li>
                    <b>Character</b>
                    {' — характер/интенсивность'}
                </li>
                <li>
                    <b>Size</b>
                    {' — размер'}
                </li>
            </ol>

            <p>
                В SDDS есть базовый набор токенов тени, значения которых определяются переменными направления,
                интенсивности и размера.
            </p>

            <p>
                <b>Direction</b>
                {' — переменная направления:'}
            </p>

            <ul className="article-list plain">
                <li>
                    <b>Down</b>
                    {' — направлена вниз'}
                </li>
                <li>
                    <b>Up</b>
                    {' — направлена вверх'}
                </li>
                <li>
                    <b>Center</b>
                    {' — вокруг элемента'}
                </li>
            </ul>

            <p>
                <b>Character</b>
                {' — переменная интенсивности:'}
            </p>

            <ul className="article-list plain">
                <li>
                    <b>Soft</b>
                    {' — мягкая тень с большим размытием, рассеянная'}
                </li>
                <li>
                    <b>Hard</b>
                    {' — чёткая, контрастная, резкая тень'}
                </li>
            </ul>

            <p>
                <b>Size</b>
                {' — размер тени:'}
            </p>

            <ul className="article-list plain">
                <li>
                    <b>S</b>
                    {' — малая тень'}
                </li>
                <li>
                    <b>M</b>
                    {' — средняя тень'}
                </li>
                <li>
                    <b>L</b>
                    {' — большая тень'}
                </li>
            </ul>

            <p>Стандартные значения токенов тени SDDS — в документации Shadow.</p>

            <h2 id="p-5-cornerradius-tokens-tokeny-skrugleniy">5. CornerRadius Tokens — токены скруглений</h2>

            <p>Набор значений, определяющих радиус скругления углов у компонентов.</p>

            <p>
                {'Структура имени: '}
                <b>Namespace + Size</b>
                {' — например, '}
                <code>CR S</code>.
            </p>

            <ol className="article-list">
                <li>
                    <b>Namespace</b>
                    {' — группа токенов скруглений'}
                </li>
                <li>
                    <b>Size</b>
                    {' — размер'}
                </li>
            </ol>

            <p>В токенах скругления есть стандартные буквенные значения и вычисляемые.</p>

            <h3 id="p-5-1-shkala-standartnyh-razmerov">5.1 Шкала стандартных размеров</h3>

            <p>
                Размер описывается через относительные буквенные метки. Значение размера — это позиция в шкале, а не
                конкретное значение в пикселях:
            </p>

            <pre className="doc-code">
                <code>{'Null (0) < XXS < XS < S < M < L < XL < XXL < Rounded (100%)'}</code>
            </pre>

            <h3 id="p-5-2-vychislyaemye-znacheniya">5.2 Вычисляемые значения</h3>

            <p>
                В компонентах применяются промежуточные значения — расчётные токены с правилом шага ±2px от базового
                токена. Например:
            </p>

            <pre className="doc-code">
                <code>calc:[CRXXL-2], calc:[CRM-2], calc:[CRL-2], calc:[CRXL-2]</code>
            </pre>

            <p>
                Стандартные значения токенов скруглений SDDS и правила вычисления — в документации Corner Radius (
                <SiteLink href="/docs/corner-radius">
                    <code>corner-radius.md</code>
                </SiteLink>
                ).
            </p>

            <h2 id="p-6-blur-tokens-tokeny-razmytiya">6. Blur Tokens — токены размытия</h2>

            <p>Набор значений, определяющих эффекты размытия у компонентов.</p>

            <p>Токены Blur используются для:</p>

            <ul className="article-list plain">
                <li>Стеклянных / frosted-glass поверхностей</li>
                <li>Фоновых панелей с backdrop-filter</li>
                <li>Модальных окон с размытым задним планом</li>
                <li>Системы уровней глубины (depth layers)</li>
            </ul>

            <p>
                {'Структура имени: '}
                <b>Namespace / Role + Effect marker + Size</b>
                {' — например, '}
                <code>Layer/BlurS</code>.
            </p>

            <ol className="article-list">
                <li>
                    <b>Namespace</b>
                    {' — группа токенов размытия'}
                </li>
                <li>
                    <b>Role</b>
                    {' — роль применения'}
                </li>
                <li>
                    <b>Effect marker</b>
                    {' — неизменный уточняющий маркер внутри имени, явно указывает на blur-эффект'}
                </li>
                <li>
                    <b>Size</b>
                    {' — размер'}
                </li>
            </ol>

            <p>
                В SDDS есть базовый набор токенов размытия, значения которых определяются переменными роли применения и
                размера.
            </p>

            <p>
                <b>Role</b>
                {' — роль применения, определяет, к чему применяется эффект размытия:'}
            </p>

            <ul className="article-list plain">
                <li>
                    <b>Layer</b>
                    {' — размывает сам элемент'}
                </li>
                <li>
                    <b>Background</b>
                    {' — размывает фон за элементом (glass-эффект)'}
                </li>
            </ul>

            <p>
                <b>Size</b>
                {' — размер размытия:'}
            </p>

            <ul className="article-list plain">
                <li>
                    <b>S</b>
                    {' — лёгкое размытие'}
                </li>
                <li>
                    <b>M</b>
                    {' — среднее размытие'}
                </li>
                <li>
                    <b>L</b>
                    {' — сильное размытие'}
                </li>
            </ul>

            <p>Стандартные значения токенов размытия SDDS — в документации Blur.</p>

            <div className="article-foot">
                <span>Нашли расхождение документации и библиотеки — напишите команде.</span>

                <SiteLink className="side-cta" href="/contacts">
                    Сообщить о расхождении
                </SiteLink>
            </div>
        </DocsPageLayout>
    );
}
