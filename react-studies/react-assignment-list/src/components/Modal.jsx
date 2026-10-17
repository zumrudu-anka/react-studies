/**
*   Created By Osman DURDAG
*/

import { Component } from 'react';
import briefingIcon from "../assets/images/flags/tr.png";

export default class Modal extends Component {
    
    render() {
        return (
            <div className={`modal ${this.props.modalIsOpened ? 'active' : ''}`}>
                <button className={"closeButton"} onClick = {() => this.props.closeModal()}>
                  X
                </button>
                <div className={"modalContent"}>
                    <div className="leftArrow">
                        {"<"}
                    </div>
                    <div className="modalCenter">
                        <img src={briefingIcon} alt="Briefing"/>
                    </div>
                    <div className="rightArrow">
                        {">"}
                    </div>
                </div>
            </div>
        )
    }
}
