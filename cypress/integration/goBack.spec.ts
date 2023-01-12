/// <reference types="cypress" />

context('Go back and forward between steps', () => {
  it('Opens app', () => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.visit('/')
  })

  const enterName = (pressEnter: boolean = false) => {
    const input = 'input[name="name"]'
    cy.get(input).clear()
    cy.get(input).type('Adam')

    if (pressEnter) {
      cy.get(input).type('{enter}')
    } else {
      cy.get('form[id="form-name"]').submit()
    }

    cy.get('form h2').should('have.text', 'What\'s your email address?')
  }

  const enterEmail = (pressEnter: boolean = false) => {
    const input = 'input[name="email"]'
    cy.get(input).clear()
    cy.get(input).type('adam@me.com')

    if (pressEnter) {
      cy.get(input).type('{enter}')
    } else {
      cy.get('form[id="form-email"]').submit()
    }

    cy.get('form h2').should('have.text', 'Which sport do you prefer?')
  }

  it('Complete using mouse', () => {
    enterName()

    cy.get('button[data-testid="backButton"]').click()
    enterName()

    enterEmail()
  })

  it('Complete using keyboard where applicable', () => {
    enterName(true)

    cy.get('body').type('{leftArrow}')
    enterName(true)

    enterEmail(true)
  })
})
