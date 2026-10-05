import React, { Component } from 'react'

export default class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.query = new URLSearchParams(this.props.location.search);

        console.log(this.props);

    }

    render() {
        return (
            <div>
                <h2>
                    Id is = {this.props.match.params.id}
                </h2>
                <h2>
                    {this.query.get("first")}
                </h2>
                <h2>
                    {this.query.get("last")}
                </h2>

                Portfolio
            </div>
        )
    }
}
