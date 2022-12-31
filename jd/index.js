async function demo() {
    return "我是Promise";
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function test() {
    a = await sleep(3000).then(() => {
        console.log("test run")
        return "test"
    })
    console.log(`a: ${a}`)
    return a
}

function dateFormat(dd) {
    return dd.getHours() + ':' + dd.getMinutes() + ':' + dd.getSeconds() + "." + dd.getMilliseconds()
}

async function get_sleep_count() {
    let n = 0;
    console.log(`${dateFormat(new Date())}`)
    while(true) {
        let dd = new Date()
        let seconds = dd.getSeconds()
        if (seconds > 0 && seconds <=10) {
            console.log(`${n}: ${dateFormat(dd)}`)
            n += 1;
        }
        if (seconds > 10 && seconds < 20) {
            console.log(`done: ${dateFormat(dd)}`)
            break;
        }
        await sleep(10)
    }
    console.log("get_sleep_count done")
    return n;
}

if (true) {

    // const bar = async () => {
    //     t = await test()
    //     return t
    // }

    // bar().then(data => {
    //     console.log(data)
    //     console.log("done!")
    // }) 

    // get_sleep_count().then(data => {
    //     console.log(data)
    //     console.log("done!!!")
    // })
    
    (async function() {
        console.log('Do some thing, ' + new Date());
        await sleep(3000);
        console.log('Do other things, ' + new Date());
    })();

      
    // console.log(n)
    // console.log("done!!!")
    
}


