// 迭代器解构

const iterator1 = {
    0: 'iterator value1',
    1: 'iterator value2',
    length: 2,
    [Symbol.iterator]: function* () {
        let i = 0;
        while(i++ < this.length) {
            yield this[i - 1];
        }
    }
}

const iterator2 = {
    0: 'iterator value1',
    1: 'iterator value2',
    length: 2,
    [Symbol.iterator]: function () {
        let i = 0;
        let _this = this;
        return {
            next() {
                return {value: _this[i], done: i++ > 1}
            }
        }
    }
}

console.log(...iterator1);
console.log(...iterator2);