    class logowanie {


        navigate(){
            cy.visit('http://automationpractice.com/index.php').get('.login').click();
            return this
        }
    
       _emailSelector = '#email_create';
        
       typeemail(text){
            cy.get(_emailSelector).clear().type(text);
            return this
        }

        _emailSelector1 = '#email';
        typemail1(){
            cy.get(_emailSelector1).clear().type(text);
            
           
            return this
        }
        _passwd = '#passwd';
        password(){
            cy.get(_paswd).clear().type(text);
            return this
        }

        _sub = '#submitAccount > span';
        submit(){
            cy.get(_paswd).click();
            return this
        }

        _not = '#other';
        notatka(){
        cy.get(this._not).type(text)
    
        }
    }
    export default logowanie
