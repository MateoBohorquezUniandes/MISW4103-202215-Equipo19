const Page = require("./page");

module.exports = class Page {

    constructor() {

    }

    visit(url) {
        cy.visit(url);
    }
}

