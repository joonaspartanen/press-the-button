describe('Join game ', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Press the Button')
  })

  it('user can join the game', function() {
    cy.get('[data-cy=name-form]').type('Tester')
    cy.get('[data-cy=join-btn]').click()
    cy.contains('Press the Button!')
  })
})

describe('When button clicked', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=name-form]').type('Tester')
    cy.get('[data-cy=join-btn]').click()
    cy.contains('Press the Button!')
    cy.get('[data-cy=game-btn]').click()
  })

  it('some notification is shown', function() {
    cy.get('[data-cy=notification]').should('exist')
  })

  /* This test is still flaky...
  it('score is decremented by 1', function() {
    cy.get('[data-cy=score]').then($div => {
      const score1 = parseInt($div.text())

      cy.get('[data-cy=game-btn]')
        .click()
        .then(() => {
          const score2 = parseInt($div.text())
          expect(score2).to.eq(score1 - 1)
        })
    })
  })
  */
})
