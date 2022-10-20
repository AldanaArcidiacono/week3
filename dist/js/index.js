"use strict";
const main = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const eInput = document.querySelector('[name = "user-name"]');
        const value = eInput.value;
        const eOutput = document.querySelector('output');
        eOutput.value = `Hey ${value}`;
        const template = `
        <article>
            <h3>La vida de ${value}</h3>
        </article>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            placeat dolore ea, deleniti ${value} id voluptates ullam amet porro,
            repudiandae ${value} possimus rem cum doloremque, similique culpa eaque
            nam temporibus minima explicabo?
        </p>
    `;
        const eSlot = document.querySelector('slot');
        eSlot.outerHTML = template;
    };
    const eUserForm = document.querySelector('.user-form');
    eUserForm?.addEventListener('submit', handleSubmit);
};
console.log('Loaded Index');
document.addEventListener('DOMContentLoaded', main);
