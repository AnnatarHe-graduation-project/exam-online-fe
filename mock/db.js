/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

const faker = require('faker')

const exams = (function() {
    let _exams = []
    for (let i = 0; i < 100; i++) {
        _exams.push({
            id: i,
            title: faker.lorem.word(),
            desc: faker.lorem.paragraph(),
            image: faker.image()
        })
    }
})()

module.export = function() {
    const data = {
        user: [{
            id: 0,
            email: faker.lorem.email()
        }]
    }
    return data
}
