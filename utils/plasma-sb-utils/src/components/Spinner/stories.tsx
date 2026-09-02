import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Components = {
    Button: React.ComponentType<any>;
};

const StyledWrapper = styled.div<{ $loading: boolean }>`
    position: relative;
    padding: 0.5rem 1rem;

    &::after {
        position: absolute;
        inset: 0;
        z-index: 1;
        border-radius: 0.5rem;

        content: '';
        display: ${({ $loading }) => ($loading ? 'block' : 'none')};
        background: rgba(0, 0, 0, 0.1);
    }
`;

export const createDefaultStory = (Spinner: any) => (args: any) => <Spinner {...args} />;

export const createLiveStory = (Spinner: any, { Button }: Components) => {
    const StyledSpinner = styled(Spinner)`
        position: absolute;
        inset: 0;
        z-index: 2;
        margin: auto;
    `;

    const Live = ({ style, ...rest }: any) => {
        const [loading, setLoading] = useState(false);
        const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

        useEffect(() => {
            if (!loading) {
                return undefined;
            }

            timeoutRef.current = setTimeout(() => setLoading(false), 10000);

            return () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            };
        }, [loading]);

        return (
            <StyledWrapper $loading={loading}>
                <p id="spinner-live-description">
                    При нажатии кнопки приложение будет на 10 секунд переведено в состояние загрузки.
                </p>
                <Button
                    text={loading ? 'Загрузка' : 'Нажмите'}
                    onClick={() => setLoading(true)}
                    aria-busy={loading}
                    aria-describedby="spinner-live-description"
                    disabled={loading}
                />
                {loading && <StyledSpinner {...rest} style={style} />}
            </StyledWrapper>
        );
    };

    return Live;
};
