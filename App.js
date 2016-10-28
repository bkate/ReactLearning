import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: "initial input..."
        };
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler(e){
        this.setState({data: e.target.value});
    };

     render() {
        return(
            <div>
                <input type="text" value={this.state.data} onChange={this.setStateHandler}/>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

export default App
