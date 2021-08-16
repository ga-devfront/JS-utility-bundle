const EMAIL = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/

const NAME = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð_'-].{1,30}$/

const USER_NAME = /^[A-Za-z0-9_-]{2,15}$/

const TELEPHONE_BASIC = /(^\\+)?[0-9()-]*/

const TELEPHONE_INTERNATIONAL = /((?:\+|00)[17](?: |-|.)?|(?:\+|00)[1-9]\d{0,2}(?: |-|.)?|(?:\+|00)1-\d{3}(?: |-|.)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-|.)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-|.)[0-9]{3}[ \-][0-9]{4})|([0-9]{7}))/

const WEB_URL = /^($|(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?)$/

const POSTAL_ADDRESS = /[a-zA-Z\\d\\s\\-\\,\\#\\.\\+]+/

const EMPTY = /^ *$/

const NUMBER = /^[0-9]/

export {
    EMAIL,
    NAME,
    USER_NAME,
    TELEPHONE_BASIC,
    TELEPHONE_INTERNATIONAL,
    WEB_URL,
    POSTAL_ADDRESS,
    EMPTY,
    NUMBER
}
