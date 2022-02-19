


describe('home page', ()=>{
    it('app deve esta online', ()=>{
        cy.visit('https://buger-eats.vercel.app') 
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})