import {
    EMAIL,
    NAME,
    USER_NAME,
    TELEPHONE_BASIC,
    TELEPHONE_INTERNATIONAL,
    WEB_URL,
    POSTAL_ADDRESS,
    EMPTY,
    NUMBER
} from './regexps'

// Global Methods //
const checkRegexp = (regexp, value) => {
    const myRegexp = new RegExp(regexp)
    return myRegexp.test(value)
}

// Specific Methods //
const isValidEmail = (email) => {
    return checkRegexp(EMAIL, email)
}

const isValidUrl = (url) => {
    return checkRegexp(WEB_URL, url)
}

const isValidPostalAdress = (postalAdress) => {
    return checkRegexp(POSTAL_ADDRESS, postalAdress)
}

const isValidNumber = (number) => {
    return checkRegexp(NUMBER, number)
}

const isValidName = (name) => {
    return checkRegexp(NAME, name)
}

const isValidUserName = (userName) => {
    return checkRegexp(USER_NAME, userName)
}

const isValidBasicPhone = (number) => {
    return checkRegexp(TELEPHONE_BASIC, number)
}

const isValidInternationalPhone = (number) => {
    return checkRegexp(TELEPHONE_INTERNATIONAL, number)
}

// Test if a string is empty or contains only spaces //
const isBlankString = (string) => {
    return string === null || string === 0 || checkRegexp(EMPTY, string)
}

// Test if the error code is 4XX or other //
const is4XXError = (error) => {
    const errorToString = error.toString()
    return (errorToString[0] === '4' && errorToString.length === 3)
}

export {
    isValidEmail,
    isValidUrl,
    isValidPostalAdress,
    isValidNumber,
    isBlankString,
    is4XXError,
    isValidName,
    isValidUserName,
    isValidBasicPhone,
    isValidInternationalPhone
}
