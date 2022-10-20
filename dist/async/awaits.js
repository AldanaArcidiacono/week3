"use strict";
//import { doble } from '../tools.js';
const makeAsyncPromises2 = () => {
    let data;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const r = Math.random();
            if (r > 0.5) {
                data = '1000';
                resolve(data);
            }
            else {
                reject(new Error('Error ' + r));
            }
        }, 2000);
    });
};
(async () => {
    console.log('conectando...');
    try {
        const value = await makeAsyncPromises2();
        console.log(+value * 2);
    }
    catch (error) {
        console.log(error.message);
    }
    console.log('FIN');
})();
const pf = makeAsyncPromises2();
const qf = makeAsyncPromises2();
Promise.all([pf, qf]).then((cosas) => {
    cosas[0], cosas[1];
});
Promise.allSettled([pf, qf]).then((cosas) => {
    cosas[0], cosas[1];
});
