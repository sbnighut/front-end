import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Photo from './Photo'

function PhotoWall(props){
    return (
            <div className="photoGrid">
                {props.posts.map((post, index)=> <Photo key={index} post={post}></Photo>)}
            </div>
        )
}

// class PhotoWall extends Component{
//     render(){
//         return (
//             <div className="photoGrid">
//                 {this.props.posts.map((post, index)=> <Photo key={index} post={post}></Photo>)}
//             </div>
//         )
//     }
// }

export default PhotoWall;