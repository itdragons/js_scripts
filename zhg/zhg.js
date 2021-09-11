const objectSpread2 = require("./js/@babel/runtime/helpers/objectSpread2.js");
o = require("./js/B41A81A32C6AC8FFD27CE9A48986BBF6.js")
a = require("./js/8D0804422C6AC8FFEB6E6C451DA6BBF6.js")

sign = function(userId, userToken, params) {
    const d = objectSpread2(objectSpread2({}, o), {}, {
        "userId": userId,
        "userToken": userToken
    });
    d.sign = a.c(objectSpread2({}, d), params || {});
    return d.sign
}



module.exports = {
    sign
}