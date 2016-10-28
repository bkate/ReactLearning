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
                <ChildComponent myDataProps={this.state.data} updateMyData ={this.setStateHandler}/>
            </div>
        );
    }
}

class ChildComponent extends React.Component {
    render(){
        return (
            <div>
                <input type = "text" value = {this.props.myDataProps}
                onChange = {this.props.updateMyData}/>
                <h4>{this.props.myDataProps}</h4>
            </div>
        )
    }
}

export default App
