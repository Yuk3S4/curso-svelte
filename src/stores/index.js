import { writable } from 'svelte/store';

const state = {
    id: null,
    url: null,
    message: null,
    title: null, // Texto que se va a mostrar
    type: null, // error o succes
    show: null, // true o false
    trailer: null,
    trailerActive: null,
    youtube: null // true - se quiere ver el video | false - se quiere eliminarlo
};

export const store = writable(state);