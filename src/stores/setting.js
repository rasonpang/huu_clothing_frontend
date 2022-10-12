import { createStore } from 'solid-js/store';

// Data
const [data, setData] = createStore({
    handed: 'right',
});

// Function
const methods = {
    setHanded(position) {
        setData({ handed: position });
    }
};

export {
    data as setting,
    methods as setSetting
}