import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const src = 'images/320_320_0.jpg';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Card', () => {
    const Card = getComponent('Card');
    const CardBody = getComponent('CardBody');
    const CardContent = getComponent('CardContent');
    const CardMedia = getComponent('CardMedia');
    const CardBadge = getComponent('CardBadge');
    const BodyM = getComponent('BodyM');
    const H4 = getComponent('H4');

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T710] Card: default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Card style={{ width: '50%', color: 'black' }} scaleOnFocus>
                    <CardBody>
                        <CardMedia src={src} placeholder={src} ratio="1/1" />
                        <CardBadge style={{ left: '1rem', top: '1rem' }} text="Test in badge" />
                        <CardContent>
                            <BodyM>Label</BodyM>
                            <H4 bold>Tittle</H4>
                            <BodyM>description</BodyM>
                        </CardContent>
                    </CardBody>
                </Card>
            </CypressTestDecoratorWithTypo>,
        );

        cy.mockImage('img', 'images/320_320_0.jpg');
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T711] Card: roundness=0', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Card style={{ width: '50%', color: 'black' }} scaleOnFocus roundness="0">
                    <CardBody>
                        <CardMedia src={src} placeholder={src} ratio="1/1" />
                        <CardBadge style={{ left: '1rem', top: '1rem' }} text="Test in badge" />
                        <CardContent>
                            <BodyM>Label</BodyM>
                            <H4 bold>Tittle</H4>
                            <BodyM>description</BodyM>
                        </CardContent>
                    </CardBody>
                </Card>
            </CypressTestDecoratorWithTypo>,
        );

        cy.mockImage('img', 'images/320_320_0.jpg');
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1203] Card: with background', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Card style={{ width: '50%', color: 'black' }} scaleOnFocus background="cadetblue">
                    <CardBody>
                        <CardMedia src={src} placeholder={src} ratio="1/1" />
                        <CardBadge style={{ left: '1rem', top: '1rem' }} text="Test in badge" />
                        <CardContent>
                            <BodyM>Label</BodyM>
                            <H4 bold>Tittle</H4>
                            <BodyM>description</BodyM>
                        </CardContent>
                    </CardBody>
                </Card>
            </CypressTestDecoratorWithTypo>,
        );

        cy.mockImage('img', 'images/320_320_0.jpg');
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1204] Card: with cover, enableCoverGradient', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Card style={{ width: '50%', color: 'white' }} scaleOnFocus>
                    <CardBody>
                        <CardMedia src={src} placeholder={src} ratio="1/1" />
                        <CardBadge style={{ left: '1rem', top: '1rem' }} text="Test in badge" />
                        <CardContent cover>
                            <BodyM>Label</BodyM>
                            <H4 bold>Tittle</H4>
                            <BodyM>description</BodyM>
                        </CardContent>
                    </CardBody>
                </Card>
            </CypressTestDecoratorWithTypo>,
        );

        cy.mockImage('img', 'images/320_320_0.jpg');
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1205] Card: with cover', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Card style={{ width: '50%', color: 'white' }} scaleOnFocus>
                    <CardBody>
                        <CardMedia src={src} placeholder={src} ratio="1/1" />
                        <CardBadge style={{ left: '1rem', top: '1rem' }} text="Test in badge" />
                        <CardContent cover coverGradient={false}>
                            <BodyM>Label</BodyM>
                            <H4 bold>Tittle</H4>
                            <BodyM>description</BodyM>
                        </CardContent>
                    </CardBody>
                </Card>
            </CypressTestDecoratorWithTypo>,
        );

        cy.mockImage('img', 'images/320_320_0.jpg');
        cy.matchImageSnapshot();
    });
});
