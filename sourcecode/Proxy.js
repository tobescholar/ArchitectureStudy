const handler = {
    get(target, key) {
        if(typeof target[key] === 'object') {
            return new Proxy(target[key], handler);
        }
        return Reflect.get(target, key);
    },
    set(target, key, value) {
        if(key === 'length') return true;
        console.log('update');
        return Reflect.set(target, key, value);
    }
}
const obj = {
    a: {a: 1},
    b: 2,
    c: [1, 2, 3],
}
const proxy = new Proxy(obj, handler);

proxy.a.a = 2;
proxy.c.push(4);
