module.exports = function yandexMetrikaPlugin(context, options) {
    const { counterID } = options;

    if (!counterID) {
        throw new Error('[yandex-metrika] в опциях плагина нужен counterID');
    }

    // счётчик только в проде; NO_ANALYTICS=true — аварийный выключатель
    const enabled = process.env.NODE_ENV === 'production' && process.env.NO_ANALYTICS !== 'true';

    return {
        name: 'yandex-metrika',

        // прокидываем counterID в клиентский модуль
        contentLoaded({ actions }) {
            actions.setGlobalData({ counterID });
        },

        getClientModules() {
            return enabled ? [require.resolve('./client')] : [];
        },

        injectHtmlTags() {
            if (!enabled) {
                return {};
            }

            return {
                headTags: [
                    {
                        tagName: 'link',
                        attributes: { rel: 'preconnect', href: 'https://mc.yandex.ru' },
                    },
                    {
                        tagName: 'script',
                        innerHTML: `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${counterID}','ym');

ym(${counterID}, 'init', {
  ssr: true,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  trackHash: false,
  referrer: document.referrer,
  url: location.href
});`.trim(),
                    },
                ],
                // <img> внутри <head> невалиден — noscript уезжает в конец body
                postBodyTags: [
                    {
                        tagName: 'noscript',
                        innerHTML: `<div><img src="https://mc.yandex.ru/watch/${counterID}" style="position:absolute;left:-9999px;" alt="" /></div>`,
                    },
                ],
            };
        },
    };
};
