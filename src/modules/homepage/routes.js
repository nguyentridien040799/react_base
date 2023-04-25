import { lazy } from "react";

const routes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('./pages'))
    },
    {
        path: '/explore-mode',
        exact: true,
        component: lazy(() => import('./../explore_mode/pages/cities'))
    },
    {
        path: '/challenge-mode',
        exact: true,
        component: lazy(() => import('./../challenge_mode/pages/challenge'))
    },
    {
        path: '/today-example-mode',
        exact: true,
        component: lazy(() => import('./../today_example/pages/today-example'))
    },
]

export default routes;
