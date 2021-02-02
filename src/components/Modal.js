import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

function ModalComponent(props) {
    return (
        <Modal show={props.showPopup} >
            <Modal.Header >
            <Modal.Title>{props.incomeType ? "Add Spended Money" : "Add Received Money"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={props.handleFormSubmit}>
                <label>
                {props.incomeType ? "Spended Money" : "Add Money"}    : <input name="addedMoney" type="number" onChange={props.handleInput} />
                </label>
                <label>
                Add Description: <input name="description" type="text" onChange={props.handleInput} />
                </label>

            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => props.handleShowPopup(false)} >
                Close
            </Button>
            <Button variant="primary" onClick={props.handleSubmit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent;
