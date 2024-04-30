import { ListItemButton, ListItemIcon } from "@mui/material"
import { PageType, RouteType } from "../../routes/config"
import colorConfigs from "../../configs/colorConfigs"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { APP_PAGES, notFoundPage } from "../../routes/appRoutes"

type Props = {
    item: RouteType
}

const SidebarItem = ({ item }: Props) => {
    const { appState } = useSelector((state: RootState) => state.appState)
    const apage = APP_PAGES.get(item.state) || notFoundPage
    return (
        item.sidebarProps && item.path ? (
            <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                    "&: hover": {
                        backgroundColor: colorConfigs.sidebar.hoverBg
                    },
                    backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
                    paddingY: "12px",
                    paddingX: "24px"
                }}
            >
                <ListItemIcon sx={{
                    color: colorConfigs.sidebar.color
                }}>
                    {apage.icon && apage.icon}
                </ListItemIcon>
                {item.sidebarProps.displayText}
            </ListItemButton>
        ) : null
    )
}

export default SidebarItem