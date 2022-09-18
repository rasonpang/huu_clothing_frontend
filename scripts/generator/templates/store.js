export const template = (name) => `import { createStore } from 'solid-js/store';

// Data
const [data, setData] = createStore({

});

// Function
const methods = {
    
};

export {
    data as ${name},
    methods as set${name.charAt(0).toUpperCase() + name.slice(1)}
}`;