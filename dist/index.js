import { twice } from './tools.js';
export let x;
x = 3;
x = 78;
x = null;
if (x)
    console.log(twice(x));
