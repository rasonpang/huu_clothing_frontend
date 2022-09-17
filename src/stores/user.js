import { createStore } from 'solid-js/store';

const [data, setData] = createStore({
    id: null,
    name: 'Default',
    age: 0
});

function setName(newName) {
    setData({ name: data.name == 'Default' ? 'Not Default' : 'Default' });
}

export const user = data;
export const setUser = {
    name: setName
};