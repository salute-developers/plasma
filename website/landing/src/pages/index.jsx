import { Header, SiteLink, parseStyle } from '../shared';

export default function IndexPage() {
    return (
        <>
            {'\n'}
            <div className={'float-preview'} id={'floatPreview'}>
                <img alt={''} id={'floatImg'} />
            </div>
            {'\n\n'}
            <Header />
            {'\n\n'}
            <section className={'hero'}>
                {'\n  '}
                <div className={'hero-media'}>
                    <video
                        id={'heroVideo'}
                        src={'/media/hero-loop.mp4'}
                        poster={'/media/hero-frame.webp'}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload={'auto'}
                    />
                </div>
                {'\n  '}
                <div className={'hero-scrim'} />
                {'\n\n  '}
                <div className={'hero-inner'}>
                    {'\n    '}
                    <div className={'hero-head'}>
                        {'\n      '}
                        <h1>
                            <span>
                                <span className={'plate'} data-text={'Разные'}>
                                    {'Разные'}
                                </span>{' '}
                                <span className={'plate'} data-text={'продукты'}>
                                    {'продукты'}
                                </span>
                            </span>
                            <span>
                                <span className={'plate'} data-text={'Одна'}>
                                    {'Одна'}
                                </span>{' '}
                                <span className={'accent'}>
                                    {'основа'}
                                    <span className={'selection'} aria-hidden={'true'}>
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                    </span>
                                </span>
                            </span>
                        </h1>
                        {'\n      '}
                        <p className={'subtitle'}>
                            {
                                'Инфраструктура для создания продуктовых дизайн-систем. Компоненты, токены, плагины и инструменты, на которых команды создают свои дизайн-системы.'
                            }
                        </p>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div>
                        {'\n      '}
                        <div className={'resume'} id={'resume'}>
                            {'\n        '}
                            {'\n        '}
                            <p>{'Вы уже начинали работу в билдере'}</p>
                            {'\n        '}
                            <div className={'spacer'} />
                            {'\n        '}
                            <SiteLink href={'#'}>{'Продолжить в билдере'}</SiteLink>
                            {'\n        '}
                            <button type={'button'} id={'resumeReset'}>
                                {'Сбросить'}
                            </button>
                            {'\n      '}
                        </div>
                        {'\n\n      '}
                        <div className={'hero-cards'}>
                            {'\n        '}
                            <div className={'hero-card'}>
                                {'\n          '}
                                <span className={'hero-card-glass'} aria-hidden={'true'} />
                                <span className={'hero-card-frame'} aria-hidden={'true'} />
                                {'\n          '}
                                <div className={'hero-figure'}>{'80+'}</div>
                                {'\n          '}
                                <div className={'hero-card-text'}>
                                    <h2>{'Компонентов'}</h2>
                                    <p>{'Готовы закрыть любой продуктовый сценарий.'}</p>
                                </div>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <div className={'hero-card'}>
                                {'\n          '}
                                <span className={'hero-card-glass'} aria-hidden={'true'} />
                                <span className={'hero-card-frame'} aria-hidden={'true'} />
                                {'\n          '}
                                <div className={'hero-figure'}>{'4'}</div>
                                {'\n          '}
                                <div className={'hero-card-text'}>
                                    <h2>{'Платформы'}</h2>
                                    <p>{'Web, iOS, Android и TV на одной библиотеке.'}</p>
                                </div>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <div className={'hero-card'}>
                                {'\n          '}
                                <span className={'hero-card-glass'} aria-hidden={'true'} />
                                <span className={'hero-card-frame'} aria-hidden={'true'} />
                                {'\n          '}
                                <div className={'hero-figure'}>{'1000+'}</div>
                                {'\n          '}
                                <div className={'hero-card-text'}>
                                    <h2>{'Иконок'}</h2>
                                    <p>{'Три стиля: Outline, OutlineBold и Fill.'}</p>
                                </div>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <div className={'hero-card'}>
                                {'\n          '}
                                <span className={'hero-card-glass'} aria-hidden={'true'} />
                                <span className={'hero-card-frame'} aria-hidden={'true'} />
                                {'\n          '}
                                <div className={'hero-figure'}>{'AA'}</div>
                                {'\n          '}
                                <div className={'hero-card-text'}>
                                    <h2>{'Доступность'}</h2>
                                    <p>{'WCAG 2.1 из коробки — для всех продуктов сразу.'}</p>
                                </div>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n\n      '}
                        <SiteLink className={'hero-scroll'} href={'#teams'}>
                            {'\n        '}
                            <span>{'Смотреть дальше'}</span>
                            {'\n        '}
                            <svg viewBox={'0 0 24 24'} aria-hidden={'true'}>
                                <path d={'M12 4v14M6 12.5 12 19l6-6.5'} />
                            </svg>
                            {'\n      '}
                        </SiteLink>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            {'\n'}
            <section className={'section screen'} id={'teams'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'teams-head'}>
                        {'\n      '}
                        <h2>
                            {'С нами уже работают'}
                            <span className={'dim'}>{'шестнадцать команд Сбера'}</span>
                        </h2>
                        {'\n      '}
                        <p>
                            {'У каждой команды своя тема и свой бренд — библиотека, токены и правила остаются общими.'}
                        </p>
                        {'\n    '}
                    </div>
                    {'\n    '}
                    <div className={'teams-grid'}>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#3b78ff'}
                            data-radius={'20'}
                            data-weight={'600'}
                        >
                            <b>{'GigaChat'}</b>
                            <span>{'AI'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#24b23e'}
                            data-radius={'28'}
                            data-weight={'500'}
                        >
                            <b>{'HomeOS'}</b>
                            <span>{'TV'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#6d5dfc'}
                            data-radius={'16'}
                            data-weight={'600'}
                        >
                            <b>{'SberDevices'}</b>
                            <span>{'Web'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#0ea5b0'}
                            data-radius={'12'}
                            data-weight={'500'}
                        >
                            <b>{'FinAI'}</b>
                            <span>{'Данные'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#e0518a'}
                            data-radius={'18'}
                            data-weight={'600'}
                        >
                            <b>{'PlatformAI'}</b>
                            <span>{'ML'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#f7b733'}
                            data-radius={'24'}
                            data-weight={'500'}
                        >
                            <b>{'SberScan'}</b>
                            <span>{'Mobile'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#29ad18'}
                            data-radius={'14'}
                            data-weight={'600'}
                        >
                            <b>{'Sber Com'}</b>
                            <span>{'Web'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#1f6feb'}
                            data-radius={'22'}
                            data-weight={'500'}
                        >
                            <b>{'Нетология'}</b>
                            <span>{'Обучение'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#2f8f6b'}
                            data-radius={'16'}
                            data-weight={'600'}
                        >
                            <b>{'СберСтрахование'}</b>
                            <span>{'Web'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#d4642a'}
                            data-radius={'20'}
                            data-weight={'500'}
                        >
                            <b>{'СберИндия'}</b>
                            <span>{'Web'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#8a8f98'}
                            data-radius={'10'}
                            data-weight={'600'}
                        >
                            <b>{'SDDS OS'}</b>
                            <span>{'Система'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#4a5bd4'}
                            data-radius={'18'}
                            data-weight={'500'}
                        >
                            <b>{'SDDS DFA'}</b>
                            <span>{'Финтех'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#21a038'}
                            data-radius={'24'}
                            data-weight={'600'}
                        >
                            <b>{'GigaCosmos'}</b>
                            <span>{'Web'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#0f8f8f'}
                            data-radius={'14'}
                            data-weight={'500'}
                        >
                            <b>{'Bizcom'}</b>
                            <span>{'Web'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink
                            className={'team-cell'}
                            href={'#products'}
                            data-brand={'#b36bff'}
                            data-radius={'26'}
                            data-weight={'600'}
                        >
                            <b>{'StarDS'}</b>
                            <span>{'Медиа'}</span>
                        </SiteLink>
                        {'\n        '}
                        <SiteLink className={'team-cell more'} href={'#products'}>
                            <b>{'и другие →'}</b>
                        </SiteLink>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    {'\n    '}
                    <div className={'team-peek'} id={'teamPeek'} aria-hidden={'true'}>
                        {'\n      '}
                        <div className={'peek-head'}>
                            {'\n        '}
                            <span className={'peek-name'} />
                            {'\n        '}
                            <span className={'peek-meta'} />
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'peek-palette'} aria-hidden={'true'}>
                            <div className={'peek-bars'} />
                        </div>
                        {'\n      '}
                        <div className={'peek-type'}>
                            {'\n        '}
                            <span className={'peek-label'}>{'Typography'}</span>
                            {'\n        '}
                            <b className={'peek-aa'}>{'Aa'}</b>
                            {'\n        '}
                            <span className={'peek-sample'}>{'Аа Бб Вв Гг Дд'}</span>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n    '}
                </div>
                {'\n  \n'}
            </section>
            {'\n\n'}
            {'\n'}
            <section className={'section screen'} id={'theme'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'screen-head'}>
                        {'\n      '}
                        <h2>
                            {'Меняется тема, '}
                            <span className={'dim'}>{'а не система'}</span>
                        </h2>
                        {'\n      '}
                        <p>
                            {
                                'Компоненты, размеры и правила остаются общими. Продукт меняет цвет, типографику и радиусы — через значения темы, а не через правку библиотеки.'
                            }
                        </p>
                        {'\n    '}
                    </div>
                    {'\n    '}
                    <div className={'app-window'} id={'builderWindow'}>
                        {'\n      '}
                        <div className={'release-bar'} aria-hidden={'true'}>
                            <i />
                        </div>
                        {'\n      '}
                        <div className={'app-titlebar'}>
                            {'\n        '}
                            <span className={'app-dots'} aria-hidden={'true'}>
                                <i />
                                <i />
                                <i />
                            </span>
                            {'\n        '}
                            <span className={'app-title'}>
                                <b>{'SDDS Builder'}</b>
                                <i>{' · тема продукта'}</i>
                            </span>
                            {'\n        '}
                            <span className={'app-actions'}>
                                {'\n          '}
                                <button
                                    type={'button'}
                                    id={'layerToggle'}
                                    aria-controls={'stage'}
                                    aria-pressed={'false'}
                                >
                                    {'Показать слои'}
                                </button>
                                {'\n          '}
                                <button
                                    type={'button'}
                                    id={'propsBtn'}
                                    aria-controls={'builderProps'}
                                    aria-expanded={'false'}
                                    aria-label={'Настроить тему'}
                                >
                                    {'\n            '}
                                    <svg className={'ico'} viewBox={'0 0 20 20'} aria-hidden={'true'}>
                                        <path d={'M3 6h7M14 6h3M3 14h3M10 14h7'} />
                                        <circle cx={'12'} cy={'6'} r={'2'} />
                                        <circle cx={'8'} cy={'14'} r={'2'} />
                                    </svg>
                                    {'\n          '}
                                </button>
                                {'\n          '}
                                <button type={'button'} className={'primary'} id={'releaseBtn'}>
                                    {'\n            '}
                                    <svg className={'ico'} viewBox={'0 0 20 20'} aria-hidden={'true'}>
                                        <path
                                            d={
                                                'M10 2.2c2.1 2.1 3.3 4.8 3.3 7.6 0 1.3-.3 2.6-.8 3.8H7.5c-.5-1.2-.8-2.5-.8-3.8 0-2.8 1.2-5.5 3.3-7.6Z'
                                            }
                                        />
                                        <circle cx={'10'} cy={'8.2'} r={'1.5'} />
                                        <path
                                            d={
                                                'M7 10.6 4.9 12.8c-.3.3-.5.7-.5 1.1v1.9l2.7-1.3M13 10.6l2.1 2.2c.3.3.5.7.5 1.1v1.9l-2.7-1.3'
                                            }
                                        />
                                        <path d={'M8.8 15.6c.3.9.7 1.5 1.2 2 .5-.5.9-1.1 1.2-2'} />
                                    </svg>
                                    {'\n            '}
                                    <span className={'label'}>{'Выпустить версию'}</span>
                                    {'\n          '}
                                </button>
                                {'\n        '}
                            </span>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'release-steps'} id={'releaseSteps'} aria-hidden={'true'}>
                            {'\n        '}
                            <div className={'release-step'}>
                                <span className={'dot'} />
                                {'Сборка токенов'}
                            </div>
                            {'\n        '}
                            <div className={'release-step'}>
                                <span className={'dot'} />
                                {'Проверка контраста'}
                            </div>
                            {'\n        '}
                            <div className={'release-step'}>
                                <span className={'dot'} />
                                {'Публикация пакета'}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'release-done'} id={'releaseDone'} aria-hidden={'true'}>
                            {'\n        '}
                            <div className={'release-card'}>
                                {'\n          '}
                                <span className={'release-ver'}>{'v1.5.0'}</span>
                                {'\n          '}
                                <strong>{'Версия выпущена'}</strong>
                                {'\n          '}
                                <p>
                                    {
                                        'Тема продукта собрана и доступна командам. Изменения подтянутся при следующей синхронизации.'
                                    }
                                </p>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'app-body'}>
                            {'\n        '}
                            <div className={'ws-stage'} id={'stage'}>
                                {'\n        '}
                                <div className={'ws-top'}>
                                    {'\n          '}
                                    <span className={'mono'}>{'Одна структура / разный характер'}</span>
                                    {'\n'}
                                    <span className={'mono'}>{'01 / 04 · live preview'}</span>
                                    {'\n        '}
                                </div>
                                {'\n\n        '}
                                <div className={'composition'}>
                                    {'\n          '}
                                    <span className={'layer-label label-type'}>{'Типографика'}</span>
                                    {'\n          '}
                                    <div className={'sample-type'}>
                                        {'\n            '}
                                        <span className={'mono'}>{'Typography'}</span>
                                        {'\n            '}
                                        <span className={'type-glyph'}>{'Aa'}</span>
                                        {'\n            '}
                                        <span className={'type-baseline'}>
                                            <span>{'Аа Бб Вв Гг Дд'}</span>
                                            <span>{'123'}</span>
                                        </span>
                                        {'\n          '}
                                    </div>
                                    {'\n\n          '}
                                    <span className={'layer-label label-color'}>{'Палитра'}</span>
                                    {'\n          '}
                                    <div className={'sample-ramp'}>
                                        {'\n            '}
                                        <i style={parseStyle('--ramp:#13300f')} />
                                        <i style={parseStyle('--ramp:#1f6b16')} />
                                        <i style={parseStyle('--ramp:#29ad18')} />
                                        <i style={parseStyle('--ramp:#8ed684')} />
                                        <i style={parseStyle('--ramp:#e4f1e1')} />
                                        {'\n          '}
                                    </div>
                                    {'\n\n          '}
                                    <span className={'layer-label label-component'}>{'Компонент'}</span>
                                    {'\n          '}
                                    <div className={'sample-card'}>
                                        {'\n            '}
                                        <div className={'sample-card-top'}>
                                            {'\n              '}
                                            <span className={'sample-mark'} aria-hidden={'true'}>
                                                <i />
                                                <i />
                                                <i />
                                            </span>
                                            {'\n              '}
                                            <span className={'sample-badge'}>{'Рабочее пространство'}</span>
                                            {'\n            '}
                                        </div>
                                        {'\n            '}
                                        <h3>{'Место для идей.'}</h3>
                                        {'\n            '}
                                        <p>{'Соберите команду вокруг своего продукта.'}</p>
                                        {'\n            '}
                                        <input
                                            className={'specimen-field'}
                                            defaultValue={'Новый продукт'}
                                            aria-label={'Название продукта'}
                                        />
                                        {'\n            '}
                                        <div className={'sample-bottom'}>
                                            {'\n              '}
                                            <span className={'sample-avatars'}>
                                                <span>{'А'}</span>
                                                <span>{'М'}</span>
                                                <span>{'+2'}</span>
                                            </span>
                                            {'\n              '}
                                            <button className={'sample-submit'}>{'Создать →'}</button>
                                            {'\n            '}
                                        </div>
                                        {'\n          '}
                                    </div>
                                    {'\n        '}
                                </div>
                                {'\n\n        '}
                                <span className={'cross cross-a'} aria-hidden={'true'}>
                                    {'+'}
                                </span>
                                {'\n        '}
                                <span className={'cross cross-b'} aria-hidden={'true'}>
                                    {'+'}
                                </span>
                                {'\n      '}
                            </div>
                            {'\n\n        '}
                            <aside className={'props'} id={'builderProps'}>
                                {'\n          '}
                                <div className={'props-head'}>
                                    {'Конфигуратор тем\n            '}
                                    <button type={'button'} className={'props-close'} aria-label={'Закрыть настройки'}>
                                        {'\n              '}
                                        <svg viewBox={'0 0 20 20'} aria-hidden={'true'}>
                                            <path d={'m6 6 8 8M14 6l-8 8'} />
                                        </svg>
                                        {'\n            '}
                                    </button>
                                    {'\n          '}
                                </div>
                                {'\n\n          '}
                                <section className={'prop-group'}>
                                    {'\n            '}
                                    <h4>{'Палитра'}</h4>
                                    {'\n            '}
                                    <div className={'swatches'} id={'toneList'}>
                                        {'\n              '}
                                        <button
                                            className={'swatch'}
                                            style={parseStyle('--tone:#29ad18')}
                                            data-tone={'0'}
                                            aria-pressed={'true'}
                                            aria-label={'Базовая'}
                                        />
                                        {'\n              '}
                                        <button
                                            className={'swatch'}
                                            style={parseStyle('--tone:#2b8ced')}
                                            data-tone={'1'}
                                            aria-pressed={'false'}
                                            aria-label={'Сдержанная'}
                                        />
                                        {'\n              '}
                                        <button
                                            className={'swatch'}
                                            style={parseStyle('--tone:#f0762b')}
                                            data-tone={'2'}
                                            aria-pressed={'false'}
                                            aria-label={'Тёплая'}
                                        />
                                        {'\n              '}
                                        <button
                                            className={'swatch'}
                                            style={parseStyle('--tone:#7c5cff')}
                                            data-tone={'3'}
                                            aria-pressed={'false'}
                                            aria-label={'Контрастная'}
                                        />
                                        {'\n            '}
                                    </div>
                                    {'\n            '}
                                    <div className={'prop-row'}>
                                        <span>{'SurfaceAccent'}</span>
                                        <b id={'pHex'}>{'#29AD18'}</b>
                                    </div>
                                    {'\n          '}
                                </section>
                                {'\n\n          '}
                                <section className={'prop-group'}>
                                    {'\n            '}
                                    <h4>{'Форма'}</h4>
                                    {'\n            '}
                                    <label className={'prop-slider'}>
                                        {'\n              '}
                                        <input
                                            type={'range'}
                                            min={'0'}
                                            max={'28'}
                                            defaultValue={'12'}
                                            id={'pRadius'}
                                            aria-label={'Радиус скругления'}
                                        />
                                        {'\n              '}
                                        <b id={'pRadiusVal'}>{'12 px'}</b>
                                        {'\n            '}
                                    </label>
                                    {'\n          '}
                                </section>
                                {'\n\n          '}
                                <section className={'prop-group'}>
                                    {'\n            '}
                                    <h4>{'Размер'}</h4>
                                    {'\n            '}
                                    <div className={'seg'} id={'pSize'}>
                                        {'\n              '}
                                        <button type={'button'} data-size={'s'} aria-pressed={'false'}>
                                            {'S'}
                                        </button>
                                        {'\n              '}
                                        <button type={'button'} data-size={'m'} aria-pressed={'true'}>
                                            {'M'}
                                        </button>
                                        {'\n              '}
                                        <button type={'button'} data-size={'l'} aria-pressed={'false'}>
                                            {'L'}
                                        </button>
                                        {'\n            '}
                                    </div>
                                    {'\n            '}
                                    <div className={'prop-row'}>
                                        <span>{'Высота контролов'}</span>
                                        <b id={'pHeight'}>{'48 px'}</b>
                                    </div>
                                    {'\n          '}
                                </section>
                                {'\n\n          '}
                                <section className={'prop-group'}>
                                    {'\n            '}
                                    <h4>{'Начертание'}</h4>
                                    {'\n            '}
                                    <div className={'seg'} id={'pWeight'}>
                                        {'\n              '}
                                        <button type={'button'} data-weight={'400'} aria-pressed={'false'}>
                                            {'Regular'}
                                        </button>
                                        {'\n              '}
                                        <button type={'button'} data-weight={'500'} aria-pressed={'true'}>
                                            {'Medium'}
                                        </button>
                                        {'\n              '}
                                        <button type={'button'} data-weight={'600'} aria-pressed={'false'}>
                                            {'Semibold'}
                                        </button>
                                        {'\n            '}
                                    </div>
                                    {'\n          '}
                                </section>
                                {'\n\n          '}
                                <div className={'props-foot'}>
                                    {'\n            '}
                                    <span id={'toneIndex'}>{'01 / 04'}</span>
                                    {'\n            '}
                                    <span>{'Live preview'}</span>
                                    {'\n          '}
                                </div>
                                {'\n        '}
                            </aside>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'props-scrim'} id={'propsScrim'} aria-hidden={'true'} />
                        {'\n    '}
                    </div>
                    {'\n    '}
                </div>
                {'\n  '}
            </section>
            {'\n\n\n'}
            {'\n'}
            <section className={'section screen'} id={'products'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'screen-head'}>
                        {'\n      '}
                        <h2>
                            {'Одна система'}
                            <br />
                            <span className={'dim'}>{'от чата до телевизора'}</span>
                        </h2>
                        {'\n      '}
                        <p>
                            {
                                'GigaChat в вебе, HomeOS на Smart TV и другие продукты собраны из компонентов SDDS. Разные платформы, размеры и бренды — общий набор токенов и правил.'
                            }
                        </p>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n  '}
                <div className={'showcase-pin-wrap'}>
                    <div className={'showcase-pin'}>
                        {'\n    '}
                        <div className={'showcase-stage'} role={'group'} aria-label={'Продукты на SDDS'}>
                            {'\n        '}
                            <figure className={'showcase-slide is-active'} style={parseStyle('--sc-accent:#3b78ff')}>
                                {'\n          '}
                                <div className={'showcase-media'}>
                                    {'\n            '}
                                    <div className={'showcase-placeholder'}>
                                        <span>{'GigaChat'}</span>
                                        <small>{'реальный скриншот'}</small>
                                    </div>
                                    {'\n            '}
                                    <img
                                        src={'/assets/giga.webp'}
                                        alt={'Интерфейс GigaChat'}
                                        width={'1280'}
                                        height={'800'}
                                        loading={'lazy'}
                                        draggable={'false'}
                                    />
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <figcaption>
                                    {'\n            '}
                                    <div className={'showcase-cap-head'}>
                                        <strong>{'GigaChat'}</strong>
                                        <span className={'showcase-badge'}>{'Web · Desktop'}</span>
                                    </div>
                                    {'\n            '}
                                    <p>
                                        {
                                            'ИИ-помощник: чат, боковая навигация, инструменты и голосовой режим — плотный продуктовый интерфейс.'
                                        }
                                    </p>
                                    {'\n          '}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n        '}
                            <figure className={'showcase-slide'} style={parseStyle('--sc-accent:#29ad18')}>
                                {'\n          '}
                                <div className={'showcase-media'}>
                                    {'\n            '}
                                    <div className={'showcase-placeholder'}>
                                        <span>{'HomeOS'}</span>
                                        <small>{'реальный скриншот'}</small>
                                    </div>
                                    {'\n            '}
                                    <img
                                        src={'/assets/homeos.webp'}
                                        alt={'Интерфейс HomeOS'}
                                        width={'1280'}
                                        height={'800'}
                                        loading={'lazy'}
                                        draggable={'false'}
                                    />
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <figcaption>
                                    {'\n            '}
                                    <div className={'showcase-cap-head'}>
                                        <strong>{'HomeOS'}</strong>
                                        <span className={'showcase-badge'}>{'Smart TV'}</span>
                                    </div>
                                    {'\n            '}
                                    <p>
                                        {
                                            'Медиа-витрина на большом экране: крупные размеры, десятифутовый интерфейс и навигация пультом.'
                                        }
                                    </p>
                                    {'\n          '}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n        '}
                            <figure className={'showcase-slide'} style={parseStyle('--sc-accent:#6d5dfc')}>
                                {'\n          '}
                                <div className={'showcase-media'}>
                                    {'\n            '}
                                    <div className={'showcase-placeholder'}>
                                        <span>{'SberDevices'}</span>
                                        <small>{'реальный скриншот'}</small>
                                    </div>
                                    {'\n            '}
                                    <img
                                        src={'/assets/sberdevices.jpg'}
                                        alt={'Интерфейс SberDevices'}
                                        width={'1280'}
                                        height={'800'}
                                        loading={'lazy'}
                                        draggable={'false'}
                                    />
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <figcaption>
                                    {'\n            '}
                                    <div className={'showcase-cap-head'}>
                                        <strong>{'SberDevices'}</strong>
                                        <span className={'showcase-badge'}>{'Web'}</span>
                                    </div>
                                    {'\n            '}
                                    <p>
                                        {'Портал устройств и сервисов: карточки, таблицы и настройки на общих токенах.'}
                                    </p>
                                    {'\n          '}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n        '}
                            <figure className={'showcase-slide'} style={parseStyle('--sc-accent:#0ea5b0')}>
                                {'\n          '}
                                <div className={'showcase-media'}>
                                    {'\n            '}
                                    <div className={'showcase-placeholder'}>
                                        <span>{'FinAI'}</span>
                                        <small>{'реальный скриншот'}</small>
                                    </div>
                                    {'\n            '}
                                    <video
                                        preload={'none'}
                                        data-src={'/assets/finai.webm'}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        disablePictureInPicture
                                        aria-label={'Интерфейс FinAI'}
                                    />
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <figcaption>
                                    {'\n            '}
                                    <div className={'showcase-cap-head'}>
                                        <strong>{'FinAI'}</strong>
                                        <span className={'showcase-badge'}>{'Web · Desktop'}</span>
                                    </div>
                                    {'\n            '}
                                    <p>
                                        {
                                            'Аналитический интерфейс с плотными данными, графиками и формами — размеры XS–M.'
                                        }
                                    </p>
                                    {'\n          '}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n        '}
                            <figure className={'showcase-slide'} style={parseStyle('--sc-accent:#e0518a')}>
                                {'\n          '}
                                <div className={'showcase-media'}>
                                    {'\n            '}
                                    <div className={'showcase-placeholder'}>
                                        <span>{'PlatformAI'}</span>
                                        <small>{'реальный скриншот'}</small>
                                    </div>
                                    {'\n            '}
                                    <video
                                        preload={'none'}
                                        data-src={'/assets/platformai.webm'}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        disablePictureInPicture
                                        aria-label={'Интерфейс PlatformAI'}
                                    />
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <figcaption>
                                    {'\n            '}
                                    <div className={'showcase-cap-head'}>
                                        <strong>{'PlatformAI'}</strong>
                                        <span className={'showcase-badge'}>{'Web'}</span>
                                    </div>
                                    {'\n            '}
                                    <p>{'Рабочее пространство ML-платформы: навигация, панели и статусы процессов.'}</p>
                                    {'\n          '}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n        '}
                            <figure className={'showcase-slide'} style={parseStyle('--sc-accent:#f7b733')}>
                                {'\n          '}
                                <div className={'showcase-media'}>
                                    {'\n            '}
                                    <div className={'showcase-placeholder'}>
                                        <span>{'SberScan'}</span>
                                        <small>{'реальный скриншот'}</small>
                                    </div>
                                    {'\n            '}
                                    <img
                                        src={'/assets/sberscan.webp'}
                                        alt={'Интерфейс SberScan'}
                                        width={'1280'}
                                        height={'800'}
                                        loading={'lazy'}
                                        draggable={'false'}
                                    />
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <figcaption>
                                    {'\n            '}
                                    <div className={'showcase-cap-head'}>
                                        <strong>{'SberScan'}</strong>
                                        <span className={'showcase-badge'}>{'iOS · Android'}</span>
                                    </div>
                                    {'\n            '}
                                    <p>
                                        {'Мобильный сценарий: touch-размеры L–XL, safe-area и платформенные паттерны.'}
                                    </p>
                                    {'\n          '}
                                </figcaption>
                                {'\n        '}
                            </figure>
                            {'\n      '}
                            <div className={'showcase-dots'} role={'tablist'} aria-label={'Продукты'}>
                                <button className={'is-active'} data-index={'0'} aria-label={'GigaChat'} />
                                <button className={''} data-index={'1'} aria-label={'HomeOS'} />
                                <button className={''} data-index={'2'} aria-label={'SberDevices'} />
                                <button className={''} data-index={'3'} aria-label={'FinAI'} />
                                <button className={''} data-index={'4'} aria-label={'PlatformAI'} />
                                <button className={''} data-index={'5'} aria-label={'SberScan'} />
                            </div>
                            {'\n    '}
                        </div>
                        {'\n  '}
                    </div>
                </div>
                {'\n'}
            </section>
            {'\n\n\n\n\n\n'}
            {'\n'}
            <section className={'section screen'} id={'ai'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'screen-head'}>
                        {'\n      '}
                        <h2>
                            {'Builder — knowledge layer:'}
                            <br />
                            <span className={'dim'}>{'ядро, из которого берут контекст'}</span>
                        </h2>
                        {'\n      '}
                        <p>
                            {
                                'Тему собирают руками в конфигураторе: цвет, радиусы, размеры, начертание. Builder хранит её версии и правила системы, агенты и плагины читают оттуда актуальные значения, продукты применяют ту же тему — копий и расхождений не возникает.'
                            }
                        </p>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'kn-stage is-light'} id={'knStage'}>
                        {'\n      '}
                        <svg className={'kn-wires'} id={'knWires'} aria-hidden={'true'} />
                        {'\n\n      '}
                        <article className={'kn-card kn-in'} data-node={'agent'} style={parseStyle('--kx:0; --ky:0')}>
                            {'\n        '}
                            <header>
                                <b>{'AI-агент'}</b>
                                <span>{'CLIENT'}</span>
                            </header>
                            {'\n        '}
                            <div className={'kn-body'}>
                                {'\n        '}
                                <div className={'kn-params'}>
                                    {'\n          '}
                                    <label>
                                        {'Контекст'}
                                        <i>
                                            <u style={parseStyle('width:82%')} />
                                        </i>
                                    </label>
                                    {'\n          '}
                                    <label>
                                        {'Глубина'}
                                        <i>
                                            <u style={parseStyle('width:54%')} />
                                        </i>
                                    </label>
                                    {'\n        '}
                                </div>
                                {'\n        '}
                                <p className={'kn-note'}>{'components · tokens · rules'}</p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <span className={'kn-port out'} />
                            {'\n      '}
                        </article>
                        {'\n\n      '}
                        <article className={'kn-card kn-in'} data-node={'mcp'} style={parseStyle('--kx:0; --ky:1')}>
                            {'\n        '}
                            <header>
                                <b>{'MCP'}</b>
                                <span>{'PROTOCOL'}</span>
                            </header>
                            {'\n        '}
                            <div className={'kn-body'}>
                                {'\n        '}
                                <div className={'kn-params'}>
                                    {'\n          '}
                                    <label>
                                        {'Методы'}
                                        <i>
                                            <u style={parseStyle('width:66%')} />
                                        </i>
                                    </label>
                                    {'\n          '}
                                    <label>
                                        {'Версия схемы'}
                                        <i>
                                            <u style={parseStyle('width:40%')} />
                                        </i>
                                    </label>
                                    {'\n        '}
                                </div>
                                {'\n        '}
                                <p className={'kn-note'}>{'бета · состав меняется'}</p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <span className={'kn-port out'} />
                            {'\n      '}
                        </article>
                        {'\n\n      '}
                        <article className={'kn-card kn-in'} data-node={'plugin'} style={parseStyle('--kx:0; --ky:2')}>
                            {'\n        '}
                            <header>
                                <b>{'Плагин Figma/Pixso'}</b>
                                <span>{'CLIENT'}</span>
                            </header>
                            {'\n        '}
                            <div className={'kn-body'}>
                                {'\n        '}
                                <div className={'kn-params'}>
                                    {'\n          '}
                                    <label>
                                        {'Библиотека'}
                                        <i>
                                            <u style={parseStyle('width:92%')} />
                                        </i>
                                    </label>
                                    {'\n          '}
                                    <label>
                                        {'Синхронизация'}
                                        <i>
                                            <u style={parseStyle('width:71%')} />
                                        </i>
                                    </label>
                                    {'\n        '}
                                </div>
                                {'\n        '}
                                <p className={'kn-note'}>{'компоненты и стили'}</p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <span className={'kn-port out'} />
                            {'\n      '}
                        </article>
                        {'\n\n      '}
                        <article className={'kn-card kn-core-card'} data-node={'core'}>
                            {'\n        '}
                            <header>
                                <b>{'SDDS Builder'}</b>
                                <span>{'CORE'}</span>
                            </header>
                            {'\n        '}
                            <div className={'kn-body'}>
                                {'\n        '}
                                <div className={'kn-core-body'}>
                                    {'\n          '}
                                    <div className={'kn-orb'} aria-hidden={'true'}>
                                        {'\n            '}
                                        <span className={'kn-halo'} />
                                        {'\n            '}
                                        <span className={'kn-orbit o1'}>
                                            <i />
                                            <i />
                                        </span>
                                        {'\n            '}
                                        <span className={'kn-orbit o2'}>
                                            <i />
                                            <i />
                                            <i />
                                        </span>
                                        {'\n            '}
                                        <span className={'kn-orbit o3'}>
                                            <i />
                                        </span>
                                        {'\n            '}
                                        <span className={'kn-orb-dot'} />
                                        {'\n          '}
                                    </div>
                                    {'\n          '}
                                    <div className={'kn-rows'}>
                                        {'\n            '}
                                        <span>
                                            {'Токены'}
                                            <b>{'цвет · шрифт · радиусы'}</b>
                                        </span>
                                        {'\n            '}
                                        <span>
                                            {'Правила'}
                                            <b>{'размеры и состояния'}</b>
                                        </span>
                                        {'\n            '}
                                        <span>
                                            {'Компоненты'}
                                            <b>{'контракты и варианты'}</b>
                                        </span>
                                        {'\n            '}
                                        <span>
                                            {'Версия темы'}
                                            <b>{'v1.5.0'}</b>
                                        </span>
                                        {'\n          '}
                                    </div>
                                    {'\n        '}
                                </div>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <span className={'kn-port in'} />
                            {'\n        '}
                            <span className={'kn-port out'} />
                            {'\n        '}
                            <span className={'kn-port down'} />
                            {'\n      '}
                        </article>
                        {'\n\n      '}
                        <article className={'kn-card kn-edit'} data-node={'team'}>
                            {'\n        '}
                            <header>
                                <b>{'Команда SDDS'}</b>
                                <span>{'MAINTAINER'}</span>
                            </header>
                            {'\n        '}
                            <div className={'kn-body'}>
                                {'\n          '}
                                <div className={'kn-edit-list'}>
                                    {'\n            '}
                                    <span className={'kn-edit-row'}>
                                        <i aria-hidden={'true'}>{'+'}</i>
                                        {'Доработка'}
                                        <b>{'компоненты и правила'}</b>
                                    </span>
                                    {'\n            '}
                                    <span className={'kn-edit-row'}>
                                        <i aria-hidden={'true'}>{'◎'}</i>
                                        {'Мониторинг'}
                                        <b>{'использование и статусы'}</b>
                                    </span>
                                    {'\n            '}
                                    <span className={'kn-edit-row'}>
                                        <i aria-hidden={'true'}>{'↑'}</i>
                                        {'Изменения'}
                                        <b>{'версии и миграции'}</b>
                                    </span>
                                    {'\n          '}
                                </div>
                                {'\n          '}
                                <p className={'kn-note'}>{'развиваем систему и следим за тем, как её применяют'}</p>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <span className={'kn-port up'} />
                            {'\n      '}
                        </article>
                        {'\n\n      '}
                        <article className={'kn-card kn-out'} data-node={'giga'} style={parseStyle('--kx:2; --ky:0')}>
                            {'\n        '}
                            <header>
                                <b>{'GigaChat'}</b>
                                <span>{'PRODUCT'}</span>
                            </header>
                            {'\n        '}
                            <div className={'kn-body'}>
                                {'\n        '}
                                <div className={'kn-chips'}>
                                    <span>{'Web'}</span>
                                    <span>{'Desktop'}</span>
                                </div>
                                {'\n        '}
                                <p className={'kn-note'}>{'своя тема, общие правила'}</p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <span className={'kn-port in'} />
                            {'\n      '}
                        </article>
                        {'\n\n      '}
                        <article className={'kn-card kn-out'} data-node={'homeos'} style={parseStyle('--kx:2; --ky:1')}>
                            {'\n        '}
                            <header>
                                <b>{'HomeOS'}</b>
                                <span>{'PRODUCT'}</span>
                            </header>
                            {'\n        '}
                            <div className={'kn-body'}>
                                {'\n        '}
                                <div className={'kn-chips'}>
                                    <span>{'Smart TV'}</span>
                                    <span>{'L–XL'}</span>
                                </div>
                                {'\n        '}
                                <p className={'kn-note'}>{'десятифутовый интерфейс'}</p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <span className={'kn-port in'} />
                            {'\n      '}
                        </article>
                        {'\n\n      '}
                        <article className={'kn-card kn-out'} data-node={'scan'} style={parseStyle('--kx:2; --ky:2')}>
                            {'\n        '}
                            <header>
                                <b>{'SberScan'}</b>
                                <span>{'PRODUCT'}</span>
                            </header>
                            {'\n        '}
                            <div className={'kn-body'}>
                                {'\n        '}
                                <div className={'kn-chips'}>
                                    <span>{'iOS'}</span>
                                    <span>{'Android'}</span>
                                </div>
                                {'\n        '}
                                <p className={'kn-note'}>{'touch-размеры и safe-area'}</p>
                                {'\n        '}
                            </div>
                            {'\n\n        '}
                            <span className={'kn-port in'} />
                            {'\n      '}
                        </article>
                        {'\n\n      '}
                        <div className={'kn-legend'}>
                            <span>{'Читают контекст'}</span>
                            <span>{'Развивают систему'}</span>
                            <span>{'Применяют тему'}</span>
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    <div className={'bento kn-extra'}>
                        {'\n      '}
                        <div className={'bento-card'}>
                            {'\n        '}
                            <div>
                                {'\n          '}
                                <h3>{'Документация AI-ready'}</h3>
                                {'\n          '}
                                <p>
                                    {
                                        'Структурированный контекст со связями между сущностями и версиями — агент получает правила системы, а не текст страницы.'
                                    }
                                </p>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <div className={'bento-links'}>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Как устроен контекст'}
                                </SiteLink>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Правила для агентов'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'bento-card'}>
                            {'\n        '}
                            <div>
                                {'\n          '}
                                <h3>{'MCP'}</h3>
                                {'\n          '}
                                <p>
                                    {
                                        'Подключение по Model Context Protocol: агент читает компоненты, токены и правила напрямую из системы.'
                                    }
                                </p>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <div className={'bento-links'}>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Подключить MCP'}
                                </SiteLink>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Что уже доступно'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'bento-card'}>
                            {'\n        '}
                            <div>
                                {'\n          '}
                                <h3>{'Прототипирование с контекстом'}</h3>
                                {'\n          '}
                                <p>
                                    {
                                        'Агент собирает экран на реальных компонентах и вашей теме, а не на приблизительной вёрстке.'
                                    }
                                </p>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <div className={'bento-links'}>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Сценарии работы'}
                                </SiteLink>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Ограничения'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n'}
            {'\n'}
            <section className={'section screen'} id={'bento'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'screen-head'}>
                        {'\n      '}
                        <h2>
                            {'Уже работаете с SDDS?'}
                            <br />
                            <span className={'dim'}>{'Всё нужное — здесь'}</span>
                        </h2>
                        {'\n    '}
                    </div>
                    {'\n    '}
                    <div className={'bento'}>
                        {'\n    '}
                        <div className={'bento-card wide'}>
                            {'\n      '}
                            <div className={'bento-main'}>
                                {'\n        '}
                                <div>
                                    <h3>{'Ресурсы для дизайна'}</h3>
                                    <p>{'Библиотеки, компоненты и всё, что подключается в Figma одним файлом.'}</p>
                                </div>
                                {'\n        '}
                                <div className={'bento-links'}>
                                    {'\n          '}
                                    <SiteLink href={'#'}>
                                        <svg viewBox={'0 0 24 24'}>
                                            <path d={'M9 6l6 6-6 6'} />
                                        </svg>
                                        {'Библиотека Figma'}
                                    </SiteLink>
                                    {'\n          '}
                                    <SiteLink href={'#'}>
                                        <svg viewBox={'0 0 24 24'}>
                                            <path d={'M9 6l6 6-6 6'} />
                                        </svg>
                                        {'Компоненты'}
                                    </SiteLink>
                                    {'\n          '}
                                    <SiteLink href={'#'}>
                                        <svg viewBox={'0 0 24 24'}>
                                            <path d={'M9 6l6 6-6 6'} />
                                        </svg>
                                        {'Онбординг'}
                                    </SiteLink>
                                    {'\n        '}
                                </div>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'bento-aside'}>
                                {'\n        '}
                                <div className={'lib-grid'}>
                                    {'\n          '}
                                    <span>{'SDDS Core'}</span>
                                    <span>{'SDDS Icons'}</span>
                                    <span>{'Plasma Legacy'}</span>
                                    <span>{'Patterns'}</span>
                                    {'\n        '}
                                </div>
                                {'\n      '}
                            </div>
                            {'\n    '}
                        </div>
                        {'\n\n    '}
                        <div className={'bento-card'}>
                            {'\n      '}
                            <div>
                                <h3>{'Документация'}</h3>
                                <p>{'Правила системы, спецификации и требования платформ.'}</p>
                            </div>
                            {'\n      '}
                            <div className={'bento-links'}>
                                {'\n        '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Гайдлайны и основы'}
                                </SiteLink>
                                {'\n        '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Разработчикам'}
                                </SiteLink>
                                {'\n        '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Платформы и совместимость'}
                                </SiteLink>
                                {'\n      '}
                            </div>
                            {'\n    '}
                        </div>
                        {'\n\n    '}
                        <div className={'bento-card'}>
                            {'\n      '}
                            <div>
                                <h3>{'AI и MCP'}</h3>
                                <p>{'Как агенты читают систему и что уже доступно в бете.'}</p>
                            </div>
                            {'\n      '}
                            <div className={'bento-links'}>
                                {'\n        '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Подключить MCP'}
                                </SiteLink>
                                {'\n        '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Правила для агентов'}
                                </SiteLink>
                                {'\n        '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Что уже готово'}
                                </SiteLink>
                                {'\n      '}
                            </div>
                            {'\n    '}
                        </div>
                        {'\n\n    '}
                        <div className={'bento-card wide'}>
                            {'\n      '}
                            <div className={'bento-main'}>
                                {'\n        '}
                                <div>
                                    <h3>{'Builder'}</h3>
                                    <p>{'Конфигуратор тем и версий: собрать, проверить и выпустить.'}</p>
                                </div>
                                {'\n        '}
                                <div className={'bento-links'}>
                                    {'\n          '}
                                    <SiteLink href={'#'}>
                                        <svg viewBox={'0 0 24 24'}>
                                            <path d={'M9 6l6 6-6 6'} />
                                        </svg>
                                        {'Перейти в конфигуратор'}
                                    </SiteLink>
                                    {'\n          '}
                                    <SiteLink href={'#'}>
                                        <svg viewBox={'0 0 24 24'}>
                                            <path d={'M9 6l6 6-6 6'} />
                                        </svg>
                                        {'Каталог систем команд'}
                                    </SiteLink>
                                    {'\n          '}
                                    <SiteLink href={'#'}>
                                        <svg viewBox={'0 0 24 24'}>
                                            <path d={'M9 6l6 6-6 6'} />
                                        </svg>
                                        {'Обновления и версии'}
                                    </SiteLink>
                                    {'\n        '}
                                </div>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'bento-aside'} aria-hidden={'true'}>
                                {'\n        '}
                                <div className={'builder-sketch'}>
                                    {'\n          '}
                                    <div className={'rail'}>
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                    </div>
                                    {'\n          '}
                                    <div className={'body'}>
                                        {'\n            '}
                                        <div className={'toolbar'} />
                                        {'\n            '}
                                        <div className={'canvas'}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        {'\n          '}
                                    </div>
                                    {'\n        '}
                                </div>
                                {'\n      '}
                            </div>
                            {'\n    '}
                        </div>
                        {'\n\n    '}
                        <div className={'bento-card wide'}>
                            {'\n      '}
                            <div className={'bento-main'}>
                                {'\n        '}
                                <div>
                                    <h3>{'Иконки SDDS и Plasma'}</h3>
                                    <p>{'Новый набор и легаси-библиотека с планом миграции.'}</p>
                                </div>
                                {'\n        '}
                                <div className={'bento-links'}>
                                    {'\n          '}
                                    <SiteLink href={'#'}>
                                        <svg viewBox={'0 0 24 24'}>
                                            <path d={'M9 6l6 6-6 6'} />
                                        </svg>
                                        {'Каталог иконок'}
                                    </SiteLink>
                                    {'\n          '}
                                    <SiteLink href={'#'}>
                                        <svg viewBox={'0 0 24 24'}>
                                            <path d={'M9 6l6 6-6 6'} />
                                        </svg>
                                        {'Стили и размеры'}
                                    </SiteLink>
                                    {'\n          '}
                                    <SiteLink href={'#'}>
                                        <svg viewBox={'0 0 24 24'}>
                                            <path d={'M9 6l6 6-6 6'} />
                                        </svg>
                                        {'Миграция с Plasma Icons'}
                                    </SiteLink>
                                    {'\n        '}
                                </div>
                                {'\n      '}
                            </div>
                            {'\n      '}
                            <div className={'bento-aside'}>
                                {'\n        '}
                                <div className={'icon-grid'}>
                                    {'\n          '}
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    {'\n          '}
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    {'\n          '}
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    {'\n        '}
                                </div>
                                {'\n      '}
                            </div>
                            {'\n    '}
                        </div>
                        {'\n\n    '}
                        <div className={'bento-card'}>
                            {'\n      '}
                            <div>
                                <h3>{'Поддержка'}</h3>
                                <p>{'Вопрос команде, заявка на компонент и текущие релизы.'}</p>
                            </div>
                            {'\n      '}
                            <div className={'bento-links'}>
                                {'\n        '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Написать команде'}
                                </SiteLink>
                                {'\n        '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Запросить компонент'}
                                </SiteLink>
                                {'\n        '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Статус и релизы'}
                                </SiteLink>
                                {'\n      '}
                            </div>
                            {'\n    '}
                        </div>
                        {'\n  '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n\n\n'}
            {'\n'}
            <section className={'section screen'} id={'contact'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'screen-head'}>
                        {'\n      '}
                        <h2>
                            {'Хороший продукт'}
                            <br />
                            <span className={'dim'}>{'начинается с диалога'}</span>
                        </h2>
                        {'\n      '}
                        <p>
                            {
                                'Есть вопросы по библиотеке или нужна помощь с подключением? Начните с документации или задайте вопрос команде.'
                            }
                        </p>
                        {'\n    '}
                    </div>
                    {'\n    '}
                    <div className={'contact-grid'}>
                        {'\n      '}
                        <div className={'contact-card'}>
                            {'\n        '}
                            <div>
                                {'\n          '}
                                <h3>{'Задать вопрос'}</h3>
                                {'\n          '}
                                <p>{'Разберём сценарий, поможем с подключением библиотеки и темой продукта.'}</p>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <div className={'bento-links'}>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Сообщество в Telegram'}
                                </SiteLink>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Написать команде'}
                                </SiteLink>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Частые вопросы'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'contact-card'}>
                            {'\n        '}
                            <div>
                                {'\n          '}
                                <h3>{'Запросить изменение'}</h3>
                                {'\n          '}
                                <p>
                                    {
                                        'Нужен новый компонент, размер или тема — оставьте заявку, мы вернёмся с решением.'
                                    }
                                </p>
                                {'\n        '}
                            </div>
                            {'\n        '}
                            <div className={'bento-links'}>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Запросить компонент или тему'}
                                </SiteLink>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Сообщить о проблеме'}
                                </SiteLink>
                                {'\n          '}
                                <SiteLink href={'#'}>
                                    <svg viewBox={'0 0 24 24'}>
                                        <path d={'M9 6l6 6-6 6'} />
                                    </svg>
                                    {'Статус заявок и релизы'}
                                </SiteLink>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n  '}
                </div>
                {'\n'}
            </section>
            {'\n\n\n\n'}
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
                    <SiteLink href={'#'}>{'Почта'}</SiteLink>
                </span>
                {'\n'}
            </footer>
            {'\n\n'}
            <canvas className={'confetti'} id={'confetti'} aria-hidden={'true'} />
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
