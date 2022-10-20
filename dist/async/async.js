"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const foo = (p = 1) => {
    if (p === 0) {
        throw new Error('No quiero 0');
    }
    return 'pepe ' + 30 / p;
};
try {
    console.log(foo(0));
}
catch (error) {
    console.error(error.message);
}
const bar = (p = 1) => __awaiter(void 0, void 0, void 0, function* () {
    if (p === 0) {
        throw new Error('No quiero 0'); // se convierte en resolve
    }
    return 'ernesto ' + 30 / p; // se convierte en reject
});
bar()
    .then((value) => console.log(value))
    .catch((error) => console.error(error.message));
