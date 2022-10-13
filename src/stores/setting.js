import { createStore } from 'solid-js/store';

// Data
const [data, setData] = createStore({
    handed: 'right',
});

// Function
const methods = {
    setHanded() {
        const newHanded = data.handed == 'left' ? 'right' : 'left';
        console.log('newHanded', newHanded);
        setData({ handed: newHanded });
    }
};

export {
    data as setting,
    methods as setSetting
}