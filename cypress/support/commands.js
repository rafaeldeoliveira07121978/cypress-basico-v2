Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
  cy.get('#firstName').type('Rafael')
  cy.get('#lastName').type('Pinto')
  cy.get('#email').type('rafaeldeoliveira07121978@gmail.com')
  cy.get('#open-text-area').type('Teste')
  cy.get('button[type="submit"]').click()  
})

