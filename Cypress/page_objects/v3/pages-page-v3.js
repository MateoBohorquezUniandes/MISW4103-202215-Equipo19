const Page = require("./page-v3");

class PagesPage extends Page {

    constructor() {
        super();
    }

    get linkOptionSortPage() { return 'div.gh-contentfilter-menu.gh-contentfilter-sort > div.ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger' }
    get fistPageList() { return 'ol.gh-list li.gh-list-row.gh-posts-list-item:first' }
    get lastPageList() { return 'ol.gh-list li.gh-list-row.gh-posts-list-item:last' }
    get sortPageByOdelst() { return 'li.ember-power-select-option:nth-child(2)' }
    get sortPageByNewest() { return 'li.ember-power-select-option:nth-child(1)' }

    goToNewPage() {
        cy.get('a[href="#/editor/page/"]').first().click()
    }

    enterPageTitle(pageTitle) {
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(pageTitle);
    }

    enterPageBody(pageBody) {
        cy.get('.koenig-editor__editor.__mobiledoc-editor').click();
        cy.get('.koenig-editor__editor.__mobiledoc-editor').type(pageBody);
    }

    goBackToPagesList() {
        cy.get('header.gh-editor-header.br2.pe-none a').click()
    }
    goBackToPagesListAfterPublish() {
        this.goBackToPagesList();
    }

    goBackToPagesListFilter() {
        cy.get('a.blue.link.fw4.flex.items-center.ember-view').click()
    }

    clickTheFirstPage() {
        cy.get('h3.gh-content-entry-title').first().click();
    }

    goToEditPage() {
        cy.get('.ember-view permalink.gh-list-data.gh-post-list-button').click()
    }

    clickSortPagesByNewest() {
        cy.get('span').contains('Newest first').click();
        cy.get('li').contains("Newest first").click();
        //cy.get('div.gh-contentfilter.view-actions-bottom-row > div.gh-contentfilter-menu.gh-contentfilter-sort > div.ember-view.ember-basic-dropdown-trigger').click();
        //cy.get('li.ember-power-select-option:nth-child(1)').click();
    }

    publishPage() {
        cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.get('footer.gh-publishmenu-footer button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.get('footer.gh-publishmenu-footer button.gh-btn.gh-btn-outline.gh-btn-link').click();
    }

    clickOptionTypePage() {
        cy.get('div.gh-contentfilter.view-actions-bottom-row > div.gh-contentfilter-menu.gh-contentfilter-type > div.ember-view.ember-basic-dropdown-trigger').click();
    }

    clickSortPagesByPublished() {
        cy.get('li.ember-power-select-option:nth-child(3)').click();
    }

    async findPageTitle(title) {
        let element = await this.driver.$('//a/h3[contains(.,"' + title + '")]');
        let value = await element.getText();
        return value;
    }

    goToEditor() {
        cy.get('button.gh-back-to-editor').click();
    }
    getDraftOnList(title) {
        cy.get('h3').contains(title).click();
        expect(cy.get('div').contains("Draft - Saved"));
    }
    getBodyTextEditor(title) {
        expect(cy.get('.koenig-editor__editor.__mobiledoc-editor').contains(title));
    }

    clickSortPagesByOldest() {
        cy.get('div.gh-contentfilter-menu.gh-contentfilter-sort').click();
        cy.get('li.ember-power-select-option').contains('Oldest').click();
    }

    clickPageSettings() {
        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
    }

    clickDelete() {
        cy.get('#entry-controls > div.settings-menu.settings-menu-pane.settings-menu-pane-main > div.settings-menu-content > form > button').click();
    }

    clickDeleteConfirmation() {
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
    }

    getFirstPageTitle() {
        cy.get('section.view-container.content-list > div.gh-list-sticky > ol.pages-list.gh-list.feature-memberAttribution >li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status:nth-child(1) > a:nth-child(1) > h3.gh-content-entry-title:nth-child(1)').click();
    }

    publishScheduledPage() {
        cy.get('.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.get('div.gh-publish-setting.last > button.gh-publish-setting-title').click();
        cy.get('div.gh-publish-schedule > div:last-child').click();
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
        cy.get('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
    }

    btnBackEditor() {
        cy.get("button.gh-btn-editor.gh-publish-back-button").click();
    }
    clickFilterPagesBySchedule() {
        cy.get("div.gh-contentfilter-menu.gh-contentfilter-type").click();
        cy.get('li.ember-power-select-option:nth-child(4)').click();
    }

    clickOptionSort() {
        cy.get(this.linkOptionSortPage).click();
    }

    clickSortPageByOldest() {
        cy.get(this.sortPageByOdelst).click();
    }

    clickSortPageByNewest() {
        cy.get(this.sortPageByNewest).click();
    }

    clickFirstPage() {
        cy.get(this.fistPageList).click();
    }

    clickLastPage() {
        cy.get(this.lastPageList).click();
    }

}


module.exports = new PagesPage();