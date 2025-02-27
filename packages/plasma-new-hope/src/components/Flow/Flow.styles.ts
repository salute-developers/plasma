import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export const base = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: var(--plasma-private-gap);

    &.hasChunks {
        flex-wrap: nowrap;
        flex-direction: column;

        &.vertical {
            flex-direction: row;
        }
    }

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
            grid-template-columns: auto;
            grid-template-rows: repeat(var(--plasma-private-items), auto);
            grid-auto-flow: column;

            &[data-arrangement='start'] {
                align-items: start;
            }

            &[data-arrangement='center'] {
                align-items: center;
            }

            &[data-arrangement='end'] {
                align-items: end;
            }

            &[data-arrangement='spaceBetween'] {
                align-content: space-between;
                align-items: normal;
            }

            &[data-arrangement='spaceAround'] {
                align-content: space-around;
                align-items: normal;
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

    &:not(&.grid):not(&.hasChunks) {
        align-content: start;

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

export const Line = styled.div`
    display: flex;
    height: 100%;

    gap: var(--plasma-private-gap);

    &.vertical {
        flex-direction: column;
        height: 100%;
    }

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
`;
