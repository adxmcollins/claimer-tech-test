/// <reference types="cypress" />

context('Favourite sport: Tennis', () => {
  it('Opens app', () => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.visit('/')
  })

  const enterName = (pressEnter: boolean = false) => {
    const input = 'input[name="name"]'
    cy.get(input).type('Adam')

    if (pressEnter) {
      cy.get(input).type('{enter}')
    } else {
      cy.get('form').submit()
    }

    cy.get('form h2').should('have.text', 'What\'s your email address?')
  }

  const enterEmail = (pressEnter: boolean = false) => {
    const input = 'input[name="email"]'
    cy.get(input).type('adam@me.com')

    if (pressEnter) {
      cy.get(input).type('{enter}')
    } else {
      cy.get('form').submit()
    }

    cy.get('form h2').should('have.text', 'Which sport do you prefer?')
  }

  const enterPlayerName = (pressEnter: boolean = false) => {
    const input = 'input[name="tennisPlayer"]'
    cy.get(input).type('Andy Murray')

    if (pressEnter) {
      cy.get(input).type('{enter}')
    } else {
      cy.get('form').submit()
    }

    cy.get('form h2').should('have.text', 'Can we contact you in future?')
  }

  it('Complete using mouse', () => {
    enterName()

    enterEmail()

    cy.get('label[for="sport-Tennis"]').click()
    cy.get('form h2').should('have.text', 'Who is your favourite tennis player?')

    enterPlayerName()

    cy.get('label[for="emailConsent-Yes"]').click()
    cy.get('h2').should('have.text', 'Thank You!')
  })

  it('Complete using keyboard where applicable', () => {
    enterName(true)

    enterEmail(true)

    cy.get('body').type('b')
    cy.get('form h2').should('have.text', 'Who is your favourite tennis player?')

    enterPlayerName(true)

    cy.get('body').type('b')
    cy.get('h2').should('have.text', 'Thank You!')
  })
})
