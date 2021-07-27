import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import AddItem from "../Components/AddItem/AddItem";
import Loader from "../Components/Common/Loader";
import Question from "../Components/Common/Question";
import Dashboard from "../Components/Dashboard/Dashboard";
import Header from "../Components/Header/Header";
import PlaceOrder from "../Components/PlaceOrder/PlaceOrder";
import ViewOrders from "../Components/ViewOrders/ViewOrders";
import { getUserInfo } from "../utils/AuthUtils";

const DefaultLayout = ({ children }) => (
    <>
        <Header />
        <div className="text-top-space">
            {children}
        </div>
    </>
);

const MainRoutes = () => {

    return (
        <Switch>
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
                        <RouteWrapper exact={true} path="/" component={Dashboard} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/myOrders" component={ViewOrders} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/placeOrder" component={PlaceOrder} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/addItem" component={AddItem} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/findSimilarity" component={Dashboard} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/help" component={Dashboard} layout={DefaultLayout} />
                    </>
                )}
            </Suspense>
        </Switch>
    );
};

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }

export default MainRoutes;
