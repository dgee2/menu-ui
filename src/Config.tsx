import { Text } from "@fluentui/react";
import React from "react";
import RestExample from "./RestExample";

type Link = {
    displayName: string,
    icon?: string,
    url: string,
    component: any
}

const Links: Link[] = [
    {
        displayName: 'Home',
        url: '/',
        icon: 'Home',
        component: <Text>Hello world</Text>
    },
    {
        displayName: 'Stats',
        url: '/stats',
        icon: 'StackedLineChart',
        component: <Text>Statistics</Text>
    },
    {
        displayName: 'Transfer',
        url: '/transfer',
        icon: 'SwitcherStartEnd',
        component: <Text>Transfer</Text>
    },
    {
        displayName: 'Users',
        url: '/users',
        icon: 'PlayerSettings',
        component: <Text>Users</Text>
    },
    {
        displayName: 'Settings',
        url: '/settings',
        icon: 'Settings',
        component: <Text>Settings</Text>
    },
    {
        displayName: 'Rest Example',
        url: '/rest-example',
        icon: 'AzureAPIManagement',
        component: <RestExample />
    }
]

export default Links;