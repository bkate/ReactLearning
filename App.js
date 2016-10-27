import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {

    render() {
        return(
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool? "this is appearing because the bool is True..." : "this is appearing because the bool is False..."}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
            </div>
        );
    }
}

App.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propNumber: React.PropTypes.number.isRequired,
    propString: React.PropTypes.string.isRequired
};

App.defaultProps = {
    propArray : [1, 2, 3, 4],
    propBool: true,
    propNumber: 12,
    propString: "this is my String"
};

export default App
