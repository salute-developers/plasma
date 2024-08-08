import React, { useState, useRef } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { ComponentProps } from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';
import { BodyM } from '../Typography';

import { Portal } from '.';

const meta: Meta<typeof Portal> = {
    title: 'Controls/Portal',
    decorators: [InSpacingDecorator],
    args: {
        disabled: false,
    },
};

export default meta;

type StoryPortalProps = ComponentProps<typeof Portal>;

const StyledWrapper = styled.div`
    padding: 1.25rem;
    margin-bottom: 0.625rem;
    margin-top: 0.625rem;

    border: 1px solid;
`;

const StoryDefault = ({ disabled }: StoryPortalProps) => {
    const [show, setShow] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Button onClick={() => setShow(!show)}>{show ? 'Скрыть' : 'Показать'}</Button>
            <StyledWrapper>
                <BodyM style={{ marginBottom: '1.25rem' }}>Содержимое портала появится в нижнем блоке.</BodyM>
                <BodyM style={{ marginBottom: '1.25rem' }}>
                    Если портал выключен (disabled), то содержимое появится в данном блоке.
                </BodyM>
                {show && containerRef.current && (
                    <Portal disabled={disabled} container={containerRef.current}>
                        <BodyM bold>Содержимое портала</BodyM>
                    </Portal>
                )}
            </StyledWrapper>
            <StyledWrapper ref={containerRef} />
        </>
    );
};

export const Default: StoryObj<StoryPortalProps> = {
    render: (args) => <StoryDefault {...args} />,
};
