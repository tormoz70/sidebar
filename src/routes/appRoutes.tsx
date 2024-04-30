import { ReactNode } from "react";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnaliticsPage from "../pages/dashboard/AnaliticsPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DefaultPage from "../pages/dashboard/DefaultPage";
import SaasPage from "../pages/dashboard/SaasPage";
import HomePage from "../pages/home/HomePage";
import { PageType, RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const APP_ROUTES: RouteType[] = [
    {
        index: true,
        state: "home"
    },
    {
        path: "/dashboard",
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
        },
        child: [
            {
                index: true,
                state: "dashboard.index"
            },
            {
                path: "/dashboard/default",
                state: "dashboard.default",
                sidebarProps: {
                    displayText: "Default"
                }
            },
            {
                path: "/dashboard/analitics",
                state: "dashboard.analitics",
                sidebarProps: {
                    displayText: "Analitics"
                }
            },
            {
                path: "/dashboard/saas",
                state: "dashboard.saas",
                sidebarProps: {
                    displayText: "Saas"
                }
            }
        ]
    },
    {
        path: "/changelog",
        state: "changelog",
        sidebarProps: {
            displayText: "ChangeLog",
        }
    }

];


export const APP_PAGES: Map<String, PageType> = new Map([
    ["home", { element: <HomePage/> }],
    ["dashboard", { element: <DashboardPageLayout/> , icon: <DashboardOutlinedIcon/> }],
    ["dashboard.index", { element: <DashboardIndex/> }],
    ["dashboard.default", { element: <DefaultPage/> }],
    ["dashboard.analitics", { element: <AnaliticsPage/> }],
    ["dashboard.saas", { element: <SaasPage/> }],
    ["changelog", { element: <ChangelogPage/>, icon: <FormatListBulletedOutlinedIcon/> }]
  ])

export const notFoundPage: PageType = { element: undefined, icon: undefined }

export default APP_ROUTES;