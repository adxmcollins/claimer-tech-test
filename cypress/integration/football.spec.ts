/// <reference types="cypress" />

context('Favourite sport: Football', () => {
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

  const enterTeamName = (pressEnter: boolean = false) => {
    const input = 'input[name="footballTeam"]'
    cy.get(input).type('Aston Villa')

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

    cy.get('label[for="sport-Football"]').click()
    cy.get('form h2').should('have.text', 'Which football team do you support?')

    enterTeamName()

    cy.get('label[for="emailConsent-Yes"]').click()
    cy.get('h2').should('have.text', 'Thank You!')
  })

  it('Complete using keyboard where applicable', () => {
    enterName(true)

    enterEmail(true)

    cy.get('body').type('a')
    cy.get('form h2').should('have.text', 'Which football team do you support?')

    enterTeamName(true)

    cy.get('body').type('b')
    cy.get('h2').should('have.text', 'Thank You!')
  })
})
