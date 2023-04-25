import homepageRoutes from '../modules/homepage/routes';
import exploreModeRoutes from '../modules/explore_mode/routes';
import challengeModeRoutes from '../modules/challenge_mode/routes';
import todayExampleRoutes from '../modules/today_example/routes';

export default [
    ...homepageRoutes
    , ...exploreModeRoutes, ...challengeModeRoutes, ...todayExampleRoutes
];
