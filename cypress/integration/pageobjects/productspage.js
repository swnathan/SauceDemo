class productspage {

    getMenu() {
        return cy.get('button[id="react-burger-menu-btn"]');
    }

   getSauceLabsBagPack() {
       return cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]');
   }

   getSauceLabsBagBikeLight() {
    return cy.get('button[data-test="add-to-cart-sauce-labs-bike-light"]');
}

getSauceLabsBoltTshirt() {
    return cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
}

getSauceLabsOnesie() {
    return cy.get('button[data-test="add-to-cart-sauce-labs-onesie"]');
}

getSauceLabsFleeceJacket() {
    return cy.get('button[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
}

getSauceLabsAllThingsRedTshirt() {
    return cy.get('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
}

getSauceLabsRemoveBagPack() {
    return cy.get('button[data-test="remove-sauce-labs-backpack"]');
}

   getSauceLabsRemoveBagBikeLight() {
    return cy.get('button[data-test="remove-sauce-labs-bike-light"]');
}

getSauceLabsRemoveBolttshirt() {
    return cy.get('button[data-test="remove-sauce-labs-bolt-t-shirt"]');
}

getSauceLabsRemoveOnesie() {
    return cy.get('button[data-test="remove-sauce-labs-onesie"]');
}

getSauceLabsRemoveFleeceJacket() {
    return cy.get('button[data-test="remove-sauce-labs-fleece-jacket"]');
}

getSauceLabsRemoveAllThinsRedTshirt() {
    return cy.get('button[data-test="remove-test.allthethings()-t-shirt-(red)"]');
}

getShoppingCart() {
    return cy.get('span[class="shopping_cart_badge"]');
}

getProductName() {
   return cy.get('.inventory_item_name');
}

getProductPrice() {
    return cy.get('.inventory_item_price');
}

    
    
}
export default productspage

