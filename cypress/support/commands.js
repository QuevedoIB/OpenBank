import i18n from '../../src/locale';

Cypress.Commands.add('fillStep1', () => {
    cy.get('input[name="terms"]').click();

    cy.contains(i18n.t('common.next'))
        .closest('button[type="submit"]')
        .should('not.be.disabled')
        .click();
});
