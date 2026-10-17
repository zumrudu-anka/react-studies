// import { useRef } from "react";
import "./ParticipantCard.scss";

const ParticipantCard = ({ name, surname, image, amount, date, isActive }) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // const myRef = useRef();

    // if (isActive){
    //     myRef?.current?.scrollIntoView();
    // }
    return (
        <div className={`participant-card${isActive ? ' active' : ''}`}>
            <img src={image} alt="participant-image" />
            <div className="info">
                <h4>{name}</h4>
                <h4>{surname}</h4>
                <span>{`${day}.${month.toString().length === 1 ? '0' : ''}${month}.${year}`}</span>
                <span>{amount}</span>
            </div>
        </div>
    )
}

export default ParticipantCard