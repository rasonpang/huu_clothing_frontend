import { Routes, Route } from "@solidjs/router";

import Layout from "@/layouts/default";

import HomePage from "./pages/index";
import SalesPage from "./pages/sales";
import LoginPage from "./pages/login";

const routeList = [
    { path: "/", component: HomePage },
    { path: "/sales/:id", component: SalesPage },
    { path: "/login", component: LoginPage },
];

const App = () => {
    const routeData = routeList.map(function (route) {
        return {
            path: route.path,
            component: route.component,
        };
    });

    return (
        <>
            <Layout>
                <Routes>
                    {routeData.map((route) => (
                        <Route path={route.path} component={route.component} />
                    ))}
                </Routes>
            </Layout>
        </>
    );
};

export default App;
