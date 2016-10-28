import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    constructor(){
        super();
        this.findMyDivNodeHandler = this.findMyDivNodeHandler.bind(this);
    };
    findMyDivNodeHandler(){
        var myDiv = document.getElementById("myDiv");
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
    };

     render() {
        return(
            <div>
                <button onClick={this.findMyDivNodeHandler}>FORCE UPDATE</button>
                <div id="myDiv">NODE</div>
            </div>
        );
    }
}

export default App
