import i18n from '../../../src/locale';

describe('Create password flow', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Renders correctly', () => {
        cy.contains(i18n.t('createPassword.title'));
    });

    it('First step renders information images', () => {
        cy.get('img[alt="Information"]')
            .parent()
            .contains(i18n.t('createPassword.step1.settingsImageFooter'));

        cy.get('img[alt="Seccurity"]')
            .parent()
            .contains(i18n.t('createPassword.step1.boxImageFooter'));
    });

    it('First step renders usage information', () => {
        cy.contains(i18n.t('createPassword.step1.workLabel'))
            .parent()
            .contains(i18n.t('createPassword.common.workContent'));

        cy.contains(i18n.t('createPassword.step1.dataLabel'))
            .parent()
            .contains(i18n.t('createPassword.step1.dataContent'));
    });

    it('First step disables if user does not accept ToS', () => {
        cy.contains(i18n.t('common.next'))
            .closest('button[type="submit"]')
            .as('submitButton')
            .should('not.be.disabled');

        cy.get('@submitButton').click();

        cy.get('@submitButton').should('be.disabled');

        cy.get('input[name="terms"]').click();

        cy.get('@submitButton').should('not.be.disabled');
    });

    it('First step shows an error alerting user that ToS are required', () => {
        cy.get('input[name="terms"]').click().click();

        cy.get('input[name="terms"]')
            .parent()
            .get('p.error-message')
            .contains(i18n.t('forms.errors.required'));
    });

    it('Second step disables if data is incorrect', () => {
        cy.fillStep1();

        cy.get('.error-message').should('not.exist');

        cy.contains(i18n.t('common.next'))
            .closest('button[type="submit"]')
            .as('submitButton')
            .click();

        cy.get('input[name="password"]')
            .as('passwordInput')
            .parents('.input-wrapper')
            .contains(i18n.t('forms.errors.required'));

        cy.get('input[name="repeatPassword"]')
            .as('repeatPassword')
            .parents('.input-wrapper')
            .contains(i18n.t('forms.errors.required'));

        cy.get('@submitButton').should('be.disabled');

        cy.get('@passwordInput').type('1234567');

        cy.get('@passwordInput')
            .parents('.input-wrapper')
            .contains(i18n.t('forms.errors.minLength', { value: 8 }));

        cy.get('@passwordInput').type('8');

        cy.get('@passwordInput')
            .parents('.input-wrapper')
            .contains(i18n.t('forms.errors.password.format'));

        cy.get('@passwordInput').type('A');

        cy.get('@passwordInput')
            .parents('.input-wrapper')
            .within(() => {
                cy.get('.error-message').should('not.exist');
            });

        cy.get('@repeatPassword')
            .type('1234567')
            .parents('.input-wrapper')
            .contains(i18n.t('forms.errors.password.notMatch'));

        cy.get('@repeatPassword')
            .type('8A')
            .parents('.input-wrapper')
            .within(() => {
                cy.get('.error-message').should('not.exist');
            });
    });

    it('Hint validation works correctly', () => {
        cy.fillStep1();

        const HINT_MAX_LENGTH = 255;

        cy.get('input[name="hint"]')
            .as('hintInput')
            .type(new Array(HINT_MAX_LENGTH + 2).join('a'));

        cy.get('@hintInput')
            .parents('.input-wrapper')
            .within(() => {
                cy.get('.error-message').contains(
                    i18n.t('forms.errors.maxLength', { value: HINT_MAX_LENGTH })
                );
                cy.get('@hintInput').clear();
                cy.get('.error-message').should('not.exist');
            });
    });

    it('Step 3 gives success feedback', () => {
        cy.fillStep1();

        cy.get('input[name="password"]').type('12345678A');
        cy.get('input[name="repeatPassword"]').type('12345678A');

        cy.contains(i18n.t('common.next'))
            .closest('button[type="submit"]')
            .click();

        cy.get('.feedback-container.success');
    });

    it('Step 3 gives error feedback', () => {
        cy.fillStep1();

        cy.get('input[name="password"]').type('pruebaKO123');
        cy.get('input[name="repeatPassword"]').type('pruebaKO123');

        cy.contains(i18n.t('common.next'))
            .closest('button[type="submit"]')
            .click();

        cy.get('.feedback-container.error');
    });
});
