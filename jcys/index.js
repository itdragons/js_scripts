var jcys = require("./jcys.js");
const axios = require('axios').default;
const apiUrl = 'http://api.ttshitu.com/predict';

// url = "https://www.gza-e.com/api/consumer/user/info"
// accessToken = "ODgxNDg3OTg1NTI1MTI5MjE2OjE6MGQwMjZhNDRmNzhkNDk1ZWFkOWYyOGQ4YzIyZjVlMTE="
// apiParams = {"queryArray":[{"orderType":1,"status":0},{"orderType":1,"status":10,"shipMode":1},{"orderType":1,"status":12,"shipMode":1},{"orderType":1,"status":10,"shipMode":2},{"orderType":1,"status":11,"shipMode":2},{"orderType":2,"status":0},{"orderType":2,"status":10},{"orderType":2,"status":11,"shipMode":1},{"orderType":2,"status":11,"shipMode":2},{"orderType":2,"status":13}]}
// timestamp = "1630331416"
// nonceStr = "fd6a31ca97544bff8da53be4bde6af72"
//
// sign = jcys.sign(apiParams, url, accessToken, timestamp, nonceStr)
//
//
// console.log(sign)
// console.log("af737e976e2cad48b0a6bcdbac022efb" === sign)


// url = "https://www.gza-e.com/api/consumer/pro/peopleCode"
// accessToken = "ODYyNjQzNDAzMTYxMDc1NzEyOjE6MjJhOTgzODM5NjQ1NDQ0N2EzMzRhY2RkYmVmMjZlZTc="
// params = {}
// timestamp = "1630283744"
// nonceStr = "8424d64aaef146079fc5b92ed8fc7f7a"
//
// sign = jcys.sign(params, url, accessToken, timestamp, nonceStr)
//
// console.log(sign)
// console.log("50e44948ed18149f10d6fe4562182c99" === sign)

const orgMap = {
    贵州航食: "727549979857518592",
    贵州空港新元: "817425775685795840",
    test: "123"
}

console.log(orgMap.贵州航食)