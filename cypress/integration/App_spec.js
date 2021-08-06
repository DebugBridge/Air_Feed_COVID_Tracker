describe("my first test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.url().should('contains', 'http://localhost:3000/');


    });
    //write a test that confirms correct search result is returned
    it("Gives correct search result for washington", () => {

        //cy.get('[data-cy="slider"]').trigger('mouseover')

        cy.get('[data-cy="search-input"]').click({force: true})
            .as('input')

        cy.get('@input')
            .type('washington')

        cy.get('[data-cy="search-result"]').click({force: true})
            .as('result')

        cy.get('@result')
            .invoke('text').should('equal', 'Washington')

        cy.get('@result').click({force: true})

        cy.url().should('eq', 'http://localhost:3000/0')

        cy.get('[data-cy="green-status"]')
            .should('have.id', 'green')
    })


    it("Gives correct search result for Texas with random capital letters", () => {
        cy.get('[data-cy="search-input"]').click({force: true})
            .as('input')

        cy.get('@input')
            .type('tExAs')

        cy.get('[data-cy="search-result"]').click({force: true})
            .as('result')

        cy.get('@result')
            .invoke('text').should('equal', 'Texas')

        cy.get('@result').click({force: true})

        cy.url().should('eq', 'http://localhost:3000/13')

        cy.get('[data-cy="yellow-status"]')
            .should('have.id', 'yellow')
    })

    it("Gives correct data for New jersey", () => {
        cy.get('[data-cy="search-input"]').click({force: true})
            .as('input')

        cy.get('@input')
            .type('nEW jeR')

        cy.get('[data-cy="search-result"]').click({force: true})
            .as('result')

        cy.get('@result')
            .invoke('text').should('equal', 'New Jersey')

        cy.get('@result').click({force: true})

        cy.url().should('eq', 'http://localhost:3000/11')

        cy.get('[data-cy="red-status"]')
            .should('have.id', 'red')
    })
})

