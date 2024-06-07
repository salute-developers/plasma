import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Body1 } from '@salutejs/plasma-core';
import { styled } from '@linaria/react';

import { Button } from '../Button/Button';
import { WithTheme } from '../../../_helpers';

import { Sheet } from './Sheet';

const meta: Meta<typeof Sheet> = {
    title: 'plasma_web/Sheet',
    decorators: [WithTheme],
    parameters: { viewport: { defaultViewport: '860' } },
};

export default meta;

type StorySheetProps = ComponentProps<typeof Sheet> & {
    hasHeader: boolean;
    hasFooter: boolean;
};

const StyledBody = styled(Body1)`
    padding-bottom: 300px;
`;

const StoryDefault = ({
    withOverlay,
    withTransition,
    hasFooter,
    isFooterFixed,
    hasHeader,
    isHeaderFixed,
    hasHandle,
    withBlur,
}: StorySheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet
                isOpen={isOpen}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={() => setIsOpen(false)}
                hasHandle={hasHandle}
                withBlur={withBlur}
                contentHeader={
                    hasHeader ? (
                        <div>
                            <h4>header</h4>
                        </div>
                    ) : undefined
                }
                isHeaderFixed={isHeaderFixed}
                contentFooter={
                    hasFooter ? (
                        <div>
                            <p>footer</p>
                        </div>
                    ) : undefined
                }
                isFooterFixed={isFooterFixed}
            >
                <StyledBody>body</StyledBody>
            </Sheet>
        </>
    );
};

export const Default: StoryObj<StorySheetProps> = {
    args: {
        hasHeader: true,
        hasFooter: true,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryWithoutOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet isOpen={isOpen} withOverlay={false} onClose={() => setIsOpen(false)}>
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
    hasFooter,
    isFooterFixed,
    hasHeader,
    isHeaderFixed,
    hasHandle,
    withBlur,
}: StorySheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet
                isOpen={isOpen}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={() => setIsOpen(false)}
                hasHandle={hasHandle}
                withBlur={withBlur}
                contentHeader={
                    hasHeader ? (
                        <div>
                            <h4>header</h4>
                        </div>
                    ) : undefined
                }
                isHeaderFixed={isHeaderFixed}
                contentFooter={
                    hasFooter ? (
                        <div>
                            <p>footer</p>
                        </div>
                    ) : undefined
                }
                isFooterFixed={isFooterFixed}
            >
                <Body1>
                    <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                        consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel
                        illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                        nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt
                        ullam, dolorem labore quaerat vero maxime ab ipsa nihil.
                    </p>
                    <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                        consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel
                        illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                        nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt
                        ullam, dolorem labore quaerat vero maxime ab ipsa nihil.
                    </p>
                </Body1>
            </Sheet>
        </>
    );
};

export const WithScroll: StoryObj<StorySheetProps> = {
    args: {
        hasHeader: true,
        hasFooter: true,
    },
    render: (args) => <StoryWithScroll {...args} />,
};

const StoryWithInsideScroll = ({
    withOverlay,
    withTransition,
    hasFooter,
    isFooterFixed,
    hasHeader,
    isHeaderFixed,
    hasHandle,
    withBlur,
}: StorySheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet
                isOpen={isOpen}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={() => setIsOpen(false)}
                hasHandle={hasHandle}
                withBlur={withBlur}
                contentHeader={
                    hasHeader ? (
                        <div>
                            <h4>header</h4>
                        </div>
                    ) : undefined
                }
                isHeaderFixed={isHeaderFixed}
                contentFooter={
                    hasFooter ? (
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
                        overflow: 'scroll',
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
                <Body1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Body1>
            </Sheet>
        </>
    );
};

export const WithInsideScroll: StoryObj<StorySheetProps> = {
    args: {
        hasHeader: true,
        hasFooter: true,
    },
    render: (args) => <StoryWithInsideScroll {...args} />,
};

const StoryWithDoubleScroll = ({
    withOverlay,
    withTransition,
    hasFooter,
    isFooterFixed,
    hasHeader,
    isHeaderFixed,
    hasHandle,
    withBlur,
}: StorySheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet
                isOpen={isOpen}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={() => setIsOpen(false)}
                hasHandle={hasHandle}
                withBlur={withBlur}
                contentHeader={
                    hasHeader ? (
                        <div>
                            <h4>header</h4>
                        </div>
                    ) : undefined
                }
                isHeaderFixed={isHeaderFixed}
                contentFooter={
                    hasFooter ? (
                        <div>
                            <p>footer</p>
                        </div>
                    ) : undefined
                }
                isFooterFixed={isFooterFixed}
            >
                <Body1>
                    <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
                    <p>Вложенные кнопки</p>
                    <div
                        style={{
                            height: '150px',
                            overflow: 'scroll',
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
                    <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                        consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel
                        illum ea fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                        nostrum placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt
                        ullam, dolorem labore quaerat vero maxime ab ipsa nihil.
                    </p>
                </Body1>
            </Sheet>
        </>
    );
};

export const WithDoubleScroll: StoryObj<StorySheetProps> = {
    args: {
        hasHeader: true,
        hasFooter: true,
    },
    render: (args) => <StoryWithDoubleScroll {...args} />,
};
