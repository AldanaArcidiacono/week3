const makeAsyncPromises = (): Promise<string> => {
    let data;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const r = Math.random();
            if (r > 0.5) {
                data = '1000';
                resolve(data);
            } else {
                reject(new Error('Error ' + r));
            }
        }, 2000);
    });
};

const render2 = (value: string) => {
    console.log(value);
};

console.log('conectando...');
makeAsyncPromises()
    .then((value) => {
        render2(value);
    })
    .catch((error: Error) => {
        console.log(error.message);
    });

makeAsyncPromises()
    .then((value) => {
        console.log(+value * 2);
    })
    .catch((error: Error) => {
        console.log(error.message);
    });
