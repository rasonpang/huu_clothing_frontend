import { User } from '@/interfaces/stores';
import { createMemo } from 'solid-js';
import { createStore } from 'solid-js/store';

const defaultData = () => ({
    id: null,
    name: 'Default',
    age: 0,
});

const [data, setData] = createStore<User>(defaultData());

const newData = {
    ...data,
    isLoggedIn: createMemo(() => data.id !== null)
};

const methods = {
    login: () => {
        setData({
            id: 1,
            name: 'Mofu',
            age: 0
        })
    },
    logout: () => {
        setData(defaultData());
    },
    name: (newName: string) => {
        setData({ name: newName });
    }
};

export {
    newData as user,
    methods as setUser
}