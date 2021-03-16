import React from "react";
import './Card.css'
import ModalWindow from "../ModalWindow/Modal";

const Card = ({data}) => {
    const [modalStatus, setModalStatus] = React.useState(false)
    const info = data.map((item, index) => {
        return (
            <>
                <li key={index}>
                    <img src={item.picture} alt=""/>
                    <p>
                        Name: {item.name}
                    </p>
                    <p>
                        Age: {item.age}
                    </p>
                    <p>
                        Gender: {item.gender}
                    </p>
                    <p>
                        Balance: {item.balance}
                    </p>
                    <hr/>

                </li>

            </>

        )
    })

    const modalWindow = () => {
        setModalStatus(!modalStatus);

    }

    return (
        <>
            <div className='Card' onClick={modalWindow}>
                <ul>
                    {info}

                </ul>
            </div>
            <ModalWindow show={modalStatus}/>
        </>


    )
}

export default Card;