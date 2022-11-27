
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
    getNumber(length) {
        return faker.random.numeric(length);
    }
    getUrl(){
        return faker.internet.url();
    }
}

module.exports = new DataAleatorio();