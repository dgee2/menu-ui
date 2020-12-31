import { getTheme, INavStyleProps, INavStyles, IStyleFunctionOrObject, Nav } from "@fluentui/react";
import React from "react";
import Links from "./Config";

const links = [
    {
        links: Links.map(
            (link) => {
                return {
                    name: link.displayName,
                    key: link.url,
                    url: link.url,
                    iconProps: {
                        iconName: link.icon
                    }
                }
            })
    }
];

type NavigationState = {
    selectedNavKey: string
}

class Navigation extends React.Component<any, NavigationState> {

    readonly navigationStyles: IStyleFunctionOrObject<INavStyleProps, INavStyles>;
    constructor(props: any) {
        super(props);
        this.state = {
            selectedNavKey: document.location.pathname || '/'
        }

        const theme = getTheme();

        this.navigationStyles = {
            root: {
                height: '100vh',
                backgroundColor: theme.palette.white,
            },
            link: {
                borderRadius: '0px'
            }
        }
    }

    public render() {
        let { selectedNavKey } = this.state;
        return (
            <Nav styles={this.navigationStyles}
                groups={links}
                selectedKey={selectedNavKey} />
        );
    }

    public componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({ selectedNavKey: document.location.pathname || '/' });
        })
    }
}

export default Navigation;
