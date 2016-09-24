import React from 'react';
import ReactDOM from 'react-dom';
import {
    Image
} from 'react-bootstrap';

export default class Project extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return <Image
                src={this.props.src}
                responsive
                />
    }
}