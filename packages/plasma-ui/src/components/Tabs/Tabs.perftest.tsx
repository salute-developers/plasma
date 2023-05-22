import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Tabs, TabItem } from '.';

const StorybookTabsWrapper = styled.div`
    margin-top: 0.5rem;
`;

const defaultProps = {
    itemsNumber: 4,
    size: 'l' as const,
    view: 'secondary' as const,
    stretch: true,
    pilled: false,
    scaleOnInteraction: true,
    outlined: false,
    disabled: false,
    text: 'Label' as const,
};

const icon = <div style={{ width: 10, height: 10 }} />;

export const Default = () => {
    const { itemsNumber, size, view, stretch, pilled, scaleOnInteraction, text, disabled, outlined } = defaultProps;

    const id = 'tabs-example';
    const [index, setIndex] = React.useState(0);

    const items = useMemo(() => {
        type elem = {
            label: string;
            onClick: () => void;
            onFocus: () => void;
            onBlur: () => void;
        };

        const res: Array<elem> = [];
        for (let i = 0; i < itemsNumber; i++) {
            res.push({
                label: `${text} ${i} `,
                onFocus: () => {},
                onBlur: () => {},
                onClick: () => {
                    !disabled && setIndex(i);
                },
            });
        }
        return res;
    }, [itemsNumber, text]);

    const tabIndex = disabled ? -1 : 0;

    return (
        <StorybookTabsWrapper>
            <Tabs
                id={id}
                size={size}
                view={view}
                stretch={stretch}
                pilled={pilled}
                scaleOnPress={scaleOnInteraction}
                outlined={!disabled && outlined}
                disabled={disabled}
                index={index}
                animated
                forwardedAs="ul"
            >
                {items.map((elem, i) => (
                    <TabItem
                        key={`item:${i}`}
                        forwardedAs="li"
                        isActive={i === index}
                        aria-controls={id}
                        tabIndex={tabIndex}
                        contentLeft={icon}
                        onClick={elem.onClick}
                        onFocus={elem.onFocus}
                        onBlur={elem.onBlur}
                    >
                        {elem.label}
                    </TabItem>
                ))}
            </Tabs>
        </StorybookTabsWrapper>
    );
};
