import { CSSProperties } from 'react';

const INHERITED_PROPERTIES = [
    'font',
    'letterSpacing',
    'textTransform',
    'fontKerning',
    'fontOpticalSizing',
    'fontSizeAdjust',
    'fontStretch',
    'fontVariant',
    'fontWeight',
    'fontVariationSettings',
    'fontSynthesis',
    'textIndent',
] as Extract<keyof CSSStyleDeclaration, string>[];

const measureStyles = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '0px',
    height: '0px',
    visibility: 'hidden',
    overflow: 'scroll',
    whiteSpace: 'pre',
} as CSSProperties;

export function getInputWidth(element: HTMLInputElement, container: HTMLDivElement | null) {
    if (!element || !container) {
        return 0;
    }

    const measure = document.createElement('span');
    measure.innerText = element.value || element.placeholder || ' ';
    Object.assign(measure.style, measureStyles);

    const styles = window.getComputedStyle(element);

    INHERITED_PROPERTIES.forEach((property) => {
        measure.style.setProperty(property, String(styles[property]));
    });

    container.appendChild(measure);
    const width = measure.scrollWidth;
    container.removeChild(measure);
    return width;
}
