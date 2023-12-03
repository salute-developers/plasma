import React, { useState } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../Button/Button';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { headerRootConfig } from '../../../../components/Header';
import { IconMic } from '../../../../components/_Icon';

import { config } from './Header.config';
import { HeaderRoot, HeaderLogo, HeaderArrow, HeaderTitleWrapper, HeaderTitle, HeaderContent } from './Header';

const meta: Meta<typeof HeaderRoot> = {
    title: 'plasma_b2c/Header',
    decorators: [WithTheme],
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

const StyledContentGrid = styled.div<{ $colCount: number }>`
    display: grid;
    grid-template-columns: ${({ $colCount }) => `repeat(${$colCount}, max-content)`};
    grid-column-gap: 0.75rem;
`;

const Content = ({ contentItemsNumber, enableIcons }: ContentComponentProps) => {
    const contentItems = Array(contentItemsNumber).fill(0);

    return (
        <StyledContentGrid $colCount={contentItems.length}>
            {contentItems.map((_, i) => (
                <Button
                    key={`item:${i}`}
                    size="s"
                    view="clear"
                    contentLeft={enableIcons && <IconMic color="inherit" size="s" />}
                    text="Button"
                />
            ))}
        </StyledContentGrid>
    );
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

export const CustomAssembly: StoryObj<CustomAssemblyProps & ContentComponentProps> = {
    argTypes: {
        variant: {
            options: ['title+subtitle', 'label+title', 'title'],
            control: {
                type: 'inline-radio',
            },
        },
        ...argTypesFromConfig(mergeConfig(headerRootConfig, config)),
    },
    args: {
        view: 'primary',
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
