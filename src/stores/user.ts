import { getStorage, removeStorage, setStorage } from '@/helper/storage';
import { User, UserCredential } from '@/interfaces/stores';
import { createMemo, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';

import apiData from '@/constants/user.json';

const defaultData = () => ({
    authenticated: false,
    name: 'Default',
});

const [data, setData] = createStore<User>(defaultData());

const methods = {
    login: async (credential: UserCredential) => {
        return new Promise((resolve: any, reject: any) => {
            // Imagine this is data returned from the server
            const { username, password, refresh } = credential;
            
            if ((username == 'test' && password == 'test') || (refresh == 'd21JK@#jkH#@DAS38asv')) {
                const { token, profile } = apiData;
                setData({ ...profile, authenticated: true });
                setStorage('token', token);

                resolve(true);
            } else {
                reject(`Invalid username or password.`)
            }
        });
    },
    logout: () => {
        setData(defaultData());
        removeStorage('token');
    },
    name: (newName: string) => {
        setData({ name: newName });
    }
};

onMount(() => {
    const token = getStorage('token', { parse: true });
    
    if (token?.refresh) methods.login({ refresh: token?.refresh });
});

const newData = {
    ...data,
    isAuthenticated: createMemo(() => data.authenticated)
};

export {
    newData as user,
    methods as setUser
}