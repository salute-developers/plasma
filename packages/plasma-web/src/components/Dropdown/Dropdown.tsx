import React, { FC, SyntheticEvent, useState, forwardRef, CSSProperties } from 'react';
import {
    dropdownConfig,
    dropdownItemConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import { DropdownProps, DropdownNodeType } from '@salutejs/plasma-hope';
import styled from 'styled-components';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
const DropdownNewHope = component(mergedConfig);

const mergedItemConfig = mergeConfig(dropdownItemConfig);
export const DropdownNewHopeItem = component(mergedItemConfig);

const DropdownWrapper = styled.div<{
    listHeight?: number | CSSProperties['height'];
    listOverflow?: CSSProperties['overflow'];
}>`
    display: inline-block;

    & > .popover-wrapper {
        display: inline-block;
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
    handleClick: (item: DropdownNodeType, event: SyntheticEvent) => void;
    handleOnHover: (index: number) => void;
    itemRole?: string;
}> = ({ item, index, itemRole, handleClick, handleOnHover }) => (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <DropdownNewHopeItem
        key={item.value}
        value={item.value}
        onClick={(e) => handleClick(item, e)}
        onMouseOver={() => handleOnHover(index)}
        role={itemRole}
        disabled={item.isDisabled}
        contentLeft={<StyledContent>{item.contentLeft}</StyledContent>}
        text={item.label}
        style={{ color: item.color }}
    />
);

const DropdownInner: FC<
    Pick<
        DropdownProps,
        'children' | 'items' | 'role' | 'closeOnSelect' | 'onItemClick' | 'onItemSelect' | 'itemRole' | 'onHover'
    > & { onGlobalClose: () => void }
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

        if (closeOnSelect) {
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
                        />
                    </DropdownInner>
                ) : (
                    <DropdownItem
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

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
    const {
        children,
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
        ...rest
    } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (currentState: boolean, event: Event | SyntheticEvent<Element, Event>): void => {
        setIsOpen(currentState);

        if (onToggle) {
            onToggle(currentState, event);
        }
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

        if (closeOnSelect) {
            setIsOpen(false);
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
                onToggle={handleToggle}
                trigger={trigger}
                placement={placement}
                offset={[0, 0]}
                closeOnOverlayClick
            >
                {!disabled &&
                    items.map((item, index) =>
                        item.items ? (
                            <DropdownInner
                                items={item.items}
                                itemRole={itemRole}
                                closeOnSelect={closeOnSelect}
                                onItemClick={onItemClick}
                                onItemSelect={onItemSelect}
                                onHover={onHover}
                                onGlobalClose={() => setIsOpen(false)}
                            >
                                <DropdownItem
                                    item={item}
                                    index={index}
                                    itemRole={itemRole}
                                    handleOnHover={handleOnHover}
                                    handleClick={handleClick}
                                />
                            </DropdownInner>
                        ) : (
                            <DropdownItem
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
});
