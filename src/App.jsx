import { Routes, Route } from "@solidjs/router";

import HomePage from './pages/index';
import SalesPage from "./pages/sales";

const routeList = [
    { path: "/", component: HomePage },
    { path: "/sales/:id", component: SalesPage },
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