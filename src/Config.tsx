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
        component: () => (<div>Hello world</div>)
    },
    {
        displayName: 'Stats',
        url: '/stats',
        icon: 'StackedLineChart',
        component: () => (<div>Statistics</div>)
    },
    {
        displayName: 'Transfer',
        url: '/transfer',
        icon: 'SwitcherStartEnd',
        component: () => (<div>Transfer</div>)
    },
    {
        displayName: 'Users',
        url: '/users',
        icon: 'PlayerSettings',
        component: () => (<div>Users</div>)
    },
    {
        displayName: 'Settings',
        url: '/settings',
        icon: 'Settings',
        component: () => (<div>Settings</div>)
    }
]

export default Links;