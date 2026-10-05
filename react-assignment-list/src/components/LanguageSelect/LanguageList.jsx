/**
*   Created By Osman DURDAG
*/

import { Component } from 'react';
import Shared from "../../config/Shared";
import Strings from "../../lang/lang";
import { flags } from '../../assets/images/flags';

export default class LanguageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: Shared.langlist,
        }
    }

    setLanguage(lang) {
        Strings.setLanguage(lang);
        Shared.setState({lang});
        sessionStorage.setItem("lang", lang);
    };
    
    render() {
        let {options} = this.state;
        return (
            this.props.isOpen ? 
            <div
                className={"language-list"}
                >
                {
                    options.map((item, index) => {
                        return <img
                            key={`langSelect${index}`}
                            src={flags[`${item.label}`]}
                            alt={item.label + "notLoaded"}
                            className={`${item.value}Lang`}
                            value={item.value}
                            onClick={(event)=>{
                                let value = event.target.attributes.value.value;
                                value === null ? this.setLanguage(Shared.lang) : this.setLanguage(value);
                                this.props.onChange();
                            }}
                        />
                    })
                }
            </div> : 
            <></>
        )
    }
}
