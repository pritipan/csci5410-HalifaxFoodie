import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from "../Components/Common/Loader";
import Question from "../Components/Common/Question";
import Dashboard from "../Components/Dashboard/Dashboard";
import { getUserInfo } from "../utils/AuthUtils";

const MainRoutes = () => {

    return (
        <Switch>
            {console.log("getUserInfo :", getUserInfo())}
            <Suspense fallback={<Loader />}>
                {/* <Redirect exact from="/" to="/dashboard" /> */}

                {getUserInfo()?.isQuestion ? (
                    <>
                        <Route
                            exact={true}
                            path="/"
                            component={Question}
                        />
                        <Redirect to="/" />
                    </>
                ) : (
                    <>
                        <Route exact={true} path="/" component={Dashboard} />
                    </>
                )}
            </Suspense>
        </Switch>
    );
};

export default MainRoutes;
