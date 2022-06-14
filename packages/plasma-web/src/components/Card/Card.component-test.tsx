import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const src = 'images/320_320_0.jpg';

describe('plasma-web: Card', () => {
    const Card = getComponent('Card');
    const CardBody = getComponent('CardBody');
    const CardContent = getComponent('CardContent');
    const CardMedia = getComponent('CardMedia');
    const CardBadge = getComponent('CardBadge');
    const Body1 = getComponent('Body1');
    const Headline4 = getComponent('Headline4');

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <Card style={{ width: '50%', color: 'white' }} scaleOnFocus>
                    <CardBody>
                        <CardMedia src={src} placeholder={src} ratio="1/1" />
                        <CardBadge style={{ left: '1rem', top: '1rem' }} text="Test in badge" />
                        <CardContent>
                            <Body1>Label</Body1>
                            <Headline4>Tittle</Headline4>
                            <Body1>description</Body1>
                        </CardContent>
                    </CardBody>
                </Card>
            </CypressTestDecorator>,
        );

        cy.mockImage('img', 'images/320_320_0.jpg');
        cy.matchImageSnapshot();
    });
});
