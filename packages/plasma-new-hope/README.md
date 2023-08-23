## HOW TO PLASMA

В корне проекта plasma:

```sh
 npx lerna bootstrap --include-dependents --scope="@salutejs/plasma-new-hope"
```

### New Hope

Пересборка:
```
cd packages/plasma-new-hope
npm run build:css:watch
```

### Пример Дизайн-Системы:

```sh
 cd examples/example-design-system
 npm run storybook
```

### Token Mappings:

```
cd website/plasma-tokens-mapping
PORT=7777 PLASMA_DIR=../../  npm run dev
```

**NB**

Khown problems with build:


```
- error ../../packages/plasma-new-hope/es/components/Button/Button.js
TypeError: Cannot create property 'message' on symbol 'Symbol(skip)'
    at run.next (<anonymous>)
    at Generator.next (<anonymous>)
```

fix:
```
rm -rf .next/cache
```

### DS Generator:

```
cd tools/plasma-ds-generator

npm ci 

PATH_TO_THEMES=../../website/plasma-tokens-mapping/themes PATH_TO_DESTINATION_CONFIG=../../packages/plasma-new-hope/src/examples  ./bin/scipt.js
```

## TODO

[x] tokens-mapping: defaults saving
[x] tokens-mapping: boolean modifier
[] tokens-mapping: state vc modifier ???
[] tokens-mapping: intersection
[] tokens-mapping: default values for tokens
[] new-hope: engine: filer props
[x] ds-generator: Генерация componentConfig из theme.json
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
