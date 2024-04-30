import { useEffect, useState } from 'react'
import { RouteType } from '../../routes/config'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import colorConfigs from '../../configs/colorConfigs'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from './SidebarItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { APP_PAGES, notFoundPage } from '../../routes/appRoutes'

type Props = {
    item: RouteType
}

const SidebarItemCollapse = ({ item }: Props) => {
    const [open, setOpen] = useState(false)

    const { appState } = useSelector((state: RootState) => state.appState)

    useEffect(() => {
        if (appState.includes(item.state)) {
            setOpen(true);
        }
    }, [appState, item]);
    
    const apage = APP_PAGES.get(item.state) || notFoundPage
    
    return (
        item.sidebarProps ? (
            <>
                <ListItemButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        "&: hover": {
                            backgroundColor: colorConfigs.sidebar.hoverBg
                        },
                        paddingY: "12px",
                        paddingX: "24px"
                    }}
                >
                    <ListItemIcon sx={{
                        color: colorConfigs.sidebar.color
                    }}>
                        {apage.icon && apage.icon}
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography>
                                {item.sidebarProps.displayText}
                            </Typography>
                        }
                    />
                    {open ? <ExpandLessOutlinedIcon/> : <ExpandMoreOutlinedIcon/>}
                </ListItemButton>
                <Collapse in={open} timeout="auto">
                    <List>
                        {item.child?.map((route, index) => (
                            route.sidebarProps ? (
                                route.child ? (
                                    <SidebarItemCollapse item={route} key={index}/>
                                ) : (
                                    <SidebarItem item={route} key={index}/>
                                )
                            ) : null
                        ))}
                    </List>
                </Collapse>
            </>
        ) : null
    )
}

export default SidebarItemCollapse