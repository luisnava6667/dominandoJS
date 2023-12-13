/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la muestra', () => {
    it('campos nueva cita', () => {

        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=mascota-input]')
            .type('Hook');

        cy.get('[data-cy=propietario-input]')
            .type('Luis');

        cy.get('[data-cy=telefono-input]')
            .type('13981398389');

        cy.get('[data-cy=fecha-input]')
            .type('2023-12-03');

        cy.get('[data-cy=hora-input]')
            .type('20:30');

        cy.get('[data-cy=sintomas-textarea]')
            .type('El gato solo come y duerme');

        cy.get('[data-cy=submit-cita]')
            .click();

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

            // seleccionar la alerta
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')
    
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success')

    });
});