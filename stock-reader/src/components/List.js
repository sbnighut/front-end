
import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class List extends Component{
    
    render(){
        return (    <ol> 
                        {this.props.items.map((item, index) => <li key={index}>Stock Result {item}</li>)}
                    </ol>);
    }
}

export default List;