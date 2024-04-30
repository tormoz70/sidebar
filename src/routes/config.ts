import { ReactNode } from "react"

export type RouteType = {
    state: string,
    index?: boolean,
    path?: string,
    child?: RouteType[],
    sidebarProps?: {
        displayText: string,
    }
}

export type PageType = {
    element: ReactNode,
    icon?: ReactNode
}

