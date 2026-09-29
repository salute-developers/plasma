import { Header, SiteFooter, SiteLink } from '../shared';

export default function ContactsPage() {
    return (
        <>
            <Header />

            <section className="section screen page-top">
                <div className="shell">
                    <div className="reach-head">
                        <h2>Куда писать</h2>

                        <p>
                            Доступ в Builder выдаёт команда системы вручную. Вопросы по компонентам и сборке быстрее
                            решаются в чатах — выбирайте строку по задаче.
                        </p>
                    </div>

                    <div className="reach-primary">
                        <div className="reach-primary-text">
                            <b>Запросить доступ</b>

                            <span>Учётная запись в Builder и роль в проекте: продукт, владелец, участники</span>
                        </div>

                        <div className="reach-primary-act">
                            <span className="reach-mail">sdds@sber.ru</span>

                            <button className="copy-btn" type="button" data-copy="sdds@sber.ru">
                                <span className="copy-label">Скопировать</span>
                            </button>

                            <SiteLink
                                className="copy-btn is-solid"
                                href="mailto:sdds@sber.ru?subject=Запрос%20доступа%20в%20SDDS%20Builder&body=Продукт%3A%0AВладелец%20проекта%3A%0AУчастники%20и%20роли%3A%0A"
                            >
                                Написать письмо
                            </SiteLink>
                        </div>
                    </div>

                    <div className="reach-list">
                        <SiteLink className="reach-line" href="https://t.me/kenymook">
                            <span className="reach-line-name">Telegram</span>

                            <span className="reach-line-note">
                                Вопросы по компонентам и сценариям — напрямую команде системы
                            </span>

                            <span className="reach-line-go">
                                Написать
                                <i>↗</i>
                            </span>
                        </SiteLink>

                        <SiteLink className="reach-line" href="https://sberchat.sberbank.ru/@emmitrokhin">
                            <span className="reach-line-name">СберЧат</span>

                            <span className="reach-line-note">
                                Для команд внутри контура: подключение библиотеки и темы продукта
                            </span>

                            <span className="reach-line-go">
                                Написать
                                <i>↗</i>
                            </span>
                        </SiteLink>

                        <SiteLink className="reach-line" href="https://mm.sberdevices.ru/sberdevices/messages/@emmitrokhin">
                            <span className="reach-line-name">Mattermost</span>

                            <span className="reach-line-note">Для разработки: версии пакетов, сборка и токены</span>

                            <span className="reach-line-go">
                                Написать
                                <i>↗</i>
                            </span>
                        </SiteLink>

                        <SiteLink
                            className="reach-line"
                            href="https://plasma.sberdevices.ru/changelog/?vertical=plasmaSDService&platform=React"
                        >
                            <span className="reach-line-name">Релизы</span>

                            <span className="reach-line-note">Что изменилось в последней версии библиотеки и тем</span>

                            <span className="reach-line-go">
                                Перейти
                                <i>↗</i>
                            </span>
                        </SiteLink>
                    </div>
                </div>
            </section>

            <section className="section screen">
                <div className="shell">
                    <div className="screen-head">
                        <h2>
                            Как проходит запрос
                            <br />
                            <span className="dim">от вопроса до решения</span>
                        </h2>

                        <p>
                            Чтобы разбор шёл быстрее, приложите ссылку на макет или экран продукта и опишите, какой
                            сценарий закрываете.
                        </p>
                    </div>

                    <div className="scenarios">
                        <div className="scenario">
                            <h3>Задать вопрос</h3>

                            <p>
                                Не нашли правило в документации или не уверены, какой компонент подходит под сценарий.
                            </p>

                            <div className="scenario-steps">
                                <span className="scenario-step">
                                    <i>1</i>
                                    Пишете в сообщество с описанием задачи
                                </span>

                                <span className="scenario-step">
                                    <i>2</i>
                                    Разбираем сценарий и подсказываем решение из системы
                                </span>

                                <span className="scenario-step">
                                    <i>3</i>
                                    Если правила не хватает — фиксируем и дополняем гайдлайн
                                </span>
                            </div>
                        </div>

                        <div className="scenario">
                            <h3>Запросить компонент или тему</h3>

                            <p>В системе нет элемента, или нужна тема под новый продукт.</p>

                            <div className="scenario-steps">
                                <span className="scenario-step">
                                    <i>1</i>
                                    Оставляете заявку с описанием сценария и ссылкой на макет
                                </span>

                                <span className="scenario-step">
                                    <i>2</i>
                                    Проверяем, закрывается ли задача существующими компонентами
                                </span>

                                <span className="scenario-step">
                                    <i>3</i>
                                    Если нет — берём в проработку и возвращаемся с решением
                                </span>
                            </div>
                        </div>

                        <div className="scenario">
                            <h3>Сообщить о проблеме</h3>

                            <p>Компонент ведёт себя не так, как описано, или ломается вёрстка в конкретном случае.</p>

                            <div className="scenario-steps">
                                <span className="scenario-step">
                                    <i>1</i>
                                    Присылаете версию библиотеки, платформу и шаги воспроизведения
                                </span>

                                <span className="scenario-step">
                                    <i>2</i>
                                    Воспроизводим и подтверждаем ошибку
                                </span>

                                <span className="scenario-step">
                                    <i>3</i>
                                    Исправление выходит с ближайшим релизом, о чём пишем в новостях
                                </span>
                            </div>
                        </div>

                        <div className="scenario">
                            <h3>Узнать статус</h3>

                            <p>Заявка уже отправлена, нужно понять, на каком она этапе.</p>

                            <div className="scenario-steps">
                                <span className="scenario-step">
                                    <i>1</i>
                                    Смотрите статус в списке заявок
                                </span>

                                <span className="scenario-step">
                                    <i>2</i>
                                    Изменения по версиям публикуем в новостях
                                </span>

                                <span className="scenario-step">
                                    <i>3</i>
                                    Если заявка зависла — напоминайте в сообществе, это нормально
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section screen">
                <div className="shell">
                    <div className="screen-head">
                        <h2>
                            Кто отвечает
                            <br />
                            <span className="dim">команда системы</span>
                        </h2>

                        <p>Роли в команде SDDS: к кому идти с каким вопросом. Имена и контакты — в сообществе.</p>
                    </div>

                    <div className="owners">
                        <div className="owner">
                            <b>Дизайн системы</b>
                            <span>Компоненты, правила, спецификации и гайдлайны</span>
                        </div>

                        <div className="owner">
                            <b>Разработка библиотеки</b>
                            <span>Пакеты, платформенные реализации, релизы и миграции</span>
                        </div>

                        <div className="owner">
                            <b>Builder и темы</b>
                            <span>Конфигуратор, темы продуктов, версии и раздача контекста</span>
                        </div>

                        <div className="owner">
                            <b>AI и MCP</b>
                            <span>Подключение агентов, структура контекста, бета-методы</span>
                        </div>
                    </div>
                </div>
            </section>

            <SiteFooter contactHref="/news" contactLabel="Новости" />
        </>
    );
}
