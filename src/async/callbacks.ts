const makeAsync = (callback: (value: string) => void) => {
    let data;
    setTimeout(() => {
        data = '1000';
        callback(data);
    }, 2000);
};

const render = (value: any) => {
    console.log(value);
};

console.log('conectando...');
makeAsync(render);

makeAsync((value) => {
    console.log(+value * 2);
});
