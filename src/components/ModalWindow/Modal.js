import React from "react";
import './Modal.css'

const ModalTutorLink = ['https://www.digitalocean.com/community/tutorials/react-modal-component'];


const ModalWindow = props => {
    const showModal = props.show ? 'display-block': 'display-none';
    const cls = ['Modal', showModal]
    return(
        <div className={cls.join(' ')}>
            <div>
                <h2>Name</h2>
                <p>age</p>
                <p>bruh</p>
                <p>kek</p>
                <p>wait</p>
                <p>lol</p>
                <button onClick={props.close}>Close</button>
            </div>

        </div>
    )
}

export default ModalWindow