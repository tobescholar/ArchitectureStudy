const fs = require('fs').promises;

function* readFile() {
    try {
        const fileName = yield fs.readFile('./a.txt', 'utf8');
        const age = yield fs.readFile(fileName, 'utf8');
        return age;
    }catch(e) {
        console.log(e);
    }
}

const it = readFile();
const {value, done} = it.next();
value.then(data => {
    const { value, done } = it.next(data);
    value.then(data => {
        console.log(data);
    }).catch(e => it.throw(e))
}).catch(e => it.throw(e))
