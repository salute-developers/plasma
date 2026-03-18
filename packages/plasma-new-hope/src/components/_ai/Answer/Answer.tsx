import React, { forwardRef } from 'react';
import type { RootProps } from 'src/engines';

import type { AnswerProps, AnswerRootProps } from './Answer.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import {
    base,
    Title,
    ContentWrapper,
    FooterWrapper,
    LoadingWrapper,
    LoadingTitle,
    SpinnerUI,
    ErrorContainer,
    ErrorTitle,
    ErrorTextContent,
} from './Answer.styles';

export const answerRoot = (Root: RootProps<HTMLDivElement, AnswerRootProps>) =>
    forwardRef<HTMLDivElement, AnswerProps>(
        (
            {
                title,
                content,
                footer,
                isLoading = false,
                loaderTitle,
                customLoader,
                isError = false,
                errorTitle,
                errorDescription,
                customError,
                size,
                view,
                ...rest
            },
            ref,
        ) => {
            const renderLoading = () => {
                if (customLoader) {
                    return customLoader;
                }

                return (
                    <LoadingWrapper>
                        <SpinnerUI />
                        {loaderTitle && <LoadingTitle>{loaderTitle}</LoadingTitle>}
                    </LoadingWrapper>
                );
            };

            const renderError = () => {
                if (customError) {
                    return customError;
                }

                return (
                    <ErrorContainer>
                        {errorTitle && <ErrorTitle>{errorTitle}</ErrorTitle>}
                        {errorDescription && <ErrorTextContent>{errorDescription}</ErrorTextContent>}
                    </ErrorContainer>
                );
            };

            const renderContent = () => {
                if (isLoading) {
                    return renderLoading();
                }

                if (isError) {
                    return renderError();
                }

                return (
                    <>
                        {title && <Title>{title}</Title>}
                        {content && <ContentWrapper>{content}</ContentWrapper>}
                        {footer && <FooterWrapper>{footer}</FooterWrapper>}
                    </>
                );
            };

            return (
                <Root ref={ref} view={view} size={size} {...rest}>
                    {renderContent()}
                </Root>
            );
        },
    );

export const answerConfig = {
    name: 'Answer',
    tag: 'div',
    layout: answerRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
