const deepClone = (value, hash = new WeakMap) => {
    if(!value) return value;
    if(value instanceof RegExp) return new RegExp(value);
    if(value instanceof Date) return new Date(value);
    if(typeof value !== 'object') return value;
    // [] / {}
    const obj = new value.constructor();
    if(hash.get(value)) return hash.get(value);
    // 解决循环引用问题
    hash.set(value, value);
    for(let key in value) {
        if(value.hasOwnProperty(key)) {
            obj[key] = deepClone(value[key], hash)
        }
    }
    return obj;
}

const obj1 = {
    a: 1
};
obj1.x = obj1

console.log(deepClone(obj1))