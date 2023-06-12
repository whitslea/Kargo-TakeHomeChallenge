context ('Snippets', () => {
    describe('Snippets UI', () => {
        it('Verify snippet cannot be generated without required fields being filled out', () => {
            cy.visit('https://video-tag-builder.kargo.com/');
            cy.get('#vast-dropdown').click();
            cy.visit('https://video-tag-builder.kargo.com/vast-instream');
            cy.scrollTo('bottom');
            cy.contains('Generate VAST').click(); // Submit form
            cy.contains('Creative name is required');
            cy.contains('This is a required field');
        });

        it('Create a Vast - Instream Snippet successfully', () => {
            cy.visit('https://video-tag-builder.kargo.com/');
            cy.get('#vast-dropdown').click();
            cy.visit('https://video-tag-builder.kargo.com/vast-instream');
            cy.get('.btn').contains('URL').click(); // Toggle Video URL button from Upload to URL
            cy.get(':nth-child(3) > div.my-2 > .form-control').type('https://media.giphy.com/media/3HG7iF94VgtXBjwhAT/giphy.mp4'); // Type valid https
            cy.get('.row > :nth-child(1) > :nth-child(1) > .form-control').type('Spiderman'); // Type creative title
            cy.get('.col-12 > :nth-child(1) > .form-control').type('nba.com'); // Type valid video clickthrough URL
            cy.scrollTo('bottom');
            cy.contains('Generate VAST').click(); // Submit form
            cy.wait(2000)
            cy.contains('Generate VAST').click();
        });
    });
});
