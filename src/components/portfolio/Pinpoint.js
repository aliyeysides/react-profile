import React from 'react';
import ReactDOM from 'react-dom';
import Project from '../Project.js';
import {
    Image
} from 'react-bootstrap';

export default class Pinpoint extends Project {
    render(){
        return <Project src="../../../public/siesta-harness-example.png" />
    }
}