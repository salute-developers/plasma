
function defaultToStr(scheme, indention = 4) {
    return (val, level = 0) => {
        if (typeof scheme === 'function') {
            return scheme(val, level);
        } else if (Array.isArray(val)) {
            return arrToStr(scheme, indention)(val, level);
        } else if (val === null || val === undefined) {
            return 'null';
        } else if (typeof val === 'object') {
            const next = objToStr(scheme, indention);
            const nextVal = next(val, level);
            return nextVal;
        } else if (typeof val === 'string') {
            return `'${val}'`;
        } else {
            return val;
        }
    }
}

function objToStr(scheme = {}, indention = 4) {
    return (obj, level = 0) => {
        const _ = ' '.repeat(indention * level);
        const __ = ' '.repeat(indention * (level + 1));

        const res = ['{'];

        for (const [key, val] of Object.entries(obj)) {
            res.push(`${__}${key}: ${defaultToStr(scheme[key] || scheme['_'], indention)(val, level + 1)},`);
        }

        res.push(_ + '}');

        return res.length > 2 ? res.join('\n') : '{}';
    }
}

function arrToStr(scheme = {}, indention = 4) {
    // [transform()] => transform only first object
    // [tr1(), tr2(), tr3()] => transforms each of them differently
    // { _: tr() } =>  transform all
    // TODO: think of scheme types for array
    // [...T.arr(tr())] 
    // [tr1(), ...T.arr(tr(), tr2()]
    return (arr, level = 0) => {
        const _ = ' '.repeat(indention * level);
        const __ = ' '.repeat(indention * (level + 1));

        const res = ['['];

        for (let i = 0; i < arr.length; i++) {
            const val = arr[i];
            res.push(`${__}${defaultToStr(scheme[i] || scheme['_'], indention)(val, level + 1)},`);
        }

        res.push(_ + ']');

        return res.length > 2 ? res.join('\n') : '[]';
    }
}

function tKey(transform = key => key) {
    return (scheme, indention = 4) => (obj, level) => {

        const res = {};

        for (const key of Object.keys(obj)) {
            res[transform(key)] = obj[key];
        }

        return t(scheme, indention)(res, level);
    };
}

const t = defaultToStr;

t.key = tKey;

module.exports = {
    t,
};
