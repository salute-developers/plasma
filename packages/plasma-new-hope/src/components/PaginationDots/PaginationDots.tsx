import React from 'react';
import cls from 'classnames';
import { styled } from '@linaria/react';

interface Props {
    size?: 's' | 'm';
    /**
     * Отображение активного элемента
     * @default 'dot'
     */
    activeElementView?: 'dot' | 'line';
    /**
     * Ориентация элементов
     * @default `horizontal`
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Растягивается на всю доступную ширину
     * @default true
     */
    stretch?: boolean;
    /**
     * Выбранная страница
     */
    value?: number;
    /**
     * Количество страниц
     */
    count?: number;
}

const Dot = styled.div`
    padding: 0 0.375rem;

    &:before {
        content: '';
        display: block;
        border-radius: 50%;

        background-color: #0808081f;
    }

    &.active {
        &:before {
            background-color: #080808;
        }
    }

    &[data-size='xs'] {
        &:before {
            width: 0.375rem;
            height: 0.375rem;
        }
    }

    &[data-size='s'] {
        &:before {
            width: 0.5rem;
            height: 0.5rem;
        }
    }

    &[data-size='m'] {
        &:before {
            width: 0.75rem;
            height: 0.75rem;
        }
    }
`;

const Line = styled(Dot)`
    &[data-size='s'] {
        &:before {
            width: 2rem;
            height: 0.5rem;
            border-radius: 0.375rem;
        }
    }

    &[data-size='m'] {
        &:before {
            width: 3rem;
            height: 0.75rem;
            border-radius: 0.375rem;
        }
    }

    &.vertical {
        &[data-size='s'] {
            &:before {
                height: 2rem;
                width: 0.5rem;
            }
        }

        &[data-size='m'] {
            &:before {
                height: 3rem;
                width: 0.75rem;
            }
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    &.stretch {
        width: 100%;
        justify-content: space-between;
    }

    &.vertical {
        flex-direction: column;

        ${Dot} {
            padding: 0.375rem 0;
        }

        &.stretch {
            width: auto;
            height: 100%;
        }
    }
`;

const PaginationDots: React.FC<Props> = ({
                                             size = 's',
                                             activeElementView = 'dot',
                                             orientation = 'horizontal',
                                             stretch = true,
                                             value = 0,
                                             count,
                                         }) => {
    const dots = new Array(count).fill(null);

    const isVertical = orientation === 'vertical';

    return (
        <Wrapper className={cls({ size, stretch, vertical: isVertical })}>
            {dots.map((_, index) => {
                if (index === value) {
                    const ActiveElement = activeElementView === 'dot' ? Dot : Line;
                    return <ActiveElement key={index} data-size={size}
                                          className={cls({ active: true, vertical: isVertical })} />;
                }

                const isCurrent = index === value;

                const isFirst = !isCurrent && count > 1 && (index === 0 || index === count - 1);
                const isSecond = !isCurrent && count > 2 && (index === 1 || index === count - 2);

                const getSize = () => {
                    if (size === 's') {
                        return isFirst ? 'xs' : 's';
                    }

                    if (isFirst) {
                        return 'xs';
                    }

                    if (isSecond) {
                        return 's';
                    }

                    return 'm';
                };

                const dotSize = getSize();

                return <Dot key={index} data-size={dotSize} />;
            })}
        </Wrapper>
    );
};

export const App = () => {
    return (
        <div style={{ display: 'grid', gap: '1rem' }}>
            <PaginationDots value={0} count={9} stretch={false} />
            <PaginationDots value={1} count={9} stretch={false} />
            <PaginationDots value={2} count={9} stretch={false} />
            <PaginationDots value={3} count={9} stretch={false} />
            <PaginationDots value={8} count={9} stretch={false} />
            <PaginationDots value={0} count={9} stretch={false} activeElementView="line" />
            <PaginationDots value={1} count={9} stretch={false} activeElementView="line" />
            <PaginationDots value={2} count={9} stretch={false} activeElementView="line" />
            <PaginationDots value={3} count={9} stretch={false} activeElementView="line" />
            <PaginationDots value={8} count={9} stretch={false} activeElementView="line" />
            <PaginationDots value={4} count={9} stretch={false} activeElementView="line" />
            <PaginationDots value={4} count={9} stretch={false} size="m" />
            <PaginationDots value={4} count={9} stretch={false} size="m" activeElementView="line" />
            <PaginationDots value={4} count={9} stretch={true} />

            <hr />
            <div style={{ display: 'flex', height: '300px', gap: '1rem' }}>
                <PaginationDots value={4} count={9} stretch={false} orientation="vertical" />
                <PaginationDots value={4} count={9} stretch={true} orientation="vertical" />

                <PaginationDots value={4} count={9} stretch={false} orientation="vertical" activeElementView="line" />
                <PaginationDots value={4} count={9} stretch={true} orientation="vertical" activeElementView="line" />
            </div>
        </div>
    );
};
