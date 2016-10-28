import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: 0
        };
        this.setNewNumber = this.setNewNumber.bind(this);
    };
    setNewNumber(){
        this.setState({data: this.state.data + 1})
    };

     render() {
        return(
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data} />
            </div>
        );
    }
}

class Content extends React.Component {

    componentWillMount(){
        console.log("Component Will Mount")
    };

    componentDidMount(){
        console.log("Component Did Mount")
    };

    componentWillReceiveProps(newProps){
        console.log(" component Will Recieve Props ")
    }

    shouldComponentUpdate(newProps, newState){
        console.log(" should Component Update ");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default App
