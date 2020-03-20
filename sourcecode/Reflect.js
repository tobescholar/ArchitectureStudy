// Proxy 中能代理的方法，Reflect都可以实现
const obj = {
    a: 1,
    [Symbol()]: 'symbol',
};

// return <boolean>
Reflect.set(obj, 'name', 'daocao');

// return <boolean>  等价与 name in obj
Reflect.has(obj, 'name');
// return <boolean>  等价于 delete obj.a
Reflect.deleteProperty(obj, 'a');

// 冻结
Object.freeze(obj);
const setSuccess = Reflect.defineProperty(obj, 'test', {
    value: 100,
});
console.log(setSuccess);    // false
const isExtensions = {};
// 设置不可扩展
Reflect.preventExtensions(isExtensions);
// 是否可扩展
Reflect.isExtensible(isExtensions);


Reflect.getOwnPropertyDescriptor(obj);
Object.getOwnPropertyNames(obj)
Object.getOwnPropertySymbols(obj);
Reflect.ownKeys(obj);   // 包含symbol 属性
// Reflect.setPrototypeOf
// Reflect.getPrototypeOf

const fn = function(a, b) {
    return a + b;
}
fn.apply = (a,b,c) => {
    return a - b;
}
Reflect.apply(fn, null, [1, 2]);

