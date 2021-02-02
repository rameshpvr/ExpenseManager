import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import CustomButton from './CustomButton';

function Footer(props) {

   /*  const buttonList = [
        {
            key: 'successbtn',
            label: 'Add Money (+)',
            type: 'success',
            handler : 'popShow',
            input: 'Add'
        },
        {
            key: 'dangerbtn',
            label: 'Spended Money (+)',
            type: 'danger',
            handler : 'popShow',
            input : ''
        }
    ]; */

    return (
        <Row style={{ 'marginTop': "20px" }}>
          {
              /* buttonList.map((buttonInfo) => {
                  return(
                      <CustomButton
                        key={buttonInfo.key}
                        label={buttonInfo.label}
                        type={buttonInfo.type}
                        handler={props.popShow}
                      >
                      </CustomButton>
                  )
              }) */
          }
          <Col>
            <Button variant="success" onClick={() => props.popShow("Add")}>Add Money (+)</Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => props.popShow()}>Spended Money (-)</Button>
          </Col>
        </Row>
    )
}

export default Footer
