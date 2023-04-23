import {lazy} from "react";

const routes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('./pages'))
    }
]

export default routes;
