import { DocsPageLayout } from '../DocsPageLayout';
import { SiteLink, parseStyle } from '../shared';

export default function DocCornerRadiusPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <SiteLink href="/docs">Основы</SiteLink>
                <i>/</i>
                <span>Corner Radius</span>
            </nav>

            <div className="article-meta">
                <span className="post-kind">Основы</span>

                <span>Скругления</span>
                <span>·</span>
                <span>версия 1.5.0</span>
            </div>

            <h1>Corner Radius</h1>

            <p className="article-lead">Система скруглений в SDDS.</p>

            <p>
                Система токенов Corner Radius определяет радиус скругления углов компонентов. Обеспечивает визуальную
                согласованность и передаёт характер бренда — от строгого (0) до мягкого (Rounded).
            </p>

            <p>
                Документ описывает уровни токенов, правила именования, а также правила использования вычисляемых
                значений.
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

            <p>Система токенов скруглений решает две задачи:</p>

            <ul className="article-list plain">
                <li>
                    <b>Единый язык</b>
                    {
                        ' — дизайнеры и разработчики используют одни и те же названия и значения, не придумывая числа вручную.'
                    }
                </li>
                <li>
                    <b>Визуальная согласованность</b>
                    {
                        ' — компоненты одного размера выглядят согласованно. Например, в размере L у Button, TextField и Select (триггер и выпадающее меню) одинаковый радиус 14px.'
                    }
                </li>
            </ul>

            <h2 id="p-2-cornerradius-tokens-tokeny-skrugleniy">2. CornerRadius Tokens — токены скруглений</h2>

            <p>Набор значений, определяющих радиус скругления углов у компонентов.</p>

            <pre className="doc-code">
                <code>
                    {
                        'Raw Value  →  Base Token  →  Semantic Token    →  Component\n14px          CR14           CRL                Button L\n                                                  Chip XL\n                                                  Notification M'
                    }
                </code>
            </pre>

            <h2 id="p-3-bazovaya-shkala-base-tokens">3. Базовая шкала (Base Tokens)</h2>

            <p>
                Примитивы/базовые токены — это набор допустимых числовых значений. Все семантические токены ссылаются
                только на эти числа. Новые промежуточные значения не вводятся.
            </p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Token</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CR0</td>
                            <td>0px</td>
                        </tr>
                        <tr>
                            <td>CR2</td>
                            <td>2px</td>
                        </tr>
                        <tr>
                            <td>CR4</td>
                            <td>4px</td>
                        </tr>
                        <tr>
                            <td>CR6</td>
                            <td>6px</td>
                        </tr>
                        <tr>
                            <td>CR8</td>
                            <td>8px</td>
                        </tr>
                        <tr>
                            <td>CR10</td>
                            <td>10px</td>
                        </tr>
                        <tr>
                            <td>CR12</td>
                            <td>12px</td>
                        </tr>
                        <tr>
                            <td>CR14</td>
                            <td>14px</td>
                        </tr>
                        <tr>
                            <td>CR16</td>
                            <td>16px</td>
                        </tr>
                        <tr>
                            <td>CR18</td>
                            <td>18px</td>
                        </tr>
                        <tr>
                            <td>CR20</td>
                            <td>20px</td>
                        </tr>
                        <tr>
                            <td>CR32</td>
                            <td>32px</td>
                        </tr>
                        <tr>
                            <td>CRRounded</td>
                            <td>100% или 1000px</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-4-semanticheskie-tokeny-semantic-tokens">4. Семантические токены (Semantic Tokens)</h2>

            <p>Семантические токены связывают размер компонента с соответствующей ступенью шкалы скруглений.</p>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Semantic Token</th>
                            <th>Base Token</th>
                            <th>Применение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Null</td>
                            <td>CR0</td>
                            <td>Все элементы, имеющие заливку или обводку, если не нужны скругления углов</td>
                        </tr>
                        <tr>
                            <td>CRXXS</td>
                            <td>CR6</td>
                            <td>Самостоятельные компоненты размера XXS</td>
                        </tr>
                        <tr>
                            <td>CRXS</td>
                            <td>CR8</td>
                            <td>Самостоятельные компоненты размера XS</td>
                        </tr>
                        <tr>
                            <td>CRS</td>
                            <td>CR10</td>
                            <td>Самостоятельные компоненты размера S</td>
                        </tr>
                        <tr>
                            <td>CRM</td>
                            <td>CR12</td>
                            <td>Самостоятельные компоненты размера M</td>
                        </tr>
                        <tr>
                            <td>CRL</td>
                            <td>CR14</td>
                            <td>Самостоятельные компоненты размера L</td>
                        </tr>
                        <tr>
                            <td>CRXL</td>
                            <td>CR16</td>
                            <td>Самостоятельные компоненты размера XL</td>
                        </tr>
                        <tr>
                            <td>Rounded</td>
                            <td>CRRounded</td>
                            <td>Круглые или овальные компоненты</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <b>Компоненты:</b>
                {' TextField, Button, Select (триггер + меню), Autocomplete, DatePicker, Accordion, Range и т.д.'}
            </p>

            <h2 id="p-5-vychislyaemye-znacheniya">5. Вычисляемые значения</h2>

            <h3 id="p-5-1-kompaktnye-i-vlozhennye-elementy-malye-overlei">
                5.1 Компактные и вложенные элементы, малые оверлеи
            </h3>

            <p>
                {
                    'Для небольших самостоятельных элементов, зависимых компонентов и миниатюрных оверлеев, где крупный радиус выглядит избыточным, используется '
                }
                <b>правило «−2»</b>:
            </p>

            <ul className="article-list plain">
                <li>
                    токен скругления внутренних плашек, ListItems, подсветки и хайлайтов внутри компонента вычисляется
                    вычитанием из токена родительского компонента с шагом 2px;
                </li>
                <li>если значение есть в Semantic Token — используем его.</li>
            </ul>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Token</th>
                            <th>Base Token</th>
                            <th>Применение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>calc:[cRxxs-4]</code>
                            </td>
                            <td>CR2</td>
                            <td>Компоненты или элементы, вложенные в самостоятельные компоненты размера XXS</td>
                        </tr>
                        <tr>
                            <td>
                                <code>calc:[cRxxs-2]</code>
                            </td>
                            <td>CR4</td>
                            <td>Компоненты или элементы, вложенные в самостоятельные компоненты размера XXS</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <b>Компоненты:</b>
                {' Tooltip, Chip, прямоугольный Avatar, ListItem (строки списков), EmbeddedChip и т.д.'}
            </p>

            <p>Пример: компонент Chip</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Размер</th>
                            <th>Скругление</th>
                            <th>Base Token</th>
                            <th>Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XXS</td>
                            <td>4px</td>
                            <td>CR4</td>
                            <td>
                                <code>calc:[cRxxs-2]</code>
                            </td>
                        </tr>
                        <tr>
                            <td>XS</td>
                            <td>6px</td>
                            <td>CR6</td>
                            <td>CRXXS</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>8px</td>
                            <td>CR8</td>
                            <td>CRXS</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>10px</td>
                            <td>CR10</td>
                            <td>CRS</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>12px</td>
                            <td>CR12</td>
                            <td>CRM</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>14px</td>
                            <td>CR14</td>
                            <td>CRL</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 id="isklyucheniya-indikatornye-komponenty">Исключения — индикаторные компоненты</h4>

            <p>
                Для Badge и аналогичных компонентов радиус ограничен их высотой — он равен ±¼ высоты и вписывается в
                значения семантических или вычисляемых токенов. Такое исключение нужно, чтобы форма компонента
                непреднамеренно не становилась «таблеткой».
            </p>

            <p>Пример: Badge</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:850px')}>
                    <thead>
                        <tr>
                            <th>Размер</th>
                            <th>Высота</th>
                            <th>¼ высоты</th>
                            <th>Token</th>
                            <th>Base Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XS</td>
                            <td>16px</td>
                            <td>4px</td>
                            <td>
                                <code>calc:[cRxxs-2]</code>
                            </td>
                            <td>CR4</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>20px</td>
                            <td>5px</td>
                            <td>CRXXS</td>
                            <td>CR6</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>24px</td>
                            <td>6px</td>
                            <td>CRXXS</td>
                            <td>CR6</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>28px</td>
                            <td>7px</td>
                            <td>CRXS</td>
                            <td>CR8</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                S и L незначительно превышают ¼ — на 1px. Это не ошибка, а следствие того, что шкала Base Tokens имеет
                шаг 2px, а высоты компонентов дают нечётные значения (5 и 7px), которых в шкале нет.
            </p>

            <h3 id="p-5-2-samostoyatelnye-poverhnosti-i-overlei-elementy-obertki">
                5.2 Самостоятельные поверхности и оверлеи, элементы-«обёртки»
            </h3>

            <p>
                {
                    'Для компонентов с собственным визуальным весом, которые не привязаны к конкретному триггеру как его прямая часть, а также для элементов-обёрток компонентов с токенами скругления из базовой сетки используется '
                }
                <b>правило «+2»</b>:
            </p>

            <ul className="article-list plain">
                <li>значение токена вычисляется прибавлением значения с шагом 2px к Semantic Token;</li>
                <li>если значение есть в Semantic Token — используем его.</li>
            </ul>

            <div className="doc-table-wrap">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Token</th>
                            <th>Значение</th>
                            <th>Применение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>calc:[CRL+2]</code>
                            </td>
                            <td>16px</td>
                            <td>CardS, самостоятельные поверхности и оверлеи размера S</td>
                        </tr>
                        <tr>
                            <td>
                                <code>calc:[CRXL+4]</code>
                            </td>
                            <td>18px</td>
                            <td>CardM, самостоятельные поверхности и оверлеи размера M</td>
                        </tr>
                        <tr>
                            <td>
                                <code>calc:[CRXL+6]</code>
                            </td>
                            <td>20px</td>
                            <td>Самостоятельные поверхности и оверлеи</td>
                        </tr>
                        <tr>
                            <td>
                                <code>calc:[CRXL+18]</code>
                            </td>
                            <td>32px</td>
                            <td>Самостоятельные поверхности и оверлеи</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <b>Компоненты:</b>
                {' Card, Popover, Notification, Toast, Tour, Modal и т.д.'}
            </p>

            <p>Пример: компонент Tour</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Размер</th>
                            <th>Скругление</th>
                            <th>Base Token</th>
                            <th>Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S</td>
                            <td>12px</td>
                            <td>CR12</td>
                            <td>CRM</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>14px</td>
                            <td>CR14</td>
                            <td>CRL</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>18px</td>
                            <td>CR18</td>
                            <td>
                                <code>calc:[CRXL+2]</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>Пример: компоненты Modal, Dropzone</p>

            <div className="doc-table-wrap">
                <table className="doc-table" style={parseStyle('min-width:680px')}>
                    <thead>
                        <tr>
                            <th>Размер</th>
                            <th>Скругление</th>
                            <th>Base Token</th>
                            <th>Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Без размера</td>
                            <td>20px</td>
                            <td>CR20</td>
                            <td>
                                <code>calc:[cRXL+6]</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 id="p-6-pravila-primeneniya">6. Правила применения</h2>

            <ul className="article-list plain">
                <li>
                    <b>Используйте токены.</b>
                    {
                        ' Не вводите произвольные промежуточные значения (например, 11px или 13px). Используйте только значения из базовой шкалы Base tokens.'
                    }
                </li>
                <li>
                    <b>Интерактивные пары.</b>
                    {
                        ' Триггер и его привязанная панель используют один и тот же токен в рамках размера. Нельзя задавать триггеру и панели разные значения. Например, пара «кнопка и дропдаун» в компоненте Select.'
                    }
                </li>
                <li>
                    <b>Правило «−2».</b>
                    {
                        ' Токен скругления внутренних плашек, ListItems, подсветки и хайлайтов внутри компонента вычисляется вычитанием из токена родительского компонента с шагом 2px.'
                    }
                </li>
                <li>
                    <b>Правило «+2».</b>
                    {
                        ' Если компонент с токеном скругления из базовой сетки оборачивается в другой элемент, то для согласования скруглений значение для обёртки вычисляется прибавлением с шагом 2px к токену родительского компонента.'
                    }
                </li>
                <li>
                    <b>Индикаторные компоненты.</b>
                    {
                        ' Для Badge и аналогичных компонентов радиус ограничен высотой: значение не превышает ¼ высоты компонента. Используются нижние ступени шкалы Semantic Tokens. Это не нарушение системы — осознанное ограничение, продиктованное формой компонентов.'
                    }
                </li>
                <li>
                    <b>Обрезка контента.</b>
                    {
                        ' Контейнеры со скроллом или подсветкой должны визуально обрезать содержимое по своей форме — контент не должен «выпирать» за скруглённые углы.'
                    }
                </li>
                <li>
                    <b>Хвостики и стрелки.</b>
                    {
                        ' Хвостики (arrow) у Tooltip, Popover, Tour не имеют собственного скругления. Корпус компонента сохраняет свой токен без изменений.'
                    }
                </li>
                <li>
                    <b>Тени и эффекты.</b>
                    {
                        ' Тени, обводки и внутренние эффекты не должны визуально «срезать» углы. Они должны повторять форму контейнера.'
                    }
                </li>
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
