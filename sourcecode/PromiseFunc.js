Promise.prototype.finally = function(callback) {
    return this.then(data => {
        return Promise.resolve(callback()).then(() => data)
    }, err => {
        return Promise.resolve(callback()).then(() => {throw new Error(err)});
    })
}

// race实现
Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject);
        }
    });
}

// promise中断操作 返回一个promise
const promiseAbort = function() {
    return new Promise((resolve) => {
        resolve()
    })
}
promiseAbort().then(data => {
    console.log('ok');
    // 中断promise链 返回一个promise
    return new Promise(() => {})
}).then(data => {
    console.log('ok2')
})

// promise中断方法
const wrap = function(p1) {
    let failFunc = null;
    const p2 = new Promise((resolve, reject) => {
        fail = reject;
    });
    const p = Promise.race([p1, p2]);
    p.abort = fail;
    return p;
}
const p = wrap(new Promise((resolve, reject) => {
    console.log(111)
    setTimeout(() => {
        resolve('ok');
    }, 3000)
}))
p.abort('error');
p.then(data => console.log(`data: ${data}`), err => console.log(`err: ${err}`))



// 同步异步错误捕获
Promise.try = function(callback) {
    return new Promise((resolve, reject) => {
        return Promise.resolve(callback()).then(resolve, reject);
    });
}

const p1 = () => {
    throw new Error('sync err');
    return new Promise((_, reject) => {
        setTimeout(() => reject('async err'),3000)
    })
}

Promise.try(p1).then(data => {
    console.log(`data: ${data}`);
}, err => {
    console.log(`err: ${err}`)
})