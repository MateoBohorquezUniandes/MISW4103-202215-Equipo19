const Page = require("./page");

class TagsPage extends Page {
    constructor() {
        super();
    }
    
    get mainPanel() { return 'main.gh-main ' }
    get btnTag() { return 'a[href="#/tags/"]'}
    get btnTagNew() { return 'a[href="#/tags/new/"]' }
    get inputTagName() { return '#tag-name' }
    get btnSaveTag() { return 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view' }
    get tagName() { return 'h3.gh-tag-list-name' }
    get titleTagEditor() { return '.gh-editor-title' }
    get linkBackTag() { return 'a[href="#/dashboard/"]' }

    writePostTitle(title) {
        cy.get(this.titleTagEditor).type(title);
    }

    clickBackPage() {
        cy.get(this.linkBackTag).click();
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

    getTagNameFromList(tag) {
        expect(cy.get(this.tagName).contains(tag));
    }

    scrollToFinal() {
        cy.get(this.mainPanel).scrollTo('bottom');
    }
}

module.exports = new TagsPage();