import React from "react";
import './Card.css'
import ModalWindow from "../ModalWindow/Modal";

const Card = ({data}) => {
    const [modalStatus, setModalStatus] = React.useState(false)

    React.useEffect(()=>{
        return () => {

        }
    })
    const closeModal = () => {
        setModalStatus(false)
    }



    const info = data.map((item, index) => {
        const modalWindow = () => {
            setModalStatus(!modalStatus)
            console.log(item._id)
        }
        return (
            <>
                <li key={item._id}>
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
                    <button onClick={modalWindow}>Show More</button>
                    <ModalWindow item={item} close={closeModal} show={modalStatus}/>
                </li>
            </>



        )
    })



    return (
            <div className='Card'>
                <ul>
                    {info}
                </ul>

            </div>
    )
}

export default Card;