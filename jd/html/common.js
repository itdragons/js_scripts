
const $tool = tool();

const $done = function(data) {
    console.log(`done: ${JSON.stringify(data)}`)
}
function currentDate() {
    let dd = new Date()
    return dateFormat(dd)
}

function formatRespData(body) {
    return JSON.stringify(JSON.parse(body), null, "\t")
}

function readJson(key) {
    let submitOrderRecord = $tool.read(key)
    if (submitOrderRecord) {
        submitOrderRecord = JSON.parse(submitOrderRecord)
    } else {
        submitOrderRecord = {}
    }
    return submitOrderRecord
}

function dateFormat(dd) {
    return dd.getHours() + ':' + dd.getMinutes() + ':' + dd.getSeconds() + "." + dd.getMilliseconds()
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// Tool
var storage = window.localStorage;
function tool() {
    const read = (key) => {
        return storage[key]
    };
    const write = (value, key) => {
        storage.setItem(key, value)
    };
    const notify = (title, subtitle, message) => {
        console.log(`模拟通知：${JSON.stringify({ title, subtitle, message })}`);
    };
    return {read, write, notify}
}


