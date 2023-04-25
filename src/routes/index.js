import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import listRoutes from "./routes";
import PublicRoute from "./public";
import PrivateRoute from "./private";
import Layout from "../layout";

const ListRoutes = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                {listRoutes.map((route, i) => {
                    if (route.auth) {
                        return <PrivateRoute key={i} {...route} />
                    }
                    return <PublicRoute key={i} {...route} />
                })}
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default ListRoutes;
