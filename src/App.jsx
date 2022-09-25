import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

const App = () => {
    // Manual routes
    const routeList = [
        { path: "/", importPath: "index" },
    ];

    // Automation routes
    const routeData = routeList.map(function(route) {
        return ({
            path: route.path,
            component: lazy(() => import(`@/pages/${route.importPath}.jsx`))
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