/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017/1/1
 */


export function getRole(roleNumber) {
    let role = ''
    if (roleNumber >= 10 && roleNumber < 20) {
        role = 'student'
    }
    if (roleNumber >= 20 && roleNumber <= 30) {
        role = 'teacher'
    }
    // 没有做其他判定，暂时如此吧
    return role
}
