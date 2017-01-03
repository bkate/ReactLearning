import React from 'react';
import ReactDOM from 'react-dom';

// React keys are useful when working with dynamically created components or when your lists are altered by users.
// Setting the key value will keep your components uniquely identified after the change.

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    component: 'First...',
                    id: 1
                },
                {
                    component: 'Second...',
                    id: 2
                },
                {
                    component: 'third...',
                    id: 3
                }
            ]
        };


    };

    render() {
        return (
            <div>
                {this.state.data.map((dynamicComponent) => <Content
                componentData = {dynamicComponent}/>)}
            </div>
        );
    }
}

class Content extends React.Component {
    render(){
        return(
            <div>
                <div>{this.props.componentData.component}</div>
                <div>{this.props.componentData.id}</div>
            </div>
        )
    }

}


export default App;