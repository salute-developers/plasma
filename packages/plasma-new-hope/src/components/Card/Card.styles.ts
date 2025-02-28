import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens } from './Card.tokens';

export const Inner = styled.div`
    position: relative;

    display: flex;
    border-radius: var(${tokens.borderRadius});
    overflow: hidden;

    width: 100%;
`;

export const InnerContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;

    &.horizontal {
        flex-direction: row;
    }

    &.vertical {
        flex-direction: column;
    }
`;

export const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0;

    //word-break: break-word;
`;

export const CardContent = styled.div`
    display: flex;
    flex: 1 0;
`;

export const Image = styled.div`
    border-radius: var(${tokens.borderRadius});
    overflow: hidden;
    z-index: -1;
    width: 100%;
`;

export const base = css`
    position: relative;
    display: inline-flex;

    box-sizing: border-box;
    border-radius: var(${tokens.borderRadius});
    border-width: var(${tokens.borderWidth});

    z-index: 0;

    //overflow: hidden;

    &.selected {
        position: relative;

        :after {
            content: '';
            display: block;
            position: absolute;
            inset: 0;
            border: var(${tokens.borderWidth}) solid tomato;
            border-radius: var(${tokens.borderRadius});
            z-index: -1;
        }
    }

    &.backgroundSolid {
        border: var(${tokens.outlineWidth}) solid var(${tokens.solidBackground});
        border: var(${tokens.outlineWidth}) solid lightseagreen;

        ${Inner} {
                //margin: calc(-1 * var(${tokens.outlineWidth}));
        }

        ${InnerContent} {
                //inset: calc(-1 * var(${tokens.outlineWidth}));
        }

        :before {
            content: '';
            position: absolute;
            inset: 0;
            background: lightseagreen;
            border-radius: 0;
            z-index: -1;
        }

        &.selected {
            :after {
                inset: calc(-1 * var(${tokens.outlineWidth}));
            }
        }
    }

    &.backgroundColor {
        border: var(${tokens.outlineWidth}) solid var(${tokens.colorBackground});
        border: var(${tokens.outlineWidth}) solid lightseagreen;

        ${Inner} {
                //margin: calc(-1 * var(${tokens.outlineWidth}));
        }

        ${InnerContent} {
                //padding: var(${tokens.outlineWidth});
        }

        :before {
            content: '';
            position: absolute;
            inset: 0;
            background: lightseagreen;
            z-index: -1;
        }


        &.selected {
            position: relative;

            :after {
                inset: calc(-1 * var(${tokens.outlineWidth}));
            }
        }
    }

    &.horizontal {
        ${CardTitle} {
            //height: 100%;
            align-items: center;
            justify-content: center;
        }
    }

    &.vertical {
        ${CardTitle} {
            //height: 100%;
            align-items: center;
            justify-content: center;
        }

        //display: flex;
        flex-direction: column;
    }
`;
