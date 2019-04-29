import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Main from './components/Main'
import './styles/style.css'

// Without jsx
// const element = React.createElement('h1', null, 'Stock Results');
// const list = React.createElement('ol', null, 
//     ['first', 'Second', 'Third'].map((item, index) => React.createElement('li', {key: index}, item))
//     );

// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(list, document.getElementById('root'));

// with jsx syntax
// const element = <Main/>;
//     <ol> 
//         {['first', 'Second', 'Third'].map((item, index) => <li key={index}>Stock Result {index}</li>)}
//     </ol>;

// const itemsList = ['first', 'Second', 'Third'];


ReactDOM.render(<Main/>, document.getElementById('root'));