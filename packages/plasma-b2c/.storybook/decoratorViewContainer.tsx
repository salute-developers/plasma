import React from 'react';

import { ViewContainer } from '../src/components/ViewContainer/ViewContainer';

export const withViewContainer = (Story, context) => {
    return (
        <>
            <div style={{ border: '1px solid coral' }}>
                <h3>Default view</h3>
                <ViewContainer>
                    <Story {...context} />
                </ViewContainer>
            </div>
            <div style={{ border: '1px solid coral', background: 'black', color: 'white' }}>
                <h3>OnDark view</h3>
                <ViewContainer view="onDark">
                    <Story {...context} />
                </ViewContainer>
            </div>
            <div style={{ border: '1px solid coral', background: 'white', color: 'black' }}>
                <h3>OnLight view</h3>
                <ViewContainer view="onLight">
                    <Story {...context} />
                </ViewContainer>
            </div>
        </>
    );
};
