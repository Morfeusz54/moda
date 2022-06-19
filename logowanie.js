class logowanie {

    navigate(){
        cy.visit('http://automationpractice.com/index.php').get('.login').click()
    }

   
    
    _email(){
        cy.get('#email_create')
        
        .clear()
       // .type();
        return this
    }
    _email1(){
        cy.get('#email')
        
        .clear()
        .type('user@example.org')
       // .type();
        return this
    }
    
    _password(){
        cy.get('#passwd')
        .clear()
        //.type();
        return this
    }
    _submit(){
        cy.get('#submitAccount > span')
          .click();
        return this
    }
    _notatka(){
    cy.get('#other').type('notatka')

    }
}
export default logowanie