import { getStorage, removeStorage, setStorage } from '@/helper/storage';
import { User, UserCredential } from '@/interfaces/stores';
import { createMemo } from 'solid-js';
import { createStore } from 'solid-js/store';

const defaultData = () => ({
    id: null,
    name: 'Default',
    age: 0,
});

const userCookie = getStorage('user', { parse: true });
const [data, setData] = createStore<User>(
    Object.keys(userCookie).length > 0 
        ? userCookie
        : defaultData()
);

const newData = {
    ...data,
    isLoggedIn: createMemo(() => data.id !== null)
};

const methods = {
    login: async (credential: UserCredential) => {
        return new Promise((resolve: any, reject: any) => {
            if (credential.username == 'test' && credential.password == 'test') {
                const userData = {
                    id: 1,
                    name: 'Mofu',
                    age: 20
                };
                setData(userData)
                setStorage('user', userData)
                resolve(true);
            } else {
                reject(`Invalid username or password.`)
            }
        });
    },
    logout: () => {
        setData(defaultData());
        removeStorage('user');
    },
    name: (newName: string) => {
        setData({ name: newName });
    }
};

export {
    newData as user,
    methods as setUser
}