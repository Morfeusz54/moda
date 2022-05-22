// <reference types="cypress" />




it.only('login test', function(){
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email_create').type('user@example.org')
    cy.get('#SubmitCreate > span').click()
    
    cy.get(':nth-child(3) > .top').click()
    cy.get('#customer_firstname').type('Jan')
    cy.get('#customer_lastname').type('Nowak')
    //cy.get('#email').type('user@example.org')
    cy.get('#passwd').type('12345')
    cy.get('#days').type('12')
    cy.get('#months').type('2')
    cy.get('#years').type('1999')
    cy.get('#firstname').type('Jan')
    cy.get('#lastname').type('Nowak')
    cy.get('#address1').type('12 Warszwska')
    cy.get('#city').type('Białystok')
    cy.get('#id_state').type('Alabama')
    cy.get('#postcode').type('podlaskie')
    cy.get('#id_country').type('Polska')
    cy.get('#phone_mobile').type('88888877')
    cy.get('#alias').type('user1@example.org')
})