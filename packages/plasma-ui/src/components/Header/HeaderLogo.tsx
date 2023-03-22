import styled from 'styled-components';

import { Image, ImageProps } from '../Image';

// INFO: Omit 'onResize' | 'onResizeCapture' | 'nonce'
// because this types coming with @types/react@18.0.25 and breaks react@17.0.2 with @types/react@18.0.18
export type HeaderLogoProps = Omit<
    ImageProps,
    'height' | 'ratio' | 'customRatio' | 'onResize' | 'onResizeCapture' | 'nonce'
>;

/**
 * Компонент для размещения логотипа.
 */
export const HeaderLogo = styled(Image)<HeaderLogoProps>`
    --plasma-header-size: var(--plasma-header-height);

    width: var(--plasma-header-size);
    height: var(--plasma-header-size);
    flex: 0 0 var(--plasma-header-size);
    margin-right: 0.75rem;
`;
