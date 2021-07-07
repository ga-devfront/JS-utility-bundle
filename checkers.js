import {
    EMAIL
} from './regexs'

const checkEmail = (email) => {
    return EMAIL.test(email)
}
