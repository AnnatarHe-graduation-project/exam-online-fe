/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016.10.22
 */

const faker = require('faker')

// faker.locale = 'zh-CN'

const word = faker.lorem.word

const users = (function() {
    let _users = []
    for(let i = 0; i < 20; i++) {
        _users.push({
            id: i,
            role: 10,
            name: faker.internet.userName(),
            pwd: faker.internet.password(),
            schoolId: faker.random.number(),
            avatar: faker.internet.avatar(),
            paperDone: [{1: 70}],
            papers: [{}],
            news: [{
                id: i,
                title: faker.random.words(),
                content: faker.lorem.paragraph(),
                bg: faker.image.imageUrl(),
                up: faker.random.number(),
                down: faker.random.number(),
                user: [{}]
            }]
        })
    }
    return _users
})()

const exams = (function() {
    let _exams = []
    for (let i = 0; i < 100; i++) {
        _exams.push({
            id: i,
            title: faker.lorem.word(),
            desc: faker.lorem.paragraph(),
            image: faker.image.image()
        })
    }
    return _exams
})()

const questions = []

for (let i = 1; i < 20; i++) {
    questions.push({
        id: i,
        title: faker.lorem.words(),
        content: faker.lorem.paragraph(),
        answers: [word(), word(), word(), word()],
        right: 3,
        hasBug: 0,
        score: 5,
        courses: "pay"
    })
}

const news = (function() {
    let _news = []
    for (let i = 0; i < 20; i++) {
        _news.push({
            id: i,
            title: faker.lorem.words(),
            content: faker.lorem.paragraph(),
            bg: faker.image.imageUrl(),
            up: faker.random.number(),
            down: faker,
            user: []
        })
    }
    return _news
})()

module.exports = function() {
    const data = {
        user: users,
        paper: [{
            id: 1,
            title: '电子支付清算',
            alert: '请加油～',
            score: '2',
            hero: faker.image.image(),
            questions
        }],
        news,
        exams,
    }
    return data
}
