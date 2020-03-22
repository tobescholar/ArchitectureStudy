class MyArr extends Array {
    constructor(...args) {
        super(args);
    }
}

const arr = new MyArr(1,2,3);
// 衍生对象
const newArr = arr.map(i => i * 2);

console.log(newArr instanceof MyArr)
console.log(newArr instanceof Array);


class MyArr1 extends Array {
    constructor(...args) {
        super(args);
    }
    get [Symbol.species]() {
        return Array;
    }
}

const arr1 = new MyArr1(1,2,3);
const newArr1 = arr.map(i => i * 2);
console.log(newArr1 instanceof MyArr1)
console.log(newArr1 instanceof Array);
