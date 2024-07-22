import { storybookRangeUrl } from '../constants/constants';
import { Range } from '../constants/selectors';
import { waitForStoryLoading } from '../utils/actions';

describe('b2c-controls-range', () => {
    it('[PLASMA-T984] Отображается дефолтный Range', () => {
        cy.visit(storybookRangeUrl.default);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T985] Отображается disabled Range', () => {
        cy.visit(storybookRangeUrl.disabled);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T986] Отображается readonly Range', () => {
        cy.visit(storybookRangeUrl.readonly);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T987] Отображается Range без левого контента размера m', () => {
        cy.visit(storybookRangeUrl.sizeM_contentLeftDisabled);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T988] Отображается Range без правого контента размера s', () => {
        cy.visit(storybookRangeUrl.sizeS_contentRightDisabled);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T989] Отображается Range без разделителя размера xs', () => {
        cy.visit(storybookRangeUrl.sizeXS_dividerVariantNone);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T990] Отображается Range со стрелочным разделителем и левым контентом первого поля', () => {
        cy.visit(storybookRangeUrl.firstTextfieldContentLeftEnabled_dividerVariantIcon);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T991] Отображается Range с правым контентом первого поля и левым контентом второго поля', () => {
        cy.visit(storybookRangeUrl.firstTextfieldContentRightEnabled_secondTextfieldContentLeftEnabled);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1001] Отображается Range с правым контентом второго поля', () => {
        cy.visit(storybookRangeUrl.secondTextfieldContentRightEnabled);

        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1002] Отображается Range с ошибкой в первом поле и успехом во втором поле', () => {
        cy.visit(storybookRangeUrl.firstValueError_secondValueSuccess);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1003] Отображается Range с успехом в первом поле и ошибкой во втором поле', () => {
        cy.visit(storybookRangeUrl.firstValueSuccess_secondValueError);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1004] Отображается Range с успехом в обоих полях', () => {
        cy.visit(storybookRangeUrl.firstValueSuccess_secondValueSuccess);
        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1005] Отображается Range с ошибкой в обоих полях', () => {
        cy.visit(storybookRangeUrl.firstValueError_secondValueError);

        waitForStoryLoading(Range.label);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1006] Отображается Range с выделенным первым полем', () => {
        cy.visit(storybookRangeUrl.default);
        waitForStoryLoading(Range.label);

        cy.get(Range.inputs).first().click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1016] Отображается Range с выделенным вторым полем', () => {
        cy.visit(storybookRangeUrl.default);
        waitForStoryLoading(Range.label);

        cy.get(Range.inputs).last().click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1008] Отображается валидация успеха в первом поле и валидация ошибки во втором поле', () => {
        cy.visit(storybookRangeUrl.demo);
        waitForStoryLoading(Range.label);

        cy.get(Range.inputs).first().type('2').type('{enter}');
        cy.get(Range.inputs).last().type('1').type('{enter}');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1009] Отображается валидация ошибки в первом поле и валидация успеха во втором поле', () => {
        cy.visit(storybookRangeUrl.demo);
        waitForStoryLoading(Range.label);

        cy.get(Range.inputs).last().type('1').type('{enter}');
        cy.get(Range.inputs).first().type('2').type('{enter}');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1010] Отображается валидация успеха в обоих полях', () => {
        cy.visit(storybookRangeUrl.demo);
        waitForStoryLoading(Range.label);

        cy.get(Range.inputs).first().type('1').type('{enter}');
        cy.get(Range.inputs).last().type('2').type('{enter}');
        cy.get(Range.label).click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1011] Отображается валидация ошибки в обоих полях', () => {
        cy.visit(storybookRangeUrl.demo);
        waitForStoryLoading(Range.label);

        cy.get(Range.inputs).last().type('11').type('{enter}');
        cy.get(Range.inputs).first().type('12').type('{enter}');
        cy.get(Range.label).click();

        cy.matchImageSnapshot();
    });
});
