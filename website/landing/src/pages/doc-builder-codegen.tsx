import { BuilderGuide, Step, Steps } from '../BuilderGuide';
import { DocsCodeBlock } from '../DocsCodeBlock';
import { SiteLink } from '../shared';

export default function DocBuilderCodegenPage() {
    return (
        <BuilderGuide
            route="/docs/builder-codegen"
            title="Как сгенерировать код дизайн-системы через CLI"
            lead="dsbuilder загружает данные дизайн-системы в проект и генерирует из них тему и компоненты для React, Android и iOS."
        >
            <h2 id="prepare">Подготовка</h2>
            <Steps>
                <Step title="Установите CLI.">
                    <p>
                        Способы установки для macOS, Windows и Linux описаны на странице{' '}
                        <SiteLink href="/docs/cli#install">CLI — установка и использование</SiteLink>.
                    </p>
                </Step>
                <Step title="Войдите в аккаунт.">
                    <p>Команда откроет браузер для подтверждения входа:</p>
                    <DocsCodeBlock>{`dsbuilder auth login`}</DocsCodeBlock>
                    <p>
                        В CI вместо входа через браузер используйте ключ доступа: создайте его в «Настройках» DS Builder →
                        «Personal Access Token» и передайте в переменной <code>DSBUILDER_API_KEY</code>.
                    </p>
                </Step>
                <Step title="Подключите каталог проекта к дизайн-системе.">
                    <p>Команда по шагам спросит проект, дизайн-систему и платформы и создаст <code>.sdds/config.json</code>:</p>
                    <DocsCodeBlock>{`dsbuilder init
dsbuilder status`}</DocsCodeBlock>
                </Step>
                <Step title="Загрузите данные дизайн-системы.">
                    <DocsCodeBlock>{`dsbuilder ds fetch`}</DocsCodeBlock>
                    <p>Команда загружает тему и компоненты в каталог <code>.sdds</code>.</p>
                </Step>
            </Steps>

            <h2 id="react">React</h2>
            <p>Генератору для React нужен Node.js 22 или новее. Установите его один раз:</p>
            <DocsCodeBlock>{`dsbuilder toolchain install web`}</DocsCodeBlock>
            <p>Сгенерируйте тему и компоненты:</p>
            <DocsCodeBlock>{`dsbuilder ds generate --platform react --output ./web`}</DocsCodeBlock>
            <p>
                Без <code>--output</code> результат появится в каталоге <code>output</code> рядом с <code>.sdds</code>.
                Чтобы собрать npm-пакет, выполните в нём <code>npm install</code> и <code>npm pack</code>.
            </p>

            <h2 id="android">Android</h2>
            <p>
                Для Android генерация идёт через Gradle проекта, поэтому нужны JDK и подключённый Gradle-плагин DS
                Builder. Инструкция по подключению есть в{' '}
                <a href="https://plugins.gradle.org/plugin/io.github.salute-developers.design-system-builder">
                    Gradle Plugin Portal
                </a>
                .
            </p>
            <DocsCodeBlock>{`dsbuilder init --platform compose
dsbuilder ds fetch
dsbuilder ds generate`}</DocsCodeBlock>
            <p>
                Для View-компонентов укажите платформу <code>android-view</code>.
            </p>

            <h2 id="ios">iOS</h2>
            <p>Генерация SwiftUI работает на Mac с Apple Silicon. Установите iOS-генератор:</p>
            <DocsCodeBlock>{`dsbuilder toolchain install ios`}</DocsCodeBlock>
            <p>Затем сгенерируйте тему:</p>
            <DocsCodeBlock>{`dsbuilder init --platform swiftui
dsbuilder ds fetch
dsbuilder theme generate`}</DocsCodeBlock>
            <div className="callout">
                <b>Компоненты на iOS</b>
                <p>Для iOS пока генерируется только тема: команда генерации компонентов не поддерживается.</p>
            </div>

            <h2 id="update">Обновление</h2>
            <p>
                После публикации новой версии повторите <code>dsbuilder ds fetch</code> и генерацию. Проверить
                установленные генераторы можно командой <code>dsbuilder toolchain doctor</code>.
            </p>
        </BuilderGuide>
    );
}
