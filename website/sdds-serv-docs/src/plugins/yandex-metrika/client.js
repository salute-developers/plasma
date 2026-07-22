import globalData from '@generated/globalData';

const { counterID } = globalData['yandex-metrika'].default;

export function onRouteDidUpdate({ location, previousLocation }) {
    // первый просмотр уже отправил сам счётчик при init
    if (!previousLocation) {
        return;
    }

    const samePage = location.pathname === previousLocation.pathname && location.search === previousLocation.search;

    // клик по якорю в TOC — не новая страница
    if (samePage) {
        return;
    }

    const { origin } = window.location;
    const url = origin + location.pathname + location.search;
    const referer = origin + previousLocation.pathname + previousLocation.search;

    // react-helmet-async обновляет document.title на следующем тике
    setTimeout(() => {
        window.ym?.(counterID, 'hit', url, { title: document.title, referer });
    });
}
