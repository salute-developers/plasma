import React from 'react';
import ReactDom from 'react-dom';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconDownload } from '@salutejs/plasma-icons';

const Cell = getComponent('Cell');
const CellIcon = getComponent('CellIcon');
const CellListItem = getComponent('CellListItem');
const CellDisclosure = getComponent('CellDisclosure');
const TextBox = getComponent('TextBox');

const src = 'images/avocado.png';

const Icon = ({ size }) => <CellIcon size={size} as="img" alt="avocado" src={src} />;

const title = 'Hello World of Plasma';
const subTitle = 'Use with wisdom';

describe('plasma-ui: Cell', () => {
    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Cell content={<TextBox title={title} subTitle={subTitle} />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('__icon', () => {
        mount(
            <CypressTestDecorator>
                <Cell contentLeft={<Icon />} content={<TextBox title={title} subTitle={subTitle} />} />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', src);
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('__icon_size', () => {
        mount(
            <CypressTestDecorator>
                {['xs', 's', 'm', 'l', 'xl', 'xxl'].map((size) => (
                    <Cell
                        key={size}
                        contentLeft={<Icon size={size} />}
                        content={<TextBox title={title} subTitle={subTitle} />}
                    />
                ))}
            </CypressTestDecorator>,
        );

        cy.mockImage('img', src);
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('__right', () => {
        const content = <TextBox title={title} subTitle={subTitle} />;

        mount(
            <CypressTestDecorator>
                <Cell contentLeft={<Icon />} content={content} contentRight={<Icon />} />
                <Cell contentLeft={<Icon />} content={content} contentRight={<TextBox title="Details" />} />
                <Cell
                    contentLeft={<Icon />}
                    content={content}
                    contentRight={<TextBox title="Details" subTitle="info" />}
                />
                <Cell
                    contentLeft={<Icon />}
                    content={content}
                    contentRight={
                        <>
                            <TextBox title="Details" subTitle="info" />
                            <Icon size="s" />
                        </>
                    }
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', src);
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('_align_left', () => {
        const content = <TextBox label="indeed" caption="Скидка 42%" title={title} subTitle={subTitle} />;

        mount(
            <CypressTestDecorator>
                {['top', 'center', 'bottom'].map((alignLeft) => (
                    <>
                        <Cell
                            key={alignLeft}
                            alignLeft={alignLeft}
                            contentLeft={<Icon />}
                            content={content}
                            contentRight={<TextBox title="Details" subTitle="info" />}
                        />
                        <hr />
                    </>
                ))}
            </CypressTestDecorator>,
        );

        cy.mockImage('img', src);
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('_align_right', () => {
        const content = <TextBox label="indeed" caption="Скидка 42%" title={title} subTitle={subTitle} />;

        mount(
            <CypressTestDecorator>
                {['top', 'center'].map((alignRight) => (
                    <>
                        <Cell
                            key={alignRight}
                            alignRight={alignRight}
                            contentLeft={<Icon />}
                            content={content}
                            contentRight={<TextBox title="Details" subTitle="info" />}
                        />
                        <hr />
                    </>
                ))}
            </CypressTestDecorator>,
        );

        cy.mockImage('img', src);
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('_list_item', () => {
        mount(
            <CypressTestDecorator>
                <div>
                    <CellListItem
                        contentLeft={<Icon />}
                        content={<TextBox label="lonely" title={title} subTitle={subTitle} />}
                        contentRight={<CellDisclosure />}
                    />
                </div>
                <CellListItem
                    contentLeft={<Icon />}
                    content={<TextBox title={title} subTitle={subTitle} />}
                    contentRight={<CellDisclosure />}
                />
                <CellListItem
                    contentLeft={<Icon />}
                    content={<TextBox title={title} subTitle={subTitle} />}
                    contentRight={<CellDisclosure />}
                />
                <CellListItem
                    contentLeft={<Icon />}
                    content={<TextBox title={title} subTitle={subTitle} />}
                    contentRight={<CellDisclosure />}
                />
            </CypressTestDecorator>,
        );

        cy.mockImage('img', src);
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });
});
