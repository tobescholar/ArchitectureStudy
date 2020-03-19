// react 事务 AOP

const perform = (anymethod, wappers) => {
    wappers.forEach(i => i.initilizae());
    anymethod();
    wappers.forEach(i => i.close());
}


perform(() => {
    console.log('说话');
}, [
    {
        initilizae() {
            console.log('你好');
        },
        close() {
            console.log('再见！');
        }
    },
    {
        initilizae() {
            console.log('你好1');
        },
        close() {
            console.log('再见1！');
        }
    }
])