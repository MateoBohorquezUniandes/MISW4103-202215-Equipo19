
import { faker } from '@faker-js/faker';

class DataAleatorio {
    getPageTitle() {
        return faker.lorem.words()
    }
    getPageBody() {
        return faker.lorem.paragraph();
    }

    getPostTitle() {
        return faker.lorem.words()
    }

    getPostBody() {
        return faker.lorem.paragraph();
    }

    //#region Member
    getMemberName() {
        return faker.name.fullName();
    }
    getMemberEmail() {
        return faker.internet.email();
    }
    getMemberLabels() {
        return faker.lorem.sentence();
    }
    getMemberNote() {
        return faker.lorem.paragraph();
    }
    //#endregion

    //#region Navigation
    getNavigationName() {
        return faker.name.fullName();
    }
    getNavigationUrl() {
        return faker.internet.url();
    }
    //#endregion
    getNumber(length) {
        return faker.random.numeric(length);
    }
}

module.exports = new DataAleatorio();