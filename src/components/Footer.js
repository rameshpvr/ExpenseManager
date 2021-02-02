import React from 'react';
import Row from 'react-bootstrap/Row'
import CustomButton from './CustomButton';

function Footer(props) {

    const buttonList = [
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
    ];

    return (
        <Row style={{ 'marginTop': "20px" }}>
          {
              buttonList.map((buttonInfo) => {
                  return(
                      <CustomButton
                        key={buttonInfo.key}
                        label={buttonInfo.label}
                        type={buttonInfo.type}
                        handler={props.popShow}
                      >
                      </CustomButton>
                  )
              })
          }
          
        </Row>
    )
}

export default Footer
