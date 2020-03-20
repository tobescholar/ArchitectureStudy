const fs = require('fs').promises;

function* ittest() {
    try {
        const fileName = yield fs.readFile('./a.txt', 'utf8');
        const age = yield fs.readFile(fileName, 'utf8');
        const tenYearsAgo = yield Number(age) + 10;
        return tenYearsAgo;
    }catch(e) {
        console.log(e);
    }
}

// co
const co = (it) => {
    return new Promise((resolve, reject) => {
        function next(data) {
            const { value, done } = it.next(data);
            if(done) return resolve(value);
            Promise.resolve(value).then(data => {
                next(data);
            }, reject)
        }
        next();
    })
}


co(ittest()).then(console.log, console.error);
