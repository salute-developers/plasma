import React from 'react';

import { ViewContainer } from '../src/examples/plasma_b2c/components/ViewContainer/ViewContainer';

import { ThemeType, themes } from '../src/examples/themes';

export const withViewContainer = (Story, context) => {
    const themeType = context.globals.theme as keyof ThemeType;
    const themeName = context.title.split('/')[0];

    return (
        <div id="theme-root" className={themes?.[themeName]?.[themeType]}>
            <div id="theme-root-popup-1" style={{ border: '1px solid coral' }}>
                <h3>Default view</h3>
                <ViewContainer>
                    <Story {...context} />
                </ViewContainer>
            </div>
            <div id="theme-root-popup-2" style={{ border: '1px solid coral', background: 'black', color: 'white' }}>
                <h3>OnDark view</h3>
                <ViewContainer view="onDark">
                    <Story {...context} />
                </ViewContainer>
            </div>
            <div id="theme-root-popup-3" style={{ border: '1px solid coral', background: 'white', color: 'black' }}>
                <h3>OnLight view</h3>
                <ViewContainer view="onLight">
                    <Story {...context} />
                </ViewContainer>
            </div>
        </div>
    );
};
