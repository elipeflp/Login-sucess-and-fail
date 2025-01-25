//Aqui temos um login com senha e/ou usuário correto. 

describe('teste do site Orange HRM', () => {
  it.skip('login com sucesso', () => { //Esse (.SKIP que eu coloquei, é apenas para o cypress não rodar esse bloco de código. Ele ai pular e executar apenas o bloco seguinte. Se quiser rodar os dois, é só tirar)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
  cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })


  //Aqui temos um login com senha e/ou usuário errado. 
  it('login SEM sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admi')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')
  //cy.location('pathname').should('equal', '/web/index.php/dashboard/index') >>> "Aqui, usamos apenas para quando o login é feito com sucesso.
  //Pois não temos como ver se estamos na pagnia sendo que não foi concluido o login"
  //cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') >>> Aqui, temos a mesma situação acima, não temos como executar
  //esse teste, pois não conseguimos fazer o login com sucesso.
  })
})