const Page = require("./page");

module.exports = class Page {

    visit(url) {
        cy.visit(url);
    }
}

