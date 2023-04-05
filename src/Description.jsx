import { Component } from "react";

class Description extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
        <p>{this.props.name} plays as a winger for {this.props.team} and <br/>
        currently has the second most assist in the league!</p>
        </>
        )
    }
}


export default Description;