# @salutejs/docusaurus-plugin-yandex-metrika

Плагин Docusaurus со счётчиком Яндекс Метрики для сайтов документации Plasma/SDDS.

```js
// docusaurus.config.js
plugins: [['@salutejs/docusaurus-plugin-yandex-metrika', { counterID: 12345678 }]],
```

-   Счётчик подключается только в production-сборке без `PREFIX`, то есть в проде. Превью PR и стенды
    (`dev`, `next-insol`) собираются с `PREFIX` и счётчика не содержат.
-   `NO_ANALYTICS=true` при сборке отключает счётчик принудительно.
-   Первый просмотр отправляет сам счётчик при `init`, переходы внутри SPA — `client.js` через `hit`.
