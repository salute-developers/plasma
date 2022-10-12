import React from 'react';
import styled from 'styled-components';
import { ButtonProps, Col, Row } from '@salutejs/plasma-ui';

import { FullScreenBackground, FullScreenBackgroundProps } from '../FullScreenBackground/FullScreenBackground';
import { useFocusOnMount } from '../../hooks/useFocusOnMount';
import { UnifiedComponentProps } from '../../registry/types';
import { isSberBoxLike } from '../../utils/deviceFamily';

export interface HeroSlideProps extends Pick<FullScreenBackgroundProps, 'imageFit' | 'imageWidth' | 'imagePosition'> {
    autofocus: boolean;
    suggestText?: string | false;
    withMask?: boolean;
    src: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    title: string;
    buttonText: string;
    onFocus: React.FocusEventHandler<HTMLButtonElement>;
    onBlur: React.FocusEventHandler<HTMLButtonElement>;
}

const StyledRow = styled(Row)`
    position: relative;
    z-index: 1;
`;

type PlatformComponents = {
    Title: void;
    Suggest: void;
    Wrapper: void;
    Button: ButtonProps & React.RefAttributes<HTMLButtonElement>;
};

export const HeroSlide: React.FC<UnifiedComponentProps<HeroSlideProps, PlatformComponents>> = ({
    autofocus,
    withMask = true,
    title,
    suggestText = 'Попробуйте спросить',
    buttonText,
    src,
    imageFit,
    imageWidth,
    imagePosition = 'right',
    onClick,
    onFocus,
    onBlur,
    platformComponents,
    children,
    ...props
}) => {
    const { Title, Suggest, Button, Wrapper } = platformComponents;
    const mountRef = React.useRef<HTMLButtonElement>(null);
    useFocusOnMount(mountRef, { delay: 100, prevent: !autofocus });

    return (
        <Wrapper {...props}>
            <StyledRow>
                <Col sizeXL={6} sizeM={4}>
                    {suggestText && <Suggest>{suggestText}</Suggest>}
                    <Title>{title}</Title>
                    <Button onClick={onClick} onFocus={onFocus} onBlur={onBlur} ref={isSberBoxLike() ? mountRef : null}>
                        {buttonText}
                    </Button>
                </Col>
            </StyledRow>
            {children}
            <FullScreenBackground
                src={src}
                mask={withMask}
                imageFit={imageFit}
                imageWidth={imageWidth}
                imagePosition={imagePosition}
            />
        </Wrapper>
    );
};
