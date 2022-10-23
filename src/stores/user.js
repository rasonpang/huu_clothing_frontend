import { createStore } from 'solid-js/store';

const defaultData = {
    id: null,
    name: 'Default',
    age: 0
};

const [data, setData] = createStore(defaultData);

const newData = {
    ...data,
    isLoggedIn: data.id !== null
};

const methods = {
    login: () => {
        console.log('login')
        setData({
            id: 1,
            name: 'Mofu',
            age: 0
        })
    },
    logout: () => {
        setData(defaultData);
    },
    name: (newName) => {
        setData({ name: data.name == 'Default' ? 'Not Default' : 'Default' });
    }
};

export {
    newData as user,
    methods as setUser
}