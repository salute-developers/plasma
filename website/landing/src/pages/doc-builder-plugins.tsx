import { BuilderGuide, Step, Steps } from '../BuilderGuide';

const releases = 'https://github.com/salute-developers/design-system-builder/releases?q=tokens-plugin&expanded=true';

export default function DocBuilderPluginsPage() {
    return (
        <BuilderGuide
            route="/docs/builder-plugins"
            title="Плагины DS Builder для Figma и Pixso"
            lead="Плагин DS Builder Tokens показывает токены темы прямо в редакторе макетов и переносит их в переменные и стили файла. Один и тот же плагин работает в Figma и Pixso."
        >
            <h2 id="install">Установка</h2>
            <p>
                Плагин публикуется архивами в <a href={releases}>релизах DS Builder на GitHub</a>. Скачайте из последнего
                релиза <code>tokens-plugin-v…</code> архив для своего редактора: <code>ds-builder-tokens-figma-…zip</code>{' '}
                для Figma или <code>ds-builder-tokens-pixso-…zip</code> для Pixso. Инструкция по установке также лежит в
                архиве в файле <code>README.txt</code>.
            </p>

            <h3 id="install-figma">Figma</h3>
            <p>Импорт плагина из файла есть только в приложении Figma для компьютера, в браузерной версии его нет.</p>
            <Steps>
                <Step title="Распакуйте архив в постоянную папку.">
                    <p>Не удаляйте и не переносите её: Figma читает плагин из этой папки.</p>
                </Step>
                <Step title="Откройте любой файл в приложении Figma.">
                    <p>
                        Выберите Plugins → Development → Import plugin from manifest и укажите <code>manifest.json</code>{' '}
                        из распакованной папки.
                    </p>
                </Step>
                <Step title="Запустите плагин.">
                    <p>Он находится в Plugins → Development → DS Builder Tokens.</p>
                </Step>
            </Steps>

            <h3 id="install-pixso">Pixso</h3>
            <Steps>
                <Step title="Распакуйте архив в постоянную папку.">
                    <p>
                        Файлы <code>manifest.json</code>, <code>code.js</code> и <code>ui.html</code> должны лежать
                        рядом.
                    </p>
                </Step>
                <Step title="Загрузите плагин.">
                    <p>
                        Откройте файл в Pixso, выберите «Плагины» → «Develop a plugin» → «Upload a plugin» и укажите{' '}
                        <code>manifest.json</code> из распакованной папки.
                    </p>
                </Step>
                <Step title="Запустите плагин.">
                    <p>Он появится на вкладке «Local plugin».</p>
                </Step>
            </Steps>

            <h3 id="update">Обновление</h3>
            <ul className="article-list">
                <li>
                    Figma: замените содержимое папки плагина файлами из нового архива. Импортировать плагин заново не
                    нужно.
                </li>
                <li>
                    Pixso: загрузите <code>manifest.json</code> из нового архива тем же способом. Если на вкладке «Local
                    plugin» осталась прежняя версия, удалите её.
                </li>
            </ul>

            <h2 id="login">Вход</h2>
            <Steps>
                <Step title="Нажмите «Войти».">
                    <p>Плагин откроет браузер и покажет код подтверждения.</p>
                </Step>
                <Step title="Подтвердите вход в браузере.">
                    <p>
                        Код в браузере должен совпадать с кодом в плагине. Если окно закрылось, нажмите «Открыть снова».
                    </p>
                </Step>
                <Step title="Вернитесь в плагин.">
                    <p>После подтверждения плагин сам перейдёт к выбору дизайн-системы.</p>
                </Step>
            </Steps>
            <div className="callout">
                <b>Вход не разрешён</b>
                <p>
                    Сообщение «Вашей учётной записи не разрешён вход в плагин» значит, что у учётной записи нет нужной
                    роли. Обратитесь к администратору DS Builder.
                </p>
            </div>

            <h2 id="tokens">Просмотр токенов</h2>
            <Steps>
                <Step title="Выберите проект, дизайн-систему и тему.">
                    <p>Если вариант один, плагин выберет его сам и запомнит выбор.</p>
                </Step>
                <Step title="Выберите версию.">
                    <p>
                        По умолчанию открыта последняя опубликованная версия. Пока версий нет, доступен «Черновик».
                    </p>
                </Step>
                <Step title="Смотрите токены на вкладках «Цвета», «Типографика» и «Размеры».">
                    <p>
                        Переключайте режим Light или Dark, ищите токен в поле «Найти токен». Щелчок по имени или
                        значению копирует его.
                    </p>
                </Step>
            </Steps>

            <h2 id="export">Экспорт в файл</h2>
            <Steps>
                <Step title="Выберите платформу.">
                    <p>Значения токенов в разных платформах могут отличаться.</p>
                </Step>
                <Step title="Нажмите «Экспортировать в Figma» или «Экспортировать в Pixso».">
                    <p>
                        Плагин создаст коллекции <code>00. Palette</code>, <code>01. Theme</code>,{' '}
                        <code>02. SubTheme</code>, <code>03. Typography</code>, <code>04. Numbers</code> и{' '}
                        <code>05. Spacing</code>, а также текстовые стили, стили эффектов и заливки.
                    </p>
                </Step>
                <Step title="Проверьте отчёт экспорта.">
                    <p>
                        В отчёте видно, сколько коллекций, переменных и стилей создано, что создано с оговоркой и что
                        пропущено. Если в системе не хватает шрифтов, скачайте их одним архивом прямо из отчёта.
                    </p>
                </Step>
            </Steps>
            <p>
                Повторный экспорт обновляет уже созданные переменные и стили, дубликатов не появляется. Храните в одном
                файле одну дизайн-систему.
            </p>
            <div className="callout">
                <b>Ограничения</b>
                <p>
                    На тарифе Figma Starter в коллекции доступен только один режим, поэтому экспорт тем с режимами
                    Light и Dark не выполнится. В Pixso градиент становится парой стилей <code>Light/…</code> и{' '}
                    <code>Dark/…</code>, а текстовые стили не связываются с переменными.
                </p>
            </div>
        </BuilderGuide>
    );
}
