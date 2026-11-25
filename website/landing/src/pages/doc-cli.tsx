import { DocsPageLayout } from '../DocsPageLayout';
import { DocsCodeBlock } from '../DocsCodeBlock';
import { SiteLink } from '../shared';

const base = 'https://github.com/salute-developers/design-system-builder/releases/latest/download';

export default function DocCliPage() {
    return (
        <DocsPageLayout>
            <nav className="crumbs">
                <SiteLink href="/docs">Документация</SiteLink>
                <i>/</i>
                <span>CLI</span>
            </nav>
            <div className="article-meta">
                <span className="post-kind">Инструменты разработчика</span>
                <span>DS Builder</span>
            </div>
            <h1>CLI — установка и использование</h1>
            <p className="article-lead">
                dsbuilder подключает проект к дизайн-системе, загружает её данные и запускает генерацию кода. В CLI
                также встроен MCP-сервер для AI-агентов.
            </p>
            <h2 id="install">Установка</h2>
            <h3>Установка через npm</h3>
            <p>
                Для работы CLI на macOS, Windows и Linux нужен Node.js 22 или новее и npm. Java и Kotlin для запуска CLI
                не требуются.
            </p>
            <DocsCodeBlock>{`npm install -g @sddsjs/design-system-builder-cli
dsbuilder --version
dsbuilder --help`}</DocsCodeBlock>
            <p>
                Доступны все команды CLI, включая <code>dsbuilder mcp serve</code>.
            </p>
            <h4>Обновление через npm</h4>
            <DocsCodeBlock>{`npm install -g @sddsjs/design-system-builder-cli@latest`}</DocsCodeBlock>
            <h4>Генераторы кода дизайн-систем</h4>
            <p>
                Генераторы превращают данные дизайн-системы в код для выбранной платформы. Устанавливайте генератор
                только если планируете генерировать код дизайн-системы. Для загрузки данных и работы с MCP достаточно
                CLI.
            </p>
            <p>Чтобы установить генератор для React, выполните команду:</p>
            <DocsCodeBlock>{`dsbuilder toolchain install web`}</DocsCodeBlock>
            <p>
                Для генерации под Android нужны JDK проекта и Gradle-плагин Design System Builder. Инструкция по
                подключению есть в{' '}
                <a href="https://plugins.gradle.org/plugin/io.github.salute-developers.design-system-builder">
                    Gradle Plugin Portal
                </a>
                .
            </p>
            <p>
                Для генерации SwiftUI на macOS с Apple Silicon установите iOS-генератор отдельно. Команда скачает его из
                последнего релиза Plasma iOS на GitHub.
            </p>
            <DocsCodeBlock>{`dsbuilder toolchain install ios`}</DocsCodeBlock>
            <p>
                Для ручной установки скачайте архив <code>dsbuilder-ios-cli-&lt;тег&gt;.zip</code> из раздела Assets
                нужного <a href="https://github.com/salute-developers/plasma-ios/releases">релиза Plasma iOS</a> и
                передайте путь к архиву команде <code>dsbuilder toolchain install ios --from</code>.
            </p>
            <div className="callout">
                <b>Переход с прежней установки</b>
                <p>
                    Если CLI уже установлен другим способом, проверьте, какую команду запускает терминал. Используйте{' '}
                    <code>which -a dsbuilder</code> на macOS и Linux или <code>Get-Command dsbuilder -All</code> в
                    PowerShell. Убедитесь, что используется версия, установленная через npm.
                </p>
            </div>
            <h3>Альтернативные способы установки</h3>
            <p>
                Выберите свою ОС и выполните команды в терминале. Перед запуском скрипт можно открыть и прочитать. Он
                загрузит последнюю стабильную версию CLI и проверит контрольную сумму архива.
            </p>
            <details id="macos">
                <summary>macOS</summary>
                <p>
                    Архитектура Apple Silicon или Intel определяется автоматически. Для самого CLI и MCP Java и Node.js
                    не нужны.
                </p>
                <DocsCodeBlock>{`curl -fsSL ${base}/install.sh -o install-dsbuilder.sh &&\nsh install-dsbuilder.sh`}</DocsCodeBlock>
                <p>
                    <a href={`${base}/install.sh`}>Скрипт установки для macOS и Linux/JVM</a>
                </p>
                <p>
                    CLI устанавливается в <code>~/.dsbuilder/cli/macos</code>, команда доступна через{' '}
                    <code>~/.local/bin/dsbuilder</code>. Если терминал не находит её, добавьте каталог в PATH (для
                    стандартной оболочки zsh):
                </p>
                <DocsCodeBlock>{`echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc\nsource ~/.zshrc`}</DocsCodeBlock>
                <p>
                    На Apple Silicon вместе с CLI устанавливается инструмент генерации iOS. На Intel Mac генерация
                    SwiftUI недоступна.
                </p>
            </details>
            <details id="windows">
                <summary>Windows x64</summary>
                <p>
                    Откройте PowerShell и выполните команды. Права администратора, Java и Node.js для CLI и MCP не
                    требуются.
                </p>
                <DocsCodeBlock>{`Invoke-WebRequest -Uri '${base}/install.ps1' -OutFile install-dsbuilder.ps1\n.\\install-dsbuilder.ps1`}</DocsCodeBlock>
                <p>
                    <a href={`${base}/install.ps1`}>Скрипт установки для Windows</a>
                </p>
                <p>
                    Установщик добавляет <code>%LOCALAPPDATA%\DSBuilder\cli</code> в пользовательский PATH. После
                    установки откройте новое окно терминала.
                </p>
            </details>
            <details id="linux">
                <summary>Linux / JVM</summary>
                <p>Для JVM-варианта нужна Java 17 или новее. Выберите его явно:</p>
                <DocsCodeBlock>{`curl -fsSL ${base}/install.sh -o install-dsbuilder.sh &&\nsh install-dsbuilder.sh --target jvm`}</DocsCodeBlock>
            </details>
            <h4>Проверка и обновление</h4>
            <DocsCodeBlock>{`dsbuilder --version\ndsbuilder --help`}</DocsCodeBlock>
            <p>Для обновления повторите команды установки для своей ОС: скрипт выберет текущую стабильную версию.</p>
            <h2 id="project">Выберите сценарий работы</h2>
            <p>
                После установки войдите в аккаунт DS Builder через браузер. Для доступа нужен аккаунт с правами на
                нужный проект:
            </p>
            <DocsCodeBlock>{`dsbuilder auth login`}</DocsCodeBlock>
            <h3>Есть рабочая папка, к которой вы возвращаетесь</h3>
            <p>
                Настройка через <code>dsbuilder init</code> полезна, если вы хотите закрепить одну дизайн-систему за
                конкретной папкой на компьютере. Например:
            </p>
            <ul className="article-list">
                <li>Вы разрабатываете приложение и храните его код в локальном репозитории.</li>
                <li>Вы поддерживаете библиотеку токенов и компонентов для команды.</li>
                <li>
                    Вы как дизайнер развиваете прототип в инструменте с локальной папкой проекта и хотите, чтобы агент
                    при следующих обращениях использовал ту же дизайн-систему.
                </li>
            </ul>
            <p>
                Для прототипирования в OpenDesign, Claude Design или другом инструменте ориентируйтесь на свой способ
                работы: если у вас есть постоянная локальная папка, её можно настроить через init. Если работа идёт в
                самом инструменте и такой папки нет, переходите к сценарию ниже.
            </p>
            <h3>Работа без постоянного проекта</h3>
            <p>
                Для знакомства с дизайн-системой, разовых запросов или работы с разными проектами запускать init не
                обязательно. <SiteLink href="/docs/mcp#context">Подключите MCP без привязки к каталогу</SiteLink>:
                передайте агенту ссылку <code>dsbuilder://</code> или попросите помочь выбрать доступный проект и
                дизайн-систему.
            </p>
            <p>
                В CLI контекст можно передать конкретному вызову через <code>--design-system</code>. Например, проверка
                доступа по ссылке работает без init. Здесь и далее ID и версия в примере условные — замените ссылку на
                свою:
            </p>
            <DocsCodeBlock>{`dsbuilder status --design-system 'dsbuilder://projects/project-123/design-systems/ds-456?version=1.0.0&platform=compose'`}</DocsCodeBlock>
            <h2 id="init">Мастер init: настройка постоянного проекта</h2>
            <p>
                Запускайте init в папке своего приложения, библиотеки или прототипа на компьютере — там, где лежат
                файлы, с которыми вы работаете. Это не папка установки CLI. Если локальной папки нет, этот шаг можно
                пропустить и выбрать дизайн-систему в диалоге с агентом через MCP.
            </p>
            <p>
                Откройте приложение «Терминал» на macOS или PowerShell на Windows. Команда <code>cd</code> переводит
                терминал в нужную папку. Замените путь в примере на путь к своему проекту; кавычки нужны, если в нём
                есть пробелы.
            </p>
            <h3>macOS / Linux</h3>
            <DocsCodeBlock>{`cd "/Users/you/Projects/my-app"
pwd
dsbuilder init`}</DocsCodeBlock>
            <h3>Windows PowerShell</h3>
            <DocsCodeBlock>{`cd "C:\\Users\\you\\Projects\\my-app"
Get-Location
dsbuilder init`}</DocsCodeBlock>
            <p>
                <code>pwd</code> или <code>Get-Location</code> покажет текущую папку: убедитесь, что это ваш проект,
                прежде чем запускать init. Если в редакторе есть встроенный терминал, его также можно использовать,
                предварительно проверив текущую папку.
            </p>
            <h3>Что выбрать в мастере</h3>
            <ol className="article-list doc-step-list">
                <li>
                    <b>Выберите проект DS Builder.</b>
                    <p>
                        Это проект в веб-интерфейсе DS Builder, в котором находится нужная дизайн-система, а не имя
                        папки на компьютере. Выберите проект своей команды или продукта из доступного списка. Если не
                        знаете какой, уточните у владельца дизайн-системы. Стрелки ↑/↓ перемещают выбор, Enter
                        подтверждает его.
                    </p>
                </li>
                <li>
                    <b>Выберите дизайн-систему.</b>
                    <p>
                        Выберите систему, по которой вы разрабатываете приложение или собираете прототип. В списке будут
                        системы выбранного проекта DS Builder. Используйте стрелки ↑/↓ и Enter.
                    </p>
                </li>
                <li>
                    <b>Отметьте платформы.</b>
                    <p>
                        Для генерации кода выберите технологию проекта: compose — Jetpack Compose, android-view —
                        Android Views, swiftui — SwiftUI, react — React. Если вы дизайнер и хотите только работать с
                        агентом над прототипом, этот шаг можно пропустить. Стрелками перемещайтесь по списку, пробелом
                        отмечайте или снимайте выбор, Enter завершает настройку. Можно выбрать несколько платформ или
                        нажать Enter без выбора и указывать платформу при генерации.
                    </p>
                </li>
            </ol>
            <p>
                Доступны <code>compose</code>, <code>android-view</code>, <code>swiftui</code> и <code>react</code>.
                Ctrl+C отменяет выбор.
            </p>
            <div className="callout">
                <b>Пример: приложение для Android</b>
                <p>
                    Допустим, код приложения лежит в папке my-app, а в DS Builder команда хранит систему «Мобильная» в
                    проекте «Личный кабинет». Перейдите через cd в my-app, запустите init, выберите «Личный кабинет» →
                    «Мобильная», затем отметьте compose и нажмите Enter. Эти названия условные: в мастере выберите
                    проект и систему своей команды.
                </p>
            </div>
            <p>
                Мастер создаст <code>.sdds/config.json</code> в текущем каталоге: сохранит выбранные проект,
                дизайн-систему и платформы. При таком интерактивном выборе команды используют сохранённую сессию входа.
                Init настраивает локальную привязку и не создаёт новый проект в DS Builder.
            </p>
            <p>Проверьте результат:</p>
            <DocsCodeBlock>{`dsbuilder status`}</DocsCodeBlock>
            <p>
                Если заранее известна платформа, передайте её при запуске: мастер спросит только проект и
                дизайн-систему.
            </p>
            <DocsCodeBlock>{`dsbuilder init --platform compose`}</DocsCodeBlock>
            <h2 id="usage">Загрузка и генерация для разработчиков</h2>
            <p>
                Этот раздел нужен разработчикам, которые поддерживают токены темы и компоненты дизайн-системы в коде
                своего проекта. Команды позволяют загрузить актуальные данные из DS Builder и получить код для выбранной
                платформы.
            </p>
            <p>
                Если вы дизайнер и используете дизайн-систему для прототипирования через AI-агента, эти команды обычно
                не нужны. Переходите к <SiteLink href="/docs/mcp">подключению MCP</SiteLink>.
            </p>
            <p>
                В настроенном через init проекте загрузите тему и компоненты, затем запустите генерацию. Если выбрана
                одна платформа, она используется автоматически:
            </p>
            <p>Сначала скачайте данные темы (токены и их значения) и описания компонентов в рабочую папку:</p>
            <DocsCodeBlock>{`dsbuilder theme fetch\ndsbuilder components fetch`}</DocsCodeBlock>
            <p>Затем сгенерируйте из загруженных данных код темы и компонентов для своего приложения:</p>
            <DocsCodeBlock>{`dsbuilder theme generate\ndsbuilder components generate`}</DocsCodeBlock>
            <p>Если платформ несколько, укажите нужную в каждой команде генерации, например:</p>
            <DocsCodeBlock>{`dsbuilder theme generate --platform swiftui\ndsbuilder components generate --platform swiftui`}</DocsCodeBlock>
            <p>
                Справка по отдельной команде доступна через <code>--help</code>:
            </p>
            <DocsCodeBlock>{`dsbuilder theme generate --help\ndsbuilder components generate --help\ndsbuilder auth status`}</DocsCodeBlock>
            <h2 id="mcp">Работа с AI-агентом</h2>
            <p>
                Настройте <SiteLink href="/docs/mcp">MCP-сервер dsbuilder</SiteLink>, чтобы агент мог читать
                дизайн-систему. Вы можете использовать локальную привязку проекта или выбирать контекст в диалоге — init
                для подключения MCP не обязателен.
            </p>
        </DocsPageLayout>
    );
}
