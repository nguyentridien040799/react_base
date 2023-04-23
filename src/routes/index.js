import React, { Suspense }  from "react";
import {Routes, Route} from "react-router-dom";
import listRoutes from "./routes";
import PublicRoute from "./public";
import HomePage from './../modules/homepage/pages'
import ExploreMode from './../modules/explore_mode/pages/cities'
import ChallengeMode from './../modules/challenge_mode/pages/challenge'
import TodayExampleMode from './../modules/today_example/pages/today-example'

const ListRoutes = () => (
    <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/explore-mode" element={<ExploreMode/>}/>
        <Route path="/challenge-mode" element={<ChallengeMode/>}/>
        <Route path="/today-example-mode" element={<TodayExampleMode/>}/>
    </Routes>
)

export default ListRoutes;
