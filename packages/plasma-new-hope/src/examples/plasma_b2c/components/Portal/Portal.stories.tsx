import React, { useState, useRef } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';
import { styled } from '@linaria/react';

import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';
import { Body } from '../../../typograpy/components/Body/Body';
import { Portal } from '../../../../components/Portal';

const meta: Meta<typeof Portal> = {
    title: 'plasma_b2c/Portal',
    decorators: [WithTheme],
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
                <Body style={{ marginBottom: '1.25rem' }}>Содержимое портала появится в нижнем блоке.</Body>
                <Body style={{ marginBottom: '1.25rem' }}>
                    Если портал выключен (disabled), то содержимое появится в данном блоке.
                </Body>
                {show && containerRef.current && (
                    <Portal disabled={disabled} container={containerRef.current}>
                        <Body bold>Содержимое портала</Body>
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
