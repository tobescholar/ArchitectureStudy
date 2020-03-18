// vue双向绑定，简单的实现
function valueUpdate() {
    console.log('数据变化！');
}

const arrProto = Array.prototype;
const proto = Object.create(arrProto);

['push', 'unshift'].forEach(key => {
    proto[key] = function() {
        arrProto[key].apply(this, arguments)
        valueUpdate();
    }
});



function observer(value) {
    if(typeof value !== 'object') {
        return value;
    }

    if(Array.isArray(value)) {
        value.__proto__ = proto
    }

    for(let key in value) {
        definedReactive(value, key, value[key]);
    }
}

function definedReactive(obj, key, value) {
    observer(value);
    Object.defineProperty(obj, key, {
        get() {
            return value;
        },
        set(newValue) {
            if(newValue === value) return;
            observer(newValue);
            value = newValue;
            valueUpdate();
        }
    })
}

const data = {
    info: {
        name: 'daocao',
    },
    arr: [1,2,3],
    test: 'scholar',
}

observer(data);
data.test = 'daocao';
data.info.name = 'scholar';
data.arr.push(4)

