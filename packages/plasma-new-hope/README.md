## HOW TO PLASMA

В корне проекта plasma:

```sh
 npx lerna bootstrap --include-dependents --scope="@salutejs/plasma-new-hope"
```

Пример Дизайн-Системы:

```sh
 cd examples/example-design-system
 npm run storybook
```

Token Mappings:

```
cd website/plasma-tokens-mapping
PORT=7777 PLASMA_DIR=../../  npm run dev
```

DS Generator:

**WIP**

```
cd tools/plasma-ds-generator
vim src
```

## TODO

[] ds-generator: Генерация componentConfig из theme.json
[] new-hope: Типизация componentConfig
[] new-hope: Типизация Button
[] new-hope: Включить eslint
[] new-hope: Переписать сборку new-hope на rollup
[] example-ds: Сборка example-design-system на конфигах new-hope
[] new-hope: Icon
[] new-hope: Typography
[] new-hope: Spin
[] new-hope: TextField
[] new-hope: TextArea
[] example: Переключение engines
[] tokens-mapping: Включить eslint
[] tokens-mapping: Dark / Light Theme
[] example-ds: Dark / Light Theme
[] plasma-hope: Замена plasma-b2c/web:Button => plasma-new-hope:Button
[] new-hope: Link
[x] tokens-mapping: Переключение тем
[] tokens-mapping: AutoComplete токенов из theme-builder
[] new-hope: Сборка в emotion
[] ds-generator: Включить eslint
[] ds-generator: Генерация компонент??
[] ds-generator: Геренрация stories
