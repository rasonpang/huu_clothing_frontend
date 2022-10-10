import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import IndexPage from '@/pages/index';

const routeList = [
    { path: "/", component: IndexPage },
];

const App = () => {
    const routeData = routeList.map(function(route) {
        return ({
            path: route.path,
            component: route.component
        })
    })

    return <>
        <Routes>
            {routeData.map((route) => (
                <Route
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Routes>
    </>
}

export default App;