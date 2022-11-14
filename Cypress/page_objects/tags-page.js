const Page = require("./page");

class TagsPage extends Page {
    constructor() {
        super();
    }
    
    get btnTag() { return 'a[href="#/tags/"]'}
    get btnTagNew() { return 'a[href="#/tags/new/"]' }
    get inputTagName() { return '#tag-name' }
    get btnSaveTag() { return 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view' }
    get tagName() { return 'h3.gh-tag-list-name' }
    get titleTagEditor() { return '.gh-editor-title' }

    writePostTitle(title) {
        cy.get(this.titleTagEditor).type(title);
    }
    
    clickTagsNew() {
        cy.get(this.btnTagNew).click();
    }

    clickBtnTag() {
        cy.get(this.btnTag).click();
    }

    setTagName(text) {
        cy.get(this.inputTagName).type(text);
    }

    clickBtnSaveTag() {
        cy.get(this.btnSaveTag).click();
    }

    getTagName() {
        cy.get(this.tagName).element.setTagName();
    }
}

module.exports = new TagsPage();