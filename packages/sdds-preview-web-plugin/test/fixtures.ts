/** Тема для payload `Button` в единицах протокола: цвета `#RRGGBBAA`, размеры в px. */
export const buttonTheme = () => ({
    'surface.solid.accent': { type: 'color', value: '#2A72F8FF' },
    'surface.solid.accent-hover': { type: 'color', value: '#3F81FDFF' },
    'surface.solid.accent-active': { type: 'color', value: '#2462D6FF' },
    'text.on-dark.primary': { type: 'color', value: '#FFFFFFFF' },
    'dark.text.default.primary': { type: 'color', value: '#FFFFFFF5' },
    'dark.background.default.primary': { type: 'color', value: '#000000FF' },
    'round.m': { type: 'shape', cornerRadii: [12, 12, 12, 12] },
    'fontFamily.body': {
        type: 'fontFamily',
        faces: [{ assetId: 'body-600', weight: 600, style: 'NORMAL' }],
        allowFallback: true,
    },
    'body.m.bold': {
        type: 'typography',
        fontFamilyTokenId: 'fontFamily.body',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0,
        weight: 600,
        fontStyle: 'NORMAL',
    },
});

/** Payload `WEB` общего формата для `Button` (`accent`, `m`): свойства по каноническим именам, токены, состояния. */
export const webButtonPayload = (requestId = 'web-button'): Record<string, unknown> => ({
    protocolVersion: 1,
    requestId,
    platform: 'WEB',
    assets: [{ id: 'body-600', type: 'WOFF2', url: 'https://cdn.test/fonts/Body-Semibold.woff2' }],
    theme: buttonTheme(),
    component: {
        id: 'Button',
        variations: { view: 'accent', size: 'm' },
        properties: {
            backgroundColor: {
                base: { type: 'tokenRef', tokenId: 'surface.solid.accent' },
                states: [
                    { when: ['pressed'], source: { type: 'tokenRef', tokenId: 'surface.solid.accent-active' } },
                    { when: ['hovered'], source: { type: 'tokenRef', tokenId: 'surface.solid.accent-hover' } },
                ],
            },
            labelColor: { base: { type: 'tokenRef', tokenId: 'text.on-dark.primary' } },
            height: { base: { type: 'literal', value: 48 } },
            paddingEnd: { base: { type: 'literal', value: 20 } },
            shape: { base: { type: 'tokenRef', tokenId: 'round.m' } },
            labelStyle: { base: { type: 'tokenRef', tokenId: 'body.m.bold' } },
            iconMargin: { base: { type: 'literal', value: 8 } },
            disableAlpha: { base: { type: 'literal', value: 0.4 } },
        },
    },
    example: { id: 'Default', props: { text: 'Купить' } },
    surface: { width: 360, height: 160, background: 'dark.background.default.primary' },
    styles: {},
});
