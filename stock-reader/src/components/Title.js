import React, {Component} from 'react';
import ReactDOM from 'react-dom'

function Title(props){
    return (<h1>{props.title}</h1>);

}

// class Title extends Component{
//     render(){
//         return (<h1>{this.props.title}</h1>);
//     }
// }

export default Title;