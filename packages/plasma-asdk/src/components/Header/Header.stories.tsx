import React, { ComponentProps, useState } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconMic } from '@salutejs/plasma-icons';

import { Button } from '../Button/Button';
import { InSpacingDecorator } from '../../helpers';

import { HeaderRoot, HeaderLogo, HeaderArrow, HeaderTitleWrapper, HeaderTitle, HeaderContent } from '.';

const meta: Meta<typeof HeaderRoot> = {
    title: 'Layout/Header',
    decorators: [InSpacingDecorator],
};

export default meta;

type ContentComponentProps = {
    contentType: string;
    contentItemsNumber: number;
    enableIcons: boolean;
};

type CustomAssemblyProps = {
    variant: string;
    title: string;
    subtitle: string;
    label: string;
    gradientColor: string;
};

type StoryPropsCustomAssembly = ComponentProps<typeof HeaderRoot> & CustomAssemblyProps & ContentComponentProps;

const StyledContentGrid = styled.div<{ $colCount: number }>`
    display: grid;
    grid-template-columns: ${({ $colCount }) => `repeat(${$colCount}, max-content)`};
    grid-column-gap: 0.75rem;
`;

const Content = ({ contentItemsNumber, enableIcons }: ContentComponentProps) => {
    const contentItems = Array.from(Array(contentItemsNumber), (_, i) => `item:${i}`);

    return (
        <StyledContentGrid $colCount={contentItems.length}>
            {contentItems.map((value) => (
                <Button
                    key={value}
                    size="s"
                    view="clear"
                    contentLeft={enableIcons && <IconMic color="inherit" size="s" />}
                    text="Button"
                />
            ))}
        </StyledContentGrid>
    );
};

const StoryCustomAssembly = ({ variant, title, subtitle, label, gradientColor, ...rest }: StoryPropsCustomAssembly) => {
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
        <HeaderRoot gradientColor={gradientColor} {...rest} style={{ marginLeft: '40px' }}>
            {isBack ? (
                <HeaderArrow onClick={onBackClick} />
            ) : (
                <HeaderArrow arrow="minimize" onClick={onMinimizeClick} />
            )}
            <HeaderLogo src="./images/320_320_9.jpg" alt="Logo" />
            {variant === 'title+subtitle' && (
                <>
                    <HeaderTitleWrapper title={title} subTitle={subtitle} />
                </>
            )}
            {variant === 'label+title' && (
                <>
                    <HeaderTitleWrapper title={title} label={label} />
                </>
            )}
            {variant === 'title' && <HeaderTitle>{title}</HeaderTitle>}
            <HeaderContent>
                <Content {...rest} />
            </HeaderContent>
        </HeaderRoot>
    );
};

export const CustomAssembly: StoryObj<StoryPropsCustomAssembly> = {
    argTypes: {
        variant: {
            options: ['title+subtitle', 'label+title', 'title'],
            control: {
                type: 'inline-radio',
            },
        },
        size: {
            options: ['l', 'm', 's'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        view: 'default',
        size: 'm',
        variant: 'title+subtitle',
        title: 'Header title text',
        subtitle: 'Subtitle text',
        label: 'Label text',
        gradientColor: '#F69555',
        contentItemsNumber: 3,
        enableIcons: true,
    },
    render: (args) => <StoryCustomAssembly {...args} />,
};
