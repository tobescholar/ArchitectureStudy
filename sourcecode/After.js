const after = (times, fn) =>  () => --times === 0 && fn();


const afters = after(3, () => {
    console.log('三次执行')
})

afters();
afters();
afters();
