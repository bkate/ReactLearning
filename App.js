import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    constructor(){
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }


    forceUpdateHandler(){
        this.forceUpdate();
    };

     render() {
        return(
            <div>
                <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>State Number: {Math.random()}</h4>
            </div>
        );
    }
}

export default App
