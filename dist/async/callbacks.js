"use strict";
const makeAsync = (callback) => {
    let data;
    setTimeout(() => {
        data = '1000';
        callback(data);
    }, 2000);
};
const render = (value) => {
    console.log(value);
};
console.log('conectando...');
makeAsync(render);
makeAsync((value) => {
    console.log(+value * 2);
});
