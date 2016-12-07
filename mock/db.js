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
            image: faker.image.image()
        })
    }
})()

const questions = []

for (let i = 1; i < 21; i++) {
    questions.push({
        id: i,
        title: faker.lorem.words(),
        content: `请选择以下哪种不是电子支付方式：`,
        answers: ["Alipay", "Wechat pay", "Paypal", "现金"],
        right: 3,
        hasBug: 0,
        score: 5,
        courses: "pay"
    })
}

module.exports = function() {
    const data = {
        user: [{
            id: 0,
            email: faker.internet.email()
        }],
        paper: [{
            id: 1,
            title: '电子支付清算',
            alert: '请加油～',
            score: '2',
            questions
        }]
    }
    return data
}
