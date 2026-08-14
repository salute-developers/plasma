import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import styled from 'styled-components';
import { action } from 'storybook/actions';

import { Button } from '../Button/Button';
import { WithTheme } from '../../_helpers';
import { Body } from '../typography/components/Body/Body';

import { Sheet } from './Sheet';

type StorySheetProps = ComponentProps<typeof Sheet> & {
    storyHasHeader: boolean;
    storyHasFooter: boolean;
    fullScreen?: boolean;
};

const meta: Meta<StorySheetProps> = {
    title: 'Overlay/Sheet',
    decorators: [WithTheme],
    argTypes: {
        handlePlacement: {
            options: ['inner', 'outer'],
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        withBlur: false,
        withOverlay: true,
        withTransition: true,
        hasHandle: true,
        isHeaderFixed: false,
        isFooterFixed: false,
        handlePlacement: 'outer',
        fullScreen: false,
    },
};

export default meta;

const StyledBody = styled(Body)`
    padding-bottom: 300px;
`;

const StyledBodyFullScreen = styled(Body)`
    height: calc(100vh - 10rem);
`;

const onCloseAction = action('onClose');

const createOnClose = (setOpened: (opened: boolean) => void) => () => {
    setOpened(false);
    onCloseAction();
};

const StoryDefault = ({
    withOverlay,
    withTransition,
    storyHasFooter,
    isFooterFixed,
    storyHasHeader,
    isHeaderFixed,
    hasHandle,
    withBlur,
    handlePlacement,
    fullScreen = false,
}: StorySheetProps) => {
    const [opened, setOpened] = useState(false);
    const handleClose = createOnClose(setOpened);

    return (
        <>
            <Button onClick={() => setOpened(true)}>Открыть</Button>
            <Sheet
                opened={opened}
                handlePlacement={handlePlacement}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={handleClose}
                hasHandle={hasHandle}
                withBlur={withBlur}
                contentHeader={
                    storyHasHeader ? (
                        <div>
                            <h4>header</h4>
                        </div>
                    ) : undefined
                }
                isHeaderFixed={isHeaderFixed}
                contentFooter={
                    storyHasFooter ? (
                        <div>
                            <p>footer</p>
                        </div>
                    ) : undefined
                }
                isFooterFixed={isFooterFixed}
            >
                {fullScreen ? <StyledBodyFullScreen>body</StyledBodyFullScreen> : <StyledBody>body</StyledBody>}
            </Sheet>
        </>
    );
};

export const Default: StoryObj<StorySheetProps> = {
    args: {
        storyHasHeader: true,
        storyHasFooter: true,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryWithoutOverlay = () => {
    const [opened, setOpened] = useState(false);
    const handleClose = createOnClose(setOpened);

    return (
        <>
            <Button onClick={() => setOpened(true)}>Открыть</Button>
            <Sheet opened={opened} withOverlay={false} onClose={handleClose}>
                <StyledBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                    consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel illum ea
                    fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nostrum
                    placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt ullam,
                    dolorem labore quaerat vero maxime ab ipsa nihil.
                </StyledBody>
            </Sheet>
        </>
    );
};

export const WithoutOverlay: StoryObj = {
    render: () => <StoryWithoutOverlay />,
};

const StoryWithScroll = ({
    withOverlay,
    withTransition,
    storyHasFooter,
    isFooterFixed,
    storyHasHeader,
    isHeaderFixed,
    hasHandle,
    withBlur,
}: StorySheetProps) => {
    const [opened, setOpened] = useState(false);
    const handleClose = createOnClose(setOpened);

    return (
        <>
            <Button onClick={() => setOpened(true)}>Открыть</Button>
            <Sheet
                opened={opened}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={handleClose}
                hasHandle={hasHandle}
                withBlur={withBlur}
                contentHeader={
                    storyHasHeader ? (
                        <div>
                            <h4>header</h4>
                        </div>
                    ) : undefined
                }
                isHeaderFixed={isHeaderFixed}
                contentFooter={
                    storyHasFooter ? (
                        <div>
                            <p>footer</p>
                        </div>
                    ) : undefined
                }
                isFooterFixed={isFooterFixed}
            >
                <Body>
                    <Button onClick={() => setOpened(false)}>Закрыть</Button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                        consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel
                        illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                        nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt
                        ullam, dolorem labore quaerat vero maxime ab ipsa nihil.
                    </p>
                    <Button onClick={() => setOpened(false)}>Закрыть</Button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                        consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel
                        illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                        nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt
                        ullam, dolorem labore quaerat vero maxime ab ipsa nihil.
                    </p>
                </Body>
            </Sheet>
        </>
    );
};

export const WithScroll: StoryObj<StorySheetProps> = {
    args: {
        storyHasHeader: true,
        storyHasFooter: true,
    },
    render: (args) => <StoryWithScroll {...args} />,
};

const StoryWithInsideScroll = ({
    withOverlay,
    withTransition,
    storyHasFooter,
    isFooterFixed,
    storyHasHeader,
    isHeaderFixed,
    hasHandle,
    withBlur,
}: StorySheetProps) => {
    const [opened, setOpened] = useState(false);
    const handleClose = createOnClose(setOpened);

    return (
        <>
            <Button onClick={() => setOpened(true)}>Открыть</Button>
            <Sheet
                opened={opened}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={handleClose}
                hasHandle={hasHandle}
                withBlur={withBlur}
                contentHeader={
                    storyHasHeader ? (
                        <div>
                            <h4>header</h4>
                        </div>
                    ) : undefined
                }
                isHeaderFixed={isHeaderFixed}
                contentFooter={
                    storyHasFooter ? (
                        <div>
                            <p>footer</p>
                        </div>
                    ) : undefined
                }
                isFooterFixed={isFooterFixed}
            >
                <p>Вложенные кнопки</p>
                <div
                    style={{
                        height: '150px',
                        overflowY: 'scroll',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <Button>Кнопка 1</Button>
                    <Button>Кнопка 2</Button>
                    <Button>Кнопка 3</Button>
                    <Button>Кнопка 4</Button>
                    <Button>Кнопка 5</Button>
                    <Button>Кнопка 6</Button>
                    <Button>Кнопка 7</Button>
                    <Button>Кнопка 8</Button>
                </div>
                <Body>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Body>
            </Sheet>
        </>
    );
};

export const WithInsideScroll: StoryObj<StorySheetProps> = {
    args: {
        storyHasHeader: true,
        storyHasFooter: true,
    },
    render: (args) => <StoryWithInsideScroll {...args} />,
};

const StoryWithDoubleScroll = ({
    withOverlay,
    withTransition,
    storyHasFooter,
    isFooterFixed,
    storyHasHeader,
    isHeaderFixed,
    hasHandle,
    withBlur,
}: StorySheetProps) => {
    const [opened, setOpened] = useState(false);
    const handleClose = createOnClose(setOpened);

    return (
        <>
            <Button onClick={() => setOpened(true)}>Открыть</Button>
            <Sheet
                opened={opened}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={handleClose}
                hasHandle={hasHandle}
                withBlur={withBlur}
                contentHeader={
                    storyHasHeader ? (
                        <div>
                            <h4>header</h4>
                        </div>
                    ) : undefined
                }
                isHeaderFixed={isHeaderFixed}
                contentFooter={
                    storyHasFooter ? (
                        <div>
                            <p>footer</p>
                        </div>
                    ) : undefined
                }
                isFooterFixed={isFooterFixed}
            >
                <Body>
                    <Button onClick={() => setOpened(false)}>Закрыть</Button>
                    <p>Вложенные кнопки</p>
                    <div
                        style={{
                            height: '150px',
                            overflowY: 'scroll',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <Button>Кнопка 1</Button>
                        <Button>Кнопка 2</Button>
                        <Button>Кнопка 3</Button>
                        <Button>Кнопка 4</Button>
                        <Button>Кнопка 5</Button>
                        <Button>Кнопка 6</Button>
                        <Button>Кнопка 7</Button>
                        <Button>Кнопка 8</Button>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                        consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel
                        illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                        nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt
                        ullam, dolorem labore quaerat vero maxime ab ipsa nihil.
                    </p>
                    <Button onClick={() => setOpened(false)}>Закрыть</Button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                        consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel
                        illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                        nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt
                        ullam, dolorem labore quaerat vero maxime ab ipsa nihil.
                    </p>
                </Body>
            </Sheet>
        </>
    );
};

export const WithDoubleScroll: StoryObj<StorySheetProps> = {
    args: {
        storyHasHeader: true,
        storyHasFooter: true,
    },
    render: (args) => <StoryWithDoubleScroll {...args} />,
};

const SNAP_POINTS = [0.3, 0.6, 0.95];

const StoryWithSnapPoints = ({
    withOverlay,
    withTransition,
    storyHasFooter,
    isFooterFixed,
    storyHasHeader,
    isHeaderFixed,
    hasHandle,
    withBlur,
    handlePlacement,
}: StorySheetProps) => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button onClick={() => setOpened(true)}>Открыть</Button>
            <Sheet
                opened={opened}
                handlePlacement={handlePlacement}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={() => setOpened(false)}
                hasHandle={hasHandle}
                withBlur={withBlur}
                snapPoints={SNAP_POINTS}
                initialSnapPoint={SNAP_POINTS[0]}
                contentHeader={
                    storyHasHeader ? (
                        <div>
                            <h4>Snap points</h4>
                        </div>
                    ) : undefined
                }
                isHeaderFixed={isHeaderFixed}
                contentFooter={
                    storyHasFooter ? (
                        <div>
                            <p>footer</p>
                        </div>
                    ) : undefined
                }
                isFooterFixed={isFooterFixed}
            >
                <StyledBody>
                    Потяните шторку вверх или вниз, чтобы перейти между точками остановки. Сильный свайп вниз закроет
                    шторку.
                </StyledBody>
            </Sheet>
        </>
    );
};

export const WithSnapPoints: StoryObj<StorySheetProps> = {
    args: {
        storyHasHeader: true,
        storyHasFooter: true,
    },
    render: (args) => <StoryWithSnapPoints {...args} />,
};
