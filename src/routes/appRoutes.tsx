import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnaliticsPage from "../pages/dashboard/AnaliticsPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DefaultPage from "../pages/dashboard/DefaultPage";
import SaasPage from "../pages/dashboard/SaasPage";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage/>,
        state: "home"
    },
    {
        path: "/dashboard",
        element: <DashboardPageLayout/>,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon/>,
        },
        child: [
            {
                index: true,
                element: <DashboardIndex/>,
                state: "dashboard.index"
            },
            {
                path: "/dashboard/default",
                element: <DefaultPage/>,
                state: "dashboard.default",
                sidebarProps: {
                    displayText: "Default"
                }
            },
            {
                path: "/dashboard/analitics",
                element: <AnaliticsPage/>,
                state: "dashboard.analitics",
                sidebarProps: {
                    displayText: "Analitics"
                }
            },
            {
                path: "/dashboard/saas",
                element: <SaasPage/>,
                state: "dashboard.saas",
                sidebarProps: {
                    displayText: "Saas"
                }
            }
        ]
    },
    {
        path: "/changelog",
        element: <ChangelogPage/>,
        state: "changelog",
        sidebarProps: {
            displayText: "ChangeLog",
            icon: <FormatListBulletedOutlinedIcon/>
        }
    }

];

export default appRoutes;