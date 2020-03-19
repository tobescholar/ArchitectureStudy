const arr1 = [1,2,3,4];
const arr2 = [4,5,6,7];

// 交集 差集 并集
const union = () => {
    const s1 = new Set(arr1);
    const s2 = new Set(arr2);
    return [...s1].filter(i => s2.has(i))
}

console.log(union())

const difference = () => {
    const s1 = new Set(arr1);
    const s2 = new Set(arr2);
    return [...s1].filter(i => !s2.has(i))
}

console.log(difference());

console.log([...new Set([...arr1, ...arr2])]);

// WeakMap key必须是对象
class MyFn {}
let obj = new MyFn();
const weakMap = new WeakMap();
weakMap.set(obj, '1111');
obj = null;
console.log(weakMap)