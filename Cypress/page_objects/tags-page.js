const Page = require("./page");

class TagsPage extends Page {
    constructor() {
        super();
    }
    
    get btnTag() { return 'a[href="#/tags/"]'}
    get btnTagNew() { return 'a[href="#/tags/new"]' }
    get inputTagName() { return 'input.gh-input' }
    get btnSaveTag() { return 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view' }
    get tagName() { return 'h3.gh-tag-list-name' }
    get titleTagEditor() { return '.gh-editor-title' }

    writePostTitle(title) {
        cy.get(this.titleTagEditor).type(title);
    }
    
    clickTagsNew() {
        curry.get(this.btnTagNew).click();
    }

    clickBtnTag() {
        cy.get(this.btnTag).click();
    }

    setTagName(text) {
        cy.get(this.inputTagName).element.setValue(text);
    }

    clickBtnSaveTag() {
        cy.get(this.btnSaveTag).element.click();
    }

    getTagName() {
        cy.get(this.tagName).element.setTagName();
    }
}

module.exports = new TagsPage();