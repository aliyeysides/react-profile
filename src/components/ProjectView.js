import React from 'react';
import ReactDOM from 'react-dom';
import SiestaSuite from './portfolio/SiestaSuite.js';
import {
    Grid,
    Row,
    Col,
    Clearfix,
    Image
} from 'react-bootstrap';

export default class ProjectView extends React.Component {
    render(){
        return (
            <Grid>
                <Col xs={12}>
                   <SiestaSuite />
                </Col>
            </Grid>
        )
    }
}