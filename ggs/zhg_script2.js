let query_params = {
    "os": "APPLET",
    "osVersion": "1.0.0",
    "userId": "927734025257623552",
    "userToken": "82b77aad3fe145b6b0f4cda9fb2266a1",
}

function populate_req_url(url, sign) {
    // return "https://prod.ggszhg.com" + url + "?os=" + query_params.os + "&osVersion=" + query_params.osVersion + "&userId=" + query_params.userId + "&userToken=" + query_params.userToken + "&sign=" + sign
    return `https://prod.ggszhg.com${url}?os=${query_params.os}&osVersion=${query_params.osVersion}&userId=${query_params.userId}&userToken=${query_params.userToken}&sign=${sign}`
}

function Post_Data() {
    var GetExampleParams =
        {
            url: populate_req_url("/xgt-app/applet/personalCenter/findDefaultAddress", "3D52C133E68B1EDEF6BFF0E16F9B7935"),
            // url: "https://prod.ggszhg.com/xgt-app/applet/personalCenter/findDefaultAddress?os=APPLET&osVersion=1.0.0&userId=927734025257623552&userToken=82b77aad3fe145b6b0f4cda9fb2266a1&sign=3D52C133E68B1EDEF6BFF0E16F9B7935",
            headers:
                {
                    "content-type": "application/json",
                    "accept": "*/*",
                },
            body: "{}"
        }
    $httpClient.post(GetExampleParams, function (error, response, data) {
        var StatusCode, ResponseHeaders;
        StatusCode = response.status;
        ResponseHeaders = response.headers;
        console.log(response);
        console.log(StatusCode);//400
        console.log(ResponseHeaders);//Object
        console.log(error);
        console.log(data);
        // console.log(Json.parse(data));//if data is Json String
        //Loon支持使用Console.log输出调试信息
    })
}

Post_Data()
console.log("\n\n")

url = populate_req_url("/xgt-app/applet/personalCenter/findDefaultAddress", "3D52C133E68B1EDEF6BFF0E16F9B7935")
url2 = "https://prod.ggszhg.com/xgt-app/applet/personalCenter/findDefaultAddress?os=APPLET&osVersion=1.0.0&userId=927734025257623552&userToken=82b77aad3fe145b6b0f4cda9fb2266a1&sign=3D52C133E68B1EDEF6BFF0E16F9B7935"

console.log(url)
console.log(url2)
console.log(url === url2)