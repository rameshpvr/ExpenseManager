import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

function CustomButton(props) {
    let input = props.input;
    return (
        <Col>
            <Button variant={props.type} onClick={() => props.handler(input)}>{props.label}</Button>
        </Col>
    )
}

export default CustomButton
