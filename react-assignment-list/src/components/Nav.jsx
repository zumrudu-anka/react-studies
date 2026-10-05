/**
*   Created By Osman DURDAG
*/

import { Component } from 'react';
import hero from "../assets/images/hero.png";
import LangSelect from './LanguageSelect/LangSelect';

export default class Nav extends Component {
   
    state = {
        isMobile : window.innerWidth < 770 ? true : false
    }
    

    changeProfession = (event) => {
        this.props.selectProfession(event);
    }

    getWindowDimensions() {
        let width = window.innerWidth;
        if (width < 770){
            this.setState({
                isMobile : true
            });
        }
        else{
            this.setState({
                isMobile : false
            });
        }
    }

    componentDidMount() {
        window.addEventListener("load", () => this.getWindowDimensions());
        window.addEventListener("resize", () => this.getWindowDimensions());
    }

    render() {
        return (
            <header>
                <nav>
                    <div className={"ProfessionSelect"}>
                        <select name="profession" id="profession" onChange = {this.changeProfession}>
                            <option value="web">{this.state.isMobile ? "WD" : "Web Developer"}</option>
                            <option value="android">{this.state.isMobile ? "AD" : "Android Developer"}</option>
                            <option value="graphic">{this.state.isMobile ? "GD" : "Graphic Designer"}</option>
                        </select>
                    </div>
                    <div className={"logo"}>
                        <a href="https://www.osmandurdag.com">
                            <img src={hero} alt=""/>
                        </a>
                    </div>
                    <LangSelect
                        onChange={() =>{
                            this.forceUpdate();
                        }}
                    />
                </nav>
            </header>
        )
    }
}
