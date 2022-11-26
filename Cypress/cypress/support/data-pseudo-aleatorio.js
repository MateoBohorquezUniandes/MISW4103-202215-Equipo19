const Mockaroo = require('mockaroo'); // npm install mockaroo
const client = new Mockaroo.Client({
    apiKey: 'fd2d1f20'
})

class DataPseudoAleatorio {
    async getPageRecord(count = 1) {
        return await client.generate({
            count: count,
            fields: [{
                name: 'id',
                type: 'Row Number'
            }, {
                name: 'page_title',
                type: 'Movie Title'
            }, {
                name: 'page_body',
                type: 'Words'
            }]
        });
    }

    async getPostRecord(count = 1) {
        return await client.generate({
            count: count,
            fields: [{
                name: 'id',
                type: 'Row Number'
            }, {
                name: 'post_title',
                type: 'Movie Title'
            }, {
                name: 'post_body',
                type: 'Words'
            }]
        });
    }
}

module.exports = new DataPseudoAleatorio();