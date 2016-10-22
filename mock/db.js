/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

const faker = require('faker')

module.export = function() {
    const data = {
        user: [{
            id: 0,
            email: faker.lorem.email()
        }]

    }
    return data
}
