# Upload Assets Extends Plugin

Это расширение плагина `@auto-it/upload-assets`, в котором добавляются расширенные возможности вывода списка ассетов, которые были загружены в Pull Request'e.

## Использование

Необходимо добавить путь до файла, которые создастся в результате выполнения команды `npm run release`.

```json
{
    "plugins": [
        [
            "./auto-plugins/dist/upload-assets-extend.js",
            {
                "assets": ["./utils/plasma-tokens-native/build/**/*"],
                "message": "🐤 Download canary assets:",
                "group": "(color|shadow|typo).*\\.(kt|xml|swift|ts)",
                "compact": true
            }
        ]
    ]
}
```

## Дополнительные опции

### `headerMessage`

Кастомное сообщение для заголовка в сообщении Pull Request'a.

```json
{
    "plugins": [
        [
            "upload-assets",
            {
                "assets": ["./path/to/file"],
                "headerMessage": "🚀 Download links canary assets with custom message:"
            }
        ]
    ]
}
```

### `filter`

Фильтр для списка ассетов. Выполняет проверку с помощью метода `test` объекта RegEx.

```json
{
    "plugins": [
        [
            "upload-assets",
            {
                "assets": [
                    "./test-assets/color_test.xml",
                    "./test-assets/typo_test.xml",
                    "./test-assets/shadow_test",
                    "./test-assets/macos"
                ],
                "filter": "(color).*\\.xml"
            }
        ]
    ]
}
```

Получаем результат:

🐤 Download canary assets:

[color_test-canary.123.xml](http://color_test-canary.123.xml)

### `includeBotPrs`

Добавлять ли сообщение в Pull Requests. По умолчанию `true`.

```json
{
    "plugins": [
        [
            "upload-assets",
            {
                "assets": ["./path/to/file"],
                "includeBotPrs": false
            }
        ]
    ]
}
```

### `group`

Группировать список асссетов. Выполняет метод `exec` объекта RegEx и берет второй результат.

```json
{
    "plugins": [
        [
            "upload-assets",
            {
                "assets": [
                    "./test-assets/color_test.xml",
                    "./test-assets/shadow_test.xml",
                    "./test-assets/typo_test.xml"
                ],
                "group": "(color|shadow|typo).*\\.xml"
            }
        ]
    ]
}
```

Получаем результат:

🐤 Download canary assets:

### color

[color_test-canary.123.xml](http://color_test-canary.123.xml)

### shadow

[shadow_test-canary.123.xml](http://shadow_test-canary.123.xml)

### typo

[typo_test-3-canary.123.xml](http://typo_test-3-canary.123.xml)

### `compact`

Компактный вид сообщений Pull Request'ов . По умолчанию `false`.

```json
{
    "plugins": [
        [
            "upload-assets",
            {
                "assets": [
                    "./test-assets/color_test.xml",
                    "./test-assets/shadow_test.xml",
                    "./test-assets/typo_test.xml"
                ],
                "compact": "true"
            }
        ]
    ]
}
```

Получаем результат:

```HTML
<details>
  <summary>:baby_chick: Download canary assets:</summary>
  <blockquote>
    <a href='http://color_test-canary.123.xml'>color_test-canary.123.xml</a><br>
    <a href='http://shadow_test-canary.123.xml'>shadow_test-canary.123.xml</a><br>
    <a href='http://typo_test-canary.123.xml'>typo_test-canary.123.xml</a><br>
  </blockquote>
</details>
```
