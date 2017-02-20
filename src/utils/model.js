/**
 * @auther AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2017/1/1
 */


export function getRole(roleNumber) {
    if (roleNumber >= 20 && roleNumber <= 30) {
        return '教师'
    }
    // if (roleNumber >= 10 && roleNumber < 20) {
        // return 'student'
    // }
    // 没有做其他判定，暂时如此吧
    return '学生'
}
