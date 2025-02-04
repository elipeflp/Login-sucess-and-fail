
// Aqui temos um login com senha e/ou usuário correto. 

describe('teste do site Orange HRM', () => {

  const selectorlist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButonField: "[type='submit']",
    TitleDash: "[href='/web/index.php/dashboard/index']",
    AlertError: "[role='alert']"
  }

  it('login COM sucesso', () => { //Esse (.SKIP que eu coloquei, é apenas para o cypress não rodar esse bloco de código. Ele ai pular e executar apenas o bloco seguinte. Se quiser rodar os dois, é só tirar)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type('Admin')
    cy.get(selectorlist.passwordField).type('admin123')
    cy.get(selectorlist.loginButonField).click()
  cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  cy.get(selectorlist.TitleDash).contains('Dashboard')
  })


//----------------------------------------------------------------------------------------------//

  // Aqui temos um login com senha e/ou usuário errado. 

  it('login SEM sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type('Admi')
    cy.get(selectorlist.passwordField).type('admin1234')
    cy.get(selectorlist.loginButonField).click()
    cy.get(selectorlist.AlertError)
  })
})

  /* cy.location('pathname').should('equal', '/web/index.php/dashboard/index') >>> Aqui, usamos apenas para quando o login é feito com sucesso.
  Pois não temos como ver se estamos na pagnia sendo que não foi concluido o login

  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') >>> Aqui, temos a mesma situação acima, não temos como executar
  esse teste, pois não conseguimos fazer o login com sucesso.*/

//----------------------------------------------------------------------------------------------//