import { Auth } from "aws-amplify";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Loader from "../Components/Common/Loader";
import Dashboard from "../Components/Dashboard/Dashboard";

const MainRoutes = () => {
    return (
        <Switch>
            <Suspense fallback={<Loader />}>
                {/* <Redirect exact from="/" to="/dashboard" /> */}

                <Route exact={true} path="/" component={Dashboard} />
            </Suspense>
        </Switch>
    );
};

export default MainRoutes;
