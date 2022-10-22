import { useParams } from '@solidjs/router';
import { createResource } from 'solid-js';

export const getParam = (key) => {
    const [param] = createResource(() => useParams()[key]);

    return param;
};