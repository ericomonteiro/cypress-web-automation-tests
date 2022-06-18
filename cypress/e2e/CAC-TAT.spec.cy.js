describe('Central de atencimento ao cliente TAT', () => {
    it('passes', () => {
      cy.visit('http://localhost:80')
    })


    it('verifica o título da página', () => {
      cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('preencher campos', () => {
      cy.get('#firstName').type('Érico')
      cy.get('#lastName').type('Monteiro')
      cy.get('#email').type('erico.cintra@gmail.com')
      cy.get('#phone').type('(16) 98824-9454')
    })


  })

