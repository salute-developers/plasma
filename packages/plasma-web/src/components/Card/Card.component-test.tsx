import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const src = 'images/320_320_0.jpg';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Card', () => {
    const Card = getComponent('Card');
    const CardBody = getComponent('CardBody');
    const CardContent = getComponent('CardContent');
    const CardMedia = getComponent('CardMedia');
    const CardBadge = getComponent('CardBadge');
    const BodyM = getComponent('BodyM');
    const H4 = getComponent('H4');

    // TODO: Перетащить подключение StandardTypoStyle в @salutejs/plasma-cy-utils
    // после переезда на новую типографику для @salutejs/plasma-web - https://github.com/salute-developers/plasma/issues/69
    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('default', () => {
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

    it('with background', () => {
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

    it('with cover', () => {
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
});
