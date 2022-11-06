import { Setting } from '@/interfaces/stores';
import { createMemo } from 'solid-js';
import { createStore } from 'solid-js/store';

// Data
const [data, setData] = createStore<Setting>({
    handed: 'right',
});

// Function
const methods = {
    setHanded() {
        const newHanded = data.handed == 'left' ? 'right' : 'left';
        setData({ handed: newHanded });
    }
};

const newData = createMemo(() => data);

export {
    newData as setting,
    methods as setSetting
}