context ('Snippets', () => {
    describe('Snippets UI', () => {
        it('Verify snippet cannot be generated without required fields being filled out', () => {
            cy.visit('https://video-tag-builder.kargo.com/');
            cy.get('#vast-dropdown').click(); // Opens and clicks VAST dropdown menu
            cy.visit('https://video-tag-builder.kargo.com/vast-instream'); // Selects Instream from dropdown menu
            cy.scrollTo('bottom'); // Scrolls until Generate VAST button is in view
            cy.contains('Generate VAST').click(); // Submits form
        });

        it('Create a Vast - Instream Snippet successfully', () => {
            cy.visit('https://video-tag-builder.kargo.com/');
            cy.get('#vast-dropdown').click(); // Opens and clicks VAST dropdown menu
            cy.visit('https://video-tag-builder.kargo.com/vast-instream'); // Selects Instream from dropdown menu
            cy.get('.btn').contains('URL').click(); // Switches Video URL button from Upload to URL
            cy.get(':nth-child(3) > div.my-2 > .form-control').type('https://springhillcompany.com'); // Types valid https
            cy.get('.row > :nth-child(1) > :nth-child(1) > .form-control').type('Go Hawks'); // Enters creative title
            cy.get('.col-12 > :nth-child(1) > .form-control').type('nba.com'); // Enter video clickthrough URL
            cy.scrollTo('bottom'); // Scroll to Generate VAST
            cy.contains('Generate VAST').click(); // Submit form
        });
    });
});