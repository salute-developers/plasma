import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { InSpacing } from '../../helpers/StoryDecorators';
import { Button } from '../Button';
import { Body1 } from '../Typography';

import { Sheet } from './Sheet';
import type { SheetProps } from './Sheet';

const meta: Meta<SheetProps> = {
    title: 'Content/Sheet',
    decorators: [InSpacing],
    component: Sheet,
    parameters: { viewport: { defaultViewport: '860' } },
};

export default meta;

const StoryDefault = ({ withOverlay, withTransition }: SheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet
                isOpen={isOpen}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={() => setIsOpen(false)}
            >
                <p>Вложенные кнопки</p>
                <div
                    style={{
                        height: '75px',
                        overflow: 'scroll',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <Button>Кпнопка 1</Button>
                    <Button>Кпнопка 2</Button>
                    <Button>Кпнопка 3</Button>
                    <Button>Кпнопка 4</Button>
                    <Button>Кпнопка 5</Button>
                    <Button>Кпнопка 6</Button>
                    <Button>Кпнопка 7</Button>
                    <Button>Кпнопка 8</Button>
                </div>
                <Body1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                    consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel illum ea
                    fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nostrum
                    placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt ullam,
                    dolorem labore quaerat vero maxime ab ipsa nihil.
                </Body1>
            </Sheet>
        </>
    );
};

export const Default: StoryObj<SheetProps> = {
    args: {
        withOverlay: true,
        withTransition: true,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryWithoutOverlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet isOpen={isOpen} withOverlay={false} onClose={() => setIsOpen(false)}>
                <Body1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore vitae porro laboriosam
                    consectetur fugiat assumenda, earum nesciunt. Distinctio minima nesciunt dicta rem quae vel illum ea
                    fugit molestiae dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nostrum
                    placeat, neque repudiandae consectetur voluptates soluta et sint eum obcaecati nesciunt ullam,
                    dolorem labore quaerat vero maxime ab ipsa nihil.
                </Body1>
            </Sheet>
        </>
    );
};

export const WithoutOverlay: StoryObj = {
    render: () => <StoryWithoutOverlay />,
};

const StoryWithScroll = ({ withOverlay, withTransition }: SheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet
                isOpen={isOpen}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={() => setIsOpen(false)}
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

export const WithScroll: StoryObj<SheetProps> = {
    render: (args) => <StoryWithScroll {...args} />,
};

const StoryWithInsideScroll = ({ withOverlay, withTransition }: SheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet
                isOpen={isOpen}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={() => setIsOpen(false)}
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
                    <Button>Кпнопка 1</Button>
                    <Button>Кпнопка 2</Button>
                    <Button>Кпнопка 3</Button>
                    <Button>Кпнопка 4</Button>
                    <Button>Кпнопка 5</Button>
                    <Button>Кпнопка 6</Button>
                    <Button>Кпнопка 7</Button>
                    <Button>Кпнопка 8</Button>
                </div>
                <Body1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Body1>
            </Sheet>
        </>
    );
};

export const WithInsideScroll: StoryObj<SheetProps> = {
    args: {
        withOverlay: true,
        withTransition: true,
    },
    render: (args) => <StoryWithInsideScroll {...args} />,
};

const StoryWithDoubleScroll = ({ withOverlay, withTransition }: SheetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Открыть</Button>
            <Sheet
                isOpen={isOpen}
                withOverlay={withOverlay}
                withTransition={withTransition}
                onClose={() => setIsOpen(false)}
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
                        <Button>Кпнопка 1</Button>
                        <Button>Кпнопка 2</Button>
                        <Button>Кпнопка 3</Button>
                        <Button>Кпнопка 4</Button>
                        <Button>Кпнопка 5</Button>
                        <Button>Кпнопка 6</Button>
                        <Button>Кпнопка 7</Button>
                        <Button>Кпнопка 8</Button>
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

export const WithDoubleScroll: StoryObj<SheetProps> = {
    args: {
        withOverlay: true,
        withTransition: true,
    },
    render: (args) => <StoryWithDoubleScroll {...args} />,
};
