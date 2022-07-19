/**
 * @param {String} email
 * @returns {Boolean}
 */
export function validEmail(email) {
    const reg = /^([a-zA-Z]|[0-9])(\w|\-|\.)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    return reg.test(email.trim())
}

/**
 * @param {String} password
 * @returns {Boolean}
 */
export function validPassword(psd){
    const reg =/^(?!.*\s)(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\W]{6,16}$/
    return reg.test(psd.trim())
}
/**
 * @param {String} url
 * @returns {Boolean}
 */
export function validUrl(url){
    const reg =/^(http|https):\/\/([\w.]+\/?)\S*$/
    return reg.test(url.trim())
}
// export default {
//     validEmail
// }
// const validEmail = function(email) {
//     const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
//     return reg.test(email.trim())
// }
// export default {
//     validEmail
// }