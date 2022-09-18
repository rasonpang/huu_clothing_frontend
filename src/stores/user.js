import { createStore } from 'solid-js/store';

const [data, setData] = createStore({
    id: null,
    name: 'Default',
    age: 0
});

const methods = {
    name: (newName) => {
        setData({ name: data.name == 'Default' ? 'Not Default' : 'Default' });
    }
};

export {
    data as user,
    methods as setUser
}