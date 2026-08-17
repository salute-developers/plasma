/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import {
    addTypographRule,
    createTypograph,
    dash,
    defaultTypographRules,
    quotes,
    setTypographRules,
    typograph,
} from './typograph';
import { withTypograph } from './typograph/withTypograph';

describe('plasma-giga: ResponsiveTypography', () => {
    const BodyL = getComponent('BodyL');
    const BodyM = getComponent('BodyM');
    const BodyS = getComponent('BodyS');
    const BodyXS = getComponent('BodyXS');
    const BodyXXS = getComponent('BodyXXS');
    const DsplL = getComponent('DsplL');
    const DsplM = getComponent('DsplM');
    const DsplS = getComponent('DsplS');
    const H1 = getComponent('H1');
    const H2 = getComponent('H2');
    const H3 = getComponent('H3');
    const H4 = getComponent('H4');
    const H5 = getComponent('H5');
    const H6 = getComponent('H6');
    const TextL = getComponent('TextL');
    const TextM = getComponent('TextM');
    const TextS = getComponent('TextS');
    const TextXS = getComponent('TextXS');

    const body = (
        <CypressTestDecorator>
            <BodyL>BodyL</BodyL>
            <BodyL bold>BodyL Semibold</BodyL>
            <BodyM>BodyM</BodyM>
            <BodyM bold>BodyM Semibold</BodyM>
            <BodyS>BodyS</BodyS>
            <BodyS bold>BodyS Semibold</BodyS>
            <BodyXS>BodyXS</BodyXS>
            <BodyXS bold>BodyXS Semibold</BodyXS>
            <BodyXXS>BodyXXS</BodyXXS>
            <BodyXXS bold>BodyXXS Semibold</BodyXXS>
        </CypressTestDecorator>
    );
    const dspl = (
        <CypressTestDecorator>
            <DsplL bold={false}>DsplL</DsplL>
            <DsplL breakWord>DsplL Semibold</DsplL>
            <DsplM bold={false}>DsplM</DsplM>
            <DsplM>DsplM Semibold</DsplM>
            <DsplS bold={false}>DsplS</DsplS>
            <DsplS>DsplS Semibold</DsplS>
        </CypressTestDecorator>
    );
    const headings = (
        <CypressTestDecorator>
            <H1 bold={false}>H1</H1>
            <H1>H1 Semibold</H1>
            <H2 bold={false}>H2</H2>
            <H2>H2 Semibold</H2>
            <H3 bold={false}>H3</H3>
            <H3>H3 Semibold</H3>
            <H4 bold={false}>H4</H4>
            <H4>H4 Semibold</H4>
            <H5 bold={false}>H5</H5>
            <H5>H5 Semibold</H5>
            <H6 bold={false}>H6</H6>
            <H6>H6 Semibold</H6>
        </CypressTestDecorator>
    );
    const text = (
        <CypressTestDecorator>
            <TextL>TextL</TextL>
            <TextL bold>TextL Semibold</TextL>
            <TextM>TextM</TextM>
            <TextM bold>TextM Semibold</TextM>
            <TextS>TextS</TextS>
            <TextS bold>TextS Semibold</TextS>
            <TextXS>TextXS</TextXS>
            <TextXS bold>TextXS Semibold</TextXS>
        </CypressTestDecorator>
    );

    it('Body @375px', () => {
        mount(body);

        cy.viewport(375, 667);
        cy.matchImageSnapshot();
    });

    it('Body @758px', () => {
        mount(body);

        cy.viewport(768, 1024);
        cy.matchImageSnapshot();
    });

    it('Body @1366px', () => {
        mount(body);

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('Dspl @375px', () => {
        mount(dspl);

        cy.viewport(375, 667);
        cy.matchImageSnapshot();
    });

    it('Dspl @768px', () => {
        mount(dspl);

        cy.viewport(768, 1024);
        cy.matchImageSnapshot();
    });

    it('Dspl @1366px', () => {
        mount(dspl);

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('H @375px', () => {
        mount(headings);

        cy.viewport(375, 667);
        cy.matchImageSnapshot();
    });

    it('H @768px', () => {
        mount(headings);

        cy.viewport(768, 1024);
        cy.matchImageSnapshot();
    });

    it('H @1366px', () => {
        mount(headings);

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('Text @375px', () => {
        mount(text);

        cy.viewport(375, 667);
        cy.matchImageSnapshot();
    });

    it('Text @768px', () => {
        mount(text);

        cy.viewport(768, 1024);
        cy.matchImageSnapshot();
    });

    it('Text @1366px', () => {
        mount(text);

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });
});

const NBSP = '\u00A0';

describe('plasma-giga: typograph', () => {
    afterEach(() => {
        setTypographRules(defaultTypographRules);
    });

    describe('кавычки', () => {
        it('заменяет прямые кавычки на ёлочки', () => {
            expect(typograph('он сказал "привет" вчера')).to.equal(`он${NBSP}сказал «привет» вчера`);
        });

        it('вкладывает лапки во второй уровень', () => {
            expect(typograph('журнал "Вестник "Науки" сегодня"')).to.equal('журнал «Вестник „Науки“ сегодня»');
        });

        it('открывает кавычку в начале куска — парность не нужна', () => {
            expect(typograph('"начало')).to.equal('«начало');
        });

        it('закрывает кавычку после слова, даже если открывающая осталась в другом куске', () => {
            expect(typograph('важно" и дальше')).to.equal(`важно» и${NBSP}дальше`);
        });

        it('открывает кавычку после открывающей скобки', () => {
            expect(typograph('текст ("цитата")')).to.equal('текст («цитата»)');
        });

        it('не трогает текст без кавычек', () => {
            expect(typograph('обычный текст')).to.equal('обычный текст');
        });
    });

    describe('неразрывные пробелы', () => {
        it('привязывает предлог к следующему слову', () => {
            expect(typograph('в лесу')).to.equal(`в${NBSP}лесу`);
        });

        it('обрабатывает цепочку коротких слов подряд', () => {
            expect(typograph('и в не лесу')).to.equal(`и${NBSP}в${NBSP}не${NBSP}лесу`);
        });

        it('не трогает слова длиннее двух букв', () => {
            expect(typograph('под деревом')).to.equal('под деревом');
        });

        it('не привязывает окончание слова, похожее на предлог', () => {
            expect(typograph('поле в поле')).to.equal(`поле в${NBSP}поле`);
        });

        it('работает с латиницей', () => {
            expect(typograph('at home')).to.equal(`at${NBSP}home`);
        });
    });

    describe('тире', () => {
        it('прижимает длинное тире к предыдущему слову', () => {
            expect(typograph('ГигаЧат — помощник')).to.equal(`ГигаЧат${NBSP}— помощник`);
        });

        it('прижимает среднее тире', () => {
            expect(typograph('строки 10 – 20')).to.equal(`строки 10${NBSP}– 20`);
        });

        it('не трогает дефис внутри слова', () => {
            expect(typograph('из-за угла')).to.equal('из-за угла');
        });

        it('заменяет все обычные пробелы перед тире', () => {
            expect(typograph('слово  — далее')).to.equal(`слово${NBSP}— далее`);
        });
    });

    describe('безопасность на стриминге', () => {
        it('результат для префикса — префикс результата для целого', () => {
            const full = 'он сказал "это очень важно" и ушёл';

            for (let i = 1; i <= full.length; i += 1) {
                const prefixResult = typograph(full.slice(0, i));
                const fullResult = typograph(full);

                expect(fullResult.startsWith(prefixResult.slice(0, -1))).to.equal(true);
            }
        });

        it('не ломается на пустой строке', () => {
            expect(typograph('')).to.equal('');
        });
    });

    describe('URL', () => {
        it('не трогает кавычки внутри URL', () => {
            const text = 'зайди на https://example.com/a?b="c и посмотри';
            const result = typograph(text);

            expect(result).to.include('https://example.com/a?b="c');
            expect(result).to.not.include('»c');
            expect(result).to.not.include('«c');
        });

        it('не забирает закрывающую кавычку из обёртки URL', () => {
            expect(typograph('"https://example.test"')).to.equal('«https://example.test»');
        });
    });

    describe('рантайм', () => {
        it('addTypographRule добавляет правило в дефолтный пайплайн', () => {
            addTypographRule((text) => text.replace(/\(c\)/gi, '©'));

            expect(typograph('(c) 2026')).to.equal('© 2026');
        });

        it('createTypograph собирает кастомный пайплайн', () => {
            const compact = createTypograph([quotes, dash]);

            expect(compact('и в лесу — "цитата"')).to.equal(`и в лесу${NBSP}— «цитата»`);
        });

        it('кастомное правило с заменой цифр не ломает URL', () => {
            const withDigits = createTypograph([(text) => text.replace(/\d/g, '#')]);

            expect(withDigits('см https://example.com/a1 и 2')).to.equal('см https://example.com/a1 и #');
        });
    });
});

describe('plasma-giga: withTypograph', () => {
    const TextM = withTypograph(getComponent('TextM'));

    afterEach(() => {
        setTypographRules(defaultTypographRules);
    });

    it('обрабатывает строковых children', () => {
        mount(
            <CypressTestDecorator>
                <TextM data-testid="typo">{'в лесу — "привет"'}</TextM>
            </CypressTestDecorator>,
        );

        cy.get('[data-testid="typo"]').should('have.text', `в${NBSP}лесу${NBSP}— «привет»`);
    });

    it('не обрабатывает текст без HOC', () => {
        const PlainTextM = getComponent('TextM');

        mount(
            <CypressTestDecorator>
                <PlainTextM data-testid="typo">{'в лесу — "привет"'}</PlainTextM>
            </CypressTestDecorator>,
        );

        cy.get('[data-testid="typo"]').should('have.text', 'в лесу — "привет"');
    });

    it('не трогает смешанных children', () => {
        mount(
            <CypressTestDecorator>
                <TextM data-testid="typo">
                    в лесу <span>и ещё</span>
                </TextM>
            </CypressTestDecorator>,
        );

        cy.get('[data-testid="typo"]').should('have.text', 'в лесу и ещё');
    });

    it('принимает кастомный пайплайн', () => {
        mount(
            <CypressTestDecorator>
                <TextM data-testid="typo" typograph={[quotes]}>
                    {'в лесу "привет"'}
                </TextM>
            </CypressTestDecorator>,
        );

        cy.get('[data-testid="typo"]').should('have.text', 'в лесу «привет»');
    });

    it('typograph={false} отключает обработку', () => {
        mount(
            <CypressTestDecorator>
                <TextM data-testid="typo" typograph={false}>
                    {'в лесу — "привет"'}
                </TextM>
            </CypressTestDecorator>,
        );

        cy.get('[data-testid="typo"]').should('have.text', 'в лесу — "привет"');
    });
});
