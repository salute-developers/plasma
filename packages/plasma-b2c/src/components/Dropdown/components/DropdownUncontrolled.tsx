import React, { FC, SyntheticEvent, useState, forwardRef, CSSProperties } from 'react';
import {
    dropdownConfig,
    dropdownItemConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { DropdownProps, DropdownNodeType } from '@salutejs/plasma-hope';
import styled from 'styled-components';
import { IconDisclosureRight } from '@salutejs/plasma-icons';
import type { IconProps } from '@salutejs/plasma-icons';

import { config } from '../Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
const DropdownNewHope = component(mergedConfig);

const mergedItemConfig = mergeConfig(dropdownItemConfig);
export const DropdownNewHopeItem = component(mergedItemConfig);

const DropdownWrapper = styled.div<{
    listHeight?: number | CSSProperties['height'];
    listOverflow?: CSSProperties['overflow'];
}>`
    & .popover-wrapper,
    & .popover-target {
        display: block;
    }

    & .popover-root {
        height: ${({ listHeight }) => (!Number.isNaN(Number(listHeight)) ? `${listHeight}rem` : listHeight)};
        overflow: ${({ listOverflow }) => listOverflow};
    }
`;

const StyledContent = styled.div`
    display: inline-flex;
    margin-right: 0.375rem;
`;

const DropdownItem: FC<{
    item: DropdownNodeType;
    index: number;
    handleOnHover: (index: number) => void;
    handleClick?: (item: DropdownNodeType, event: SyntheticEvent) => void;
    itemRole?: string;
    contentRight?: FC<IconProps>;
}> = ({ item, index, itemRole, handleClick, handleOnHover, contentRight }) => (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <DropdownNewHopeItem
        key={item.value}
        value={item.value}
        onClick={(e) => {
            if (handleClick) {
                handleClick(item, e);
            }
        }}
        onMouseOver={() => handleOnHover(index)}
        role={itemRole}
        disabled={item.isDisabled}
        contentLeft={<StyledContent>{item.contentLeft}</StyledContent>}
        contentRight={contentRight}
        text={item.label}
        style={{ color: item.color }}
    />
);

const DropdownInner: FC<
    Pick<
        DropdownProps,
        'children' | 'items' | 'role' | 'closeOnSelect' | 'onItemClick' | 'onItemSelect' | 'itemRole' | 'onHover'
    > & { onGlobalClose?: () => void }
> = ({ children, closeOnSelect = true, onItemClick, onItemSelect, items, itemRole, onHover, onGlobalClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (currentState: boolean, _: Event | SyntheticEvent<Element, Event>): void => {
        setIsOpen(currentState);
    };

    const handleOnHover = (index: number): void => {
        if (onHover) {
            onHover(index);
        }
    };

    const handleClick = (item: DropdownNodeType, event: SyntheticEvent): void => {
        if (onItemClick) {
            onItemClick(item, event);
        }

        if (onItemSelect) {
            onItemSelect(item, event);
        }

        if (closeOnSelect && onGlobalClose) {
            onGlobalClose();
        }
    };

    return (
        <DropdownNewHope
            target={children}
            isOpen={isOpen}
            onToggle={handleToggle}
            trigger="hover"
            placement="right"
            offset={[0, 0]}
        >
            {items.map((item, index) =>
                item.items ? (
                    <DropdownInner
                        key={index}
                        items={item.items}
                        role={itemRole}
                        closeOnSelect={closeOnSelect}
                        onItemClick={onItemClick}
                        onItemSelect={onItemSelect}
                        onHover={onHover}
                        onGlobalClose={onGlobalClose}
                    >
                        <DropdownItem
                            item={item}
                            index={index}
                            itemRole={itemRole}
                            handleOnHover={handleOnHover}
                            handleClick={handleClick}
                            contentRight={IconDisclosureRight}
                        />
                    </DropdownInner>
                ) : (
                    <DropdownItem
                        key={index}
                        item={item}
                        index={index}
                        itemRole={itemRole}
                        handleOnHover={handleOnHover}
                        handleClick={handleClick}
                    />
                ),
            )}
        </DropdownNewHope>
    );
};

interface AdditionalProps {
    isOpen: boolean;
    handleClick?: (item: DropdownNodeType, event: SyntheticEvent) => void;
    onGlobalClose?: () => void;
}

export const DropdownUncontrolled = forwardRef<HTMLDivElement, DropdownProps & AdditionalProps>(
    (
        {
            children,
            isOpen,
            trigger,
            placement = 'bottom',
            disabled,
            closeOnSelect = true,
            onToggle,
            onItemClick,
            onItemSelect,
            listOverflow,
            listHeight,
            items,
            itemRole,
            onHover,
            handleClick,
            onGlobalClose,
            ...rest
        },
        ref,
    ) => {
        const handleOnHover = (index: number): void => {
            if (onHover) {
                onHover(index);
            }
        };

        return (
            <DropdownWrapper listHeight={listHeight} listOverflow={listOverflow}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <DropdownNewHope
                    {...rest}
                    ref={ref}
                    target={children}
                    isOpen={isOpen}
                    onToggle={onToggle}
                    trigger={trigger}
                    placement={placement}
                    offset={[0, 0]}
                    closeOnOverlayClick
                >
                    {!disabled &&
                        items.map((item, index) =>
                            item.items ? (
                                <DropdownInner
                                    key={index}
                                    items={item.items}
                                    itemRole={itemRole}
                                    closeOnSelect={closeOnSelect}
                                    onItemClick={onItemClick}
                                    onItemSelect={onItemSelect}
                                    onHover={onHover}
                                    onGlobalClose={onGlobalClose}
                                >
                                    <DropdownItem
                                        item={item}
                                        index={index}
                                        itemRole={itemRole}
                                        handleOnHover={handleOnHover}
                                        handleClick={handleClick}
                                        contentRight={IconDisclosureRight}
                                    />
                                </DropdownInner>
                            ) : (
                                <DropdownItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    itemRole={itemRole}
                                    handleOnHover={handleOnHover}
                                    handleClick={handleClick}
                                />
                            ),
                        )}
                </DropdownNewHope>
            </DropdownWrapper>
        );
    },
);
