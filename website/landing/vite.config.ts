import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { metrikaCounterId } from './src/metrika';

// Яндекс Метрика только в прод-сборке.
// NO_ANALYTICS=true — аварийный выключатель.
function yandexMetrika(counterId: number): Plugin {
    return {
        name: 'yandex-metrika',
        apply: (_config, { command }) =>
            command === 'build' && !process.env.LANDING_BASE_PATH && process.env.NO_ANALYTICS !== 'true',
        transformIndexHtml: {
            order: 'post',
            handler: () => [
                {
                    tag: 'link',
                    attrs: { rel: 'preconnect', href: 'https://mc.yandex.ru' },
                    injectTo: 'head',
                },
                {
                    tag: 'script',
                    children: `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${counterId}','ym');

ym(${counterId}, 'init', {
  ssr: true,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  trackHash: false,
  referrer: document.referrer,
  url: location.href
});`.trim(),
                    injectTo: 'head',
                },
                {
                    // <img> внутри <head> невалиден — noscript уезжает в конец body
                    tag: 'noscript',
                    children: `<div><img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute;left:-9999px;" alt="" /></div>`,
                    injectTo: 'body',
                },
            ],
        },
    };
}

export default defineConfig({
    base: process.env.LANDING_BASE_PATH || '/',
    plugins: [react(), yandexMetrika(metrikaCounterId)],
    build: { outDir: 'dist' },
});
