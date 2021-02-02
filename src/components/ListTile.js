import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function ListTile(props) {

    const expenditure = localStorage.getItem('expenditure') === null ? props.expenditure : JSON.parse(localStorage.getItem('expenditure'))

    return (
        <div>
            {
                expenditure.map((spend, index) => {
                    return(
                        <ListGroup.Item 
                            style={{
                                "display": "flex",
                                "justifyContent": "space-between"
                            }} 
                            key={index} 
                            variant={spend.spended ? "danger" : "success"}>
                            <div>{spend.date}</div>
                            <div>{spend.description}</div>
                            <div>{"Rs."}{spend.moneyValue}</div>
                        </ListGroup.Item>
                    ) 
                  })
            }
        </div>
    )
}

export default ListTile
