import { Header, SiteLink, parseStyle } from '../shared';

export default function ContactsPage() {
    return (
        <>
            {'\n\n'}
            <Header />
            {'\n\n'}
            <section className={'section screen page-top'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'reach-head'}>
                        {'\n      '}
                        <h2>{'Куда писать'}</h2>
                        {'\n      '}
                        <p>
                            {
                                'Доступ в Builder выдаёт команда системы вручную. Вопросы по компонентам и сборке быстрее решаются в чатах — выбирайте строку по задаче.'
                            }
                        </p>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    {'\n    '}
                    <div className={'reach-primary'}>
                        {'\n      '}
                        <div className={'reach-primary-text'}>
                            {'\n        '}
                            <b>{'Запросить доступ'}</b>
                            {'\n        '}
                            <span>{'Учётная запись в Builder и роль в проекте: продукт, владелец, участники'}</span>
                            {'\n      '}
                        </div>
                        {'\n      '}
                        <div className={'reach-primary-act'}>
                            {'\n        '}
                            <span className={'reach-mail'}>{'sdds@sber.ru'}</span>
                            {'\n        '}
                            <button className={'copy-btn'} type={'button'} data-copy={'sdds@sber.ru'}>
                                <span className={'copy-label'}>{'Скопировать'}</span>
                            </button>
                            {'\n        '}
                            <SiteLink
                                className={'copy-btn is-solid'}
                                href={
                                    'mailto:sdds@sber.ru?subject=Запрос%20доступа%20в%20SDDS%20Builder&body=Продукт%3A%0AВладелец%20проекта%3A%0AУчастники%20и%20роли%3A%0A'
                                }
                            >
                                {'Написать письмо'}
                            </SiteLink>
                            {'\n      '}
                        </div>
                        {'\n    '}
                    </div>
                    {'\n\n    '}
                    {'\n    '}
                    <div className={'reach-list'}>
                        {'\n      '}
                        <SiteLink className={'reach-line'} href={'#'}>
                            {'\n        '}
                            <span className={'reach-line-name'}>{'Сообщество в Telegram'}</span>
                            {'\n        '}
                            <span className={'reach-line-note'}>
                                {'Вопросы по компонентам и сценариям. Отвечает команда системы и коллеги из продуктов'}
                            </span>
                            {'\n        '}
                            <span className={'reach-line-go'}>
                                {'@sdds_community'}
                                <i>{'↗'}</i>
                            </span>
                            {'\n      '}
                        </SiteLink>
                        {'\n      '}
                        <SiteLink className={'reach-line'} href={'#'}>
                            {'\n        '}
                            <span className={'reach-line-name'}>{'СберЧат'}</span>
                            {'\n        '}
                            <span className={'reach-line-note'}>
                                {'Для команд внутри контура: подключение библиотеки и темы продукта'}
                            </span>
                            {'\n        '}
                            <span className={'reach-line-go'}>
                                {'Канал SDDS'}
                                <i>{'↗'}</i>
                            </span>
                            {'\n      '}
                        </SiteLink>
                        {'\n      '}
                        <SiteLink className={'reach-line'} href={'#'}>
                            {'\n        '}
                            <span className={'reach-line-name'}>{'Mattermost'}</span>
                            {'\n        '}
                            <span className={'reach-line-note'}>
                                {'Для разработки: версии пакетов, сборка и токены'}
                            </span>
                            {'\n        '}
                            <span className={'reach-line-go'}>
                                {'~sdds-support'}
                                <i>{'↗'}</i>
                            </span>
                            {'\n      '}
                        </SiteLink>
                        {'\n      '}
                        <SiteLink className={'reach-line'} href={'/news'}>
                            {'\n        '}
                            <span className={'reach-line-name'}>{'Релизы'}</span>
                            {'\n        '}
                            <span className={'reach-line-note'}>
                                {'Что изменилось в последней версии библиотеки и тем'}
                            </span>
                            {'\n        '}
                            <span className={'reach-line-go'}>
                                {'Новости'}
                                <i>{'→'}</i>
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
            <section className={'section screen'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'screen-head'}>
                        {'\n      '}
                        <h2>
                            {'Как проходит запрос'}
                            <br />
                            <span className={'dim'}>{'от вопроса до решения'}</span>
                        </h2>
                        {'\n      '}
                        <p>
                            {
                                'Чтобы разбор шёл быстрее, приложите ссылку на макет или экран продукта и опишите, какой сценарий закрываете.'
                            }
                        </p>
                        {'\n    '}
                    </div>
                    {'\n    '}
                    <div className={'scenarios'}>
                        {'\n      '}
                        <div className={'scenario'}>
                            {'\n        '}
                            <h3>{'Задать вопрос'}</h3>
                            {'\n        '}
                            <p>
                                {
                                    'Не нашли правило в документации или не уверены, какой компонент подходит под сценарий.'
                                }
                            </p>
                            {'\n        '}
                            <div className={'scenario-steps'}>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'1'}</i>
                                    {'Пишете в сообщество с описанием задачи'}
                                </span>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'2'}</i>
                                    {'Разбираем сценарий и подсказываем решение из системы'}
                                </span>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'3'}</i>
                                    {'Если правила не хватает — фиксируем и дополняем гайдлайн'}
                                </span>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n\n      '}
                        <div className={'scenario'}>
                            {'\n        '}
                            <h3>{'Запросить компонент или тему'}</h3>
                            {'\n        '}
                            <p>{'В системе нет элемента, или нужна тема под новый продукт.'}</p>
                            {'\n        '}
                            <div className={'scenario-steps'}>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'1'}</i>
                                    {'Оставляете заявку с описанием сценария и ссылкой на макет'}
                                </span>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'2'}</i>
                                    {'Проверяем, закрывается ли задача существующими компонентами'}
                                </span>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'3'}</i>
                                    {'Если нет — берём в проработку и возвращаемся с решением'}
                                </span>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n\n      '}
                        <div className={'scenario'}>
                            {'\n        '}
                            <h3>{'Сообщить о проблеме'}</h3>
                            {'\n        '}
                            <p>
                                {'Компонент ведёт себя не так, как описано, или ломается вёрстка в конкретном случае.'}
                            </p>
                            {'\n        '}
                            <div className={'scenario-steps'}>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'1'}</i>
                                    {'Присылаете версию библиотеки, платформу и шаги воспроизведения'}
                                </span>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'2'}</i>
                                    {'Воспроизводим и подтверждаем ошибку'}
                                </span>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'3'}</i>
                                    {'Исправление выходит с ближайшим релизом, о чём пишем в новостях'}
                                </span>
                                {'\n        '}
                            </div>
                            {'\n      '}
                        </div>
                        {'\n\n      '}
                        <div className={'scenario'}>
                            {'\n        '}
                            <h3>{'Узнать статус'}</h3>
                            {'\n        '}
                            <p>{'Заявка уже отправлена, нужно понять, на каком она этапе.'}</p>
                            {'\n        '}
                            <div className={'scenario-steps'}>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'1'}</i>
                                    {'Смотрите статус в списке заявок'}
                                </span>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'2'}</i>
                                    {'Изменения по версиям публикуем в новостях'}
                                </span>
                                {'\n          '}
                                <span className={'scenario-step'}>
                                    <i>{'3'}</i>
                                    {'Если заявка зависла — напоминайте в сообществе, это нормально'}
                                </span>
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
            <section className={'section screen'}>
                {'\n  '}
                <div className={'shell'}>
                    {'\n    '}
                    <div className={'screen-head'}>
                        {'\n      '}
                        <h2>
                            {'Кто отвечает'}
                            <br />
                            <span className={'dim'}>{'команда системы'}</span>
                        </h2>
                        {'\n      '}
                        <p>{'Роли в команде SDDS: к кому идти с каким вопросом. Имена и контакты — в сообществе.'}</p>
                        {'\n    '}
                    </div>
                    {'\n    '}
                    <div className={'owners'}>
                        {'\n      '}
                        <div className={'owner'}>
                            <b>{'Дизайн системы'}</b>
                            <span>{'Компоненты, правила, спецификации и гайдлайны'}</span>
                        </div>
                        {'\n      '}
                        <div className={'owner'}>
                            <b>{'Разработка библиотеки'}</b>
                            <span>{'Пакеты, платформенные реализации, релизы и миграции'}</span>
                        </div>
                        {'\n      '}
                        <div className={'owner'}>
                            <b>{'Builder и темы'}</b>
                            <span>{'Конфигуратор, темы продуктов, версии и раздача контекста'}</span>
                        </div>
                        {'\n      '}
                        <div className={'owner'}>
                            <b>{'AI и MCP'}</b>
                            <span>{'Подключение агентов, структура контекста, бета-методы'}</span>
                        </div>
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
                    <SiteLink href={'/news'}>{'Новости'}</SiteLink>
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
