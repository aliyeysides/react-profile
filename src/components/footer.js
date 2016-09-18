import React from 'react';
import ReactDOM from 'react-dom';
import {
    Grid,
    Row,
    Col,
    Clearfix
} from 'react-bootstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} xsOffset={3}><div className="footer">© Ali Yeysides 2016</div></Col>
                </Row>
            </Grid>
        )
    }
}