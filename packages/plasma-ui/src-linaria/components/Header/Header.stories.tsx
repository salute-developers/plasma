import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconMic, IconPlus, IconTrash } from '@salutejs/plasma-icons';

import { Button } from '../Button';
import { Tabs, TabItem } from '../../../src';
import { InContainer, WithGridLines } from '../../../src/helpers/StoryDecorators';

import { Header, HeaderRoot, HeaderLogo, HeaderTitleWrapper, HeaderTitle, HeaderContent } from '.';

const meta: Meta<any> = {
    title: 'Linaria/Header',
    decorators: [WithGridLines, InContainer],
};

export default meta;

type ContentComponentProps = {
    contentType: string;
    contentItemsNumber: number;
    enableIcons: boolean;
};

type HeaderPropsExtend = { enableLogo: boolean; displayGrid: boolean };

type StoryHeaderProps = HeaderPropsExtend & ContentComponentProps;

type StoryNeuHeaderProps = HeaderPropsExtend & ContentComponentProps;

type CustomAssemblyProps = {
    displayGrid: boolean;
    variant: string;
    title: string;
    subtitle: string;
    label: string;
    gradientColor: string;
};

const contentTypes = ['Buttons', 'Tabs', 'MobileButtons', ''];

const StyledContentGrid = styled.div<{ $colCount: number }>`
    display: grid;
    grid-template-columns: ${({ $colCount }) => `repeat(${$colCount}, max-content)`};
    grid-column-gap: 0.75rem;
`;

const Content = ({ contentType, contentItemsNumber, enableIcons }: ContentComponentProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const contentItems = Array(contentItemsNumber).fill(0);

    if (contentType === 'Buttons') {
        return (
            <StyledContentGrid $colCount={contentItems.length}>
                {contentItems.map((_, i) => (
                    <Button
                        key={`item:${i}`}
                        size="s"
                        view="clear"
                        shiftRight={i === contentItems.length - 1}
                        contentLeft={enableIcons && <IconMic color="inherit" size="s" />}
                        text="Button"
                    />
                ))}
            </StyledContentGrid>
        );
    }

    if (contentType === 'Tabs') {
        return (
            <Tabs size="m" view="clear" pilled scaleOnPress shiftRight>
                {contentItems.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        isActive={i === activeTab}
                        onClick={() => setActiveTab(i)}
                        contentLeft={enableIcons && <IconMic color="inherit" size="s" />}
                    >
                        Tab
                    </TabItem>
                ))}
            </Tabs>
        );
    }

    if (contentType === 'MobileButtons') {
        return (
            <StyledContentGrid $colCount={2}>
                <Button view="clear" size="s" pin="circle-circle" contentLeft={<IconPlus color="inherit" size="s" />} />
                <Button
                    view="clear"
                    size="s"
                    pin="circle-circle"
                    contentLeft={<IconTrash color="inherit" size="s" />}
                    shiftRight
                />
            </StyledContentGrid>
        );
    }

    return null;
};

const StoryDefault = ({ enableLogo, logoAlt, title, subtitle, hideSubtitleOnMobile, ...rest }: any) => {
    const [isBack, setIsBack] = useState(true);

    const props: any = isBack
        ? {
              back: true,
              onBackClick: () => {
                  action('onBackClick')();
                  setIsBack(false);
              },
          }
        : {
              minimize: true,
              onMinimizeClick: () => {
                  action('onMinimizeClick')();
                  setIsBack(true);
              },
          };

    return (
        <Header
            {...props}
            logo={enableLogo && './images/320_320_12.jpg'}
            logoAlt={enableLogo && logoAlt}
            title={title}
            subtitle={subtitle}
            hideSubtitleOnMobile={hideSubtitleOnMobile}
        >
            <Content {...rest} />
        </Header>
    );
};

export const Default: StoryObj<StoryHeaderProps> = {
    argTypes: {
        contentType: {
            options: contentTypes,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        displayGrid: true,
        enableLogo: true,
        logoAlt: 'Logo',
        title: 'Header title text is very long to fit given width',
        subtitle: 'Subtitle text is very long to fit given width even this has smaller font size',
        gradientColor: '',
        contentType: 'Buttons',
        contentItemsNumber: 3,
        enableIcons: true,
        hideSubtitleOnMobile: true,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryCustomAssembly = ({
    variant,
    title,
    subtitle,
    label,
    gradientColor,
    ...rest
}: CustomAssemblyProps & ContentComponentProps) => {
    const [isBack, setIsBack] = useState(true);

    const onBackClick = () => {
        action('onBackClick')();
        setIsBack(false);
    };

    const onMinimizeClick = () => {
        action('onMinimizeClick')();
        setIsBack(true);
    };

    return (
        <HeaderRoot gradientColor={gradientColor}>
            <HeaderLogo src="./images/320_320_12.jpg" alt="Logo" />
            <HeaderTitleWrapper>
                {variant === 'title+subtitle' && (
                    <>
                        <HeaderTitle>{title}</HeaderTitle>
                    </>
                )}
                {variant === 'label+title' && (
                    <>
                        <HeaderTitle>{title}</HeaderTitle>
                    </>
                )}
                {variant === 'title' && <HeaderTitle>{title}</HeaderTitle>}
            </HeaderTitleWrapper>
            <HeaderContent>
                <Content {...rest} />
            </HeaderContent>
        </HeaderRoot>
    );
};

export const CustomAssembly: StoryObj<CustomAssemblyProps & ContentComponentProps> = {
    argTypes: {
        ...Default.argTypes,
        variant: {
            options: ['title+subtitle', 'label+title', 'title'],
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        displayGrid: true,
        variant: 'title+subtitle',
        title: 'Header title text',
        subtitle: 'Subtitle text',
        label: 'Label text',
        gradientColor: '',
        contentType: 'Buttons',
        contentItemsNumber: 3,
        enableIcons: true,
    },
    render: (args) => <StoryCustomAssembly {...args} />,
    parameters: {
        chromatic: {
            disable: true,
        },
    },
};
