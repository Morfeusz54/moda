// <reference types="cypress" />


import logowanie from "./logowanie"
describe('Logowanie do strony',function (){ 
    before(function () {
        cy.fixture('dane').then(function (testdata) {
            this.testdata = testdata
        })
    })
    it("Test nazwy",function (){
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('contain','My Store')
        
        })
    
    it("Logowanie", function () {
        const login = new logowanie();
        
        login.navigate(); //otwarcie strony www
        
        
        login._email(this.testdata); // czemu to nie działa
        cy.get('#email_create').type('users@example.org')
        
        cy.get('#SubmitCreate > span').click() //klikam utworz konto

        cy.get(':nth-child(3) > .top').click() // druga strona


        cy.get('#customer_firstname').type('Jan') // imie 
        cy.get('#customer_lastname').type('Nowak') // nazwisko

        login._email1();
        login._password(this.testdata); // to nie działa
        
        cy.get('#passwd').type('12345');
        
        cy.get('#days').select('12')
        cy.get('#months').select('1')
        cy.get('#months').should('contain','March')
        cy.get('#years').select('1999')
        cy.get('#firstname').type('Jan')
        cy.get('#lastname').type('Nowak')
        cy.get('#address1').type('12 Warszawska')
        cy.get('#city').type('Białystok')
        cy.get('#id_state').select('Alabama')
        cy.get('#id_state').should('contain','Iowa')
        cy.get('#postcode').type('podlaskie')
        
        cy.get('#id_country').type('Polska')
        cy.get('#id_country').should('contain','United States')
        login._notatka(); 
        cy.get('#phone_mobile').type('88888877')
        cy.get('#alias').type('users1@example.org')
    })




it('Formularz zakupowy', function() {
    cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category")
    cy.get(':nth-child(1) > .subcategory-image > .img > .replace-2x')
    cy.get('#selectProductSort').select('In stock')
    cy.get('#selectProductSort')
    

})
})
        
