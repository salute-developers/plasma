const sizesOrder = ['xxs', 'xxsr', 'xs', 'xsr', 's', 'sr', 'm', 'mr', 'l', 'lr', 'xl', 'xlr', 'xxl', 'xxlr'];

const nonExistSizeOrder = sizesOrder.length;

const sortSizes = (sizes: string[]) => {
    return sizes.sort((a, b) => {
        const aIndex = sizesOrder.indexOf(a);
        const bIndex = sizesOrder.indexOf(b);

        return (aIndex === -1 ? nonExistSizeOrder : aIndex) - (bIndex === -1 ? nonExistSizeOrder : bIndex);
    });
};

const viewsOrder = [
    'default',
    'accent',
    'primary',
    'secondary',
    'clear',
    'success',
    'warning',
    'critical',
    'positive',
    'negative',
    'dark',
    'black',
    'white',
];

const nonExistViewOrder = viewsOrder.length;

const sortViews = (views: string[]) => {
    return views.sort((a, b) => {
        const aIndex = viewsOrder.indexOf(a);
        const bIndex = viewsOrder.indexOf(b);

        return (aIndex === -1 ? nonExistViewOrder : aIndex) - (bIndex === -1 ? nonExistViewOrder : bIndex);
    });
};

const sortLexicographically = (keys: string[]) => keys.sort((a, b) => a.localeCompare(b));

const filterCss = (keys: string[]) => keys.filter((keys) => keys !== 'css');

// filter xsr, xssr...
const filterRSizes = (sizes: string[]) => sizes.filter((size) => !size.endsWith('r'));

export const getConfigVariations = (
    config: { variations?: { view?: object; size?: object } },
    props?: { skipRSizes: boolean },
) => {
    const { skipRSizes = true } = props || {};

    const viewsKeys = Object.keys(config.variations?.view || {});
    const sizesKeys = Object.keys(config.variations?.size || {});
    const views = filterCss(viewsKeys);
    const sizes = skipRSizes ? filterRSizes(filterCss(sizesKeys)) : filterCss(sizesKeys);

    return {
        views: sortViews(sortLexicographically(views)),
        sizes: sortSizes(sizes),
    };
};
