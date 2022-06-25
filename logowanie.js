    class logowanie {
        _emailSelector = '#email_create'
        _emailSelector1 = '#email'
        _paswd = '#passwd'
        _sub = '#submitAccount > span'
        _not = '#other'

        navigate(){
            cy.visit('http://automationpractice.com/index.php').get('.login').click();
            return this
        }
    
       
        
       typeemail(text){
        
            cy.get(this._emailSelector).clear().type(text);
            return this
        }

       
        typemail1(text){
            cy.get(this._emailSelector1).clear().type(text);
            
           
            return this
        }
       
        password(pass){
            cy.get(this._paswd).clear().type(pass);
            return this
        }

        
        submit(){
            cy.get('#SubmitCreate > span').click();
            return this
        }

        
        notatka(tekst){
        cy.get(this._not).type(tekst);
    
        }
    }
    export default logowanie
