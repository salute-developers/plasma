import React, { useState } from 'react';
import styled from 'styled-components';
import { action } from 'storybook/actions';

import { sources } from './fixtures';

type Components = {
    Button: React.ComponentType<any>;
    Body: React.ComponentType<any>;
    H3: React.ComponentType<any>;
};

const onCloseAction = action('onClose');

const HeaderContent = styled.div`
    padding: 1.875rem 1.5rem 0.875rem;
`;

const BodyContent = styled.div`
    padding: 0 1.5rem;
`;

const FooterContent = styled.div`
    padding: 1rem 1.5rem 2.5rem;
`;

const StyledImage = styled.div`
    height: 10rem;
    background: linear-gradient(135deg, #d3f8e2 0%, #a0e7e5 50%, #b4a7f5 100%);
`;

const Source = styled.div`
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid var(--outline-transparent-primary);
    border-radius: 0.75rem;
`;

const createOnClose = (setOpened: (opened: boolean) => void) => () => {
    setOpened(false);
    onCloseAction();
};

export const createDefaultStory = (BottomSheet: React.ComponentType<any>, { Button, Body, H3 }: Components) => {
    return ({ showContentBeforeHeader, showContentHeader, showContentFooter, ...rest }: any) => {
        const [opened, setOpened] = useState(false);
        const onClose = createOnClose(setOpened);

        return (
            <>
                <Button onClick={() => setOpened(true)}>Открыть</Button>
                <BottomSheet
                    {...rest}
                    opened={opened}
                    onClose={onClose}
                    contentBeforeHeader={showContentBeforeHeader ? <StyledImage /> : undefined}
                    contentHeader={
                        showContentHeader ? (
                            <HeaderContent>
                                <H3>Источники</H3>
                            </HeaderContent>
                        ) : undefined
                    }
                    contentFooter={
                        showContentFooter ? (
                            <FooterContent>
                                <Button stretching="filled" view="default">
                                    Сохранить
                                </Button>
                            </FooterContent>
                        ) : undefined
                    }
                >
                    <BodyContent>
                        {sources.map((source) => (
                            <Source key={source.title}>
                                <Body>{source.title}</Body>
                                <Body size="s" style={{ opacity: 0.5 }}>
                                    {source.domain}
                                </Body>
                            </Source>
                        ))}
                    </BodyContent>
                </BottomSheet>
            </>
        );
    };
};
