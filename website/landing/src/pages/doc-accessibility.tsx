import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink } from '../shared';

export default function DocAccessibilityPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Основы</SiteLink>
                <i>/</i>
                <span>Accessibility</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Основы</span>

                <span>Доступность</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Accessibility</h1>

            <p className="article-lead">Принципы доступности компонентов SDDS.</p>

            <p>
                Доступность (accessibility, a11y) — это практика создания продуктов, которыми могут пользоваться все
                люди, независимо от их физических, когнитивных или технических возможностей.
            </p>

            <p>
                <b>Целевой уровень: WCAG 2.1 AA.</b>
            </p>

            <p>
                {'См. также: '}
                <SiteLink href="/docs/sizes">
                    <code>sizes.md</code>
                </SiteLink>
                {' — размерная шкала, '}
                <SiteLink href="/docs/theming">
                    <code>theming.md</code>
                </SiteLink>
                {' — система тематизации на токенах.'}
            </p>

            <h2 id="p-1-osnovnye-principy">1. Основные принципы</h2>

            <p>SDDS следует четырём основным принципам WCAG — POUR.</p>

            <h3 id="p-1-1-perceivable-vosprinimaemost">1.1 Perceivable (Воспринимаемость)</h3>

            <p>
                Вся информация и компоненты интерфейса должны быть представлены таким образом, чтобы пользователи могли
                их воспринять.
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>
                                <span aria-hidden="true">✅</span> Правильно
                            </th>
                            <th>
                                <span aria-hidden="true">❌</span> Неправильно
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Изображения имеют текстовые альтернативы</td>
                            <td>Иконки без подписей или aria-label</td>
                        </tr>
                        <tr>
                            <td>Контент не зависит только от цвета</td>
                            <td>Только цветовая индикация ошибки</td>
                        </tr>
                        <tr>
                            <td>Текст можно увеличить до 200% без потери функциональности</td>
                            <td>Аудиоконтент без возможности транскрипции</td>
                        </tr>
                        <tr>
                            <td>Видео содержит субтитры</td>
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-1-2-operable-upravlyaemost">1.2 Operable (Управляемость)</h3>

            <p>Компоненты интерфейса и навигация должны быть управляемы.</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>
                                <span aria-hidden="true">✅</span> Правильно
                            </th>
                            <th>
                                <span aria-hidden="true">❌</span> Неправильно
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Весь функционал доступен с клавиатуры</td>
                            <td>Действия, доступные только через мышь</td>
                        </tr>
                        <tr>
                            <td>У пользователей достаточно времени для взаимодействия</td>
                            <td>Таймауты без возможности продления</td>
                        </tr>
                        <tr>
                            <td>Нет контента, вызывающего эпилептические припадки</td>
                            <td>{'Мигающий контент >3 раз в секунду'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-1-3-understandable-ponyatnost">1.3 Understandable (Понятность)</h3>

            <p>Информация и работа интерфейса должны быть понятны.</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>
                                <span aria-hidden="true">✅</span> Правильно
                            </th>
                            <th>
                                <span aria-hidden="true">❌</span> Неправильно
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Предсказуемое поведение элементов</td>
                            <td>Неожиданные изменения контента</td>
                        </tr>
                        <tr>
                            <td>Подсказки при ошибках ввода</td>
                            <td>Нестандартное поведение элементов интерфейса</td>
                        </tr>
                        <tr>
                            <td>Навигация предсказуема и последовательна</td>
                            <td>Непоследовательные метки для одинаковых действий</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-1-4-robust-nadezhnost">1.4 Robust (Надёжность)</h3>

            <p>Контент должен быть достаточно надёжным для интерпретации широким кругом вспомогательных технологий.</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>
                                <span aria-hidden="true">✅</span> Правильно
                            </th>
                            <th>
                                <span aria-hidden="true">❌</span> Неправильно
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Валидная HTML-разметка</td>
                            <td>Кастомные элементы без ARIA-ролей</td>
                        </tr>
                        <tr>
                            <td>Полное использование ARIA-атрибутов</td>
                            <td>Нестандартное использование HTML-тегов</td>
                        </tr>
                        <tr>
                            <td>Статус элементов программно определяем</td>
                            <td>Состояния только через визуальные стили</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-2-standarty-i-sootvetstvie">2. Стандарты и соответствие</h2>

            <h3 id="p-2-1-celevoy-uroven-sootvetstviya">2.1 Целевой уровень соответствия</h3>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Платформа</th>
                            <th>Стандарт</th>
                            <th>Уровень</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Web</td>
                            <td>WCAG 2.1</td>
                            <td>AA</td>
                        </tr>
                        <tr>
                            <td>Web (критические продукты)</td>
                            <td>WCAG 2.2</td>
                            <td>AA</td>
                        </tr>
                        <tr>
                            <td>Mobile iOS</td>
                            <td>WCAG 2.1 + Apple HIG</td>
                            <td>AA</td>
                        </tr>
                        <tr>
                            <td>Mobile Android</td>
                            <td>WCAG 2.1 + Material Guidelines</td>
                            <td>AA</td>
                        </tr>
                        <tr>
                            <td>TV/SmartTV</td>
                            <td>WCAG 2.1 (адаптировано)</td>
                            <td>A+</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-2-2-prioritizaciya-kriteriev">2.2 Приоритизация критериев</h3>

            <ul className="article-list plain">
                <li>
                    <b>Уровень A</b>
                    {
                        ' — обязателен. Минимальные требования. Несоответствие делает контент недоступным для определённых групп пользователей.'
                    }
                </li>
                <li>
                    <b>Уровень AA</b>
                    {' — целевой уровень для всех продуктов SDDS. Устраняет наиболее значимые барьеры.'}
                </li>
                <li>
                    <b>Уровень AAA</b>
                    {' — расширенный стандарт. Применяется там, где это технически и контекстуально возможно.'}
                </li>
            </ul>

            <h2 id="p-3-cvet-i-kontrast">3. Цвет и контраст</h2>

            <p>Токены SDDS и их использование в компонентах отвечают требованиям стандартов.</p>

            <p>
                Коэффициент контраста — это математическое соотношение яркости цвета текста и цвета фона. Вычисляется по
                формуле WCAG:
            </p>

            <pre className="doc-code">
                <code>Контраст = (L1 + 0.05) / (L2 + 0.05)</code>
            </pre>

            <p>где L1 — относительная яркость более светлого цвета, L2 — относительная яркость более тёмного цвета.</p>

            <p>Диапазон значений:</p>

            <ul className="article-list plain">
                <li>
                    <b>1:1</b>
                    {' — нет контраста (текст сливается с фоном)'}
                </li>
                <li>
                    <b>21:1</b>
                    {' — максимальный контраст (чёрный на белом)'}
                </li>
            </ul>

            <h3 id="p-3-1-trebovaniya-k-kontrastu">3.1 Требования к контрасту</h3>

            <p>Текст:</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Элемент</th>
                            <th>Минимальный контраст (AA)</th>
                            <th>Рекомендуемый (AAA)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Основной текст (шрифт до 18px normal, до 14px bold)</td>
                            <td>4.5:1</td>
                            <td>7:1</td>
                        </tr>
                        <tr>
                            <td>Крупный текст (шрифт от 18px normal, от 14px bold)</td>
                            <td>3:1</td>
                            <td>4.5:1</td>
                        </tr>
                        <tr>
                            <td>Текст на изображении</td>
                            <td>4.5:1</td>
                            <td>7:1</td>
                        </tr>
                        <tr>
                            <td>UI-компоненты и иконки</td>
                            <td>3:1</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>Декоративные элементы</td>
                            <td>не требуется</td>
                            <td>—</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-3-2-dopolnitelnaya-indikaciya">3.2 Дополнительная индикация</h3>

            <p>Цвет — не единственный индикатор: рекомендуется использовать дополнительные визуальные маркеры.</p>

            <p>Пример: паттерны для состояния ошибки TextField</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>
                                <span aria-hidden="true">✅</span> Правильно
                            </th>
                            <th>
                                <span aria-hidden="true">❌</span> Неправильно
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Цвет фона SurfaceTransparentNegative</td>
                            <td>Цвет фона SurfaceTransparentNegative (только цвет)</td>
                        </tr>
                        <tr>
                            <td>Иконка индикации ошибки</td>
                            <td />
                        </tr>
                        <tr>
                            <td>Подсказка к полю ввода</td>
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-4-tipografika">4. Типографика</h2>

            <p>Основные правила доступности:</p>

            <ul className="article-list plain">
                <li>
                    <b>Читаемость</b>
                    {
                        ' — используйте рекомендованные размеры шрифтов и межстрочные интервалы из SDDS. Минимальный размер основного текста — 16px.'
                    }
                </li>
                <li>
                    <b>Иерархия</b>
                    {
                        ' — стройте чёткую визуальную иерархию с помощью заголовков H1–H6. Не пропускайте уровни (например, H3 не должен идти сразу после H1).'
                    }
                </li>
            </ul>

            <h3 id="p-4-1-minimalnye-razmery-shrifta">4.1 Минимальные размеры шрифта</h3>

            <p>
                Минимальные размеры шрифта обеспечивают читаемость интерфейса и соответствие стандартам доступности
                (WCAG).
            </p>

            <p>
                <b>Важно:</b>
                {' текст меньше 12px не рекомендуется для смыслового контента.'}
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Контекст</th>
                            <th>Минимальный размер</th>
                            <th>Рекомендуемый размер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Основной текст</td>
                            <td>14px / 0.875rem</td>
                            <td>16px / 1rem</td>
                        </tr>
                        <tr>
                            <td>Вспомогательный текст</td>
                            <td>12px / 0.75rem</td>
                            <td>14px / 0.875rem</td>
                        </tr>
                        <tr>
                            <td>Формы</td>
                            <td>14px / 0.875rem</td>
                            <td>16px / 1rem</td>
                        </tr>
                        <tr>
                            <td>Кнопки</td>
                            <td>14px / 0.875rem</td>
                            <td>16px / 1rem</td>
                        </tr>
                        <tr>
                            <td>Подсказки (tooltip)</td>
                            <td>12px / 0.75rem</td>
                            <td>14px / 0.875rem</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-4-2-mezhbukvennyy-interval-i-chitaemost">4.2 Межбуквенный интервал и читаемость</h3>

            <p>Параметры, рекомендуемые WCAG 1.4.12 (Text Spacing):</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Параметр</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Высота строки (line-height)</td>
                            <td>≥ 1.5x от размера шрифта</td>
                        </tr>
                        <tr>
                            <td>Межбуквенный интервал (tracking)</td>
                            <td>≥ 0.12x от размера шрифта</td>
                        </tr>
                        <tr>
                            <td>Межсловный интервал (word-spacing)</td>
                            <td>≥ 0.16x от размера шрифта</td>
                        </tr>
                        <tr>
                            <td>Отступ между параграфами</td>
                            <td>≥ 2x от размера шрифта</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-4-3-vybor-garnitury">4.3 Выбор гарнитуры</h3>

            <p>Рекомендуемые характеристики:</p>

            <ul className="article-list plain">
                <li>Чёткое различие между символами (I, l, 1 / O, 0)</li>
                <li>Достаточная x-height</li>
                <li>Различимые строчные и прописные буквы</li>
                <li>Поддержка кириллицы с одинаковым качеством</li>
            </ul>

            <p>Шрифты SDDS:</p>

            <ul className="article-list plain">
                <li>
                    <b>SB Sans Display</b>
                    {' — для акцентных текстовых элементов крупным кеглем'}
                </li>
                <li>
                    <b>SB Sans Text</b>
                    {' — для интерфейсного текста и заголовков'}
                </li>
                <li>
                    <b>SB Sans Text Mono</b>
                    {' — CodeView внутри компонентов'}
                </li>
            </ul>

            <p>Подробнее про типографику SDDS — в документации Typography.</p>

            <h2 id="p-5-fokus-i-navigaciya-s-klaviatury">5. Фокус и навигация с клавиатуры</h2>

            <p>
                Все интерактивные элементы должны быть доступны с клавиатуры. Пользователь должен иметь возможность
                выполнить любое действие без использования мыши или касания.
            </p>

            <h3 id="p-5-1-stil-fokusa">5.1 Стиль фокуса</h3>

            <p>Требования к индикатору фокуса:</p>

            <ul className="article-list plain">
                <li>Минимальный контраст 3:1 к соседним цветам</li>
                <li>Должен быть видим на любом фоне</li>
                <li>Не должен перекрываться другими элементами</li>
            </ul>

            <p>Базовый фокус SDDS:</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Свойство</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Outline width</td>
                            <td>1px</td>
                        </tr>
                        <tr>
                            <td>Outline style</td>
                            <td>solid</td>
                        </tr>
                        <tr>
                            <td>Outline color</td>
                            <td>SurfaceAccent</td>
                        </tr>
                        <tr>
                            <td>Outline offset</td>
                            <td>2px</td>
                        </tr>
                        <tr>
                            <td>Border-radius</td>
                            <td>CR компонента + 2px</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 id="p-5-2-poryadok-fokusa-tab-order">5.2 Порядок фокуса (Tab Order)</h3>

            <p>Порядок фокуса должен соответствовать визуальному порядку и логике контента.</p>

            <ul className="article-list plain">
                <li>
                    <span aria-hidden="true">✅</span> Порядок Tab соответствует визуальному порядку: слева → направо,
                    сверху → вниз
                </li>
                <li>
                    {'✅ Используется '}
                    <code>tabindex=&quot;0&quot;</code>
                    {' для кастомных интерактивных элементов'}
                </li>
                <li>
                    {'✅ Используй '}
                    <code>tabindex=&quot;-1&quot;</code>
                    {' для программного управления фокусом (модальные окна, dropdown)'}
                </li>
                <li>
                    <span aria-hidden="true">❌</span> Не убирай элементы из tab order без альтернативы
                </li>
                <li>
                    {'❌ Не используй '}
                    <code>tabindex=&quot;0&quot;</code>
                    {' на неинтерактивных элементах'}
                </li>
            </ul>

            <h3 id="p-5-3-klaviaturnye-patterny-dlya-komponentov">5.3 Клавиатурные паттерны для компонентов</h3>

            <p>Keyboard Shortcuts (горячие клавиши):</p>

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
                            <td>Tab</td>
                            <td>Переход к следующему интерактивному элементу</td>
                        </tr>
                        <tr>
                            <td>Shift + Tab</td>
                            <td>Переход к предыдущему интерактивному элементу</td>
                        </tr>
                        <tr>
                            <td>Enter</td>
                            <td>Активация элемента (кнопки, ссылки)</td>
                        </tr>
                        <tr>
                            <td>Space</td>
                            <td>Активация (чекбокс, кнопка) / прокрутка страницы</td>
                        </tr>
                        <tr>
                            <td>Esc</td>
                            <td>Закрытие диалога, дропдауна, отмена действия</td>
                        </tr>
                        <tr>
                            <td>Arrow Keys</td>
                            <td>Навигация внутри компонента (меню, список, слайдер)</td>
                        </tr>
                        <tr>
                            <td>Home / End</td>
                            <td>Первый / последний элемент</td>
                        </tr>
                        <tr>
                            <td>Page Up / Down</td>
                            <td>Прокрутка, диапазонные компоненты</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>Примеры паттернов для составных компонентов:</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Компонент</th>
                            <th>Клавиши и действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DropdownMenu</td>
                            <td>↓↑ — навигация, Enter — выбор, Esc — закрытие</td>
                        </tr>
                        <tr>
                            <td>Tabs</td>
                            <td>←→ — переключение вкладок, Tab — переход в контент</td>
                        </tr>
                        <tr>
                            <td>Slider</td>
                            <td>←→ — изменение значения, Home/End — мин/макс значения</td>
                        </tr>
                        <tr>
                            <td>Checkbox</td>
                            <td>Space — переключение выбора</td>
                        </tr>
                        <tr>
                            <td>Accordion</td>
                            <td>↓↑ — навигация, Enter/Space — раскрытие или закрытие</td>
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
