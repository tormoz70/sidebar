import { ReactNode } from "react";
import { RouteType } from "./config";
import { Route } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import APP_ROUTES, { APP_PAGES } from "./appRoutes";

const generateRoute = (routes: RouteType[]): ReactNode => {
    return routes.map((route, index) => (
        route.index ? (
            <Route
                index
                path={route.path}
                element={<PageWrapper state={route.state}>
                    {APP_PAGES.get(route.state)?.element}
                </PageWrapper>}
                key={index}
            />
        ) : (
            <Route
                path={route.path}
                element={
                    <PageWrapper state={route.child ? undefined : route.state}>
                        {APP_PAGES.get(route.state)?.element}
                    </PageWrapper>
                }
                key={index}
            >
                {route.child && (
                    generateRoute(route.child)
                )}
            </Route>
        )
    ))
};

export const routes: ReactNode = generateRoute(APP_ROUTES);

