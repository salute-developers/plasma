import { storybookButtonUrl } from '../constants/constants';
import { Button } from '../constants/selectors';
import { waitForStoryLoading } from '../utils/actions';

describe('b2c-controls-button', () => {
    it('[PLASMA-T678] Отображается default Button размера m', () => {
        cy.visit(storybookButtonUrl.default);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T870] Отображается accent Button размера l', () => {
        cy.visit(storybookButtonUrl.sizeL_accent);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T871] Отображается success Button размера s', () => {
        cy.visit(storybookButtonUrl.sizeS_success);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T872] Отображается warning Button размера xs', () => {
        cy.visit(storybookButtonUrl.sizeXS_warning);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T873] Отображается critical Button размера xxs', () => {
        cy.visit(storybookButtonUrl.sizeXXS_critical);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T874] Отображается dark Button с лоадером', () => {
        cy.visit(storybookButtonUrl.loader_dark);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T875] Отображается light Button', () => {
        cy.visit(storybookButtonUrl.light);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T876] Отображается квадратный Button', () => {
        cy.visit(storybookButtonUrl.square);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T877] Отображается растянутый Button', () => {
        cy.visit(storybookButtonUrl.stretch_filled);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T878] Отображается disabled Button', () => {
        cy.visit(storybookButtonUrl.disabled);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1012] Отображается фиксированно растянутый Button', () => {
        cy.visit(storybookButtonUrl.stretch_fixed);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1013] Отображается Button с контентом слева и справа', () => {
        cy.visit(storybookButtonUrl.enableContentLeft_enableContentRight);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1014] Отображается квадратный Button с контентом слева', () => {
        cy.visit(storybookButtonUrl.square_enableContentLeft);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1015] Отображается квадратный Button с контентом справа', () => {
        cy.visit(storybookButtonUrl.square_enableContentRight);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1017] Отображается Button square-clear', () => {
        cy.visit(storybookButtonUrl.square_clear);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1018] Отображается Button clear-square', () => {
        cy.visit(storybookButtonUrl.clear_square);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1019] Отображается Button clear-clear', () => {
        cy.visit(storybookButtonUrl.clear_clear);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1020] Отображается Button clear-circle', () => {
        cy.visit(storybookButtonUrl.clear_circle);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1021] Отображается Button circle-clear', () => {
        cy.visit(storybookButtonUrl.circle_clear);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1021] Отображается Button circle-circle', () => {
        cy.visit(storybookButtonUrl.circle_circle);
        waitForStoryLoading(Button.button);

        cy.matchImageSnapshot();
    });
});
