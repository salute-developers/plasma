# Cypress workflow metrics

Composite action для сбора истории Cypress и публикации архивов v3 в S3. Скрипты находятся в `scripts/` этого action; npm-команд сбора в `plasma-new-hope` больше нет. Общие модели и проверки формата остаются в `packages/plasma-new-hope/src/examples/WorkflowMetrics`, поскольку используются и Storybook, и сборщиком.

Workflow: [workflow-metrics-collect.yml](../../workflows/workflow-metrics-collect.yml). Он выполняется из default-ветки (`dev`), использует единую очередь `workflow-metrics-s3` и не отменяет текущую публикацию. Расписание — `0 2 */2 * *`: в 05:00 МСК по дням месяца 1, 3, 5 и далее.

## Структура скриптов

```text
scripts/
  cli/          Разбор аргументов, справка и запуск команд
  commands/     Сценарии сбора, подсчёта spec-файлов и синхронизации
  collection/   Интервалы сбора, контрольные точки и объединение измерений
  github/       Авторизация, API, пагинация jobs, квота, повторы и ошибки
  archive/      Построение чанков, чтение, атомарная запись и продолжение
  s3/           Транспорт s3cmd, восстановление, публикация и начальная загрузка
  specs/        Подсчёт файлов по git и дополнение измерений
  shared/       Общие модели/формат со Storybook и пути репозитория
  utils/        Файловые операции, кодирование JSON/SHA-256 и обработка ошибок CLI
```

`cli/collect.mjs`, `cli/spec-counts.mjs` и `cli/sync.mjs` — исполняемые точки входа action. Импорт этих файлов запускает команду; для программного использования импортируйте `commands/` или конкретный сервис.

Внешние потребители и тесты используют `archive/index.mjs`, `github/index.mjs`, `s3/index.mjs`, `specs/index.mjs` и `collection/collector.mjs`. Внутри сервисов используйте прямые импорты по назначению. Все зависимости от модулей Storybook и расположения репозитория сосредоточены в `shared/`; React и предварительная сборка пакетов не требуются. Пути по умолчанию вычисляются относительно файлов action и не зависят от текущего рабочего каталога.

Режимы `collect` / `publish-existing`, параметры workflow и коды CLI сохранены: 0 — завершённый сбор, 2 — пауза с сохранённым прогрессом, 1 — ошибка.

## Первая загрузка уже собранных данных

1. Включите action, workflow и полный каталог `packages/plasma-new-hope/.storybook/public/workflow-metrics/v3/` в `dev`. Runner получает файлы из checkout, поэтому локальные незакоммиченные данные ему недоступны. В каждой категории нужны `manifest.json` и все указанные в нём `series`, `jobs`, `state`, включая gzip-копии.
2. В репозитории должны быть доступны секреты деплоя документации: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ENDPOINT`, `AWS_REGION`, `AWS_S3_BUCKET_2`.
3. Откройте **Actions → Collect Cypress workflow metrics → Run workflow**, выберите ветку `dev` и **mode: `publish-existing`**. Остальные поля для этого режима не используются.
4. После успеха откройте Summary запуска: там перечислены категории, число прогонов/jobs и загруженных чанков. Данные окажутся в `s3://${AWS_S3_BUCKET_2}/workflow-metrics/v3/{daily,pull-requests,release}/`.

`publish-existing` не вызывает GitHub API, не дополняет spec-файлы и не требует `WORKFLOW_METRICS_TOKEN`. Перед публикацией проверяется целостность всех исходных архивов. Сначала загружаются gzip-чанки под ключами `.json`, затем манифесты; используются Signature V2 и те же настройки S3, что в деплое документации.

Режим предназначен для первой загрузки. Идентичный повтор ничего не перезаписывает. Если в S3 уже есть другой снимок хотя бы одной категории, публикация останавливается до записи объектов. Для продолжения удалённой истории используйте `collect`; автоматического слияния с отличающимся локальным архивом нет.

Обычный `s3cmd sync` всего каталога не заменяет этот режим: gzip должен публиковаться с `Content-Encoding: gzip` под ключом `.json`, а манифест должен появляться после всех указанных объектов. Старые объекты не удаляются.

## Последующий сбор

По расписанию или вручную выберите **mode: `collect`**. Action восстановит согласованный снимок из S3, соберёт новые завершённые jobs, посчитает spec-файлы b2c и new-hope по git и опубликует изменения. Если манифеста ещё нет, стартует с соответствующего архива из checkout.

Для `collect` нужен repository secret `WORKFLOW_METRICS_TOKEN`: fine-grained PAT с доступом к `salute-developers/plasma` и разрешением `Actions: Read-only`. Workflow передаёт его как `GITHUB_TOKEN`; при отсутствии непустого токена action останавливается до обращения к S3. Никакие секреты не записываются в JSON или Summary.

Параметры ручного запуска: `from`, `to`, категория `workflow`, `refresh_days` (7 по умолчанию), `max_requests` (4500). Пустые даты продолжают сохранённую историю до текущего UTC-дня. `refresh_days` позволяет обнаружить старые reruns; изменение `from` не отменяет уже сохранённый `coverage`. Локальный бюджет не увеличивает квоту GitHub; сборщик проверяет фактическую квоту перед запросами.

Код сборщика 2 означает сохранённый частичный прогресс при лимите API/бюджета: он публикуется, следующий запуск продолжает сбор. Другие ошибки сбора допускают публикацию проверенных контрольных точек, после чего action завершается с ошибкой. Ошибка восстановления, проверки архива или выгрузки приводит к ошибке action. Каждая категория имеет свой атомарно обновляемый манифест.

## Использование action

Action требует checkout этого репозитория, Ubuntu runner и полную историю git для подсчёта spec-файлов. Node из `.nvmrc` и `s3cmd==2.4.0` устанавливаются action; сборка пакетов и npm-зависимости не требуются.

```yaml
- uses: actions/checkout@v4
  with:
      fetch-depth: 0
      persist-credentials: false
- uses: ./.github/actions/workflow-metrics
  with:
      mode: collect
      max-requests: '4500'
  env:
      GITHUB_TOKEN: ${{ secrets.WORKFLOW_METRICS_TOKEN }}
      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      AWS_ENDPOINT: ${{ secrets.AWS_ENDPOINT }}
      AWS_REGION: ${{ secrets.AWS_REGION }}
      AWS_S3_BUCKET_2: ${{ secrets.AWS_S3_BUCKET_2 }}
```

`archive-directory` задаёт корень начального архива с `v3/`; по умолчанию используется каталог Storybook. Остальные inputs: `from`, `to`, `workflow`, `refresh-days`, `max-requests`. Output `collection-status` — код сборщика, пустой для `publish-existing`. Все писатели одного S3-префикса должны использовать общую очередь workflow.

## Загрузка локальных файлов без коммита

Если начальный архив нельзя включить в checkout, запустите из корня репозитория с Node из `.nvmrc`, установленным `s3cmd==2.4.0` и пятью переменными `AWS_*`, перечисленными выше:

```sh
metrics_job_directory=$(mktemp -d)
node .github/actions/workflow-metrics/scripts/cli/sync.mjs \
  --mode=publish-existing \
  --bootstrap-dir=packages/plasma-new-hope/.storybook/public/workflow-metrics \
  --output-dir="$metrics_job_directory/archive" \
  --baseline-dir="$metrics_job_directory/baseline"
```

Команда реально публикует данные в S3; GitHub PAT для неё не нужен. Удалённые значения GitHub Secrets нельзя прочитать обратно: локальный запуск получает AWS-значения из своего окружения. Не запускайте его одновременно с cron-публикацией.

Рабочий каталог и baseline при первой загрузке должны ещё не существовать. Утилита `cli/sync.mjs` также поддерживает `--mode=restore` и `--mode=publish` для отдельных стадий. По умолчанию используется S3-префикс `workflow-metrics`; при отдельном запуске его можно задать через `WORKFLOW_METRICS_S3_PREFIX`.

## Формат и проверки

Формат, кеширование, gzip и клиентская загрузка описаны в [ARCHIVE_V3.md](../../../packages/plasma-new-hope/src/examples/WorkflowMetrics/docs/ARCHIVE_V3.md).

```sh
npm run test:workflow-metrics --workspace=@salutejs/plasma-new-hope
node_modules/.bin/eslint .github/actions/workflow-metrics/scripts --ext .mjs --no-ignore --quiet
```

Архивы содержат размер и SHA-256 каждого чанка: их нельзя форматировать вручную или через Prettier. Они исключены из Prettier и сохраняются с LF. Проверки включают целостность снимков из репозитория и соответствие JSON/gzip.
