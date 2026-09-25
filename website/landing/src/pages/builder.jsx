import { Header, SiteLink, parseStyle } from '../shared';

export default function BuilderPage() {
    return (
        <>
            {'\n\n'}
            <Header />
            {'\n\n'}
            <section className={'section screen page-top hero-builder'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'hero-builder-text'}>
                        {'\n      '}
                        <span className={'doc-tag'}>{'Бета'}</span>
                        {'\n      '}
                        <h1>
                            {'Тема проекта'}
                            <br />
                            <span className={'dim'}>{'собирается в билдере'}</span>
                        </h1>
                        {'\n      '}
                        <div className={'hero-builder-sub'}>
                            {'\n        '}
                            <p>
                                {
                                    'Настроить, проверить и опубликовать тему — без правок в коде компонентов и без сборки пакетов.'
                                }
                            </p>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'#tokens'}>
                                {'Как это выглядит внутри'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n\n  '}
                <div className={'hero-shot'}>
                    {'\n    '}
                    <div className={'shell'}>
                        {'\n      '}
                        <figure>
                            {'\n        '}
                            <img
                                src={'/media/builder/palette.webp'}
                                alt={
                                    'Экран палитры в DS Builder: дерево семейств, рампы ступеней и инспектор со связанными токенами'
                                }
                                width={'2880'}
                                height={'1600'}
                            />
                            {'\n      '}
                        </figure>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'res-cards builder-values'}>
                        {'\n      '}
                        <div className={'res-card'}>
                            {'\n        '}
                            <h3>{'Тема вместо форка'}</h3>
                            {'\n        '}
                            <ul>
                                {'\n          '}
                                <li>{'Значения токенов, шрифты и шкалы меняются в интерфейсе'}</li>
                                {'\n          '}
                                <li>{'Компоненты остаются системными и обновляются с релизами'}</li>
                                {'\n        '}
                            </ul>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'res-card'}>
                            {'\n        '}
                            <h3>{'Проверка до публикации'}</h3>
                            {'\n        '}
                            <ul>
                                {'\n          '}
                                <li>{'Превью темы на реальных компонентах'}</li>
                                {'\n          '}
                                <li>{'Валидация показывает риски и затронутые объекты'}</li>
                                {'\n        '}
                            </ul>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'res-card'}>
                            {'\n        '}
                            <h3>{'Версия как результат'}</h3>
                            {'\n        '}
                            <ul>
                                {'\n          '}
                                <li>{'Публикация фиксирует конфигурацию под номером версии'}</li>
                                {'\n          '}
                                <li>{'Разработчик получает её через CLI, а не через npm-пакет от нас'}</li>
                                {'\n        '}
                            </ul>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n\n'}
            </section>
            {'\n\n'}
            <section className={'section screen'} id={'tokens'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'split-row'}>
                        {'\n      '}
                        <h2>
                            {'Меняется значение,'}
                            <br />
                            <span className={'dim'}>{'а не код компонентов'}</span>
                        </h2>
                        {'\n      '}
                        <div className={'split-text'}>
                            {'\n        '}
                            <p>
                                {
                                    'Продукт правит значения, а не библиотеку: ступень палитры, набор типографики, шкалу отступов. Токены, которые ссылаются на изменённое значение, пересчитываются сами — инспектор показывает их списком, а превью сразу отражает результат.'
                                }
                            </p>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/docs/theming'}>
                                {'Как устроены токены'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <figure className={'shot'}>
                        {'\n      '}
                        <img
                            src={'/media/builder/color-tokens.webp'}
                            alt={
                                'Экран цветовых токенов: дерево семантических токенов, превью пар Light и Dark, инспектор с темами по умолчанию и подтемами'
                            }
                            loading={'lazy'}
                        />
                        {'\n      '}
                        <figcaption>
                            {
                                'Экран «Цветовые токены»: слева семантические токены, в центре пары Light и Dark, справа — значения по умолчанию и подтемы OnDark, OnLight, Inverse'
                            }
                        </figcaption>
                        {'\n    '}
                    </figure>
                    {'\n\n    '}
                    <div className={'feature-row'}>
                        {'\n      '}
                        <span className={'eyebrow'}>{'Основания'}</span>
                        {'\n      '}
                        <div className={'feature-cols'}>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/docs/theming'}>
                                {'Токены темы'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/docs/sizes'}>
                                {'Размерная шкала'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/docs/corner-radius'}>
                                {'Скругления'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'feature-cols'}>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/docs/states'}>
                                {'Состояния'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/docs/accessibility'}>
                                {'Доступность'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/docs'}>
                                {'Компоненты'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            <section className={'section screen'} id={'flow'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'split-row'}>
                        {'\n      '}
                        <h2>
                            {'Путь от правки'}
                            <br />
                            <span className={'dim'}>{'до версии в продукте'}</span>
                        </h2>
                        {'\n      '}
                        <div className={'split-text'}>
                            {'\n        '}
                            <p>
                                {
                                    'Работа идёт по уровням: проект — дизайн-система — тема. Изменения собираются в черновик, проверяются и публикуются одной версией. Ревью и согласования в этом пути нет: валидация сообщает о рисках, но не блокирует публикацию.'
                                }
                            </p>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/docs'}>
                                {'Документация системы'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <ol className={'flow-chain'}>
                        {'\n      '}
                        <li>
                            {'\n        '}
                            <b>{'Проект и дизайн-система'}</b>
                            {'\n        '}
                            <p>
                                {
                                    'Каталог проектов, внутри — дизайн-системы и их темы. Участники и роли живут на уровне проекта.'
                                }
                            </p>
                            {'\n      '}
                        </li>
                        {'\n      '}
                        <li>
                            {'\n        '}
                            <b>{'Тема'}</b>
                            {'\n        '}
                            <p>
                                {'Название, preset, светлый и тёмный режимы. Дальше — правка оснований и компонентов.'}
                            </p>
                            {'\n      '}
                        </li>
                        {'\n      '}
                        <li>
                            {'\n        '}
                            <b>{'Черновик изменений'}</b>
                            {'\n        '}
                            <p>
                                {
                                    'Каждая правка попадает в Changes: старое и новое значение, автор, дата, затронутые объекты.'
                                }
                            </p>
                            {'\n      '}
                        </li>
                        {'\n      '}
                        <li>
                            {'\n        '}
                            <b>{'Превью и валидация'}</b>
                            {'\n        '}
                            <p>
                                {
                                    'Результат виден на компонентах; из проблемы можно перейти к её источнику и исправить значение.'
                                }
                            </p>
                            {'\n      '}
                        </li>
                        {'\n      '}
                        <li>
                            {'\n        '}
                            <b>{'Публикация'}</b>
                            {'\n        '}
                            <p>{'Выбранные изменения становятся версией конфигурации со снимком состояния темы.'}</p>
                            {'\n      '}
                        </li>
                        {'\n      '}
                        <li>
                            {'\n        '}
                            <b>{'CLI у разработчика'}</b>
                            {'\n        '}
                            <p>{'CLI забирает выбранную версию и генерирует файлы для платформы проекта.'}</p>
                            {'\n      '}
                        </li>
                        {'\n    '}
                    </ol>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            <section className={'section screen'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'split-row'}>
                        {'\n      '}
                        <h2>
                            {'Что настраивается'}
                            <br />
                            <span className={'dim'}>{'в теме'}</span>
                        </h2>
                        {'\n      '}
                        <div className={'split-text'}>
                            {'\n        '}
                            <p>
                                {
                                    'Основания темы правятся по одному сценарию: раздел → объект в рабочей области → то же в инспекторе → новое значение → результат в превью и в черновике. Выбор объекта сам по себе ничего не меняет.'
                                }
                            </p>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/docs/theming'}>
                                {'Как устроены токены'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'doc-table-wrap'}>
                        {'\n      '}
                        <table className={'doc-table'}>
                            {'\n        '}
                            <thead>
                                <tr>
                                    <th>{'Основание'}</th>
                                    <th>{'Что меняется'}</th>
                                    <th>{'Контексты и режимы'}</th>
                                </tr>
                            </thead>
                            {'\n        '}
                            <tbody>
                                {'\n          '}
                                <tr>
                                    <td>
                                        <b>{'Палитра и цвет'}</b>
                                    </td>
                                    <td>{'Ступени палитры, перестройка рампы от бренд-цвета, значения токенов'}</td>
                                    <td>{'Light / Dark; Default, OnDark, OnLight, Inverse'}</td>
                                </tr>
                                {'\n          '}
                                <tr>
                                    <td>
                                        <b>{'Типографика'}</b>
                                    </td>
                                    <td>{'Наборы типографических токенов'}</td>
                                    <td>{'Large / Medium / Small'}</td>
                                </tr>
                                {'\n          '}
                                <tr>
                                    <td>
                                        <b>{'Отступы'}</b>
                                    </td>
                                    <td>{'Шкала spacing со своим представлением'}</td>
                                    <td>{'—'}</td>
                                </tr>
                                {'\n          '}
                                <tr>
                                    <td>
                                        <b>{'Скругления'}</b>
                                    </td>
                                    <td>{'Шкала radius со своим представлением'}</td>
                                    <td>{'—'}</td>
                                </tr>
                                {'\n          '}
                                <tr>
                                    <td>
                                        <b>{'Компоненты'}</b>
                                    </td>
                                    <td>{'Разрешённая конфигурация компонента'}</td>
                                    <td>{'Демонстрационные свойства в превью черновик не меняют'}</td>
                                </tr>
                                {'\n          '}
                                <tr>
                                    <td>
                                        <b>{'Подтемы'}</b>
                                    </td>
                                    <td>{'Значения токена для инверсных поверхностей'}</td>
                                    <td>{'OnDark, OnLight, Inverse — каждая со своими Light и Dark'}</td>
                                </tr>
                                {'\n        '}
                            </tbody>
                            {'\n      '}
                        </table>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'callout'}>
                        {'\n      '}
                        <b>{'Правки палитры считаются наравне с токенами'}</b>
                        {'\n      '}
                        <p>
                            {
                                'Точечная замена ступени и перестройка рампы входят в счётчик публикации, сбрасываются через Reset и попадают в снимок версии. База для сравнения — состояние палитры на момент последней публикации, поэтому уже опубликованные правки новыми не считаются.'
                            }
                        </p>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            <section className={'section screen'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'split-row'}>
                        {'\n      '}
                        <h2>
                            {'Изменения, проверка'}
                            <br />
                            <span className={'dim'}>{'и версии'}</span>
                        </h2>
                        {'\n      '}
                        <div className={'split-text'}>
                            {'\n        '}
                            <p>
                                {
                                    'Отдельного статуса «черновик / опубликовано» в интерфейсе нет: факт публикации выводится из номера версии — '
                                }
                                <code>{'0.1.0'}</code>
                                {
                                    ' означает, что тема ещё не публиковалась. В списке тем показывается признак «есть изменения» — его из номера не вывести.'
                                }
                            </p>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'res-cards'}>
                        {'\n      '}
                        <div className={'res-card'}>
                            {'\n        '}
                            <h3>{'Changes'}</h3>
                            {'\n        '}
                            <ul>
                                {'\n          '}
                                <li>{'Изменения черновика относительно его базы'}</li>
                                {'\n          '}
                                <li>{'Строка открывает детали, переход — источник значения'}</li>
                                {'\n          '}
                                <li>{'Revert отменяет конкретное изменение'}</li>
                                {'\n        '}
                            </ul>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'res-card'}>
                            {'\n        '}
                            <h3>{'Validation'}</h3>
                            {'\n        '}
                            <ul>
                                {'\n          '}
                                <li>{'Причины и затронутые объекты для той же ревизии черновика'}</li>
                                {'\n          '}
                                <li>{'Исключение оформляется как исключение, а не как исправление'}</li>
                                {'\n          '}
                                <li>{'Публикацию не блокирует'}</li>
                                {'\n        '}
                            </ul>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'res-card'}>
                            {'\n        '}
                            <h3>{'Versions'}</h3>
                            {'\n        '}
                            <ul>
                                {'\n          '}
                                <li>{'Версия хранит снимок состояния темы'}</li>
                                {'\n          '}
                                <li>{'Ошибка CLI не отменяет уже опубликованную версию'}</li>
                                {'\n          '}
                                <li>{'Номер меняется только в момент публикации'}</li>
                                {'\n        '}
                            </ul>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            <section className={'section screen'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'split-row'}>
                        {'\n      '}
                        <h2>
                            {'Роли'}
                            <br />
                            <span className={'dim'}>{'и доступ'}</span>
                        </h2>
                        {'\n      '}
                        <div className={'split-text'}>
                            {'\n        '}
                            <p>
                                {
                                    'Права назначаются в рамках участия в проекте: один человек может иметь разные роли в разных проектах. Дизайн-системы и темы наследуют доступы проекта — отдельного управления участниками на их уровне нет.'
                                }
                            </p>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'doc-table-wrap'}>
                        {'\n      '}
                        <table className={'doc-table'}>
                            {'\n        '}
                            <thead>
                                <tr>
                                    <th>{'Роль'}</th>
                                    <th>{'Что может'}</th>
                                </tr>
                            </thead>
                            {'\n        '}
                            <tbody>
                                {'\n          '}
                                <tr>
                                    <td>
                                        <b>{'Owner'}</b>
                                    </td>
                                    <td>{'Владелец проекта: максимальная ответственность и полный доступ'}</td>
                                </tr>
                                {'\n          '}
                                <tr>
                                    <td>
                                        <b>{'Editor'}</b>
                                    </td>
                                    <td>{'Редактирует темы, проверяет и публикует изменения'}</td>
                                </tr>
                                {'\n          '}
                                <tr>
                                    <td>
                                        <b>{'Viewer'}</b>
                                    </td>
                                    <td>{'Смотрит состояние, версии и результаты без редактирования'}</td>
                                </tr>
                                {'\n        '}
                            </tbody>
                            {'\n      '}
                        </table>
                        {'\n    '}
                    </div>
                    {'\n    '}
                    <p className={'note-line'}>
                        {
                            'Разработчик — потребитель опубликованной конфигурации через CLI, отдельная роль в билдере ему не нужна. При доступе к проекту достаточно Viewer.'
                        }
                    </p>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            <section className={'section screen'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'split-row'}>
                        {'\n      '}
                        <h2>
                            {'Figma и билдер'}
                            <br />
                            <span className={'dim'}>{'один черновик темы'}</span>
                        </h2>
                        {'\n      '}
                        <div className={'split-text'}>
                            {'\n        '}
                            <p>
                                {
                                    'Figma и билдер — два инструмента авторства одной темы. Перенос ручной: плагин выгружает '
                                }
                                <code>{'tokens.json'}</code>
                                {', билдер принимает файл из верхней панели темы.'}
                            </p>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'res-cards'}>
                        {'\n      '}
                        <div className={'res-card'}>
                            {'\n        '}
                            <h3>{'Что делает плагин'}</h3>
                            {'\n        '}
                            <ul>
                                {'\n          '}
                                <li>{'Локальный импорт и экспорт без сети'}</li>
                                {'\n          '}
                                <li>{'Проверка схемы и preflight до применения'}</li>
                                {'\n          '}
                                <li>{'Учёт коллекций и алиасов, стабильные ключи Figma'}</li>
                                {'\n        '}
                            </ul>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'res-card'}>
                            {'\n        '}
                            <h3>{'Что делает билдер при импорте'}</h3>
                            {'\n        '}
                            <ul>
                                {'\n          '}
                                <li>{'Сверяет версию формата и контрольную сумму'}</li>
                                {'\n          '}
                                <li>{'Сопоставляет значения с опубликованной базой и черновиком'}</li>
                                {'\n          '}
                                <li>{'Показывает Import Review и требует выбрать сторону в конфликтах'}</li>
                                {'\n          '}
                                <li>{'Пишет результат одним действием в Changes'}</li>
                                {'\n        '}
                            </ul>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'res-card'}>
                            {'\n        '}
                            <h3>{'Границы'}</h3>
                            {'\n        '}
                            <ul>
                                {'\n          '}
                                <li>{'Импорт не удаляет отсутствующие токены'}</li>
                                {'\n          '}
                                <li>{'Версия не публикуется автоматически'}</li>
                                {'\n          '}
                                <li>{'Публикация — только через билдер'}</li>
                                {'\n        '}
                            </ul>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            <section className={'section screen'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'split-row'}>
                        {'\n      '}
                        <h2>
                            {'Статус'}
                            <br />
                            <span className={'dim'}>{'и что дальше'}</span>
                        </h2>
                        {'\n      '}
                        <div className={'split-text'}>
                            {'\n        '}
                            <p>
                                {
                                    'Билдер в бете: пути описаны как целевое поведение, и не все ветки подтверждены реализацией. Если сценарий расходится с описанным — это повод написать команде, а не обходить.'
                                }
                            </p>
                            {'\n        '}
                            <SiteLink className={'text-link'} href={'/contacts'}>
                                {'Написать команде'}
                                <svg viewBox={'0 0 24 24'}>
                                    <path d={'M9 6l6 6-6 6'} />
                                </svg>
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'metrics'}>
                        {'\n      '}
                        <div>
                            <b>{'1974'}</b>
                            <span>{'токена в проверке на реальном legacy-файле'}</span>
                        </div>
                        {'\n      '}
                        <div>
                            <b>{'484'}</b>
                            <span>{'алиаса без альтернативной цели — их плагин не угадывает'}</span>
                        </div>
                        {'\n      '}
                        <div>
                            <b>{'3'}</b>
                            <span>{'роли в проекте: Owner, Editor, Viewer'}</span>
                        </div>
                        {'\n      '}
                        <div>
                            <b>{'0.1.0'}</b>
                            <span>{'номер темы, которая ещё не публиковалась'}</span>
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'doc-cards'}>
                        {'\n      '}
                        <SiteLink className={'doc-card'} href={'/docs/theming'}>
                            {'\n        '}
                            <span className={'doc-card-media'}>
                                <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                    <circle cx={'9.5'} cy={'12'} r={'6'} />
                                    <circle cx={'15'} cy={'12'} r={'6'} />
                                </svg>
                            </span>
                            {'\n        '}
                            <span className={'doc-card-body'}>
                                <span className={'doc-card-head'}>
                                    <b>{'Токены и темы'}</b>
                                </span>
                                {'\n        '}
                                <p>
                                    {
                                        'Архитектура семантических токенов: как построить тему и чем ограничены её значения.'
                                    }
                                </p>
                                {'\n        '}
                                <span className={'doc-card-foot'}>{'Документация · основы'}</span>
                                {'\n        '}
                            </span>
                            {'\n      '}
                        </SiteLink>
                        {'\n      '}
                        <SiteLink className={'doc-card'} href={'/docs/sizes'}>
                            {'\n        '}
                            <span className={'doc-card-media'}>
                                <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                    <path d={'M4 20v-5M10 20V10M16 20V5M4 20h16'} />
                                </svg>
                            </span>
                            {'\n        '}
                            <span className={'doc-card-body'}>
                                <span className={'doc-card-head'}>
                                    <b>{'Размерная шкала'}</b>
                                </span>
                                {'\n        '}
                                <p>
                                    {'Ступени размера и их связь с типографикой — то, что тема настраивает в билдере.'}
                                </p>
                                {'\n        '}
                                <span className={'doc-card-foot'}>{'Документация · основы'}</span>
                                {'\n        '}
                            </span>
                            {'\n      '}
                        </SiteLink>
                        {'\n      '}
                        <SiteLink className={'doc-card'} href={'/news'}>
                            {'\n        '}
                            <span className={'doc-card-media'}>
                                <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                    <path d={'M6 3h8l4 4v14H6zM14 3v4h4'} />
                                    <path d={'M9 12h6M9 16h4'} />
                                </svg>
                            </span>
                            {'\n        '}
                            <span className={'doc-card-body'}>
                                <span className={'doc-card-head'}>
                                    <b>{'Что меняется'}</b>
                                </span>
                                {'\n        '}
                                <p>{'Релизы системы и билдера: новые возможности, исправления и правила миграции.'}</p>
                                {'\n        '}
                                <span className={'doc-card-foot'}>{'Новости портала'}</span>
                                {'\n        '}
                            </span>
                            {'\n      '}
                        </SiteLink>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            <footer>
                {'\n  '}
                <span>{'© 2026 SDDS · Sber Digital Design System'}</span>
                {'\n  '}
                <span>
                    <SiteLink href={'#'}>{'Figma'}</SiteLink>
                    {' · '}
                    <SiteLink href={'#'}>{'Changelog'}</SiteLink>
                    {' · '}
                    <SiteLink href={'#'}>{'Telegram'}</SiteLink>
                    {' · '}
                    <SiteLink href={'/contacts'}>{'Почта'}</SiteLink>
                </span>
                {'\n'}
            </footer>
            {'\n\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n\n\n'}
        </>
    );
}
