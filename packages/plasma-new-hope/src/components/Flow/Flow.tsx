import React, { CSSProperties, useState } from 'react';
import cls from 'classnames';
import { styled } from '@linaria/react';

import { Select, Slider, TextField } from '@salutejs/plasma-web';

const Header = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    padding-bottom: 1rem;
    gap: 0 1rem;
    background: white;
`;

const SliderStyled = styled(Slider)`
    width: 300px;
    height: 3rem;
`;

const Item = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const arrangements = ['start', 'center', 'end', 'spaceBetween', 'spaceAround'];
const alignments = ['start', 'center', 'end'];

const horizontalItemsWidth = [120, 215, 57, 164, 60, 76];
const verticalItemsWidth = [100, 32, 171, 74, 179, 55];
const heights = [10, 50, 45, 33, 14, 55];

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: var(--plasma-private-gap);

    border-radius: 0.5rem;
    background-color: tomato;

    &.vertical {
        flex-direction: column;
    }

    &.grid {
        display: grid;

        grid-template-columns: repeat(var(--plasma-private-items), auto);
        grid-auto-flow: row;

        &.elastic {
            grid-template-columns: repeat(auto-fill, minmax(var(--plasma-private-min-width), auto));
            grid-auto-flow: row;
        }

        &:not(.vertical) {
            &[data-arrangement='start'] {
                justify-items: start;
            }

            &[data-arrangement='center'] {
                justify-items: center;
            }

            &[data-arrangement='end'] {
                justify-items: end;
            }

            &[data-arrangement='spaceBetween'] {
                justify-content: space-between;
            }

            &[data-arrangement='spaceAround'] {
                justify-content: space-around;
            }

            &[data-alignment='start'] {
                align-items: start;
            }

            &[data-alignment='center'] {
                align-items: center;
            }

            &[data-alignment='end'] {
                align-items: end;
            }
        }

        &.vertical {
            grid-template-rows: repeat(var(--plasma-private-items), auto);
            grid-auto-flow: column;

            &[data-arrangement='start'] {
                align-content: start;
            }

            &[data-arrangement='center'] {
                align-content: center;
            }

            &[data-arrangement='end'] {
                align-content: end;
            }

            &[data-arrangement='spaceBetween'] {
                align-content: space-between;
            }

            &[data-arrangement='spaceAround'] {
                align-content: space-around;
            }

            &[data-alignment='start'] {
                justify-items: start;
            }

            &[data-alignment='center'] {
                justify-items: center;
            }

            &[data-alignment='end'] {
                justify-items: end;
            }
        }
    }

    &:not(&.grid) {
        &[data-arrangement='start'] {
            justify-content: start;
        }

        &[data-arrangement='center'] {
            justify-content: center;
        }

        &[data-arrangement='end'] {
            justify-content: end;
        }

        &[data-arrangement='spaceBetween'] {
            justify-content: space-between;
        }

        &[data-arrangement='spaceAround'] {
            justify-content: space-around;
        }

        &[data-alignment='start'] {
            align-items: start;
        }

        &[data-alignment='center'] {
            align-items: center;
        }

        &[data-alignment='end'] {
            align-items: end;
        }
    }
`;

const horizontalItems = horizontalItemsWidth.map((width, index) => (
    <Item
        style={{
            width,
            height: heights[index],
        }}
    >
        {index + 1}
    </Item>
));

const verticalItems = verticalItemsWidth.map((width, index) => (
    <Item
        style={{
            width: width,
            minHeight: `${heights[index]}px`,
        }}
    >
        {index + 1}
    </Item>
));

const items = new Array(12).fill(null).map((_, index) => <Item>{index + 1}</Item>);

interface Props {
    className?: string;
    style?: CSSProperties;
    orientation?: 'horizontal' | 'vertical';
    arrangement?: 'start' | 'center' | 'end' | 'spaceBetween' | 'spaceAround';
    alignment?: 'start' | 'center' | 'end';
    mainAxisGap?: string;
    crossAxisGap?: string;
    itemsPerLine?: number;
}

export const Flow: React.FC<Props> = ({
    children,
    className,
    style,
    orientation = 'horizontal',
    arrangement,
    alignment,
    mainAxisGap = '0',
    crossAxisGap = '0',
    minColWidth = 'auto',
    itemsPerLine,
}) => {
    const hasMinWidth = minColWidth !== 'auto';
    const needGrid = Boolean(itemsPerLine || hasMinWidth);

    return (
        <Wrapper
            className={cls(className, {
                vertical: orientation === 'vertical',
                grid: needGrid,
                elastic: hasMinWidth,
            })}
            style={{
                ...style,
                '--plasma-private-gap': `${mainAxisGap} ${crossAxisGap}`,
                '--plasma-private-items': String(itemsPerLine),
                '--plasma-private-min-width': String(minColWidth),
            }}
            data-arrangement={arrangement}
            data-alignment={alignment}
        >
            {children}
        </Wrapper>
    );
};

export const App: React.FC = () => {
    const [itemsCount, setItemsCount] = useState(3);
    const [arrangement, setArrangement] = useState<Props['arrangement']>();
    const [alignment, setAlignment] = useState<Props['alignment']>();
    const [mainAxisGap, setMainAxisGap] = useState<string>('0');
    const [crossAxisGap, setCrossAxisGap] = useState<string>('0');

    const props = {
        arrangement,
        alignment,
        mainAxisGap,
        crossAxisGap,
    };

    return (
        <>
            <Header>
                <SliderStyled
                    label="items count"
                    min={0}
                    max={heights.length}
                    value={itemsCount}
                    showCurrentValue
                    onChange={setItemsCount}
                    onChangeCommitted={setItemsCount}
                />
                <Select
                    label="arrangement"
                    helperText="Расположение элементов относительно выбранной ориентации"
                    items={arrangements.map((a) => ({ value: a, label: a }))}
                    onChange={setArrangement}
                />
                <Select
                    label="alignment"
                    helperText="Выравнивание элементов внутри строк по вертикали при горизонтальной ориентации, или внутри столбцов по горизонтали при вертикальной."
                    items={alignments.map((a) => ({ value: a, label: a }))}
                    onChange={setAlignment}
                />
                <TextField
                    label="mainAxisGap"
                    value={mainAxisGap}
                    onChange={({ target }) => setMainAxisGap(target.value)}
                />
                <TextField
                    label="crossAxisGap"
                    value={crossAxisGap}
                    onChange={({ target }) => setCrossAxisGap(target.value)}
                />
            </Header>
            <hr />
            <Flow {...props} itemsPerLine={undefined} style={{ width: '34rem', height: '12rem' }}>
                {horizontalItems}
            </Flow>
            <hr />
            <Flow {...props} style={{ width: '40rem', height: '12rem' }}>
                {horizontalItems}
            </Flow>
            <hr />
            <Flow {...props} itemsPerLine={undefined} orientation="vertical" style={{ width: '28rem' }}>
                {verticalItems}
            </Flow>
            <hr />
            <Flow
                {...props}
                itemsPerLine={undefined}
                orientation="vertical"
                style={{ width: '28rem', height: '12rem' }}
            >
                {verticalItems}
            </Flow>
            <hr />
            <Flow {...props} orientation="vertical" style={{ width: '28rem' }}>
                {verticalItems}
            </Flow>
            <hr />
            <Flow {...props} orientation="vertical" style={{ width: '28rem', height: '12rem' }}>
                {verticalItems}
            </Flow>
            <hr />
            <h1>ElasticGrid</h1>
            <Flow {...props} itemsPerLine={undefined} minColWidth="5rem" style={{ width: '50vw' }}>
                {items}
            </Flow>
            <hr />
            <Flow {...props} itemsPerLine={undefined} minColWidth="5rem" style={{ width: '50vw', height: '12rem' }}>
                {items}
            </Flow>
        </>
    );
};
