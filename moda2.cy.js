// <reference types="cypress" />


import logowanie from "./logowanie"
describe('Logowanie do strony',function (){ 
    beforeEach(function () {
        cy.fixture('dane').then(function ($testdata) {
            this.testdata = $testdata
            
        })
        
    })
    it("Test nazwy",function (){
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('contain','My Store')
        
        })
    
    it("Logowanie", function () {
        const login = new logowanie();
        
        login.navigate(); //otwarcie strony www
        
        
        login.typeemail(this.testdata.mail); // wpisanie mail
        
        login.submit(); //klikam utworz konto
        
    })

       // cy.get(':nth-child(3) > .top').click() // druga strona

       it("Formularz", function () {
        const login = new logowanie();

        cy.get('#id_gender1').click() //wybor plci
        cy.get('#customer_firstname').type('Jan') // imie 
        cy.get('#customer_lastname').type('Nowak') // nazwisko

        login.typemail1(this.testdata.mail); //wpisanie mail w formularz
        login.password(this.testdata.pass) // wpisanie hasła
             
        cy.get('#days').select('12') // urodziny wybranie dnia
        cy.get('#months').select('1') // urodziny wybranie miesiac
        cy.get('#months').should('contain','March') // sprawdzenie czy jest marzec
        cy.get('#years').select('1999') // urodziny wybranie rok
        cy.get('#firstname').type('Jan') // wpisanie imienia
        cy.get('#lastname').type('Nowak') //wpisanie nazwiska
        cy.get('#address1').type('12 Warszawska') //wpisanie adresu
        cy.get('#city').type('Białystok') //wpisanie miasta
        cy.get('#id_state').select('Alabama') //wpisanie stanu
        cy.get('#id_state').should('contain','Iowa') // sprawdzenie czy jest iowa
        cy.get('#postcode').type('podlaskie') //wpisanie kodu pocztowego
        cy.get('#id_country').type('Polska') //wpisanie kraju
        cy.get('#id_country').should('contain','United States') // sprawdzenie czy jest usa
        login.notatka(this.testdata.tekst); 
        cy.get('#phone_mobile').type('88888877') //wpisanie telefonu
        cy.get('#alias').type('users1@example.org') //wpisanie maila
    })




it('Formularz zakupowy', function() {
    cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category")
   cy.get(':nth-child(1) > .subcategory-image > .img > .replace-2x')
  cy.get('#selectProductSort').select('In stock')
  cy.get('#selectProductSort')
    

})
})
        
