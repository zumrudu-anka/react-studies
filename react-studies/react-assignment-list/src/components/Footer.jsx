/**
*   Created By Osman DURDAG
*/

import { Component } from 'react'
import hero from "../assets/images/hero.png";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={"logo"}>
                    <img src={hero} alt=""/>
                </div>
                <div className={"address"}>
                    <h2>Atauni</h2>
                    <p>
                        Atauni
                        <br/>
                        Atauni
                        <br/>
                        Erzurum
                        <br/>
                        Turkey
                    </p>
                </div>
                <div className={"contact"}>
                    <h2>CONTACT</h2>
                    <p>
                        Phone: +90 000 000 00 00
                        <br/>
                        Fax: +90 000 000 00 00
                    </p>
                </div>
            </footer>
        )
    }
}
