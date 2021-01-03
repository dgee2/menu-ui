import { DetailsListLayoutMode, IColumn, Link, ShimmeredDetailsList } from "@fluentui/react";
import React from "react";

interface IRestExampleState {
    hits: any[] | undefined
}


function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class RestExample extends React.Component<{}, IRestExampleState> {
    private _columns: IColumn[] = [
        { key: 'column2', name: 'Name', minWidth: 50, maxWidth: 1000, isResizable: true, onRender: item => (
            <Link href={item.url}>{item.title}</Link>
        )},
        { key: 'points', name: 'Points', fieldName: 'points', minWidth: 50, maxWidth: 55, isResizable: true }
    ];

    async componentDidMount() {
        const response = await fetch("https://hn.algolia.com/api/v1/search?query=JavaScript");
        const json = await response.json();
        const hits = json.hits;
        await sleep(2000);
        this.setState({ hits: hits });
    }

    render() {
        return (
            <ShimmeredDetailsList
                items={this.state?.hits || []}
                columns={this._columns}
                layoutMode={DetailsListLayoutMode.justified}
                enableShimmer={!this.state?.hits}
            />
        );
    }
}

export default RestExample;