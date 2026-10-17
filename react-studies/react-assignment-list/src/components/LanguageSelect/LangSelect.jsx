/**
*   Created By Osman DURDAG
*/

import { Component } from 'react';
import Shared from "../../config/Shared";
import LanguageList from './LanguageList';
import { flags } from '../../assets/images/flags';

export default class LangSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    render() {
        let lang = Shared.lang;
        return (
            <div className="lang-select">
                <img
                    src={flags[`${lang}`]}
                    onClick={()=>{
                        this.setState({
                            isOpen : true
                        });
                    }}
                    alt = "languageImage"
                    className = {"selected-language"}
                />
                <LanguageList
                    isOpen = {this.state.isOpen}
                    onChange={() =>{
                        this.setState({
                            isOpen : false
                        })
                        this.forceUpdate();
                    }}
                />
            </div>
        )
    }
}