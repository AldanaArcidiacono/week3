const foo = (p = 1) => {
    if (p === 0) {
        throw new Error('No quiero 0');
    }
    return 'pepe ' + 30 / p;
};

try {
    console.log(foo(0));
} catch (error: any) {
    console.error((error as Error).message);
}

const bar = async (p = 1) => {
    if (p === 0) {
        throw new Error('No quiero 0'); // se convierte en resolve
    }
    return 'ernesto ' + 30 / p; // se convierte en reject
};

bar()
    .then((value) => console.log(value))
    .catch((error: Error) => console.error(error.message));
