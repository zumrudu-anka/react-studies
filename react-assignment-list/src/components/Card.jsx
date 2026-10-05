/**
*   Created By Osman DURDAG
*/

import { Component } from 'react'
import Strings from "../lang/lang";
import Shared from '../config/Shared';
// import briefingIcon from "../assets/img/briefing.png";

export default class Card extends Component {

    returnSkillContent(skillOne, skillTwo){
        return(
            <>
                <div className="skills">
                    <span className="Name">{skillOne}</span>
                    <div className="percent">
                        <div className="progress" style={{
                            width: this.props.person.skills[`${skillOne}`]
                        }}></div>
                    </div>
                    <span className="Value">{this.props.person.skills[`${skillOne}`]}</span>
                </div>
                <div className="skills">
                    <span className="Name">{skillTwo}</span>
                    <div className="percent">
                        <div className="progress" style={{
                            width: this.props.person.skills[`${skillTwo}`]
                        }}></div>
                    </div>
                    <span className="Value">{this.props.person.skills[`${skillTwo}`]}</span>
                </div>
            </>
        );
    }
    
    chooseFirstTwoSkills(){
        if("creativity" in this.props.person.skills){
            return this.returnSkillContent("creativity", "design");
        }
        else if("react" in this.props.person.skills){
            return this.returnSkillContent("react", "design");
        }
        else if("cpp" in this.props.person.skills){
            return this.returnSkillContent("cpp", "android");
        }
    }

    render() {
        return (
            <div className="card">
                <div className="face face1" style={{
                    "--face-color" : `var(${this.props.background})`,
                    "--face-hover-color" : `var(${this.props.backgroundHover})`
                }}>
                    <div className="content">
                        <h2>{this.props.person.name} {this.props.person.surname}</h2>
                        <h4>{this.props.person.begin_date} - {this.props.person.end_date}</h4>
                        <h4>{this.props.person.begin_time}</h4>
                        <h4>{this.props.person.phone}</h4>
                        <h4>{this.props.person[`${Shared.lang}Content`].status}</h4>
                        <h4>
                            {this.props.person[`${Shared.lang}Content`].comment}
                        </h4>
                    </div>
                </div>
                <div className="face face2" style={{
                    "--face-hover-color" : `var(${this.props.backgroundHover})`
                }}>
                    <div className="content">
                        {/* <h2>
                            <span>Skills</span>
                            <a onClick = {() => {
                                this.props.modalToggle();
                            }}>
                                <img src={briefingIcon}></img>
                            </a>
                        </h2> */}
                        <h2>
                            Skills
                        </h2>
                        {
                            this.chooseFirstTwoSkills()
                        }
                        <div className="skills">
                            <span className="Name">{Strings.communication}</span>
                            <div className="percent">
                                <div className="progress" style={{
                                    width: this.props.person.skills.communication
                                }}></div>
                            </div>
                            <span className="Value">{this.props.person.skills.communication}</span>
                        </div>
                        <div className="skills">
                            <span className="Name">{Strings.teamwork}</span>
                            <div className="percent">
                                <div className="progress" style={{
                                    width: this.props.person.skills.teamwork
                                }}></div>
                            </div>
                            <span className="Value">{this.props.person.skills.teamwork}</span>
                        </div>
                        <div className="skills">
                            <span className="Name">{Strings.experience}</span>
                            <div className="percent">
                                <div className="progress" style={{
                                    width: this.props.person.skills.experience
                                }}></div>
                            </div>
                            <span className="Value">{this.props.person.skills.experience}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
