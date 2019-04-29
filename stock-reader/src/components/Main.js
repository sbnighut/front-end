import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import List from './List'

class Main extends Component{
    render(){
        return  <div>
                    <List items={['One', 'Two', 'Three']}/>
                    <List items={['first', 'Second', 'Third']}/>
                </div>;
    }
}
   
export default Main