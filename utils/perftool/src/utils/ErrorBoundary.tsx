import React, { ReactNode, ErrorInfo, Component, ComponentType } from 'react';

import BaseError from './baseError';

type ErrorBoundaryProps = {
    onError: (error: BaseError) => void;
    children: ReactNode;
};

// TODO use
class ErrorBoundary extends Component<ErrorBoundaryProps> {
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.props.onError(new BaseError(`${error && error.toString()} ${errorInfo.componentStack}`));
    }

    render() {
        return this.props.children;
    }
}

export function withErrorBoundary<P extends object>(
    Subject: ComponentType<P>,
    onError: (error: BaseError) => void,
): ComponentType<P> {
    const WrappedComponent: ComponentType<P> = function (props) {
        return (
            <ErrorBoundary onError={onError}>
                <Subject {...props} />
            </ErrorBoundary>
        );
    };

    WrappedComponent.displayName = `withErrorBoundary(${Subject.displayName})`;

    return WrappedComponent;
}

export default ErrorBoundary;
