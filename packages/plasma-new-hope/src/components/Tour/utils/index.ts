type parseRadiusType = {
    horizontal: number[];
    vertical: number[];
};

type contextType = {
    width: number;
    height: number;
};

export const getHTMLElement = (target: string | React.RefObject<HTMLElement> | HTMLElement): HTMLElement | null => {
    if (!target) {
        return null;
    }
    if (typeof target === 'string') {
        return document.querySelector<HTMLElement>(target);
    }
    if ('current' in target) {
        return target.current;
    }
    return target;
};

export const getIncreasedRadius = (ref: React.RefObject<HTMLElement>, offset: number): string => {
    if (!ref.current) {
        return '';
    }

    const element = ref.current;
    const computedStyle = getComputedStyle(element);
    const borderRadiusComponent = computedStyle.getPropertyValue('--plasma-tour__border-radius');
    const currentRadius =
        computedStyle.borderRadius !== undefined &&
        computedStyle.borderRadius !== null &&
        computedStyle.borderRadius !== '0px'
            ? computedStyle.borderRadius
            : borderRadiusComponent;

    const parseValue = (value: string, context: contextType) => {
        const num = parseFloat(value);
        if (Number.isNaN(num)) return 0;

        if (value.endsWith('px')) return num;
        if (value.endsWith('%')) return (num / 100) * context.width;
        if (value.endsWith('em')) return num * parseFloat(computedStyle.fontSize);
        if (value.endsWith('rem')) {
            return num * parseFloat(getComputedStyle(document.documentElement).fontSize);
        }
        if (value.endsWith('vw')) return (num / 100) * window.innerWidth;
        if (value.endsWith('vh')) return (num / 100) * window.innerHeight;
        if (value.endsWith('vmin')) return (num / 100) * Math.min(window.innerWidth, window.innerHeight);
        if (value.endsWith('vmax')) return (num / 100) * Math.max(window.innerWidth, window.innerHeight);

        return num;
    };

    const context = {
        width: element.offsetWidth,
        height: element.offsetHeight,
    };

    const parseRadius = (radius: string): parseRadiusType => {
        const parts = radius.split('/').map((part) => part.trim());
        const horizontal = parts[0].split(/\s+/).map((val) => parseValue(val, context));

        const normalize = (values: number[]) => {
            if (values.length === 1) return [values[0], values[0], values[0], values[0]];
            if (values.length === 2) return [values[0], values[1], values[0], values[1]];
            if (values.length === 3) return [values[0], values[1], values[2], values[1]];
            return values.slice(0, 4);
        };

        return {
            horizontal: normalize(horizontal),
            vertical: parts[1]
                ? normalize(parts[1].split(/\s+/).map((val) => parseValue(val, context)))
                : normalize(horizontal),
        };
    };

    try {
        const parsed = parseRadius(currentRadius);

        const newHorizontal = parsed.horizontal.map((val) => (val !== 0 ? Math.max(0, val + offset) : 0));
        const newVertical = parsed.vertical.map((val) => (val !== 0 ? Math.max(0, val + offset) : 0));

        const format = (values: string[] | number[]) => values.map((v: string | number) => `${v}px`).join(' ');

        const horizontalStr = format(newHorizontal);
        const verticalStr = format(newVertical);

        return horizontalStr === verticalStr ? horizontalStr : `${horizontalStr} / ${verticalStr}`;
    } catch (error) {
        return '';
    }
};

export const findRootElement = (ref: React.RefObject<HTMLElement>): React.RefObject<HTMLElement> | '' => {
    if (!ref.current) {
        return '';
    }

    let currentElement = ref.current;

    if (!currentElement?.hasAttribute('data-tour')) {
        return { current: currentElement };
    }

    while (currentElement !== null && currentElement !== document.documentElement) {
        if (currentElement.hasAttribute('data-root')) {
            return { current: currentElement };
        }

        const parent = currentElement.parentElement;

        if (parent === null) {
            break;
        }

        currentElement = parent;
    }

    if (currentElement?.hasAttribute('data-root')) {
        return { current: currentElement };
    }

    return ref;
};
