class productspage {

    getMenu() {
        return cy.get('button[id="react-burger-menu-btn"]');
    }

   getSauceLabsBagPack() {
       return cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]');
   }

   getSauceLabsRemoveBagPack() {
    return cy.get('button[data-test="remove-sauce-labs-backpack"]');
}

getShoppingCart() {
    return cy.get('span[class="shopping_cart_badge"]');
}

    
    
}
export default productspage

