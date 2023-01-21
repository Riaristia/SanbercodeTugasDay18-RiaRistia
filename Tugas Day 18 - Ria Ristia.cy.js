describe('Validate login functionality ', () => {
    it('validate login with valid credentials', () => {
        cy.visit('https://the-internet.herokuapp.com/login') 
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()

    })

  })

  describe('Validate login functionality ', () => {
    it('validate login with invalid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login') 
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('1234567890')
        cy.get('.fa').click()

    })

  })

  describe('Validate login functionality ', () => {
    it('validate login with invalid username', () => {
        cy.visit('https://the-internet.herokuapp.com/login') 
        cy.get('#username').type('tomsmitt')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()

    })

  })
